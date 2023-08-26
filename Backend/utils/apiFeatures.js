class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    // REMOVING THE FIELDS
    const removingField = ["keyword", "page", "limit"];
    removingField.forEach((key) => delete queryCopy[key]);
    // FILTER FOR PRICE AND RATING
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }
  pagination(rpp) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = rpp * (currentPage - 1);
    this.query = this.query.limit(rpp).skip(skip);
    return this;
  }
}

module.exports = ApiFeatures;

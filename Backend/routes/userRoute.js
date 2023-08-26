const express = require("express");
const {
  registerUser,
  loginUser,
  logOut,
  forgetPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  updateProfileAndRole,
  deleteProfile,
} = require("../controllers/userController");

const { isAuthenticatedUser, authorizedRole } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgetPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/me").get(isAuthenticatedUser, getUserDetails);

router.route("/password/update").put(isAuthenticatedUser, updatePassword);

router.route("/me/update").put(isAuthenticatedUser, updateProfile);

router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizedRole("admin"), getAllUser);

router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizedRole("admin"), getUserDetails)
  .put(isAuthenticatedUser, authorizedRole("admin"), updateProfileAndRole)
  .delete(isAuthenticatedUser, authorizedRole("admin"), deleteProfile);

router.route("/logout").get(logOut);

module.exports = router;

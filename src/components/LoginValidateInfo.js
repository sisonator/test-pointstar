export default function validateInfo(values) {
  let errors = {};

  if (!values.username) {
    errors.username = "Username must be filled";
  }
  if (!values.password) {
    errors.password = "Password must be filled";
  }
  return errors;
}

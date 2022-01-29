function validate(name, email, password) {
  const errors = {};
  if (!name || name.length < 2 || name.length > 32) {
    errors.name = "Enter valid name";
  }
  if (!email) {
    errors.email = "Check Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = "Invalid email address";
  }
  //Password Errors
  if (!password || password.length < 6) {
    errors.password = "Check Password";
  }
  return errors;
}

export default validate;

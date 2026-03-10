export const validateEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

export const validatePassword = (password, minLength = 8) => {
  return password.length >= minLength;
};

export const validateRequired = (value) => {
  return value !== null && value !== undefined && value !== "";
};

export const loginValidation = (values) => {
  const errors = {};

  if (!validateRequired(values.email)) {
    errors.email = "Email is required";
  } else if (!validateEmail(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!validateRequired(values.password)) {
    errors.password = "Password is required";
  }

  return errors;
};

export const registerValidation = (values) => {
  const errors = {};

  if (!validateRequired(values.email)) {
    errors.email = "Email is required";
  } else if (!validateEmail(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!validateRequired(values.password)) {
    errors.password = "Password is required";
  } else if (!validatePassword(values.password)) {
    errors.password = "Password must be at least 8 characters";
  }

  if (!values.terms) {
    errors.terms = "You must agree to the terms";
  }

  return errors;
};

export const forgotPasswordValidation = (values) => {
  const errors = {};

  if (!validateRequired(values.email)) {
    errors.email = "Email is required";
  } else if (!validateEmail(values.email)) {
    errors.email = "Email is invalid";
  }

  return errors;
};

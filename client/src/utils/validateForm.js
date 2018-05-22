const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }
  if (!values.options || values.options.length<2) {
    errors.options = { _error: 'At least two options must be entered' };
  } else {
    const optionsArrayErrors = [];
    values.options.forEach((option, optionIndex) => {
      const optionErrors = {};
      if (!option || !option.name) {
        optionErrors.name = 'Required';
        optionsArrayErrors[optionIndex] = optionErrors;
      }
    });
    if (optionsArrayErrors.length) {
      errors.options = optionsArrayErrors;
    }
  }
  return errors;
};

export default validate;

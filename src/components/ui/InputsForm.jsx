import React from "react";
import PropTypes from "prop-types";

const InputsForm = ({
  labelTitle,
  type = "text",
  componentName,
  componentValue,
  handleInputChange,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={componentName} className="form-label">
        {labelTitle}
      </label>
      <input
        type={type}
        className="form-control"
        id={componentName}
        value={componentValue}
        name={componentName}
        onChange={handleInputChange}
        required
      />
    </div>
  );
};
InputsForm.propTypes = {
  labelTitle: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  componentName: PropTypes.string.isRequired,
  componentValue: PropTypes.any.isRequired,
};
export default InputsForm;

import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import validate from '../../utils/validateOption'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  </div>
);

class AddOptionForm extends Component {

  render() {


    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (

      <form onSubmit={handleSubmit}>
        <Field
          name="option"
          type="text"
          component={renderField}
          label="Add Option"

        />
        <div>
          <button className="btn waves-effect waves-light" type="submit" disabled={submitting}><i className="material-icons right">done</i>Save</button>
          <button className="btn right waves-effect waves-light lime" type="button" disabled={pristine || submitting} onClick={reset}>
            <i className="material-icons right">remove_circle_outline</i>
            Clear Values
        </button>
        </div>

      </form>

    );
  }
}

export default reduxForm({
  form: 'addOptionForm',
  validate

})(AddOptionForm)
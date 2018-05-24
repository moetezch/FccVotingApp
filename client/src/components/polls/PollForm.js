import React, { Component } from 'react'
import {reduxForm,Field,FieldArray} from 'redux-form'
import validate from '../../utils/validateForm'


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} style={{marginBottom:"5px"}} />
      <div className="red-text" style={{marginBottom:"20px"}}>
      {touched && error && <span>{error}</span>}
      </div>
    </div>
  </div>
);

const renderOptions = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul>
    <li>
      <button className="btn" type="button" onClick={() => fields.push({})}><i className="material-icons small">add</i> Add Options</button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((option, index) => (
      <li key={index}>
        <button
        className="btn red right"
          type="button"
          title="Remove Option"
          onClick={() => fields.remove(index)}
        >
        <i className="material-icons small">delete</i>
        </button>
        <h4>Option #{index + 1}</h4>
        <Field
          name={`${option}.name`}
          type="text"
          component={renderField}
          label="Option"
        />
      </li>
    ))}
  </ul>
);

class PollForm extends Component {

render() {
   const { handleSubmit, pristine, reset, submitting } = this.props;

    return (

      <form onSubmit={handleSubmit}>
      <Field
        name="title"
        type="text"
        component={renderField}
        label="Poll title"
        
        
      />
      <FieldArray name="options" component={renderOptions} />
      <div>
        <button  className="btn waves-effect waves-light" type="submit" disabled={submitting}><i className="material-icons right">done</i>Save</button>
        <button className="btn right waves-effect waves-light lime" type="button" disabled={pristine || submitting} onClick={reset}>
        <i className="material-icons right">remove_circle_outline</i>
          Clear Values
        </button>
      </div>
    </form>
      

    );
  }
}
// function mapStateToProps(state){
//   //console.log(state.form.pollForm.values);
  
// return {formValues:state.form.pollForm.values}
// }

// PollForm= connect (mapStateToProps,submitPoll)(PollForm)

export default reduxForm({
  form:'pollForm',
  validate
})(PollForm)
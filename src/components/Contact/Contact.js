import React from 'react';
import { useForm } from "react-hook-form";

const Contact = () => {
  const { handleSubmit, register, errors, reset } = useForm();
  const onSubmit = values => {
    reset({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    }, {
      errors: true, // errors will not be reset 
      dirtyFields: true, // dirtyFields will not be reset
      isDirty: true, // dirty will not be reset
      isSubmitted: false,
      touched: false,
      isValid: false,
      submitCount: false,
    });
  };
  
  return (
      <div>
          <form onSubmit={handleSubmit(onSubmit)} >
            <h3 className="text-center mb-5">Contact</h3>
            <div className="row">
              <div className="col form-group">
              <label for="firstName">First Name*</label>
                <input type="text" name="firstName" className="form-control" placeholder="First name" ref={register({required: "Required"})}/>
                <p className="text-danger">{errors.firstName && errors.firstName.message}</p>
              </div>
              <div className="col form-group">
                <label for="lastName">Last Name</label>
                <input type="text" name="lastName" className="form-control" placeholder="Last name"/>
              </div>
            </div>
            <div className="row">
              <div className="col form-group">
                <label for="email">Email*</label>
                <input name="email" className="form-control" placeholder="Email"
                  ref={register({
                    required: "Please fill email address",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address"
                    }
                  })}
                />
                <p className="text-danger">{errors.email && errors.email.message}</p> 
              </div>
              <div className="col form-group">
                <label for="phone">Phone Number</label>
                <input type="text" name="phone" className="form-control" placeholder="Phone number"/>
              </div>
            </div>
            <div className="form-group">
              <label for="message">Message*</label>
              <textarea className="form-control" name="message" id="message" rows="3" ref={register({
                    required: "Please enter message"
                  })}></textarea>
                  <p className="text-danger">{errors.message && errors.message.message}</p> 
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>
    )
  
}

   
export default Contact;
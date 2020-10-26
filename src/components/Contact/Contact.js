import React from 'react';

class Contact extends React.Component {

  render() {
    return (
      <div>
          <form>
            <h3 className="text-center mb-5">Contact</h3>
            <div className="row">
              <div className="col form-group">
              <label for="firstName">First Name*</label>
                <input type="text" name="firstName" className="form-control" placeholder="First name"/>
              </div>
              <div className="col form-group">
                <label for="lastName">Last Name*</label>
                <input type="text" name="lastName" className="form-control" placeholder="Last name"/>
              </div>
            </div>
            <div className="row">
              <div className="col form-group">
                <label for="email">Email*</label>
                <input type="text" name="email" className="form-control" placeholder="Email"/>
              </div>
              <div className="col form-group">
                <label for="phone">Phone Number*</label>
                <input type="text" name="phone" className="form-control" placeholder="Phone number"/>
              </div>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea class="form-control" name="message" id="message" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
      </div>
    )
  }
}

   
export default Contact;
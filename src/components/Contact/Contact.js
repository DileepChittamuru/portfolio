import React from 'react';

class Contact extends React.Component {

  render() {
    return (
      <div>
          <form>
            <h3 className="text-center mb-5">Contact</h3>
            <div className="row">
              <div className="col form-group">
                <input type="text" className="form-control" placeholder="First name"/>
              </div>
              <div className="col form-group">
                <input type="text" className="form-control" placeholder="Last name"/>
              </div>
            </div>
            <div className="row">
              <div className="col form-group">
                <label for="exampleFormControlTextarea1">Email*</label>
                <input type="text" className="form-control" placeholder="Email"/>
              </div>
              <div className="col form-group">
                <label for="exampleFormControlTextarea1">Phone Number*</label>
                <input type="text" className="form-control" placeholder="Phone number"/>
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
      </div>
    )
  }
}

   
export default Contact;
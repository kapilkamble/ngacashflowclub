
import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';



class Form extends React.Component {
  state = {
    name: null,
    email: null,
}

_handleChange = e => {
  console.log({
      [`${e.target.name}`]: e.target.value,
  })
  this.setState({
      [`${e.target.name}`]: e.target.value,
  })
}

_handleSubmit = e => {
  e.preventDefault()

  console.log('submit', this.state)

  addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
          console.log('msg', `${result}: ${msg}`)

          if (result !== 'success') {
              throw msg
          }
          alert(msg)
      })
      .catch(err => {
          console.log('err', err)
          alert(err)
      })
}
  
  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="row">
          <div className="col-6 col-12-mobile">
            <input 
              type="text"
              onChange={this._handleChange} 
              name="name" 
              placeholder="Name" 
            />
          </div>
          <div className="col-6 col-12-mobile">
            <input 
              type="text" 
              onChange={this._handleChange}
              name="email" 
              placeholder="Email" 
            />
          </div>
          <div className="col-12">
            <input type="submit" value="Submit" />
          </div>
        </div>
    </form>
    );
  }
}

export default Form;

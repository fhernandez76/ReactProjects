import React, { Component } from 'react'

class Login extends Component {
    render() {
      return (
        <div className="container">
          <form className="form">
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Login</span>
                </div>
                <input type="text" className="form-control" aria-label="Enter your login name" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <span className="input-group-text">Password</span>
                </div>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="acceptTermsCheck" />
                <label className="form-check-label" for="acceptTermsCheck">Accept terms and conditions</label>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      )
    }
}

export default Login;
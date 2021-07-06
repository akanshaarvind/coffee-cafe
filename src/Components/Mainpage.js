import React, { Component } from 'react'


import './Mainpage.css'
import 'D:/coffee/node_modules/bootstrap/dist/css/bootstrap.min.css'

export class Mainpage extends Component {
    render() {
        return (
            <div>
                <div className="main_page">
                    <img src="../coffee2.jpg" alt='coffee' />
                    <figcaption>
                        Enjoy your coffee with us...

                        <div class="container"><h2>Register</h2>
		<div className="reg"><p className="s2">Register here and grab the best deals and *20% discount* on every order.</p></div>
		

		<form role="form" className="form-horizontal">
			<div className="form-group">
			<label className="col-sm-2">Username</label>
			<div className="col-sm-6"><input type="text" name="" class="form-control" placeholder="Enter your name" required /></div>
			</div>
			<div className="form-group">
			<label className="col-sm-2">Email</label>
			<div className="col-sm-6"><input type="text" name="" class="form-control" placeholder="Enter your Email" required /></div>
			</div>
            <div className="form-group">
			<label className="col-sm-2">Password</label>
			<div className="col-sm-6"><input type="text" name="" class="form-control" placeholder="Enter your password" required /></div>
			</div>
	
			<div className="form-group">
		<div className="col-sm-offset-2 col-sm-1"><div className="btn btn-danger btn-md ">Submit</div></div>
	</div>
		</form>
	</div>
                    </figcaption>
					
             </div>
            </div>
        )
    }
}

export default Mainpage

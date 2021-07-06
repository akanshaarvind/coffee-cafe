import React, { Component } from 'react'
import './Navbar.css'
import 'D:/coffee/node_modules/bootstrap/dist/css/bootstrap.min.css'

export class Navbar extends Component {
    render() {
        return (
         
     <div className="nav_head">
       <nav class="navbar   ">
  <a class="navbar-brand" href="/order.js">Cafe_deals</a>
  <a class="navbar-brand" href="#">Online_order</a>
  <a className="/eshop">E-shop</a>
  <a class="navbar-brand" href="#">About Us</a>
  {/* <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form> */}
</nav>
         

    </div>
        )
    }
}

export default Navbar

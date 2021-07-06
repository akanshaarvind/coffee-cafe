import React, { Component } from 'react'
import './Footer.css'
export class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
     <div id="footer">
       <div id="inner-footer">
         <ul>
         </ul>
       </div>
    <div class="footer-content" >
      <h3>Coffe House</h3>
      <ul class="socials">
        <li><a href="image practise.html">Cafe_DEals</a></li>
        <li><a href="ip about.html">Online_order</a></li>
        <li><a href="ip gallery.html">E_shop</a></li>
        <li><a href="ip about.html">About Us</a></li>
        {/* <li><a href="ip signup.html">SignUp</a></li> */}
      </ul>
    </div>
    <div class="footer-bottom">
      <p>copyright &copy;2021 Coffee House. designed by <span>Akansha</span></p>
    </div>
     </div>
   </footer>
            </div>
        )
    }
}

export default Footer

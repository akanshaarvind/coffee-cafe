import React, { useState}  from 'react'
// import { Container } from 'react-bootstrap'
import './Home.css'
import {  Route  , useHistory} from 'react-router-dom';
// import { BrowserRouter, Route  } from 'react-router-dom';
import Order from '../Components/Order';
import 'D:/coffee/node_modules/bootstrap/dist/css/bootstrap.min.css'

  function Home() {
    const [state,setState]=useState();
    const history = useHistory();
    const thisIsRedirect = ()=> {
      // <Route path="/order" component={ Order }/>
      history.push('/order');
    }
     

        return (
            <div className="main_home"> 
              <div className="mainhome_heading"> <marquee type='alternate'><h1 >Order coffee now!!           Register and get 20% off on every order</h1></marquee> </div> 
                <div className="order_img"> 
                <div className="row ">
                  <div className="col-md-4">
                  <div className="card shadow" >
                    <div className="inner">
                   <img src="../s3.jpg" class="card-img-top" alt="..." />
                    </div>
                        
                        <div class="card-body text center">
                         <h5 class="card-title">Black Coffee</h5>
                        <p className="price">Price: $2</p>
                        
                         <button class="btn btn-success" onClick={thisIsRedirect}>Order Now</button>
                       </div>
</div>
                  </div>
                  <div className="col-md-4"> 
                     <div className="card shadow" >
                       <div className="inner">
                       <img src="../s4.jpg" class="card-img-top" alt="..." />
                         </div>
                       
                        <div class="card-body text center">
                         <h5 class="card-title">Cold Coffee</h5>
                         <p className="price">Price: $4</p>
                        
                         <button class="btn btn-success" onClick={thisIsRedirect}>Order Now</button>
                      </div>
</div>
</div>
           <  div className="col-md-4"> 
                     <div className="card shadow" >
                       <div className="inner">
                         <img src="../s1.jpg" class="card-img-top" alt="..." />
                       </div>
                        
                        <div class="card-body text center">
                         <h5 class="card-title">Cappuccino Coffee</h5>
                         <p className="price">Price: $8</p>
                         <button class="btn btn-success" onClick={thisIsRedirect}>Order Now</button>
                       </div>
</div>
</div>            
                </div>
                </div>

          
            </div>
        )
    }

export default Home

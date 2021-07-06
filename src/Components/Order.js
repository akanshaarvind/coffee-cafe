import React, { Component, useState } from 'react'
import {  Router, Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import Navbar from './Navbar'
import './Order.css'


import 'D:/coffee/node_modules/bootstrap/dist/css/bootstrap.min.css'

const Order = () => {
    const [num, setNum] = useState(0);
    const incNum = () => {
        setNum(num + 1);
    }


    let product = [{
        image: 's3.jpg',
        name: 'Black Coffee',
        price: '2'
    }, {
        image: 's4.jpg',
        name: 'Cold Coffee',
        price: '4'
    }, {
        image: 's1.jpg',
        name: 'Cappuccino Coffee',
        price: '8'
    }
    ]
    let hrf = window.location.href.split('/')
    let id = hrf[hrf.length - 1] - 1

    let productImg = '../'+ product[id].image;
    let productName = product[id].name;
    let productPrice = product[id].price;

    const decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
        else {
            alert('Sorry, Zero limit reached...!!!')
            setNum(0);
        }
    }
    return (
        <div >
            <div>
                <Navbar />
            </div>
            <div className="order_content">
                <marquee type="alternate"><h1>Order now</h1></marquee>
            </div>
            <div className="order_cart">
                <img src="cart.jpg" />

            </div>

            <div className="item">
                <div class="card">
                    <div class="row">
                        <div class="col-md-12 cart">
                            <div class="title">
                                <div class="row">
                                    <div class="col">
                                        <h4><b>Shopping Cart</b></h4>
                                    </div>
                                    <div class="col align-self-center text-right text-muted">1 items</div>
                                </div>
                            </div>
                            <div class="row border-top border-bottom">
                                <div class="row main align-items-center">
                                    <div class="col-10"><img className="img-fluid" src={productImg} /></div>
                                    <div class="col">
                                        {/* <div class="row text-muted">Coffee</div> */}
                                        <div class="row" >{productName}</div>
                                    </div>
                                    <div class="col-sm-2"> <button type="button" class="btn btn-success" onClick={incNum}>+</button><a href="#" class="border">{num}</a><button type="button" class="btn btn-success" onClick={decNum}>-</button> </div>
                                    <div class="col-md-2">&euro; {productPrice * num} <span class="close">&#10005;</span></div>
                                </div>
                            </div>


                            <div class="back-to-shop"><Link to="/">&#8592;</Link><span class="text-muted">Back to shop</span></div>
                        </div>

                    </div>
                </div>
                <div class="card">
                    <div class="row">

                        <div class="col-md-12 summary">
                            <div>
                                <h5><b>Summary</b></h5>
                            </div>
                            <hr />

                            <form>
                                <p>SHIPPING</p> <select>
                                    <option class="text-muted">Standard-Delivery- &euro;5.00</option>
                                </select>
                                <p>GIVE CODE</p> <input id="code" placeholder="Enter your code" />
                            </form>
                            <div class="row" >
                                {/* style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;" */}
                                <div class="col">TOTAL PRICE</div>
                                <div class="col text-right">&euro; 137.00</div>
                            </div> <button class="btn">CHECKOUT</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Order

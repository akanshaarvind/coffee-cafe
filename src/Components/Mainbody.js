import React, { Component } from 'react'
import Mainpage from './Mainpage'
import Navbar from './Navbar'
import Home from './Home'
import { Footer } from './Footer'

export class Mainbody extends Component {
    render() {
        return (
            <div>
                <Mainpage />
                <Navbar />
                <Home />
                <Footer />
            </div>
        )
    }
}

export default Mainbody

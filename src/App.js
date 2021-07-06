
import './App.css';
import {  Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import Mainbody from './Components/Mainbody';
import Order from './Components/Order';
// import { Router,   } from 'react-router';



function App() {
  return (
   <BrowserRouter>
  
   <Switch>
    
     <Route path ='/order' component={Order} /> 
     <Route path='/' component={Mainbody} />
     {/* <Route path='/eshop' component={Eshop} /> */}
   </Switch>

   
    </BrowserRouter>
    
  );
}

export default App;

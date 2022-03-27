 import React ,{useState}from "react";
 import Main from './e-commerce/main';
import MyCart from './e-commerce/components/MyCart'
import ItemDetails from "./e-commerce/components/ItemDetails";
import Nav from './e-commerce/components/Nav'
 import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
function App(props){
  const [count,setCount]=useState(0);
  const [product,setProduct]=useState([]);
   const value=(f)=>{
    setCount(count+f);
  }
  const contents=(products)=>{
    setProduct(products);
  }
  return ( 
    <div>
      <Router>
        
        <Switch>
        <Route path='/mycart' component={()=><MyCart product={product} count={count}/>}/>
        <Route path='/itemDetails' component={ItemDetails}  /> 
        
        <Route    path='/' component={()=><Main value={value} product={contents} count={count} />}/>
        </Switch>
            
            </Router>
    </div>
            
              
  )}
  
    

export default App;
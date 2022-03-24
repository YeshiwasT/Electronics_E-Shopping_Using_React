import React, { Component } from 'react';
import Nav from './components/Nav';
import LiftUp from './components/LiftUp';
import A21 from "D:/web courses/react-course/practice/src/e-commerce/e-comerce-image/samsungA21s.jpg"
import A31 from "D:/web courses/react-course/practice/src/e-commerce/e-comerce-image/samsung A31.jpg"
import iphone11 from "D:/web courses/react-course/practice/src/e-commerce/e-comerce-image/iphone-11.jpg"
import iphone12 from "D:/web courses/react-course/practice/src/e-commerce/e-comerce-image/iPhone-12-banner.png"
const Content =[
    {catagory:'phone',name:'Samsung A21',pay:"$100",image:A21,isSelected:false},
    {catagory:'phone',name:'Samsung A31',pay:"$130",image:A31,isSelected:false},
    {catagory:'phone',name:'iphone 11',pay:"$150",image:iphone11,isSelected:false},
    {catagory:'phone',name:'iphone 12',pay:"$180",image:iphone12,isSelected:false},
    {catagory:'phone',name:'Samsung A21',pay:"$100",image:A21,isSelected:false},
    {catagory:'phone',name:'Samsung A31',pay:"$130",image:A31 ,isSelected:false},
    {catagory:'phone',name:'iphone 11',pay:"$150",image:iphone11,isSelected:false},
    {catagory:'phone',name:'iphone 12',pay:"$180",image:iphone12,isSelected:false},
    {catagory:'phone',name:'Samsung A21',pay:"$100",image:A21,isSelected:false},
    {catagory:'phone',name:'Samsung A31',pay:"$130",image:A31,isSelected:false},
    {catagory:'phone',name:'iphone 11',pay:"$150",image:iphone11,isSelected:false},
    {catagory:'phone',name:'iphone 12',pay:"$180",image:iphone12,isSelected:false},
    {catagory:'phone',name:'Samsung A21',pay:"$100",image:A21,isSelected:false},
    {catagory:'phone',name:'Samsung A31',pay:"$130",image:A31,isSelected:false},
    {catagory:'phone',name:'iphone 11',pay:"$150",image:iphone11,isSelected:false},
    {catagory:'phone',name:'iphone 12',pay:"$180",image:iphone12,isSelected:false},
    {catagory:'phone',name:'Samsung A21',pay:"$100",image:A21,isSelected:false},
    {catagory:'phone',name:'Samsung A31',pay:"$130",image:A31,isSelected:false},
    {catagory:'phone',name:'iphone 11',pay:"$150",image:iphone11,isSelected:false},
    {catagory:'phone',name:'iphone 12',pay:"$180",image:iphone12,isSelected:false}
] ;

class Main extends Component {
    

     constructor(props) {
         super(props);
         this.state = { 
             count:0,
             
          };
          this.countHandler=this.countHandler.bind(this)
     }
     countHandler(c){
      this.setState({count:this.state.count+c})
     }
  
      
    render() {
        
        
            const product=Content;
            if(product){
                
            var content = product.map((element,index)=>
           
<div className='forinline' key={index}>
    <LiftUp products={element}   countHandler={this.countHandler} value={this.props.value} product={this.props.product}/></div>
             
            
            
          );}else{
               content=console.log(' this is not working have no products')     }
     
         
         
      
        return (
            <>
             <Nav productCount={this.props.count}/>
           <div>
                <h1>Our Products</h1>
                    {content}
           </div>
            </>
           
                
                 
            
          
        );
    }
}

export default Main;

import React from "react";

export default class Card extends React.Component{
  render(){
    const {img,title,joke,acteur} = this.props
   return( 
 <div className="card  h-100" style={{width:"18rem"}}>
         <img src={img} className="card-img-top" alt="..." style={{width : "18rem"}}/>
    <div className="card-body">
         <h5 className="card-title">{title}</h5>
         <p className="card-text">{ acteur}</p>
         <a href="#" className="btn btn-warning">{joke}</a>
    </div>
 </div>
  )
}
}
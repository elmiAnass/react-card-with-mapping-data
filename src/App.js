import React from "react";
import "./style.css";
import  Card from "./Card"
import Data from "./Data"

export default function App() { 
const Element = Data.map((Joke)=>
{
  return( 
<div className="col-3">
     <Card img={Joke.img} title={Joke.title} acteur ={Joke.acteur} joke ={Joke.joke}  />
</div>
  ) 
}
)
  return (
<div className="row row-cols-1 row-cols-md-3 g-4">
    {Element}
    </div>
 );

}


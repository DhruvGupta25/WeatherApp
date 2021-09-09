import React from 'react';
const Image=(props)=>{
   const Style={
     display: `${props.Display}`
   };
    return(
    <div className="img">
     <img className="image" src={props.Imageurl} alt="imag" style={Style} />
    </div>
)
}
export default Image;
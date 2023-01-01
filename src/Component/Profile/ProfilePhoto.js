import React from "react";
import photoImg from "../Profile/fbb.png"
 
   const Pic = () => {
    return (
      <div>
      <h1 className="P_title">Profile picture :</h1>
        <img className="P_img" src={photoImg} alt ='0' />
      </div>
    );
   };
   export  {Pic};
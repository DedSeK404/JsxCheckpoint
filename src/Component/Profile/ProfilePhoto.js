import React from "react";
import photo from "../Profile/PHOTO.jpg"
 
   const Picture = () => {
    return (
      <div>
      <h1>Profile picture :</h1>
        <img className="P_img" src={photo} alt ='0' />
      </div>
    );
   };
   export  {Picture};
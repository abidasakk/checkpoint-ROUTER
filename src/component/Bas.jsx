import React from "react";
import { useState } from "react";



function Bas(){
  const [news,setnews]=useState([{        
    img:<img src="movie1.jpg" alt=""className="im"/>,
    titre:<h1 className="title">film1</h1>,
    detail:<h2 className="detail ">2018</h2>
  
 },
 {        
   img:<img src="movie2.jpg" alt="" className="im imm" />,
   titre: <h1 className="title titles">film2</h1> ,
   detail: <h2 className="detail details">2001</h2>
 
 },
 {        
   img:<img src="movie3.jpg" alt="" className="im imm" />,
   titre:<h1 className="title titles"> film3</h1>,
   detail:<h2 className="detail details">2014</h2>
 
 },
 {        
   img:<img src="movie4.jpg" alt="" className="im imm" />,
   titre:<h1 className="title titles">film4</h1>,
   detail:<h2 className="detail details">2016</h2>
 
 }
 ]);

return(

<>
    <div className="bas">
         <div className="cathegorie">
         <div className="genre">Genre and type</div>
         <div className="trais"></div>
         <div className="actions">action</div>
         <div className="series">serie</div>
         </div>
         <div className="disposition" >           
              <div className="movie">{news.map(elt=>{return elt.img })} </div>
              <h1 className="informations">{news.map(elt=>{return elt.titre })} </h1>
              <h1 className="informations">{news.map(elt=>{return elt.detail })} </h1>
         </div>
    </div>
</>

)

}
export default Bas;
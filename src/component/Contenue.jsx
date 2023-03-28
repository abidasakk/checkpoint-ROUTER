import React from 'react'
import Corps from './Corps'
import { useState } from 'react'

function Contenue(){
          const [news,setnews]=useState([{ 
            id:0,       
            img:<img src="movie1.jpg" className="tailleimage" alt=""/>,
            titre:"film1",
            detail:<h2 className="tailletexte">2018</h2>
          
         },
         {        
           id:1,
           img:<img src="movie2.jpg" alt="" className="tailleimage" />,
           titre:"film2",
           detail: <h2 className="tailletexte">2001</h2>
         
         },
         { id:2,      
           img:<img src="movie3.jpg" alt="" className="tailleimage"/>,
           titre:"film3",
           detail:<h2 className="tailletexte">2014</h2>
         
         },
         { id:3,       
           img:<img src="movie4.jpg" alt="" className="tailleimage"/>,
           titre:"film4",
           detail:<h2 className="tailletexte" >2016</h2>
         
         }
         ]);
         let [choix,setchoix]=useState("")
         let change=(e)=>{setchoix( e.target.value)}
  return ( 
 <>
   <div className='entete'>
   
      <div className='barremenu'>
        <div>
      <div><img src="netflix-logo-png-2562 1.png" alt="" className='netflix' /></div>
        </div>

        <div className='nommenu'>
      <div> <h1 className='serie'>Serie</h1></div>
      <div><h1 className='movies'>Movies</h1></div>
      <div><h1 className='box'>Box Office</h1></div>
      <div><h1 className='local'>Local</h1></div>
        </div>


        <div className='recherche'>
        <input type="search" placeholder='Recherchez un Film'  className='caserecherche' onChange={change}/>
         <div className='barrerecherche'></div>
        </div>
      <div> <img src="unsplash_3TLl_97HNJo.png" alt="" className='profile' /></div>
        
      </div>

      <div className='retour'>
          Back to homepage
      </div>
   </div>
   <Corps/>

   
   <div className="bas">
         <div className="cathegorie">
         <div className="genre">Genre and type</div>
         <div className="trais"></div>
         <div className="actions">action</div>
         <div className="series">serie</div>
         </div>
         <div className="disposition" >           
              
{news.filter((elet)=>{return elet.titre.includes(choix)}).map(elet=>{return (
<div className="movie">
  <div>{elet.img} </div>
  <h1 className='tailletexte'>{elet.titre}</h1>
  <h1 className='tailletexte'>{elet.detail} </h1>
        </div> 
 
 
 )}  ) } 
          

         </div>
    </div>


 </>
)
}
export default Contenue;
import React from 'react'

function Menu(){
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
        <input type="search" placeholder='Recherchez un Film'  className='caserecherche'/> 
         <div className='barrerecherche'></div>
        </div>

        
      <div> <img src="unsplash_3TLl_97HNJo.png" alt="" className='profile' /></div>
        
      </div>

      <div className='retour'>
          Back to homepage
      </div>
   </div>

 </>
)
}
export default Menu;
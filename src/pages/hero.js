import React from 'react'
import AIimage from '../pages/ai-1.png';


const Hero = () => {
  return (
    <section id='home' style={{height:'90vh'}}>
        {/* <div className="div" style={{backgroundImage:'frame-34@2x.png'}}> */}
        
        <div className='div'>
          <div className='ai'>
            <img src={AIimage} ></img>
          </div>
        
      <div className='float' style={{marginLeft:'10vw'}} >
        <div className="unlocking-thel" style={{fontSize:'2.1rem',marginleft:'10vw', margintop:'30vh'}}>
          <div style={{height:'30vh'}}></div>
          Unlocking the Potential of Intelligent Technology
          <div> 
            <div style={{height:'20px'}}></div>
              Ignite Your Business with Unparalleled AI-Powered Transformation and
          Data - Driven Excellence</div>
          <a href='#services'><div className="get-started"  >Get started
   
        </div></a>   

       
       
        </div>
      </div>
      
      {/* <div className='divrating-area'>
        <h2 className="based-on-10000">Based on 10,000+ reviews on</h2>
        
      </div>
     */}
      <div className="divrating-area" >
        
      <b className="based-on-10000">Based on 10,000+ reviews on</b>
         <div className="divrating">
          <div className="starsvg">
            <img className="starsvg-icon" alt="" src="/starsvg.svg" />
          </div>
          <div className="starsvg">
            <img className="starsvg-icon" alt="" src="/starsvg.svg" />
          </div>
          <div className="starsvg">
            <img className="starsvg-icon" alt="" src="/starsvg.svg" />
          </div>
          <div className="starsvg">
            <img className="starsvg-icon" alt="" src="/starsvg.svg" />
          </div>
          <div className="starsvg">
            <img className="starsvg-icon" alt="" src="/starsvg.svg" />
          </div>
        </div> 
        
        <div className="ratings">
          <img
            src="https://file.rendit.io/n/0au2vDAUInXOZvraQlYA.png"
            className="ratings-icon"
          />
          <img
            src="https://file.rendit.io/n/uakR6h9RWpH5yJD2T7TP.png"
            className="ratings-icon"
          />
          <img
            src="https://file.rendit.io/n/JJB6Fw7gGdbXuyCjxNx3.png"
            className="ratings-icon"
          />
          <img
            src="https://file.rendit.io/n/ecmmhdRBS0iHRpRAUrze.png"
            className="ratings-icon"
          />
          </div>

      </div>
       
      <div className="horixontal-logo-1" />
      <div className="child" />
     

      </div>
    
    </section>
  )
}

export default Hero
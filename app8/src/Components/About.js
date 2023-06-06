//import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../style.css'


const About =() =>{
  const navigate = useNavigate();
    return(
        <div className="board2">
             
             <div className="board">
             <section>
                <h1>WHO WE ARE</h1>
                <p>We are company dedicated to bring solution regarding estate and properties 
                    very close to you.We leverage  state- of- the-art Technologies to remove the hurdles  
                    between owners that are ready to sell and prospective buyers that are ready to pay.
                </p>

              </section>        
             
             <section>
                <h1>WHAT WE DO</h1>
                <p>We offer platform for real time change of ownership of estate and properties without hassle.
                    we are also into consultancy estate evaluation and building services.
                </p>
             </section>
             <section>
                <h1>WHAT WE STAND FOR</h1>
                <p>we stand for Integrity,Truthfulness and Equity. </p>
             </section>
             </div>
             <div><button className="btn-2" onClick={()=>navigate('/',{replace:true})}>GobackHome</button></div>
             
        </div>
       
    )
}
export default About;
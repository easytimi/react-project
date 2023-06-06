import '../style.css'
import naira from '../assets/naira.png'
import {Link} from 'react-router-dom';
//import {Button} from 'react-bootstrap'

const FlatCard= ({flat}) =>{
    return(
        <div >
           <div key={flat.id} className="card">
           <img src={flat.front} alt="buiding pix"/>
           <h1>{flat.title}</h1>
           <div className="pricing">
            <h3>Price:</h3>
             <img src={naira} alt="naira logo" style={{height:"30px",width:"30px"}}/>
            <h3>{flat.price}</h3>
            </div>
            <h3>Location:{flat.location}</h3>
           
           <button className="btn"  ><div><Link to={`/${flat.id}`}>Learn more</Link> </div></button>
           </div>

        </div>
    )
};

export default FlatCard;
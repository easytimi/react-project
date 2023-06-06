import React from 'react';
import  '../style.css';
import {Link} from 'react-router-dom'; 
import '../style.css';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {handleFilter} from '../feature/flatSlice'
import   FlatCard from './flatCard';


const NavBar= () =>{
   const [data, setData] = useState("");
   const dispatch =useDispatch()
   const handleSubmit = (data) =>{
      return(
         dispatch(handleFilter(data))
    
      )
      

   };
   const handleChange = (e)=>{
      e.preventDefault();
      const name=e.target.value;
      setData(name);
   }
   return(
    <div>
         <ul className="head">
        <li>logo</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>
        <div>
      <form className="search" onChange={handleChange}>
         <select>
            <option>select option</option>
            <option>LEKKI</option>
            <option>AJAH</option>
            <option>IKOYI</option>
            <option>VICTORIA ISLAND</option>
            <option>IKEJA</option>
         </select>
         <div><input name="search" value="search" onClick={()=>handleSubmit(data)}/></div>
      </form>
    </div>
        </li>
        
             
         </ul>
    
    </div>
   )
}

export default NavBar;
//import React from 'react';
import {useSelector} from 'react-redux';
import FlatCard from './flatCard';
import '../style.css'


const Home = ()=>{
    const flats = useSelector(state=>state.flat.flatItems);
    return(
        <div className="box">
             <div>welcome Home</div>
             <div className="container">{flats.map((flat,key)=>(<FlatCard key={flat.id} flat={flat}/>))}</div>
        </div>
        
    )
}
export default Home;
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Detail from './detail'
import {useNavigate} from 'react-router-dom';


const FlatDetail = () =>{
    const flats = useSelector((state)=> state.flat.flatItems)
    const params=useParams();
    const data= params.id;
    const c= Number(data);
    console.log(c); 
    const navigate=useNavigate();
    const handleClick=()=>{
        
            navigate('/',{replace:true});
         };
    const handleNavigate=()=>{
        
         navigate('/form',{replace:true});
       };
    

    return(
        <div>
            <h1>VIEW OF THE INTERIOR APARTMENTS</h1>
            <div>{flats.map(flat=>{
                if(flat.id===c)
                {
                   //console.log(flat);
                  
                    return( <Detail flat={flat}/>) 
                }
            })}</div>
            <div className="btn-2">
                <button onClick={handleClick}>go back home</button>
                <button onClick={handleNavigate}>interested?click me</button>
            </div>

        </div>
    )
};

export default FlatDetail;
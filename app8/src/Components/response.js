import {useNavigate} from 'react-router-dom';



const Response= () =>{
    const navigate= useNavigate();
    const handleClick= () =>{
        navigate('/',{replace:true})
    }
    return(
        <div>
            <h1>Thanks for contacting us.</h1>
            <h1>Our Customer care unit will get in touch with you </h1>
            <div><button onClick={handleClick}>Go back home</button></div>
        </div>
    )
}

export default Response;
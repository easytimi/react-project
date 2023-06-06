import '../style.css';
import{useNavigate} from 'react-router-dom';
import{useState} from 'react';


const FormDetail= () =>{
    const navigate= useNavigate();
    const handleClick= () =>{
        navigate('/response',{replace:true})
    }
    const [form,setForm]=useState("");
    const handleChange=(e)=>{
     const    name =e.target.value;
     setForm(name)
    }
    return(
        <div >
            <div>
                <h1>Kindly fill the form below and submit</h1>
            <div className="paper">
                <form>
                    <label>Surname:</label><br/>
                    <input type="text" name="surname"  onChange={handleChange}></input><br/><br/>
                    <label>FirstName:</label><br/>
                    <input type="text" name="FirstName" onChange={handleChange}></input><br/><br/>
                    <label className="lab">Phone Number:</label><br/>
                    <input type="number" name="Phone No"  onChange={handleChange}></input><br/><br/>
                    <label>Email:</label><br/>
                    <input type="text" name="Email"   onChange={handleChange}></input><br/>
                    <br/>
                    <input onClick={handleClick} className= "sub"type="submit" value="submit"/>


                </form>
            </div>
            </div>
           
        </div>
    )
}
export default FormDetail;
import { Navigation } from '@mui/icons-material';
import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import './CreateCustomer.css';

const CreateCustomerScreen =()=> {

    const [login , setLogin]= useState("");
    const [password, setPassword]=useState("");
    const [isNewUser, setIsNewUser]=useState(true);
    const [role, setRole]=useState("customer");
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [uniqueIdentifier, setUniqueIdentifier]=useState("");
    const [email, setEmail]=useState("");
    const [birthday, setBirthday]=useState(1);
    const [birthMonth, setBirthMonth]=useState("");
    const [birthYear, setBithYear]=useState(1000);
    const [street, setStreet]=useState("");
    const [city, setCity]=ustState("");
    const [state, setState]=useState("");
    const [areaCode, setAreaCode]=useState("");

    const dispatch= useDispatch();
    const addUsers= (user)=>{dispatch(addUser(user))
                                navigate.push("/")}


   return(
    <div className="create-container">
     
        <div className="create-header">
            <h1 className="customer-title">Hello </h1>
        </div>
            <div className="create-body">
            <div className='create-items'>
                <label className='input-label'>Personal Account Number:</label>
                <input type="text" placeholder="Enter Name" className='create-inputs' // onChange={(ev) => {setUsername(ev.target.value);}}
                />
              </div>
            <div className='create-items'>
                <label className='input-label'>Role:</label>
                <input type="text" placeholder="Enter Name" className='create-inputs' // onChange={(ev) => {setUsername(ev.target.value);}}
                />
            
                <label className='input-label'>New Customer:</label>
                <input type="text" placeholder="Enter Name" className='create-inputs' // onChange={(ev) => {setUsername(ev.target.value);}}
                />
              </div>
            <div className='create-items'>
                <label className='input-label'>Login Id:</label>
                <input type="text" placeholder="Enter Name" className='create-inputs' // onChange={(ev) => {setUsername(ev.target.value);}}
                />
            
                <label className='input-label'>Password:</label>
                <input type="text" placeholder="Enter Name" className='create-inputs' // onChange={(ev) => {setUsername(ev.target.value);}}
                />
              </div>
              <div className='create-items'>
                <label className='input-label'>First Name:</label>
                <input type="text" placeholder="Enter Name" className='create-inputs' // onChange={(ev) => {setUsername(ev.target.value);}}
                />
            
                <label className='input-label'>Last Name:</label>
                <input type="text" placeholder="Enter Name" className='create-inputs' // onChange={(ev) => {setUsername(ev.target.value);}}
                />
              </div>
              <div className='create-items'>
                <label className='input-label'>Email:</label>
                <input type="text" placeholder="Enter Name" className='create-inputs' // onChange={(ev) => {setUsername(ev.target.value);}}
                />
              </div>
              <div className='create-items'>
                <label className='input-label'>Street Address:</label>
                <input type="text" placeholder="Enter Name" className='create-inputs' // onChange={(ev) => {setUsername(ev.target.value);}}
                />
              </div>
              <div className='create-items'>
                <label className='input-label'>City:</label>
                <input type="text" placeholder="Enter Name" className='create-inputs' // onChange={(ev) => {setUsername(ev.target.value);}}
                />
             
                <label className='input-label'>State:</label>
                <input type="text" placeholder="Enter Name" className='create-inputs' // onChange={(ev) => {setUsername(ev.target.value);}}
                /> 
                </div>
              <div className='create-items'>             
                <label className='input-label'>Zipcode:</label>
                <input type="text" placeholder="Enter Name" className='create-inputs' // onChange={(ev) => {setUsername(ev.target.value);}}
                />
              </div>
              <div className='create-items'>             
                <label className='input-label'>Month:</label>
                <input type="number" placeholder="Enter Name" className='create-inputs' // onChange={(ev) => {setUsername(ev.target.value);}}
                />
                <label className='input-label'>Day:</label>
                <input type="number" placeholder="Enter Name" className='create-inputs' // onChange={(ev) => {setUsername(ev.target.value);}}
                />
                <label className='input-label'>Year:</label>
                <input type="numbert" placeholder="Enter Name" className='create-inputs' // onChange={(ev) => {setUsername(ev.target.value);}}
                />
               </div>
                <button className="submit-button">Create Customer</button>
            </div>
        
    </div>


  )
  }

export default CreateCustomerScreen;

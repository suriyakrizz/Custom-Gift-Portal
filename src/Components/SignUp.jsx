import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser , FaLock, FaTransgender, FaPhoneAlt} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function SignUp() {
  return (
    <div className = 'wrapper'>
        <form action = "">
            <h1>Signup</h1>
            <div className = "input-box">
                <input type = "text" placeholder = "Firstname" required/>
                <FaUser className='icon'/>
            </div>
            <div className = "input-box">
                <input type = "text" placeholder = "Lastname" required/>
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="text" placeholder="Email" required/>
                <MdEmail className='icon'/>
            </div>
            <div className = "input-box">
                <input type = "password" placeholder = "Password" required/>
                <FaLock className='icon'/>
                </div>            
                <div className="input-box">
                <input type="text" placeholder="Conform password" required/>
                <FaLock className='icon'/>
            </div>
            
            

            <button type = "submit">Signup</button>

            <div className = "register-link">
                <p>Already logged in? <Link to = "/" >Login</Link></p>
            </div>
        </form>
    </div>
  )
}

export default SignUp
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Register = () => {

    const [registerError, setRegisterError] = useState('');

    const [success, setSuccess] =useState('');

    const [showPassword, setShowPassword] =useState(false)


    const handleRegister = e =>{
       e.preventDefault(); 
       const email = e.target.email.value;
       const password = e.target.password.value;
       const accepted = e.target.Terms.checked;
       console.log(email,password);

//    reset error
setRegisterError('');
setSuccess('')



       if(password.length <6){
        setRegisterError('Password should be at least 6 characters or longer');
        return;
       }
       else if(!/[A-Z]/.test(password)){
        setRegisterError('password should have at least one uppercase character')
        return;
       }
       else if(!accepted){
        setRegisterError('Plese Accept Our Terms And Conditions')
        return;
       }

    

    //    creat User
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
        console.log(result.user);
        setSuccess('User Created Successfully');
        sendEmailVerification(result.user)
        .then(()=>{
            alert('please chack your email and verify your account')
        })
    })
    .catch(error=>{
console.log(error);
setRegisterError(error.message)
    })
    }

    return (
        <div className="border">
            <div className="mx-auto md:w-1/2">
            <h2 className="text-3xl mb-5 text-pink-500 font-extrabold">Please Register</h2>

<form onSubmit={handleRegister}>
    <input className="mb-4 border w-full px-4 py-2" type="email" name="email" placeholder="Email Address"/>

     <br />

   <div className="relative">
   <input 
   className=" border w-full px-4 py-2" 
   type={showPassword ? "text": "password"} 
   name="password" 
   placeholder="Password" 
   required/>

    <span className="absolute top-3 right-2" onClick={()=>setShowPassword(!showPassword)}>

        {
           showPassword ? <FaEyeSlash></FaEyeSlash> :<FaEye></FaEye>
        }

        </span>
   </div>

  

   <br />

   <input type="checkbox" name="Terms" id="Terms" />
   <label className="ml-2" htmlFor="">Accept All <a href="">Terms And Conditions</a> </label>

   <br />

   <input className=" btn btn-secondary mb-4 border w-full" type="submit" value="Register" required />
</form>
{
    registerError && <p className="text-red-700 font-bold">{registerError}</p>

    
}
{
    success && <p className="text-green-700 font-bold">{success}</p>
}

<p>Already have an account? Please <span className="text-green-700 font-bold">
<Link to="/login">Login!</Link> </span> </p>
            </div>
        </div>
    );
};

export default Register;
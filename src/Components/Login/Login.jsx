import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

    const emailRef = useRef(null);

    const handleForgetPassword = () =>{
        const email = emailRef.current.value;
        if(!email){
           return; 
        }
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
         return;   
        }

        sendPasswordResetEmail(auth, email)
        .then(()=>{
            alert('please check your email')
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const [loginError, setLoginError]=useState('');

    const [success, setSuccess] =useState('');

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // reset error and success
        setLoginError('')
        setSuccess('')

        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            console.log(result.user)
            if(result.user.emailVerified){
                setSuccess('User Login Successfully')
            }
            else{
                alert('Please Verify your email')
            }
        })
        .catch(error=>{
            console.log(error)
            setLoginError(error.message)
        })

    }

    return (
        <div>
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required
           name="email"
           ref={emailRef}
            />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required name="password" />
          <label className="label">
            <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div>
            {
                loginError && <p className="text-red-600 font-medium">{loginError}</p>
            }
            {
                success && <p className="text-green-700 font-medium">{success}</p>
            }
        </div>
        <p>New to this website please <span className="text-red-600 font-bold"><Link to='/rigister'>Register!</Link></span> </p>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;
import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp=({signUpArr,setsignUpArr})=>{
  
  const [signUp,setsignUp]=useState({
    name:"",
    username:"",
    email:"",
    password:""
  })
  
  

const handleSignup=()=>{

  setsignUpArr([
    ...signUpArr,
    {
    name:signUp.name,
    username:signUp.username,
    email:signUp.email,
    password:signUp.password,
},
]);

alert("you added !")
console.log(signUpArr);

                         /////////////// after signup is going to signIn page////////
<Link to="/" />      
}

    return(
      <>
        <section onSubmit={handleSignup} className="vh-100%" style={{backgroundColor: "#508bfc"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Sign up</h3>
            <div className="form-outline mb-4">
              <label className="form-label">Name</label>
              <input type="text" id="typeNameX-2" className="form-control form-control-lg" value={signUp.name} onChange={(e)=>setsignUp({...signUp, name:e.target.value})} />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" >Username</label>
              <input type="text" id="typeUserNameX-2" className="form-control form-control-lg" value={signUp.username} onChange={(e)=>setsignUp({...signUp, username:e.target.value})} />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" >Email</label>
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" value={signUp.email} onChange={(e)=>setsignUp({...signUp, email:e.target.value})}/>
            </div>

            <div className="form-outline mb-4">
              <label className="form-label">Password</label>
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" value={signUp.password} onChange={(e)=>setsignUp({...signUp, password:e.target.value})}/>
            </div>

            {/* Checkbox */}          
           <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={handleSignup}>Sign up</button>
           <hr className="my-4"/>
           
          </div>
        </div>
      </div>
    </div>
  </div>
 </section>
</>
    )
}

export default SignUp;
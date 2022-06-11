import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SignIn=({signUpArr})=>{

const[signIn,setSignIn]=useState({
  email:"",
  password:""
})

const handleSignIn=()=>{
  
  if(signUpArr.email==signIn.email && signUpArr.password==signIn.password){
    alert("you logedin")

  }else{
    alert("email or password is incorrect!!!!")
  }
}
    return(
        
<section className="vh-100%" style={{backgroundColor: "#508bfc"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Sign in</h3>

            <div className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" value={signIn.email} onChange={(e)=>setSignIn({...signIn,email:e.target.value})} />
              <label className="form-label">Email</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" value={signIn.password} onChange={(e)=>setSignIn({...signIn,password:e.target.value})}/>
              <label className="form-label">Password</label>
            </div>

            {/* Checkbox */}          
           <div className="form-check d-flex justify-content-start mb-4" >
               <input className="form-check-input " type="checkbox" value="" id="form1Example3" /> 
               <div style={{marginLeft:"5px"}}>
               <label className="form-check-label"> Remember password </label>
               </div>
           </div>
          <h6  style={{textAlign:"left" , textDecoration:"none"}}>Do you have ever <NavLink to='SignUp' style={{textDecoration:"none"}}>Signed Up </NavLink> ?</h6>
           <button className="btn btn-primary btn-lg btn-block mt-2" type="submit" onClick={handleSignIn}>Login</button>
           <hr className="my-4"/>
           <button className="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor: "#dd4b39"}}
              type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
            <button className="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor: "#3b5998"}}
              type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>
              

          </div>
        </div>
      </div>
    </div>
  </div>
 </section>
        


)
}

export default SignIn;


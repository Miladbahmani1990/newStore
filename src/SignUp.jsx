import { useState } from "react";
import SignIn from "./SignIn";

const SignUp=()=>{
  const [signUp,setsignUp]=useState({})
  const [saveSup,setSaveSup]=useState([])

const handleSignup=()=>{
  setsignUp({
    name:signUp.name,
    username:signUp.username,
    email:signUp.email,
    password:signUp.password
})
setSaveSup(...saveSup, signUp)

 
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
              <input type="text" id="typeNameX-2" className="form-control form-control-lg" value={signUp.name} onChange={(e)=>setsignUp({...signUp, name:e.target.value})} />
              <label className="form-label">Name</label>
            </div>

            <div className="form-outline mb-4">
              <input type="text" id="typeUserNameX-2" className="form-control form-control-lg" value={signUp.username} onChange={(e)=>setsignUp({...signUp, username:e.target.value})} />
              <label className="form-label" >Username</label>
            </div>

            <div className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" value={signUp.email} onChange={(e)=>setsignUp({...signUp, email:e.target.value})}/>
              <label className="form-label" >Email</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" value={signUp.password} onChange={(e)=>setsignUp({...signUp, password:e.target.value})}/>
              <label className="form-label">Password</label>
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
 <SignIn email={signUp.email} password={signUp.password}/>
</>
    )
}

export default SignUp;
import { useState } from "react";
import { Link } from "react-router-dom";
import { ErrorMessage, FastField, Form, Formik } from "formik";
import * as Yup from "yup"

const initialValues={
  name:"",
  username:"",
  email:"",
  password:"",
}

const validationSchema=Yup.object({
  name:Yup.string().required("Enter your Name"),
  username:Yup.string().required("Enter your Username"),
  email:Yup.string().required("Enter your Email").email("for Exsample : aaa@bbb.com"),
  password:Yup.string().required("Enter your Password").min(8,"Enter 8 character")
})

const onSubmit=values=>{
  console.log(values);
}

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
      <Formik onSubmit={onSubmit} handleSignup={handleSignup} initialValues={initialValues} validationSchema={validationSchema}>
        <Form className="vh-100%" style={{backgroundColor: "#508bfc"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5">

            <h3 className="mb-5">Sign up</h3>
            <div className="form-outline mb-4">
              <label className="form-label">Name <span className='text-danger'>*</span></label>
              <FastField type="text" id="typeNameX-2" name="name" className="input-sm form-control" />
              <ErrorMessage  name="name">
                {error=><small className="text-center text-danger">{error}</small>}
              </ErrorMessage>
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" >Username <span className='text-danger'>*</span></label>
              <FastField type="text" id="typeUserNameX-2" name="username" className="form-control " />
              <ErrorMessage  name="username"> 
              {error=><small className="text-center text-danger">{error}</small>}
              </ErrorMessage>
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" >Email <span className='text-danger'>*</span></label>
              <FastField type="email" id="typeEmailX-2" name="email" className="form-control "/>
              <ErrorMessage  name="email" >
              {error=><small className="text-center text-danger">{error}</small>}
              </ErrorMessage>
            </div>

            <div className="form-outline mb-4">
              <label className="form-label">Password <span className='text-danger'>*</span></label>
              <FastField type="password" id="typePasswordX-2" name="password" className="form-control"/>
              <ErrorMessage  name="password">
              {error=><small className="text-center text-danger">{error}</small>}
              </ErrorMessage>
            </div>
            <div className="form-outline mb-4">
            <label className="form-label">Bio</label>
              <FastField  type="text" name="bio" id="typePasswordX-2"  className="form-control" placeholder="Write your Bio" componentلهف="textarea"/>
            </div>

            {/* Checkbox */}   
            <div className="text-center">
           <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={handleSignup}>Sign up</button>
           <hr className="my-4"/>
            </div>       
           
          </div>
        </div>
      </div>
    </div>
  </div>
 </Form>
</Formik>
    )
}

export default SignUp;
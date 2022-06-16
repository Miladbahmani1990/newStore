import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ErrorMessage, FastField, Form, Formik } from "formik";
import * as Yup from "yup"



const validationSchema=Yup.object({
  name:Yup.string().required("Enter your Name"),
  username:Yup.string().required("Enter your Username"),
  email:Yup.string().required("Enter your Email").email("for Exsample : aaa@bbb.com"),
  password:Yup.string().required("Enter your Password").min(8,"Enter 8 character")
})

// const onSubmit=e=>{
// console.log(e);

// }
const initialValues={
  name:"",
  username:"",
  email:"",
  password:"",
  bio:""
}


const SignUp=({signUpArr,setsignUpArr})=>{

const handleSignup=(formik)=>{
  console.log(formik);
  

setsignUpArr([...signUpArr ,formik.values])

console.log(signUpArr);
// document.getElementById("typeNameX-2").value=""
// document.getElementById("typeUserNameX-2").value=""
// document.getElementById("typeEmailX-2").value=""
// document.getElementById("typePasswordX-2").value=""
// document.getElementById("typebioX-2").value=""

}

    return(
      <Formik  handleSignup={handleSignup} initialValues={initialValues} validationSchema={validationSchema}>
        {formik=>{
         
          return(
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
              <FastField  type="text" name="bio" id="typebioX-2"  className="form-control" placeholder="Write your Bio" component="textarea"/>
            </div>

            {/* Checkbox */}   
            <div className="text-center">
              <button className="btn btn-primary btn-lg btn-block" type="button" onClick={()=>handleSignup(formik)} disabled={!(formik.isValid && formik.dirty)} >Sign up</button>
             <hr className="my-4"/>
           </div>       
           
          </div>
        </div>
      </div>
    </div>
  </div>
        </Form>
          )
        }}
</Formik>
    )
}

export default SignUp;
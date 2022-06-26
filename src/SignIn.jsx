import React from 'react';
import {  NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";




const SignIn=({signUpArr})=>{
  const navigate=useNavigate();
  
  const formik=useFormik({
    
    initialValues:{
      email:"",
      password:"",
    },

    validate:values=>{
      let errors={}
      if(!values.email){
        errors.email="enter your Email"
      }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
        errors.email="forExample : aaa@bbb.com"
      }
      if(!values.password){
        errors.password="enter your Password"
      }else if((values.password).length<8){
        errors.password="min 8 character"
      }
      return errors;
    }
    
  })
  console.log(formik);
  const attrsE={
    type:"email",
    id:"typeEmailX-2",
    name:'email',
    className:"form-control form-control-lg"
  }
  const attrsP={
    type:"password",
    id:"typePasswordX-2",
    name:'password',
    className:"form-control form-control-lg"
  }


// const handleSignIn=(formik)=>{
//   Object.values(signUpArr).filter(u=>(u.email===formik.values.email && u.password===formik.values.password ? navigate=("/Mainpage") : alert("email or password is incorrect!!!!")))

// }
    return( 
      <div  className="vh-100% bg" style={{backgroundImage: "url(/image/pic-home/Marshs-Library-Dublin.jpg.webp)"  }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: "1rem" ,backgroundColor: "rgba(100,100,100,0.4)"}}>
          <div className="card-body p-5">

            <h3 className="mb-5">Sign in</h3>

            <div className="form-outline mb-4 text-left">
              <label className="form-label fs-4">Email <span className='text-danger'>*</span></label>
              <input  {...attrsE} value={formik.values.email} {...formik.getFieldProps("email")} />
              {formik.errors.email && formik.touched.email ? <small className='text-center text-danger' >{formik.errors.email}</small> : null}
            </div>

            <div className="form-outline mb-4">
              <label className="form-label fs-4">Password <span className='text-danger'>*</span></label>
              <input  {...attrsP} value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.password && formik.touched.password ? <small className='text-center text-danger' >{formik.errors.password}</small> : null}
            </div>

            {/* Checkbox */}          
           <div className="form-check d-flex justify-content-start mb-4" >
               <input className="form-check-input " type="checkbox" value="" id="form1Example3" /> 
               <div style={{marginLeft:"5px"}}>
               <label className="form-check-label"> Remember password </label>
               </div>
           </div>
          <h6  style={{textAlign:"left" , textDecoration:"none",marginTop:"10px",color:"white" }} className="fs-4">Have you ever  <NavLink to='/signUp' style={{textDecoration:"none"}}>signedUp</NavLink> ?</h6>
          <div className='text-center'>
           <button className="btn btn-primary btn-lg btn-block mt-2" type="submit"  disabled={!(formik.dirty&&formik.isValid)}
           onClick={()=>{
            Object.values(signUpArr).filter(u=>(u.email===formik.values.email && u.password===formik.values.password ? navigate("/Mainpage") : alert("email or password is incorrect!!!!")))
            console.log(signUpArr[0].email);
            console.log(formik.values.email);
           }}
          >Login</button>
           <hr className="my-4"/>

           <a href='https://accounts.google.com/'>
           <button className="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor: "#dd4b39"}}
              type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
          </a>

          <a href='https://fa-ir.facebook.com/'>
              <button className="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor: "#3b5998"}}
              type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>
          </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
)
}

export default SignIn;


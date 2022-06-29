import { ErrorMessage, FastField, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup"
import FormikControl from "./formikcontrol/formikcontrol";



const validationSchema=Yup.object({
  name:Yup.string().required("Enter your Name"),
  username:Yup.string().required("Enter your Username"),
  email:Yup.string().required("Enter your Email").email("for Exsample : aaa@bbb.com"),
  password:Yup.string().required("Enter your Password").min(8,"Enter 8 character")
})


const initialValues={
  name:"",
  username:"",
  email:"",
  password:"",
  bio:""
}
const onSubmit=(values)=>{
  console.log(values);
}

const SignUp=({signUpArr,setsignUpArr})=>{
const navigate=useNavigate()

// const saveUpArr=(formik)=>{
//   let save1=[]
//   let save=Object.values(signUpArr)
//   console.log(formik.values.email);
//   console.log(save);
//   console.log(save[0].email);
// if(save.length>0 && save1.length!=save.length && formik.values.email !=save[0].email){
//   save1=save
//   console.log(save);
//   console.log(save1);
//   // navigate("/signIn")
//   alert("ooook")
// }else{
//   alert("you signedUp already")
// }
// }

const handleSignup=(formik)=>{
console.log(formik.values)
setsignUpArr([...signUpArr,formik.values])
console.log(signUpArr)
// saveUpArr(formik)
}

    return(
      <Formik  onSubmit={handleSignup} initialValues={initialValues} validationSchema={validationSchema}>
        {formik=>{
         
          return(
<Form className="vh-100%" style={{backgroundImage: "url(/image/pic-home/Marshs-Library-Dublin.jpg.webp)"}}>
  <div className="container py-5 h-100 " >
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: "1rem" ,backgroundColor: "rgba(100,100,100,0.4)"}}>
          <div className="card-body p-5">

            <h3 className="mb-5">Sign up</h3>

            <FormikControl
            formik={formik}
             control="input"
             lable="Name"
             span="*"
             type="text"
             name="name"
            />

            <div className="form-outline mb-4">
              <label className="form-label fs-3" >Username <span className='text-danger'>*</span></label>
              <FastField type="text" id="typeUserNameX-2" name="username" className="form-control " />
              <ErrorMessage  name="username"> 
              {error=><small className="text-center text-danger fs-5">{error}</small>}
              </ErrorMessage>
            </div>

            <div className="form-outline mb-4">
              <label className="form-label fs-3" >Email <span className='text-danger'>*</span></label>
              <FastField type="email" id="typeEmailX-2" name="email" className="form-control "/>
              <ErrorMessage  name="email" >
              {error=><small className="text-center text-danger fs-5">{error}</small>}
              </ErrorMessage>
            </div>

            <div className="form-outline mb-4">
              <label className="form-label fs-3">Password <span className='text-danger'>*</span></label>
              <FastField type="password" id="typePasswordX-2" name="password" className="form-control"/>
              <ErrorMessage  name="password">
              {error=><small className="text-center text-danger fs-5">{error}</small>}
              </ErrorMessage>
            </div>
            <div className="form-outline mb-4">
            <label className="form-label fs-3">Bio</label>
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
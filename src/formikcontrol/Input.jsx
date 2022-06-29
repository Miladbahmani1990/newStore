import { ErrorMessage, FastField } from "formik";
import React from "react";

const Input=(props)=>{
    const {type,lable,name,span}=props
    return(
        <div className="form-outline mb-4">
              <label className="form-label fs-3">{lable}<span className='text-danger'>{span}</span></label>
              <FastField type={type} id="typeNameX-2" name={name} className="input-sm form-control" />
              <ErrorMessage  name={name}>
                {error=><small className="text-center text-danger fs-5">{error}</small>}
              </ErrorMessage>
            </div>
    )
}

export default Input
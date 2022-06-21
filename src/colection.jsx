import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Homepage/Home"
import MainPage from "./mainPage"
import SignIn from "./SignIn"
import SignUp from "./SignUp"


const Colection=()=>{
    const[signUpArr,setsignUpArr]=useState([])
    return(
        <Routes>
            <Route  path="/" element={<MainPage/>} />           
            <Route path="/signIn" element={<SignIn  signUpArr={signUpArr} />}/>
            <Route path="/signUp" element={<SignUp setsignUpArr={setsignUpArr} signUpArr={signUpArr}/>}/>
            <Route path="/home" element={<Home/>}/>     
        </Routes>

    )
}

export default Colection
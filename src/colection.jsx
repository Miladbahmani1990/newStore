import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import MainPage from "./mainPage"
import SignIn from "./SignIn"
import SignUp from "./SignUp"


const Colection=()=>{
    const[signUpArr,setsignUpArr]=useState([])
    return(
        <Routes>
            <Route path="/" element={<SignIn  signUpArr={signUpArr} />}/>
            <Route path="/signUp" element={<SignUp setsignUpArr={setsignUpArr} signUpArr={signUpArr}/>}/>
            <Route path="/Mainpage" element={<MainPage/>} />     
        </Routes>

    )
}

export default Colection
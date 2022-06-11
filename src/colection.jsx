import { Route, Routes } from "react-router-dom"
import SignIn from "./SignIn"
import SignUp from "./SignUp"


const Colection=()=>{
    return(
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/signUp" element={<SignUp/>}/> 
        </Routes>

    )
}

export default Colection
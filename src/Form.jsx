//jsx file
import { useState } from "react";
import Picture from "./Picture";

function Form() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [msg,setMsg]=useState("")
    const cname="Section-9"
    const cpwd="goodkids@9"
   
    return (
        <div class="form">
            <h1>User Login Page</h1>
            <p>Welcome, {name}! </p>
            <form onSubmit={(e)=>{
                e.preventDefault()
                if(cname===name&&cpwd===password){
                    // setMsg("Login successful")
                   <picture/>
                }
                else{
                    setMsg("Invalid credentials") 
                }
                setName("")
                setPassword("")

            }}>
                <label>Username</label>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }}></input><br />
                <br /><br />
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }}></input><br /><br /><br />
                <button type="Submit" disabled={!name||!password}>Submit</button>
                <p>{msg}</p>
            </form>
        </div>
    )
}
export default Form;
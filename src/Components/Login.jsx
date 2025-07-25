import { useContext } from "react"
import { AuthContext } from "../UseContext"
import {useNavigate} from "react-router"

function Login() {
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()
    
    const signIn = async (formData)=>{
      const newUser = {
            email:formData.get("email")
            password:formData.get("password")
      }
      await login(newUser)
      navigate("/")
    }
return (
  <>
  <h1>Login form</h1>
  <form action = {signIn}>
    <label>Email:
        <input name = "email"/>
    </label>
    <label>Password:
        <input name = "password" type = "password" />
    </label>
        <input type = "submit" value = "Submit"/>
  </form>
  <button onClick={()=>navigate("/register")}>Make a new account</button>
  </>
)
}

    

export default Login
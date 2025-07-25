import { useContext } from "react"
import { AuthContext } from "../UseContext"

function Registration() {
    
        const {register} = useContext(AuthContext)
        const signIn = async (formData)=>{
          const newUser = {
                firstname:formData.get("firstname")
                lastname:formData.get("lastname")
                email:formData.get("email")
                password:formData.get("password")
          }
          await register(newUser)
        }
    return (
      <>
      <h1>Registration form</h1>
      <form action = {signIn}>
        <label>Firstname:
            <input name = "firstname"/>
        </label>
        <label>Lastname:
            <input name = "lastname"/>
        </label>
        <label>Email:
            <input name = "email"/>
        </label>
        <label>Password:
            <input name = "password" type = "password" />
        </label>
            <input type = "submit" value = "Submit"/>
      </form>
      <button onClick={()=>navigate("/login")}>Already have an account? Login!</button>
      </>
    )
  }

export default Registration
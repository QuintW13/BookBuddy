import { useState } from `react`
import {Route, Routes} from `react-router`
import AllBooks from "./Components/AllBooks"
import BookDetails from "./Components/BookDetails"
import Profile from "./Components/Profile"
import Login from "./Components/Login"
import Registration from "./Components/Register"


function App() {
  const [count,setCount] = useState(0)

  return (
    <>
      <nav>
        <Link to ="/">View All Books</Link>
        <Link to ="/users/me">View Your Reservation</Link>
        <Link to ="/login">Login</Link>
        <Link to ="/register">Make A New Account</Link>
      </nav>
    <Routes>
      <Route path = "/" element = {<AllBooks/>}/>
      <Route path = "/books/:bookid" element = {<BookDetails/>}/>
      <Route path = "users/me" element = {<Profile/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/register" element = {<Registration/>}/>
    </Routes>
    </>
  )
}

export default App



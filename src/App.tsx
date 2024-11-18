import { Navigate, Route, Routes } from "react-router-dom"
import Message from "./pages/Message"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"

function App() {
  return (
    <>
    <Routes>
      {/* <Route index={true} element={<Message/>}/> */}
      <Route path="/" element={<Navigate to="/auth/login" />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signup />} />
    </Routes>
    </>
  )
}

export default App

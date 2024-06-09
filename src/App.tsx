import { BrowserRouter, Routes, Route } from "react-router-dom"
// import RegisterPage from "./components/pages/RegisterPage"
import UserPages from "./components/pages/UserPages"
import { RegisterPage } from "./components/pages/RegisterPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user" element={<UserPages />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

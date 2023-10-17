import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Users from "./pages/Users"
import Product from "./pages/Product"
import EditUser from "./pages/EditUser"
import AddUser from "./pages/AddUser"
import AddProduct from "./pages/AddProduct"
import EditProduct from "./pages/EditProduct"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
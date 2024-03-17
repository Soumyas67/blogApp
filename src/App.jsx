import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import AddBlog from "./Pages/AddBlog"
import AllBlog from "./Pages/AllBlog"
import Resources from "./Pages/Resources"
import Contact from "./Pages/Contact"
import Navbar from "./components/Navbar"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/allblogs" element={<AllBlog />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 not found.</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

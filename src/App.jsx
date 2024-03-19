import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import AddBlog from "./Pages/AddBlog"
import Navbar from "./components/Navbar"
import Blog from "./Pages/Blog"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="*" element={<h1>404 not found.</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

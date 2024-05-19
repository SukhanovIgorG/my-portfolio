import { Route, Routes, HashRouter } from "react-router-dom"
import { BlogPageAsync, MainPageAsync } from "./pages"
import './App.css'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/blog" element={<BlogPageAsync />} />
          <Route path="*" element={<>404 такой страницы нет</>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App

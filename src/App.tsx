import { Route, Routes, HashRouter } from "react-router-dom"
import { TaskPage, BlogPage, MainPageAsync } from "./pages"
import './App.css'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="tasks" element={<TaskPage />} />
          <Route path="*" element={<>404 такой страницы нет</>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App

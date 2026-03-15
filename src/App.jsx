import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Home = lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.Home }))
)

const NotFound = lazy(() =>
  import("./pages/NotFound").then((module) => ({ default: module.NotFound }))
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Suspense fallback={null}><Home /></Suspense>} />
        <Route path="*" element={<Suspense fallback={null}><NotFound /></Suspense>} />
      </Routes>
      </BrowserRouter>
  )
}

export default App

import { lazy, Suspense, useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import Loader from "./components/Loader"
import { nav_links } from "./data/data"
import "./index.css"

const Hero = lazy(() => import("./components/Hero"))
const Main = lazy(() => import("./components/Main"))
const Footer = lazy(() => import("./components/Footer"))

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // مدة ظهور اللودر (يمكن تغييرها)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="bg-background-color px-9">
      

      <Suspense fallback={null}>
          <NavBar
          logo={{ source: "/assets/images/photos/logo.png", alternative: "Logo" }}
          nav_links={nav_links}
          bar_icon={{ source: "/assets/images/icons/bars.svg", alternative: "bars" }}
          cancel_icon={{ source: "/assets/images/icons/cancel.svg", alternative: "bars" }}
        />
        <Hero />
        <Main />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
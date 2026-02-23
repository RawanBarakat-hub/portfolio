import { lazy, Suspense } from "react"
import NavBar from "./components/NavBar"
import { nav_links } from "./data/data"
import "./index.css"
import Loader from "./components/Loader"

const Hero = lazy(() => import("./components/Hero"))
const Main = lazy(() => import("./components/Main"))
const Footer = lazy(() => import("./components/Footer"))

function App() {
  return (
    <div className="bg-background-color px-9">
      <NavBar
        logo={{ source: "/assets/images/photos/logo.png", alternative: "Logo" }}
        nav_links={nav_links}
        bar_icon={{ source: "/assets/images/icons/bars.svg", alternative: "bars" }}
        cancel_icon={{ source: "/assets/images/icons/cancel.svg", alternative: "bars" }}
      />

      <Suspense fallback={<Loader />}>
        <Hero />
        <Main />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
import { lazy, Suspense, useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import Loader from "./components/Loader"
import { nav_links } from "./data/data"
import "./index.css"
import { motion } from "framer-motion"
import { fadeUp } from "./animation/variants"
import ScrollToTop from "./components/ScrollToTop"

const Hero = lazy(() => import("./components/Hero"))
const Main = lazy(() => import("./components/Main"))
const Footer = lazy(() => import("./components/Footer"))

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <motion.div
      className="bg-background-color px-9"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Suspense fallback={null}>
        
        {/* Navbar Animation */}
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <NavBar
            logo={{ source: "/assets/images/photos/logo.png", alternative: "Logo" }}
            nav_links={nav_links}
            bar_icon={{ source: "/assets/images/icons/bars.svg", alternative: "bars" }}
            cancel_icon={{ source: "/assets/images/icons/cancel.svg", alternative: "bars" }}
          />
        </motion.div>

        {/* Hero Animation */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <Hero />
        </motion.section>

        {/* Main Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Main />
        </motion.div>

        {/* Footer Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Footer />
          <ScrollToTop />
        </motion.div>

      </Suspense>
    </motion.div>
  )
}

export default App
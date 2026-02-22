import NavBar from "./components/NavBar"
import { nav_links } from "./data/data"
import "./index.css"
function App() {
  
  return (
    <NavBar logo={{source:"/assets/images/photos/logo.png",alternative:"Logo"}}
      nav_links={nav_links}
      bar_icon={{source:"/assets/images/icons/bars.svg",alternative:"bars"}}
      cancel_icon={{source:"/assets/images/icons/cancel.svg",alternative:"bars"}}
      />
    <div className="bg-background-color">
      
    </div>
  )
}

export default App

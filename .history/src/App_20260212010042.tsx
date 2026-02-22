import NavBar from "./components/NavBar"

function App() {
  const nav_links=[
    {
      url:"",
      text:"Home"
    },
    {
      url:"",
      text:"About"
    },
    {
      url:"",
      text:"Skills"
    },
    {
      url:"",
      text:"Projects"
    },
    {
      url:"",
      text:"Contact"
    }
  ]
  return (
    <>
      <NavBar logo={{source:"/assets/images/photos/logo.png",alternative:"Logo"}}
      nav_links={nav_links}
      b={{source:"/assets/images/photos/logo.png",alternative:"Logo"}}
      />
    </>
  )
}

export default App

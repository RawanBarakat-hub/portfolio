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
      text:"Home"
    },
    {
      url:"",
      text:"About"
    }
  ]
  return (
    <>
      <NavBar logo={{source:"/assets/images/photos/logo.png",alternative:"Logo"}}
      />
    </>
  )
}

export default App

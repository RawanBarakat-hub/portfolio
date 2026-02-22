import NavBar from "./components/NavBar"

function App() {
  const nav_links=[
    {
      url:"",
      text:"Home"
    },
  ]
  return (
    <>
      <NavBar logo={{source:"/assets/images/photos/logo.png",alternative:"Logo"}}
      />
    </>
  )
}

export default App

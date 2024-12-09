import { Outlet } from "react-router-dom"
import {ThemeProvider} from "./context/theme"
import Home from "./Components/Home/Home"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import { useEffect, useState } from "react"

function App() {

  const [themeMode,setThemeMode]=useState("light")

  const lightTheme=()=>{
    setThemeMode("light")
  }

  const darkTheme=()=>{
    setThemeMode("dark")

  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark") 
    document.querySelector('html').classList.add(themeMode) 


  }, [themeMode])
  


  return (
  
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    
    <Header/>
    <Outlet/>
    <Footer/>
    </ThemeProvider>
  )
}

export default App

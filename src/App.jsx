import {Routes , Route} from "react-router-dom"

import NavbarComponent from  "./components/NavbarComponent.jsx"
import FooterComponent from  "./components/FooterComponent.jsx"


import HomePage from "./pages/HomePage.jsx"
import FaqPage from "./pages/FaqPage.jsx"
import ClassPage from "./pages/ClassPage.jsx"
import TestiPage from "./pages/TestiPage.jsx"
import SyaratPage from "./pages/SyaratPage.jsx"

function App() {
  return <div>
    <NavbarComponent/>
    <Routes>
       <Route path="/" Component={HomePage}/>
       <Route path="/faq" Component={FaqPage}/>
       <Route path="/class" Component={ClassPage}/>
       <Route path="/testi" Component={TestiPage}/>
       <Route path="/syarat" Component={SyaratPage}/>
    </Routes>
    <FooterComponent/>
  </div>
}

export default App

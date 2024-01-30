import Nav from "./components/Nav"
import { Route, Routes } from "react-router-dom"
import VideoContainer from "./components/VideoContainer"
import SideBar from "./components/Sidebar"
import { useSelector } from "react-redux"
import { sidebarSelector } from "./reducers/sidebar"
import Watch from "./pages/Watch"
import SearchResult from "./pages/SearchResult"

function App(){

  const isMenuOpen = useSelector(sidebarSelector)

  return <div>
      <Nav></Nav>
      <div className="w-screen flex gap-10">

      <SideBar></SideBar>

      <div className={ isMenuOpen ? "ml-[160px]" : "" }>

      <Routes>
        <Route path="/" element={ <VideoContainer /> }></Route>
        <Route path="/watch/:videoId" element={ <Watch /> } ></Route>
        <Route path="/search" element={ <SearchResult /> } ></Route>
      </Routes>
      </div>

      </div>

  </div>
}

export default App
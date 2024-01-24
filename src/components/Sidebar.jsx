import home from "../assets/house.svg"
import profile from '../assets/person-circle.svg'
import youtube from '../assets/youtube.svg'
import search from '../assets/search.svg'
import trending from '../assets/eye-fill.svg'
import { useSelector } from "react-redux"
import { sidebarSelector } from "../reducers/sidebar"

const data = [
    {
        title : 'Home' ,
        icon : home
    } ,
    {
        title : 'Profile' ,
        icon : profile
    } ,
    {
        title : 'Subscription' ,
        icon :  youtube
    } ,
    {
        title : 'search' ,
        icon : search
    } ,
    {
        title : 'Trending' ,
        icon : trending
    } ,
    
]

function SideBar(){

    const isMenuOpen = useSelector(sidebarSelector)

    // if(!isMenuOpen) return 


    return <div className={ `w-60  p-4 border bg-white absolute z-30 transition-transform h-screen ${ !isMenuOpen ? "-translate-x-60" : '' }` }>
        <ul>
            {
                data.map((item, index) => {
                    return <li key={index} className="flex gap-2 p-2 px-4 cursor-pointer hover:bg-gray-100"> <img src={item.icon} alt="home-icon" />{ item.title }</li>
                })
            }
            
           
        </ul>
    </div>
}

export default SideBar
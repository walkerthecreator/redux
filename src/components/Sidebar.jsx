import home from "../assets/house.svg"
import profile from '../assets/person-circle.svg'
import youtube from '../assets/youtube.svg'
import search from '../assets/search.svg'
import trending from '../assets/eye-fill.svg'
import { useSelector } from "react-redux"
import { sidebarSelector } from "../reducers/sidebar"
import homeIcon from '../assets/home.svg';
import shortsIcon from '../assets/shorts.svg';
import subscriptionsIcon from '../assets/subscriptions.svg';
import redLiveIcon from '../assets/red-live.svg';

import libraryIcon from '../assets/library.svg';
import historyIcon from '../assets/history.svg';
import yourVideosIcon from '../assets/yourVideos.svg';
import watchLaterIcon from '../assets/watchLater.svg';
import likedVideosIcon from '../assets/likedVideos.svg';
import showMoreIcon from '../assets/showMore.svg';

import trendingIcon from '../assets/trending.svg';
import shoppingIcon from '../assets/shopping.svg';
import musicIcon from '../assets/music.svg';
import moviesIcon from '../assets/movies.svg';
import liveIcon from '../assets/live.svg';
import gamingIcon from '../assets/gaming.svg';
import newsIcon from '../assets/news.svg';
import sportsIcon from '../assets/sports.svg';
import learningIcon from '../assets/learning.svg';
import fashionAndBeautyIcon from '../assets/fashionAndBeauty.svg';

import ytPremiumIcon from '../assets/yt-premium.svg';
import ytStudioIcon from '../assets/yt-studio.svg';
import ytMusicIcon from '../assets/yt-music.svg';
import ytKidsIcon from '../assets/yt-kids.svg';

import settingsIcon from '../assets/settings.svg';
import reportHistoryIcon from '../assets/reportHistory.svg';
import helpIcon from '../assets/help.svg';
import sendFeedbackIcon from '../assets/sendFeedback.svg';

const data = [
    {
        title : 'Home' ,
        icon : homeIcon
    } ,
    {
        title : "shorts" ,
        icon : shortsIcon 
    } ,
    {
        title : "subscription" ,
        icon : subscriptionsIcon
    } ,
    {
        title  : "live" ,
        icon : redLiveIcon
    } ,
    {
        title : 'music' ,
        icon : musicIcon
    } ,
    {
        title : 'library',
        icon : libraryIcon
    },
    {
        title : "history",
        icon : historyIcon
    },
    {
        title : 'trending' ,
        icon :  trendingIcon
    } ,
    {
        title : 'search' ,
        icon : search
    } ,
    {
        title : 'Trending' ,
        icon : trending
    } ,
    {
        title : 'Gaming' ,
        icon : gamingIcon
    } ,
    {
        title : "news",
        icon : newsIcon
    } ,
    {
        title : "sports" ,
        icon : sportsIcon
    },
    {
        title : "setting" ,
        icon : settingsIcon
    },
    {
        title : "help",
        icon : helpIcon
    }
    
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
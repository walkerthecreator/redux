import { useDispatch } from "react-redux";
import menu from "../assets/list.svg";
import yt from "../assets/youtube.svg";
import { toggleSidebar } from "../reducers/sidebar";
import search from "../assets/search.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { SEARCH_API, YOUTUBE_SEARCH, YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API } from "../utils/constant";
import { Link, useNavigate } from "react-router-dom";
import searchIcon from "../assets/search.svg"

function Nav() {
  const dispatch = useDispatch();
  const [query , setQuery ] = useState('')
  const [searchRecom , setSearchRecom] = useState(null)

  const navigate = useNavigate()

  async function fetchSearchRecom(){
    const res = await axios.get(YOUTUBE_SEARCH(query))
    const data = res.data
    console.log("res" , data)
    setSearchRecom(data.items) 
  }

  console.log(searchRecom)

  function handleOpener() {
    dispatch(toggleSidebar());
  }


  useEffect(()=>{
    if(query){

      const timer = setTimeout(()=>{   
        fetchSearchRecom()
      } , 500)
      
      return () => clearTimeout(timer)
    }
      

  } , [query])

  return (
    <nav className="flex w-full justify-around items-center border-b-2 p-2">

      <div className="flex gap-4 items-center">
        <button onClick={handleOpener} className="hover:bg-zinc-200 p-2 rounded-full">
          <img src={menu} alt="" />
        </button>
        <Link to='/' className="flex gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="red" class="bi bi-youtube" viewBox="0 0 16 16">
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
          </svg>
          <h2 className="font-medium text-2xl">Youtube</h2>
        </Link>
      </div>

      <div className="w-1/3 flex">
        <input
          type="text"
          placeholder="Search for Videos"
          className="border rounded-s-full p-1 px-6 w-11/12  outline-none"
          onChange={(e) => { setQuery(e.target.value) }}
          value={query}
        />

        {
          searchRecom  && 
        

        <div className="absolute top-12 bg-white px-6 rounded-md shadow-md border w-[28rem]">
          <ul>
            {
              
              searchRecom?.map((item , index) => {
                if(index < 10){
                  return <div  className="flex hover:bg-zinc-100 cursor-pointer p-2" onClick={ ()=>{ navigate(`/watch/${item.id.videoId}`); setSearchRecom("") } }>  
                  <img src={searchIcon} alt="" />
                  <li className="truncate">{item?.snippet?.title}</li>
                  </div>
                } 
                  
              })
            }
          </ul>
        </div>
}

        <button onClick={ ()=>{
           navigate('/search?query=' + query)
           setSearchRecom("")
        } } className="border p-2 px-4 rounded-e-full">
          <img src={search} alt="" />
        </button>
      </div>
      <button className="p-2 px-8 rounded-full bg-zinc-100 text-sm">login</button>
    </nav>
  );
}

export default Nav;

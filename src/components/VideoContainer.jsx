import { YOUTUBE_API } from "../utils/constant"
import axios from "axios"
import VideoCard from "../components/VideoCard"
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import {add} from "../reducers/recommend"

function VideoContainer(){

    const [ result , setResult ] = useState(null)


    const navigate = useNavigate()
    const dispatch = useDispatch()
    

    function handleClick(id){
      navigate(`/watch/${ id }`)
    }


    async function fetchData(){
      const res = await axios.get(YOUTUBE_API)
      const data = res.data
      setResult(data)
      dispatch(add(data.items))
    }
  
    useEffect(()=>{
      fetchData()
    } , [])


    return <div className="flex flex-wrap h-screen justify-center overflow-auto mt-4 gap-8 p-3 " >
    {
     result?.items?.map((item , index) => {
      return <VideoCard stats={item?.statistics} videoData={item?.snippet} handleClick={handleClick} id={item?.id}></VideoCard>
     })
    }
    
  </div>
}


export default VideoContainer
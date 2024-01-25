import { YOUTUBE_API } from "../utils/constant"
import axios from "axios"
import VideoCard from "../components/VideoCard"
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

function VideoContainer(){

    const [ result , setResult ] = useState(null)

    // const [searchParams , setSearchParams] = useSearchParams()

    const navigate = useNavigate()

    function handleClick(id){
      navigate(`/watch/${ id }`)
    }


    async function fetchData(){
      const res = await axios.get(YOUTUBE_API)
      const data = res.data
      console.log(data) 
      setResult(data)
    }
  
    useEffect(()=>{
      fetchData()
    } , [])


    return <div className="flex flex-wrap justify-center mt-4 gap-8 p-3 " >
    {
     result?.items?.map((item , index) => {
      return <VideoCard stats={item?.statistics} videoData={item?.snippet} handleClick={handleClick} id={item?.id}></VideoCard>
     })
    }
    
  </div>
}


export default VideoContainer
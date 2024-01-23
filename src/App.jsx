import { useEffect, useState } from "react"
import Nav from "./components/Nav"
import { YOUTUBE_API } from "./utils/constant"
import axios from "axios"
import VideoCard from "./components/VideoCard"

function App(){

  const [ result , setResult ] = useState(null)


  async function fetchData(){
    const res = await axios.get(YOUTUBE_API)
    const data = res.data
    console.log(data) 
    setResult(data)
  }

  useEffect(()=>{
    fetchData()
  } , [])

  return <div>
      <Nav></Nav>
      <div className="flex flex-wrap gap-3 p-3">

        {
         result?.items?.map((item , index) => {
          return <VideoCard stats={item?.statistics} videoData={item?.snippet}></VideoCard>
         })
        }
        
      </div>

      



  </div>
}

export default App
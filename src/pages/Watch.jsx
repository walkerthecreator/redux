import axios from "axios"
import { YOUTUBE_RECOMENDED_VIDEO_LIST_API, YOUTUBE_VIDEO_WATCH_API } from "../utils/constant"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { closeSidebar } from "../reducers/sidebar"
import { viewsFormat } from "../utils/helper"
import like from "../assets/hand-thumbs-up.svg"
import dislike from "../assets/hand-thumbs-down.svg"
import { useParams } from "react-router-dom"


function Watch(){

    const dispatch = useDispatch()
    const { videoId } = useParams()
    const [metadata , setMetaData] = useState(null)
    const [recommend , setRecommend] = useState(null)

    async function fetchSingleWatchVideo(){
        const res = await axios.get(YOUTUBE_VIDEO_WATCH_API + videoId )
        const data = res.data
        console.log(data)
        setMetaData(data.items[0])
    }

    async function fetchRecommendations(){
        const res = await axios.get(YOUTUBE_RECOMENDED_VIDEO_LIST_API + "0UEhu4uWUAM")
        const data = res.data 
        console.log("r" , data)
    }

    useEffect(()=>{
        dispatch(closeSidebar())
        fetchSingleWatchVideo()
        // fetchRecommendations()
    } , [])

    return <div  className="flex justify-around mx-20 mt-5 gap-5">
    
            <div>
                <iframe width="900" height="500" className="rounded-xl" src={`https://www.youtube.com/embed/${videoId}?si=xsdeDDT6Fq_HwSFA&autoplay=1&mute=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
                <div className="mt-3">
                    <h2 className="text-xl font-semibold w-3/4">{metadata?.snippet?.localized?.title}</h2>

                <div className="mt-4 flex items-center gap-4">
                    <img src="https://placehold.co/20" height={26} width={26} className="rounded-full" alt="" />
                    <div>
                        <h3>{ metadata?.snippet?.channelTitle }</h3>
                        <p className="text-xs font-medium text-gray-600">1.7M subscribers</p>
                    </div>
                    <button className="bg-zinc-900 text-white text-sm rounded-full p-2 px-4 ">
                        Subscribe
                    </button>

                    <div className="rounded-full overflow-hidden flex ">
                        <div className="bg-zinc-200 p-2 px-6 text-sm flex gap-2 items-center border-e-2 border-gray-400"> <img src={like} alt="" /> { viewsFormat(metadata?.statistics?.likeCount) }</div>
                        <div className="bg-zinc-200 p-2 px-6 text-sm flex items-center"><img src={dislike} alt="" /></div>
                    </div>
                </div>

                </div>
            </div>

        <div>
            <h1 className="text-2xl font-semibold">Recommendations for you </h1>  
        </div>

    </div>
}

export default Watch 
import axios from "axios"
import { YOUTUBE_RECOMENDED_VIDEO_LIST_API, YOUTUBE_VIDEO_WATCH_API } from "../utils/constant"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeSidebar } from "../reducers/sidebar"
import { viewsFormat } from "../utils/helper"
import like from "../assets/like.svg"
import dislike from "../assets/dislike.svg"
import bell from "../assets/bell.svg"
import { useNavigate, useParams } from "react-router-dom"
import { selectRecommendList } from "../reducers/recommend"
import VideoCard from "../components/VideoCard"


function Watch(){

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { videoId } = useParams()
    const [metadata , setMetaData] = useState(null)

    async function fetchSingleWatchVideo(){
        const res = await axios.get(YOUTUBE_VIDEO_WATCH_API + videoId )
        const data = res.data
        setMetaData(data.items[0])
    }

    function handleClick(id){
        navigate('/watch/'+ id.videoId)
    }

    const recommend = useSelector(selectRecommendList) 


    useEffect(()=>{
        dispatch(closeSidebar())
        fetchSingleWatchVideo()
    } , [videoId])

    return <div  className="flex justify-around border w-screen gap-5 overflow-auto h-screen">
    
            <div className="ms-20 mt-5">
                <iframe width="900" height="500" className="rounded-xl" src={`https://www.youtube.com/embed/${videoId}?si=xsdeDDT6Fq_HwSFA&autoplay=1&mute=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
                <div className="mt-3">
                    <h2 className="text-xl font-semibold w-3/4">{metadata?.snippet?.localized?.title}</h2>

                <div className="mt-4 flex items-center gap-4">
                    <img src="https://placehold.co/20" height={26} width={26} className="rounded-full" alt="" />
                    <div>
                        <h3>{ metadata?.snippet?.channelTitle }</h3>
                        <p className="text-xs font-medium text-gray-600">1.7M subscribers</p>
                    </div>
                        <img src={bell} alt="" />
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

        <div className="w-[400px] p-4">
            <h1 className="text-2xl font-semibold">Recommendations for you </h1> 
            {
                recommend?.map((item)=>{
                    if(item.id.videoId != videoId ){
                        return <VideoCard stats={item?.statistics} videoData={item?.snippet} handleClick={handleClick} id={item?.id}></VideoCard>
                    }
                })
            } 
        </div>

    </div>
}

export default Watch 
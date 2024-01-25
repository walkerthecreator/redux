import axios from "axios"
import { YOUTUBE_VIDEO_WATCH_API } from "../utils/constant"


function Watch(){
    async function fetchSingleWatchVideo(){
        const res = await axios.get(YOUTUBE_VIDEO_WATCH_API + "0UEhu4uWUAM")
        const data = res.data
        console.log(data)
    }

    useEffect(()=>{
        fetchSingleWatchVideo()
    } , [])

    return <div>

    </div>
}

export default Watch 
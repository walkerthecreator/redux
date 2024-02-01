import { viewsFormat } from "../utils/helper"


function VideoCard({stats , videoData , handleClick , id }){
    return <div className="w-80  cursor-pointer" key={id} onClick={ ()=>{  handleClick(id)}  }>
        <img src={videoData?.thumbnails?.medium?.url} alt="" className="rounded-md w-full"/>

        <div className="flex  items-center w-full">
            <img src={videoData?.thumbnails?.default?.url} alt="" className="w-8 h-8 rounded-full "/>
            <div className="w-full p-2 ">
            <h1 className="text-base font-medium text truncate">{videoData?.title}</h1>
            <div className="flex justify-between  text-xs text-gray-400">
                <span className="font-medium">{ videoData?.channelTitle }</span>
                <span>{ stats && viewsFormat(stats?.viewCount)}</span>
            </div>
            </div>
        </div>
    </div>
}

export default VideoCard
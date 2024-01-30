import { viewsFormat } from "../utils/helper"


function VideoCard({stats , videoData , handleClick , id }){
    return <div className="w-80  cursor-pointer" key={id} onClick={ ()=>{  handleClick(id)}  }>
        <img src={videoData?.thumbnails?.medium?.url} alt="" className="rounded-md w-full"/>

        <div className="flex  items-center w-full">
            <img src="https://placehold.co/20" alt="" className="w-8 rounded-full overflow-hidden"/>
            <div className="w-full py-2 ">

            <h1 className="font-medium text truncate">{videoData?.localized?.title}</h1>
            <div className="flex justify-between my-2 text-xs text-gray-400">
                <span className="font-medium">{ videoData?.channelTitle }</span>
                <span>{viewsFormat(stats?.viewCount)}</span>
            </div>
            </div>
        </div>
    </div>
}

export default VideoCard
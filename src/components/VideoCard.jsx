import { viewsFormat } from "../utils/helper"


function VideoCard({stats , videoData}){
    return <div className="w-72 cursor-pointer mb-10">
        <img src={videoData?.thumbnails?.medium?.url} alt="" className="rounded-md"/>

        <div className="flex gap-2 items-center">
            <img src="https://placehold.co/20" alt="" className="w-8 rounded-full overflow-hidden"/>
            <div className="w-3/4 py-2">

            <h1 className="font-medium text-sm truncate">{videoData?.localized?.title}</h1>
            <div className="flex justify-between text-xs text-gray-400">
                <span className="font-medium">{ videoData?.channelTitle }</span>
                <span>{viewsFormat(stats?.viewCount)}</span>
            </div>
            </div>
        </div>
    </div>
}

export default VideoCard
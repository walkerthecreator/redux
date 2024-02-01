import { useNavigate, useSearchParams } from "react-router-dom"
import { YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API } from "../utils/constant"
import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { closeSidebar } from "../reducers/sidebar"
import { add } from "../reducers/recommend"

function SearchResult(){

    const [searchParams  ] = useSearchParams()
    const [searchResult , setSearchResult] = useState(null) 

    const dispatch = useDispatch()
    const navigate = useNavigate() 

    function handleClick(id){
        navigate(`/watch/${id}`)
    }

    async function fetchQuery(){
        const response = await axios.get(YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API + searchParams.get("query"))
        const data = response.data
        setSearchResult(data.items)
        dispatch(add(data.items))
    }

    useEffect(()=>{
        dispatch(closeSidebar())
        fetchQuery()
    } , [])

    return <div className="w-[90%] ml-36 mt-10">
        {
            (searchResult) ? 
            <div>
                {
                    searchResult?.map((item , index) => {
                        return <div className="flex gap-4 mb-6" onClick={ ()=> { handleClick(item.id.videoId) } }>
                            <img src={item.snippet.thumbnails.medium.url} className="rounded-md" alt="" />
                            <div>
                                <h2 className="text-xl font-medium">{item.snippet.title}</h2>

                                <div className="mt-2 text-xs">
                                    <img src="" alt="" />
                                    <h3 className="text-sm font-medium">{item.snippet.channelTitle}</h3>
                                     <p>{item.snippet.description}</p> 
                                </div>
                            </div>
                            </div>
                    })
                }
            </div>
            :
            "loading"
        }
    </div>
}

export default SearchResult
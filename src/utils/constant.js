
export const YOUTUBE_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=60&regionCode=IN&key=' + API_KEY ;
export const SEARCH_API = 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='
export const CATEGORIES_API = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" + API_KEY;
export const YOUTUBE_VIDEO_WATCH_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&id=`;
export const YOUTUBE_RECOMENDED_VIDEO_LIST_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&key=${API_KEY}&relatedToVideoId=`;
export const YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${API_KEY}&q=`;
export const YOUTUBE_SEARCH = (query) => `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}`




// export const YOUTUBE_SEARCH = (query) => `https://suggestqueries-clients6.youtube.com/complete/search?client=youtube&hl=en&gl=in&gs_rn=64&gs_ri=youtube&ds=yt&cp=2&gs_id=7&q=${query}&xhr=t&xssi=t&key=${API_KEY}`
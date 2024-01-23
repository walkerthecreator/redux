

export const viewsFormat = (views) => {
    switch(true){
        case (views < 1000 ):
            return views
        case (views < 1_000_000):
            return (views/1000).toFixed(1) + "k" ;
        case (views < 100_000_000):
            return (views / 1_000_000).toFixed(1)+ "M" ;
        default :
            return (views / 100_000_000).toFixed(1) + "B" ;
    }
}
export function getstockData(){
    return{
        name: "rbi",
        sym:"rts",
        price: (Math.random()*3).toFixed(2),
        time:new Date().toLocaleTimeString()
    }
}


export const GetData=async (url)=>{
    const response = await fetch(url);
    return response.json();
}

// export const TopHead = async()=>{
//     const top =await fetch("https://newsapi.org/v2/everything?q=india&apiKey=b8d8a5f279af42e7ad8b64b9d6474849",{method:'GET'});
//     return top.json();
// }

// export const GetSports = async() =>{
//     const sportData = await fetch("https://newsapi.org/v2/everything?q=sport&apiKey=b8d8a5f279af42e7ad8b64b9d6474849",{method:'GET'});
//     return sportData.json();
// }



// export const GetSpaceData = async () => {
//     const SpaceData = await fetch('https://newsapi.org/v2/everything?q=Space&apiKey=b8d8a5f279af42e7ad8b64b9d6474849',{method:'GET'});
//     return SpaceData.json();
// }



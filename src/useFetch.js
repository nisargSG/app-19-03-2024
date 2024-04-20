import { useState } from "react"

export default function useFetch(fetchParams) {

    const [data,setData] = useState(null)

    let apiURL = "https://jsonplaceholder.typicode.com/"

    //user end point
    if (fetchParams.endPoint) {
        apiURL = apiURL + fetchParams.endPoint
    }

    //check if any query params or id are there ?
    if (fetchParams.queryParameters) {
        apiURL = apiURL +"/"+ fetchParams.queryParameters
    }

    //prepare options for fetch
    const fetchOptions = {
        method: fetchParams.method ? fetchParams.method : "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    if (fetchParams.dataBody) {
        fetchOptions.body = JSON.stringify(fetchParams.dataBody)
    }

    fetch(apiURL,fetchOptions)
    .then(rawData=>rawData.json())
    .then((json)=>{
        if(data!=json)
            setData(json);
    })
    .catch(e=>{
        console.log(e)
    })

    return data

}
import useFetch from "./useFetch";

export default function MyComment(){
    
    const commentData=useFetch({
        endPoint:"comments",
        queryParameters:"1",
    })


    return (

        <div>

            {commentData==null && "Loading..."}

            {commentData!=null && <h1>{commentData.name}</h1>}

        </div>


    )

}
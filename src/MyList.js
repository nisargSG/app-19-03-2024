import useFetch from "./useFetch";

export default function MyList(){

    const commentsData=useFetch({
        endPoint:"comments",
    })



    return (

        <div>

            {commentsData==null && "Loading..."}

            {commentsData!=null && commentsData.map((item)=>{
                return <h1>{item.name}</h1>
            })}

        </div>


    )

}
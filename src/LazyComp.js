class ApiManager{

    isProgress=true;
    data=null;

    doFetch=async function(){
        const rawData = await fetch('https://jjsonplaceholder.typicode.com/photos')
        const jsonData = await rawData.json()
        return jsonData
    }

    start=function(){

        if(this.isProgress){
            throw this.doFetch().then((r)=>{
                this.isProgress=false;
                this.data=r;  //json
            },(e)=>{
                this.isProgress=false;
                this.data=e   //error  Exception
            })
        }
        else{
            
            if(this.data instanceof Error){
                throw this.data //throw error
            }else{
                return this.data
            }

        }

    }

}


const x = new ApiManager();

export default function LazyComp(){

    const result = JSON.stringify(x.start())

    return(
        <h1>{result}</h1>
    )

}
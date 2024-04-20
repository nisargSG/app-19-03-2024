

let result = null  //data is here

export default function Comp1() {

  if(result==null)

    throw new Promise((resolve,reject)=>{
      setTimeout(()=>{reject("error")},1000)
    }).then((r)=>{result=r},(e)=>{result=e})


    return (<h1>{result}</h1>)

}
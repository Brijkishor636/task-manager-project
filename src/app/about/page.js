

async function timeTake(){
    await new Promise((resolve)=>{
        setTimeout(resolve("Hi there"), 3000);
    })
}


export default async function About(){
    await timeTake();
    setTimeout(()=>{
        console.log("hi bro")
    }, 3000);
    return <div>
        <h1>This is about page...</h1>
    </div>
}
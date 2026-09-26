function getUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Api Solved");
        },2000);
    });
}
async function showData(){
    const data = await getUser();
    console.log(data);
}
showData();
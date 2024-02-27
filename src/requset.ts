export async function getDate(url:string){
    const req = await fetch(url)
    const data=await req.json()
    return data
}
import { posts } from "../data"
export const load = async ({setHeaders, cookies}) =>{
    const data = await makeAPICall();
    return data;
}


function makeAPICall (){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(
                {
                    summaries : posts.map((post)=>({
                        slug : post.slug,
                        title : post.title
                    }))
                }
            )
        }, 0)

    })

}

import { posts } from '../../data.js'
import { error } from '@sveltejs/kit';
export const load = ({params, setHeaders, cookies}) =>{
    setHeaders({
        "Cache-control" : "no-store"
    })
    const visited = cookies.get("visited");
    cookies.set('visited', "true" , {path : "/"})
    const post = posts.find((post)=> post.slug == params.slug)
    if(!post) error(404, "Page not found");
    return {post, visited};
}

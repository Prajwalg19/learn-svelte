import {redirect} from '@sveltejs/kit'

export const actions = {
    default : async ({cookies,url }) =>{
        cookies.set("auth_cookie", "true", {path: "/"})
        redirect(303, url.searchParams.get("redirectTo") ?? "/" );
    }
}

import { redirect } from '@sveltejs/kit'
export const actions = {
    default : async ({cookies})=>{
        cookies.delete("auth_cookie",{path : "/"})
        throw redirect(303, "/") // 303 - "see other" , the requested resource has be moved to a new location
        // 304 - Not modified , the requested resource has not been modified since the last access.
        // the status code plays crucial role which i at first didn't notice. Redirecting with 304 didn't work but with 303 worked.
    }
}


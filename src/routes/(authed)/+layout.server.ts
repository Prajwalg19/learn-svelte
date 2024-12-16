import {redirect} from '@sveltejs/kit';

export const load = ({cookies, url}) =>{
    const isAuth = cookies.get("auth_cookie");
    if(!isAuth)
{
        throw redirect(304, `/login?redirectTo=${url.pathname}`)
    }

}

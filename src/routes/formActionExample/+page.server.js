import * as db from "$lib/database"
import { fail } from "@sveltejs/kit";

export const load = ({cookies, setHeaders}) =>{
    const userId = cookies.get("userId");
    setHeaders({
        "Cache-Control" : "no-store" // re-validates the cache for every request
    })


    if(!userId){
    cookies.set("userId", crypto.randomUUID(), {path : "/"});
    }

    return {
        todos : db.getTodos(userId)
    }
}

export const actions = {
    create : async ({cookies , request})=>{
        const data = await request.formData();
        try{
            await new Promise((resolve,reject)=>{
                setTimeout(()=>{
                   resolve(db.createTodo(cookies.get("userId"), data.get("description")));
                }, 3000)
            })
            // return {
            //     secrets : "my nigga" // this can also be returned on successful form submission
            // }
        }catch(e){
         const ok =  fail(
              422 // unprocessable request
            ,
                {
                    description : data.get("description"),
                    error : e.message
                } // this object is then populated to the form that can be obtained from the $props()  in the frontend like this const {form } = $props();
            )
            console.log(ok)
            return ok;
        }
    },
    delete : async ({cookies, request}) =>{
        const data = await request.formData();
        db.deleteTodo(cookies.get("userId"), data.get("todoId"));
    }
}

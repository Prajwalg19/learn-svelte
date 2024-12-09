import { createTodo } from "$lib/database";
import {json} from "@sveltejs/kit";

export async function POST({request, cookies}) {
    const parsedReq = await request.json();
    const userId =  cookies.get("userId");
    const {id}  = createTodo(userId, parsedReq.description);
    return json({id}, {status: 201});
}


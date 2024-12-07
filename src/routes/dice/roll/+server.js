import {json} from "@sveltejs/kit";

export function GET(){
    const number = Math.floor(Math.random() * 6) +1 ;

    return json(number);
}

export function POST({request}) {
    const parsedReq = request.json();
    return new Response();
}

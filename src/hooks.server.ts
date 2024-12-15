export async function handle({event , resolve}){ // every request passes through this hook
    event.locals.chainkuli = 11111;
    return await resolve(event , {
        transformPageChunk : ({html})=>html.replace("<body", "<body style='color:hotpink'")
    });
}


export async function handleFetch({ event, fetch, request }){
    if(new URL(event.request.url).pathname === '/a'){
        return await fetch("/b");
    }
    return await fetch(request);
}

export async function handleError({error}){

    return {
        message : "Roll on",
        code : "NICEFORWHAT" // we can specify custom keys to access these from the $page store like this $page.error.code that can be used in +error.svelte.ts file
    }

}

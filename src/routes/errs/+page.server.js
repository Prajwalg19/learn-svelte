import { error } from "@sveltejs/kit";

export async function load(){
    // error(420,"Boom brother u hit the page with a truck");  // this error message is for displaying to the end user
    throw new Error("Unexpected error") //only visible in the server logs for developer as it contains sensitive information
}

// export async function load(){

//     throw new Error("Bingo the whole tower gone");

// }

export const load = async ({locals}) =>{

    return {
        wow : locals.chainkuli
    }
}

import { getGIfs } from "../helpers/getGifs";

describe('Pruebas con getGifs Fetch', () =>{

    test('debe de traer 5 elementos', async()=>{

        const gifs = await getGIfs("One Punch");
        expect( gifs.length ).toBe(5);

    });

    test('debe de devolver vacio', async()=>{

        const gifs = await getGIfs('');
        expect( gifs.length ).toBe( 0 );

    });


})
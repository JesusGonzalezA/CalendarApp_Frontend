import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch";
import { user } from '../fixtures/user'

describe('Testing fetch helper', () => {

    let token = '';

    test('FetchWithoutToken should work', async () => {
        
        const resp = await fetchWithoutToken('auth', user, 'POST');
        expect( resp instanceof Response ).toBe( true );

        const body = await resp.json();
        expect( body.ok ).toBe( true );

        token = body.data.token;
    });

    test('FetchWithToken should work with the correct token', async () => {
        
        localStorage.setItem('token', token);

        const resp = await fetchWithToken('events');
        expect( resp instanceof Response ).toBe( true );

        const body = await resp.json();
        expect( body ).toEqual( {
            ok: true,
            data: expect.any(Array)
        });
    });


    test('FetchWithToken should work with an empty token', async () => {
        localStorage.removeItem('token');

        const resp = await fetchWithToken('events');
        expect( resp instanceof Response ).toBe( true );

        const body = await resp.json();
        expect( body ).toEqual( {
            "ok": false,
            "msg": "Token is required"
        });
    });

    test('FetchWithToken should work with an empty token', async () => {

        localStorage.setItem('token', '  t')

        const resp = await fetchWithToken('events');
        expect( resp instanceof Response ).toBe( true );

        const body = await resp.json();
        expect( body ).toEqual( {
            "ok": false,
            "msg": "Token is not valid"
        });
    });
    
    
})

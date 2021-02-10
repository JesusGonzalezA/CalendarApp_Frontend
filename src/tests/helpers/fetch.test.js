import { fetchWithoutToken } from "../../helpers/fetch";

describe('Testing fetch helper', () => {

    test('FetchWithoutToken should work', async () => {
        
        const resp = await fetchWithoutToken('auth', {
            email: 'test@test.test',
            password: 'testtest'
        }, 'POST');
        expect( resp instanceof Response ).toBe( true );

        const body = await resp.json();
        expect( body.ok ).toBe( false );
    })
    
})

import { createContext, useState } from 'react'
import { urlApp  } from '../src/layouts/config/properties'

const CharacterContext = createContext({})

const CharacterProvider = ({children}) => {

    const url = new URL(urlApp + '/character/all')
    const [all, setAll] = useState([]);

    const getAll = async () => {

        const params = [['limit', '20']]
        url.search = new URLSearchParams(params).toString();

        try {

            const response = await fetch(url, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            const result = await response.json();
            setAll(result.data);
            console.log(result)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <CharacterContext.Provider
            value={{
                all,
                setAll,
                getAll,
            }}
        >
            {children}
        </CharacterContext.Provider>
    )
}

export {CharacterProvider, CharacterContext}

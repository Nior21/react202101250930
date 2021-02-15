import {useEffect} from "react";

const TestPage = () => {

    useEffect ( () => {
        async function fetchData() {
            const player2Response = await fetch ( 'https://reactmarathon-api.netlify.app/api/create-player' )
            return player2Response
        }

        const data = fetchData ()

        console.log ( `####: request`, data )
    }, [] )


    return (
        <>

        </>
    )
}

export default TestPage
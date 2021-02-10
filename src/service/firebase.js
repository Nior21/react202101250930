import firebase from "firebase/app";
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyCpzO1F28gHp5nclrC1aoPJlzmTSasKT-o",
    authDomain: "pokemon-game-e1680.firebaseapp.com",
    databaseURL: "https://pokemon-game-e1680-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-e1680",
    storageBucket: "pokemon-game-e1680.appspot.com",
    messagingSenderId: "410074435445",
    appId: "1:410074435445:web:719c2b2623a1156cba0d3c"
};

firebase.initializeApp(firebaseConfig);

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig)

        this.fire = firebase
        this.database = this.fire.database();
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val())
    }
}

export const fire = firebase;
export const database = fire.database();

export default database;
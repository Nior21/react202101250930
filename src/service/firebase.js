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

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

class Firebase {
    constructor() {
        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonSocket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            cb(snapshot.val())
        })
    }

    offPokemonSocket = () => {
        this.database.ref('pokemons').off()
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val())
    }

    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon)
    }

    addPokemon = (data, cb) => {
        const newKey = this.database.ref().child('pokemons').push().key
        this.database.ref(`pokemons/${newKey}`).set(data).then(() => cb())
    }
}

export default Firebase;
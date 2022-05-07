import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { choosePokemon, getPokemon } from '../features/pokemon';


const Profile = () => {
    const user = useSelector((state) => state.user.value)
    const theme = useSelector((state) => state.theme.value)
    const pokemon = useSelector((state) => state.pokemon.value)

    const dispatch = useDispatch()
    const [pokemonState, setPokemon] = useState("")

    const inputHandler = ({ target }) => {
        setPokemon(target.value)
        console.log(pokemonState)
    }
    const submitPokemon = () => {
        dispatch(choosePokemon(pokemonState))
        dispatch(getPokemon({ pokemon: pokemonState },))
    }

    return (
        <div style={{ color: theme }}>
            <h1>Profile Page</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>pokemon: {pokemon.name}</p>

            <input type="text" onChange={inputHandler} />
            <button onClick={submitPokemon}>submit</button>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sean">Sean</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Profile
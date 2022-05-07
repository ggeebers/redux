import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialStateValue = { details: {}, name: "", status: "" };

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: { value: initialStateValue },
    reducers: {
        choosePokemon: (state, action) => {
            state.value.name = action.payload
        }
    },
    extraReducers: {
        [getPokemon.pending]: (state, action) => {
            state.value.status = "loading"
            console.log(action)
        },
        [getPokemon.fulfilled]: (state, action) => {
            state.value.status = "succeeded"
            state.value.details = action.payload
        },
        [getPokemon.rejected]: (state, action) => {
            state.value.status = "failed"
            console.log(action)
        }
    }
});

// actions
export const { choosePokemon } = pokemonSlice.actions;
export const getPokemon = createAsyncThunk('pokemon/getPokemon', async ({ pokemon }, { dispatch }) => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) => res.json())
    return response
})

// reducer
export default pokemonSlice.reducer;
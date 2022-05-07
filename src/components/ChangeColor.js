import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from '../features/theme'

const ChangeColor = () => {

    const dispatch = useDispatch()

    const [color, setColor] = useState("")
    const inputHandler = ({ target }) => {
        setColor(target.value)
        console.log(color)
    }
    const submitColor = () => {
        dispatch(changeColor(color))
    }
    return (
        <div>
            <input type="text" onChange={inputHandler} />
            <button onClick={submitColor}>Change Color</button>
        </div>
    )
}

export default ChangeColor
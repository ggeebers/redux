import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../features/user'

const Login = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.value)

    return (
        <div>

            {user.isLoggedIn ?
                <button onClick={() => dispatch(logout())}>logout</button> :
                <button onClick={() => dispatch(login({ name: "pedro", age: 20, email: "pedro@gmail.com", isLoggedIn: true }))}>login</button>
            }
        </div>
    )
}

export default Login
import axios from 'axios'
import { setUser } from '../reducer/userReducer'
import { useSelector } from 'react-redux'
import { setDoc } from '../reducer/docReducer'


export const registration = async (login, password) => {
    try {
        const res = await axios.post(`http://localhost:3001/registration`, {
            login,
            password
        })
        alert(res.data.message)
    } catch (e) {
        alert(e.res.data.message)
    }
}

export const singin = (login, password) => {
    return async dispatch => {
        try {
            const res = await axios.post(`http://localhost:3001/login`, {
                login,
                password
            })
            dispatch(setUser(res.data.user))
            localStorage.setItem('token', res.data.token)
            console.log(res.data);
        } catch (e) {
            alert(e.res.data.message)
        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const res = await axios.get(`http://localhost:3001/auth`,
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            )
            dispatch(setUser(res.data.user))
            localStorage.setItem('token', res.data.token)
        } catch (e) {
            alert(e.res.data.message)
            localStorage.removeItem('token')
        }
    }
}

export const newDoc = (name, innerData) => {
    return async dispatch => {
        try {
            const res = await axios.post(`http://localhost:3001/addDoc`, {
                name,
                innerData
            })
            dispatch(setDoc(res.data.doc))
            console.log(res.data);
        } catch (e) {
            alert(e.res.data.message)
        }
    }
}

export const editDoc = (id, name, innerData) => {
    return async dispatch => {
        try {
            const res = await axios.post(`http://localhost:3001/docs/edit/${id}`, {
                name,
                innerData
            })
            dispatch(setDoc(res.data.doc))
            console.log(res.data);
        } catch (e) {
            alert(e.res.data.message)
        }
    }
}
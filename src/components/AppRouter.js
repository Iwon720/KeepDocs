import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Documents from './Documents'
import TextEditor from './TextEditor/TextEditor'
import { auth } from '../axios/axios';
import Registration from "../components/Registration"
import Login from "../components/Login"
import { useDispatch, useSelector } from "react-redux";


export default function AppRouter() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [])

    return (
        isAuth ?
            <Routes>
                <Route path='/' element={<Documents />} />
                <Route path='/texteditor' element={<TextEditor />} />
            </Routes>
            :
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/registration' element={<Registration />} />
            </Routes>
    );
}

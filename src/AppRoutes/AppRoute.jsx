import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from '../Pages/Landing'

const AppRoute = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export { AppRoute }
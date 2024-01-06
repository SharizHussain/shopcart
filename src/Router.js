import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Cats from './Cats';
import Discount from './Discount';
import Delivery from './Delivery';

export default function Router() {

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cats' element={<Cats />} />
                    <Route path='/discount' element={<Discount />} />
                    <Route path='/delivery' element={<Delivery />} />
                </Routes>
            </BrowserRouter >
        </>
    )
}

import React from 'react'; //import React library
import { HomePage } from './home';
import { Header } from './navBar'
import { ContactForm } from './contact';
import { MainLocation } from './locations';
import { MachineCards } from './Machine';
import { AboutPage } from './About';
import { RequestForm } from './locationRequest'
import { Route, Routes } from 'react-router-dom';
 import { db } from '../firebase-db.js';


export function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/locations" element={<MainLocation />} />
                <Route path="/locationRequest" element={<RequestForm />} />
                <Route path="/contactRequest" element={<ContactForm />} />
                <Route path="/machine" element={<MachineCards />} />
            </Routes>
        </>
    );
}
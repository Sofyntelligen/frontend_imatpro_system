import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './App.css';

const client = axios.create({
    baseURL: 'http://127.0.0.1:1234'
});

function App() {

    useEffect(() => {
        client.get('/imatpro/api/v1.0.0/mathematical/state/')
            .then(res => {
                console.log(res)
            })
    }, []);

  return (
      <div>
        <Header />
        <main>
            <h1>Frontend ImatPro System</h1>
        </main>
        <Footer />
      </div>
  );
}

export default App;

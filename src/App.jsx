//import { useState } from 'react';
import { Header } from './components/header/Header.jsx';
import { BestSellingBook } from './components/layout/body/bestSellingBook/BestSellingBook.jsx';
//import { BookCollection } from './components/layout/body/bookCollection/BookCollection.jsx';
//import { HoldStill } from './components/layout/body/holdStill/HoldStill.jsx';
import { Footer } from './components/footer/Footer';
import './App.css';

export default function App() {

  return (
    <div className="app">
      <Header />

      <main>
        <BestSellingBook/>
      </main>

      <Footer />
    </div>
  );
}

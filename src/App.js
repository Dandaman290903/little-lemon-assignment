import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/about" element={<section><h2>About</h2></section>} />
          <Route path="/menu" element={<section><h2>Menu</h2></section>} />
          <Route path="/order" element={<section><h2>Order Online</h2></section>} />
          <Route path="/login" element={<section><h2>Login</h2></section>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
export default App;

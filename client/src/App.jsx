import { Routes, Route } from "react-router-dom";

import { useState, useEffect } from 'react'


import HomePage from "./Pages/HomePage";
import CodeAnalyzePage from "./Pages/CodeAnalyzePage";
import ExpressionEvaluationPage from "./Pages/ExpressionEvaluationPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/expression" element={<ExpressionEvaluationPage />} />
        <Route path="/analyze" element={<CodeAnalyzePage />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App

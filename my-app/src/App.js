import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Countries from "./components/Countries";
import Filter from "./components/Filter";

function App() {
  return (
    <>
      <Header />
      <Filter />
      <Countries />
    </>
  );
}

export default App;

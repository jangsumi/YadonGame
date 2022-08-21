import React from "react";
import StartPage from "./pages/start";
import GamePage from "./pages/game";
import LoadingPage from "./pages/loading";
import MenuPage from "./pages/menu";
import RankPage from "./pages/rank";
import ResultPage from "./pages/result";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/rank" element={<RankPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

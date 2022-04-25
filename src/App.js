import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from './pages/homePage'
import DetailsPage from './pages/detailsPage/detailsPage';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path ="/" element={<HomePage />} />
                <Route path="/:name" element={<DetailsPage />} />
            </Routes>
        </div>
    );
}

export default App;
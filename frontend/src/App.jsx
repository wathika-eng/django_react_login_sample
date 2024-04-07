import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "./components/login.jsx";
import { Home } from "./components/home.jsx";
import { Navigation } from './components/navigate.jsx';
import { Logout } from './components/logout.jsx';
import './components/axios';
function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom'
import Home from './page/home'
import About from './page/about'

function App() {
    return (
        <div>
            <div className="vertical-layout">
                <div className="horizontal-layout">
                    <NavLink to="/">Home </NavLink>
                    <NavLink to="/about">About </NavLink>
                </div>
                <div className="vertical-layout">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;

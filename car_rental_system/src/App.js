import './Styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

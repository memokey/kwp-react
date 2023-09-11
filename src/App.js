import './App.css';
import KWNavbar from './components/navbar/navbar';
import KWFooter from './components/footer/footer';
import { Home } from './pages/Home/Home';
import { Browse } from './pages/Browse/Browse';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Properties } from './pages/Properties/properties';
import { Commercial } from './pages/Commercial/Commercial';
import { Students } from './pages/Students/Students';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="browse" element={<Browse />} />
        <Route path="properties" element={<Properties />} />
        <Route path="commercial" element={<Commercial />} />
        <Route path="student" element={<Students />} />
        <Route path="properties" element={<Properties />} />
      </Routes>
    </>
  );
}

export default App;

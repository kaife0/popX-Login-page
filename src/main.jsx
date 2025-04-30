import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './global.css';
import App from './App.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { MyProvider } from './context/DetailsContext.jsx';

createRoot(document.getElementById('root')).render(
  <MyProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </MyProvider>
);

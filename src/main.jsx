import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './routes/Home.jsx';
import Trekking from './routes/Trekking.jsx';
import Camping from './routes/Camping.jsx';
import Adventures from './routes/Adventures.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path='/trekking' element={<Trekking/>}/>
      <Route path='/camping' element={<Camping/>}/>
      <Route path='/adventure-activities' element={<Adventures/>}/>
      <Route path='/nature-education' element={<Trekking/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)

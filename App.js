import './App.css'
import { BrowserRouter, Router, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Homescreen from './screens/Homescreens';
import Apply from './screens/Apply.js';
import Team from './screens/Team.js';
import Contact from './screens/Contact.js';
import FAQ from './screens/FAQ.js';

import { useNavigate } from 'react-router-dom';
import React from 'react';

function App() {
    return(
        <>
          <Routes>
            <Route path = "/" element ={<Homescreen />}/>
            <Route path = "/Apply" element ={<Apply />}/>
            <Route path = "/Team" element ={<Team />} />
            <Route path = "/Contact" element ={<Contact />} />
            <Route path = "/FAQ" element ={<FAQ />} />
          </Routes>
        </>
    )
}
export default App;
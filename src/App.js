
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import AboutUs from './routes/AboutUs';
import Nepal from './routes/Nepal';
import Bhutan from './routes/Bhutan';
import Tibet from './routes/Tibet'
import India from './routes/India';
import Inquiry from './routes/Inquiry';
import Contact from './routes/Contact';




function App() {
  return (
   <div >
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/Nepal" element={<Nepal/>}/>
      <Route path="/Bhutan" element={<Bhutan/>}/>
      <Route path='/Tibet' element={<Tibet/>}/>
      <Route path='/India' element={<India/>}/>
      <Route path='/Inquiry' element={<Inquiry/>}/>
      <Route path='/Contact' element={<Contact/>}/>




  

    </Routes>

   
    
        
   </div>
  );
}

export default App;

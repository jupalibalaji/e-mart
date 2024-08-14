
import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import ACpage from "./New folder/pages/ACpage";
import Computerspage from "./New folder/pages/Computerspage";
import Furniturepage from "./New folder/pages/Furniturepage";
import { LandingPage } from "./New folder/pages/LandingPage";
import Menpage from "./New folder/pages/menpage";
import Mobilespage from "./New folder/pages/mobilespage";
import Watchpage from "./New folder/pages/Watchpage";
import Womenpage from "./New folder/pages/Womenpage";
import ACspage from "./New folder/singlepages/ACspage";
import Cartpage from "./New folder/singlepages/cartpage";
import Computersspage from "./New folder/singlepages/Computersspage";
import Furniturespage from "./New folder/singlepages/Furniturespage";
import Menspage from "./New folder/singlepages/Menspage";
import Mobilesspage from "./New folder/singlepages/mobilesspage";
import Watchespage from "./New folder/singlepages/Watchespage";
import Womenspage from "./New folder/singlepages/Womenspage";


const App = () => {


  return (

    <>
    <Routes>
  <Route path='/' element={ <LandingPage/>}/>
 
   <Route path='/acs' element={ <ACpage/>}/>
   <Route path='/com' element={ <Computerspage/>}/>
   <Route path='/fur' element={ <Furniturepage/>}/>
   <Route path='/men' element={ <Menpage/>}/>
   <Route path='/mob' element={ <Mobilespage/>}/>
   <Route path='/wat' element={ <Watchpage/>}/>
   <Route path='/wom' element={ <Womenpage/>}/>
     <Route path='/mob/:id' element={<Mobilesspage/>}/>
     <Route path='/acs/:id' element={<ACspage/>}/>
     <Route path='/com/:id' element={<Computersspage/>}/>
     <Route path='/fur/:id' element={<Furniturespage/>}/>
     <Route path='/men/:id' element={<Menspage/>}/>
      <Route path='/wat/:id' element={<Watchespage/>}/>
     <Route path='/wom/:id' element={<Womenspage/>}/>
     <Route path='/cart' element={<Cartpage/>}/>
     </Routes>
    </>
    )
}

export default App ;
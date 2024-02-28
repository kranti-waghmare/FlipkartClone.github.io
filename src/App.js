
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import NavbarNew from './components/NavbarNew';
import Homepage from './components/Homepage'
import Flipkartproduct from './components/Flipkartproduct';
import Flipkartcart from './components/Flipkartcart';
import Flipkartfooter from './components/Flipkartfooter';
import { CartProvider } from 'react-use-cart';

import Fashion from './components/Fashion';
import Beuty from './components/Beuty';
import Grocery from './components/Grocery';
import Electronics from './components/Electronics';
import Kidswear from './components/Kidswear';
import Furniture from './components/Furniture';
import Home from './components/Home';











function App() {
  
 
  return (

    <>

    
    <CartProvider>

    <Router>

      <NavbarNew/><br></br>
    
      

      <Routes>

        <Route path='/' element= {<Homepage/>}/>

        <Route path='/flipkartproduct/:id' element= {<Flipkartproduct/>}/>

        <Route path='/flipkartcart' element= {<Flipkartcart/>}/>

        <Route path='/Grocery' element={<Grocery/>}/>

        <Route path='/Fashion' element={<Fashion/>}/>

        <Route path='/Beuty' element={<Beuty/>}/>

        <Route path='/Electronics' element={<Electronics/>}/>

        <Route path='/Kidswear' element={<Kidswear/>}/>

        <Route path='/Furniture' element={<Furniture/>}/>

        <Route path='/Home' element={<Home/>}/>

        
        
       
        </Routes><br></br>

    <Flipkartfooter/>
    
    
    </Router>

    </CartProvider>

    </>

    

    
  );
}

export default App;


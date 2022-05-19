import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addfriend from './Component/Addfriend';
import Viewfriend from './Component/Viewfriend';
import Nav from './Component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
      <Route path='/' exact element={<Addfriend/>}/>
      <Route path='/view' exact element={<Viewfriend/>}/>
</Routes>

</BrowserRouter>
</>
    

      );
}

export default App;

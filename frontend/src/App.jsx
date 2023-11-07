

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screen/Home';
import Register from './screen/Register.jsx';
import Login from './screen/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />}>

          </Route>
          <Route path='/:id' element={<Home />}>

          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>

  );
}

export default App;
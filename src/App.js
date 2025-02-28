import './App.css';
import Product from './product';

import "./style.css"

import bg from "./photos/Vector.png"

import { Fragment } from 'react';
import Categories from './categories';
import { BrowserRouter, Routes,Route } from 'react-router';


function App() {
  return (
    <Fragment>
      <img src={bg} alt="page background" className={"screenbg"} />
        <main className="viewpart">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Categories/> } />
            <Route path="/products" element={<Product/> } />
        </Routes>
        </BrowserRouter>
      </main>
    </Fragment>

  );
}

export default App;

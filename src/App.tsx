import React from 'react';
import '../src/assets/scss/styles.scss'

import Header from "./components/Header/Header";
import Cart from "./components/Cart";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
  return (
    < >
      <Header />
      <Cart />
      <Main />
      <Footer />

      {/*=============== SCROLL UP ===============*/}
      <a href="#" className="scrollup" id="scroll-up">
        <i className='bx bx-up-arrow-alt scrollup__icon'></i>
      </a>
    </>
  );
}

export default App;

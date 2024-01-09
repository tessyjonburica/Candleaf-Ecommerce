// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { CartProvider } from './CartContext';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Layout from './pages/Layout';
// import Home from './pages/Home';
// import Nopage from './pages/Nopage';
// import AllProducts from './pages/Products';
// import DetailPage from './pages/Detailpage';
// import Cart from './components/Cart';
// import { AuthProvider } from './AuthContext';
// import AuthPage from './pages/AuthenticationPage';


// function App() {
//   return (
//     <>
//       <AuthProvider>

//         <CartProvider>
//           <BrowserRouter>
//             <Routes>
//               <Route path="/" element={<Layout />}>
//                 <Route index element={<Home />} />
//                 <Route path="products" element={<AllProducts />} />
//                 <Route path="auth" element={<AuthPage />} />
//                 <Route path="/:productId?/Detailpage" element={<DetailPage />} />
//                 <Route path="/cart" element={<Cart />} />
//                 <Route path="*" element={<Nopage />} />
//               </Route>
//             </Routes>
//           </BrowserRouter>

//         </CartProvider>
//       </AuthProvider>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <App />

// );


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CartProvider } from './CartContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Nopage from './pages/Nopage';
import AllProducts from './pages/Products';
import DetailPage from './pages/Detailpage';
import Cart from './components/Cart';
import { AuthProvider } from './AuthContext';
import AuthPage from './pages/AuthenticationPage';

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="products" element={<AllProducts />} />
                <Route path="auth" element={<AuthPage />} />
                <Route path="/:productId?/Detailpage" element={<DetailPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Nopage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

)



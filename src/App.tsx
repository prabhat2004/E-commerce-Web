import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';

const Home = React.lazy(() => import('./Pages/Home'))
const Collections = React.lazy(() => import('./components/Collections/Collections'))
const ProductsIndex = React.lazy(() => import('./components/Products/ProductsIndex'))
const ProductView = React.lazy(() => import('./components/Home/ProductView'))
const Products = React.lazy(() => import('./Pages/Products'));
const Login = React.lazy(() => import('./Pages/Login'));
const Register = React.lazy(() => import('./Pages/Register'));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="shop" element={<Products />} />
          <Route path="products" element={<ProductsIndex />} />
          <Route path="collections" element={<Collections />} />
          <Route path={`view/:id`} element={<ProductView />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

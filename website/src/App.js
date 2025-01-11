import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import MealsHome from './pages/MealsHome';
import DessertsHome from './pages/DessertsHome';
import MealsCount from './pages/MealsCount';
import DessertsCount from './pages/DessertsCount';
import TopRestaurant from './pages/TopRestaurant';
import TopDessert from './pages/TopDessert';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path='home' element={<Home />}/>
        <Route path='meals-home' element={<MealsHome />} />
        <Route path='desserts-home' element={<DessertsHome />} />
        <Route path='meals-count' element={<MealsCount />} />
        <Route path='desserts-count' element={<DessertsCount />} />
        <Route path='top-restaurant' element={<TopRestaurant />} />
        <Route path='top-dessert' element={<TopDessert />} />
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default App;

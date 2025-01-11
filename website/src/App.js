import logo from './logo.svg';
import './App.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import MealsHome from './pages/MealsHome';
import DessertsHome from './pages/DessertsHome';
import MealsCount from './pages/MealsCount';
import DessertsCount from './pages/DessertsCount';
import TopRestaurant from './pages/TopRestaurant';
import TopDessert from './pages/TopDessert';
import MealRecap from './pages/MealRecap';
import DessertRecap from './pages/DessertRecap';

function App() {
  return <HashRouter>
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
        <Route path='meal-recap' element={<MealRecap />} />
        <Route path='dessert-recap' element={<DessertRecap />} />
      </Route>
    </Routes>
  </HashRouter>;
}

export default App;

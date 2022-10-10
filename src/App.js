import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, }
	from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import news from './pages/news'
import News from './pages/news';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/news' element={<News/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/blogs' element={<Blogs/>} />
		<Route path='/sign-up' element={<SignUp/>} />
	</Routes>
	</Router>
);
}

export default App;

import {Routes, Route, useLocation} from 'react-router-dom';
import { useEffect } from 'react';

import './assets/scss/styles.scss';

import Default from './layouts/Default';
import Home from './pages/Home';
import Service from './pages/Service';
import Company from './pages/Company';
import Career from './pages/Career';
import News from './pages/News';
import Contact from './pages/Contact-us';
import CareerPosition from './pages/CareerPositionSubPage';
import NewsDetail from './pages/NewsDetailSubPage';
import PeopleDetails from './pages/CompanyPeopleSubPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  const hash = useLocation().hash;
  useEffect(() =>{
    if (hash !== '') {
      const top = document.querySelector(hash).offsetTop || 0;
      window.scrollTo({top, behavior: 'smooth'})
    }
  },[hash])


  return (
    <div className="page-wrapper">
      <Routes>
        <Route path='/' element={<Default />}>
          <Route index element={<Home />} />
          <Route path='service/' element={<Service />} />
          <Route path='company/' element={<Company />} />
          <Route path='company/:hash' element={<PeopleDetails />} />
          <Route path='career/' element={<Career />} />
          <Route path='career/:hash' element={<CareerPosition />} />
          <Route path='news/' element={<News />} />
          <Route path='news/:hash' element={<NewsDetail />} />
          <Route path='contact-us/' element={<Contact />} />
          <Route path='privacy-policy/' element={<PrivacyPolicy />} />
        </Route>
      </Routes>
      <ToastContainer />
      <ScrollToTop />
    </div>
  );
}

export default App;

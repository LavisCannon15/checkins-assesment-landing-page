import './App.css';

import Header from '../header/header';


import Hero from '../hero/hero';

import Mission from '../mission/mission';



import Features from '../features/features';

import Membership from '../membership/membership';

import Testimonials from "../testimonials/testimonials";

import Form from '../form/form';

import Faq from '../faq/faq';

import Footer from '../footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Mission/>
      <Features/>
      <Membership/>
      <Testimonials/>
      <Form />
      <Faq />
      <Footer/>
    </div>
  );
}

export default App;

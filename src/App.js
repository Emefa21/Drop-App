import React from 'react'
import Header from "./components/Header";
import 'antd/dist/antd.css';
// import { fab } from '@fortawesome/free-brands-svg-icons'
import Content from './components/Content';
import Footer from './components/Footer';
// import Dropbox from './components/Dropbox';
import './App.css'




function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
      {/* <Dropbox /> */}
      
    </div>
  );
}

export default App;

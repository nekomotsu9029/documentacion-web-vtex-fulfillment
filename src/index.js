import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './settings/reportWebVitals';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Components
import Navbar from './components/NavBar';

import Home from './views/Home.js';
import PickingPacking from './views/PickingPacking.js';
import PickingMovil from './views/PickingMovil.js';
import Tracking from './views/Tracking.js';
import Support from './views/Support.js';
import Insights from './views/Insights.js';
import Settings from './views/Settings.js';
import User from './views/User.js';
import About from './views/About.js';
import Question from './views/Question.js';
import Api from './views/Api.js';

const App = ()=>{
  const [language, setLanguage] = useState('');
  const lightBox = () => {
    function lightbox(url, album) {
        if(!document.querySelector('#lightbox_nekomotsu').classList.contains('active')){
            document.querySelector('#lightbox_nekomotsu').innerHTML = `<img id="img_lightbox_nekomotsu" class="animate__animated" src="${url}" />`
            
            if(album){
                document.querySelector('#lightbox_nekomotsu').innerHTML += `<div id="preview-album_lightbox_nekomotsu"></div>`
    
                document.querySelectorAll('.lightbox-album').forEach(function(element){
                    document.querySelector('#preview-album_lightbox_nekomotsu').innerHTML += `<img src="${element.src}" class="lightbox lightbox-album lightbox-preview" />`
                })
    
            }
            
            document.querySelector('body').classList.add('no_scroll');
            document.querySelector('#lightbox_nekomotsu').classList.remove('animate__fadeOut')
            document.querySelector('#lightbox_nekomotsu').classList.add('active', 'animate__fadeIn')
            document.querySelector('#img_lightbox_nekomotsu').classList.add('active', 'animate__fadeInDown')
    
            document.querySelectorAll('img').forEach(function(element){
                element.addEventListener('click', function (ev) {
                    if(element.classList.contains('lightbox-preview')){
                        lightbox(element.src, element.classList.contains('lightbox-album'));
                    }
                    ev.stopPropagation();
                })
            })
        }else{
            document.querySelector('#img_lightbox_nekomotsu').src = url;
        }
        
        let ancho = document.querySelector('#img_lightbox_nekomotsu').width;
        let alto = document.querySelector('#img_lightbox_nekomotsu').height;
        
        if(ancho>alto){
            document.querySelector('#img_lightbox_nekomotsu').classList.add('img_x')
        }else{
            document.querySelector('#img_lightbox_nekomotsu').classList.remove('img_x')
        }
    }
    
    function lightbox_video(url){
        document.querySelector('#lightbox_nekomotsu').innerHTML = `<video id="video_lightbox_nekomotsu" controls class="animate__animated">
        <source src="${url}" type="video/mp4">
    </video>`
        document.querySelector('body').classList.add('no_scroll');
        document.querySelector('#lightbox_nekomotsu').classList.remove('animate__fadeOut')
        document.querySelector('#lightbox_nekomotsu').classList.add('active', 'animate__fadeIn')
        document.querySelector('#video_lightbox_nekomotsu').classList.add('active', 'animate__fadeInDown')
    
    }
    
    document.querySelector('#lightbox_nekomotsu').addEventListener('click', function (ev) {
        ev.stopPropagation();
        document.querySelector('body').classList.remove('no_scroll');
        document.querySelector('#lightbox_nekomotsu').classList.remove('animate__fadeIn')
        document.querySelector('#lightbox_nekomotsu').classList.add('animate__fadeOut')
        setTimeout(function () {
            document.querySelector('#lightbox_nekomotsu').classList.remove('active')
        }, 500)
    })
    
    document.querySelectorAll('img.lightbox').forEach(function (element) {
        element.addEventListener('click', function () {
            lightbox(element.src, element.classList.contains('lightbox-album'));
        })
    });
  }
  return (
    <Router>
      <Navbar language={language} setLanguage={setLanguage} lightBox={lightBox}></Navbar>
      <Routes>
        <Route path="/" element={<Home language={language} setLanguage={setLanguage} />} />
        <Route path="/picking-packing" element={<PickingPacking language={language} lightBox={lightBox} />} />
        <Route path="/picking-mobile" element={<PickingMovil language={language} lightBox={lightBox} />} />
        <Route path="/tracking" element={<Tracking language={language} lightBox={lightBox} />} />
        <Route path="/support" element={<Support language={language} lightBox={lightBox} />} />
        <Route path="/insights" element={<Insights language={language} lightBox={lightBox} />} />
        <Route path="/settings" element={<Settings language={language} lightBox={lightBox} />} />
        <Route path="/users" element={<User language={language} lightBox={lightBox} />} />
        <Route path="/about" element={<About language={language} lightBox={lightBox} />} />
        <Route path="/questions" element={<Question language={language} lightBox={lightBox} />} />
        <Route path="/api" element={<Api language={language} lightBox={lightBox} />} />
      </Routes>
    </Router>
  )

}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import styles from './style.css'

const NavBar = ({language, setLanguage, lightBox})=>{

    useEffect(()=>{
        lightBox();
    });

    const demo = (url)=>{
        document.querySelector('#lightbox_nekomotsu').innerHTML = `<video id="video_lightbox_nekomotsu" controls class="animate__animated">
            <source src="${url}" type="video/mp4">
        </video>`
            document.querySelector('body').classList.add('no_scroll');
            document.querySelector('#lightbox_nekomotsu').classList.remove('animate__fadeOut')
            document.querySelector('#lightbox_nekomotsu').classList.add('active', 'animate__fadeIn')
            document.querySelector('#video_lightbox_nekomotsu').classList.add('active', 'animate__fadeInDown')
    }

    const changeLanguage = (lng)=>{
        setLanguage(lng)
    }

    const [menu, setMenu] = useState(false);

    return (
        <Fragment>
            <nav className="menu">
                <Link to="/" className="logo">
                    <strong className="text-vtex">VTEX Fulfillment</strong>
                </Link>
                <button className="item-dropdown color-dark hover-vtex menu-expand">
                    { language == '' ? 'Secciones' : 'Sections'}
                    <i className="fas fa-caret-down"></i>
                    <div className="menu-dropdown">
                        <Link to={'/picking-packing'} className="item-dropdown hover-vtex">{ language == '' ? 'Picking y Packing' : 'Picking & packing'}</Link>
                        <Link to={'/picking-mobile'} className="item-dropdown hover-vtex">{ language == '' ? 'Picking movil' : 'Picking mobile'}</Link>
                        <Link to={'/tracking'} className="item-dropdown hover-vtex">Tracking</Link>
                        <Link to={'/support'} className="item-dropdown hover-vtex">{ language == '' ? 'Soporte' : 'Support'}</Link>
                        <Link to={'/insights'} className="item-dropdown hover-vtex">{ language == '' ? 'Perspectivas' : 'Insights'}</Link>
                        <Link to={'/settings'} className="item-dropdown hover-vtex">{ language == '' ? 'Configuracion' : 'Settings'}</Link>
                        <Link to={'/users'} className="item-dropdown hover-vtex">{ language == '' ? 'Usuario' : 'Users'}</Link>
                    </div>
                </button>
                <Link to="/api" className="item hover-vtex menu-expand">Api Docs</Link>
                <a onClick={()=>{demo('/video/video1.mp4')}} className="item hover-vtex ms-auto menu-expand">
                    <i className="fas fa-video"></i>
                    Video
                </a>
                <Link to="/about" className="item hover-vtex menu-expand">{ language == '' ? 'Acerca de' : 'About'}</Link>
                <div className="vertical-divider menu-expand"></div>
                <button className="item-dropdown color-dark hover-vtex menu-expand">
                <i className="fas fa-language"></i>
                    { language == '' ? 'Idioma' : 'Languages'}
                    <i className="fas fa-caret-down"></i>
                    <div className="menu-dropdown menu-dropdown-right">
                        <a onClick={()=>{changeLanguage('')}} className="item-dropdown hover-vtex">Español</a>
                        <a onClick={()=>{changeLanguage('/en')}} className="item-dropdown hover-vtex">Ingles</a>
                    </div>
                </button>
                <button onClick={()=>{setMenu(!menu)}} className="dropdown-menu-movil ms-auto menu-colapse"><i className="fas fa-bars"></i></button>
                {
                    menu && 
                    <div className="dropdown-menu menu-colapse">
                        <button className="item-dropdown color-dark">
                            { language == '' ? 'Secciones' : 'Sections'}
                            <i className="fas fa-caret-down"></i>
                            <div className="menu-dropdown">
                                <Link onClick={()=>{setMenu(!menu)}} to={'/picking-packing'} className="item-dropdown hover-vtex">{ language == '' ? 'Picking y Packing' : 'Picking & packing'}</Link>
                                <Link onClick={()=>{setMenu(!menu)}} to={'/picking-mobile'} className="item-dropdown hover-vtex">{ language == '' ? 'Picking movil' : 'Picking mobile'}</Link>
                                <Link onClick={()=>{setMenu(!menu)}} to={'/tracking'} className="item-dropdown hover-vtex">Tracking</Link>
                                <Link onClick={()=>{setMenu(!menu)}} to={'/support'} className="item-dropdown hover-vtex">{ language == '' ? 'Soporte' : 'Support'}</Link>
                                <Link onClick={()=>{setMenu(!menu)}} to={'/insights'} className="item-dropdown hover-vtex">{ language == '' ? 'Perspectivas' : 'Insights'}</Link>
                                <Link onClick={()=>{setMenu(!menu)}} to={'/settings'} className="item-dropdown hover-vtex">{ language == '' ? 'Configuracion' : 'Settings'}</Link>
                                <Link onClick={()=>{setMenu(!menu)}} to={'/users'} className="item-dropdown hover-vtex">{ language == '' ? 'Usuario' : 'Users'}</Link>
                            </div>
                        </button>
                        <Link to="/api" onClick={()=>{setMenu(!menu)}} className="item color-dark hover-vtex">Api Docs</Link>
                        <Link to="/about" onClick={()=>{setMenu(!menu)}} className="item color-dark hover-vtex">{ language == '' ? 'Acerca de' : 'About'}</Link>
                        <button className="item-dropdown color-dark">
                        <i className="fas fa-language"></i>
                            { language == '' ? 'Idioma' : 'Languages'}
                            <i className="fas fa-caret-down"></i>
                            <div className="menu-dropdown menu-dropdown-right">
                                <a onClick={()=>{changeLanguage('')}} className="item-dropdown hover-vtex">Español</a>
                                <a onClick={()=>{changeLanguage('/en')}} className="item-dropdown hover-vtex">Ingles</a>
                            </div>
                        </button>
                    </div>
                }
            </nav>
        </Fragment>
    )
}

export default NavBar;
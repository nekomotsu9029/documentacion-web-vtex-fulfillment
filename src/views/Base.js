import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Base = ({ language, lightBox }) => {
   useEffect(()=>{
       lightBox();
   });
    return (
        <Fragment>
            <div className="container-fluid mt-5 pt-5">
                <div className="row">
                    <div className="col-lg-3 border-bottom">
                        <div className="sticky-top-2 p-3">
                            <h3 className="text-vtex">Contenido</h3>
                            {
                                language == '' &&
                                <ul className="sidebar-links">
   
                                 </ul>
                                || 
                                <ul className="sidebar-links">

                                 </ul>
                            }
                        </div>
                    </div>
                    <div className="col-lg-1"></div>

                    {
                        language == '' &&
                        <div className="col-lg-6 p-3">

                        </div>
                        ||
                        <div className="col-lg-6 p-3">

                        </div>
                    }

                </div>
            </div>
        </Fragment>
    )
}

export default Base;
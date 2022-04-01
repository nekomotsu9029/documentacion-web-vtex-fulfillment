import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const About = ({ language, lightBox }) => {
    const keyLeft = `{`;
    const keyRight = `}`;
    useEffect(() => {
        lightBox();
    });
    return (
        <Fragment>
            <div className="container-fluid mt-5 pt-5">
                <div className="row">
                    <div className="col-lg-3 border-bottom">
                        <div className="sticky-top-2 p-3">
                            <h3 className="text-vtex">Contenido</h3>
                            <ul className="sidebar-links">
                                <li className="sidebar-sub-header">
                                    <a href="#custom-data" className="sidebar-link">Custom Data</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>

                    <div className="col-lg-6 p-3">
                        <div>
                            <h2 id="custom-data" className="pt-0">Custom Data</h2>
                            <div>
                                <strong>Rules</strong>
                                <br />
                                <small className="bg-light p-1">It is intended that the "CustomData" object has only "String" or primitive data types, avoiding passing objects or lists as value for the correct display of the "CustomData"</small>
                            </div>
                            <div className="accordion accordion-flush mt-3">
                                        <div className="accordion-item border">
                                            <h2 className="accordion-header pt-0"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-5">code example</button></h2>
                                            <div id="flush-5" className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <code>
                                                        <textarea className="form-control" disabled="">{
`{
    major: "int",
    id: "data-personalizada",
    fields: {
      criterio_sustitucion: "String",
      franquicia_contraentrega: "int",
      beneficio_serfinanza: "Boolean",
      redime_puntos: "Boolean"
    }
}`}</textarea>
                                                    </code>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default About;
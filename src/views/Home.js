import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = ({ language, setLanguage }) => {
    return (
        <Fragment>
            <div className="container pt-5 mt-5">
                <div className="row">
                    <div className="col-lg-3"></div>
                    {
                        language == '' &&
                        <div className="col-lg-6 pt-5">
                            <h1 className="" id="vtex-fulfillment">VTEX Fulfillment</h1>
                            <p><em>Esta es la documentación oficial de la aplicación de Fulfillment, donde se podrán administrar usuarios y procesos de picking y packing. Asimismo, es posible realizar el seguimiento del proceso de entrega de los productos.</em></p>
                            <div className="custom-block tip">
                                <p className="custom-block-title pt-3">
                                    ¿Qué es VTEX Fulfillment?
                                </p>
                                <p>
                                    Es un sistema de gestión de pedidos que sirve para que venda y atienda pedidos desde cualquier lugar con facilidad.
                                </p>
                            </div>
                            <div className="w-100 d-flex justify-content-center mt-4">
                                <Link to="/picking-packing" className="btn bg-vtex text-white">Comenzar ahora</Link>
                            </div>
                            <div>
                            </div>
                        </div> ||
                        <div className="col-lg-6 pt-5">
                            <h1 className="" id="vtex-fulfillment">VTEX Fulfillment</h1>
                            <p><em>This is the official documentation of the Fulfillment app, where you can manage user administration, picking, and packing, as well as complete product tracking.</em></p>
                            <div className="custom-block tip"><p className="custom-block-title pt-3">What is VTEX Fulfillment</p> <p>It is an order management system, and it allows selling and fulfilling orders from anywhere, with ease.</p></div>
                            <div className="w-100 d-flex justify-content-center mt-4">
                                <Link to="/picking-packing" className="btn bg-vtex text-white">Start now</Link>
                            </div>
                            <div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Home;
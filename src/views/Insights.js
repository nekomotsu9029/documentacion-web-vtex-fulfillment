import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const PickingMovil = ({ language, lightBox }) => {
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
   <li>
      <a href="#" aria-current="page" className="active sidebar-link">Perspectivas</a>
      <ul className="sidebar-sub-headers">
         <li className="sidebar-sub-header"><a href="#total-pedidos" className="sidebar-link">Total pedidos</a></li>
         <li className="sidebar-sub-header"><a href="#resumen" className="sidebar-link">Resumen</a></li>
         <li className="sidebar-sub-header"><a href="#filtros" className="sidebar-link">Filtros</a></li>
         <li className="sidebar-sub-header"><a href="#categorias" className="sidebar-link">Categorias</a></li>
         <li className="sidebar-sub-header"><a href="#productos" className="sidebar-link">Productos</a></li>
         <li className="sidebar-sub-header"><a href="#flujo-de-pedidos" className="sidebar-link">Flujo de pedidos</a></li>
         <li className="sidebar-sub-header"><a href="#razones-de-rechazo-reemplazo-y-cambio-de-precio" className="sidebar-link">Razones de rechazo, reemplazo y cambio de precio</a></li>
      </ul>
   </li>
</ul>
                                || 
                                <ul className="sidebar-links">
   <li>
      <a href="#" aria-current="page" className="active sidebar-link">Insights</a>
      <ul className="sidebar-sub-headers">
         <li className="sidebar-sub-header"><a href="#total-orders" className="sidebar-link">Total orders</a></li>
         <li className="sidebar-sub-header"><a href="#summary" className="sidebar-link">Summary</a></li>
         <li className="sidebar-sub-header"><a href="#filters" className="sidebar-link">Filters</a></li>
         <li className="sidebar-sub-header"><a href="#categories" className="sidebar-link">Categories</a></li>
         <li className="sidebar-sub-header"><a href="#products" className="sidebar-link">Products</a></li>
         <li className="sidebar-sub-header"><a href="#order-flow" className="sidebar-link">Order flow</a></li>
      </ul>
   </li>
</ul>
                            }
                        </div>
                    </div>
                    <div className="col-lg-1"></div>

                    {
                        language == '' &&
                        <div className="col-lg-6 p-3">
                            <h1 id="perspectivas">Perspectivas</h1>
<p><em>En esta seccion se ofrecen graficos e informacion agrupada con respecto a los pedidos en todos sus estados asi como datos referentes a los metodos de pago y los elementos comprados con el fin de resumir informacion estadistica.</em></p>
<p><img className="lightbox" src="https://i.ibb.co/P6kzxKb/1.png"/></p>
<h2 id="total-pedidos">Total pedidos</h2>
<p><em>En esta seccion se podra ver una grafica en tiempo real, exponiendo la informacion agrupada de todos los pedidos, con relacion al periodo anterior, esta grafica atiende de forma general todos los pedidos por defecto, pero puede variar en funcion de los <a href="#filtros">filtros</a> aplicados.</em></p>
<p><img className="lightbox" src="https://i.ibb.co/jrqrzt8/2.png"/></p>
<h2 id="resumen">Resumen</h2>
<p><em>El apartado de resumen se encuentra a la derecha de las graficas de los pedidos totales, con informacion referente a los pedidos alistados, enviados, entregados, cancelados , al igual que los 3 metodos de pago, este este apartado tambien varia segun los <a href="#filtros">filtros</a> aplicados.</em></p>
<p><img className="lightbox" src="https://i.ibb.co/rcHQtTJ/3.png"/></p>
<p><img className="lightbox" src="https://i.ibb.co/GtMXXRs/7.png"/></p>
<h2 id="filtros">Filtros</h2>
<p><em>El componente de los filtros es un dropdown en el cual podemos definir una serie de reglas para filtrar la informacion a tener en cuenta en las graficas, se puede filtrar por picker, metodo de entrega, transportadora o ciudad.</em></p>
<p><img className="lightbox" src="https://i.ibb.co/VwcK1C9/4.png"/></p>
<h2 id="categorias">Categorias</h2>
<p><em>Esta seccion se encuetra en la parte inferior y en ella podemos obtener informacion relacionada al numero de ordenes y unidades compradas por categorias.</em></p>
<p><img className="lightbox" src="https://i.ibb.co/TLkbCJ7/5.png"/></p>
<h2 id="productos">Productos</h2>
<p><em>Esta seccion se encuetra en la parte inferior y en ella podemos obtener informacion relacionada a los productos mas vendidos, asi como el numero de ordenes y unidades.</em></p>
<p><img className="lightbox" src="https://i.ibb.co/VTPhh5p/6.png"/></p>
<h2 id="flujo-de-pedidos">Flujo de pedidos</h2>
<p><em>Muestra el total de pedidos distribuidos pos dias.</em></p>
<p><img className="lightbox" src="https://i.ibb.co/Cb8PTf8/8.png"/></p>
<h2 id="razones-de-rechazo-reemplazo-y-cambio-de-precio">Razones de rechazo, reemplazo y cambio de precio</h2>
<p><em>Se muestran las graficas y porcentajes de uso en las razones por las que se realizan estas actividades, asi como la cantidad de veces realizadas.</em></p>
<p><img className="lightbox" src="https://i.ibb.co/2vGjXvS/9.png"/></p>
                        </div>
                        ||
                        <div className="col-lg-6 p-3">
                            <h1 id="insights">Insights</h1>
<p><em>This section provides graphs and grouped information regarding orders in all their statuses as well as data regarding payment methods and items purchased in order to summarize statistical information.</em></p>
<p><img className="lightbox" src="https://i.ibb.co/P6kzxKb/1.png"/></p>
<h2 id="total-orders">Total orders</h2>
<p><em>In this section you will be able to see a real time graph, showing the grouped information of all the orders, in relation to the previous period, this graph takes care of all the orders by default, but it can vary depending on the <a href="#filtros">filters</a> applied.</em></p>
<p><img className="lightbox" src="https://i.ibb.co/jrqrzt8/2.png"/></p>
<h2 id="summary">Summary</h2>
<p><em>The summary section is located to the right of the total orders graphs, with information regarding orders enlisted, shipped, delivered, cancelled, as well as the 3 payment methods, this section also varies according to the <a href="#filtros">filters</a> applied.</em></p>
<p><img className="lightbox" src="https://i.ibb.co/rcHQtTJ/3.png"/></p>
<p><img className="lightbox" src="https://i.ibb.co/GtMXXRs/7.png"/></p>
<h2 id="filters">Filters</h2>
<p><em>The filters component is a dropdown in which we can define a series of rules to filter the information to be taken into account in the graphs, you can filter by picker, delivery method, carrier or city.</em></p>
<p><img className="lightbox" src="https://i.ibb.co/VwcK1C9/4.png"/></p>
<h2 id="categories">Categories</h2>
<p><em>This section is located at the bottom and in it we can obtain information related to the number of orders and units purchased by category.</em></p>
<p><img className="lightbox" src="https://i.ibb.co/TLkbCJ7/5.png"/></p>
<h2 id="products">Products</h2>
<p><em>This section is located at the bottom and in it we can obtain information related to the most sold products, as well as the number of orders and units.</em></p>
<p><img className="lightbox" src="https://i.ibb.co/VTPhh5p/6.png"/></p>
<h2 id="order-flow">Order flow</h2>
<p><em>Shows the total number of orders distributed per day.</em></p>
<p><img className="lightbox" src="https://i.ibb.co/Cb8PTf8/8.png"/></p>
<h1 id="reasons-for-rejection-replacement-and-price-changes">Reasons for rejection, replacement and price changes</h1>
<p><em>The graphs and percentages of use are shown in the reasons why these activities are performed, as well as the number of times they are performed.</em></p>
<p><img className="lightbox" src="https://i.ibb.co/2vGjXvS/9.png"/></p>
                        </div>
                    }

                </div>
            </div>
        </Fragment>
    )
}

export default PickingMovil;
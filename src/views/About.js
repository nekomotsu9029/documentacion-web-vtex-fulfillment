import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const About = ({ language, lightBox }) => {
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
      <a href="#" aria-current="page" className="active sidebar-link">Sobre la aplicación</a>
      <ul className="sidebar-sub-headers">
         <li className="sidebar-sub-header"><a href="#vende-y-atiende-pedidos-desde-cualquier-lugar-con-facilidad-" className="sidebar-link">Vende y atiende pedidos desde cualquier lugar, con facilidad.</a></li>
         <li className="sidebar-sub-header"><a href="#arquitectura-de-la-aplicacion" className="sidebar-link">Arquitectura de la aplicacion</a></li>
         <li className="sidebar-sub-header"><a href="#flujo-de-la-aplicacion" className="sidebar-link">Flujo de la aplicación</a></li>
      </ul>
   </li>
</ul>
                                || 
                                <ul className="sidebar-links">
   <li>
      <a href="#" aria-current="page" className="active sidebar-link">About</a>
      <ul className="sidebar-sub-headers">
         <li className="sidebar-sub-header"><a href="#sell-and-fulfill-orders-from-anywhere-with-ease" className="sidebar-link">Sell and fulfill orders from anywhere, with ease.</a></li>
         <li className="sidebar-sub-header"><a href="#app-architecture" className="sidebar-link">App architecture</a></li>
         <li className="sidebar-sub-header"><a href="#app-flow" className="sidebar-link">App flow</a></li>
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
                            <h1 id="sobre-la-aplicaci-n">Sobre la aplicación</h1>
<h2 id="vende-y-atiende-pedidos-desde-cualquier-lugar-con-facilidad-">Vende y atiende pedidos desde cualquier lugar, con facilidad.</h2>
<p><em>Lleva tu negocio al siguiente nivel con una visión de 360º del stock y los pedidos. Además, ejecuta perfectamente los escenarios complejos de fulfillment.</em></p>
<ul>
   <li>
      <p><strong>Ofrece experiencias omnichannel</strong> Capta más ventas con una visibilidad del stock en toda tu red de tiendas, centros de fulfillment, proveedores y partners de marketplace.</p>
   </li>
   <li>
      <p><strong>Optimiza las operaciones</strong> Obtén una única visión de los pedidos y orquesta el fulfillment en todos los canales para garantizar que el stock y los recursos se utilicen con mayor eficiencia.</p>
   </li>
   <li>
      <p><strong>Empodera a los representantes de campo y vendedores de tiendas</strong> Libera todo el potencial de tu marca ofreciendo herramientas que tus sellers necesitan para atender mejor a los clientes y cumplir con las promesas de fulfillment flexible.</p>
   </li>
</ul>
<h2 id="arquitectura-de-la-aplicacion">Arquitectura de la aplicacion</h2>
<p><img className="lightbox" src="/img/about/arquitectura.png"/></p>
<h2 id="flujo-de-la-aplicaci-n">Flujo de la aplicación</h2>
<p><em>Una vez que se confirma en el ecommerce, el pedido llega al OMS de cada cuenta en VTEX. A partir de ahí, la aplicación de Fulfillment asegura el picking, el packing, la facturación, el despacho y la entrega del pedido al cliente; contemplando casos como:</em></p>
<ul>
   <li>Reemplazo de ítems: sugerencias o búsqueda manual.</li>
   <li>Cambio de precios.</li>
   <li>Agregar productos nuevos o inexistentes.</li>
</ul>
<p><img className="lightbox" src="/img/about/flujodelaaplicacion.png"/></p>
                        </div>
                        ||
                        <div className="col-lg-6 p-3">
                            <h1 id="about">About</h1>
<h2 id="sell-and-fulfill-orders-from-anywhere-with-ease-">Sell and fulfill orders from anywhere, with ease.</h2>
<p><em>Take your business to the next level with a 360º view of stock and orders and seamlessly execute complex fulfillment scenarios.</em></p>
<ul>
   <li>
      <p><strong>Deliver omnichannel experiences</strong>. Capture sales with stock visibility across your store network, fulfillment centers, suppliers, and marketplace partners.</p>
   </li>
   <li>
      <p><strong>Optimize operations</strong>. Gain a global view of orders and orchestrate fulfillment in all channels to ensure stock and resources are more efficiently used.</p>
   </li>
   <li>
      <p><strong>Empower field representatives and sales associates</strong>. Unleash the full potential of your brand by providing the tools your sales associates need to better serve customers and deliver on their flexible fulfillment promises.</p>
   </li>
</ul>
<h2 id="app-architecture">App architecture</h2>
<p><img className="lightbox" src="/img/about/arquitectura.png"/></p>
<h2 id="app-flow">App flow</h2>
<p><em>Once the order is confirmed from the ecommerce system, it comes to the VTEX OMS for each account. There, the Fulfillment app ensures order picking, packing, packaging, invoicing, shipping, and delivery to the customer. It covers cases such as:</em></p>
<ul>
   <li>Replacing items (suggestions or manual search)</li>
   <li>Price change</li>
   <li>Adding new products or products that did not exist</li>
</ul>
<p><img className="lightbox" src="/img/about/flujodelaaplicacion.png"/></p>
                        </div>
                    }

                </div>
            </div>
        </Fragment>
    )
}

export default About;
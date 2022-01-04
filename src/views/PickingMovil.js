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
      <a href="#" aria-current="page" className="active sidebar-link">Picking mobile</a>
      <ul className="sidebar-sub-headers">
         <li className="sidebar-sub-header"><a href="#iniciar-sesion" className="sidebar-link">Iniciar sesion</a></li>
         <li className="sidebar-sub-header"><a href="#manejo-de-pedidos" className="sidebar-link">Manejo de pedidos</a></li>
         <li className="sidebar-sub-header"><a href="#gestion-del-pedido" className="sidebar-link">Gestion del pedido</a></li>
         <li className="sidebar-sub-header"><a href="#alistar-producto" className="sidebar-link">Alistar producto</a></li>
         <li className="sidebar-sub-header"><a href="#agregar-producto-al-pedido" className="sidebar-link">Agregar producto al pedido</a></li>
         <li className="sidebar-sub-header"><a href="#crear-producto" className="sidebar-link">Crear producto</a></li>
         <li className="sidebar-sub-header"><a href="#reemplazar-producto" className="sidebar-link">Reemplazar producto</a></li>
         <li className="sidebar-sub-header"><a href="#cambiar-precio-del-producto" className="sidebar-link">Cambiar precio del producto</a></li>
         <li className="sidebar-sub-header"><a href="#rechazar-producto" className="sidebar-link">Rechazar producto</a></li>
         <li className="sidebar-sub-header"><a href="#productos-preparados" className="sidebar-link">Productos preparados</a></li>
         <li className="sidebar-sub-header"><a href="#productos-rechazados" className="sidebar-link">Productos rechazados</a></li>
         <li className="sidebar-sub-header"><a href="#pantalla-de-chat" className="sidebar-link">Pantalla de chat</a></li>
         <li className="sidebar-sub-header"><a href="#indicadores" className="sidebar-link">Indicadores</a></li>
         <li className="sidebar-sub-header"><a href="#mi-cuenta" className="sidebar-link">Mi cuenta</a></li>
      </ul>
   </li>
</ul>
                                || 
                                <ul className="sidebar-links">
   <li>
      <a href="#" aria-current="page" className="active sidebar-link">Picking mobile</a>
      <ul className="sidebar-sub-headers">
         <li className="sidebar-sub-header"><a href="#login" className="sidebar-link">Login</a></li>
         <li className="sidebar-sub-header"><a href="#order-management" className="sidebar-link">Order management</a></li>
         <li className="sidebar-sub-header"><a href="#order-management-2" className="sidebar-link">Order management</a></li>
         <li className="sidebar-sub-header"><a href="#prepare-product" className="sidebar-link">Prepare product</a></li>
         <li className="sidebar-sub-header"><a href="#add-product-to-the-order" className="sidebar-link">Add product to the order</a></li>
         <li className="sidebar-sub-header"><a href="#create-product" className="sidebar-link">Create product</a></li>
         <li className="sidebar-sub-header"><a href="#replace-product" className="sidebar-link">Replace product</a></li>
         <li className="sidebar-sub-header"><a href="#change-product-price" className="sidebar-link">Change product price</a></li>
         <li className="sidebar-sub-header"><a href="#reject-product" className="sidebar-link">Reject product</a></li>
         <li className="sidebar-sub-header"><a href="#prepared-products" className="sidebar-link">Prepared products</a></li>
         <li className="sidebar-sub-header"><a href="#rejected-products" className="sidebar-link">Rejected products</a></li>
         <li className="sidebar-sub-header"><a href="#chat-screen" className="sidebar-link">Chat screen</a></li>
         <li className="sidebar-sub-header"><a href="#indicators" className="sidebar-link">Indicators</a></li>
         <li className="sidebar-sub-header"><a href="#my-account" className="sidebar-link">My account</a></li>
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
                            <h1 id="picking-mobile">Picking mobile</h1>
<p><em>La app de picking mobile tiene permite realizar todas las funcionalidades de picking de una forma rapida y dinamica, esta app esta orientada a los alistadores dentro de las tiendas, para asistir el proceso de alistamiento de productos y la comunicacion con soporte a travez de un chat individual por pedido.</em></p>
<h2 id="iniciar-sesion">Iniciar sesion</h2>
<p><em>La ventana inicial de la aplicacion mostrara un login para iniciar sesion en la app, &quot;las credenciales de la aplicacion deben ser creadas desde la aplicacion web con el roll de &quot;picker&quot; <a href="/users/#agregar-picker">crear usuario con roll de picker</a>&quot;, una vez diligenciada se puede entrar para ir directamente a la ventana de <strong>manejo de pedidos</strong>.</em></p>
<p><img className="lightbox" src="/img/1.png"/></p>
<h2 id="manejo-de-pedidos">Manejo de pedidos</h2>
<p><em>La ventana de manejo de pedidos ofrece la lista de pedidos asignados, y las listas de los pedidos ya terminados, en esta ventana podemos filtrar a travez del campo de filtro, y nos muestra los pedidos que se nos han asignado desde la plataforma web, para empezar la gestion de pedidos basta con dar un click sobre cualquier pedido de los listados, tambien podemos alterar el idioma a partir de nuestras preferencias, desde el dropdown de idioma en la parte superior derecha.</em></p>
<p><img className="lightbox" src="/img/2.png"/>
   <img className="lightbox" src="/img/picking-mobile/3.png"/>
</p>
<h2 id="gestion-del-pedido">Gestion del pedido</h2>
<p><em>La ventana de gestion del pedido muestra informacion relevante del pedido a alistar, en esta ventana podemos ver la informacion detalalda del pedido a travez del boton &quot;(i)&quot;, este boton despliega un modal con la informacion del pedido.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/5.png"/></p>
<p><img className="lightbox" src="/img/picking-mobile/4.png"/></p>
<h2 id="alistar-producto">Alistar producto</h2>
<p><em>Para alistar un producto podemos alistarlo de forma manual a travez del contador de unidades (+) del producto a alistar o podemos arrastrar el producto hacia la derecha para alistar el producto rapidamente, este ultimo pide confirmacion para confirmar el alistamiento rapido definiendo de forma automatica la cantidad de productos objetivos.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/6.png"/>
   <img className="lightbox" src="/img/picking-mobile/7.png"/>
   <img className="lightbox" src="/img/picking-mobile/8.png"/>
</p>
<h2 id="agregar-producto-al-pedido">Agregar producto al pedido</h2>
<p><em>Para agregar un nuevo producto al pedido se debe dar un click sobre el boton <strong>(+)</strong>, este desplegara una nueva ventana en la cual debemos buscar el producto objetivo a travez del campo de busqueda, darle un click al boton de <strong>(agregar)</strong>, definir el numero de unidades y confirmar este proceso.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/9.png"/>
   <img className="lightbox" src="/img/picking-mobile/10.png"/>
   <img className="lightbox" src="/img/picking-mobile/11.png"/>
</p>
<h2 id="crear-producto">Crear producto</h2>
<p><em>Para crear el producto se debe dar un click sobre el boton <strong>(+)</strong> &quot;como si se intentase agregar uno&quot;, pero en la ventana de busqueda se debe dar un click sobre el boton <strong>[+]</strong>, esto mostrara un modal en el cual debemos diligenciar la informacion correspondiente del nuevo producto, y confirmar estos datos para crearlo, por ultimo definimos la cantidad objetivo de este ultimo y confirmar este proceso.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/12.png"/>
   <img className="lightbox" src="/img/picking-mobile/13.png"/>
   <img className="lightbox" src="/img/picking-mobile/14.png"/>
</p>
<h2 id="reemplazar-producto">Reemplazar producto</h2>
<p><em>Para reemplazar un producto se debe dar un click sobre el boton &quot;reemplazar&quot;, esto desplegara una nueva ventana de reemplazo, en la que usando el campo de texto, debemos buscar el producto objetivo, seleccionarlo y confirmar las razones de reemplazo para finalizar.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/15.png"/>
   <img className="lightbox" src="/img/picking-mobile/16.png"/>
   <img className="lightbox" src="/img/picking-mobile/17.png"/>
</p>
<h2 id="cambiar-precio-del-producto">Cambiar precio del producto</h2>
<p><em>Para cambiar precio debemos primero habilitar la fincionalidad desde la aplicacion web, esto habilitara un icono con el signo <strong>($)</strong>, al darle un click sobre el boton, se despliega un modal en el cual debemos definir el nuevo costo del producto, confirmamos lo anterior y definimos las razones del cambio de precio.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/18.png"/>
   <img className="lightbox" src="/img/picking-mobile/19.png"/>
   <img className="lightbox" src="/img/picking-mobile/20.png"/>
</p>
<h2 id="rechazar-producto">Rechazar producto</h2>
<p><em>Para rechazar un producto se debe desplazar hacia la izquierda y confirmar el rechazo.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/21.png"/>
   <img className="lightbox" src="/img/picking-mobile/22.png"/>
</p>
<h2 id="productos-preparados">Productos preparados</h2>
<p><em>La pestaña de productos preparados muestra la lista de productos alistados.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/23.png"/></p>
<h2 id="productos-rechazados">Productos rechazados</h2>
<p><em>La pestaña de productos rechazados muestra la lista de productos rechazados.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/24.png"/></p>
<h2 id="pantalla-de-chat">Pantalla de chat</h2>
<p><em>La pestaña de chat, muestra el chat en el cual se establece el contacto con soporte.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/25.png"/></p>
<h2 id="indicadores">Indicadores</h2>
<p><em>Esta ventana se escuentra en el menu izquierdo de la aplicacion, esta ventana nos ofrece informacion estadistica relevante relacionada al trabajo de alistamiento realizado en la aplicacion.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/29.png"/>
   <img className="lightbox" src="/img/picking-mobile/26.png"/>
   <img className="lightbox" src="/img/picking-mobile/27.png"/>
</p>
<h2 id="mi-cuenta">Mi cuenta</h2>
<p><em>Este boton despliega un modal el cual nos permite elegir si deseamos cambiar el nombre o la contraseña de la cuenta de la aplicacion.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/29.png"/>
   <img className="lightbox" src="/img/picking-mobile/28.png"/>
</p>
                        </div>
                        ||
                        <div className="col-lg-6 p-3">
                            <h1 id="picking-mobile">Picking mobile</h1>
<p><em>The mobile picking app allows to perform all the picking functionalities in a fast and dynamic way, this app is oriented to the stockists inside the stores, to assist the product picking process and the communication with support through an individual chat per order.</em></p>
<h2 id="login">Login</h2>
<p><em>The initial window of the application will show a login to start session in the app, &quot;the application credentials must be created from the web application with the &quot;picker&quot; roll <a href="/en/users/#agregar-picker">create user with picker roll</a>&quot;, once filled in you can enter to go directly to the <strong>order management</strong> window.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/1.png"/></p>
<h2 id="order-management">Order management</h2>
<p><em>The order management window offers the list of assigned orders, and the lists of the orders already finished, in this window we can filter through the filter field, and it shows us the orders that have been assigned to us from the web platform, to start the order management just click on any of the listed orders, we can also change the language from our preferences, from the language dropdown at the top right.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/2.png"/>
   <img className="lightbox" src="/img/picking-mobile/3.png"/>
</p>
<h2 id="order-management">Order management</h2>
<p><em>The order management window shows relevant information of the order to be enlisted, in this window we can see the detailed information of the order through the &quot;(i)&quot; button, this button displays a modal with the order information.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/5.png"/></p>
<p><img className="lightbox" src="/img/picking-mobile/4.png"/></p>
<h2 id="prepare-product">Prepare product</h2>
<p><em>To enlist a product we can enlist it manually through the unit counter (+) of the product to be enlisted or we can drag the product to the right to enlist the product quickly, the latter asks for confirmation to confirm the quick enlistment by automatically defining the target quantity of products.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/6.png"/>
   <img className="lightbox" src="/img/picking-mobile/7.png"/>
   <img className="lightbox" src="/img/picking-mobile/8.png"/>
</p>
<h2 id="add-product-to-the-order">Add product to the order</h2>
<p><em>To add a new product to the order click on the <strong>(+)</strong> button, this will display a new window in which we must search for the target product through the search field, click on the <strong>(add)</strong> button, define the number of units and confirm this process.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/9.png"/>
   <img className="lightbox" src="/img/picking-mobile/10.png"/>
   <img className="lightbox" src="/img/picking-mobile/11.png"/>
</p>
<h2 id="create-product">Create product</h2>
<p><em>To create the product you must click on the button <strong>(+)</strong> &quot;as if trying to add one&quot;, but in the search window you must click on the button <strong>[+]</strong>, this will show a modal in which we must fill in the corresponding information of the new product, and confirm these data to create it, finally we define the target quantity of the latter and confirm this process.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/12.png"/>
   <img className="lightbox" src="/img/picking-mobile/13.png"/>
   <img className="lightbox" src="/img/picking-mobile/14.png"/>
</p>
<h2 id="replace-product">Replace product</h2>
<p><em>To replace a product, click on the &quot;replace&quot; button, this will display a new replacement window, in which using the text field, we must search for the target product, select it and confirm the replacement reasons to finish.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/15.png"/>
   <img className="lightbox" src="/img/picking-mobile/16.png"/>
   <img className="lightbox" src="/img/picking-mobile/17.png"/>
</p>
<h2 id="change-product-price">Change product price</h2>
<p><em>To change the price we must first enable the functionality from the web application, this will enable an icon with the sign <strong>($)</strong>, when you click on the button, a modal is displayed in which we must define the new cost of the product, confirm the above and define the reasons for the price change.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/18.png"/>
   <img className="lightbox" src="/img/picking-mobile/19.png"/>
   <img className="lightbox" src="/img/picking-mobile/20.png"/>
</p>
<h2 id="reject-product">Reject product</h2>
<p><em>To reject a product, scroll to the left and confirm the rejection.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/21.png"/>
   <img className="lightbox" src="/img/picking-mobile/22.png"/>
</p>
<h2 id="prepared-products">Prepared products</h2>
<p><em>The prepared products tab shows the list of enlisted products.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/23.png"/></p>
<h2 id="rejected-products">Rejected products</h2>
<p><em>The Rejected Products tab displays the list of rejected products.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/24.png"/></p>
<h2 id="chat-screen">Chat screen</h2>
<p><em>The chat tab shows the chat in which the contact with support is established.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/25.png"/></p>
<h2 id="indicators">Indicators</h2>
<p><em>This window is located in the left menu of the application, this window offers relevant statistical information related to the enlistment work performed in the application.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/29.png"/>
   <img className="lightbox" src="/img/picking-mobile/26.png"/>
   <img className="lightbox" src="/img/picking-mobile/27.png"/>
</p>
<h2 id="my-account">My account</h2>
<p><em>This button displays a modal which allows us to choose whether we want to change the name or the password of the application account.</em></p>
<p><img className="lightbox" src="/img/picking-mobile/29.png"/>
   <img className="lightbox" src="/img/picking-mobile/28.png"/>
</p>
                        </div>
                    }

                </div>
            </div>
        </Fragment>
    )
}

export default PickingMovil;
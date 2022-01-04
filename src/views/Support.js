import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Support = ({ language, lightBox }) => {
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
      <a href="#" aria-current="page" className="active sidebar-link">Soporte</a>
      <ul className="sidebar-sub-headers">
         <li className="sidebar-sub-header"><a href="#campo-de-busqueda-de-chats" className="sidebar-link">Campo de búsqueda de chats</a></li>
         <li className="sidebar-sub-header"><a href="#seleccion-del-chat" className="sidebar-link">Seleccion del chat</a></li>
         <li className="sidebar-sub-header"><a href="#detalles" className="sidebar-link">Detalles</a></li>
         <li className="sidebar-sub-header"><a href="#agregar-producto-al-pedido" className="sidebar-link">Agregar producto al pedido</a></li>
         <li className="sidebar-sub-header"><a href="#boton-«ver-mas»-del-producto" className="sidebar-link">Botón «ver más» del producto</a></li>
         <li className="sidebar-sub-header"><a href="#reemplazar-producto" className="sidebar-link">Reemplazar producto</a></li>
         <li className="sidebar-sub-header"><a href="#cambiar-precio-del-producto" className="sidebar-link">Cambiar precio del producto</a></li>
         <li className="sidebar-sub-header"><a href="#rechazar-producto" className="sidebar-link">Rechazar producto</a></li>
         <li className="sidebar-sub-header"><a href="#iniciar-nueva-conversacion" className="sidebar-link">Iniciar nueva conversación</a></li>
         <li className="sidebar-sub-header"><a href="#chat" className="sidebar-link">Chat</a></li>
      </ul>
   </li>
</ul>
                                || 
                                <ul className="sidebar-links">
   <li>
      <a href="#" aria-current="page" className="active sidebar-link">Support</a>
      <ul className="sidebar-sub-headers">
         <li className="sidebar-sub-header"><a href="#chat-search-field" className="sidebar-link">Chat search field</a></li>
         <li className="sidebar-sub-header"><a href="#selecting-chats" className="sidebar-link">Selecting chats</a></li>
         <li className="sidebar-sub-header"><a href="#details" className="sidebar-link">Details</a></li>
         <li className="sidebar-sub-header"><a href="#add-product-to-the-order" className="sidebar-link">Add product to the order</a></li>
         <li className="sidebar-sub-header"><a href="#dropdown-see-more-of-the-product" className="sidebar-link">Dropdown "see more" of the product</a></li>
         <li className="sidebar-sub-header"><a href="#replace-product" className="sidebar-link">Replace product</a></li>
         <li className="sidebar-sub-header"><a href="#change-product-price" className="sidebar-link">Change product price</a></li>
         <li className="sidebar-sub-header"><a href="#reject-product" className="sidebar-link">Reject product</a></li>
         <li className="sidebar-sub-header"><a href="#starting-a-new-conversation" className="sidebar-link">Starting a new conversation</a></li>
         <li className="sidebar-sub-header"><a href="#chat" className="sidebar-link">Chat</a></li>
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
                            <h1 id="soporte">Soporte</h1>
<p>En esta sección, se podrá crear y administrar chats con los responsables de picking que estén asignados a un pedido, permitiendo generar una vía de comunicación abierta en caso de ser necesario.  Asimismo, es posible dar asistencia en los procesos de agregar, cambiar ítem, cambiar precio o incluso rechazar productos._</p>
<p><img className="lightbox" src="/img/support/support1.png"/></p>
<h2 id="campo-de-b-squeda-de-chats">Campo de búsqueda de chats</h2>
<p><em>Este campo de texto nos ayudará a buscar un chat activo a través del ID del pedido al que esté relacionado.</em></p>
<p><img className="lightbox" src="/img/support/2.png"/></p>
<h2 id="seleccion-del-chat">Seleccion del chat</h2>
<p><em>En la parte izquierda de nuestra pantalla tendremos la lista de los chats activos disponibles. Para gestionarla, basta con hacer clic sobre ella. Esta sección está compuesta de 3 partes importantes: detalles, notas y chat.</em></p>
<p><img className="lightbox" src="/img/support/3.png"/></p>
<h2 id="detalles">Detalles</h2>
<p><em>Al momento de seleccionar un chat, podremos ver los detalles del pedido con información oportuna relacionada a los ítems, el cliente, el pago e información adicional. Para tener acceso a la información, basta con hacer clic en el título de la sección que desea consultar.</em></p>
<p><img className="lightbox" src="/img/support/4.png"/></p>
<h2 id="agregar-producto-al-pedido">Agregar producto al pedido</h2>
<p><em>Para realizar esta acción, debemos hacer clic en el botón «Agregar producto». Esto abrirá un modal donde se buscará y seleccionará el producto que desea agregarse. Luego, debe confirmarse para finalizar el proceso.</em></p>
<p><img className="lightbox" src="/img/support/5.png"/></p>
<p><img className="lightbox" src="/img/support/7.png"/></p>
<p><img className="lightbox" src="/img/support/6.png"/></p>
<h2 id="bot-n-ver-m-s-del-producto">Botón «ver más» del producto</h2>
<p><em>Este botón permite realizar 3 acciones: reemplazar producto, cambiar precio y rechazar producto.</em></p>
<p><img className="lightbox" src="/img/support/8.png"/></p>
<h2 id="reemplazar-producto">Reemplazar producto</h2>
<p><em>Para reemplazar un producto, debemos hacer clic en el botón «ver más» y seleccionar la opción «reemplazar producto». Esto abrirá un modal donde se buscará y seleccionará el producto que desea cambiarse. Luego, debe confirmarse definiendo el motivo del reemplazo. El producto se alistará automáticamente, mientras el producto original será rechazado por causa del reemplazo.</em></p>
<p><img className="lightbox" src="/img/support/9.png"/></p>
<p><img className="lightbox" src="/img/support/10.png"/></p>
<p><img className="lightbox" src="/img/support/11.png"/></p>
<h2 id="cambiar-precio-del-producto">Cambiar precio del producto</h2>
<p><em>Para realizar esta acción, debemos hacer clic en el botón «ver más» y seleccionar la opción de «cambiar precio». Esto abrirá un modal donde se debe establecer el nuevo precio y los motivos del cambio. Por último, solo debe confirmarse el cambio.</em></p>
<p><img className="lightbox" src="/img/support/12.png"/></p>
<p><img className="lightbox" src="/img/support/13.png"/></p>
<h2 id="rechazar-producto">Rechazar producto</h2>
<p><em>Para rechazar/eliminar un producto del pedido, debemos hacer clic en el botón «ver más» del producto y seleccionar la opción «eliminar ítem». Luego, debe definir el motivo del rechazo y confirmar el proceso.</em></p>
<p><img className="lightbox" src="/img/support/14.png"/></p>
<h2 id="iniciar-nueva-conversaci-n">Iniciar nueva conversación</h2>
<p><em>Para iniciar una nueva conversación se debe dar un clic sobre el botón azul de la parte superior derecha «Iniciar nueva conversación».</em></p>
<p><img className="lightbox" src="/img/support/support2.png"/></p>
<p><em>Al hacer clic en el botón, se abrirá un modal con la lista de los pedidos donde tendremos información acerca del ID de pedido, nombre del cliente y responsable de picking asignado. Para abrir un nuevo chat sobre el pedido deseado, basta con hacer clic sobre dicho pedido.</em></p>
<p><img className="lightbox" src="/img/support/support3.png"/></p>
<p><em>Al seleccionar el pedido, se abrirá un nuevo modal para confirmar los datos. Aquí encontraremos información del nombre, email e identificación del cliente, así como el ID de pedido. Para finalizar, se hace clic sobre el botón azul de la parte inferior derecha «confirmar».</em></p>
<p><img className="lightbox" src="/img/support/support4.png"/></p>
<p><em>El pedido ha sido confirmado y, por tanto, se nos notificara en la parte inferior derecha de la página.</em></p>
<p><img className="lightbox" src="/img/support/support5.png"/></p>
<p><em>El resultado final es que ahora tenemos disponible un chat con este pedido.</em></p>
<p><img className="lightbox" src="/img/support/support6.png"/></p>
<h2 id="chat">Chat</h2>
<p><em>Para usar esta opción, se debe hacer clic sobre la tarjeta con el ID de pedido. Hecho esto, tendremos nuestro chat disponible en la parte derecha donde podremos interactuar con el responsable de picking.</em></p>
<p><img className="lightbox" src="/img/support/support7.png"/></p>
                        </div>
                        ||
                        <div className="col-lg-6 p-3">
                            <h1 id="support">Support</h1>
<p><em>In this section, you can create and manage chats with the pickers assigned to an order, which allows you to generate a communication channel when needed.</em></p>
<p><img className="lightbox" src="/img/support/support1.png"/></p>
<h2 id="chat-search-field">Chat search field</h2>
<p><em>This text field allows you to search an active chat using the order ID related to it.</em></p>
<p><img className="lightbox" src="/img/support/2.png"/></p>
<h2 id="selecting-chats">Selecting chats</h2>
<p><em>On the left side of the screen, you can see the list of available active chats. To manage them, just tap or click on it. The management panel can be divided in three important tabs: “Details”, “Notes”, and “Chat”.</em></p>
<p><img className="lightbox" src="/img/support/3.png"/></p>
<h2 id="details">Details</h2>
<p><em>When you select a chat, you can see the order details, which contains relevant information about the items, the customer, payment information, and additional information. To access the information, select the title of the information section that you want to see and a card containing the information will expand.</em></p>
<p><img className="lightbox" src="/img/support/4.png"/></p>
<h2 id="add-product-to-the-order">Add product to the order</h2>
<p><em>To add a product we must click on the button &quot;Add product&quot;, this will display a modal in which we must find the product to add, select it and confirm it to finish.</em></p>
<p><img className="lightbox" src="/img/support/5.png"/></p>
<p><img className="lightbox" src="/img/support/7.png"/></p>
<p><img className="lightbox" src="/img/support/6.png"/></p>
<h2 id="dropdown-see-more-of-the-product">Dropdown &quot;see more&quot; of the product</h2>
<p><em>This dropdown displays a series of 3 functionalities: replace product, change price and reject the same.</em></p>
<p><img className="lightbox" src="/img/support/8.png"/></p>
<h2 id="replace-product">Replace product</h2>
<p><em>To replace a product we must deploy the &quot;see more&quot; dropdown of the product**, and select the option &quot;replace product&quot;, this will display a modal where we must find the target product to change, select it and confirm the change by defining the reasons for replacement &quot;the product will be automatically enlisted, while the original product will be rejected for the reason of replacement&quot;.</em></p>
<p><img className="lightbox" src="/img/support/9.png"/></p>
<p><img className="lightbox" src="/img/support/10.png"/></p>
<p><img className="lightbox" src="/img/support/11.png"/></p>
<h2 id="change-product-price">Change product price</h2>
<p><em>To change the price of a product, we must deploy the <strong>dropdown &quot;see more&quot; of the product</strong>, and select the option &quot;change price&quot;, this will deploy a new modal where we must establish the new price and the reasons for the change of the same, finally we must only confirm the change.</em></p>
<p><img className="lightbox" src="/img/support/12.png"/></p>
<p><img className="lightbox" src="/img/support/13.png"/></p>
<h2 id="reject-product">Reject product</h2>
<p><em>To reject a product &quot;remove the product from the order&quot;, we must deploy the <strong>dropdown &quot;see more&quot; of the product</strong>, and select the option &quot;remove item&quot;, define the reasons for the rejection and confirm this process.</em></p>
<p><img className="lightbox" src="/img/support/14.png"/></p>
<h2 id="starting-a-new-conversation">Starting a new conversation</h2>
<p><em>To start a new conversation, select the blue button on the top right “Start new conversation”.</em></p>
<p><img className="lightbox" src="/img/support/support2.png"/></p>
<p><em>After selecting the button, a modal window will open with the order list where you can see the order ID, the customer’s name, and the assigned picker. To open a new on-demand chat in the order, tap or click the order.</em></p>
<p><img className="lightbox" src="/img/support/support3.png"/></p>
<p><em>When you select the order, a new modal will be displayed to confirm the information. It shows the customer’s name, email, and ID, as well as the order ID. Once you are sure you want to confirm, select the blue “Confirm” button at the bottom right.</em></p>
<p><img className="lightbox" src="/img/support/support4.png"/></p>
<p><em>This confirms the order, and you will see a notification at the bottom right of the page.</em></p>
<p><img className="lightbox" src="/img/support/support5.png"/></p>
<p><em>The end result is that we now have a chat available with that command.</em></p>
<p><img className="lightbox" src="/img/support/support6.png"/></p>
<h2 id="chat">Chat</h2>
<p><em>To use the chat, select the card with the order ID on the left side. Then, you will see the chat available on the right side.</em></p>
<p><img className="lightbox" src="/img/support/support7.png"/></p>
                        </div>
                    }

                </div>
            </div>
        </Fragment>
    )
}

export default Support;
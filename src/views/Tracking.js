import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Tracking = ({ language, lightBox }) => {
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
      <a href="#" aria-current="page" className="active sidebar-link">Tracking</a>
      <ul className="sidebar-sub-headers">
         <li className="sidebar-sub-header"><a href="#pantalla-principal" className="sidebar-link">Pantalla principal</a></li>
         <li className="sidebar-sub-header"><a href="#buscar-entregas" className="sidebar-link">Buscar entregas</a></li>
         <li className="sidebar-sub-header"><a href="#filtrar-entregas" className="sidebar-link">Filtrar entregas</a></li>
         <li className="sidebar-sub-header"><a href="#entrega" className="sidebar-link">Entrega</a></li>
         <li className="sidebar-sub-header"><a href="#tracking-2" className="sidebar-link">Tracking</a></li>
         <li className="sidebar-sub-header"><a href="#entregadores" className="sidebar-link">Entregadores</a></li>
         <li className="sidebar-sub-header"><a href="#importar-entregador" className="sidebar-link">Importar entregador</a></li>
         <li className="sidebar-sub-header"><a href="#crear-entregador" className="sidebar-link">Crear entregador</a></li>
         <li className="sidebar-sub-header"><a href="#buscar-entregador" className="sidebar-link">Buscar entregador</a></li>
         <li className="sidebar-sub-header"><a href="#filtrar-entregador" className="sidebar-link">Filtrar entregador</a></li>
         <li className="sidebar-sub-header"><a href="#editar-entregador" className="sidebar-link">Editar entregador</a></li>
      </ul>
   </li>
</ul>
                                || 
                                <ul className="sidebar-links">
   <li>
      <a href="#" aria-current="page" className="active sidebar-link">Tracking</a>
      <ul className="sidebar-sub-headers">
         <li className="sidebar-sub-header"><a href="#main-screen" className="sidebar-link">Main screen</a></li>
         <li className="sidebar-sub-header"><a href="#searching-deliveries" className="sidebar-link">Searching deliveries</a></li>
         <li className="sidebar-sub-header"><a href="#filtering-deliveries" className="sidebar-link">Filtering deliveries</a></li>
         <li className="sidebar-sub-header"><a href="#delivery" className="sidebar-link">Delivery</a></li>
         <li className="sidebar-sub-header"><a href="#tracking-2" className="sidebar-link">Tracking</a></li>
         <li className="sidebar-sub-header"><a href="#delivery-couriers" className="sidebar-link">Delivery couriers</a></li>
         <li className="sidebar-sub-header"><a href="#importing-a-delivery-courier" className="sidebar-link">Importing a delivery courier</a></li>
         <li className="sidebar-sub-header"><a href="#creating-a-delivery-courier" className="sidebar-link">Creating a delivery courier</a></li>
         <li className="sidebar-sub-header"><a href="#searching-a-delivery-courier" className="sidebar-link">Searching a delivery courier</a></li>
         <li className="sidebar-sub-header"><a href="#filtering-delivery-couriers" className="sidebar-link">Filtering delivery couriers</a></li>
         <li className="sidebar-sub-header"><a href="#editing-a-delivery-courier" className="sidebar-link">Editing a delivery courier</a></li>
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
                            <h1 id="tracking">Tracking</h1>
<h2 id="pantalla-principal">Pantalla principal</h2>
<p><em>Esta es la pantalla del seguimiento de los pedidos donde podemos gestionar el envío, asignar modalidades de envío, asignar entregadores y monitorear en tiempo real la posición del envío en relación con su destino.</em></p>
<p><img className="lightbox" src="/img/tracking/tracking1.png"/></p>
<h2 id="buscar-entregas">Buscar entregas</h2>
<p><em>En la sección superior izquierda de la pantalla, tenemos un campo de texto en el cual podemos buscar un pedido de forma reactiva al establecer la identificación del pedido solicitado.</em></p>
<p><img className="lightbox" src="/img/tracking/tracking2.png"/></p>
<h2 id="filtrar-entregas">Filtrar entregas</h2>
<p><em>Este es un botón al lado del campo de búsqueda de entregas. Al hacer clic sobre este, se abre una serie de filtros que definen las reglas de los envíos que se mostrarán para reducir el número de pedidos listados.</em></p>
<p>Estos filtros son:</p>

<ul>
   <li>
      Orden: permite organizar la lista de entregas mostradas en orden ascendente o descendente en función de la fecha objetivo de entrega.
   </li>
   <li>
      Fecha de pedido: permite establecer dos fechas para mostrar apenas aquellos pedidos cuya fecha de recolección estén dentro de los rangos establecidos.
   </li>
   <li>
      Fecha de entrega: permite establecer dos fechas para mostrar apenas aquellos pedidos cuya fecha de entrega estén dentro de los rangos establecidos.
   </li>
   <li>
      Status: permite seleccionar uno o varios tipos status del pedido, mostrando apenas aquellos que coincidan con alguno de los status establecidos.
   </li>
   <li>
      Transportadora: permite seleccionar un tipo de transportadora para mostrar aquellos pedidos asignados a esta.
   </li>
</ul>
<img className="lightbox" src="/img/tracking/tracking3.png"/>
<h2 id="entrega">Entrega</h2>
<p><em>En la sección inferior de los filtros y campo de búsqueda tenemos la lista de entregas que ofrece información relevante relacionada al pedido. Cuenta con un botón de tracking que, al hacer clic, abre una ventana de gestión del proceso de entrega.</em></p>
<p><img className="lightbox" src="/img/tracking/tracking4.png"/></p>
<h2 id="tracking-2">Tracking</h2>
<p><em>La ventana de tracking ofrece información pertinente relacionada al pedido y permite asignar el servicio de entrega, así como un entregador. En esta ventana, podemos monitorear en tiempo real la posición del entregador y el objetivo de este, ya sea desde el mapa de la sección izquierda o a través de la URL de seguimiento.</em></p>
<p><img className="lightbox" src="/img/tracking/tracking5.png"/></p>
<h2 id="entregadores">Entregadores</h2>
<p><em>En esta sección, podemos ver y gestionar la información correspondiente a entregadores; desde ver, crear y editar.</em></p>
<p><img className="lightbox" src="/img/tracking/tracking6.png"/></p>
<h2 id="importar-entregador">Importar entregador</h2>
<p><em>Al hacer clic en el botón de importación, se abre un modal de importación, donde debemos agregar un archivo con extensión .csv con los datos del entregador a importar, también podemos descargar una plantilla de ejemplo.</em></p>
<p><img className="lightbox" src="/img/tracking/tracking7.png"/></p>
<h2 id="crear-entregador">Crear entregador</h2>
<p><em>Al hacer clic en el botón «Nuevo», se abre un modal en el cual debemos diligenciar los datos del entregador; desde su información personal hasta el tipo de transporte que usa. Hecho esto, basta con hacer clic en «Guardar» para que la información de dicho entregador se guarde.</em></p>
<p><img className="lightbox" src="/img/tracking/tracking8.png"/></p>
<h2 id="buscar-entregador">Buscar entregador</h2>
<p><em>Este campo de texto nos ayuda a buscar un entregador a través de su nombre o email.</em></p>
<p><img className="lightbox" src="/img/tracking/tracking9.png"/></p>
<h2 id="filtrar-entregador">Filtrar entregador</h2>
<p><em>Este botón situado a la derecha del campo de búsqueda de entregador permite establecer uno o más filtros para definir reglas que deben coincidir con los entregadores mostrados en la parte inferior izquierda.</em></p>
<p><img className="lightbox" src="/img/tracking/tracking10.png"/></p>
<h2 id="editar-entregador">Editar entregador</h2>
<p><em>Para editar los datos de un entregador, se debe hacer clic sobre el entregador que se desea editar, esto abrirá un modal donde podemos cambiar cualquier dato pertinente del mismo. Por último, basta con guardar estos cambios para finalizar el proceso de edición.</em></p>
<p><img className="lightbox" src="/img/tracking/tracking11.png"/></p>
                        </div>
                        ||
                        <div className="col-lg-6 p-3">
                            <h1 id="tracking">Tracking</h1>
<h2 id="main-screen">Main screen</h2>
<p><em>This is the order tracking screen. In this screen, you can manage the shipping process. You can assign shipping methods and delivery couriers and track the shipping location in relation to its destination in real time.</em></p>
<p><img className="lightbox" src="/img/tracking/tracking1.png"/></p>
<h2 id="searching-deliveries">Searching deliveries</h2>
<p><em>In the top left section of the screen, there is a text field where you can search an order. To do so, you need to identify the requested order.</em></p>
<p><img className="lightbox" src="/img/tracking/tracking2.png"/></p>
<h2 id="filtering-deliveries">Filtering deliveries</h2>
<p><em>There is a dropdown on the right side of the delivery search field. When you select it, a card will be displayed with the filters. They define the rules for the shipments that will be displayed in order to reduce the number of products shown based on a common attribute.</em></p>
<p>Some of the filters are:</p>

<ul>
   <li>
      Sort: this filter allows you to organize the delivery list displayed in ascending or descending order based on the delivery deadline.
   </li>
   <li>
      Order date: this filter allows you to set two dates and will only display orders whose collection date is within the selected date range.
   </li>
   <li>
      Order date: this filter allows you to set two dates and will only display orders whose collection date is within the selected date range.
   </li>
   <li>
      Status: this is a dropdown that allows you to select one or several order status types and will only display orders with the selected statuses. 
   </li>
   <li>
      Carrier: This is a dropdown that allows you to select a type of carrier and will only display orders assigned to the selected carrier.
   </li>
</ul>
<img className="lightbox" src="/img/tracking/tracking3.png"/>
<h2 id="delivery">Delivery</h2>
<p><em>On the lower part of the filter and search section, you can see the delivery list. It shows relevant information related to the current order, as well as a tracking button that opens the delivery management window when you select it.</em></p>
<p><img className="lightbox" src="/img/tracking/tracking4.png"/></p>
<h2 id="tracking-2">Tracking</h2>
<p><em>The tracking window provides information about the order. It allows you to assign the delivery service and the delivery courier. In this window, you can track the delivery courier location and their destination in real time from either the map on the left side or through the tracking panel.</em></p>
<p><img className="lightbox" src="/img/tracking/tracking5.png"/></p>
<h2 id="delivery-couriers">Delivery couriers</h2>
<p><em>In the delivery courier section, you can see and manage delivery courier information and actions, such as viewing, creating, and editing.</em></p>
<p><img className="lightbox" src="/img/tracking/tracking6.png"/></p>
<h2 id="importing-a-delivery-courier">Importing a delivery courier</h2>
<p><em>When you select the import button, an import modal window is displayed where you can add a CSV file with the delivery courier information that you want to import, or you can download a sample template.</em></p>
<p><img className="lightbox" src="/img/tracking/tracking7.png"/></p>
<h2 id="creating-a-delivery-courier">Creating a delivery courier</h2>
<p><em>When you select the button for creating a delivery courier, a modal window opens where you need to add the delivery courier information including their personal information and transport type. Once everything is filled out, select “Save” to save the new delivery courier.</em></p>
<p><img className="lightbox" src="/img/tracking/tracking8.png"/></p>
<h2 id="searching-a-delivery-courier">Searching a delivery courier</h2>
<p><em>This text field allows you to search delivery couriers by name or email.</em></p>
<p><img className="lightbox" src="/img/tracking/tracking9.png"/></p>
<h2 id="filtering-delivery-couriers">Filtering delivery couriers</h2>
<p><em>The dropdown to the right of the delivery courier search allows you to apply one or more filters to define criteria that the delivery couriers shown in the bottom left must meet.</em></p>
<p><img className="lightbox" src="/img/tracking/tracking10.png"/></p>
<h2 id="editing-a-delivery-courier">Editing a delivery courier</h2>
<p><em>To edit the information of a delivery courier, you need to tap or click the delivery courier you want to edit to open a modal window where you can change their information. After you are done editing, select save to complete the changes.</em></p>
<p><img className="lightbox" src="/img/tracking/tracking11.png"/></p>
                        </div>
                    }

                </div>
            </div>
        </Fragment>
    )
}

export default Tracking;
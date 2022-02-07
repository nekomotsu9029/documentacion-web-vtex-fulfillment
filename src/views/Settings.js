import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Settings = ({ language, lightBox }) => {
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
      <a href="#" aria-current="page" className="active sidebar-link">Configuración</a>
      <ul className="sidebar-sub-headers">
         <li className="sidebar-sub-header"><a href="#general" className="sidebar-link">General</a></li>
         <li className="sidebar-sub-header"><a href="#categorias" className="sidebar-link">Categorías</a></li>
         <li className="sidebar-sub-header"><a href="#paquetes" className="sidebar-link">Paquetes</a></li>
         <li className="sidebar-sub-header"><a href="#envios" className="sidebar-link">Envíos</a></li>
         <li className="sidebar-sub-header"><a href="#impresion" className="sidebar-link">Impresión</a></li>
      </ul>
   </li>
</ul>
                                || 
                                <ul className="sidebar-links">
   <li>
      <a href="#" aria-current="page" className="active sidebar-link">Settings</a>
      <ul className="sidebar-sub-headers">
         <li className="sidebar-sub-header"><a href="#general" className="sidebar-link">General</a></li>
         <li className="sidebar-sub-header"><a href="#categories" className="sidebar-link">Categories</a></li>
         <li className="sidebar-sub-header"><a href="#packaging" className="sidebar-link">Packaging</a></li>
         <li className="sidebar-sub-header"><a href="#shipping" className="sidebar-link">Shipping</a></li>
         <li className="sidebar-sub-header"><a href="#printing" className="sidebar-link">Printing</a></li>
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
                            <h1 id="configuraci-n">Configuración</h1>
<p><em>En esta sección, el usuario podrá realizar configuraciones correspondientes a las tiendas, así como establecer algunas preferencias de formato a gusto del usuario. Configuración cuenta con 5 pestañas: general, categorías, paquetes, envío e impresión. Por defecto, abrirá inicialmente la pestaña «General».</em></p>
<p><img className="lightbox" src="/img/settings/settings.png"/></p>
<h2 id="general">General</h2>
<p><em>Pantalla compuesta por campos con diversas funcionalidades: búsqueda de tiendas, información de contacto con responsables de picking, alteración de sus horarios de trabajo o incluso reemplazo de los mismos. Además, es posible configurar unidades de medida.</em></p>
<p><img className="lightbox" src="/img/settings/general1.png"/></p>
<ul>
   <li>
      <p><strong>País</strong>: lista desplegable que muestra todos los países disponibles para búsqueda.</p>
   </li>
   <li>
      <p><strong>Dirección</strong>: dirección que desee localizar.</p>
   </li>
</ul>
<p><img className="lightbox" src="/img/settings/general2.png"/></p>
<ul>
   <li><strong>Datos de contacto</strong>: permite al usuario ingresar los datos de contacto del responsable de picking.</li>
</ul>
<p><img className="lightbox" src="/img/settings/general3.png"/></p>
<p>Motivos de reemplazo: permite al usuario realizar las siguientes acciones:</p>
<ol type="a">
   <li>
      Eliminar motivos de reemplazo.
   </li>
   <li>
      Agregar uno o más motivos de reemplazo.
   </li>
   <li>
      Filtrar por motivos de reemplazo.
   </li>
</ol>
<p><img className="lightbox" src="/img/settings/general4.png"/></p>
<ul>
   <li><strong>Horarios de trabajo</strong>: permite al usuario editar los horarios de trabajo de responsables de picking. Es posible configurar los horarios de trabajo por horas y días de la semana.</li>
</ul>
<p><img className="lightbox" src="/img/settings/general5.png"/></p>
<ul>
   <li><strong>Unidad de medida y orden de prioridad</strong>: permite al usuario configurar tanto unidades de medida como el orden de prioridad.</li>
</ul>
<p><img className="lightbox" src="/img/settings/general6.png"/></p>
<p><em>Todos estos cambios realizados pueden guardarse haciendo clic en el botón guardar, al lado inferior izquierdo de la página.</em></p>
<h2 id="categor-as">Categorías</h2>
<p><em>En esta pantalla es posible ver las categorías y subcategorías predeterminadas de los productos, así como su prioridad en función del modelo de negocio. Además, se puede definir el orden de prioridad de la recolección con solo arrastrar y soltar.</em></p>
<p><img className="lightbox" src="/img/settings/categorias1.png"/></p>
<h2 id="paquetes">Paquetes</h2>
<p><em>En esta pantalla, el usuario podrá crear un nuevo paquete, así como seleccionarlo o eliminarlo.</em></p>
<p><img className="lightbox" src="/img/settings/empaques1.png"/></p>
<p><em><strong>Agregar nuevo</strong>: al hacer clic en esta opción, se abrirá un modal que contiene un formulario que sirve para la creación del nuevo paquete. Una vez que se completen los datos correspondientes, se debe hacer clic sobre el botón azul «AGREGAR» y listo.</em></p>
<p><img className="lightbox" src="/img/settings/empaques2.png"/></p>
<p><em>Al hacer clic en el paquete, se muestra la opción de eliminar el paquete.</em></p>
<p><img className="lightbox" src="/img/settings/empaques3.png"/></p>
<h2 id="env-os">Envíos</h2>
<p><em>En esta pantalla se puede guardar un registro del envío, diligenciando los datos correspondientes.</em></p>
<p><em>Botón guardar: al hacer clic en él, se almacenará el registro del envío diligenciado anteriormente.</em></p>
<p><img className="lightbox" src="/img/settings/envios.png"/></p>
<h2 id="impresi-n">Impresión</h2>
<p><em>En esta pantalla es posible configurar las preferencias de impresión para los documentos o facturas imprimibles.</em></p>
<p><img className="lightbox" src="/img/settings/impresion.png"/></p>
                        </div>
                        ||
                        <div className="col-lg-6 p-3">
                            <h1 id="settings">Settings</h1>
<p><em>In this section, you can configure settings for the stores, as well as some preferences. Settings has five independent tabs: “General”, “Categories”, “Packaging”, “Shipping”, and “Printing”. The default tab is General.</em></p>
<p><img className="lightbox" src="/img/settings/settings.png"/></p>
<h2 id="general">General</h2>
<p><em>The General tab has several fields that provide features ranging from store search to picker contact information, editing picker shifts, or even substituting them. You can also configure units of measure.</em></p>
<p><img className="lightbox" src="/img/settings/general1.png"/></p>
<ul>
   <li>
      <p><strong>Country</strong>: this is a dropdown list that shows all countries that you can search by.</p>
   </li>
   <li>
      <p><strong>Address</strong>: this field allows you to search an address.</p>
   </li>
</ul>
<p><img className="lightbox" src="/img/settings/general2.png"/></p>
<ul>
   <li><strong>Contact information</strong>: in this section, you can enter the picker contact information.</li>
</ul>
<p><img className="lightbox" src="/img/settings/general3.png"/></p>
<ul>
   <li>
      <strong>Replacement reasons</strong>: in this section, you can perform the following actions:
      <ol type="a">
         <li>
            Delete replacement reasons.
         </li>
         <li>
            Add one or more replacement reasons.
         </li>
         <li>
            Filter by replacement reasons.
         </li>
      </ol>
   </li>
</ul>
<p><img className="lightbox" src="/img/settings/general4.png"/></p>
<ul>
   <li><strong>Work schedules</strong>: in this section, you can edit picker work schedules and configure work schedules by time and day of the week.</li>
</ul>
<p><img className="lightbox" src="/img/settings/general5.png"/></p>
<ul>
   <li><strong>Unit of measure and Priority order</strong>: in this section, you can configure units of measure and their priority order.</li>
</ul>
<p><img className="lightbox" src="/img/settings/general6.png"/></p>
<p><em>You can save all the changes by using the “Save” button at the bottom right side of the page.</em></p>
<h2 id="categories">Categories</h2>
<p><em>In this section, you can see the default product categories and subcategories and their priority based on the business model. You can simply drag and drop to define the order in which collection should be prioritized.</em></p>
<p><img className="lightbox" src="/img/settings/categorias1.png"/></p>
<h2 id="packaging">Packaging</h2>
<p><em>In this screen, you can create, select, or delete a type of packaging.</em></p>
<p><img className="lightbox" src="/img/settings/empaques1.png"/></p>
<p><em><strong>Add new</strong>: When you select this option, a modal window will be displayed with a new packaging form. Once you fill out the information, selecting the blue “ADD” button will complete it.</em></p>
<p><img className="lightbox" src="/img/settings/empaques2.png"/></p>
<p><em>Clicking on the package displays the option to remove the package.</em></p>
<p><img className="lightbox" src="/img/settings/empaques3.png"/></p>
<h2 id="shipping">Shipping</h2>
<p><em>In this screen, you can save a shipping log by filling out the fields.</em></p>
<p><em>Save button: selecting “Save” will save a log of the previously logged shipment.</em></p>
<p><img className="lightbox" src="/img/settings/envios.png"/></p>
<h2 id="printing">Printing</h2>
<p><em>In this section, you can configure printing preferences for printable receipts and invoices.</em></p>
<p><img className="lightbox" src="/img/settings/impresion.png"/></p>
                        </div>
                    }

                </div>
            </div>
        </Fragment>
    )
}

export default Settings;
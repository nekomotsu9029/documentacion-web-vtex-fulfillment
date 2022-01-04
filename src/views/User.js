import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const User = ({ language, lightBox }) => {
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
      <a href="#" aria-current="page" className="active sidebar-link">Usuarios</a>
      <ul className="sidebar-sub-headers">
         <li className="sidebar-sub-header"><a href="#agregar-responsable-de-picking" className="sidebar-link">Agregar responsable de picking</a></li>
         <li className="sidebar-sub-header"><a href="#agregar-atencion-al-cliente" className="sidebar-link">Agregar atención al cliente</a></li>
         <li className="sidebar-sub-header"><a href="#agregar-administrador" className="sidebar-link">Agregar administrador</a></li>
      </ul>
   </li>
</ul>
                                || 
                                <ul className="sidebar-links">
   <li>
      <a href="#" aria-current="page" className="active sidebar-link">Users</a>
      <ul className="sidebar-sub-headers">
         <li className="sidebar-sub-header"><a href="#adding-a-picker-user" className="sidebar-link">Adding a Picker user</a></li>
         <li className="sidebar-sub-header"><a href="#adding-a-customer-service-user" className="sidebar-link">Adding a Customer Service user</a></li>
         <li className="sidebar-sub-header"><a href="#adding-an-admin-user" className="sidebar-link">Adding an Admin user</a></li>
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
                            <h1 id="usuarios">Usuarios</h1>
<p><em>En esta sección se puede ver, crear y editar usuarios de la aplicación, así como el acceso a las tiendas disponibles, discriminando por tipo de usuario: responsable de picking, atención al cliente o administrador.</em></p>
<ul>
   <li>
      <p><em>El responsable de picking es aquel usuario que prepara los pedidos y tiene acceso a la aplicación web y móvil.</em></p>
   </li>
   <li>
      <p><em>El usuario con rol de atención al cliente tiene acceso de lectura a todos los pedidos, tracking y servicio al cliente «soporte». Puede comunicarse también directamente con los responsables de picking.</em></p>
   </li>
   <li>
      <p><em>Por último, administrador es aquel que, además de tener acceso a los procesos anteriores, puede verificar a los responsables de picking, gestionar toda la configuración, así como todo el proceso de los pedidos, e incluso cancelarlos de ser necesario.</em></p>
   </li>
</ul>
<p><img className="lightbox" src="/img/settings/users.png"/></p>
<p><em>Para crear un nuevo usuario, se debe hacer clic en el botón de los tres puntos y luego escoger el tipo de usuario deseado.</em></p>
<p><img className="lightbox" src="/img/settings/users1.png"/></p>
<h2 id="agregar-responsable-de-picking">Agregar responsable de picking</h2>
<p><em>Esta opción abre un modal con un formulario para agregar un nuevo responsable de picking. Es necesario ingresar el email del nuevo responsable, así como un nombre de usuario (apodo que lo identificará). Además, se pide asignarle una contraseña y, por último, definir cuál o cuáles serán las tiendas a las que tendrá acceso.</em></p>
<p><em>Hecho esto, se debe hacer clic sobre el botón azul «GUARDAR USUARIO» para guardar la información del nuevo responsable de picking y concluir el proceso.</em></p>
<p><img className="lightbox" src="/img/settings/users2.png"/></p>
<h2 id="agregar-atenci-n-al-cliente">Agregar atención al cliente</h2>
<p><em>Esta opción abre un modal con una tabla que contiene una lista de los responsables de picking creados anteriormente. Para crear un nuevo usuario con rol de «Atención al cliente» se debe buscar al responsable de picking y hacer clic en él.</em></p>
<p><img className="lightbox" src="/img/settings/users3.png"/></p>
<p><em>Al darle un clic al responsable de picking seleccionado, aparecerá un nuevo modal en el cual debemos establecer las tiendas a las que este usuario tendrá acceso. Al hacer clic en el botón «CONFIRMAR», el usuario ya tendría el rol de «Atención al cliente».</em></p>
<p><img className="lightbox" src="/img/settings/users4.png"/></p>
<h2 id="agregar-administrador">Agregar administrador</h2>
<p><em>Esta opción abre un modal con una tabla que contiene una lista de los responsables de picking creados anteriormente, similar a la de «Atención al cliente». Igualmente se debe buscar al usuario deseado y hacer clic en él.</em></p>
<p><img className="lightbox" src="/img/settings/users5.png"/></p>
<p><em>Luego de esto, se abrirá un nuevo modal en el cual debemos definir las tiendas a las que tendrá acceso este nuevo usuario con rol de «Administrador». Hecho esto, hacemos clic en el botón «CONFIRMAR».</em></p>
                        </div>
                        ||
                        <div className="col-lg-6 p-3">
                            <h1 id="users">Users</h1>
<p><em>In this section, you can view, create, and edit app users and their access to available stores depending on the user type: “Picker”, “Customer Service”, or “Admin”.</em></p>
<ul>
   <li>
      <p><em>A Picker is the user that prepares the orders and has access to the web and mobile app.</em></p>
   </li>
   <li>
      <p><em>The Customer Service role has read access to all orders, tracking, and customer support. They can also directly communicate with pickers.</em></p>
   </li>
   <li>
      <p><em>In addition to all of the above access, the Admin role has access to check pickers, manage all settings, and order flow, including canceling orders if necessary.</em></p>
   </li>
</ul>
<p><img className="lightbox" src="/img/settings/users.png"/></p>
<p><em>To create a new user, select the dropdown from the three-dot icon and pick the user type you want to create.</em></p>
<p><img className="lightbox" src="/img/settings/users1.png"/></p>
<h2 id="adding-a-picker-user">Adding a Picker user</h2>
<p><em>This option displays a modal window with a form for adding a new picker. You need to add the email of the new picker and a username, which will identify them. Also, you need to assign them a password and define the stores they will be able to access.</em></p>
<p><em>After filling out all the information, select the blue “SAVE USER” button. That will save the new picker.</em></p>
<p><img className="lightbox" src="/img/settings/users2.png"/></p>
<h2 id="adding-a-customer-service-user">Adding a Customer Service user</h2>
<p><em>This option displays a modal window with a table that has a list of previously created pickers. To create a new user with the Customer Service role, you need to find the picker and select them.</em></p>
<p><img className="lightbox" src="/img/settings/users3.png"/></p>
<p><em>After you select the picker, a new modal window will appear where you need to set the stores they will be able to access. Once you select the “CONFIRM” button, the user will have the Customer Service role.</em></p>
<p><img className="lightbox" src="/img/settings/users4.png"/></p>
<h2 id="adding-an-admin-user">Adding an Admin user</h2>
<p><em>This option displays a modal window with a table that has a list of previously created pickers similar to the Customer Service one. Here, too, you have to search the desired user and select it.</em></p>
<p><img className="lightbox" src="/img/settings/users5.png"/></p>
<p><em>When you select it, a new modal window will be displayed as well where you need to set the stores the new Admin user will be able to access. After you define them, select the “CONFIRM” button.</em></p>
                        </div>
                    }

                </div>
            </div>
        </Fragment>
    )
}

export default User;
import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const PickingPacking = ({ language, lightBox }) => {
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
                                        <a href="#" aria-current="page" className="active sidebar-link">Picking y packing</a>
                                        <ul className="sidebar-sub-headers">
                                            <li className="sidebar-sub-header"><a href="#gestion-de-pedidos" className="sidebar-link">Gestión de pedidos</a></li>
                                            <li className="sidebar-sub-header"><a href="#importar-pedidos" className="sidebar-link">Importar pedidos</a></li>
                                            <li className="sidebar-sub-header"><a href="#exportar-pedidos" className="sidebar-link">Exportar pedidos</a></li>
                                            <li className="sidebar-sub-header"><a href="#detalle-inicial-del-pedido" className="sidebar-link">Detalle inicial del pedido</a></li>
                                            <li className="sidebar-sub-header"><a href="#status-del-pedido" className="sidebar-link">Status del pedido</a></li>
                                            <li className="sidebar-sub-header"><a href="#asignar-un-responsable-de-picking" className="sidebar-link">Asignar un responsable de picking</a></li>
                                            <li className="sidebar-sub-header"><a href="#boton-«ver-mas»-del-pedido" className="sidebar-link">Botón «ver más» del pedido</a></li>
                                            <li className="sidebar-sub-header"><a href="#imprimir-recibo" className="sidebar-link">Imprimir recibo</a></li>
                                            <li className="sidebar-sub-header"><a href="#imprimir-voucher" className="sidebar-link">Imprimir voucher</a></li>
                                            <li className="sidebar-sub-header"><a href="#agregar-producto-al-pedido" className="sidebar-link">Agregar producto al pedido</a></li>
                                            <li className="sidebar-sub-header"><a href="#crear-producto" className="sidebar-link">Crear producto</a></li>
                                            <li className="sidebar-sub-header"><a href="#bot-n-ver-m-s-del-producto" className="sidebar-link">Botón «ver más» del producto</a></li>
                                            <li className="sidebar-sub-header"><a href="#reemplazar-producto" className="sidebar-link">Reemplazar producto</a></li>
                                            <li className="sidebar-sub-header"><a href="#cambiar-precio-del-producto" className="sidebar-link">Cambiar precio del producto</a></li>
                                            <li className="sidebar-sub-header"><a href="#rechazar-producto" className="sidebar-link">Rechazar producto</a></li>
                                            <li className="sidebar-sub-header"><a href="#picking-del-producto" className="sidebar-link">Picking del producto</a></li>
                                            <li className="sidebar-sub-header"><a href="#packing" className="sidebar-link">Packing</a></li>
                                            <li className="sidebar-sub-header"><a href="#facturar-pedido" className="sidebar-link">Facturar pedido</a></li>
                                            <li className="sidebar-sub-header"><a href="#agregar-servicio-de-envio" className="sidebar-link">Agregar servicio de envío</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                || 
                                <ul class="sidebar-links">
                                    <li>
                                        <a href="#" aria-current="page" class="active sidebar-link">Picking &amp; packing</a>
                                        <ul class="sidebar-sub-headers">
                                            <li class="sidebar-sub-header"><a href="#order-management" class="sidebar-link">Order management</a></li>
                                            <li class="sidebar-sub-header"><a href="#import" class="sidebar-link">Import</a></li>
                                            <li class="sidebar-sub-header"><a href="#export" class="sidebar-link">Export</a></li>
                                            <li class="sidebar-sub-header"><a href="#order-details" class="sidebar-link">Order details</a></li>
                                            <li class="sidebar-sub-header"><a href="#order-status" class="sidebar-link">Order status</a></li>
                                            <li class="sidebar-sub-header"><a href="#assign-a-picker" class="sidebar-link">Assign a picker</a></li>
                                            <li class="sidebar-sub-header"><a href="#see-more-dropdown-of-the-order" class="sidebar-link">"See more" dropdown of the order</a></li>
                                            <li class="sidebar-sub-header"><a href="#print-command" class="sidebar-link">Print command</a></li>
                                            <li class="sidebar-sub-header"><a href="#print-voucher" class="sidebar-link">Print voucher</a></li>
                                            <li class="sidebar-sub-header"><a href="#add-product-to-the-order" class="sidebar-link">Add product to the order</a></li>
                                            <li class="sidebar-sub-header"><a href="#create-a-product" class="sidebar-link">Create a product</a></li>
                                            <li class="sidebar-sub-header"><a href="#product-see-more-dropdown" class="sidebar-link">Product "see more" dropdown</a></li>
                                            <li class="sidebar-sub-header"><a href="#replace-product" class="sidebar-link">Replace product</a></li>
                                            <li class="sidebar-sub-header"><a href="#change-product-price" class="sidebar-link">Change product price</a></li>
                                            <li class="sidebar-sub-header"><a href="#reject-product" class="sidebar-link">Reject product</a></li>
                                            <li class="sidebar-sub-header"><a href="#prepare-product" class="sidebar-link">Prepare product</a></li>
                                            <li class="sidebar-sub-header"><a href="#packing" class="sidebar-link">Packing</a></li>
                                            <li class="sidebar-sub-header"><a href="#invoice-order" class="sidebar-link">Invoice order</a></li>
                                            <li class="sidebar-sub-header"><a href="#add-delivery-service" class="sidebar-link">Add delivery service</a></li>
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
                            <h1 id="picking-y-packing">Picking y packing</h1>
                            <p><em>En <strong>Picking y packing</strong> encontrarás el listado de los pedidos confirmados por el usuario. Asimismo, con las pasarelas de pagos, podrás asignar responsables de picking (pickers) a los pedidos, así como gestionar el proceso de los mismos, recoger productos, cambiarlos, eliminarlos, entre otros.</em></p>
                            <p><em>Para entrar a esta sección, es tan simple como ir al menú lateral izquierdo de la aplicación. Dentro de «Pedidos», ve a «Fulfillment» y, al desplegar el menú, encontrarás <strong>Picking y packing</strong>.</em></p>
                            <p><img className="lightbox" src="/img/1.png" /></p>
                            <h2 id="gesti-n-de-pedidos">Gestión de pedidos</h2>
                            <p><em>Una vez que estés dentro de <strong>Picking y packing</strong>, podrás ver la ventana para la gestión de pedidos. Aquí encontrarás los siguientes campos:</em></p>
                            <ul>
                                <li><strong>Barra de búsqueda</strong></li>
                            </ul>
                            <p><img className="lightbox" src="/img/barradebusquedapickingandpacking.png" /></p>
                            <p><em>Este campo de texto te permitirá buscar de una manera rápida tus pedidos, aquí puedes escribir el número de pedido o el nombre del cliente que realizó el pedido.</em></p>
                            <ul>
                                <li><strong>Filtros</strong></li>
                            </ul>
                            <p><em>Para filtrar los pedidos listados, debes hacer clic sobre el botón Filtros.</em>
                                <img className="lightbox" src="/img/botonfiltropickingandpacking.png" /></p>
                            <p><em>Este botón desplegará un Offcanva con todas las opciones de filtros que son las siguientes:</em></p>
                            <ul>
                                <li><p><strong>Orden</strong>
                                    <img className="lightbox" src="/img/filtroordenpickingandpacking.png" />
                                    <em>Se organizará según la fecha y hora de entrega establecida por el cliente en el checkout. El orden ascendente es para mostrar primero los pedidos más recientes; y el orden descendente, para mostrar primero los pedidos más antiguos.</em></p>
                                </li>
                                <li><p><strong>Fecha del pedido</strong>
                                    <img className="lightbox" src="/img/filtrofechapedidopickingandpacking.png" />
                                    <em>De esta manera, se mostrarán los pedidos cuyas fechas de pedido coincidan dentro de los límites de inicio y fin establecidos.</em></p>
                                </li>
                                <li><p><strong>Fecha limite</strong>
                                    <img className="lightbox" src="/img/filtrofechalimitepickingandpacking.png" />
                                    <em>Esta sección permite filtrar los pedidos cuya fecha límite coincidan dentro de los límites de las fechas de inicio y fin.</em></p>
                                </li>
                                <li><p><strong>Status</strong>
                                    <img className="lightbox" src="/img/filtroestadopickingandpacking.png" />
                                    <em>Solo se mostrarán los pedidos cuyo status de proceso coincida con alguno de los status descritos en él.</em></p>
                                </li>
                                <li><p><strong>Valor de pedido</strong>
                                    <img className="lightbox" src="/img/filtrovalordelpedidopickingandpacking.png" />
                                    <em>Se puede establecer un rango del costo de los pedidos que va desde 0 hasta el monto establecido en él, con un máximo de 5 millones.</em></p>
                                </li>
                                <li><p><strong>Número de ítems</strong>
                                    <img className="lightbox" src="/img/filtronumerodeitemspickingandpacking.png" />
                                    <em>Sirve para filtrar los pedidos en función del número de ítems que los conforman, mínimo 0 y máximo 99.</em></p>
                                </li>
                                <li><p><strong>Transportadora</strong>
                                    <img className="lightbox" src="/img/filtrotransportadorapickingandpacking.png" />
                                    <em>En este filtro, se establece específicamente la transportadora del pedido.</em></p>
                                </li>
                                <li><p><strong>Medio de pago</strong>
                                    <img className="lightbox" src="/img/filtromediosdepagopickingandpacking.png" />
                                    <em>Sirve para filtrar los pedidos en función del tipo de pago establecido por el cliente.</em></p>
                                </li>
                                <li><p><strong>Responsable de picking (Picker)</strong>
                                    <img className="lightbox" src="/img/filtropickerpickingandpacking.png" />
                                    <em>Esta sección despliega los emails de los responsables disponibles. Al escoger uno, solo se mostrarán los pedidos asignados a ese responsable.</em></p>
                                </li>
                                <li><p><strong>Categorías</strong>
                                    <img className="lightbox" src="/img/filtrocategoriapickingandpacking.png" />
                                    <em>Esta sección despliega las categorías de los ítems. Al escoger una, se filtrará aquellos pedidos que tengan ítems que coincidan con la categoría seleccionada.</em></p>
                                </li>
                            </ul>
                            <h2 id="importar-pedidos">Importar pedidos</h2>
                            <p><em>Este botón sirve para importar un pedido:</em>
                                <img className="lightbox" src="/img/botonimportarpickingandpacking.png" />
                                <em>Se abrirá un modal donde se debe ingresar el ID de pedido que queremos importar. Luego, le damos clic al check que dice «Solo se importarán los pedidos que no se hayan descargado automáticamente» y, por último, pulsamos el botón azul «importar».</em>
                                <img className="lightbox" src="/img/modalimportarpickingandpacking.png" /></p>
                            <h2 id="exportar-pedidos">Exportar pedidos</h2>
                            <p><em>Este botón sirve para exportar un pedido:</em>
                                <img className="lightbox" src="/img/botonexportarpickingandpacking.png" />
                                <em>Se abrirá un modal con una serie de campos para crear el filtro de los pedidos que queremos exportar. Los filtros disponibles son: responsables de picking, categorías, transportadora, fecha de inicio, fecha de fin, ciudad y seller. Se puede agregar más de un filtro haciendo clic en el botón «+ agregar filtro». Cuando tengas los filtros necesarios, solo debes darle un clic al botón «exportar».</em>
                                <img className="lightbox" src="/img/modalexportarpickingandpacking.png" /></p>
                            <h2 id="detalle-inicial-del-pedido">Detalle inicial del pedido</h2>
                            <p><img className="lightbox" src="/img/detalleinicialdelaordenpickingandpacking.png" /></p>
                            <p><em>El detalle inicial del pedido muestra detalles específicos de este en dos etapas: la inicial que es la que se ve en la parte superior (fondo blanco), y detalles más específicos que se despliegan al dar un clic sobre ella (fondo gris). En este pedido se puede observar cómo la sección superior corresponde a la cabecera del recuadro. Aquí podemos encontrar las siguientes columnas:</em></p>
                            <ul>
                                <li><strong>Fecha de creación</strong>: fecha y hora en la que se realizó el pedido.<img className="lightbox" src="/img/detalleinicialdelaordenfechadecreacion.png" /></li>
                                <li><strong>Fecha de entrega</strong>: fecha límite objetivo del cliente para recibir su pedido.
                                    <img className="lightbox" src="/img/detalleinicialdelaordenfechaparaentrega.png" /></li>
                                <li><strong>Forma de entrega</strong>: medio por el cual el usuario solicita la entrega de su pedido.
                                    <img className="lightbox" src="/img/detalleinicialdelaordenformadeentrega.png" /></li>
                                <li><strong>Número de pedido</strong>: número de identificación único que corresponde e identifica el pedido.
                                    <img className="lightbox" src="/img/detalleinicialdelaordennumerodepedido.png" /></li>
                                <li><strong>Responsable de picking</strong>: nombre de la persona responsable asignada al pedido, se muestra como «Sin asignación» por defecto hasta que se le asigne un responsable de picking.
                                    <img className="lightbox" src="/img/detalleinicialdelaordenalistador.png" /></li>
                                <li><p><strong>Status</strong>: en qué parte del proceso se encuentra el pedido. Si no sabes cuáles son estos status, haz clic aquí  <a href="#estados-de-la-orden">status del pedido</a>.
                                    <img className="lightbox" src="/img/detalleinicialdelaordenestado.png" />
                                    <em>También podemos observar en la parte inferior detalles un poco más específicos de este pedido como:</em></p>
                                </li>
                                <li><p><strong>Datos del cliente</strong>: nombre del cliente que realizó el pedido, así como su email.
                                    <img className="lightbox" src="/img/detalleinicialdelaordendatosdelcliente.png" /></p>
                                </li>
                                <li><p><strong>Información de entrega</strong>: dirección de entrega del pedido proporcionado por el cliente.
                                    <img className="lightbox" src="/img/detalleinicialdelaordendatosdelcliente.png" /></p>
                                </li>
                                <li><p><strong>Ventana de entrega</strong>: fecha en la que se realizó el pedido, así como la fecha objetivo del pedido.
                                    <img className="lightbox" src="/img/detalleinicialdelaordenfranjadeentrega.png" /></p>
                                </li>
                                <li><p><strong>Ítem(s) de pedido</strong>: número de ítems que tiene el pedido, así como las categorías de estos.
                                    <img className="lightbox" src="/img/detalleinicialdelaordenitemsdelpedido.png" /></p>
                                </li>
                                <li><p><strong>Medio de pago</strong>: tipo de pago establecido por el cliente, así como el valor total a pagar.
                                    <img className="lightbox" src="/img/detalleinicialdelaordenmediodepago.png" /></p>
                                </li>
                            </ul>
                            <p><em>Los detalles iniciales del pedido tienen un menú desplegable que muestra 3 opciones adicionales: «Ver detalles», «Imprimir recibo» y «Asignar».</em>
                                <img className="lightbox" src="/img/detalleinicialdelaordenmasopciones.png" /></p>
                            <ul>
                                <li><strong>Ver detalles</strong>: esta opción abrirá una ventana de picking donde se puede gestionar con mayor detalle.</li>
                            </ul>
                            <p>__«sugerencias» y «búsqueda» nos ayudan a reemplazar los productos del proceso de picking y packing. Para ver más detalles, haz clic aquí <a href="#picking-desktop">picking desktop</a>
                                <img className="lightbox" src="/img/verdetallespickingandpacking.png" /></p>
                            <ul>
                                <li><p><strong>Imprimir recibo</strong>: esta opción abre una ventana con la factura del pedido.
                                    <img className="lightbox" src="/img/imprimircomandapickingandpacking.png" /></p>
                                </li>
                                <li><p><strong>Asignar</strong>: esta opción abre un modal para asignar un responsable de picking al pedido. Para asignarlo, se debe hacer clic sobre el menú desplegable y seleccionar al responsable de picking deseado.
                                    <img className="lightbox" src="/img/asignarusuariopickingandpacking.png" /></p>
                                </li>
                            </ul>
                            <h2 id="status-del-pedido">Status del pedido</h2>
                            <p><em>A continuación, estos son los status posibles de un pedido:</em></p>
                            <ul>
                                <li><p><strong>Pendiente</strong>: pedidos que no han sido tratados en Fulfillment y están listos para ser gestionados.
                                    <img className="lightbox" src="/img/estadoordenes/pendiente.png" /></p>
                                </li>
                                <li><p><strong>Listo para picking</strong>: pedido recibido que es asignado a un responsable de picking (persona que prepara el pedido).
                                    <img className="lightbox" src="/img/estadoordenes/poralistar.png" /></p>
                                </li>
                                <li><p><strong>Listo para packing</strong>: el pedido ya fue preparado, cada ítem con las cantidades indicadas, con reemplazo o nuevos ítems. Gestión realizada por el responsable de picking indicando que está listo para packing.
                                    <img className="lightbox" src="/img/estadoordenes/listoparaempacar.png" /></p>
                                </li>
                                <li><p><strong>Realizando packing</strong>: cada ítem del pedido está siendo empacado en las bolsas o paquetes determinados por la tienda.
                                    <img className="lightbox" src="/img/estadoordenes/empacando.png" /></p>
                                </li>
                                <li><p><strong>Listo para facturar</strong>: todos los ítems del pedido ya se encuentran empacados y están listos para ser facturados. Aquí finaliza el proceso de packing.
                                    <img className="lightbox" src="/img/estadoordenes/listoparafacturar.png" /></p>
                                </li>
                                <li><p><strong>Facturado</strong>: el pedido ya fue facturado y está listo para ser recogido y entregado al cliente.
                                    <img className="lightbox" src="/img/estadoordenes/facturado.png" /></p>
                                </li>
                                <li><p><strong>Listo para envío</strong>: cada paquete establecido es asignado a la transportadora u operador logístico definido para realizar la entrega al cliente.
                                    <img className="lightbox" src="/img/estadoordenes/listoparadespacho.png" /></p>
                                </li>
                            </ul>
                            <h2 id="asignar-un-responsable-de-picking">Asignar un responsable de picking</h2>
                            <p><em>Al iniciar el proceso de picking, se abre un modal para la asignación de un responsable de picking. Una vez que se seleccione y se confirme al responsable, se puede iniciar el proceso de picking.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop.png" /></p>
                            <h2 id="bot-n-ver-m-s-del-pedido">Botón «ver más» del pedido</h2>
                            <p><em>Está situado en la parte superior derecha del pedido y ofrece 3 funcionalidades: «Imprimir recibo», «Imprimir voucher» y «Agregar ítem».</em></p>
                            <p><img className="lightbox" src="/img/2.png" /></p>
                            <h2 id="imprimir-recibo">Imprimir recibo</h2>
                            <p><em>Factura orientada al responsable de picking, con información relevante del pedido y sus ítems, puede ser útil para complementar el proceso de picking y se puede visualizar haciendo clic sobre el botón «ver más» del pedido. Además, al seleccionar la opción «Imprimir recibo», se abrirá una nueva pestaña con el documento.</em></p>
                            <p><img className="lightbox" src="/img/comanda.png" /></p>
                            <h2 id="imprimir-voucher">Imprimir voucher</h2>
                            <p><em>Factura orientada al cliente, con información general del pedido y sus costos. Tiene un espacio para que el cliente firme, se puede imprimir haciendo clic sobre el botón «ver más» del pedido. Además, al seleccionar la opción «Imprimir voucher», se abrirá una nueva pestaña con el documento.</em></p>
                            <p><img className="lightbox" src="/img/voucher.png" /></p>
                            <h2 id="agregar-producto-al-pedido">Agregar producto al pedido</h2>
                            <p><em>Para agregar un producto al pedido, debemos hacer clic sobre el botón «ver más» del pedido y seleccionar la opción «Agregar ítem». Se abrirá un modal en el cual debemos buscar el producto que se agregará, seleccionarlo y agregar una cantidad definida al pedido. Luego, debe confirmarlo para concluir el proceso. </em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/1.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/2.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/3.png" /></p>
                            <h2 id="crear-producto">Crear producto</h2>
                            <p><em>Para crear un producto, se debe hacer clic sobre el botón «+» en el modal «Agregar producto al pedido», esto abrirá un nuevo modal donde se deben diligenciar los datos del producto correspondiente. Luego, debe confirmarlo para agregar el producto que acaba de crear.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/4.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/5.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/6.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/7.png" /></p>
                            <h2 id="bot-n-ver-m-s-del-producto">Botón «ver más» del producto</h2>
                            <p><em>Este botón despliega las funcionalidades de: sugerencias, búsqueda, cambiar precio y eliminar ítem.</em></p>
                            <p><em>Las primeras (sugerencias y búsqueda) nos ayudan a reemplazar los productos, con la diferencia que sugerencias nos ofrece opciones de cambio. Estas opciones dependen de la relación interna del stock de las tiendas.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/8.png" /></p>
                            <h2 id="reemplazar-producto">Reemplazar producto</h2>
                            <p><em>Para reemplazar un producto, debemos hacer clic en el botón «ver más» del pedido y seleccionar la opción de «búsqueda». Esto abrirá un modal donde se buscará el producto objeto de cambio. Se debe seleccionar y confirmar el cambio definiendo el motivo del reemplazo. El producto se alistará automáticamente, mientras el producto original será rechazado por causa del reemplazo.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/9.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/10.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/11.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/12.png" /></p>
                            <h2 id="cambiar-precio-del-producto">Cambiar precio del producto</h2>
                            <p><em>Para cambiar el precio de un producto, debemos hacer clic en el botón «ver más» del pedido y seleccionar la opción de «cambiar precio». Esto abrirá un nuevo modal donde debemos establecer el nuevo precio y el motivo el cambio. Por último, debemos confirmar el cambio.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/13.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/14.png" /></p>
                            <h2 id="rechazar-producto">Rechazar producto</h2>
                            <p><em>Para rechazar/eliminar un producto del pedido, debemos hacer clic en el botón «ver más» del pedido y seleccionar la opción «eliminar ítem». Luego, debe definir el motivo del rechazo y confirmar el proceso.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/15.png" /></p>
                            <h2 id="picking-del-producto">Picking del producto</h2>
                            <p><em>Para alistar un producto, se debe definir la cantidad de unidades para su separación. Una vez que la cantidad es igual o superior al valor ingresado, aparecerá un botón azul en la parte derecha del pedido. Luego, deberá hacer clic sobre este y confirmar la separación para establecer el producto como «Picking realizado».</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/16.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/17.png" /></p>
                            <h2 id="packing">Packing</h2>
                            <p><em>Una vez finalizado el proceso de picking, debe hacer clic sobre el botón de «Listo para packing» situado inmediatamente después del status del pedido, en la parte superior derecha de la pantalla.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/18.png" /></p>
                            <p><em>Una vez hecho esto, se establecerá la pantalla de packing. Aquí debemos agregar los paquetes que sean necesarios con el botón de agregar paquete.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/19.png" /></p>
                            <p><em>Para cada paquete, podemos agregar uno o todos los productos a través del botón «ver más» del paquete.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/20.png" /></p>
                            <p><em>Una vez realizado el packing de todos los productos, debemos cerrar el paquete a través del botón «cerrar paquetes». Esto hará que se cierren los paquetes y no permitirá hacer cambios, agregar o eliminar alguno de ellos.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/21.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/22.png" /></p>
                            <h2 id="facturar-pedido">Facturar pedido</h2>
                            <p><em>Una vez realizado el packing de los pedidos, estos deben ser facturados. Para esto, debemos hacer clic sobre el botón «Listo para facturar». Este último abre un modal donde definimos los valores de la factura. Procedemos a guardar la factura y listo.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/23.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/24.png" /></p>
                            <h2 id="agregar-servicio-de-env-o">Agregar servicio de envío</h2>
                            <p><em>Una vez que el pedido sea facturado, podemos agregar un servicio de transporte para el mismo. Para ello, debemos hacer clic sobre el botón «Agregar servicio». Este último agregará una tarjeta donde debemos establecer las fechas de recolección y envío, así como el tipo de servicio de transporte que vamos a asignar y los paquetes que transportará. Hecho esto, solo debemos confirmar el envío para finalizar el proceso.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/25.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/26.png" /></p>
                        </div>
                        ||
                        <div className="col-lg-6 p-3">
                            <h1 id="picking-packing">Picking &amp; packing</h1>
                            <p><em>In <strong>Picking &amp; Packing</strong> you will find the list of orders confirmed by the user, and also payment gateways. You can assign pickers to orders and manage them, as well as picking, changing, and deleting products, among other actions.</em></p>
                            <p><em>To go to this section, you only have to go to the left panel in the app and expand the <strong>Fulfillment</strong> dropdown in the <strong>Orders</strong> module and select the <strong>Picking &amp; Packing</strong> option.</em></p>
                            <p><img className="lightbox" src="/img/1.png" /></p>
                            <h2 id="order-management">Order management</h2>
                            <p><em>In Picking &amp; Packing, you will see the order management page, where you will find:</em></p>
                            <ul>
                                <li><strong>Search bar</strong></li>
                            </ul>
                            <p><img className="lightbox" src="/img/barradebusquedapickingandpacking.png" /></p>
                            <p><em>This text field allows you to quickly search your orders. You can enter the order number or name of the customer who “placed the order”.</em></p>
                            <ul>
                                <li><strong>Filters</strong></li>
                            </ul>
                            <p><em>To filter the orders in view, you have to select the Filter button.</em></p>
                            <p><img className="lightbox" src="/img/botonfiltropickingandpacking.png" /></p>
                            <p><em>This button displays an offcanvas menu with all the filter options. The filter options are the following:</em></p>
                            <ul>
                                <li><p><strong>Sort</strong>
                                    <img className="lightbox" src="/img/filtroordenpickingandpacking.png" />
                                    <em>It will sort by delivery date and time set by the customer at checkout in ascending order for orders with the closest date and time first and descending to see the latest dates first.</em></p>
                                </li>
                                <li><p><strong>Order date</strong>
                                    <img className="lightbox" src="/img/filtrofechapedidopickingandpacking.png" />
                                    <em>It displays the orders with dates that fall within the selected start and end dates.</em></p>
                                </li>
                                <li><p><strong>Deadline</strong>
                                    <img className="lightbox" src="/img/filtrofechalimitepickingandpacking.png" />
                                    <em>This filter allows viewing orders with a deadline that falls within the selected start and end dates.</em></p>
                                </li>
                                <li><p><strong>Status</strong>
                                    <img className="lightbox" src="/img/filtroestadopickingandpacking.png" />
                                    <em>Only orders matching the selected status will be displayed.</em></p>
                                </li>
                                <li><p><strong>Order total</strong>
                                    <img className="lightbox" src="/img/filtrovalordelpedidopickingandpacking.png" />
                                    <em>You can select an order cost range from 0 to the selected total up to a maximum of five million.</em></p>
                                </li>
                                <li><p><strong>Number of items</strong>
                                    <img className="lightbox" src="/img/filtronumerodeitemspickingandpacking.png" />
                                    <em>It allows filtering orders by the number of items it has. The minimum is 0 and the maximum is 99.</em></p>
                                </li>
                                <li><p><strong>Carrier</strong>
                                    <img className="lightbox" src="/img/filtrotransportadorapickingandpacking.png" />
                                    <em>This filter specifically selects the order carrier.</em></p>
                                </li>
                                <li><p><strong>Payment method</strong>
                                    <img className="lightbox" src="/img/filtromediosdepagopickingandpacking.png" />
                                    <em>It allows filtering orders by payment type selected by the customer.</em></p>
                                </li>
                                <li><p><strong>Picker</strong>
                                    <img className="lightbox" src="/img/filtropickerpickingandpacking.png" />
                                    <em>This option shows available picker emails. When you select an email, only orders assigned to that picker will be displayed.</em></p>
                                </li>
                                <li><p><strong>Categories</strong>
                                    <img className="lightbox" src="/img/filtrocategoriapickingandpacking.png" />
                                    <em>This option shows the item categories. When you select a category, the orders matching that category will be displayed.</em></p>
                                </li>
                            </ul>
                            <h2 id="import">Import</h2>
                            <p><em>This button is used for importing an order.</em></p>
                            <p><img className="lightbox" src="/img/botonimportarpickingandpacking.png" /></p>
                            <p><em>This button will open a modal window. In the text field, you should enter the ID of the order that you want to import. Then, select the checkbox “Only orders that did not download automatically will be imported”. Lastly, select the blue “Import” button.</em>
                                <img className="lightbox" src="/img/modalimportarpickingandpacking.png" /></p>
                            <h2 id="export">Export</h2>
                            <p><em>This button is used for exporting an order.</em></p>
                            <p><img className="lightbox" src="/img/botonexportarpickingandpacking.png" /></p>
                            <p><em>This button will open a modal window. The window has several dropdowns to build the filter for the orders you want to export. The available filters are: “Picker”, “Categories”, “Carrier”, “Start date”, “End date”, “City”, and “Seller”. You can add more than one filter by selecting the button “+ Add filter”. After you have all the filters you need, select the “Export” button.</em></p>
                            <p><img className="lightbox" src="/img/modalexportarpickingandpacking.png" /></p>
                            <h2 id="order-details">Order details</h2>
                            <p><img className="lightbox" src="/img/detalleinicialdelaordenpickingandpacking.png" /></p>
                            <p><em>Order details displays specific order details in two parts. The general details are shown first with a white background, and, if you select it, more specific details are displayed with a “grey background.” You can see in this order that the top section has a header box that contains:</em></p>
                            <ul>
                                <li><strong>Created date</strong>: this is the date and time when the order was placed.<img className="lightbox" src="/img/detalleinicialdelaordenfechadecreacion.png" /></li>
                                <li><strong>Delivery date</strong>: this is the target deadline for delivering the order to the customer.
                                    <img className="lightbox" src="/img/detalleinicialdelaordenfechaparaentrega.png" /></li>
                                <li><strong>Delivery method</strong>: this shows the delivery method requested by the user.
                                    <img className="lightbox" src="/img/detalleinicialdelaordenformadeentrega.png" /></li>
                                <li><strong>Order number</strong>: this is the unique identification number that corresponds to and identifies the order.
                                    <img className="lightbox" src="/img/detalleinicialdelaordennumerodepedido.png" /></li>
                                <li><strong>Picker</strong>: this is the name of the picker assigned to the order. The default is “Unassigned” until a picker is assigned.
                                    <img className="lightbox" src="/img/detalleinicialdelaordenalistador.png" /></li>
                                <li><p>**Status: shows the order status. For more information about status, see <a href="#estados-de-la-orden">order status</a>
                                    <img className="lightbox" src="/img/detalleinicialdelaordenestado.png" />
                                    <em>At the bottom, you can see more specific details about the order, such as:</em></p>
                                </li>
                                <li><p><strong>Customer information</strong>: here you can see the name of the customer that placed the order and their email.
                                    <img className="lightbox" src="/img/detalleinicialdelaordendatosdelcliente.png" /></p>
                                </li>
                                <li><p><strong>Delivery information</strong>: this section shows the order delivery address provided by the customer.
                                    <img className="lightbox" src="/img/detalleinicialdelaordendatosdelcliente.png" /></p>
                                </li>
                                <li><p><strong>Delivery window</strong>: shows the date the order was placed and the order target date.
                                    <img className="lightbox" src="/img/detalleinicialdelaordenfranjadeentrega.png" /></p>
                                </li>
                                <li><p><strong>Order items</strong>: shows the number of items in the order and their categories.
                                    <img className="lightbox" src="/img/detalleinicialdelaordenitemsdelpedido.png" /></p>
                                </li>
                                <li><p><strong>Payment method</strong>: here you can see the payment type selected by the customer and the total amount due.
                                    <img className="lightbox" src="/img/detalleinicialdelaordenmediodepago.png" /></p>
                                </li>
                            </ul>
                            <p><em>The order details have a dropdown menu that shows three additional options, “View details”, “Print”, and “Assign”.</em>
                                <img className="lightbox" src="/img/detalleinicialdelaordenmasopciones.png" /></p>
                            <ul>
                                <li><strong>View details</strong>: This option will open a picking window where you can manage the picking and packing in more detail. See <strong>picking desktop</strong> for more details._</li>
                            </ul>
                            <p><img className="lightbox" src="/img/verdetallespickingandpacking.png" /></p>
                            <ul>
                                <li><p><strong>Print receipt</strong>: This option opens a window with the order invoice.
                                    <img className="lightbox" src="/img/imprimircomandapickingandpacking.png" /></p>
                                </li>
                                <li><p><strong>Assign</strong>: This option displays a modal window to assign a picker to the order. To assign the picker, you have to click the dropdown and select the picker you want.
                                    <img className="lightbox" src="/img/asignarusuariopickingandpacking.png" /></p>
                                </li>
                            </ul>
                            <h2 id="order-status">Order status</h2>
                            <p><em>Below you can see the possible statuses for an order:</em></p>
                            <ul>
                                <li><p><strong>Pending</strong>: orders that have not been processed in fulfillment and are ready to be managed.
                                    <img className="lightbox" src="/img/estadoordenes/pendiente.png" /></p>
                                </li>
                                <li><p><strong>Ready for picking</strong>: orders that have been received and are assigned to a picker.
                                    <img className="lightbox" src="/img/estadoordenes/poralistar.png" /></p>
                                </li>
                                <li><p><strong>Ready for picking</strong>: orders that have been received and are assigned to a picker.
                                    <img className="lightbox" src="/img/estadoordenes/listoparaempacar.png" /></p>
                                </li>
                                <li><p><strong>Packing</strong>: every item in the order is being packed in bags or packages designated by the store.
                                    <img className="lightbox" src="/img/estadoordenes/empacando.png" /></p>
                                </li>
                                <li><p><strong>Ready for invoicing</strong>: all order items have been packed and are ready for invoicing. The packing process is completed.
                                    <img className="lightbox" src="/img/estadoordenes/listoparafacturar.png" /></p>
                                </li>
                                <li><p><strong>Invoiced</strong>: the order has been invoiced and is ready for collection and delivery to the client.
                                    <img className="lightbox" src="/img/estadoordenes/facturado.png" /></p>
                                </li>
                                <li><p><strong>Ready for shipping</strong>: every defined package is assigned to the established carrier or logistics operator to be delivered to the customer.
                                    <img className="lightbox" src="/img/estadoordenes/listoparadespacho.png" /></p>
                                </li>
                            </ul>
                            <h2 id="assign-a-picker">Assign a picker</h2>
                            <p><em>When starting the enlistment process, a modal is displayed for enlistee assignment, once an enlistee is selected and confirmed, the enlistment process can be started.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop.png" /></p>
                            <h2 id="-see-more-dropdown-of-the-order">&quot;See more&quot; dropdown of the order</h2>
                            <p><em>This is a dropdown located at the top right of the order and offers 3 functionalities: Print order, Print voucher and Add item.</em></p>
                            <p><img className="lightbox" src="/img/2.png" /></p>
                            <h2 id="print-command">Print command</h2>
                            <p><em>The order form is an invoice oriented to the enlister, with relevant information of the order and the items of the same, it can be useful to complement the enlistment process and can be printed by clicking on the &quot;see more&quot; dropdown of the order, and selecting the option &quot;Print order form&quot;, this will display a new tab with the order.</em></p>
                            <p><img className="lightbox" src="/img/comanda.png" /></p>
                            <h2 id="print-voucher">Print voucher</h2>
                            <p><em>The voucher is a customer oriented invoice, with general information of the order and its costs, it has a space for the customer to sign, it can be printed by clicking on the <strong>see more</strong> dropdown of the order, and selecting the option &quot;Print voucher&quot;, this will display a new tab with the voucher.</em></p>
                            <p><img className="lightbox" src="/img/voucher.png" /></p>
                            <h2 id="add-product-to-the-order">Add product to the order</h2>
                            <p><em>To add a product to the order, we must click on the <strong>see more</strong> dropdown of the order, and select the option &quot;Add item&quot;, this will display a modal in which we must search for the product to add, select it and add a defined quantity to the order and confirm to finish.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/1.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/2.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/3.png" /></p>
                            <h2 id="create-a-product">Create a product</h2>
                            <p><em>To create a product you must click on the &quot;+&quot; button in the <strong>&quot;Add product to order &quot;</strong> modal, this displays a new modal where you must fill in the corresponding product data and finally confirm to add the product created.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/4.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/5.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/6.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/7.png" /></p>
                            <h2 id="product-see-more-dropdown">Product &quot;see more&quot; dropdown</h2>
                            <p><em>The &quot;see more&quot; drop-down menu of the product displays the following functionalities: suggestions, search, change price and delete item.</em></p>
                            <p><em>suggestions&quot; and &quot;search&quot; help us to replace products, with the difference that &quot;suggestions&quot; offers us change recommendations &quot;these recommendations depend on the internal relationship of the stores&#39; inventory&quot;.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/8.png" /></p>
                            <h2 id="replace-product">Replace product</h2>
                            <p><em>To replace a product we must deploy the <strong>see more</strong> dropdown of the order**, and select the &quot;search&quot; option, this will display a modal where we must search for the target product to change, select it and confirm the change by defining the reasons for the replacement &quot;the product will be automatically ready, while the original product will be rejected for the replacement reason&quot;.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/9.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/10.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/11.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/12.png" /></p>
                            <h2 id="change-product-price">Change product price</h2>
                            <p><em>To change the price of a product, we must deploy the <strong>see more</strong> dropdown of the order**, and select the option &quot;change price&quot;, this will deploy a new modal where we must establish the new price and the reasons for the change, finally we only have to confirm the change.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/13.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/14.png" /></p>
                            <h2 id="reject-product">Reject product</h2>
                            <p><em>To reject a product &quot;remove the product from the order&quot;, we must deploy the <strong>see more</strong> dropdown of the order**, and select the option &quot;remove item&quot;, define the reasons for rejection and confirm this process.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/15.png" /></p>
                            <h2 id="prepare-product">Prepare product</h2>
                            <p><em>In order to enlist a product you must define the quantity of units picked, once these units are equal or higher than the target quantity, a blue button will appear on the right side of the order, click on it and confirm the enlistment to set the product as &quot;ready&quot;.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/16.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/17.png" /></p>
                            <h2 id="packing">Packing</h2>
                            <p><em>Once the enlistment process is finished, click on the &quot;pack&quot; button located at the bottom of the order status, specifically in the upper right part of the window.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/18.png" /></p>
                            <p><em>Once this is done, the packaging window will be established, in which we must add the necessary packages with the add package button.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/19.png" /></p>
                            <p><em>For each package we can add one or all products, through the &quot;see more&quot; drop-down options of the package.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/20.png" /></p>
                            <p><em>Once all the products are packed we must close the package through the &quot;close packages&quot; button, this last one will close the packages and will not allow to make changes, add or delete.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/21.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/22.png" /></p>
                            <h2 id="invoice-order">Invoice order</h2>
                            <p><em>Once the orders were packed, they must be invoiced, for this we must click on the button &quot;to invoice&quot;, this last one displays a modal where we define the values of the invoice, we save the invoice and that&#39;s it.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/23.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/24.png" /></p>
                            <h2 id="add-delivery-service">Add delivery service</h2>
                            <p><em>Once the order is invoiced we can add a transport service for it, for this we must click on the button &quot;add service&quot;, this last one will add a card where we must establish the dates of pick up and shipment, as well as the type of transport service we are going to assign and the packages that will take the same one, once all this is done we only must confirm shipment to finish.</em></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/25.png" /></p>
                            <p><img className="lightbox" src="/img/pickingdesktop/26.png" /></p>

                        </div>
                    }

                </div>
            </div>
        </Fragment>
    )
}

export default PickingPacking;
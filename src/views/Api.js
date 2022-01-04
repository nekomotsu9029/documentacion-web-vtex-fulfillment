import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const About = ({ language, lightBox }) => {
   const keyLeft = `{`;
   const keyRight = `}`;
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
                            <ul className="sidebar-links">
    <li>
       <a href="#" aria-current="page" className="active sidebar-link">AUTHENTICATION METHODS</a>
       <ul className="sidebar-sub-headers">
          <li className="sidebar-sub-header"><a href="#auth-methods-cognito-user-pools" className="sidebar-link">Auth methods Cognito user pools</a></li>
          <li className="sidebar-sub-header"><a href="#auth-methods-custom-auth" className="sidebar-link">Auth methods Custom auth</a></li>
          <li className="sidebar-sub-header"><a href="#auth-methods-api-key-custom-auth" className="sidebar-link">Auth methods Api key custom auth</a></li>
          <li className="sidebar-sub-header"><a href="#auth-post-token" className="sidebar-link">Auth Post /token</a></li>
          <li className="sidebar-sub-header"><a href="#auth-path-token" className="sidebar-link">Auth Path /token</a></li>
          <li className="sidebar-sub-header"><a href="#auth-api-key-post-api-key" className="sidebar-link">Auth api key Post /api-key</a></li>
          <li className="sidebar-sub-header"><a href="#auth-api-key-post-token" className="sidebar-link">Auth api key Post /token</a></li>
          <li className="sidebar-sub-header"><a href="#picking-packing-get-packing-tracking-orderid" className="sidebar-link">Picking &amp; packing Get /packing-tracking/{keyLeft}orderId{keyRight}</a></li>
          <li className="sidebar-sub-header"><a href="#users-get-groups" className="sidebar-link">Users Get /groups</a></li>
          <li className="sidebar-sub-header"><a href="#users-post-users" className="sidebar-link">Users Post /users</a></li>
          <li className="sidebar-sub-header"><a href="#users-put-users-username" className="sidebar-link">Users Put /users/{keyLeft}username{keyRight}</a></li>
          <li className="sidebar-sub-header"><a href="#users-delete-users-username" className="sidebar-link">Users Delete /users/{keyLeft}username{keyRight}</a></li>
          <li className="sidebar-sub-header"><a href="#users-get-users" className="sidebar-link">Users Get /users</a></li>
          <li className="sidebar-sub-header"><a href="#users-get-users-username" className="sidebar-link">Users Get /users/{keyLeft}username{keyRight}</a></li>
          <li className="sidebar-sub-header"><a href="#users-get-private-users-username" className="sidebar-link">Users Get /private/users/{keyLeft}username{keyRight}</a></li>
          <li className="sidebar-sub-header"><a href="#users-put-private-users-username" className="sidebar-link">Users Put /private/users/{keyLeft}username{keyRight}</a></li>
          <li className="sidebar-sub-header"><a href="#users-get-users-group-username" className="sidebar-link">Users Get /users/group/{keyLeft}username{keyRight}</a></li>
          <li className="sidebar-sub-header"><a href="#users-patch-users-confirm-sign-up" className="sidebar-link">Users Patch /users/confirm-sign-up</a></li>
          <li className="sidebar-sub-header"><a href="#users-post-users-resend-confirmation-code" className="sidebar-link">Users Post /users/resend-confirmation-code</a></li>
          <li className="sidebar-sub-header"><a href="#users-post-auth" className="sidebar-link">Users Post /auth</a></li>
          <li className="sidebar-sub-header"><a href="#reports-get-export-orders-csv" className="sidebar-link">Reports Get /export-orders-csv</a></li>
          <li className="sidebar-sub-header"><a href="#labels-post-label-comanda-package-voucher" className="sidebar-link">Labels Post /label (comanda, package, voucher)</a></li>
          <li className="sidebar-sub-header"><a href="#labels-get-preview-label" className="sidebar-link">Labels Get /preview-label</a></li>
          <li className="sidebar-sub-header"><a href="#labels-post-label-delivery" className="sidebar-link">Labels Post /label (delivery)</a></li>
          <li className="sidebar-sub-header"><a href="#lastmile-post-service" className="sidebar-link">Lastmile Post /service</a></li>
          <li className="sidebar-sub-header"><a href="#lastmile-post-service-hook" className="sidebar-link">Lastmile Post /service-hook</a></li>
          <li className="sidebar-sub-header"><a href="#mensajeros-urbanos-post-delivery" className="sidebar-link">Mensajeros urbanos Post /delivery</a></li>
          <li className="sidebar-sub-header"><a href="#mensajeros-urbanos-post-label" className="sidebar-link">Mensajeros urbanos Post /label</a></li>
          <li className="sidebar-sub-header"><a href="#mensajeros-urbanos-post-service-hook" className="sidebar-link">Mensajeros urbanos Post /service-hook</a></li>
       </ul>
    </li>
 </ul>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>

                    <div className="col-lg-6 p-3">
                           <h1 id="api">AUTHENTICATION METHODS</h1>
<h2 id="auth-methods-cognito-user-pools">Auth methods Cognito user pools</h2>
<pre><code className="lang-js"><span className="hljs-comment">// Headers</span>
{keyLeft}
  <span className="hljs-string">"Authorization"</span>: <span className="hljs-string">"id_token"</span>
{keyRight}
</code></pre>
<h2 id="auth-methods-custom-auth">Auth methods Custom auth</h2>
<p><strong>Development</strong></p>
<p>_API<em>KEY = beb44263-ebfc-487c-bb08-7f2d65018d98</em></p>
<p><strong>Production</strong></p>
<p>_API<em>KEY = 282cf046-2662-42b7-8da2-cb9c1a124609</em></p>
<p><strong>Steps:</strong></p>
<ol>
   <li>To get the token of authentication, you must send the apiKey in base64 in the body, this service (/token) return the JWT for client.</li>
</ol>
<pre><code className="lang-js"><span className="hljs-comment">// body</span>
{keyLeft}
    <span className="hljs-string">"apiKey"</span>: <span className="hljs-string">"api_key_in_base64"</span>
{keyRight}
</code></pre>
<ol>
   <li>To the services with authentication (CUSTOM_AUTH), send in the headers to request Authorization with the JWT.</li>
</ol>
<pre><code className="lang-js"><span className="hljs-comment">// Headers</span>
{keyLeft}
  <span className="hljs-string">"Authorization"</span>: <span className="hljs-string">"JWT"</span>
{keyRight}
</code></pre>
<ol>
   <li>For refresh token, execute  this service (/token).</li>
</ol>
<h2 id="auth-methods-api-key-custom-auth">Auth methods Api key custom auth</h2>
<p><strong>Steps:</strong></p>
<ol>
   <li>
      <p>Create an API_KEY custom with a username, this service (/create-key) creates the key.</p>
   </li>
   <li>
      <p>Create token of authentication, sending the API_KEY generated in the step 1, this service (/token) create the token</p>
   </li>
   <li>
      <p>To the services with authentication (API_KEY_CUSTOM_AUTH), send in the headers the request Authorization with the JWT generated in the step 2.</p>
   </li>
</ol>
<pre><code className="lang-js"><span className="hljs-comment">// Headers</span>
{keyLeft}
  <span className="hljs-string">"Authorization"</span>: <span className="hljs-string">"JWT"</span>
{keyRight}
</code></pre>
<h1 id="auth">AUTH</h1>
<p><strong>Development</strong></p>
<p><em><a href="https://xdaykews3f.execute-api.us-east-1.amazonaws.com/dev">https://xdaykews3f.execute-api.us-east-1.amazonaws.com/dev</a></em></p>
<p><strong>Production</strong></p>
<p><em><a href="https://n5vvv2349b.execute-api.us-east-1.amazonaws.com/prod">https://n5vvv2349b.execute-api.us-east-1.amazonaws.com/prod</a></em></p>
<h2 id="auth-post-token">Auth Post /token</h2>
<p>Create token of authentication</p>
<p><em>Authentication: None</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"apiKey"</span>: <span className="hljs-string">"string"</span>
{keyRight}
</code></pre>
<p><strong>Response with status code 200</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"data"</span>: <span className="hljs-string">"string"</span>
{keyRight}
</code></pre>
<p><strong>Codes errors</strong></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th >Status code</th>
         <th >Code</th>
         <th >Message</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td >401</td>
         <td >1000</td>
         <td >Api key invalid</td>
      </tr>
      <tr>
         <td >500</td>
         <td >1000</td>
         <td >Error try to create token</td>
      </tr>
   </tbody>
</table>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><strong>Body</strong></p>
<p><em>The apiKey must be encoded in base64</em></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"apiKey"</span>: <span className="hljs-string">"YmViNDQyNjMtZWJmYy00ODdjLWJiMDgtN2YyZDY1MDE4ZDk4"</span>
{keyRight}
</code></pre>
<p><strong>Response</strong></p>
<p><em>The service return the JWT</em></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: <span className="hljs-string">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlLZXkiOiJiZWI0NDI2My1lYmZjLTQ4N2MtYmIwOC03ZjJkNjUwMThkOTgiLCJpYXQiOjE2MzAzMzYyMDZ9.FdBkgfF1GlmIPml_5E_8S8O-MWKylTjXRYd4irvqAOk"</span>
{keyRight}
</code></pre>
<p>:::</p>
<h2 id="auth-path-token">Auth Path /token</h2>
<p>Service for refresh token</p>
<p><em>Authentication: None</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"token"</span>: <span className="hljs-string">"string"</span>
{keyRight}
</code></pre>
<p><strong>Response with status code 200</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"data"</span>: <span className="hljs-string">"string"</span>
{keyRight}
</code></pre>
<p><strong>Codes errors</strong></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th>Status code</th>
         <th >Code</th>
         <th>Message</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>401</td>
         <td >1000</td>
         <td>Access token is not set</td>
      </tr>
      <tr>
         <td>401</td>
         <td >1000</td>
         <td>Token invalid</td>
      </tr>
      <tr>
         <td>401</td>
         <td >1000</td>
         <td>Api key invalid</td>
      </tr>
      <tr>
         <td>500</td>
         <td >1000</td>
         <td>Error try to refresh token</td>
      </tr>
   </tbody>
</table>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><strong>Body</strong></p>
<p><em>Send token old</em></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"token"</span>: <span className="hljs-string">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlLZXkiOiJiZWI0NDI2My1lYmZjLTQ4N2MtYmIwOC03ZjJkNjUwMThkOTgiLCJpYXQiOjE2MzAzMzYyMDZ9.FdBkgfF1GlmIPml_5E_8S8O-MWKylTjXRYd4irvqAOk"</span>
{keyRight}
</code></pre>
<p><strong>Response</strong></p>
<p><em>The service return the new JWT</em></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: <span className="hljs-string">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlLZXkiOiJiZWI0NDI2My1lYmZjLTQ4N2MtYmIwOC03ZjJkNjUwMThkOTgiLCJpYXQiOjE2MzAzMzYyMDZ9.FdBkgfF1GlmIPml_5E_8S8O-MWKylTjXRYd4irvqAOk"</span>
{keyRight}
</code></pre>
<p>:::</p>
<h1 id="auth-with-api-key">AUTH WITH API KEY</h1>
<p><strong>Development</strong></p>
<p><em><a href="https://sqbcgzrn17.execute-api.us-east-1.amazonaws.com/dev">https://sqbcgzrn17.execute-api.us-east-1.amazonaws.com/dev</a></em></p>
<p><strong>Production</strong></p>
<p><em><a href="https://7hfj0xjmzd.execute-api.us-east-1.amazonaws.com/prod">https://7hfj0xjmzd.execute-api.us-east-1.amazonaws.com/prod</a></em></p>
<h2 id="auth-api-key-post-api-key">Auth api key Post /api-key</h2>
<p>Create api key custom based on username</p>
<p>_Authentication: COGNITO_USER<em>POOLS</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"username"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"hostname"</span>: <span className="hljs-string">"string"</span>
{keyRight}
</code></pre>
<p><strong>Response with status code 200</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: <span className="hljs-string">"9e02b07a2bb752ee536f1376a4f92ac0:f1d89118478ffb426fd228d3fe991a70808819c5eb7dc9e3cab1c9e6f35a883d99ff069c5be6d2b7356f1f8386e034fdb7646e47ae794e2e13706ff79b82aa74"</span>
{keyRight}
</code></pre>
<p><strong>Codes errors</strong></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th>Status code</th>
         <th >Code</th>
         <th>Message</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>500</td>
         <td >1000</td>
         <td>Internal server error *</td>
      </tr>
      <tr>
         <td>404</td>
         <td >1001</td>
         <td>Resource not found</td>
      </tr>
      <tr>
         <td>400</td>
         <td >1002</td>
         <td>Body invalid</td>
      </tr>
      <tr>
         <td>400</td>
         <td >1006</td>
         <td>* (User errors codes 👇)</td>
      </tr>
   </tbody>
</table>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"username"</span>: <span className="hljs-string">"example.username"</span>,
    <span className="hljs-attr">"hostname"</span>: <span className="hljs-string">"newbusiness01"</span>
{keyRight}
</code></pre>
<p><strong>Response</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: <span className="hljs-string">"9e02b07a2bb7432ee566f1376a4f92ac0:f1d89328178ffb426fd228d3fe991a70808819c5eb7dc9e3cab1c9e6f35a883d99ff069c5be6d2b7356f1f8386e034fdb7646e47ae794e2e13706ff79b82aa74"</span>
{keyRight}
</code></pre>
<p>:::</p>
<h2 id="auth-api-key-post-token">Auth api key Post /token</h2>
<p>Create JWT</p>
<p><em>Authentication: None</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"apiKey"</span>: <span className="hljs-string">"string"</span>
{keyRight}
</code></pre>
<p><strong>Response with status code 200</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"data"</span>: <span className="hljs-string">"string"</span> // JWT
{keyRight}
</code></pre>
<p><strong>Codes errors</strong></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th>Status code</th>
         <th >Code</th>
         <th>Message</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>500</td>
         <td >1000</td>
         <td>Internal server error *</td>
      </tr>
      <tr>
         <td>404</td>
         <td >1001</td>
         <td>Resource not found</td>
      </tr>
      <tr>
         <td>400</td>
         <td >1002</td>
         <td>Body invalid</td>
      </tr>
      <tr>
         <td>400</td>
         <td >1004</td>
         <td>Text invalid for decrypt</td>
      </tr>
      <tr>
         <td>400</td>
         <td >1005</td>
         <td>Api key not is active</td>
      </tr>
      <tr>
         <td>400</td>
         <td >1006</td>
         <td>* (User errors codes 👇)</td>
      </tr>
   </tbody>
</table>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"apiKey"</span>: <span className="hljs-string">"1db4ca2b02245578f73fb31f7962f8f6:113bb15dbc2773467876362d0bb3bd5099fb1ff8288d23fe656d901cb7bdcbb28f5d52d7e909b0d2b029b9fc502f3f0f77d6dc2ad83eb1929ba5726ab46b5b78"</span>
{keyRight}
</code></pre>
<p><strong>Response</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: <span className="hljs-string">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ2.eyJob4N0bmFtZSI6Im5ld2J1c2luZXNzMDEiLCJpYXQiOjE2MzM3MjE1NzksImV4cCI6MTYzMzcyMjQ3OX0.7QRZpElg1HYgyJpE6QTNgE2IN3vXbzIfulBS0Bvyzds"</span>
{keyRight}
</code></pre>
<p>:::</p>
<h1 id="picking-and-tracking">PICKING AND TRACKING</h1>
<p><strong>Development</strong></p>
<p><em><a href="https://su4nrryt64.execute-api.us-east-1.amazonaws.com/dev">https://su4nrryt64.execute-api.us-east-1.amazonaws.com/dev</a></em></p>
<p><strong>Production</strong></p>
<p><em><a href="https://m74ejeyusj.execute-api.us-east-1.amazonaws.com/prod">https://m74ejeyusj.execute-api.us-east-1.amazonaws.com/prod</a></em></p>
<h2 id="picking-packing-get-packing-tracking-orderid-">Picking &amp; packing Get /packing-tracking/{keyLeft}orderId{keyRight}</h2>
<p>Get overview of packing and tracking</p>
<p>_Authentication: API_KEY_CUSTOM<em>AUTH</em></p>
<p><strong>Response with status code 200</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-string">"message"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"data"</span>: {keyLeft}
        <span className="hljs-string">"hostname"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-string">"orderId"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-string">"fulfillmentStatus"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-string">"shipping"</span>?: {keyLeft}
            <span className="hljs-string">"trackingId"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-string">"trackingStatus"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-string">"services"</span>?: [
                {keyLeft}
                    <span className="hljs-string">"serviceId"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-string">"agent"</span>?: <span className="hljs-string">"string"</span>,
                    <span className="hljs-string">"vehicle"</span>?: <span className="hljs-string">"string"</span>,
                    <span className="hljs-string">"courier"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-string">"trackingUrl"</span>?: <span className="hljs-string">"string"</span>,
                    <span className="hljs-string">"serviceStatus"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-string">"evidences"</span>?: <span className="hljs-string">"string"</span>,
                    <span className="hljs-string">"createdAt"</span>: <span className="hljs-string">"string"</span>
                {keyRight}
            ]
        {keyRight}
    {keyRight}
{keyRight}
</code></pre>
<p><strong>Codes errors</strong></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th>Status code</th>
         <th >Code</th>
         <th>Message</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>401</td>
         <td >1000</td>
         <td>* Internal server</td>
      </tr>
      <tr>
         <td>404</td>
         <td >1001</td>
         <td>Resource not found</td>
      </tr>
      <tr>
         <td>404</td>
         <td >1002</td>
         <td>OrderId not found / Order not found by {keyLeft}orderId{keyRight}</td>
      </tr>
      <tr>
         <td>500</td>
         <td >1003</td>
         <td>* Error in Elasticsearch</td>
      </tr>
   </tbody>
</table>
<p><strong>Example errors</strong></p>
<p>::: details</p>
<pre><code className="lang-js"><span className="hljs-comment">/* Status code */</span>
<span className="hljs-number">404</span>
<span className="hljs-comment">/* body */</span>
{keyLeft}
  <span className="hljs-string">"code"</span>: <span className="hljs-number">1002</span>,
  <span className="hljs-string">"message"</span>: <span className="hljs-string">"OrderId not found"</span>,
  <span className="hljs-string">"data"</span>: <span className="hljs-literal">null</span>
{keyRight}
</code></pre>
<p>:::</p>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><strong>Url - GET</strong></p>
<p><em><a href="https://su4nrryt64.execute-api.us-east-1.amazonaws.com/dev/packing-tracking/SLR-1166741153215-01">https://su4nrryt64.execute-api.us-east-1.amazonaws.com/dev/packing-tracking/SLR-1166741153215-01</a></em></p>
<p><strong>Response</strong></p>
<p><em>The service return the JWT</em></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: {keyLeft}
        <span className="hljs-attr">"hostname"</span>: <span className="hljs-string">"qaolimpicaswl1"</span>,
        <span className="hljs-attr">"orderId"</span>: <span className="hljs-string">"SLR-1166741153215-01"</span>,
        <span className="hljs-attr">"fulfillmentStatus"</span>: <span className="hljs-string">"READY_FOR_INVOICING"</span>,
        <span className="hljs-attr">"shipping"</span>: {keyLeft}
            <span className="hljs-attr">"trackingId"</span>: <span className="hljs-string">"a3869461-69d8-4337-a677-8e5e39186539"</span>,
            <span className="hljs-attr">"trackingStatus"</span>: <span className="hljs-string">"DELIVERED"</span>,
            <span className="hljs-attr">"services"</span>: [
                {keyLeft}
                    <span className="hljs-attr">"serviceId"</span>: <span className="hljs-string">"313910853"</span>,
                    <span className="hljs-attr">"agent"</span>: <span className="hljs-string">""</span>,
                    <span className="hljs-attr">"vehicle"</span>: <span className="hljs-string">""</span>,
                    <span className="hljs-attr">"courier"</span>: <span className="hljs-string">"LAST_MILE"</span>,
                    <span className="hljs-attr">"trackingUrl"</span>: <span className="hljs-string">"https://jngl.ml/D00b1Gcce"</span>,
                    <span className="hljs-attr">"serviceStatus"</span>: <span className="hljs-string">"PENDING"</span>,
                    <span className="hljs-attr">"evidences"</span>: <span className="hljs-string">""</span>,
                    <span className="hljs-attr">"createdAt"</span>: <span className="hljs-string">"2021-10-06T19:13:25Z"</span>
                {keyRight}
            ]
        {keyRight}
    {keyRight}
{keyRight}
</code></pre>
<p>:::</p>
<h1 id="users">USERS</h1>
<p><em>Endpoints for managing the users</em></p>
<p><strong>Development</strong></p>
<p><em><a href="https://efvodxce7i.execute-api.us-east-1.amazonaws.com/dev">https://efvodxce7i.execute-api.us-east-1.amazonaws.com/dev</a></em></p>
<p><strong>Production</strong></p>
<p><em><a href="https://72wxfky8rb.execute-api.us-east-1.amazonaws.com/prod">https://72wxfky8rb.execute-api.us-east-1.amazonaws.com/prod</a></em></p>
<h2 id="users-get-groups">Users Get /groups</h2>
<p>Get list of the groups</p>
<p>_Authentication: COGNITO_USER<em>POOLS</em></p>
<p><strong>Response</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"data"</span>: [
        {keyLeft}
            <span className="hljs-attr">"GroupName"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"UserPoolId"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"Description"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"Precedence"</span>: <span className="hljs-string">"number"</span>,
            <span className="hljs-attr">"LastModifiedDate"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"CreationDate"</span>: <span className="hljs-string">"string"</span>
        {keyRight}
    ]
{keyRight}
</code></pre>
<p><strong>Codes errors</strong></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th>Status code</th>
         <th >Code</th>
         <th>Message</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>200</td>
         <td >1000</td>
         <td>Error to getGroups</td>
      </tr>
   </tbody>
</table>
<p><strong>Example</strong></p>
<p>::: details</p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: [
        {keyLeft}
            <span className="hljs-attr">"GroupName"</span>: <span className="hljs-string">"Admin"</span>,
            <span className="hljs-attr">"UserPoolId"</span>: <span className="hljs-string">"us-east-1_4SGSexzDG"</span>,
            <span className="hljs-attr">"Description"</span>: <span className="hljs-string">"Admin"</span>,
            <span className="hljs-attr">"Precedence"</span>: <span className="hljs-number">1</span>,
            <span className="hljs-attr">"LastModifiedDate"</span>: <span className="hljs-string">"2021-07-22T15:08:46.370Z"</span>,
            <span className="hljs-attr">"CreationDate"</span>: <span className="hljs-string">"2021-07-22T15:08:46.370Z"</span>
        {keyRight}
    ]
{keyRight}
</code></pre>
<p>:::</p>
<h2 id="users-post-users">Users Post /users</h2>
<p>Create user</p>
<p>_Authentication: CUSTOM<em>AUTH</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-string">"email"</span>:<span className="hljs-string">"string"</span>,
    <span className="hljs-string">"username"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"password"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"role"</span>:[<span className="hljs-string">"string"</span>],
    <span className="hljs-string">"schedules"</span>?: {keyLeft}<span className="hljs-string">"in"</span>: <span className="hljs-string">"string"</span>, <span className="hljs-string">"out"</span>: <span className="hljs-string">"string"</span>{keyRight},
    <span className="hljs-string">"stores"</span>?:[<span className="hljs-string">"string"</span>],
    <span className="hljs-string">"vtexId"</span>?: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"pushToken"</span>?: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"apiKey"</span>?: <span className="hljs-string">"number"</span>, <span className="hljs-comment">// 1 | 0,</span>
    <span className="hljs-string">"apiKeyLastModified"</span>?: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"name"</span>?: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"language"</span>?: <span className="hljs-string">"string"</span>
{keyRight}
</code></pre>
<p><strong>Response with status code 200</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"data"</span>: <span className="hljs-string">"string"</span>
{keyRight}
</code></pre>
<p><strong>Codes errors</strong></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th>Status code</th>
         <th >Code</th>
         <th>Message</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>200</td>
         <td >1000</td>
         <td>Error: Cognito create user error</td>
      </tr>
      <tr>
         <td>200</td>
         <td >1001</td>
         <td>User already exists</td>
      </tr>
   </tbody>
</table>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"email"</span>:<span className="hljs-string">"emailexample@gmail.com"</span>,
    <span className="hljs-attr">"username"</span>: <span className="hljs-string">"emailexample"</span>,
    <span className="hljs-attr">"password"</span>: <span className="hljs-string">"Prueba01"</span>,
    <span className="hljs-attr">"role"</span>:[<span className="hljs-string">"Admin"</span>],
    <span className="hljs-attr">"schedules"</span>: {keyLeft}<span className="hljs-attr">"in"</span>: <span className="hljs-string">"l-v 7-6"</span>, <span className="hljs-attr">"out"</span>: <span className="hljs-string">"s-s"</span>{keyRight},
    <span className="hljs-attr">"stores"</span>:[<span className="hljs-string">"qaolimpicaswl1"</span>],
    <span className="hljs-attr">"vtexId"</span>: <span className="hljs-string">"99adda34-4497-wrd2-530d-1345ae94a022"</span>,
    <span className="hljs-attr">"name"</span>: <span className="hljs-string">"Carlos Daniel Perez"</span>,
    <span className="hljs-attr">"language"</span>: <span className="hljs-string">"es"</span>
{keyRight}
</code></pre>
<p><strong>Response</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: <span className="hljs-string">"User added - emailexample@gmail.com to emailexample"</span>
{keyRight}
</code></pre>
<p>:::</p>
<h2 id="users-put-users-username-">Users Put /users/{keyLeft}username{keyRight}</h2>
<p>Update info of user for username</p>
<p>_Authentication: COGNITO_USER<em>POOLS</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-string">"email"</span>?:<span className="hljs-string">"string"</span>,
    <span className="hljs-string">"password"</span>?: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"role"</span>?:[<span className="hljs-string">"string"</span>],
    <span className="hljs-string">"schedules"</span>?: {keyLeft}<span className="hljs-string">"in"</span>: <span className="hljs-string">"string"</span>, <span className="hljs-string">"out"</span>: string{keyRight},
    <span className="hljs-string">"stores"</span>?:[<span className="hljs-string">"string"</span>],
    <span className="hljs-string">"vtexId"</span>?: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"pushToken"</span>?: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"apiKey"</span>?: <span className="hljs-string">"number"</span>, <span className="hljs-comment">// 1 | 0,</span>
    <span className="hljs-string">"apiKeyLastModified"</span>?: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"name"</span>?: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"language"</span>?: <span className="hljs-string">"string"</span>
{keyRight}
</code></pre>
<p><strong>Response with status code 200</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"data"</span>: <span className="hljs-string">"string"</span>
{keyRight}
</code></pre>
<p><strong>Codes errors</strong></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th>Status code</th>
         <th >Code</th>
         <th>Message</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>200</td>
         <td >1000</td>
         <td>Error: Cognito update user</td>
      </tr>
      <tr>
         <td>200</td>
         <td >1000</td>
         <td>Internal error server</td>
      </tr>
      <tr>
         <td>200</td>
         <td >1000</td>
         <td>Query params &#39;{keyLeft}username{keyRight}&#39; is required</td>
      </tr>
      <tr>
         <td>200</td>
         <td >1001</td>
         <td>Field ‘stores’ is invalid</td>
      </tr>
      <tr>
         <td>200</td>
         <td >400</td>
         <td>User does not exist</td>
      </tr>
      <tr>
         <td>200</td>
         <td >1003</td>
         <td>Resource not found</td>
      </tr>
   </tbody>
</table>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"email"</span>:<span className="hljs-string">"mailupdate@gmail.com"</span>,
    <span className="hljs-attr">"password"</span>: <span className="hljs-string">"Prueba01"</span>,
    <span className="hljs-attr">"role"</span>:[<span className="hljs-string">"Admin"</span>],
    <span className="hljs-attr">"schedules"</span>: {keyLeft}<span className="hljs-attr">"in"</span>: <span className="hljs-string">"l-v 7-6"</span>, <span className="hljs-attr">"out"</span>: <span className="hljs-string">"s-s"</span>{keyRight},
    <span className="hljs-attr">"stores"</span>:[<span className="hljs-string">"qaolimpicaswl1"</span>],
    <span className="hljs-attr">"vtexId"</span>: <span className="hljs-string">"99adda34-4497-wrd2-530d-1345ae94a022"</span>,
    <span className="hljs-attr">"pushToken"</span>: <span className="hljs-string">"pushTokenMobile"</span>,
    <span className="hljs-attr">"name"</span>: <span className="hljs-string">"Name Example Surname"</span>,
    <span className="hljs-attr">"language"</span>: <span className="hljs-string">"us"</span>
{keyRight}
</code></pre>
<p><strong>Response</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: <span className="hljs-string">"User updated emailexample"</span>
{keyRight}
</code></pre>
<p>:::</p>
<h2 id="users-delete-users-username-">Users Delete /users/{keyLeft}username{keyRight}</h2>
<p>Delete user</p>
<p>_Authentication: COGNITO_USER<em>POOLS</em></p>
<p><strong>Response with status code 200</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"data"</span>: <span className="hljs-string">"string"</span>
{keyRight}
</code></pre>
<p><strong>Codes errors</strong></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th >Status code</th>
         <th >Code</th>
         <th >Message</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td >200</td>
         <td >1000</td>
         <td >Error to deleteUser</td>
      </tr>
      <tr>
         <td >200</td>
         <td >400</td>
         <td >*</td>
      </tr>
   </tbody>
</table>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><strong>Response</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: <span className="hljs-string">"User removed {keyLeft}username{keyRight}"</span>
{keyRight}
</code></pre>
<p>:::</p>
<h2 id="users-get-users">Users Get /users</h2>
<p>Get all users by any filter</p>
<p>_Authentication: COGNITO_USER<em>POOLS</em></p>
<p><strong>Query params</strong></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th >Name</th>
         <th >Type</th>
         <th >Default value</th>
         <th >Required</th>
         <th >Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td >search</td>
         <td >string</td>
         <td ></td>
         <td >false</td>
         <td >Search by email, username or name</td>
      </tr>
      <tr>
         <td >roles</td>
         <td >string</td>
         <td ></td>
         <td >false</td>
         <td >Value separate for commas</td>
      </tr>
      <tr>
         <td >page</td>
         <td >number</td>
         <td >1</td>
         <td >false</td>
         <td ></td>
      </tr>
      <tr>
         <td >count</td>
         <td >number</td>
         <td >100</td>
         <td >false</td>
         <td ></td>
      </tr>
      <tr>
         <td >username</td>
         <td >string</td>
         <td ></td>
         <td >false</td>
         <td ></td>
      </tr>
      <tr>
         <td >email</td>
         <td >string</td>
         <td ></td>
         <td >false</td>
         <td ></td>
      </tr>
      <tr>
         <td >vtexId</td>
         <td >string</td>
         <td ></td>
         <td >false</td>
         <td ></td>
      </tr>
      <tr>
         <td >store</td>
         <td >string</td>
         <td ></td>
         <td >false</td>
         <td ></td>
      </tr>
      <tr>
         <td >name</td>
         <td >string</td>
         <td ></td>
         <td >false</td>
      </tr>
   </tbody>
</table>
<p><strong>Response with status code 200</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-string">"message"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"data"</span>: {keyLeft}
        <span className="hljs-string">"list"</span>: [
            {keyLeft}
                <span className="hljs-string">"username"</span>: <span className="hljs-string">"string"</span>,
                <span className="hljs-string">"schedules"</span>?: {keyLeft}
                    <span className="hljs-string">"in"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-string">"out"</span>: <span className="hljs-string">"string"</span>
                {keyRight},
                <span className="hljs-string">"stores"</span>?: [<span className="hljs-string">"string"</span>],
                <span className="hljs-string">"vtexId"</span>?: <span className="hljs-string">"string"</span>,
                <span className="hljs-string">"email"</span>: <span className="hljs-string">"string"</span>,
                <span className="hljs-string">"role"</span>?: [<span className="hljs-string">"string"</span>],
                <span className="hljs-string">"createDate"</span>: <span className="hljs-string">"string"</span>,
                <span className="hljs-string">"pushToken"</span>?: <span className="hljs-string">"string"</span>,
                <span className="hljs-string">"apiKey"</span>?: <span className="hljs-string">"number"</span>, <span className="hljs-comment">// 1 | 0,</span>
                <span className="hljs-string">"apiKeyLastModified"</span>?: <span className="hljs-string">"string"</span>,
                <span className="hljs-string">"name"</span>?: <span className="hljs-string">"string"</span>,
                <span className="hljs-string">"language"</span>?: <span className="hljs-string">"string"</span>
            {keyRight}
        ],
        <span className="hljs-string">"pagination"</span>: {keyLeft}
            <span className="hljs-string">"totalItems"</span>: <span className="hljs-string">"number"</span>,
            <span className="hljs-string">"totalPages"</span>: <span className="hljs-string">"number"</span>,
            <span className="hljs-string">"page"</span>: <span className="hljs-string">"number"</span>,
            <span className="hljs-string">"count"</span>: <span className="hljs-string">"number"</span>
        {keyRight}
    {keyRight}
{keyRight}
</code></pre>
<p><strong>Codes errors</strong></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th >Status code</th>
         <th >Code</th>
         <th >Message</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td >200</td>
         <td >1000</td>
         <td >Error: get all users</td>
      </tr>
   </tbody>
</table>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><em>Get all user where has rol of SuperAdmin or Admin and that store is equals newbusinessunits and the email or username is equals to mailexample</em></p>
<p><strong>Request</strong></p>
<p><em>GET - {keyLeft}hosts{keyRight}/users?count=10&amp;page=1&amp;roles=Admin,SuperAdmin&amp;store=newbusinessunits&amp;search=mailexample</em></p>
<p><strong>Response</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: {keyLeft}
        <span className="hljs-attr">"list"</span>: [
            {keyLeft}
                <span className="hljs-attr">"username"</span>: <span className="hljs-string">"mailexample"</span>,
                <span className="hljs-attr">"schedules"</span>: {keyLeft}
                    <span className="hljs-attr">"in"</span>: <span className="hljs-string">"l-v 8-6"</span>,
                    <span className="hljs-attr">"out"</span>: <span className="hljs-string">"s-s"</span>
                {keyRight},
                <span className="hljs-attr">"stores"</span>: [
                    <span className="hljs-string">"newbusinessunits"</span>
                ],
                <span className="hljs-attr">"vtexId"</span>: <span className="hljs-string">""</span>,
                <span className="hljs-attr">"email"</span>: <span className="hljs-string">"mailexample@gmail.com"</span>,
                <span className="hljs-attr">"role"</span>: [
                    <span className="hljs-string">"Picker"</span>
                ],
                <span className="hljs-attr">"createDate"</span>: <span className="hljs-string">"2021-07-29T19:46:20.845Z"</span>,
                <span className="hljs-attr">"pushToken"</span>: <span className="hljs-string">""</span>,
                <span className="hljs-attr">"apiKey"</span>: <span className="hljs-number">0</span>,
                <span className="hljs-attr">"apiKeyLastModified"</span>: <span className="hljs-string">""</span>,
                <span className="hljs-attr">"name"</span>: <span className="hljs-string">"Name Example Surname"</span>,
                <span className="hljs-attr">"language"</span>: <span className="hljs-string">"es"</span>
            {keyRight}
        ],
        <span className="hljs-attr">"pagination"</span>: {keyLeft}
            <span className="hljs-attr">"totalItems"</span>: <span className="hljs-number">40</span>,
            <span className="hljs-attr">"totalPages"</span>: <span className="hljs-number">1</span>,
            <span className="hljs-attr">"page"</span>: <span className="hljs-number">1</span>,
            <span className="hljs-attr">"count"</span>: <span className="hljs-number">90</span>
        {keyRight}
    {keyRight}
{keyRight}
</code></pre>
<p>:::</p>
<h2 id="users-get-users-username-">Users Get /users/{keyLeft}username{keyRight}</h2>
<p>Get user</p>
<p>_Authentication: COGNITO_USER<em>POOLS</em></p>
<p><strong>Response with status code 200</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-string">"message"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"data"</span>: {keyLeft}
        <span className="hljs-string">"schedules"</span>?: {keyLeft}
            <span className="hljs-string">"in"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-string">"out"</span>: <span className="hljs-string">"string"</span>
        {keyRight},
        <span className="hljs-string">"email"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-string">"role"</span>?: [<span className="hljs-string">"string"</span>],
        <span className="hljs-string">"stores"</span>?: [<span className="hljs-string">"strign"</span>],
        <span className="hljs-string">"vtexId"</span>?: <span className="hljs-string">"string"</span>,
        <span className="hljs-string">"username"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-string">"enabled"</span>: <span className="hljs-string">"boolean"</span>,
        <span className="hljs-string">"userStatus"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-string">"createDate"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-string">"pushToken"</span>?: <span className="hljs-string">"string"</span>,
        <span className="hljs-string">"apiKey"</span>?: <span className="hljs-string">"number"</span>, <span className="hljs-comment">// 1 | 0,</span>
        <span className="hljs-string">"apiKeyLastModified"</span>?: <span className="hljs-string">"string"</span>,
        <span className="hljs-string">"name"</span>?: <span className="hljs-string">"string"</span>
        <span className="hljs-string">"language"</span>?: <span className="hljs-string">"string"</span>
    {keyRight}
{keyRight}
</code></pre>
<p><strong>Codes errors</strong></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th >Status code</th>
         <th >Code</th>
         <th >Message</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td >200</td>
         <td >1000</td>
         <td >Error to getUser</td>
      </tr>
      <tr>
         <td >200</td>
         <td >400</td>
         <td >Username not found</td>
      </tr>
   </tbody>
</table>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><strong>Request</strong></p>
<p><em>GET - {keyLeft}hosts{keyRight}/users/exampleemail</em></p>
<p><strong>Response</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-string">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-string">"data"</span>: {keyLeft}
        <span className="hljs-string">"schedules"</span>: {keyLeft}
            <span className="hljs-string">"in"</span>: <span className="hljs-string">"l-v 7-6"</span>,
            <span className="hljs-string">"out"</span>: <span className="hljs-string">"s-s"</span>
        {keyRight},
        <span className="hljs-string">"email"</span>: <span className="hljs-string">"exampleemail@gmail.com"</span>,
        <span className="hljs-string">"role"</span>: [
            <span className="hljs-string">"Admin"</span>
        ],
        <span className="hljs-string">"stores"</span>: [
            <span className="hljs-string">"newbusinees02"</span>
        ],
        <span className="hljs-string">"vtexId"</span>: <span className="hljs-string">"empty-1232-123"</span>,
        <span className="hljs-string">"username"</span>: <span className="hljs-string">"exampleemail"</span>,
        <span className="hljs-string">"enabled"</span>: <span className="hljs-literal">true</span>,
        <span className="hljs-string">"userStatus"</span>: <span className="hljs-string">"CONFIRMED"</span>,
        <span className="hljs-string">"createDate"</span>: <span className="hljs-string">"2021-07-22T17:15:27.143Z"</span>,
        <span className="hljs-string">"pushToken"</span>: <span className="hljs-string">""</span>,
        <span className="hljs-string">"apiKey"</span>: <span className="hljs-number">0</span>,
        <span className="hljs-string">"apiKeyLastModified"</span>: <span className="hljs-string">""</span>,
        <span className="hljs-string">"name"</span>: <span className="hljs-string">""</span>,
        <span className="hljs-string">"language"</span>?: <span className="hljs-string">"es"</span>
    {keyRight}
{keyRight}
</code></pre>
<p>:::</p>
<h2 id="users-get-private-users-username-">Users Get /private/users/{keyLeft}username{keyRight}</h2>
<p><em>Authentication: None</em></p>
<p><strong>This endpoint is equals to GET - users/{keyLeft}username{keyRight}</strong></p>
<h2 id="users-put-private-users-username-">Users Put /private/users/{keyLeft}username{keyRight}</h2>
<p><em>Authentication: None</em></p>
<p><strong>This endpoint is equals to PUT - users/{keyLeft}username{keyRight}</strong></p>
<h2 id="users-get-users-group-username-">Users Get /users/group/{keyLeft}username{keyRight}</h2>
<p>Get all users by role</p>
<p>_Authentication: COGNITO_USER<em>POOLS</em></p>
<p><strong>Response with status code 200</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-string">"message"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"data"</span>: [{keyLeft}
        <span className="hljs-string">"schedules"</span>?: {keyLeft}
            <span className="hljs-string">"in"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-string">"out"</span>: <span className="hljs-string">"string"</span>
        {keyRight},
        <span className="hljs-string">"email"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-string">"role"</span>?: [<span className="hljs-string">"string"</span>],
        <span className="hljs-string">"stores"</span>?: [<span className="hljs-string">"string"</span>],
        <span className="hljs-string">"username"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-string">"enabled"</span>: <span className="hljs-string">"boolean"</span>,
        <span className="hljs-string">"userStatus"</span>: string,
        <span className="hljs-string">"pushToken"</span>?: <span className="hljs-string">"string"</span>,
        <span className="hljs-string">"apiKey"</span>?: <span className="hljs-string">"number"</span>, <span className="hljs-comment">// 1 | 0,</span>
        <span className="hljs-string">"apiKeyLastModified"</span>?: <span className="hljs-string">"string"</span>,
        <span className="hljs-string">"name"</span>?: <span className="hljs-string">"string"</span>,
        <span className="hljs-string">"language"</span>?: <span className="hljs-string">"string"</span>
    {keyRight}]
{keyRight}
</code></pre>
<p><strong>Codes errors</strong></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th >Status code</th>
         <th >Code</th>
         <th >Message</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td >200</td>
         <td >1000</td>
         <td >Error to getUsersForGroup</td>
      </tr>
      <tr>
         <td >200</td>
         <td >400</td>
         <td >groupId not found</td>
      </tr>
   </tbody>
</table>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><strong>Request</strong></p>
<p><em>GET - {keyLeft}hosts{keyRight}/users/group/Admin</em></p>
<p><strong>Response</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: [{keyLeft}
        <span className="hljs-attr">"schedules"</span>: {keyLeft}
            <span className="hljs-attr">"in"</span>: <span className="hljs-string">"l-v 8-3"</span>,
            <span className="hljs-attr">"out"</span>: <span className="hljs-string">"s-s"</span>
        {keyRight},
        <span className="hljs-attr">"email"</span>: <span className="hljs-string">"exampleemail@gmail.com"</span>,
        <span className="hljs-attr">"role"</span>: [
            <span className="hljs-string">"SuperAdmin"</span>
        ],
        <span className="hljs-attr">"stores"</span>: [
            <span className="hljs-string">"newbusinees01"</span>
        ],
        <span className="hljs-attr">"username"</span>: <span className="hljs-string">"b9e7cd7e-d59b-496e-ab1d-4a077641d29d"</span>,
        <span className="hljs-attr">"enabled"</span>: <span className="hljs-literal">true</span>,
        <span className="hljs-attr">"userStatus"</span>: <span className="hljs-string">"FORCE_CHANGE_PASSWORD"</span>,
        <span className="hljs-attr">"pushToken"</span>: <span className="hljs-string">""</span>,
        <span className="hljs-attr">"apiKey"</span>: <span className="hljs-number">0</span>,
        <span className="hljs-attr">"apiKeyLastModified"</span>: <span className="hljs-string">""</span>,
        <span className="hljs-attr">"name"</span>: <span className="hljs-string">""</span>,
        <span className="hljs-attr">"language"</span>: <span className="hljs-string">"es"</span>
    {keyRight}]
{keyRight}
</code></pre>
<p>:::</p>
<h2 id="users-patch-users-confirm-sign-up">Users Patch /users/confirm-sign-up</h2>
<p>Confirm email with a code secret</p>
<p><em>Authentication: None</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"username"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"code"</span>: <span className="hljs-string">"string"</span>
{keyRight}
</code></pre>
<p><strong>Response with status code 200</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"data"</span>: <span className="hljs-string">"string"</span>
{keyRight}
</code></pre>
<p><strong>Codes errors</strong></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th >Status code</th>
         <th >Code</th>
         <th >Message</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td >200</td>
         <td >1000</td>
         <td >Error: Confirm signUp</td>
      </tr>
      <tr>
         <td >200</td>
         <td >400</td>
         <td >Errors manage for AWS</td>
      </tr>
   </tbody>
</table>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><strong>Request</strong></p>
<p><em>GET - {keyLeft}hosts{keyRight}/users/confirm-sign-up</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"username"</span>: <span className="hljs-string">"usernameexample"</span>,
    <span className="hljs-attr">"code"</span>: <span className="hljs-string">"118629"</span>
{keyRight}
</code></pre>
<p><strong>Response</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: <span className="hljs-string">"usernameexample confirmed"</span>
{keyRight}
</code></pre>
<p>:::</p>
<h2 id="users-post-users-resend-confirmation-code">Users Post /users/resend-confirmation-code</h2>
<p>Resend confirmation code</p>
<p><em>Authentication: None</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"username"</span>: <span className="hljs-string">"string"</span>
{keyRight}
</code></pre>
<p><strong>Response with status code 200</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"data"</span>: <span className="hljs-string">"string"</span>
{keyRight}
</code></pre>
<p><strong>Codes errors</strong></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th >Status code</th>
         <th >Code</th>
         <th >Message</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td >200</td>
         <td >1000</td>
         <td >Error: Cognito resendConfirmationCode</td>
      </tr>
      <tr>
         <td >200</td>
         <td >400</td>
         <td >Errors manage for AWS</td>
      </tr>
   </tbody>
</table>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><strong>Request</strong></p>
<p><em>GET - {keyLeft}hosts{keyRight}/users/resend-confirmation-code</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"username"</span>: <span className="hljs-string">"usernameexample"</span>
{keyRight}
</code></pre>
<p><strong>Response</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: <span className="hljs-string">"Code resend successfull"</span>
{keyRight}
</code></pre>
<p>:::</p>
<h2 id="users-post-auth">Users Post /auth</h2>
<p>Authenticate user with username and password</p>
<p><em>Authentication: None</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"username"</span>: <span className="hljs-string">"usernameexample"</span>,
    <span className="hljs-attr">"password"</span>: <span className="hljs-string">"Prueba01"</span>
{keyRight}
</code></pre>
<p><strong>Response with status code 200</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"data"</span>: {keyLeft}{keyRight} // pending
{keyRight}
</code></pre>
<p><strong>Codes errors</strong></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th >Status code</th>
         <th >Code</th>
         <th >Message</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td >200</td>
         <td >1000</td>
         <td >Error auth</td>
      </tr>
      <tr>
         <td >200</td>
         <td >401</td>
         <td >Incorrect username or password</td>
      </tr>
   </tbody>
</table>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><strong>Request</strong></p>
<p><em>POST - {keyLeft}hosts{keyRight}/auth</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"username"</span>: <span className="hljs-string">"usernameexample"</span>,
    <span className="hljs-attr">"password"</span>: <span className="hljs-string">"Prueba01"</span>
{keyRight}
</code></pre>
<p><strong>Response</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: {keyLeft}{keyRight} // pending
{keyRight}
</code></pre>
<p>:::</p>
<h1 id="reports">REPORTS</h1>
<p><strong>Development</strong></p>
<p><em><a href="https://ebrq6vcmr2.execute-api.us-east-1.amazonaws.com/dev">https://ebrq6vcmr2.execute-api.us-east-1.amazonaws.com/dev</a></em></p>
<p><strong>Production</strong></p>
<p><em><a href="https://n5hh6nj397.execute-api.us-east-1.amazonaws.com/prod">https://n5hh6nj397.execute-api.us-east-1.amazonaws.com/prod</a></em></p>
<h2 id="reports-get-export-orders-csv">Reports Get /export-orders-csv</h2>
<p>Send email with a report of orders with a format csv</p>
<p>_Authentication: COGNITO_USER<em>POOLS</em></p>
<p><strong>Query strings</strong></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th >Name</th>
         <th >Type</th>
         <th >Required</th>
         <th >Description</th>
         <th >Example</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td >picker</td>
         <td >string</td>
         <td >false</td>
         <td ></td>
         <td ></td>
      </tr>
      <tr>
         <td >method-delivery</td>
         <td >string</td>
         <td >false</td>
         <td ></td>
         <td ></td>
      </tr>
      <tr>
         <td >carrier</td>
         <td >string</td>
         <td >false</td>
         <td ></td>
         <td ></td>
      </tr>
      <tr>
         <td >category-items</td>
         <td >string</td>
         <td >false</td>
         <td >Value separate for commas</td>
         <td >1341234,123434</td>
      </tr>
      <tr>
         <td >start-date</td>
         <td >string</td>
         <td >false</td>
         <td >ISO 8601</td>
         <td >2021-08-02T01:00:00.000Z</td>
      </tr>
      <tr>
         <td >end-date</td>
         <td >string</td>
         <td >false</td>
         <td >ISO 8601</td>
         <td ></td>
      </tr>
      <tr>
         <td >marketplace</td>
         <td >string</td>
         <td >false</td>
         <td ></td>
         <td ></td>
      </tr>
      <tr>
         <td >seller</td>
         <td >string</td>
         <td >false</td>
         <td ></td>
         <td ></td>
      </tr>
      <tr>
         <td >email</td>
         <td >string</td>
         <td >true</td>
         <td ></td>
      </tr>
   </tbody>
</table>
<p><strong>Response with status code 200</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"data"</span>: <span className="hljs-string">"string"</span>
{keyRight}
</code></pre>
<p><strong>Codes errors</strong></p>
<p><em>The following errors are reported in the user’s email</em></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th >Status code</th>
         <th >Code</th>
         <th >Message</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td >-</td>
         <td >1001</td>
         <td >Error querying elasticsearch</td>
      </tr>
      <tr>
         <td >-</td>
         <td >1000</td>
         <td >Error internal of servidor</td>
      </tr>
   </tbody>
</table>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><strong>Request</strong></p>
<p><em>GET - {keyLeft}hosts{keyRight}/export-orders-csv?start-date=2021-01-05T01:00:00.000Z&amp;end-date=2021-08-05T23:59:59.999Z&amp;email=exampleemailp@gmail.com</em></p>
<p><strong>Response</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: <span className="hljs-string">"The report has been sent to your email -  2cfa9e69-dad3-4a7b-86fc-314f854fc5f0"</span>
{keyRight}
</code></pre>
<p>:::</p>
<h1 id="labels">LABELS</h1>
<p><strong>Development</strong></p>
<p><em><a href="https://yo41fvr6l0.execute-api.us-east-1.amazonaws.com/dev">https://yo41fvr6l0.execute-api.us-east-1.amazonaws.com/dev</a></em></p>
<p><strong>Production</strong></p>
<p><em><a href="https://3kaxngnnm5.execute-api.us-east-1.amazonaws.com/prod">https://3kaxngnnm5.execute-api.us-east-1.amazonaws.com/prod</a></em></p>
<h2 id="labels-post-label-comanda-package-voucher-">Labels Post /label (comanda, package, voucher)</h2>
<p>Create label of (comanda, pakage or voucher)</p>
<p>_Authentication: COGNITO_USER<em>POOLS</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-string">"data"</span>: {keyLeft}
        <span className="hljs-string">"orderId"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-string">"pickedItems"</span>?: boolean // only apply <span className="hljs-keyword">for</span> comanda <span className="hljs-keyword">and</span> voucher
    {keyRight},
    <span className="hljs-string">"typeLabel"</span>: <span className="hljs-string">"string"</span> // COMANDA | <span className="hljs-keyword">PACKAGE</span> <span className="hljs-title">| VOUCHER</span>
{keyRight}
</code></pre>
<p><strong>Response with status code 200</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: {keyLeft}
        <span className="hljs-attr">"fileUrl"</span>: <span className="hljs-string">"string"</span>
    {keyRight}
{keyRight}
</code></pre>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><strong>Request</strong></p>
<p><em>POST - {keyLeft}hosts{keyRight}/label</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"data"</span>: {keyLeft}
        <span className="hljs-attr">"orderId"</span>: <span className="hljs-string">"SLR-1148873257050-01"</span>
    {keyRight},
    <span className="hljs-attr">"typeLabel"</span>: <span className="hljs-string">"COMANDA"</span>
{keyRight}
</code></pre>
<p><strong>Response</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: {keyLeft}
        <span className="hljs-attr">"fileUrl"</span>: <span className="hljs-string">"https://fulfillment-labels-dev.s3.amazonaws.com/comandas/SLR-1148873257050-01.pdf"</span>
    {keyRight}
{keyRight}
</code></pre>
<p>:::</p>
<h2 id="labels-get-preview-label">Labels Get /preview-label</h2>
<p>Shows the label preview, only applies to order and voucher</p>
<p>_Authentication: COGNITO_USER<em>POOLS</em></p>
<p><strong>Query strings</strong></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th >Name</th>
         <th >Type</th>
         <th >Required</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td >type-label</td>
         <td >string</td>
         <td >true</td>
         <td>DELIVERY, COMANDA, PACKAGE, VOUCHER</td>
      </tr>
      <tr>
         <td >seller</td>
         <td >string</td>
         <td >true</td>
      </tr>
   </tbody>
</table>
<p><strong>Response with status code 200</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: {keyLeft}
        <span className="hljs-attr">"fileUrl"</span>: <span className="hljs-string">"string"</span>
    {keyRight}
{keyRight}
</code></pre>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><strong>Request</strong></p>
<p><em>GET - {keyLeft}hosts{keyRight}/preview-label?type-label=COMANDA&amp;seller=newbusinessunits</em></p>
<p><strong>Response</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: {keyLeft}
        <span className="hljs-attr">"fileUrl"</span>: <span className="hljs-string">"https://fulfillment-labels-dev.s3.amazonaws.com/comandas/7125340512241-02.pdf"</span>
    {keyRight}
{keyRight}
</code></pre>
<p>:::</p>
<h2 id="labels-post-label-delivery-">Labels Post /label (delivery)</h2>
<p>Create label of delivery</p>
<p>_Authentication: COGNITO_USER<em>POOLS</em></p>
<p><strong>Body</strong></p>
<p><em>Send the data of tracking</em></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"data"</span>: {keyLeft}
        <span className="hljs-attr">"courier"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"createdAt"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"creationDate"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"estimatedDateArrival"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"hostname"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"orderId"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"receiver"</span>: {keyLeft}
            <span className="hljs-attr">"address"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"addressComplement"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"city"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"country"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"deliveryDate"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"deliveryWindow"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"email"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"identification"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"location"</span>: {keyLeft}
                <span className="hljs-attr">"lat"</span>: <span className="hljs-string">"string"</span>,
                <span className="hljs-attr">"lon"</span>: <span className="hljs-string">"string"</span>
            {keyRight},
            <span className="hljs-attr">"name"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"notes"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"phone"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"state"</span>: <span className="hljs-string">"string"</span>
        {keyRight},
        <span className="hljs-attr">"sender"</span>: {keyLeft}
            <span className="hljs-attr">"address"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"addressComplement"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"city"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"contactName"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"country"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"deliveryWindow"</span>: [
                {keyLeft}
                    <span className="hljs-attr">"finalHour"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-attr">"initialHour"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-attr">"name"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-attr">"weekDay"</span>: <span className="hljs-string">"string"</span>
                {keyRight}
            ],
            <span className="hljs-attr">"email"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"location"</span>: {keyLeft}
                <span className="hljs-attr">"lat"</span>: <span className="hljs-string">"string"</span>,
                <span className="hljs-attr">"lon"</span>: <span className="hljs-string">"string"</span>
            {keyRight},
            <span className="hljs-attr">"name"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"phone"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"state"</span>: <span className="hljs-string">"string"</span>
        {keyRight},
        <span className="hljs-attr">"shippingEstimatedDateMin"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"status"</span>: <span className="hljs-string">"DELIVERED"</span>,
        <span className="hljs-attr">"trackingId"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"type"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"updatedAt"</span>: <span className="hljs-string">"string"</span>
    {keyRight},
    <span className="hljs-attr">"seller"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"typeLabel"</span>: <span className="hljs-string">"string"</span>
{keyRight}
</code></pre>
<p><strong>Response with status code 200</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: {keyLeft}
        <span className="hljs-attr">"fileUrl"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"name"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"id"</span>: <span className="hljs-string">"string"</span>
    {keyRight}
{keyRight}
</code></pre>
<p><strong>Codes errors</strong></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th>Status code</th>
         <th >Code</th>
         <th>Message</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>200</td>
         <td >1000</td>
         <td>LabelDeliveryController: Order not found</td>
      </tr>
   </tbody>
</table>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><strong>Request</strong></p>
<p><em>POST - {keyLeft}hosts{keyRight}/label</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"data"</span>: {keyLeft}
        <span className="hljs-attr">"courier"</span>: <span className="hljs-string">"MENSAJEROS_URBANOS"</span>,
        <span className="hljs-attr">"createdAt"</span>: <span className="hljs-string">"2021-06-01T20:09:23.912Z"</span>,
        <span className="hljs-attr">"creationDate"</span>: <span className="hljs-string">"2021-06-01T13:44:55.994Z"</span>,
        <span className="hljs-attr">"estimatedDateArrival"</span>: <span className="hljs-string">""</span>,
        <span className="hljs-attr">"hostname"</span>: <span className="hljs-string">"newbusinessunits12345"</span>,
        <span className="hljs-attr">"orderId"</span>: <span className="hljs-string">"SLR-1148873257050-01"</span>,
        <span className="hljs-attr">"receiver"</span>: {keyLeft}
            <span className="hljs-attr">"address"</span>: <span className="hljs-string">"Calle 121 #81-4"</span>,
            <span className="hljs-attr">"addressComplement"</span>: <span className="hljs-string">""</span>,
            <span className="hljs-attr">"city"</span>: <span className="hljs-string">"Soacha"</span>,
            <span className="hljs-attr">"country"</span>: <span className="hljs-string">"Colombia"</span>,
            <span className="hljs-attr">"deliveryDate"</span>: <span className="hljs-string">""</span>,
            <span className="hljs-attr">"deliveryWindow"</span>: <span className="hljs-string">""</span>,
            <span className="hljs-attr">"email"</span>: <span className="hljs-string">""</span>,
            <span className="hljs-attr">"identification"</span>: <span className="hljs-string">"2587831598"</span>,
            <span className="hljs-attr">"location"</span>: {keyLeft}
                <span className="hljs-attr">"lat"</span>: <span className="hljs-string">"6.3225973"</span>,
                <span className="hljs-attr">"lon"</span>: <span className="hljs-string">"-75.5818669"</span>
            {keyRight},
            <span className="hljs-attr">"name"</span>: <span className="hljs-string">"Camilo Hernandez"</span>,
            <span className="hljs-attr">"notes"</span>: <span className="hljs-string">"Pariatur reprehenderit et commodo qui eu. Consequat cillum dolore elit deserunt cillum consectetur est aliquip excepteur. Duis dolore amet labore dolore aliquip sint fugiat ut deserunt."</span>,
            <span className="hljs-attr">"phone"</span>: <span className="hljs-string">"+57315378444"</span>,
            <span className="hljs-attr">"state"</span>: <span className="hljs-string">"Cundinamarca"</span>
        {keyRight},
        <span className="hljs-attr">"sender"</span>: {keyLeft}
            <span className="hljs-attr">"address"</span>: <span className="hljs-string">"Calle 55 #82-27"</span>,
            <span className="hljs-attr">"addressComplement"</span>: <span className="hljs-string">""</span>,
            <span className="hljs-attr">"city"</span>: <span className="hljs-string">"Bogota D.C."</span>,
            <span className="hljs-attr">"contactName"</span>: <span className="hljs-string">"ZimmermanBaxter"</span>,
            <span className="hljs-attr">"country"</span>: <span className="hljs-string">"Colombia"</span>,
            <span className="hljs-attr">"deliveryWindow"</span>: [
                {keyLeft}
                    <span className="hljs-attr">"finalHour"</span>: <span className="hljs-string">"19:00"</span>,
                    <span className="hljs-attr">"initialHour"</span>: <span className="hljs-string">"05:00"</span>,
                    <span className="hljs-attr">"name"</span>: <span className="hljs-string">"Lunes - Viernes"</span>,
                    <span className="hljs-attr">"weekDay"</span>: <span className="hljs-string">"1"</span>
                {keyRight}
            ],
            <span className="hljs-attr">"email"</span>: <span className="hljs-string">""</span>,
            <span className="hljs-attr">"location"</span>: {keyLeft}
                <span className="hljs-attr">"lat"</span>: <span className="hljs-string">"6.3226317"</span>,
                <span className="hljs-attr">"lon"</span>: <span className="hljs-string">"-75.5818049"</span>
            {keyRight},
            <span className="hljs-attr">"name"</span>: <span className="hljs-string">"Olimpica 20"</span>,
            <span className="hljs-attr">"phone"</span>: <span className="hljs-string">"+57311742837"</span>,
            <span className="hljs-attr">"state"</span>: <span className="hljs-string">"Bogota D.C."</span>
        {keyRight},
        <span className="hljs-attr">"shippingEstimatedDateMin"</span>: <span className="hljs-string">"2021-05-22T23:36:27.618Z"</span>,
        <span className="hljs-attr">"status"</span>: <span className="hljs-string">"DELIVERED"</span>,
        <span className="hljs-attr">"trackingId"</span>: <span className="hljs-string">"2b265bfb-1428-4c02-96d3-2daa8dd12345"</span>,
        <span className="hljs-attr">"type"</span>: <span className="hljs-string">"EXTERNAL"</span>,
        <span className="hljs-attr">"updatedAt"</span>: <span className="hljs-string">"2021-06-01T20:09:23.912Z"</span>
    {keyRight},
    <span className="hljs-attr">"seller"</span>: <span className="hljs-string">"newbusinessunits"</span>,
    <span className="hljs-attr">"typeLabel"</span>: <span className="hljs-string">"DELIVERY"</span>
{keyRight}
</code></pre>
<p><strong>Response</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: {keyLeft}
        <span className="hljs-attr">"fileUrl"</span>: <span className="hljs-string">"https://fulfillment-labels-dev.s3.amazonaws.com/deliveries/2b265bfb-1428-4c02-96d3-2daa8dd12345.pdf"</span>,
        <span className="hljs-attr">"name"</span>: <span className="hljs-string">"2b265bfb-1428-4c02-96d3-2daa8dd12345.pdf"</span>,
        <span className="hljs-attr">"id"</span>: <span className="hljs-string">"SHIPPING"</span>
    {keyRight}
{keyRight}
</code></pre>
<p>:::</p>
<h1 id="lastmile">LASTMILE</h1>
<p><strong>Development</strong></p>
<p><em><a href="https://edgzoox53h.execute-api.us-east-1.amazonaws.com/dev">https://edgzoox53h.execute-api.us-east-1.amazonaws.com/dev</a></em></p>
<p><strong>Production</strong></p>
<p><em><a href="https://usbdlk14ae.execute-api.us-east-1.amazonaws.com/prod">https://usbdlk14ae.execute-api.us-east-1.amazonaws.com/prod</a></em></p>
<h2 id="lastmile-post-service">Lastmile Post /service</h2>
<p>Create service in lastmile</p>
<p>_Authentication: COGNITO_USER<em>POOLS</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"trackingId"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"pickupDate"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"deliveryDate"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"teamId"</span>: <span className="hljs-string">"number"</span>,
    <span className="hljs-attr">"courier"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"packages"</span>: [
        {keyLeft}
            <span className="hljs-attr">"id"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"orderID"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"envelope"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"dimentions"</span>: {keyLeft}
                <span className="hljs-attr">"width"</span>: <span className="hljs-string">"string"</span>,
                <span className="hljs-attr">"height"</span>: <span className="hljs-string">"string"</span>,
                <span className="hljs-attr">"length"</span>: <span className="hljs-string">"string"</span>
            {keyRight},
            <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"courier"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"totalValue"</span>: <span className="hljs-string">"number"</span>,
            <span className="hljs-attr">"items"</span>: [
                {keyLeft}
                    <span className="hljs-attr">"id"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-attr">"name"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-attr">"image"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-attr">"price"</span>: <span className="hljs-string">"number"</span>,
                    <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-attr">"quantity"</span>: <span className="hljs-string">"number"</span>
                {keyRight}
            ]
        {keyRight}
    ]
{keyRight}
</code></pre>
<p><strong>Response with status code 200</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-string">"serviceId"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"trackingId"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"status"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"courier"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"agent"</span>?: {keyLeft}
      <span className="hljs-string">"id"</span>: <span className="hljs-string">"string"</span>,
      <span className="hljs-string">"name"</span>: <span className="hljs-string">"string"</span>,
      <span className="hljs-string">"identification"</span>: <span className="hljs-string">"number"</span>,
      <span className="hljs-string">"phone"</span>: <span className="hljs-string">"string"</span>,
      <span className="hljs-string">"email"</span>: <span className="hljs-string">"string"</span>,
      <span className="hljs-string">"vehicle"</span>: <span className="hljs-string">"string"</span>
    {keyRight},
    <span className="hljs-string">"tracking_url"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"createdDateTime"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"pickedDateTime"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"startedDateTime"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"completedDateTime"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"total_distance_travelled"</span>: <span className="hljs-string">"number"</span>,
    <span className="hljs-string">"rating"</span>: <span className="hljs-string">"number"</span>,
    <span className="hljs-string">"comments"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-string">"packages"</span>: [
        {keyLeft}
            <span className="hljs-string">"id"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-string">"orderID"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-string">"envelope"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-string">"dimentions"</span>: {keyLeft}
                <span className="hljs-string">"width"</span>: <span className="hljs-string">"string"</span>,
                <span className="hljs-string">"height"</span>: <span className="hljs-string">"string"</span>,
                <span className="hljs-string">"length"</span>: <span className="hljs-string">"string"</span>
            {keyRight},
            <span className="hljs-string">"weight"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-string">"courier"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-string">"totalValue"</span>: <span className="hljs-string">"number"</span>,
            <span className="hljs-string">"items"</span>: [
                {keyLeft}
                    <span className="hljs-string">"id"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-string">"name"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-string">"ean"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-string">"refId"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-string">"image"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-string">"price"</span>: <span className="hljs-string">"number"</span>,
                    <span className="hljs-string">"weight"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-string">"quantity"</span>: <span className="hljs-string">"number"</span>
                {keyRight}
            ]
        {keyRight} 
    ]
{keyRight}
</code></pre>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><strong>Request</strong></p>
<p><em>POST - {keyLeft}hosts{keyRight}/service</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"trackingId"</span>: <span className="hljs-string">"44d6eac1-df72-42ce-ad00-a217068d3764"</span>,
    <span className="hljs-attr">"pickupDate"</span>: <span className="hljs-string">"2021-06-21T17:13:55.635Z"</span>,
    <span className="hljs-attr">"deliveryDate"</span>: <span className="hljs-string">"2021-06-22T17:13:55.635Z"</span>,
    <span className="hljs-attr">"teamId"</span>: <span className="hljs-number">947830</span>,
    <span className="hljs-attr">"courier"</span>: <span className="hljs-string">"LAST_MILE"</span>,
    <span className="hljs-attr">"packages"</span>: [
        {keyLeft}
            <span className="hljs-attr">"id"</span>: <span className="hljs-string">"60c225fd17f7a88b7b551ad6"</span>,
            <span className="hljs-attr">"orderID"</span>: <span className="hljs-string">"1126170519914-01"</span>,
            <span className="hljs-attr">"envelope"</span>: <span className="hljs-string">"ut nostrud"</span>,
            <span className="hljs-attr">"dimentions"</span>: {keyLeft}
                <span className="hljs-attr">"width"</span>: <span className="hljs-string">"28.55"</span>,
                <span className="hljs-attr">"height"</span>: <span className="hljs-string">"33.73"</span>,
                <span className="hljs-attr">"length"</span>: <span className="hljs-string">"46.89"</span>
            {keyRight},
            <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"3.11"</span>,
            <span className="hljs-attr">"courier"</span>: <span className="hljs-string">"LAST_MILE"</span>,
            <span className="hljs-attr">"totalValue"</span>: <span className="hljs-number">77437</span>,
            <span className="hljs-attr">"items"</span>: [
                {keyLeft}
                    <span className="hljs-attr">"id"</span>: <span className="hljs-string">"422549"</span>,
                    <span className="hljs-attr">"name"</span>: <span className="hljs-string">"MEsa"</span>,
                    <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"672478506000"</span>,
                    <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                    <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                    <span className="hljs-attr">"price"</span>: <span className="hljs-number">2063</span>,
                    <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"33.14"</span>,
                    <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">2</span>
                {keyRight},
                {keyLeft}
                    <span className="hljs-attr">"id"</span>: <span className="hljs-string">"792447"</span>,
                    <span className="hljs-attr">"name"</span>: <span className="hljs-string">"Portatil"</span>,
                    <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"366315605085"</span>,
                    <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                    <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                    <span className="hljs-attr">"price"</span>: <span className="hljs-number">75374</span>,
                    <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"16.02"</span>,
                    <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">4</span>
                {keyRight}
            ]
        {keyRight},
        {keyLeft}
            <span className="hljs-attr">"id"</span>: <span className="hljs-string">"60c225fd2fd01f70fb5532ee"</span>,
            <span className="hljs-attr">"orderID"</span>: <span className="hljs-string">"1126170519914-01"</span>,
            <span className="hljs-attr">"envelope"</span>: <span className="hljs-string">"ut nostrud"</span>,
            <span className="hljs-attr">"dimentions"</span>: {keyLeft}
                <span className="hljs-attr">"width"</span>: <span className="hljs-string">"5.29"</span>,
                <span className="hljs-attr">"height"</span>: <span className="hljs-string">"27.41"</span>,
                <span className="hljs-attr">"length"</span>: <span className="hljs-string">"13.13"</span>
            {keyRight},
            <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"39.63"</span>,
            <span className="hljs-attr">"courier"</span>: <span className="hljs-string">"LAST_MILE"</span>,
            <span className="hljs-attr">"totalValue"</span>: <span className="hljs-number">971102</span>,
            <span className="hljs-attr">"items"</span>: [
                {keyLeft}
                    <span className="hljs-attr">"id"</span>: <span className="hljs-string">"215394"</span>,
                    <span className="hljs-attr">"name"</span>: <span className="hljs-string">"TV LG"</span>,
                    <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"382642863402"</span>,
                    <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                    <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                    <span className="hljs-attr">"price"</span>: <span className="hljs-number">52098</span>,
                    <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"9.25"</span>,
                    <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">2</span>
                {keyRight},
                {keyLeft}
                    <span className="hljs-attr">"id"</span>: <span className="hljs-string">"670348"</span>,
                    <span className="hljs-attr">"name"</span>: <span className="hljs-string">"MP3"</span>,
                    <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"854104188434"</span>,
                    <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                    <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                    <span className="hljs-attr">"price"</span>: <span className="hljs-number">69630</span>,
                    <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"15.48"</span>,
                    <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">4</span>
                {keyRight},
                {keyLeft}
                    <span className="hljs-attr">"id"</span>: <span className="hljs-string">"841249"</span>,
                    <span className="hljs-attr">"name"</span>: <span className="hljs-string">"TV LG"</span>,
                    <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"531298105066"</span>,
                    <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                    <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                    <span className="hljs-attr">"price"</span>: <span className="hljs-number">35072</span>,
                    <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"38.95"</span>,
                    <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">3</span>
                {keyRight},
                {keyLeft}
                    <span className="hljs-attr">"id"</span>: <span className="hljs-string">"769129"</span>,
                    <span className="hljs-attr">"name"</span>: <span className="hljs-string">"Portatil"</span>,
                    <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"724731726963"</span>,
                    <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                    <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                    <span className="hljs-attr">"price"</span>: <span className="hljs-number">67226</span>,
                    <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"42.42"</span>,
                    <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">5</span>
                {keyRight}
            ]
        {keyRight}
    ]
{keyRight}
</code></pre>
<p><strong>Response</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"serviceId"</span>: <span className="hljs-string">"279591515"</span>,
    <span className="hljs-attr">"trackingId"</span>: <span className="hljs-string">"44d6eac1-df72-42ce-ad00-a217068d3764"</span>,
    <span className="hljs-attr">"status"</span>: <span className="hljs-string">"PENDING"</span>,
    <span className="hljs-attr">"courier"</span>: <span className="hljs-string">"LAST_MILE"</span>,
    <span className="hljs-attr">"agent"</span>: <span className="hljs-literal">null</span>,
    <span className="hljs-attr">"tracking_url"</span>: <span className="hljs-string">"https://jngl.ml/1a4eEf3Ga"</span>,
    <span className="hljs-attr">"createdDateTime"</span>: <span className="hljs-string">"2021-06-22T16:46:50Z"</span>,
    <span className="hljs-attr">"pickedDateTime"</span>: <span className="hljs-string">"2021-06-21T17:13:00.000Z"</span>,
    <span className="hljs-attr">"startedDateTime"</span>: <span className="hljs-string">"0000-00-00 00:00:00"</span>,
    <span className="hljs-attr">"completedDateTime"</span>: <span className="hljs-string">"0000-00-00 00:00:00"</span>,
    <span className="hljs-attr">"total_distance_travelled"</span>: <span className="hljs-literal">null</span>,
    <span className="hljs-attr">"rating"</span>: <span className="hljs-literal">null</span>,
    <span className="hljs-attr">"comments"</span>: <span className="hljs-literal">null</span>,
    <span className="hljs-attr">"packages"</span>: [
        {keyLeft}
            <span className="hljs-attr">"id"</span>: <span className="hljs-string">"60c225fd17f7a88b7b551ad6"</span>,
            <span className="hljs-attr">"orderID"</span>: <span className="hljs-string">"1126170519914-01"</span>,
            <span className="hljs-attr">"envelope"</span>: <span className="hljs-string">"ut nostrud"</span>,
            <span className="hljs-attr">"dimentions"</span>: {keyLeft}
                <span className="hljs-attr">"width"</span>: <span className="hljs-string">"28.55"</span>,
                <span className="hljs-attr">"height"</span>: <span className="hljs-string">"33.73"</span>,
                <span className="hljs-attr">"length"</span>: <span className="hljs-string">"46.89"</span>
            {keyRight},
            <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"3.11"</span>,
            <span className="hljs-attr">"courier"</span>: <span className="hljs-string">"LAST_MILE"</span>,
            <span className="hljs-attr">"totalValue"</span>: <span className="hljs-number">77437</span>,
            <span className="hljs-attr">"items"</span>: [
                {keyLeft}
                    <span className="hljs-attr">"id"</span>: <span className="hljs-string">"422549"</span>,
                    <span className="hljs-attr">"name"</span>: <span className="hljs-string">"MEsa"</span>,
                    <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"672478506000"</span>,
                    <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                    <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                    <span className="hljs-attr">"price"</span>: <span className="hljs-number">2063</span>,
                    <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"33.14"</span>,
                    <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">2</span>
                {keyRight},
                {keyLeft}
                    <span className="hljs-attr">"id"</span>: <span className="hljs-string">"792447"</span>,
                    <span className="hljs-attr">"name"</span>: <span className="hljs-string">"Portatil"</span>,
                    <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"366315605085"</span>,
                    <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                    <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                    <span className="hljs-attr">"price"</span>: <span className="hljs-number">75374</span>,
                    <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"16.02"</span>,
                    <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">4</span>
                {keyRight}
            ]
        {keyRight},
        {keyLeft}
            <span className="hljs-attr">"id"</span>: <span className="hljs-string">"60c225fd2fd01f70fb5532ee"</span>,
            <span className="hljs-attr">"orderID"</span>: <span className="hljs-string">"1126170519914-01"</span>,
            <span className="hljs-attr">"envelope"</span>: <span className="hljs-string">"ut nostrud"</span>,
            <span className="hljs-attr">"dimentions"</span>: {keyLeft}
                <span className="hljs-attr">"width"</span>: <span className="hljs-string">"5.29"</span>,
                <span className="hljs-attr">"height"</span>: <span className="hljs-string">"27.41"</span>,
                <span className="hljs-attr">"length"</span>: <span className="hljs-string">"13.13"</span>
            {keyRight},
            <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"39.63"</span>,
            <span className="hljs-attr">"courier"</span>: <span className="hljs-string">"LAST_MILE"</span>,
            <span className="hljs-attr">"totalValue"</span>: <span className="hljs-number">971102</span>,
            <span className="hljs-attr">"items"</span>: [
                {keyLeft}
                    <span className="hljs-attr">"id"</span>: <span className="hljs-string">"215394"</span>,
                    <span className="hljs-attr">"name"</span>: <span className="hljs-string">"TV LG"</span>,
                    <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"382642863402"</span>,
                    <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                    <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                    <span className="hljs-attr">"price"</span>: <span className="hljs-number">52098</span>,
                    <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"9.25"</span>,
                    <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">2</span>
                {keyRight},
                {keyLeft}
                    <span className="hljs-attr">"id"</span>: <span className="hljs-string">"670348"</span>,
                    <span className="hljs-attr">"name"</span>: <span className="hljs-string">"MP3"</span>,
                    <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"854104188434"</span>,
                    <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                    <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                    <span className="hljs-attr">"price"</span>: <span className="hljs-number">69630</span>,
                    <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"15.48"</span>,
                    <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">4</span>
                {keyRight},
                {keyLeft}
                    <span className="hljs-attr">"id"</span>: <span className="hljs-string">"841249"</span>,
                    <span className="hljs-attr">"name"</span>: <span className="hljs-string">"TV LG"</span>,
                    <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"531298105066"</span>,
                    <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                    <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                    <span className="hljs-attr">"price"</span>: <span className="hljs-number">35072</span>,
                    <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"38.95"</span>,
                    <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">3</span>
                {keyRight},
                {keyLeft}
                    <span className="hljs-attr">"id"</span>: <span className="hljs-string">"769129"</span>,
                    <span className="hljs-attr">"name"</span>: <span className="hljs-string">"Portatil"</span>,
                    <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"724731726963"</span>,
                    <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                    <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                    <span className="hljs-attr">"price"</span>: <span className="hljs-number">67226</span>,
                    <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"42.42"</span>,
                    <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">5</span>
                {keyRight}
            ]
        {keyRight}
    ]
{keyRight}
</code></pre>
<p>:::</p>
<h2 id="lastmile-post-service-hook">Lastmile Post /service-hook</h2>
<p>Web hook for lastmile</p>
<p><em>Authentication: None</em></p>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><em>This request is sent by lastmile to vtex</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
  <span className="hljs-attr">"job_id"</span>: <span className="hljs-number">287054601</span>,
  <span className="hljs-attr">"created_by"</span>: <span className="hljs-number">5</span>,
  <span className="hljs-attr">"order_id"</span>: <span className="hljs-string">"SLR-1143933384702-01"</span>,
  <span className="hljs-attr">"recurring_id"</span>: <span className="hljs-string">"0"</span>,
  <span className="hljs-attr">"recurring_count"</span>: <span className="hljs-number">0</span>,
  <span className="hljs-attr">"partner_order_id"</span>: <span className="hljs-literal">null</span>,
  <span className="hljs-attr">"team_id"</span>: <span className="hljs-number">947830</span>,
  <span className="hljs-attr">"vertical"</span>: <span className="hljs-number">0</span>,
  <span className="hljs-attr">"merchant_id"</span>: <span className="hljs-number">0</span>,
  <span className="hljs-attr">"geofence"</span>: <span className="hljs-number">0</span>,
  <span className="hljs-attr">"tags"</span>: <span className="hljs-string">"qaolimpicaswl1"</span>,
  <span className="hljs-attr">"auto_assignment"</span>: <span className="hljs-number">0</span>,
  <span className="hljs-attr">"dispatcher_id"</span>: <span className="hljs-literal">null</span>,
  <span className="hljs-attr">"job_hash"</span>: <span className="hljs-string">"a65bf514704fe1a38caa69b885367208"</span>,
  <span className="hljs-attr">"has_pickup"</span>: <span className="hljs-number">1</span>,
  <span className="hljs-attr">"has_delivery"</span>: <span className="hljs-number">1</span>,
  <span className="hljs-attr">"is_routed"</span>: <span className="hljs-number">0</span>,
  <span className="hljs-attr">"pickup_delivery_relationship"</span>: <span className="hljs-string">"287054601824716252789666786880"</span>,
  <span className="hljs-attr">"job_description"</span>: <span className="hljs-string">""</span>,
  <span className="hljs-attr">"job_pickup_datetime"</span>: <span className="hljs-string">"07/03/2021 01:46 am"</span>,
  <span className="hljs-attr">"job_pickup_name"</span>: <span className="hljs-string">"AnnOneil"</span>,
  <span className="hljs-attr">"job_pickup_phone"</span>: <span className="hljs-string">"+57 313799280"</span>,
  <span className="hljs-attr">"job_delivery_datetime"</span>: <span className="hljs-string">"07/03/2021 08:00 am"</span>,
  <span className="hljs-attr">"job_pickup_latitude"</span>: <span className="hljs-string">"6.283511"</span>,
  <span className="hljs-attr">"job_pickup_longitude"</span>: <span className="hljs-string">"-75.543348"</span>,
  <span className="hljs-attr">"job_pickup_address"</span>: <span className="hljs-string">"Calle 80 #28-4"</span>,
  <span className="hljs-attr">"job_pickup_email"</span>: <span className="hljs-string">""</span>,
  <span className="hljs-attr">"job_latitude"</span>: <span className="hljs-string">"8.74134407"</span>,
  <span className="hljs-attr">"job_longitude"</span>: <span className="hljs-string">"-75.88475797"</span>,
  <span className="hljs-attr">"customer_username"</span>: <span className="hljs-string">"AnnOneil"</span>,
  <span className="hljs-attr">"customer_email"</span>: <span className="hljs-string">""</span>,
  <span className="hljs-attr">"customer_phone"</span>: <span className="hljs-string">"+57 313799280"</span>,
  <span className="hljs-attr">"job_address"</span>: <span className="hljs-string">"Calle 80 #28-4"</span>,
  <span className="hljs-attr">"creation_datetime"</span>: <span className="hljs-string">"2021-07-03T02:22:46.000Z"</span>,
  <span className="hljs-attr">"fleet_id"</span>: <span className="hljs-number">994067</span>,
  <span className="hljs-attr">"user_id"</span>: <span className="hljs-number">949212</span>,
  <span className="hljs-attr">"fleet_rating"</span>: <span className="hljs-number">5</span>,
  <span className="hljs-attr">"customer_comment"</span>: <span className="hljs-literal">null</span>,
  <span className="hljs-attr">"is_customer_rated"</span>: <span className="hljs-number">0</span>,
  <span className="hljs-attr">"customer_id"</span>: <span className="hljs-number">38894372</span>,
  <span className="hljs-attr">"arrived_datetime"</span>: <span className="hljs-string">""</span>,
  <span className="hljs-attr">"started_datetime"</span>: <span className="hljs-string">"2021-07-03 10:38:41"</span>,
  <span className="hljs-attr">"completed_datetime"</span>: <span className="hljs-string">""</span>,
  <span className="hljs-attr">"acknowledged_datetime"</span>: <span className="hljs-string">"2021-07-03 10:38:39"</span>,
  <span className="hljs-attr">"job_status"</span>: <span className="hljs-number">1</span>,
  <span className="hljs-attr">"is_active"</span>: <span className="hljs-number">1</span>,
  <span className="hljs-attr">"job_type"</span>: <span className="hljs-number">0</span>,
  <span className="hljs-attr">"completed_by_admin"</span>: <span className="hljs-number">0</span>,
  <span className="hljs-attr">"open_tracking_link"</span>: <span className="hljs-number">0</span>,
  <span className="hljs-attr">"timezone"</span>: <span className="hljs-string">"300"</span>,
  <span className="hljs-attr">"job_time"</span>: <span className="hljs-string">"2021-07-03 01:46:0"</span>,
  <span className="hljs-attr">"job_date"</span>: <span className="hljs-string">"2021-07-03T00:00:00.000Z"</span>,
  <span className="hljs-attr">"job_time_utc"</span>: <span className="hljs-string">"2021-07-03T06:46:00.000Z"</span>,
  <span className="hljs-attr">"job_date_utc"</span>: <span className="hljs-string">"2021-07-03T00:00:00.000Z"</span>,
  <span className="hljs-attr">"total_distance_travelled"</span>: <span className="hljs-number">0</span>,
  <span className="hljs-attr">"form_id"</span>: <span className="hljs-literal">null</span>,
  <span className="hljs-attr">"customer_rating"</span>: <span className="hljs-number">5</span>,
  <span className="hljs-attr">"driver_comment"</span>: <span className="hljs-literal">null</span>,
  <span className="hljs-attr">"remarks"</span>: <span className="hljs-literal">null</span>,
  <span className="hljs-attr">"barcode"</span>: <span className="hljs-string">"CY225QLY"</span>,
  <span className="hljs-attr">"ride_type"</span>: <span className="hljs-number">0</span>,
  <span className="hljs-attr">"matched_pickup_delivery_relationship"</span>: <span className="hljs-literal">null</span>,
  <span className="hljs-attr">"job_vertical"</span>: <span className="hljs-number">0</span>,
  <span className="hljs-attr">"days_started"</span>: <span className="hljs-string">"0"</span>,
  <span className="hljs-attr">"tookan_shared_secret"</span>: <span className="hljs-string">"5e116fa7-623b-4c40-8885-d751e4be5693"</span>,
  <span className="hljs-attr">"distance_in"</span>: <span className="hljs-string">"KM"</span>,
  <span className="hljs-attr">"access_token"</span>: <span className="hljs-string">"186234d8a34a0d431c162f311315264619e4c6fd2f"</span>,
  <span className="hljs-attr">"domain"</span>: <span className="hljs-string">"https://lastmile.northlatam.com"</span>,
  <span className="hljs-attr">"agent_workflow"</span>: <span className="hljs-number">2</span>,
  <span className="hljs-attr">"is_merchant"</span>: <span className="hljs-number">0</span>,
  <span className="hljs-attr">"fleet_name"</span>: <span className="hljs-string">"James Osorio"</span>,
  <span className="hljs-attr">"fleet_email"</span>: <span className="hljs-string">"james.osorio@vtex.com.br"</span>,
  <span className="hljs-attr">"fleet_phone"</span>: <span className="hljs-string">"4221469943"</span>,
  <span className="hljs-attr">"fleet_latitude"</span>: <span className="hljs-string">"6.235264025811416"</span>,
  <span className="hljs-attr">"fleet_longitude"</span>: <span className="hljs-string">"-75.60016799572391"</span>,
  <span className="hljs-attr">"transport_type"</span>: <span className="hljs-number">4</span>,
  <span className="hljs-attr">"license"</span>: <span className="hljs-string">""</span>,
  <span className="hljs-attr">"transport_desc"</span>: <span className="hljs-string">""</span>,
  <span className="hljs-attr">"fleet_image"</span>: <span className="hljs-string">"https://tookan.s3.amazonaws.com/fleet_profile/user.png"</span>,
  <span className="hljs-attr">"job_details_by_fleet"</span>: <span className="hljs-number">994067</span>,
  <span className="hljs-attr">"external_fleet_id"</span>: <span className="hljs-string">""</span>,
  <span className="hljs-attr">"fleet_vehicle_type"</span>: <span className="hljs-number">4</span>,
  <span className="hljs-attr">"fleet_vehicle_color"</span>: <span className="hljs-string">""</span>,
  <span className="hljs-attr">"fleet_vehicle_description"</span>: <span className="hljs-string">""</span>,
  <span className="hljs-attr">"task_status"</span>: <span className="hljs-number">4</span>,
  <span className="hljs-attr">"promo_used"</span>: <span className="hljs-string">""</span>,
  <span className="hljs-attr">"custom_fields"</span>: [],
  <span className="hljs-attr">"ref_images"</span>: [],
  <span className="hljs-attr">"tracking_link"</span>: <span className="hljs-string">"https://jngl.ml/D9b88W536"</span>,
  <span className="hljs-attr">"task_history"</span>: [],
  <span className="hljs-attr">"job_state"</span>: <span className="hljs-string">"Started"</span>,
  <span className="hljs-attr">"task_state"</span>: <span className="hljs-string">"INPROGRESS"</span>,
  <span className="hljs-attr">"started_datetime_formatted"</span>: <span className="hljs-string">"03 Jul 2021 10:38 am"</span>,
  <span className="hljs-attr">"acknowledged_datetime_formatted"</span>: <span className="hljs-string">"03 Jul 2021 10:38 am"</span>,
  <span className="hljs-attr">"job_token"</span>: <span className="hljs-string">"287054601824716252789666786880"</span>,
  <span className="hljs-attr">"job_time_formatted"</span>: <span className="hljs-string">"03 Jul 2021 01:46 am"</span>,
  <span className="hljs-attr">"job_pickup_datetime_formatted"</span>: <span className="hljs-string">"03 Jul 2021 01:46 am"</span>,
  <span className="hljs-attr">"job_delivery_datetime_formatted"</span>: <span className="hljs-string">"03 Jul 2021 08:00 am"</span>,
  <span className="hljs-attr">"total_distance"</span>: <span className="hljs-string">"0.00 Km"</span>,
  <span className="hljs-attr">"webhook_type"</span>: <span className="hljs-number">0</span>,
  <span className="hljs-attr">"format"</span>: <span className="hljs-string">"application/json"</span>,
  <span className="hljs-attr">"template_key"</span>: <span className="hljs-string">"AGENT_STARTED"</span>,
  <span className="hljs-attr">"is_internal"</span>: <span className="hljs-number">0</span>,
  <span className="hljs-attr">"full_tracking_link"</span>: <span className="hljs-string">"https://lastmile.northlatam.com/tracking/index.html?jobID=a65bf514704fe1a38caa69b885367208"</span>
{keyRight}
</code></pre>
<p>:::</p>
<h1 id="mensajeros-urbanos">MENSAJEROS URBANOS</h1>
<p><strong>Development</strong></p>
<p><em><a href="https://tm244nwmvl.execute-api.us-east-1.amazonaws.com/dev">https://tm244nwmvl.execute-api.us-east-1.amazonaws.com/dev</a></em></p>
<p><strong>Production</strong></p>
<p><em><a href="https://8xposbjidb.execute-api.us-east-1.amazonaws.com/prod">https://8xposbjidb.execute-api.us-east-1.amazonaws.com/prod</a></em></p>
<h2 id="mensajeros-urbanos-post-delivery">Mensajeros urbanos Post /delivery</h2>
<p>Create service in Mensajeros Urbanos</p>
<p>_Authentication: COGNITO_USER<em>POOLS</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"trackingId"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"pickupDate"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"deliveryDate"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"courier"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"packages"</span>: [
        {keyLeft}
            <span className="hljs-attr">"id"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"orderID"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"envelope"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"dimentions"</span>: {keyLeft}
                <span className="hljs-attr">"width"</span>: <span className="hljs-string">"string"</span>,
                <span className="hljs-attr">"height"</span>: <span className="hljs-string">"string"</span>,
                <span className="hljs-attr">"length"</span>: <span className="hljs-string">"string"</span>
            {keyRight},
            <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"courier"</span>: <span className="hljs-string">"string"</span>,
            <span className="hljs-attr">"totalValue"</span>: <span className="hljs-string">"number"</span>,
            <span className="hljs-attr">"items"</span>: [
                {keyLeft}
                    <span className="hljs-attr">"id"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-attr">"name"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-attr">"image"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-attr">"price"</span>: <span className="hljs-string">"number"</span>,
                    <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"number"</span>,
                    <span className="hljs-attr">"quantity"</span>: <span className="hljs-string">"number"</span>
                {keyRight}
            ]
        {keyRight}
    ]
{keyRight}
</code></pre>
<p><strong>Response with status code 200</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: {keyLeft}
        <span className="hljs-attr">"trackingId"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"serviceId"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"labels"</span>: [{keyLeft}
          <span className="hljs-attr">"id"</span>: <span className="hljs-string">"string"</span>,
          <span className="hljs-attr">"url"</span>: <span className="hljs-string">"string"</span>,
          <span className="hljs-attr">"name"</span>: <span className="hljs-string">"string"</span>
        {keyRight}],
        <span className="hljs-attr">"status"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"courier"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"tracking_url"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"createdDateTime"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"pickedDateTime"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"startedDateTime"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"completedDateTime"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"total_distance_travelled"</span>: <span className="hljs-string">"number"</span>,
        <span className="hljs-attr">"rating"</span>: <span className="hljs-string">"number"</span>,
        <span className="hljs-attr">"comments"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"evidences"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"packages"</span>: [
            {keyLeft}
                <span className="hljs-attr">"id"</span>: <span className="hljs-string">"string"</span>,
                <span className="hljs-attr">"orderID"</span>: <span className="hljs-string">"string"</span>,
                <span className="hljs-attr">"envelope"</span>: <span className="hljs-string">"string"</span>,
                <span className="hljs-attr">"dimentions"</span>: {keyLeft}
                    <span className="hljs-attr">"width"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-attr">"height"</span>: <span className="hljs-string">"string"</span>,
                    <span className="hljs-attr">"length"</span>: <span className="hljs-string">"string"</span>
                {keyRight},
                <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"string"</span>,
                <span className="hljs-attr">"courier"</span>: <span className="hljs-string">"string"</span>,
                <span className="hljs-attr">"totalValue"</span>: <span className="hljs-string">"number"</span>,
                <span className="hljs-attr">"items"</span>: [
                    {keyLeft}
                        <span className="hljs-attr">"id"</span>: <span className="hljs-string">"string"</span>,
                        <span className="hljs-attr">"name"</span>: <span className="hljs-string">"string"</span>,
                        <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"string"</span>,
                        <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"string"</span>,
                        <span className="hljs-attr">"image"</span>: <span className="hljs-string">"string"</span>,
                        <span className="hljs-attr">"price"</span>: <span className="hljs-string">"number"</span>,
                        <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"number"</span>,
                        <span className="hljs-attr">"quantity"</span>: <span className="hljs-string">"number"</span>
                    {keyRight}
                ]
            {keyRight}
        ]
    {keyRight}
{keyRight}
</code></pre>
<p><strong>Codes errors</strong></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th >Status code</th>
         <th >Code</th>
         <th >Message</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td >500</td>
         <td >1000</td>
         <td >Error internal server</td>
      </tr>
      <tr>
         <td >400</td>
         <td >2002</td>
         <td >Destination city is invalid</td>
      </tr>
      <tr>
         <td >400</td>
         <td >2001</td>
         <td >API Mensajeros Urbanos internal error</td>
      </tr>
      <tr>
         <td >400</td>
         <td >2003</td>
         <td >Destination city is invalid</td>
      </tr>
   </tbody>
</table>
<p><strong>Example errors</strong></p>
<p>::: details</p>
<p><strong>Status code: 400</strong></p>
<pre><code className="lang-js"><span className="hljs-comment">/* body */</span>
{keyLeft}
  <span className="hljs-string">"code"</span>: <span className="hljs-number">2002</span>,
  <span className="hljs-string">"message"</span>: <span className="hljs-string">"Ciudad aledaña Invalida"</span>,
  <span className="hljs-string">"data"</span>: <span className="hljs-literal">null</span>
{keyRight}
</code></pre>
<p>:::</p>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><strong>Request</strong></p>
<p><em>POST - {keyLeft}hosts{keyRight}/delivery</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">/* body */
{keyLeft}
    <span className="hljs-string">"trackingId"</span>: <span className="hljs-string">"60bfd58e5167bdbadacb9abe"</span>,
    <span className="hljs-string">"pickupDate"</span>: <span className="hljs-string">"2021-06-19T12:39:24.597Z"</span>,
    <span className="hljs-string">"deliveryDate"</span>: <span className="hljs-string">"2021-07-26T14:25:10.542Z"</span>,
    <span className="hljs-string">"courier"</span>: <span className="hljs-string">"MENSAJEROS_URBANOS"</span>,
    <span className="hljs-string">"packages"</span>: [
      {keyLeft}
        <span className="hljs-string">"id"</span>: <span className="hljs-string">"60c225fd17f7a88b7b551ad6"</span>,
        <span className="hljs-string">"orderID"</span>: <span className="hljs-string">"1126170519914-01"</span>,
        <span className="hljs-string">"envelope"</span>: <span className="hljs-string">"ut nostrud"</span>,
        <span className="hljs-string">"dimentions"</span>: {keyLeft}
          <span className="hljs-string">"width"</span>: <span className="hljs-string">"28.55"</span>,
          <span className="hljs-string">"height"</span>: <span className="hljs-string">"33.73"</span>,
          <span className="hljs-string">"length"</span>: <span className="hljs-string">"46.89"</span>
        {keyRight},
        <span className="hljs-string">"weight"</span>: <span className="hljs-string">"3.11"</span>,
        <span className="hljs-string">"courier"</span>: <span className="hljs-string">"MENSAJEROS_URBANOS"</span>,
        <span className="hljs-string">"totalValue"</span>: <span className="hljs-number">773960</span>,
        <span className="hljs-string">"items"</span>: [
          {keyLeft}
            <span className="hljs-string">"id"</span>: <span className="hljs-string">"283499"</span>,
            <span className="hljs-string">"name"</span>: <span className="hljs-string">"Portatil"</span>,
            <span className="hljs-string">"ean"</span>: <span className="hljs-string">"728246016041"</span>,
            <span className="hljs-string">"refId"</span>: <span className="hljs-string">"60c2"</span>,
            <span className="hljs-string">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
            <span className="hljs-string">"price"</span>: <span className="hljs-number">36238</span>,
            <span className="hljs-string">"weight"</span>: <span className="hljs-number">8.32</span>,
            <span className="hljs-string">"quantity"</span>: <span className="hljs-number">2</span>
          {keyRight},
          {keyLeft}
            <span className="hljs-string">"id"</span>: <span className="hljs-string">"557234"</span>,
            <span className="hljs-string">"name"</span>: <span className="hljs-string">"MEsa"</span>,
            <span className="hljs-string">"ean"</span>: <span className="hljs-string">"875276096046"</span>,
            <span className="hljs-string">"refId"</span>: <span className="hljs-string">"60c2"</span>,
            <span className="hljs-string">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
            <span className="hljs-string">"price"</span>: <span className="hljs-number">90508</span>,
            <span className="hljs-string">"weight"</span>: <span className="hljs-number">16.45</span>,
            <span className="hljs-string">"quantity"</span>: <span className="hljs-number">3</span>
          {keyRight},
          {keyLeft}
            <span className="hljs-string">"id"</span>: <span className="hljs-string">"516881"</span>,
            <span className="hljs-string">"name"</span>: <span className="hljs-string">"TV LG"</span>,
            <span className="hljs-string">"ean"</span>: <span className="hljs-string">"112054648514"</span>,
            <span className="hljs-string">"refId"</span>: <span className="hljs-string">"60c2"</span>,
            <span className="hljs-string">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
            <span className="hljs-string">"price"</span>: <span className="hljs-number">62169</span>,
            <span className="hljs-string">"weight"</span>: <span className="hljs-number">32.43</span>,
            <span className="hljs-string">"quantity"</span>: <span className="hljs-number">2</span>
          {keyRight},
          {keyLeft}
            <span className="hljs-string">"id"</span>: <span className="hljs-string">"422549"</span>,
            <span className="hljs-string">"name"</span>: <span className="hljs-string">"MEsa"</span>,
            <span className="hljs-string">"ean"</span>: <span className="hljs-string">"672478506000"</span>,
            <span className="hljs-string">"refId"</span>: <span className="hljs-string">"60c2"</span>,
            <span className="hljs-string">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
            <span className="hljs-string">"price"</span>: <span className="hljs-number">2063</span>,
            <span className="hljs-string">"weight"</span>: <span className="hljs-number">33.14</span>,
            <span className="hljs-string">"quantity"</span>: <span className="hljs-number">2</span>
          {keyRight},
          {keyLeft}
            <span className="hljs-string">"id"</span>: <span className="hljs-string">"792447"</span>,
            <span className="hljs-string">"name"</span>: <span className="hljs-string">"Portatil"</span>,
            <span className="hljs-string">"ean"</span>: <span className="hljs-string">"366315605085"</span>,
            <span className="hljs-string">"refId"</span>: <span className="hljs-string">"60c2"</span>,
            <span className="hljs-string">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
            <span className="hljs-string">"price"</span>: <span className="hljs-number">75374</span>,
            <span className="hljs-string">"weight"</span>: <span className="hljs-number">16.02</span>,
            <span className="hljs-string">"quantity"</span>: <span className="hljs-number">4</span>
          {keyRight}
        ]
      {keyRight},
      {keyLeft}
        <span className="hljs-string">"id"</span>: <span className="hljs-string">"60c225fd2fd01f70fb5532ee"</span>,
        <span className="hljs-string">"orderID"</span>: <span className="hljs-string">"1126170519914-01"</span>,
        <span className="hljs-string">"envelope"</span>: <span className="hljs-string">"ut nostrud"</span>,
        <span className="hljs-string">"dimentions"</span>: {keyLeft}
          <span className="hljs-string">"width"</span>: <span className="hljs-string">"5.29"</span>,
          <span className="hljs-string">"height"</span>: <span className="hljs-string">"27.41"</span>,
          <span className="hljs-string">"length"</span>: <span className="hljs-string">"13.13"</span>
        {keyRight},
        <span className="hljs-string">"weight"</span>: <span className="hljs-string">"39.63"</span>,
        <span className="hljs-string">"courier"</span>: <span className="hljs-string">"MENSAJEROS_URBANOS"</span>,
        <span className="hljs-string">"totalValue"</span>: <span className="hljs-number">971102</span>,
        <span className="hljs-string">"items"</span>: [
          {keyLeft}
            <span className="hljs-string">"id"</span>: <span className="hljs-string">"215394"</span>,
            <span className="hljs-string">"name"</span>: <span className="hljs-string">"TV LG"</span>,
            <span className="hljs-string">"ean"</span>: <span className="hljs-string">"382642863402"</span>,
            <span className="hljs-string">"refId"</span>: <span className="hljs-string">"60c2"</span>,
            <span className="hljs-string">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
            <span className="hljs-string">"price"</span>: <span className="hljs-number">52098</span>,
            <span className="hljs-string">"weight"</span>: <span className="hljs-number">9.25</span>,
            <span className="hljs-string">"quantity"</span>: <span className="hljs-number">2</span>
          {keyRight},
          {keyLeft}
            <span className="hljs-string">"id"</span>: <span className="hljs-string">"670348"</span>,
            <span className="hljs-string">"name"</span>: <span className="hljs-string">"MP3"</span>,
            <span className="hljs-string">"ean"</span>: <span className="hljs-string">"854104188434"</span>,
            <span className="hljs-string">"refId"</span>: <span className="hljs-string">"60c2"</span>,
            <span className="hljs-string">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
            <span className="hljs-string">"price"</span>: <span className="hljs-number">69630</span>,
            <span className="hljs-string">"weight"</span>: <span className="hljs-number">15.48</span>,
            <span className="hljs-string">"quantity"</span>: <span className="hljs-number">4</span>
          {keyRight},
          {keyLeft}
            <span className="hljs-string">"id"</span>: <span className="hljs-string">"200336"</span>,
            <span className="hljs-string">"name"</span>: <span className="hljs-string">"Portatil"</span>,
            <span className="hljs-string">"ean"</span>: <span className="hljs-string">"317714719766"</span>,
            <span className="hljs-string">"refId"</span>: <span className="hljs-string">"60c2"</span>,
            <span className="hljs-string">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
            <span className="hljs-string">"price"</span>: <span className="hljs-number">29408</span>,
            <span className="hljs-string">"weight"</span>: <span className="hljs-number">39.65</span>,
            <span className="hljs-string">"quantity"</span>: <span className="hljs-number">5</span>
          {keyRight},
          {keyLeft}
            <span className="hljs-string">"id"</span>: <span className="hljs-string">"841249"</span>,
            <span className="hljs-string">"name"</span>: <span className="hljs-string">"TV LG"</span>,
            <span className="hljs-string">"ean"</span>: <span className="hljs-string">"531298105066"</span>,
            <span className="hljs-string">"refId"</span>: <span className="hljs-string">"60c2"</span>,
            <span className="hljs-string">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
            <span className="hljs-string">"price"</span>: <span className="hljs-number">35072</span>,
            <span className="hljs-string">"weight"</span>: <span className="hljs-number">38.95</span>,
            <span className="hljs-string">"quantity"</span>: <span className="hljs-number">3</span>
          {keyRight},
          {keyLeft}
            <span className="hljs-string">"id"</span>: <span className="hljs-string">"769129"</span>,
            <span className="hljs-string">"name"</span>: <span className="hljs-string">"Portatil"</span>,
            <span className="hljs-string">"ean"</span>: <span className="hljs-string">"724731726963"</span>,
            <span className="hljs-string">"refId"</span>: <span className="hljs-string">"60c2"</span>,
            <span className="hljs-string">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
            <span className="hljs-string">"price"</span>: <span className="hljs-number">67226</span>,
            <span className="hljs-string">"weight"</span>: <span className="hljs-number">42.42</span>,
            <span className="hljs-string">"quantity"</span>: <span className="hljs-number">5</span>
          {keyRight}
        ]
      {keyRight}
    ]
  {keyRight}
</code></pre>
<p><strong>Response</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: {keyLeft}
        <span className="hljs-attr">"trackingId"</span>: <span className="hljs-string">"60bfd58e5167bdbadacb9abe"</span>,
        <span className="hljs-attr">"serviceId"</span>: <span className="hljs-string">"60c2263960e2f"</span>,
        <span className="hljs-attr">"labels"</span>: [],
        <span className="hljs-attr">"status"</span>: <span className="hljs-string">"PENDING"</span>,
        <span className="hljs-attr">"courier"</span>: <span className="hljs-string">"MENSAJEROS_URBANOS"</span>,
        <span className="hljs-attr">"tracking_url"</span>: <span className="hljs-string">""</span>,
        <span className="hljs-attr">"createdDateTime"</span>: <span className="hljs-string">"2021-06-10T14:48:26.053Z"</span>,
        <span className="hljs-attr">"pickedDateTime"</span>: <span className="hljs-string">""</span>,
        <span className="hljs-attr">"startedDateTime"</span>: <span className="hljs-string">""</span>,
        <span className="hljs-attr">"completedDateTime"</span>: <span className="hljs-string">""</span>,
        <span className="hljs-attr">"total_distance_travelled"</span>: <span className="hljs-number">0</span>,
        <span className="hljs-attr">"rating"</span>: <span className="hljs-literal">null</span>,
        <span className="hljs-attr">"comments"</span>: <span className="hljs-string">""</span>,
        <span className="hljs-attr">"evidences"</span>: <span className="hljs-string">""</span>,
        <span className="hljs-attr">"packages"</span>: [
            {keyLeft}
                <span className="hljs-attr">"id"</span>: <span className="hljs-string">"60c225fd17f7a88b7b551ad6"</span>,
                <span className="hljs-attr">"orderID"</span>: <span className="hljs-string">"1126170519914-01"</span>,
                <span className="hljs-attr">"envelope"</span>: <span className="hljs-string">"ut nostrud"</span>,
                <span className="hljs-attr">"dimentions"</span>: {keyLeft}
                    <span className="hljs-attr">"width"</span>: <span className="hljs-string">"28.55"</span>,
                    <span className="hljs-attr">"height"</span>: <span className="hljs-string">"33.73"</span>,
                    <span className="hljs-attr">"length"</span>: <span className="hljs-string">"46.89"</span>
                {keyRight},
                <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"3.11"</span>,
                <span className="hljs-attr">"courier"</span>: <span className="hljs-string">"MENSAJEROS_URBANOS"</span>,
                <span className="hljs-attr">"totalValue"</span>: <span className="hljs-number">773960</span>,
                <span className="hljs-attr">"items"</span>: [
                    {keyLeft}
                        <span className="hljs-attr">"id"</span>: <span className="hljs-string">"283499"</span>,
                        <span className="hljs-attr">"name"</span>: <span className="hljs-string">"Portatil"</span>,
                        <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"728246016041"</span>,
                        <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                        <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                        <span className="hljs-attr">"price"</span>: <span className="hljs-number">36238</span>,
                        <span className="hljs-attr">"weight"</span>: <span className="hljs-number">8.32</span>,
                        <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">2</span>
                    {keyRight},
                    {keyLeft}
                        <span className="hljs-attr">"id"</span>: <span className="hljs-string">"557234"</span>,
                        <span className="hljs-attr">"name"</span>: <span className="hljs-string">"MEsa"</span>,
                        <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"875276096046"</span>,
                        <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                        <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                        <span className="hljs-attr">"price"</span>: <span className="hljs-number">90508</span>,
                        <span className="hljs-attr">"weight"</span>: <span className="hljs-number">16.45</span>,
                        <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">3</span>
                    {keyRight},
                    {keyLeft}
                        <span className="hljs-attr">"id"</span>: <span className="hljs-string">"516881"</span>,
                        <span className="hljs-attr">"name"</span>: <span className="hljs-string">"TV LG"</span>,
                        <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"112054648514"</span>,
                        <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                        <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                        <span className="hljs-attr">"price"</span>: <span className="hljs-number">62169</span>,
                        <span className="hljs-attr">"weight"</span>: <span className="hljs-number">32.43</span>,
                        <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">2</span>
                    {keyRight},
                    {keyLeft}
                        <span className="hljs-attr">"id"</span>: <span className="hljs-string">"422549"</span>,
                        <span className="hljs-attr">"name"</span>: <span className="hljs-string">"MEsa"</span>,
                        <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"672478506000"</span>,
                        <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                        <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                        <span className="hljs-attr">"price"</span>: <span className="hljs-number">2063</span>,
                        <span className="hljs-attr">"weight"</span>: <span className="hljs-number">33.14</span>,
                        <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">2</span>
                    {keyRight},
                    {keyLeft}
                        <span className="hljs-attr">"id"</span>: <span className="hljs-string">"792447"</span>,
                        <span className="hljs-attr">"name"</span>: <span className="hljs-string">"Portatil"</span>,
                        <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"366315605085"</span>,
                        <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                        <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                        <span className="hljs-attr">"price"</span>: <span className="hljs-number">75374</span>,
                        <span className="hljs-attr">"weight"</span>: <span className="hljs-number">16.02</span>,
                        <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">4</span>
                    {keyRight}
                ]
            {keyRight},
            {keyLeft}
                <span className="hljs-attr">"id"</span>: <span className="hljs-string">"60c225fd2fd01f70fb5532ee"</span>,
                <span className="hljs-attr">"orderID"</span>: <span className="hljs-string">"1126170519914-01"</span>,
                <span className="hljs-attr">"envelope"</span>: <span className="hljs-string">"ut nostrud"</span>,
                <span className="hljs-attr">"dimentions"</span>: {keyLeft}
                    <span className="hljs-attr">"width"</span>: <span className="hljs-string">"5.29"</span>,
                    <span className="hljs-attr">"height"</span>: <span className="hljs-string">"27.41"</span>,
                    <span className="hljs-attr">"length"</span>: <span className="hljs-string">"13.13"</span>
                {keyRight},
                <span className="hljs-attr">"weight"</span>: <span className="hljs-string">"39.63"</span>,
                <span className="hljs-attr">"courier"</span>: <span className="hljs-string">"MENSAJEROS_URBANOS"</span>,
                <span className="hljs-attr">"totalValue"</span>: <span className="hljs-number">971102</span>,
                <span className="hljs-attr">"items"</span>: [
                    {keyLeft}
                        <span className="hljs-attr">"id"</span>: <span className="hljs-string">"215394"</span>,
                        <span className="hljs-attr">"name"</span>: <span className="hljs-string">"TV LG"</span>,
                        <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"382642863402"</span>,
                        <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                        <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                        <span className="hljs-attr">"price"</span>: <span className="hljs-number">52098</span>,
                        <span className="hljs-attr">"weight"</span>: <span className="hljs-number">9.25</span>,
                        <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">2</span>
                    {keyRight},
                    {keyLeft}
                        <span className="hljs-attr">"id"</span>: <span className="hljs-string">"670348"</span>,
                        <span className="hljs-attr">"name"</span>: <span className="hljs-string">"MP3"</span>,
                        <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"854104188434"</span>,
                        <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                        <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                        <span className="hljs-attr">"price"</span>: <span className="hljs-number">69630</span>,
                        <span className="hljs-attr">"weight"</span>: <span className="hljs-number">15.48</span>,
                        <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">4</span>
                    {keyRight},
                    {keyLeft}
                        <span className="hljs-attr">"id"</span>: <span className="hljs-string">"200336"</span>,
                        <span className="hljs-attr">"name"</span>: <span className="hljs-string">"Portatil"</span>,
                        <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"317714719766"</span>,
                        <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                        <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                        <span className="hljs-attr">"price"</span>: <span className="hljs-number">29408</span>,
                        <span className="hljs-attr">"weight"</span>: <span className="hljs-number">39.65</span>,
                        <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">5</span>
                    {keyRight},
                    {keyLeft}
                        <span className="hljs-attr">"id"</span>: <span className="hljs-string">"841249"</span>,
                        <span className="hljs-attr">"name"</span>: <span className="hljs-string">"TV LG"</span>,
                        <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"531298105066"</span>,
                        <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                        <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                        <span className="hljs-attr">"price"</span>: <span className="hljs-number">35072</span>,
                        <span className="hljs-attr">"weight"</span>: <span className="hljs-number">38.95</span>,
                        <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">3</span>
                    {keyRight},
                    {keyLeft}
                        <span className="hljs-attr">"id"</span>: <span className="hljs-string">"769129"</span>,
                        <span className="hljs-attr">"name"</span>: <span className="hljs-string">"Portatil"</span>,
                        <span className="hljs-attr">"ean"</span>: <span className="hljs-string">"724731726963"</span>,
                        <span className="hljs-attr">"refId"</span>: <span className="hljs-string">"60c2"</span>,
                        <span className="hljs-attr">"image"</span>: <span className="hljs-string">"http://placehold.it/32x32"</span>,
                        <span className="hljs-attr">"price"</span>: <span className="hljs-number">67226</span>,
                        <span className="hljs-attr">"weight"</span>: <span className="hljs-number">42.42</span>,
                        <span className="hljs-attr">"quantity"</span>: <span className="hljs-number">5</span>
                    {keyRight}
                ]
            {keyRight}
        ]
    {keyRight}
{keyRight}
</code></pre>
<p>:::</p>
<h2 id="mensajeros-urbanos-post-label">Mensajeros urbanos Post /label</h2>
<p>Create label of delivery for Mensajeros Urbanos</p>
<p>_Authentication: COGNITO_USER<em>POOLS</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"serviceId"</span>: <span className="hljs-string">"string"</span>
{keyRight}
</code></pre>
<p><strong>Response with status code 200</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"string"</span>,
    <span className="hljs-attr">"data"</span>: {keyLeft}
        <span className="hljs-attr">"fileUrl"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"name"</span>: <span className="hljs-string">"string"</span>,
        <span className="hljs-attr">"id"</span>: <span className="hljs-string">"string"</span>
    {keyRight}
{keyRight}
</code></pre>
<p><strong>Codes errors</strong></p>
<table className="table border p-2">
   <thead>
      <tr>
         <th >Status code</th>
         <th >Code</th>
         <th >Message</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td >200</td>
         <td >1000</td>
         <td >LabelController: Input invalid</td>
      </tr>
      <tr>
         <td >200</td>
         <td >1000</td>
         <td >Failed to create delivery label</td>
      </tr>
   </tbody>
</table>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><strong>Request</strong></p>
<p><em>POST - {keyLeft}hosts{keyRight}/label</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"serviceId"</span>: <span className="hljs-string">"280292750"</span>
{keyRight}
</code></pre>
<p><strong>Response</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"message"</span>: <span className="hljs-string">"success"</span>,
    <span className="hljs-attr">"data"</span>: {keyLeft}
        <span className="hljs-attr">"fileUrl"</span>: <span className="hljs-string">"https://fulfillment-tracking-labels-buckets.s3.amazonaws.com/deliveries/4a885b55-92ab-4650-8899-123455782ca1.pdf"</span>,
        <span className="hljs-attr">"name"</span>: <span className="hljs-string">"4a885b55-92ab-4650-8899-123455782ca1.pdf"</span>,
        <span className="hljs-attr">"id"</span>: <span className="hljs-string">"4a885b55-92ab-4650-8899-123455782ca1.pdf"</span>
    {keyRight}
{keyRight}
</code></pre>
<p>:::</p>
<h2 id="mensajeros-urbanos-post-service-hook">Mensajeros urbanos Post /service-hook</h2>
<p>Web hook for Mensajeros Urbanos</p>
<p><em>Authentication: None</em></p>
<p><strong>Example</strong></p>
<p>::: details</p>
<p><em>This request is sent by Mensajeros Urbanos to vtex</em></p>
<p><strong>Body</strong></p>
<pre><code className="lang-js">{keyLeft}
    <span className="hljs-attr">"token"</span>: <span className="hljs-string">""</span>,
    <span className="hljs-attr">"id_company"</span>: <span className="hljs-string">"145479"</span>,
    <span className="hljs-attr">"type"</span>: <span className="hljs-literal">null</span>,
    <span className="hljs-attr">"date"</span>: <span className="hljs-string">"2021-12-11 16:07:55"</span>,
    <span className="hljs-attr">"order_id"</span>: <span className="hljs-string">"Y101518503_100475380_FCVColombia"</span>,
    <span className="hljs-attr">"details"</span>: {keyLeft}
        <span className="hljs-attr">"uuid"</span>: <span className="hljs-string">"60c2263960e2f"</span>,
        <span className="hljs-attr">"status"</span>: <span className="hljs-string">"in_progress"</span>,
        <span className="hljs-attr">"status_id"</span>: <span className="hljs-number">5</span>,
        <span className="hljs-attr">"num_place"</span>: <span className="hljs-number">1</span>,
        <span className="hljs-attr">"status_place"</span>: <span className="hljs-number">2</span>,
        <span className="hljs-attr">"url"</span>: <span className="hljs-string">"https://mensajerosurbanos.m/track-service-external#!#%3Fuuid=5ff5efb31d1a2"</span>,
        <span className="hljs-attr">"mensajero"</span>: <span className="hljs-string">"Juan Carlos Sanchez"</span>,
        <span className="hljs-attr">"phone"</span>: <span className="hljs-string">"3041202141"</span>,
        <span className="hljs-attr">"vehicle_plate"</span>: <span className="hljs-string">""</span>,
        <span className="hljs-attr">"photo_url"</span>: <span className="hljs-string">"https:\/\/devmuadmin.s3.us-west-2.amazonaws.com\/images\/recursos\/foto29.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAZETM5LSRV4ZOL4ES%2F20210205%2Fus-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20210205T150802Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=300&amp;X-Amz-Signature=a92604b9f6c2b9203c581f8d1ef9d96f169d84d8fe232207238ba616bde85477"</span>,
        <span className="hljs-attr">"order_id"</span>: <span className="hljs-string">"Y101518503_100475380_FCVColombia"</span>
    {keyRight},
    <span className="hljs-attr">"headers"</span>: [
        <span className="hljs-string">"Content-Type: application\/json"</span>,
        <span className="hljs-string">"X-API-KEY: 1c3b7c9b-27ca-4199-917b-f633e2f32bc4"</span>,
        <span className="hljs-string">"X-IBM-Client-id: 1c3b7c9b-27ca-4199-917b-f633e2f32bc4"</span>,
        <span className="hljs-string">"Authorization: 1c3b7c9b-27ca-4199-917b-f633e2f32bc4"</span>
    ]
{keyRight}
</code></pre>
<p>:::</p>
                        </div>

                </div>
            </div>
        </Fragment>
    )
}

export default About;
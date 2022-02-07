import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const About = ({ language, lightBox }) => {
    const keyLeft = `{`;
    const keyRight = `}`;
    useEffect(() => {
        lightBox();
    });
    return (
        <Fragment>
            <div className="container-fluid mt-5 pt-5">
                <div className="row">
                    <div className="col-lg-3 border-bottom">
                        <div className="sticky-top-2 p-3"><h3 className="text-vtex">Contenido</h3><ul className="sidebar-links"><li className="sidebar-sub-header"><a href="#auth" className="sidebar-link">Auth</a><ul><li className="sidebar-sub-header"><a href="#generate-api-key" className="sidebar-link">Generate Api-Key</a></li><li className="sidebar-sub-header"><a href="#post-token" className="sidebar-link">POST - /token</a></li><li className="sidebar-sub-header"><a href="#patch-token" className="sidebar-link">PATCH - /token</a></li></ul></li><li className="sidebar-sub-header"><a href="#auth_with_api_key" className="sidebar-link">Auth with Api Key</a><ul><li className="sidebar-sub-header"><a href="#post-api-key" className="sidebar-link">POST - /api-key</a></li><li className="sidebar-sub-header"><a href="#post-token-2" className="sidebar-link">POST - /token</a></li></ul></li><li className="sidebar-sub-header"><a href="#picking_and_tracking" className="sidebar-link">Picking and Tracking</a><ul><li className="sidebar-sub-header"><a href="#get-picking-tracking" className="sidebar-link">GET - /picking-tracking/{'{orderId}'}</a></li></ul></li></ul></div>
                    </div>
                    <div className="col-lg-1"></div>

                    <div className="col-lg-6 p-3">
                        <div>
                            <h2 id="auth" className="pt-0">Auth</h2><div><strong>Development</strong><br/><small className="bg-light p-1">https://xdaykews3f.execute-api.us-east-1.amazonaws.com/dev</small><br/><br/><strong>Production</strong><br/><small className="bg-light p-1">https://n5vvv2349b.execute-api.us-east-1.amazonaws.com/prod</small></div><div className="d-block mt-3"><a href="/users#generate-api-key" className="text-vtex"><h5 id="generate-api-key"><strong>Generate Api-Key<i className="fas fa-external-link-alt" aria-hidden="true"></i></strong></h5></a></div><ul><li className="mt-3"><h5 id="post-token"><strong>POST - /token</strong></h5><div className="alert alert-primary p-2 mt-3" role="alert">Create token of authentication</div><small className="text-muted">Authentication: <strong className="text-dark">None</strong></small><div className="accordion accordion-flush mt-3"><div className="accordion-item border"><h2 className="accordion-header pt-0"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-5">code example</button></h2><div id="flush-5" className="accordion-collapse collapse"><div className="accordion-body"><code><div className="text-dark">Body</div><textarea className="form-control" disabled="">{
`{
    "apiKey": "string"
}`}</textarea><div className="text-dark mt-4">Response with status code 200</div><textarea className="form-control" disabled="">{`{
    "message": "string",
    "data": "string"
}`}</textarea></code></div></div></div></div><div className="accordion accordion-flush mt-3"><div className="accordion-item border"><h2 className="accordion-header pt-0"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-6">code errors</button></h2><div id="flush-6" className="accordion-collapse collapse"><div className="accordion-body"><table className="table"><thead><tr><th scope="col">Status code</th><th scope="col">Code</th><th scope="col">Message</th></tr></thead><tbody><tr><td>401</td><td>1000</td><td>Api key invalid</td></tr><tr><td>500</td><td>1000</td><td>Error try to create token</td></tr></tbody></table></div></div></div></div></li><li className="mt-4"><h5 id="patch-token"><strong>PATCH - /token</strong></h5><div className="alert alert-primary p-2 mt-3" role="alert">Service for refresh token</div><small className="text-muted">Authentication: <strong className="text-dark">None</strong></small><div className="accordion accordion-flush mt-3"><div className="accordion-item border"><h2 className="accordion-header pt-0"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-7">code example</button></h2><div id="flush-7" className="accordion-collapse collapse"><div className="accordion-body"><code><div className="text-dark">Body</div><textarea className="form-control" disabled="">{`{
    "token": "string"
}`}</textarea><div className="text-dark mt-4">Response with status code 200</div><textarea className="form-control" disabled="">{`{
    "message": "string",
    "data": "string"
}`}</textarea></code></div></div></div></div><div className="accordion accordion-flush mt-3"><div className="accordion-item border"><h2 className="accordion-header pt-0"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-8">code errors</button></h2><div id="flush-8" className="accordion-collapse collapse"><div className="accordion-body"><table className="table"><thead><tr><th scope="col">Status code</th><th scope="col">Code</th><th scope="col">Message</th></tr></thead><tbody><tr><td>401</td><td>1000</td><td>Access token is not set</td></tr><tr><td>401</td><td>1000</td><td>Token invalid</td></tr><tr><td>401</td><td>1000</td><td>Api key invalid</td></tr><tr><td>500</td><td>1000</td><td>Error try to refresh token</td></tr></tbody></table></div></div></div></div></li></ul></div><div><h2 id="auth_with_api_key">Auth with Api Key</h2><div><strong>Development</strong><br/><small className="bg-light p-1">https://sqbcgzrn17.execute-api.us-east-1.amazonaws.com/dev</small><br/><br/><strong>Production</strong><br/><small className="bg-light p-1">https://7hfj0xjmzd.execute-api.us-east-1.amazonaws.com/prod</small></div><ul><li className="mt-4"><h5 id="post-api-key"><strong>POST - /api-key</strong></h5><div className="alert alert-primary p-2 mt-3" role="alert">Create api key custom based on username</div><small className="text-muted">Authentication: <strong className="text-dark">COGNITO_USER_POOLS</strong></small><div className="accordion accordion-flush mt-3"><div className="accordion-item border"><h2 className="accordion-header pt-0"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-9">code example</button></h2><div id="flush-9" className="accordion-collapse collapse"><div className="accordion-body"><code><div className="text-dark">Body</div><textarea className="form-control" disabled="">{`{
    "username": "string",
    "hostname": "string"
}`}</textarea><div className="text-dark mt-4">Response with status code 200</div><textarea className="form-control" disabled="">{`{
    "message": "string",
    "data": "string"
}`}</textarea></code></div></div></div></div><div className="accordion accordion-flush mt-3"><div className="accordion-item border"><h2 className="accordion-header pt-0"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-10">code errors</button></h2><div id="flush-10" className="accordion-collapse collapse"><div className="accordion-body"><table className="table"><thead><tr><th scope="col">Status code</th><th scope="col">Code</th><th scope="col">Message</th></tr></thead><tbody><tr><td>500</td><td>1000</td><td>Internal server error | *</td></tr><tr><td>404</td><td>1001</td><td>Resource not found</td></tr><tr><td>400</td><td>1002</td><td>Body invalid</td></tr><tr><td>400</td><td>1006</td><td>* (User errors codes 👇)</td></tr></tbody></table></div></div></div></div></li><li className="mt-4"><h5 id="post-token-2"><strong>POST - /token</strong></h5><div className="alert alert-primary p-2 mt-3" role="alert">Create JWT</div><small className="text-muted">Authentication: <strong className="text-dark">None</strong></small><div className="accordion accordion-flush mt-3"><div className="accordion-item border"><h2 className="accordion-header pt-0"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-11">code example</button></h2><div id="flush-11" className="accordion-collapse collapse"><div className="accordion-body"><code><div className="text-dark">Body</div><textarea className="form-control" disabled="">{`{
    "apiKey": "string"
}`}</textarea><div className="text-dark mt-4">Response with status code 200</div><textarea className="form-control" disabled="">{`{
    "message": "string",
    "data": "string"
}`}</textarea></code></div></div></div></div><div className="accordion accordion-flush mt-3"><div className="accordion-item border"><h2 className="accordion-header pt-0"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-12">code errors</button></h2><div id="flush-12" className="accordion-collapse collapse"><div className="accordion-body"><table className="table"><thead><tr><th scope="col">Status code</th><th scope="col">Code</th><th scope="col">Message</th></tr></thead><tbody><tr><td>500</td><td>1000</td><td>Internal server error | *</td></tr><tr><td>404</td><td>1001</td><td>Resource not found</td></tr><tr><td>400</td><td>1002</td><td>Body invalid</td></tr><tr><td>400</td><td>1004</td><td>Text invalid for decrypt</td></tr><tr><td>400</td><td>1005</td><td>Api key not is active</td></tr><tr><td>400</td><td>1006</td><td>* (User errors codes 👇)</td></tr></tbody></table></div></div></div></div></li></ul></div><div><h2 id="picking_and_tracking">Picking and Tracking</h2><div><strong>Development</strong><br/><small className="bg-light p-1">https://su4nrryt64.execute-api.us-east-1.amazonaws.com/dev</small><br/><br/><strong>Production</strong><br/><small className="bg-light p-1">https://y0vf0wreo3.execute-api.us-east-1.amazonaws.com/prod</small></div><ul><li className="mt-4"><h5 id="get-picking-tracking"><strong>GET - /picking-tracking/{'{orderId}'}</strong></h5><div className="alert alert-primary p-2 mt-3" role="alert">Get overview of packing and tracking</div><small className="text-muted">Authentication: <strong className="text-dark">API_KEY_CUSTOM_AUTH</strong></small><div className="accordion accordion-flush mt-3"><div className="accordion-item border"><h2 className="accordion-header pt-0"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-13">code example</button></h2><div id="flush-13" className="accordion-collapse collapse"><div className="accordion-body"><code><div className="text-dark mt-4">Response with status code 200</div><textarea className="form-control" disabled="">{`{
                                        "message": "string",
                                        "data": {
                                            "hostname": "string",
                                        "orderId": "string",
                                        "fulfillmentStatus": "string",
                                        "shipping"?: {
                                            "trackingId": "string",
                                        "trackingStatus": "string",
                                        "services"?: [
                                        {
                                            "serviceId": "string",
                                        "agent"?: "string",
                                        "vehicle"?: "string",
                                        "courier": "string",
                                        "trackingUrl"?: "string",
                                        "serviceStatus": "string",
                                        "evidences"?: "string",
                                        "createdAt": "string"
                }
                                        ]
        }
    }
}`}</textarea></code></div></div></div></div><div className="accordion accordion-flush mt-3"><div className="accordion-item border"><h2 className="accordion-header pt-0"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-14">code errors</button></h2><div id="flush-14" className="accordion-collapse collapse"><div className="accordion-body"><table className="table"><thead><tr><th scope="col">Status code</th><th scope="col">Code</th><th scope="col">Message</th></tr></thead><tbody><tr><td>401</td><td>1000</td><td>* | Internal server</td></tr><tr><td>404</td><td>1001</td><td>Resource not found</td></tr><tr><td>400</td><td>1002</td><td>OrderId not found | Order not found by {'{orderId}'}</td></tr><tr><td>500</td><td>1003</td><td>* | Error in Elasticsearch</td></tr></tbody></table></div></div></div></div></li></ul></div></div>

                                    </div>
                                    </div>
                                </Fragment>
                                    )
}

                                    export default About;
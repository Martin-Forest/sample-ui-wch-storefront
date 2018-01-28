/* jshint ignore:start */
/*
 * Copyright IBM Corp. 2017
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

/* beautify ignore:start */
import { URLSearchParams } from '@angular/http';
import { HttpResponse, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { TransactionService } from "./transaction.service";
import { CommerceEnvironment } from "../../../commerce.environment";
/* beautify ignore:end */

export class GeonodeService extends TransactionService {

    /**
     * Gets the top geo nodes.
     * `@method`
     * `@name Geonode#findTopGeoNodes`
     *
     * `@param {any} headers (optional)` will add headers to rest request
     *
     * `@param {string} url (optional)` will override the default domain used by the service. Url can be relative or absolute
     *
     * `@param {any} parameters` have following properties:
     ** `@property {any} pathParameters` the list of path parameters. If a path parameter was not found, the same named property in `parameters` will be used.
     ** `@property {string} storeId (required)` The child property of `pathParameters`. If not specified in `pathParameters`, the same named property in `parameters` will be used. The store identifier.
     ** `@property {string} responseFormat ` The response format. If the request has an input body, that body must also use the format specified in "responseFormat". Valid values include "json" and "xml" without the quotes. If the responseFormat isn't specified, the "accept" HTTP header shall be used to determine the format of the response. If the "accept" HTTP header isn't specified as well, the default response format shall be in json.
     ** `@property {string} siteLevelSearch ` The site level search flag.  If it is 'true', a site level search will be performed; otherwise, a store level search will be performed.  Optional parameter; when it is not set, it is defaulted to 'true'.
     */
    findTopGeoNodes(parameters: any, headers ? : any, url ? : string): Observable < HttpResponse < any >> {
        let useMocks = false;
        //Set domain based on profile.
        if (url && url === 'mocks') {
            url = undefined;
            useMocks = true;
        }
        let domain = url || this.getRequestUrl();
        let path = '/store/{storeId}/geonode/byTopGeoNode';
        let requestUrl = domain + path;
        let method = 'GET';
        if (CommerceEnvironment.transactionUseMocks || useMocks) {
            method = 'GET';
            requestUrl = 'mocks/commerce/transaction' + path + '.findTopGeoNodes.mocks.json';
        }
        let form = {};
        let body = {};
        let header: HttpHeaders;
        let queryParameters = new HttpParams();
        let formParams = new URLSearchParams();
        if (typeof headers === 'undefined' || headers === null) {
            header = new HttpHeaders();
        } else {
            header = new HttpHeaders(headers);
        }
        if (parameters === undefined) {
            parameters = {};
        }
        if (parameters.pathParameters === undefined) {
            parameters.pathParameters = {};
        }

        let headerValues = {};
        headerValues['Accept'] = ['application/json', 'application/xml', 'application/xhtml+xml', 'application/atom+xml'];
        for (let val of headerValues['Accept']) {
            header = header.append('Accept', val);
        }

        //allow use of param with or without underscore
        parameters['storeId'] = parameters['storeId'] || parameters['storeId'];
        parameters.pathParameters['storeId'] = parameters.pathParameters['storeId'] || parameters.pathParameters['storeId'];
        if (parameters.pathParameters['storeId'] === undefined) {
            parameters.pathParameters['storeId'] = parameters['storeId'];
        }
        requestUrl = requestUrl.replace('{storeId}', parameters.pathParameters['storeId']);

        if (parameters.pathParameters['storeId'] === undefined) {
            throw new Error("Request '/store/{storeId}/geonode/byTopGeoNode' missing required parameter storeId");
        }

        //allow use of param with or without underscore
        parameters['responseFormat'] = parameters['responseFormat'] || parameters['responseFormat'];
        if (parameters['responseFormat'] !== undefined) {
            queryParameters = queryParameters.set('responseFormat', parameters['responseFormat']);
        }

        //allow use of param with or without underscore
        parameters['siteLevelSearch'] = parameters['siteLevelSearch'] || parameters['siteLevelSearch'];
        if (parameters['siteLevelSearch'] !== undefined) {
            queryParameters = queryParameters.set('siteLevelSearch', parameters['siteLevelSearch']);
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters = queryParameters.set(parameterName, parameter);
                });
        }

        if (!header.get('Content-Type')) {
            header = header.append('Content-Type', 'application/json; charset=utf-8');
        }

        if (header.getAll('Accept').indexOf('application/json') > -1) {
            header = header.set('Accept', 'application/json');
        }

        if (header.get('content-type') === 'multipart/form-data' && Object.keys(form).length > 0) {
            let formData = new FormData();
            for (let p in form) {
                if (form[p].name !== undefined) {
                    formData.append(p, form[p], form[p].name);
                } else {
                    formData.append(p, form[p]);
                }
            }
            body = formData;
        } else if (Object.keys(form).length > 0) {
            header = header.set('content-type', 'application/x-www-form-urlencoded');
            for (let p in form) {
                formParams.append(p, form[p]);
            }
            body = formParams;
        }
        let requestOptions = {
            'params': queryParameters,
            'method': method,
            'headers': header,
            'body': body,
            'url': requestUrl
        };

        return this.invokeService(requestOptions);
    };

    /**
     * Gets the top geo nodes for the site.
     * `@method`
     * `@name Geonode#findTopGeoNodes`
     *
     * `@param {any} headers (optional)` will add headers to rest request
     *
     * `@param {string} url (optional)` will override the default domain used by the service. Url can be relative or absolute
     *
     * `@param {any} parameters` have following properties:
     ** `@property {any} pathParameters` the list of path parameters. If a path parameter was not found, the same named property in `parameters` will be used.
     ** `@property {string} storeId (required)` The child property of `pathParameters`. If not specified in `pathParameters`, the same named property in `parameters` will be used. The store identifier.
     ** `@property {string} responseFormat ` The response format. If the request has an input body, that body must also use the format specified in "responseFormat". Valid values include "json" and "xml" without the quotes. If the responseFormat isn't specified, the "accept" HTTP header shall be used to determine the format of the response. If the "accept" HTTP header isn't specified as well, the default response format shall be in json.
     */
    // findTopGeoNodes(parameters: any, headers ? : any, url ? : string): Observable < HttpResponse < any >> {
    //     let useMocks = false;
    //     //Set domain based on profile.
    //     if (url && url === 'mocks') {
    //         url = undefined;
    //         useMocks = true;
    //     }
    //     let domain = url || this.getRequestUrl();
    //     let path = '/store/{storeId}/geonode/byTopGeoNode';
    //     let requestUrl = domain + path;
    //     let method = 'GET';
    //     if (CommerceEnvironment.transactionUseMocks || useMocks) {
    //         method = 'GET';
    //         requestUrl = 'mocks/commerce/transaction' + path + '.findTopGeoNodes.mocks.json';
    //     }
    //     let form = {};
    //     let body = {};
    //     let header: HttpHeaders;
    //     let queryParameters = new HttpParams();
    //     let formParams = new URLSearchParams();
    //     if (typeof headers === 'undefined' || headers === null) {
    //         header = new HttpHeaders();
    //     } else {
    //         header = new HttpHeaders(headers);
    //     }
    //     if (parameters === undefined) {
    //         parameters = {};
    //     }
    //     if (parameters.pathParameters === undefined) {
    //         parameters.pathParameters = {};
    //     }

    //     let headerValues = {};
    //     headerValues['Accept'] = ['application/json', 'application/xml', 'application/xhtml+xml', 'application/atom+xml'];
    //     for (let val of headerValues['Accept']) {
    //         header = header.append('Accept', val);
    //     }

    //     //allow use of param with or without underscore
    //     parameters['storeId'] = parameters['storeId'] || parameters['storeId'];
    //     parameters.pathParameters['storeId'] = parameters.pathParameters['storeId'] || parameters.pathParameters['storeId'];
    //     if (parameters.pathParameters['storeId'] === undefined) {
    //         parameters.pathParameters['storeId'] = parameters['storeId'];
    //     }
    //     requestUrl = requestUrl.replace('{storeId}', parameters.pathParameters['storeId']);

    //     if (parameters.pathParameters['storeId'] === undefined) {
    //         throw new Error("Request '/store/{storeId}/geonode/byTopGeoNode' missing required parameter storeId");
    //     }

    //     //allow use of param with or without underscore
    //     parameters['responseFormat'] = parameters['responseFormat'] || parameters['responseFormat'];
    //     if (parameters['responseFormat'] !== undefined) {
    //         queryParameters = queryParameters.set('responseFormat', parameters['responseFormat']);
    //     }

    //     if (parameters.$queryParameters) {
    //         Object.keys(parameters.$queryParameters)
    //             .forEach(function(parameterName) {
    //                 var parameter = parameters.$queryParameters[parameterName];
    //                 queryParameters = queryParameters.set(parameterName, parameter);
    //             });
    //     }

    //     if (!header.get('Content-Type')) {
    //         header = header.append('Content-Type', 'application/json; charset=utf-8');
    //     }

    //     if (header.getAll('Accept').indexOf('application/json') > -1) {
    //         header = header.set('Accept', 'application/json');
    //     }

    //     if (header.get('content-type') === 'multipart/form-data' && Object.keys(form).length > 0) {
    //         let formData = new FormData();
    //         for (let p in form) {
    //             if (form[p].name !== undefined) {
    //                 formData.append(p, form[p], form[p].name);
    //             } else {
    //                 formData.append(p, form[p]);
    //             }
    //         }
    //         body = formData;
    //     } else if (Object.keys(form).length > 0) {
    //         header = header.set('content-type', 'application/x-www-form-urlencoded');
    //         for (let p in form) {
    //             formParams.append(p, form[p]);
    //         }
    //         body = formParams;
    //     }
    //     let requestOptions = {
    //         'params': queryParameters,
    //         'method': method,
    //         'headers': header,
    //         'body': body,
    //         'url': requestUrl
    //     };

    //     return this.invokeService(requestOptions);
    // };

    /**
     * Gets the geo nodes by the parent geo node unique ID.
     * `@method`
     * `@name Geonode#findGeoByParentGeoId`
     *
     * `@param {any} headers (optional)` will add headers to rest request
     *
     * `@param {string} url (optional)` will override the default domain used by the service. Url can be relative or absolute
     *
     * `@param {any} parameters` have following properties:
     ** `@property {any} pathParameters` the list of path parameters. If a path parameter was not found, the same named property in `parameters` will be used.
     ** `@property {string} storeId (required)` The child property of `pathParameters`. If not specified in `pathParameters`, the same named property in `parameters` will be used. The store identifier.
     ** `@property {string} parentgeoid (required)` The child property of `pathParameters`. If not specified in `pathParameters`, the same named property in `parameters` will be used. The parent geo node identifier.
     ** `@property {string} responseFormat ` The response format. If the request has an input body, that body must also use the format specified in "responseFormat". Valid values include "json" and "xml" without the quotes. If the responseFormat isn't specified, the "accept" HTTP header shall be used to determine the format of the response. If the "accept" HTTP header isn't specified as well, the default response format shall be in json.
     */
    findGeoByParentGeoId(parameters: any, headers ? : any, url ? : string): Observable < HttpResponse < any >> {
        let useMocks = false;
        //Set domain based on profile.
        if (url && url === 'mocks') {
            url = undefined;
            useMocks = true;
        }
        let domain = url || this.getRequestUrl();
        let path = '/store/{storeId}/geonode/byParentGeoNode/{parentgeoid}';
        let requestUrl = domain + path;
        let method = 'GET';
        if (CommerceEnvironment.transactionUseMocks || useMocks) {
            method = 'GET';
            requestUrl = 'mocks/commerce/transaction' + path + '.findGeoByParentGeoId.mocks.json';
        }
        let form = {};
        let body = {};
        let header: HttpHeaders;
        let queryParameters = new HttpParams();
        let formParams = new URLSearchParams();
        if (typeof headers === 'undefined' || headers === null) {
            header = new HttpHeaders();
        } else {
            header = new HttpHeaders(headers);
        }
        if (parameters === undefined) {
            parameters = {};
        }
        if (parameters.pathParameters === undefined) {
            parameters.pathParameters = {};
        }

        let headerValues = {};
        headerValues['Accept'] = ['application/json', 'application/xml', 'application/xhtml+xml', 'application/atom+xml'];
        for (let val of headerValues['Accept']) {
            header = header.append('Accept', val);
        }

        //allow use of param with or without underscore
        parameters['storeId'] = parameters['storeId'] || parameters['storeId'];
        parameters.pathParameters['storeId'] = parameters.pathParameters['storeId'] || parameters.pathParameters['storeId'];
        if (parameters.pathParameters['storeId'] === undefined) {
            parameters.pathParameters['storeId'] = parameters['storeId'];
        }
        requestUrl = requestUrl.replace('{storeId}', parameters.pathParameters['storeId']);

        if (parameters.pathParameters['storeId'] === undefined) {
            throw new Error("Request '/store/{storeId}/geonode/byParentGeoNode/{parentgeoid}' missing required parameter storeId");
        }

        //allow use of param with or without underscore
        parameters['parentgeoid'] = parameters['parentgeoid'] || parameters['parentgeoid'];
        parameters.pathParameters['parentgeoid'] = parameters.pathParameters['parentgeoid'] || parameters.pathParameters['parentgeoid'];
        if (parameters.pathParameters['parentgeoid'] === undefined) {
            parameters.pathParameters['parentgeoid'] = parameters['parentgeoid'];
        }
        requestUrl = requestUrl.replace('{parentgeoid}', parameters.pathParameters['parentgeoid']);

        if (parameters.pathParameters['parentgeoid'] === undefined) {
            throw new Error("Request '/store/{storeId}/geonode/byParentGeoNode/{parentgeoid}' missing required parameter parentgeoid");
        }

        //allow use of param with or without underscore
        parameters['responseFormat'] = parameters['responseFormat'] || parameters['responseFormat'];
        if (parameters['responseFormat'] !== undefined) {
            queryParameters = queryParameters.set('responseFormat', parameters['responseFormat']);
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters = queryParameters.set(parameterName, parameter);
                });
        }

        if (!header.get('Content-Type')) {
            header = header.append('Content-Type', 'application/json; charset=utf-8');
        }

        if (header.getAll('Accept').indexOf('application/json') > -1) {
            header = header.set('Accept', 'application/json');
        }

        if (header.get('content-type') === 'multipart/form-data' && Object.keys(form).length > 0) {
            let formData = new FormData();
            for (let p in form) {
                if (form[p].name !== undefined) {
                    formData.append(p, form[p], form[p].name);
                } else {
                    formData.append(p, form[p]);
                }
            }
            body = formData;
        } else if (Object.keys(form).length > 0) {
            header = header.set('content-type', 'application/x-www-form-urlencoded');
            for (let p in form) {
                formParams.append(p, form[p]);
            }
            body = formParams;
        }
        let requestOptions = {
            'params': queryParameters,
            'method': method,
            'headers': header,
            'body': body,
            'url': requestUrl
        };

        return this.invokeService(requestOptions);
    };

    /**
     * Find geo nodes that match the type and the name.
     * `@method`
     * `@name Geonode#findGeoByTypeAndName`
     *
     * `@param {any} headers (optional)` will add headers to rest request
     *
     * `@param {string} url (optional)` will override the default domain used by the service. Url can be relative or absolute
     *
     * `@param {any} parameters` have following properties:
     ** `@property {any} pathParameters` the list of path parameters. If a path parameter was not found, the same named property in `parameters` will be used.
      ** `@property {string} storeId (required)` The child property of `pathParameters`. If not specified in `pathParameters`, the same named property in `parameters` will be used. The store identifier.
     ** `@property {string} siteLevelSearch ` The site level search flag.  If it is 'true', a site level search will be performed; otherwise, a store level search will be performed.  Optional parameter; when it is not set, it is defaulted to 'true'.

     ** `@property {string} type (required)` The type of the geo nodes.
     ** `@property {string} name (required)` The name of the type of the geo nodes.
     */
    findGeoByTypeAndName(parameters: any, headers ? : any, url ? : string): Observable < HttpResponse < any >> {
        let useMocks = false;
        //Set domain based on profile.
        if (url && url === 'mocks') {
            url = undefined;
            useMocks = true;
        }
        let domain = url || this.getRequestUrl();
        let path = '/store/{storeId}/geonode';
        let requestUrl = domain + path;
        let method = 'GET';
        if (CommerceEnvironment.transactionUseMocks || useMocks) {
            method = 'GET';
            requestUrl = 'mocks/commerce/transaction' + path + '.findGeoByTypeAndName.mocks.json';
        }
        let form = {};
        let body = {};
        let header: HttpHeaders;
        let queryParameters = new HttpParams();
        let formParams = new URLSearchParams();
        if (typeof headers === 'undefined' || headers === null) {
            header = new HttpHeaders();
        } else {
            header = new HttpHeaders(headers);
        }
        if (parameters === undefined) {
            parameters = {};
        }
        if (parameters.pathParameters === undefined) {
            parameters.pathParameters = {};
        }

        let headerValues = {};
        headerValues['Accept'] = ['application/json', 'application/xml', 'application/xhtml+xml', 'application/atom+xml'];
        for (let val of headerValues['Accept']) {
            header = header.append('Accept', val);
        }

        //allow use of param with or without underscore
        parameters['storeId'] = parameters['storeId'] || parameters['storeId'];
        parameters.pathParameters['storeId'] = parameters.pathParameters['storeId'] || parameters.pathParameters['storeId'];
        if (parameters.pathParameters['storeId'] === undefined) {
            parameters.pathParameters['storeId'] = parameters['storeId'];
        }
        requestUrl = requestUrl.replace('{storeId}', parameters.pathParameters['storeId']);

        if (parameters.pathParameters['storeId'] === undefined) {
            throw new Error("Request '/store/{storeId}/geonode' missing required parameter storeId");
        }

        //allow use of param with or without underscore
        parameters['siteLevelSearch'] = parameters['siteLevelSearch'] || parameters['siteLevelSearch'];
        if (parameters['siteLevelSearch'] !== undefined) {
            queryParameters = queryParameters.set('siteLevelSearch', parameters['siteLevelSearch']);
        }

        queryParameters = queryParameters.set('q', 'byGeoNodeTypeAndName');

        if (parameters['q'] === undefined) {
            throw new Error("Request '/store/{storeId}/geonode' missing required parameter q");
        }

        //allow use of param with or without underscore
        parameters['type'] = parameters['type'] || parameters['type'];
        if (parameters['type'] !== undefined) {
            queryParameters = queryParameters.set('type', parameters['type']);
        }

        if (parameters['type'] === undefined) {
            throw new Error("Request '/store/{storeId}/geonode' missing required parameter type");
        }

        //allow use of param with or without underscore
        parameters['name'] = parameters['name'] || parameters['name'];
        if (parameters['name'] !== undefined) {
            queryParameters = queryParameters.set('name', parameters['name']);
        }

        if (parameters['name'] === undefined) {
            throw new Error("Request '/store/{storeId}/geonode' missing required parameter name");
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters = queryParameters.set(parameterName, parameter);
                });
        }

        if (!header.get('Content-Type')) {
            header = header.append('Content-Type', 'application/json; charset=utf-8');
        }

        if (header.getAll('Accept').indexOf('application/json') > -1) {
            header = header.set('Accept', 'application/json');
        }

        if (header.get('content-type') === 'multipart/form-data' && Object.keys(form).length > 0) {
            let formData = new FormData();
            for (let p in form) {
                if (form[p].name !== undefined) {
                    formData.append(p, form[p], form[p].name);
                } else {
                    formData.append(p, form[p]);
                }
            }
            body = formData;
        } else if (Object.keys(form).length > 0) {
            header = header.set('content-type', 'application/x-www-form-urlencoded');
            for (let p in form) {
                formParams.append(p, form[p]);
            }
            body = formParams;
        }
        let requestOptions = {
            'params': queryParameters,
            'method': method,
            'headers': header,
            'body': body,
            'url': requestUrl
        };

        return this.invokeService(requestOptions);
    };

    /**
     * Find geo nodes based on query name. See each query for details on input and output.
     * `@method`
     * `@name Geonode#findByQuery`
     *
     * `@param {any} headers (optional)` will add headers to rest request
     *
     * `@param {string} url (optional)` will override the default domain used by the service. Url can be relative or absolute
     *
     * `@param {any} parameters` have following properties:
     ** `@property {any} pathParameters` the list of path parameters. If a path parameter was not found, the same named property in `parameters` will be used.
      ** `@property {string} storeId (required)` The child property of `pathParameters`. If not specified in `pathParameters`, the same named property in `parameters` will be used. The store identifier.

     */
    findByQuery(parameters: any, headers ? : any, url ? : string): Observable < HttpResponse < any >> {
        let useMocks = false;
        //Set domain based on profile.
        if (url && url === 'mocks') {
            url = undefined;
            useMocks = true;
        }
        let domain = url || this.getRequestUrl();
        let path = '/store/{storeId}/geonode';
        let requestUrl = domain + path;
        let method = 'GET';
        if (CommerceEnvironment.transactionUseMocks || useMocks) {
            method = 'GET';
            requestUrl = 'mocks/commerce/transaction' + path + '.findByQuery.mocks.json';
        }
        let form = {};
        let body = {};
        let header: HttpHeaders;
        let queryParameters = new HttpParams();
        let formParams = new URLSearchParams();
        if (typeof headers === 'undefined' || headers === null) {
            header = new HttpHeaders();
        } else {
            header = new HttpHeaders(headers);
        }
        if (parameters === undefined) {
            parameters = {};
        }
        if (parameters.pathParameters === undefined) {
            parameters.pathParameters = {};
        }

        let headerValues = {};
        headerValues['Accept'] = ['application/json', 'application/xml', 'application/xhtml+xml', 'application/atom+xml'];
        for (let val of headerValues['Accept']) {
            header = header.append('Accept', val);
        }

        //allow use of param with or without underscore
        parameters['storeId'] = parameters['storeId'] || parameters['storeId'];
        parameters.pathParameters['storeId'] = parameters.pathParameters['storeId'] || parameters.pathParameters['storeId'];
        if (parameters.pathParameters['storeId'] === undefined) {
            parameters.pathParameters['storeId'] = parameters['storeId'];
        }
        requestUrl = requestUrl.replace('{storeId}', parameters.pathParameters['storeId']);

        if (parameters.pathParameters['storeId'] === undefined) {
            throw new Error("Request '/store/{storeId}/geonode' missing required parameter storeId");
        }

        queryParameters = queryParameters.set('q', 'byGeoNodeTypeAndName');

        if (parameters['q'] === undefined) {
            throw new Error("Request '/store/{storeId}/geonode' missing required parameter q");
        }

        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    var parameter = parameters.$queryParameters[parameterName];
                    queryParameters = queryParameters.set(parameterName, parameter);
                });
        }

        if (!header.get('Content-Type')) {
            header = header.append('Content-Type', 'application/json; charset=utf-8');
        }

        if (header.getAll('Accept').indexOf('application/json') > -1) {
            header = header.set('Accept', 'application/json');
        }

        if (header.get('content-type') === 'multipart/form-data' && Object.keys(form).length > 0) {
            let formData = new FormData();
            for (let p in form) {
                if (form[p].name !== undefined) {
                    formData.append(p, form[p], form[p].name);
                } else {
                    formData.append(p, form[p]);
                }
            }
            body = formData;
        } else if (Object.keys(form).length > 0) {
            header = header.set('content-type', 'application/x-www-form-urlencoded');
            for (let p in form) {
                formParams.append(p, form[p]);
            }
            body = formParams;
        }
        let requestOptions = {
            'params': queryParameters,
            'method': method,
            'headers': header,
            'body': body,
            'url': requestUrl
        };

        return this.invokeService(requestOptions);
    };

}
/* jshint ignore:end */
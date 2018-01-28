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

export class StoreLocatorService extends TransactionService {

    /**
     * Gets store location information by a specified location.
     * `@method`
     * `@name StoreLocator#findGeoNodeByGeoLocation`
     *
     * `@param {any} headers (optional)` will add headers to rest request
     *
     * `@param {string} url (optional)` will override the default domain used by the service. Url can be relative or absolute
     *
     * `@param {any} parameters` have following properties:
     ** `@property {any} pathParameters` the list of path parameters. If a path parameter was not found, the same named property in `parameters` will be used.
     ** `@property {string} storeId (required)` The child property of `pathParameters`. If not specified in `pathParameters`, the same named property in `parameters` will be used. The store identifier.
     ** `@property {string} responseFormat ` The response format. If the request has an input body, that body must also use the format specified in "responseFormat". Valid values include "json" and "xml" without the quotes. If the responseFormat isn't specified, the "accept" HTTP header shall be used to determine the format of the response. If the "accept" HTTP header isn't specified as well, the default response format shall be in json.
     ** `@property {string} city ` The city.
     ** `@property {string} state ` The state.
     ** `@property {string} prov ` The province.
     ** `@property {string} country ` The country.
     ** `@property {string} radiusUom ` The radius unit of measure.
     ** `@property {string} beautyCenter ` The physcal store attribute name that describes whether the store is a beauty center.
     ** `@property {string} type ` The physical store attribute name to describe the type of the store.
     ** `@property {string} radius ` The radius.
     ** `@property {integer} pageNumber ` Page number, starting at 1. Valid values include positive integers of 1 and above. The "pageSize" must be specified for paging to work.
     ** `@property {integer} pageSize ` Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above. The "pageNumber" must be specified for paging to work.
     ** `@property {string} siteLevelStoreSearch ` If it is 'true', a site level physical search will be performed.  Otherwise, the physical store search will be performed at the web store level. By default, it is 'true'.
     */
    findGeoNodeByGeoLocation(parameters: any, headers ? : any, url ? : string): Observable < HttpResponse < any >> {
        let useMocks = false;
        //Set domain based on profile.
        if (url && url === 'mocks') {
            url = undefined;
            useMocks = true;
        }
        let domain = url || this.getRequestUrl();
        let path = '/store/{storeId}/storelocator/byLocation';
        let requestUrl = domain + path;
        let method = 'GET';
        if (CommerceEnvironment.transactionUseMocks || useMocks) {
            method = 'GET';
            requestUrl = 'mocks/commerce/transaction' + path + '.findGeoNodeByGeoLocation.mocks.json';
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
            throw new Error("Request '/store/{storeId}/storelocator/byLocation' missing required parameter storeId");
        }

        //allow use of param with or without underscore
        parameters['responseFormat'] = parameters['responseFormat'] || parameters['responseFormat'];
        if (parameters['responseFormat'] !== undefined) {
            queryParameters = queryParameters.set('responseFormat', parameters['responseFormat']);
        }

        //allow use of param with or without underscore
        parameters['city'] = parameters['city'] || parameters['city'];
        if (parameters['city'] !== undefined) {
            queryParameters = queryParameters.set('city', parameters['city']);
        }

        //allow use of param with or without underscore
        parameters['state'] = parameters['state'] || parameters['state'];
        if (parameters['state'] !== undefined) {
            queryParameters = queryParameters.set('state', parameters['state']);
        }

        //allow use of param with or without underscore
        parameters['prov'] = parameters['prov'] || parameters['prov'];
        if (parameters['prov'] !== undefined) {
            queryParameters = queryParameters.set('prov', parameters['prov']);
        }

        //allow use of param with or without underscore
        parameters['country'] = parameters['country'] || parameters['country'];
        if (parameters['country'] !== undefined) {
            queryParameters = queryParameters.set('country', parameters['country']);
        }

        //allow use of param with or without underscore
        parameters['radiusUom'] = parameters['radiusUom'] || parameters['radiusUOM'];
        if (parameters['radiusUom'] !== undefined) {
            queryParameters = queryParameters.set('radiusUOM', parameters['radiusUom']);
        }

        //allow use of param with or without underscore
        parameters['beautyCenter'] = parameters['beautyCenter'] || parameters['BeautyCenter'];
        if (parameters['beautyCenter'] !== undefined) {
            queryParameters = queryParameters.set('BeautyCenter', parameters['beautyCenter']);
        }

        //allow use of param with or without underscore
        parameters['type'] = parameters['type'] || parameters['Type'];
        if (parameters['type'] !== undefined) {
            queryParameters = queryParameters.set('Type', parameters['type']);
        }

        //allow use of param with or without underscore
        parameters['radius'] = parameters['radius'] || parameters['radius'];
        if (parameters['radius'] !== undefined) {
            queryParameters = queryParameters.set('radius', parameters['radius']);
        }

        //allow use of param with or without underscore
        parameters['pageNumber'] = parameters['pageNumber'] || parameters['pageNumber'];
        if (parameters['pageNumber'] !== undefined) {
            queryParameters = queryParameters.set('pageNumber', parameters['pageNumber']);
        }

        //allow use of param with or without underscore
        parameters['pageSize'] = parameters['pageSize'] || parameters['pageSize'];
        if (parameters['pageSize'] !== undefined) {
            queryParameters = queryParameters.set('pageSize', parameters['pageSize']);
        }

        //allow use of param with or without underscore
        parameters['siteLevelStoreSearch'] = parameters['siteLevelStoreSearch'] || parameters['siteLevelStoreSearch'];
        if (parameters['siteLevelStoreSearch'] !== undefined) {
            queryParameters = queryParameters.set('siteLevelStoreSearch', parameters['siteLevelStoreSearch']);
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
     * Gets store location information by a geo node unique ID.
     * `@method`
     * `@name StoreLocator#findGeoNodeByGeoId`
     *
     * `@param {any} headers (optional)` will add headers to rest request
     *
     * `@param {string} url (optional)` will override the default domain used by the service. Url can be relative or absolute
     *
     * `@param {any} parameters` have following properties:
     ** `@property {any} pathParameters` the list of path parameters. If a path parameter was not found, the same named property in `parameters` will be used.
     ** `@property {string} storeId (required)` The child property of `pathParameters`. If not specified in `pathParameters`, the same named property in `parameters` will be used. The store identifier.
     ** `@property {string} geoId (required)` The child property of `pathParameters`. If not specified in `pathParameters`, the same named property in `parameters` will be used. The geo node unique identifier.
     ** `@property {integer} pageNumber ` Page number, starting at 1. Valid values include positive integers of 1 and above. The "pageSize" must be specified for paging to work.
     ** `@property {integer} pageSize ` Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above. The "pageNumber" must be specified for paging to work.
     ** `@property {string} beautyCenter ` The physcal store attribute name that describes whether the store is a beauty center.
     ** `@property {string} type ` The physical store attribute name to describe the type of the store.
     ** `@property {string} responseFormat ` The response format. If the request has an input body, that body must also use the format specified in "responseFormat". Valid values include "json" and "xml" without the quotes. If the responseFormat isn't specified, the "accept" HTTP header shall be used to determine the format of the response. If the "accept" HTTP header isn't specified as well, the default response format shall be in json.
     ** `@property {string} siteLevelStoreSearch ` If it is 'true', a site level physical search will be performed.  Otherwise, the physical store search will be performed at the web store level. By default, it is 'true'.
     */
    findGeoNodeByGeoId(parameters: any, headers ? : any, url ? : string): Observable < HttpResponse < any >> {
        let useMocks = false;
        //Set domain based on profile.
        if (url && url === 'mocks') {
            url = undefined;
            useMocks = true;
        }
        let domain = url || this.getRequestUrl();
        let path = '/store/{storeId}/storelocator/byGeoNode/{geoId}';
        let requestUrl = domain + path;
        let method = 'GET';
        if (CommerceEnvironment.transactionUseMocks || useMocks) {
            method = 'GET';
            requestUrl = 'mocks/commerce/transaction' + path + '.findGeoNodeByGeoId.mocks.json';
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
            throw new Error("Request '/store/{storeId}/storelocator/byGeoNode/{geoId}' missing required parameter storeId");
        }

        //allow use of param with or without underscore
        parameters['geoId'] = parameters['geoId'] || parameters['geoId'];
        parameters.pathParameters['geoId'] = parameters.pathParameters['geoId'] || parameters.pathParameters['geoId'];
        if (parameters.pathParameters['geoId'] === undefined) {
            parameters.pathParameters['geoId'] = parameters['geoId'];
        }
        requestUrl = requestUrl.replace('{geoId}', parameters.pathParameters['geoId']);

        if (parameters.pathParameters['geoId'] === undefined) {
            throw new Error("Request '/store/{storeId}/storelocator/byGeoNode/{geoId}' missing required parameter geoId");
        }

        //allow use of param with or without underscore
        parameters['pageNumber'] = parameters['pageNumber'] || parameters['pageNumber'];
        if (parameters['pageNumber'] !== undefined) {
            queryParameters = queryParameters.set('pageNumber', parameters['pageNumber']);
        }

        //allow use of param with or without underscore
        parameters['pageSize'] = parameters['pageSize'] || parameters['pageSize'];
        if (parameters['pageSize'] !== undefined) {
            queryParameters = queryParameters.set('pageSize', parameters['pageSize']);
        }

        //allow use of param with or without underscore
        parameters['beautyCenter'] = parameters['beautyCenter'] || parameters['BeautyCenter'];
        if (parameters['beautyCenter'] !== undefined) {
            queryParameters = queryParameters.set('BeautyCenter', parameters['beautyCenter']);
        }

        //allow use of param with or without underscore
        parameters['type'] = parameters['type'] || parameters['Type'];
        if (parameters['type'] !== undefined) {
            queryParameters = queryParameters.set('Type', parameters['type']);
        }

        //allow use of param with or without underscore
        parameters['responseFormat'] = parameters['responseFormat'] || parameters['responseFormat'];
        if (parameters['responseFormat'] !== undefined) {
            queryParameters = queryParameters.set('responseFormat', parameters['responseFormat']);
        }

        //allow use of param with or without underscore
        parameters['siteLevelStoreSearch'] = parameters['siteLevelStoreSearch'] || parameters['siteLevelStoreSearch'];
        if (parameters['siteLevelStoreSearch'] !== undefined) {
            queryParameters = queryParameters.set('siteLevelStoreSearch', parameters['siteLevelStoreSearch']);
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
     * Gets store location information by a store unique ID.
     * `@method`
     * `@name StoreLocator#findByStoreUniqueId`
     *
     * `@param {any} headers (optional)` will add headers to rest request
     *
     * `@param {string} url (optional)` will override the default domain used by the service. Url can be relative or absolute
     *
     * `@param {any} parameters` have following properties:
     ** `@property {any} pathParameters` the list of path parameters. If a path parameter was not found, the same named property in `parameters` will be used.
     ** `@property {string} storeId (required)` The child property of `pathParameters`. If not specified in `pathParameters`, the same named property in `parameters` will be used. The store identifier.
     ** `@property {string} uniqueId (required)` The child property of `pathParameters`. If not specified in `pathParameters`, the same named property in `parameters` will be used. The unique identifier.
     ** `@property {string} responseFormat ` The response format. If the request has an input body, that body must also use the format specified in "responseFormat". Valid values include "json" and "xml" without the quotes. If the responseFormat isn't specified, the "accept" HTTP header shall be used to determine the format of the response. If the "accept" HTTP header isn't specified as well, the default response format shall be in json.
     ** `@property {integer} pageNumber ` Page number, starting at 1. Valid values include positive integers of 1 and above. The "pageSize" must be specified for paging to work.
     ** `@property {integer} pageSize ` Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above. The "pageNumber" must be specified for paging to work.
     */
    findByStoreUniqueId(parameters: any, headers ? : any, url ? : string): Observable < HttpResponse < any >> {
        let useMocks = false;
        //Set domain based on profile.
        if (url && url === 'mocks') {
            url = undefined;
            useMocks = true;
        }
        let domain = url || this.getRequestUrl();
        let path = '/store/{storeId}/storelocator/byStoreId/{uniqueId}';
        let requestUrl = domain + path;
        let method = 'GET';
        if (CommerceEnvironment.transactionUseMocks || useMocks) {
            method = 'GET';
            requestUrl = 'mocks/commerce/transaction' + path + '.findByStoreUniqueId.mocks.json';
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
            throw new Error("Request '/store/{storeId}/storelocator/byStoreId/{uniqueId}' missing required parameter storeId");
        }

        //allow use of param with or without underscore
        parameters['uniqueId'] = parameters['uniqueId'] || parameters['uniqueId'];
        parameters.pathParameters['uniqueId'] = parameters.pathParameters['uniqueId'] || parameters.pathParameters['uniqueId'];
        if (parameters.pathParameters['uniqueId'] === undefined) {
            parameters.pathParameters['uniqueId'] = parameters['uniqueId'];
        }
        requestUrl = requestUrl.replace('{uniqueId}', parameters.pathParameters['uniqueId']);

        if (parameters.pathParameters['uniqueId'] === undefined) {
            throw new Error("Request '/store/{storeId}/storelocator/byStoreId/{uniqueId}' missing required parameter uniqueId");
        }

        //allow use of param with or without underscore
        parameters['responseFormat'] = parameters['responseFormat'] || parameters['responseFormat'];
        if (parameters['responseFormat'] !== undefined) {
            queryParameters = queryParameters.set('responseFormat', parameters['responseFormat']);
        }

        //allow use of param with or without underscore
        parameters['pageNumber'] = parameters['pageNumber'] || parameters['pageNumber'];
        if (parameters['pageNumber'] !== undefined) {
            queryParameters = queryParameters.set('pageNumber', parameters['pageNumber']);
        }

        //allow use of param with or without underscore
        parameters['pageSize'] = parameters['pageSize'] || parameters['pageSize'];
        if (parameters['pageSize'] !== undefined) {
            queryParameters = queryParameters.set('pageSize', parameters['pageSize']);
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
     * Gets store location information by one to n store unique IDs.
     * `@method`
     * `@name StoreLocator#findByStoreUniqueIds`
     *
     * `@param {any} headers (optional)` will add headers to rest request
     *
     * `@param {string} url (optional)` will override the default domain used by the service. Url can be relative or absolute
     *
     * `@param {any} parameters` have following properties:
     ** `@property {any} pathParameters` the list of path parameters. If a path parameter was not found, the same named property in `parameters` will be used.
     ** `@property {string} storeId (required)` The child property of `pathParameters`. If not specified in `pathParameters`, the same named property in `parameters` will be used. The store identifier.
     ** `@property {java.util.List} physicalStoreId (required)` A list of physical store unique identifiers.
     ** `@property {string} responseFormat ` The response format. If the request has an input body, that body must also use the format specified in "responseFormat". Valid values include "json" and "xml" without the quotes. If the responseFormat isn't specified, the "accept" HTTP header shall be used to determine the format of the response. If the "accept" HTTP header isn't specified as well, the default response format shall be in json.
     ** `@property {integer} pageNumber ` Page number, starting at 1. Valid values include positive integers of 1 and above. The "pageSize" must be specified for paging to work.
     ** `@property {integer} pageSize ` Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above. The "pageNumber" must be specified for paging to work.
     */
    findByStoreUniqueIds(parameters: any, headers ? : any, url ? : string): Observable < HttpResponse < any >> {
        let useMocks = false;
        //Set domain based on profile.
        if (url && url === 'mocks') {
            url = undefined;
            useMocks = true;
        }
        let domain = url || this.getRequestUrl();
        let path = '/store/{storeId}/storelocator/byStoreIds';
        let requestUrl = domain + path;
        let method = 'GET';
        if (CommerceEnvironment.transactionUseMocks || useMocks) {
            method = 'GET';
            requestUrl = 'mocks/commerce/transaction' + path + '.findByStoreUniqueIds.mocks.json';
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
            throw new Error("Request '/store/{storeId}/storelocator/byStoreIds' missing required parameter storeId");
        }

        //allow use of param with or without underscore
        parameters['physicalStoreId'] = parameters['physicalStoreId'] || parameters['physicalStoreId'];
        if (parameters['physicalStoreId'] !== undefined) {
            queryParameters = queryParameters.set('physicalStoreId', parameters['physicalStoreId']);
        }

        if (parameters['physicalStoreId'] === undefined) {
            throw new Error("Request '/store/{storeId}/storelocator/byStoreIds' missing required parameter physicalStoreId");
        }

        //allow use of param with or without underscore
        parameters['responseFormat'] = parameters['responseFormat'] || parameters['responseFormat'];
        if (parameters['responseFormat'] !== undefined) {
            queryParameters = queryParameters.set('responseFormat', parameters['responseFormat']);
        }

        //allow use of param with or without underscore
        parameters['pageNumber'] = parameters['pageNumber'] || parameters['pageNumber'];
        if (parameters['pageNumber'] !== undefined) {
            queryParameters = queryParameters.set('pageNumber', parameters['pageNumber']);
        }

        //allow use of param with or without underscore
        parameters['pageSize'] = parameters['pageSize'] || parameters['pageSize'];
        if (parameters['pageSize'] !== undefined) {
            queryParameters = queryParameters.set('pageSize', parameters['pageSize']);
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
     * Gets store location information by specified coordinates.
     * `@method`
     * `@name StoreLocator#findStores`
     *
     * `@param {any} headers (optional)` will add headers to rest request
     *
     * `@param {string} url (optional)` will override the default domain used by the service. Url can be relative or absolute
     *
     * `@param {any} parameters` have following properties:
     ** `@property {any} pathParameters` the list of path parameters. If a path parameter was not found, the same named property in `parameters` will be used.
     ** `@property {string} storeId (required)` The child property of `pathParameters`. If not specified in `pathParameters`, the same named property in `parameters` will be used. The store identifier.
     ** `@property {string} latitude (required)` The child property of `pathParameters`. If not specified in `pathParameters`, the same named property in `parameters` will be used. The latitude.
     ** `@property {string} longitude (required)` The child property of `pathParameters`. If not specified in `pathParameters`, the same named property in `parameters` will be used. The longitude.
     ** `@property {string} responseFormat ` The response format. If the request has an input body, that body must also use the format specified in "responseFormat". Valid values include "json" and "xml" without the quotes. If the responseFormat isn't specified, the "accept" HTTP header shall be used to determine the format of the response. If the "accept" HTTP header isn't specified as well, the default response format shall be in json.
     ** `@property {string} maxItems ` The maximum number of stores to return.
     ** `@property {string} radiusUom ` The radius unit of measure.
     ** `@property {string} beautyCenter ` The physcal store attribute name that describes whether the store is a beauty center.
     ** `@property {string} type ` The physical store attribute name to describe the type of the store.
     ** `@property {string} radius ` The radius.
     ** `@property {string} siteLevelStoreSearch ` If it is 'true', a site level physical search will be performed.  Otherwise, the physical store search will be performed at the web store level. By default, it is 'true'.
     */
    findStores(parameters: any, headers ? : any, url ? : string): Observable < HttpResponse < any >> {
        let useMocks = false;
        //Set domain based on profile.
        if (url && url === 'mocks') {
            url = undefined;
            useMocks = true;
        }
        let domain = url || this.getRequestUrl();
        let path = '/store/{storeId}/storelocator/latitude/{latitude}/longitude/{longitude}';
        let requestUrl = domain + path;
        let method = 'GET';
        if (CommerceEnvironment.transactionUseMocks || useMocks) {
            method = 'GET';
            requestUrl = 'mocks/commerce/transaction' + path + '.findStores.mocks.json';
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
            throw new Error("Request '/store/{storeId}/storelocator/latitude/{latitude}/longitude/{longitude}' missing required parameter storeId");
        }

        //allow use of param with or without underscore
        parameters['latitude'] = parameters['latitude'] || parameters['latitude'];
        parameters.pathParameters['latitude'] = parameters.pathParameters['latitude'] || parameters.pathParameters['latitude'];
        if (parameters.pathParameters['latitude'] === undefined) {
            parameters.pathParameters['latitude'] = parameters['latitude'];
        }
        requestUrl = requestUrl.replace('{latitude}', parameters.pathParameters['latitude']);

        if (parameters.pathParameters['latitude'] === undefined) {
            throw new Error("Request '/store/{storeId}/storelocator/latitude/{latitude}/longitude/{longitude}' missing required parameter latitude");
        }

        //allow use of param with or without underscore
        parameters['longitude'] = parameters['longitude'] || parameters['longitude'];
        parameters.pathParameters['longitude'] = parameters.pathParameters['longitude'] || parameters.pathParameters['longitude'];
        if (parameters.pathParameters['longitude'] === undefined) {
            parameters.pathParameters['longitude'] = parameters['longitude'];
        }
        requestUrl = requestUrl.replace('{longitude}', parameters.pathParameters['longitude']);

        if (parameters.pathParameters['longitude'] === undefined) {
            throw new Error("Request '/store/{storeId}/storelocator/latitude/{latitude}/longitude/{longitude}' missing required parameter longitude");
        }

        //allow use of param with or without underscore
        parameters['responseFormat'] = parameters['responseFormat'] || parameters['responseFormat'];
        if (parameters['responseFormat'] !== undefined) {
            queryParameters = queryParameters.set('responseFormat', parameters['responseFormat']);
        }

        //allow use of param with or without underscore
        parameters['maxItems'] = parameters['maxItems'] || parameters['maxItems'];
        if (parameters['maxItems'] !== undefined) {
            queryParameters = queryParameters.set('maxItems', parameters['maxItems']);
        }

        //allow use of param with or without underscore
        parameters['radiusUom'] = parameters['radiusUom'] || parameters['radiusUOM'];
        if (parameters['radiusUom'] !== undefined) {
            queryParameters = queryParameters.set('radiusUOM', parameters['radiusUom']);
        }

        //allow use of param with or without underscore
        parameters['beautyCenter'] = parameters['beautyCenter'] || parameters['BeautyCenter'];
        if (parameters['beautyCenter'] !== undefined) {
            queryParameters = queryParameters.set('BeautyCenter', parameters['beautyCenter']);
        }

        //allow use of param with or without underscore
        parameters['type'] = parameters['type'] || parameters['Type'];
        if (parameters['type'] !== undefined) {
            queryParameters = queryParameters.set('Type', parameters['type']);
        }

        //allow use of param with or without underscore
        parameters['radius'] = parameters['radius'] || parameters['radius'];
        if (parameters['radius'] !== undefined) {
            queryParameters = queryParameters.set('radius', parameters['radius']);
        }

        //allow use of param with or without underscore
        parameters['siteLevelStoreSearch'] = parameters['siteLevelStoreSearch'] || parameters['siteLevelStoreSearch'];
        if (parameters['siteLevelStoreSearch'] !== undefined) {
            queryParameters = queryParameters.set('siteLevelStoreSearch', parameters['siteLevelStoreSearch']);
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
import * as React from "react";
import { fetchUtils, Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import authProvider from './authProvider';
import config from "./config";
import {StationCreate, StationEdit, StationsList} from "./pages/stations";

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const { token } = JSON.parse(localStorage.getItem('auth'));
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider(`${config.HOST}`, httpClient);


const App = () => (
    <Admin authProvider={authProvider}  dataProvider={dataProvider}>
        {/*<Resource name="stations" list={ListGuesser} />*/}
        <Resource name="stations" list={StationsList} edit={StationEdit} create={StationCreate}/>
    </Admin>
);

export default App;

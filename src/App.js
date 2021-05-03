import * as React from "react";
import { fetchUtils, Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import authProvider from './authProvider';
import config from "./config";
import {StationCreate, StationEdit, StationsList, StationShow} from "./pages/stations";
import {BookingEdit, BookingList, BookingShow} from "./pages/bookings";
import {UserCreate, UserEdit, UserShow, UsersList} from "./pages/users";

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const authKey = localStorage.getItem('auth');
    if (authKey) {
        const {token} = JSON.parse(authKey);
        options.headers.set('Authorization', `Bearer ${token}`);
    }
    return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider(`${config.HOST}`, httpClient);


const App = () => (
    <Admin authProvider={authProvider}  dataProvider={dataProvider}>
        <Resource name="bookings" list={BookingList} edit={BookingEdit} show={BookingShow}/>
        <Resource name="stations" list={StationsList} edit={StationEdit} create={StationCreate} show={StationShow}/>
        <Resource name="users" list={UsersList} edit={UserEdit} create={UserCreate} show={UserShow}/>
    </Admin>
);

export default App;

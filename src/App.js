import * as React from "react";
import { fetchUtils, Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import authProvider from './authProvider';
import config from "./config";
import {StationCreate, StationEdit, StationsList, StationShow} from "./pages/stations";
import {BookingEdit, BookingList, BookingShow} from "./pages/bookings";
import {UserCreate, UserEdit, UserShow, UsersList} from "./pages/users";
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';

const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');

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
    <Admin authProvider={authProvider}  dataProvider={dataProvider} i18nProvider={i18nProvider} title="Станции Технического Обслуживания">
        <Resource name="bookings" list={BookingList} edit={BookingEdit} show={BookingShow} options={{ label: 'Бронирования' }} />
        <Resource name="stations" list={StationsList} edit={StationEdit} create={StationCreate} show={StationShow} options={{ label: 'СТО' }} />
        <Resource name="users" list={UsersList} edit={UserEdit} create={UserCreate} show={UserShow} options={{ label: 'Пользователи' }}/>
    </Admin>
);

export default App;

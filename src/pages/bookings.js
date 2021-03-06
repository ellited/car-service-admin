import {
    Datagrid,
    List,
    ShowButton,
    TextField,
    DateField,
    NumberField,
    Edit,
    SimpleForm,
    DateTimeInput,
    TextInput,
    Show, TabbedShowLayout, Tab
} from "react-admin";
import * as React from "react";
import LatLngInput from "../components/LatLongInput";

export const BookingList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="date" label="Дата" />
            <TextField source="station.name" label="СТО"/>
            <TextField source="service.name" label="Услуга" />
            <TextField source="user.lastName" label="Фамилия"/>
            <TextField source="user.firstName" label="Имя" />
            <ShowButton/>
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Бронирование {record ? `"${record.date}"` : ''}</span>;
};

export const BookingEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <DateTimeInput source="date" label="Дата" />
            <TextField source="station.name" label="СТО"/>
            <TextField source="service.name" label="Услуга" />
            <TextInput source="user.lastName" label="Фамилия"/>
            <TextInput source="user.firstName" label="Имя" />
        </SimpleForm>
    </Edit>
);

export const BookingShow = props => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Summary">
                <DateField source="date" label="Date" />
                <TextField source="station.name" label="СТО"/>
                <TextField source="service.name" label="Услуга" />
                <TextField source="user.lastName" label="Фамилия"/>
                <TextField source="user.firstName" label="Имя" />
            </Tab>
        </TabbedShowLayout>
    </Show>
);

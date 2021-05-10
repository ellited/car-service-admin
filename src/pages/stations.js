import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, TextField, ChipField, SingleFieldList, TextInput, Show, ShowButton, TabbedShowLayout, Tab, ReferenceManyField,DateField } from 'react-admin';
import LatLngInput from "../components/LatLongInput";

export const StationsList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" label="Наименование" />
            <TextField source="location.phone" label="Телефон"/>
            <TextField source="location.city" label="Город" />
            <ShowButton/>
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>СТО {record ? `"${record.name}"` : ''}</span>;
};

export const StationEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" label="Наименование" />
            <TextInput source="location.phone" label="Телефон"/>
            <TextInput source="location.city" label="Город"/>
            <span>
            <TextInput source="location.street" label="Улица"/>
                &nbsp;
            <TextInput source="location.streetNumber" label="Номер дома"/>
            </span>
            <LatLngInput />
        </SimpleForm>
    </Edit>
);


export const StationCreate = (props) => (
    <Create title="Create a Station" {...props}>
        <SimpleForm>
            <TextInput source="name" label="Наименование" />
            <TextInput source="location.phone" label="Телефон"/>
            <TextInput source="location.city" label="Город"/>
            <span>
                <TextInput source="location.street" label="Улица"/>
                &nbsp;
                <TextInput source="location.streetNumber" label="Номер дома"/>
            </span>
            <LatLngInput />
        </SimpleForm>
    </Create>
);


export const StationShow = props => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Информация">
                <TextField source="name" label="Наименование" />
                <TextField source="location.phone" label="Телефон"/>
                <TextField source="location.city" label="City"/>
                <TextField source="location.street" label="Street"/>
                <TextField source="location.streetNumber" label="Номер дома"/>
                <TextField source="location.latitude" label="Широта"/>
                <TextField source="location.longitude" label="Долгота"/>
            </Tab>
        </TabbedShowLayout>
    </Show>
);

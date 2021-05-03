import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, TextField, ChipField, SingleFieldList, TextInput, Show, ShowButton, TabbedShowLayout, Tab, ReferenceManyField,DateField } from 'react-admin';
import LatLngInput from "../components/LatLongInput";

export const StationsList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" label="Name" />
            <TextField source="location.phone" label="Phone"/>
            <TextField source="location.city" label="City" />
            <ShowButton/>
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.name}"` : ''}</span>;
};

export const StationEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="location.phone" label="Phone"/>
            <TextInput source="location.city" label="City"/>
            <span>
            <TextInput source="location.street" label="Street"/>
                &nbsp;
            <TextInput source="location.streetNumber" label="Street number"/>
            </span>
            <LatLngInput />
        </SimpleForm>
    </Edit>
);


export const StationCreate = (props) => (
    <Create title="Create a Station" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="location.phone" label="Phone"/>
            <TextInput source="location.city" label="City"/>
            <span>
                <TextInput source="location.street" label="Street"/>
                &nbsp;
                <TextInput source="location.streetNumber" label="Street number"/>
            </span>
            <LatLngInput />
        </SimpleForm>
    </Create>
);


export const StationShow = props => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Summary">
                <TextField source="name" label="Name" />
                <TextField source="location.phone" label="Phone"/>
                <TextField source="location.city" label="City"/>
                <TextField source="location.street" label="Street"/>
                <TextField source="location.streetNumber" label="Street number"/>
                <TextField source="location.latitude" label="Latitude"/>
                <TextField source="location.longitude" label="Longitude"/>
            </Tab>
        </TabbedShowLayout>
    </Show>
);

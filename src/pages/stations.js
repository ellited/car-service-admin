import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, NumberInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
import LatLngInput from "../components/LatLongInput";
export const PostIcon = BookIcon;

export const StationsList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" label="Name" />
            <TextField source="location.phone" label="Phone"/>
            <TextField source="location.city" label="City" />
            <EditButton basePath="/stations" />
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
    <Create title="Create a Post" {...props}>
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

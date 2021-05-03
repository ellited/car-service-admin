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
            <TextField source="date" label="Date" />
            <TextField source="station.name" label="Station"/>
            <TextField source="service.name" label="Service" />
            <TextField source="user.lastName" label="Firstname"/>
            <TextField source="user.firstName" label="Surname" />
            <ShowButton/>
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.name}"` : ''}</span>;
};

export const BookingEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <DateTimeInput source="date" label="Date" />
            <TextField source="station.name" label="Station"/>
            <TextField source="service.name" label="Service" />
            <TextInput source="user.lastName" label="Firstname"/>
            <TextInput source="user.firstName" label="Surname" />
        </SimpleForm>
    </Edit>
);

export const BookingShow = props => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Summary">
                <DateField source="date" label="Date" />
                <TextField source="station.name" label="Station"/>
                <TextField source="service.name" label="Service" />
                <TextField source="user.lastName" label="Firstname"/>
                <TextField source="user.firstName" label="Surname" />
            </Tab>
        </TabbedShowLayout>
    </Show>
);

import {
    Create,
    Datagrid,
    Edit,
    List,
    Show,
    ShowButton,
    SimpleForm, Tab,
    TabbedShowLayout,
    TextField,
    TextInput
} from "react-admin";
import * as React from "react";

export const UsersList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="username" label="Username" />
            <TextField source="lastName" label="Firstname"/>
            <TextField source="firstName" label="Surname" />

            <ShowButton/>
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.name}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="username" label="Username" />
            <TextInput source="lastName" label="Firstname"/>
            <TextInput source="firstName" label="Surname" />

        </SimpleForm>
    </Edit>
);


export const UserCreate = (props) => (
    <Create title="Create a user" {...props}>
        <SimpleForm>w
            <TextInput disabled source="id" />
            <TextInput source="username" label="Username" />
            <TextInput source="lastName" label="Firstname"/>
            <TextInput source="firstName" label="Surname" />
        </SimpleForm>
    </Create>
);


export const UserShow = props => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Summary">
                <TextField source="username" label="Username" />
                <TextField source="lastName" label="Firstname"/>
                <TextField source="firstName" label="Surname" />
            </Tab>
        </TabbedShowLayout>
    </Show>
);

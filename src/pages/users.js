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
            <TextField source="username" label="Логин" />
            <TextField source="lastName" label="Имя"/>
            <TextField source="firstName" label="Пароль" />

            <ShowButton/>
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Пользователь {record ? `"${record.username}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="username" label="Логин" />
            <TextInput source="lastName" label="Имя"/>
            <TextInput source="firstName" label="Пароль" />

        </SimpleForm>
    </Edit>
);


export const UserCreate = (props) => (
    <Create title="Create a user" {...props}>
        <SimpleForm>w
            <TextInput disabled source="id" />
            <TextInput source="username" label="Логин" />
            <TextInput source="lastName" label="Имя"/>
            <TextInput source="firstName" label="Пароль" />
        </SimpleForm>
    </Create>
);


export const UserShow = props => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Информация">
                <TextField source="username" label="Логин" />
                <TextField source="lastName" label="Имя"/>
                <TextField source="firstName" label="Пароль" />
            </Tab>
        </TabbedShowLayout>
    </Show>
);

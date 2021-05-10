import { NumberInput } from 'react-admin';
const LatLngInput = () => (
    <span>
        <NumberInput source="location.latitude" label="Широта" />
        &nbsp;
        <NumberInput source="location.longitude" label="Долгота" />
    </span>
);
export default LatLngInput;

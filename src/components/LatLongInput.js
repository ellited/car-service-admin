import { NumberInput } from 'react-admin';
const LatLngInput = () => (
    <span>
        <NumberInput source="location.latitude" label="latitude" />
        &nbsp;
        <NumberInput source="location.longitude" label="longitude" />
    </span>
);
export default LatLngInput;

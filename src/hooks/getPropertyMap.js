import properties from "../constants/properties";

function getPropertyMap(props) {
    props.map(property => {
        return properties[property];
    });
    return props;
}

export default getPropertyMap;
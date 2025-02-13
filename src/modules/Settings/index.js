import React, {useState} from "react";
import { Form, Input, Card, Button } from "antd";
import { use } from "react";
import GooglePlacesAutocomplete, {geocodeByAddress, getLatLng} from "react-google-places-autocomplete";

// Google Places Autocomplete not working properly. The react-google-places-autocomplete module is not working for me. 

const Settings = () => {
    const {address, setAddress} = useState(null);
    const {coordinates, setCoordinates} = useState(null);
    
    const getAddressLatLng = async (address) => {
        setAddress(address);
        const geocodeByAddress = await geocodeByAddress(address.label);
        const latLng = await getLatLng(geocodeByAddress[0]);
        setCoordinates(latLng);
    };

    return (
        <Card title="Restaurant Details" style={{margin: 20}}>
            <Form layout="vertical" wrapperCol={{span: 8}}>
                <Form.Item label="Restaurant Name" required>
                    <Input placeholder="Enter restaurant name"/>
                </Form.Item>
                <Form.Item label="Restaurant Address" required>
                    <GooglePlacesAutocomplete 
                    apiKey="AIzaSyDOy-ZHXfx1O6dvd0lYHqKDfzwTHD8S8Zw"
                    selectProps={{
                        value: address,
                        onChange: getAddressLatLng,
                    }}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </Card>
    )
};

export default Settings;
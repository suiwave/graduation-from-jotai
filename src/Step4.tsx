import React from "react";
import { UserProfile } from "./schemas/user";

const Step4: React.FC<{ data: UserProfile }> = ({ data }) => {
    return (
        <div>
            <h2>User Profile</h2>
            <ul>
                <li>
                    <strong>First Name:</strong> {data.firstName}
                </li>
                <li>
                    <strong>Last Name:</strong> {data.lastName}
                </li>
                <li>
                    <strong>Email:</strong> {data.email}
                </li>
                <li>
                    <strong>Phone:</strong> {data.phone}
                </li>
                <li>
                    <strong>Address:</strong> {data.address}
                </li>
                <li>
                    <strong>City:</strong> {data.city}
                </li>
                <li>
                    <strong>Postal Code:</strong> {data.postalCode}
                </li>
            </ul>
        </div>
    );
};

export default Step4;

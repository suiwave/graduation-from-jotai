import React from 'react';

interface ProfileReviewProps {
    data: { name: string; email: string; age: string };
    onBack: () => void;
}

const ProfileReview: React.FC<ProfileReviewProps> = ({ data, onBack }) => {
    return (
        <div>
            <h2>Review Your Profile</h2>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Age:</strong> {data.age}</p>
            <button onClick={onBack}>Back</button>
            <button>Submit</button>
        </div>
    );
};

export default ProfileReview;

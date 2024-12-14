import React, { useState } from 'react';

interface ProfileFormProps {
    data: { name: string; email: string; age: string };
    onNext: (data: { name: string; email: string; age: string }) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ data, onNext }) => {
    const [formData, setFormData] = useState(data);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button type="submit">Next</button>
        </form>
    );
};

export default ProfileForm;

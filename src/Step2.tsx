import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step2Schema, Step2FormData } from "./schemas/user";

const Step2: React.FC<{ data: Step2FormData; onNext: (data: Step2FormData) => void; onBack: () => void }> = ({ data, onNext, onBack }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Step2FormData>({
        defaultValues: data,
        resolver: zodResolver(step2Schema),
    });

    const onSubmit = (formData: Step2FormData) => onNext(formData);

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
                <label>Email </label>
                < input {...register("email")} />
                {errors.email && <p>{errors.email.message} </p>}
            </div>
            < div >
                <label>Phone </label>
                < input {...register("phone")} />
                {errors.phone && <p>{errors.phone.message} </p>}
            </div>
            < button type="button" onClick={onBack} > Back </button>
            < button type="submit" > Next </button>
        </form>
    );
};

export default Step2;

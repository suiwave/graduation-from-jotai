import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema, Step1FormData } from "./schemas/user";

const Step1: React.FC<{ data: Step1FormData; onNext: (data: Step1FormData) => void }> = ({ data, onNext }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Step1FormData>({
        defaultValues: data,
        resolver: zodResolver(step1Schema),
    });

    const onSubmit = (formData: Step1FormData) => onNext(formData);

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
                <label>First Name </label>
                < input {...register("firstName")} />
                {errors.firstName && <p>{errors.firstName.message} </p>}
            </div>
            < div >
                <label>Last Name </label>
                < input {...register("lastName")} />
                {errors.lastName && <p>{errors.lastName.message} </p>}
            </div>
            < button type="submit" > Next </button>
        </form>
    );
};

export default Step1;

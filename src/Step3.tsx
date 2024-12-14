import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step3Schema, Step3FormData } from "./schemas/user";

const Step3: React.FC<{ data: Step3FormData; onNext: (data: Step3FormData) => void; onBack: () => void }> = ({ data, onNext, onBack }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: data,
        resolver: zodResolver(step3Schema),
    });

    const onSubmit = (formData: Step3FormData) => onNext(formData);


    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
                <label>Address </label>
                < input {...register("address")} />
                {errors.address && <p>{errors.address.message} </p>}
            </div>
            < div >
                <label>City </label>
                < input {...register("city")} />
                {errors.city && <p>{errors.city.message} </p>}
            </div>
            < div >
                <label>Postal Code </label>
                < input {...register("postalCode")} />
                {errors.postalCode && <p>{errors.postalCode.message} </p>}
            </div>
            < button type="button" onClick={onBack} > Back </button>
            < button type="submit" > Submit </button>
        </form>
    );
};

export default Step3;

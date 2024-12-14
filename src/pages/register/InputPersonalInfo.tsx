import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema, PersonalInfoFormData } from "@/schemas/user";

const InputPersonalInfo:
    React.FC<{
        data: PersonalInfoFormData;
        onNext: (data: PersonalInfoFormData) => void;
    }> = ({ data, onNext }) => {
        const { register, handleSubmit, formState: { errors } } = useForm<PersonalInfoFormData>({
            defaultValues: data,
            resolver: zodResolver(personalInfoSchema),
        });

        const onSubmit = (formData: PersonalInfoFormData) => onNext(formData);

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>名前</label>
                    <input {...register("firstName")} />
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>
                <div>
                    <label>姓</label>
                    <input {...register("lastName")} />
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
                <div>
                    <label>年齢</label>
                    <input type="number" {...register("age", { valueAsNumber: true })} />
                    {errors.age && <p>{errors.age.message}</p>}
                </div>
                <button type="submit">次へ</button>
            </form>
        );
    };

export default InputPersonalInfo;

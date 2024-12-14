import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/schemas/user";

const InputContact: React.FC<{ data: ContactFormData; onNext: (data: ContactFormData) => void; onBack: () => void }> = ({ data, onNext, onBack }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
        defaultValues: data,
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = (formData: ContactFormData) => onNext(formData);

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
                <label>Email</label>
                <input {...register("email")} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label>電話番号</label>
                <input {...register("phone")} />
                {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            <button type="button" onClick={onBack}>戻る</button>
            <button type="submit">次へ</button>
        </form>
    );
};

export default InputContact;

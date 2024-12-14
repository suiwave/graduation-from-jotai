import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressSchema, AddressFormData } from "@/schemas/user";

const InputAddress: React.FC<{ data: AddressFormData; onNext: (data: AddressFormData) => void; onBack: () => void }> = ({ data, onNext, onBack }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: data,
        resolver: zodResolver(addressSchema),
    });

    const onSubmit = (formData: AddressFormData) => onNext(formData);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>住所</label>
                <input {...register("address")} />
                {errors.address && <p>{errors.address.message}</p>}
            </div>
            <div>
                <label>市区町村</label>
                <input {...register("city")} />
                {errors.city && <p>{errors.city.message}</p>}
            </div>
            <div>
                <label>郵便番号</label>
                <input {...register("postalCode")} />
                {errors.postalCode && <p>{errors.postalCode.message}</p>}
            </div>
            <button type="button" onClick={onBack}>戻る</button>
            <button type="submit">送信</button>
        </form>
    );
};

export default InputAddress;

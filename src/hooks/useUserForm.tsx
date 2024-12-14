import { UserProfile } from "@/schemas/user";
import { useState } from "react";

export const useUserForm = () => {
    const [data, setData] = useState<UserProfile>({
        firstName: "",
        lastName: "",
        age: 0, // 初期値いれたくないけどいったんこのまま
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
    });

    return { data, setData }
}
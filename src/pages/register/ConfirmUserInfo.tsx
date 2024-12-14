import React from "react";
import { UserProfile } from "@/schemas/user";

const ConfirmUserInfo: React.FC<{ data: UserProfile; onBack: () => void }> = ({ data, onBack }) => {
    return (
        <div>
            <h2>ユーザー情報の確認</h2>
            <ul>
                <li>
                    <strong>名前（名）:</strong> {data.firstName}
                </li>
                <li>
                    <strong>名前（姓）:</strong> {data.lastName}
                </li>
                <li>
                    <strong>メールアドレス:</strong> {data.email}
                </li>
                <li>
                    <strong>電話番号:</strong> {data.phone}
                </li>
                <li>
                    <strong>住所:</strong> {data.address}
                </li>
                <li>
                    <strong>市区町村:</strong> {data.city}
                </li>
                <li>
                    <strong>郵便番号:</strong> {data.postalCode}
                </li>
            </ul>
            <button type="button" onClick={onBack}>戻る</button>
        </div>
    );
};

export default ConfirmUserInfo;

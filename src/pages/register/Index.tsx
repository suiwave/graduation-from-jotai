import React from "react";

const Index: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    return (
        <div>
            <label>ユーザー登録を始める</label>
            <button onClick={onNext}>開始する</button>
        </div>
    );
};

export default Index;

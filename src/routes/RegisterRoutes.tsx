import { Routes, Route, RouteObject, useNavigate } from 'react-router-dom';
import { useUserForm } from '@/hooks/useUserForm';
import { UserProfile } from '@/schemas/user';
import Index from '@/pages/register/Index';
import InputPersonalInfo from '@/pages/register/InputPersonalInfo';
import InputContact from '@/pages/register/InputContact';
import InputAddress from '@/pages/register/InputAddress';
import ConfirmUserInfo from '@/pages/register/ConfirmUserInfo';

// Fast refreshのため、本来はコンポーネントだけexportするようなファイル分割が必要
// 今回はわかりやすさ重視のため、コンポーネントと同じファイルでRouteObjectを定義する
// eslint-disable-next-line react-refresh/only-export-components
const RegisterRoutes = () => {
    const { data, setData } = useUserForm();
    const navigate = useNavigate();

    const handleNext = (stepData: Partial<UserProfile>, nextStep: string) => {
        setData({ ...data, ...stepData });
        navigate(nextStep, { relative: 'path' }); // 遷移先を引数で指定
    };

    const handleBack = () => {
        navigate(-1)
    };

    return (
        <Routes>
            <Route path="/" element={<Index onNext={() => navigate('step1')} />} />
            <Route
                path="step1"
                element={
                    <InputPersonalInfo
                        data={data}
                        onNext={(stepData) => handleNext(stepData, '../step2')} // 現在パスからの相対パスor絶対パスしか指定できないため
                    />
                }
            />
            <Route
                path="step2"
                element={
                    <InputContact
                        data={data}
                        onNext={(stepData) => handleNext(stepData, '../step3')}
                        onBack={handleBack}
                    />
                }
            />
            <Route
                path="step3"
                element={
                    <InputAddress
                        data={data}
                        onNext={(stepData) => handleNext(stepData, '../step4')}
                        onBack={handleBack}
                    />
                }
            />
            <Route
                path="step4"
                element={
                    <ConfirmUserInfo
                        data={data}
                        onBack={handleBack}
                    />
                }
            />
        </Routes>
    );
};

const registerRoutes: RouteObject[] = [
    {
        path: '/register/*',
        element: <RegisterRoutes />,
    }
];

export default registerRoutes;

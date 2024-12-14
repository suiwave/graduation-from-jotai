// src/features/profile/routes/ProfileFlow.tsx
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

interface StepProps {
  count: number;
  increase?: () => void;
  decrease?: () => void;
  onSubmit?: () => void;
}

const Index = () => (
  <div>
    <h1>プロフィール設定</h1>
    <Link to="step1">開始する</Link>
  </div>
);

const Step1: React.FC<StepProps> = ({ count, increase, decrease, onSubmit }) => (
  <div>
    <h2>ステップ 1</h2>
    <div>カウント: {count}</div>
    <button onClick={increase}>増加</button>
    <button onClick={decrease}>減少</button>
    <button onClick={onSubmit}>次へ</button>
    <Link to="../step2">次へ</Link>
  </div>
);

const Step2: React.FC<StepProps> = ({ count }) => (
  <div>
    <h2>ステップ 2</h2>
    <div>最終カウント: {count}</div>
    <Link to="/">完了</Link>
  </div>
);

const ProfileFlow = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => prev - 1);
  const onSubmit = () => navigate('../step2', { relative: 'path' });

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route
        path="step1"
        element={
          <Step1
            count={count}
            increase={increase}
            decrease={decrease}
            onSubmit={onSubmit}
          />
        }
      />
      <Route
        path="step2"
        element={<Step2 count={count} />}
      />
    </Routes>
  );
};

// export default ProfileFlow;

// src/routes/mainRoutes.tsx
import { RouteObject } from 'react-router-dom';
// import ProfileFlow from '../features/profile/routes/ProfileFlow';

export const mainRoutes: RouteObject[] = [
  {
    path: '/profile/*',  // ワイルドカードを使用して子ルートをマッチ
    element: <ProfileFlow />,
  }
];

// src/App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { mainRoutes } from './routes/mainRoutes';

const router = createBrowserRouter(mainRoutes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
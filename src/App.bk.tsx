import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { UserProfile } from "./schemas/user";

const App: React.FC = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<UserProfile>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleNext = (stepData: Partial<UserProfile>) => {
    setData({ ...data, ...stepData });
    setStep(step + 1);
  };

  const handleBack = () => setStep(step - 1);

  return (
    <div>
      {step === 1 && <Step1 data={data} onNext={handleNext} />}
      {step === 2 && <Step2 data={data} onNext={handleNext} onBack={handleBack} />}
      {step === 3 && <Step3 data={data} onNext={handleNext} onBack={handleBack} />}
      {step === 4 && <Step4 data={data} />}
    </div>
  );
};

export default App;

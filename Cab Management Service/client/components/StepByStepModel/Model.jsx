import { useState, useEffect } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

function Model(props) {
    let { setisModalOpen, setManagerData, managerData } = props;
    const [step, setStep] = useState(1);
    const [data, setData] = useState({});

    const handleStepOneNext = (stepOneData) => {
        setData(stepOneData);
        setStep(2);
    };

    const handleStepTwoPrev = () => {
        setStep(1);
    };

    const handleStepTwoComplete = (newManagerData) => {
        setManagerData([...managerData, newManagerData])
    };



    return (
        <div>
            {step === 1 && (
                <StepOne onNext={handleStepOneNext} setisModalOpen={setisModalOpen} />
            )}
            {step === 2 && (
                <StepTwo
                    setisModalOpen={setisModalOpen}
                    data={data}
                    onPrev={handleStepTwoPrev}
                    onComplete={handleStepTwoComplete}
                />
            )}
        </div>
    );
}

export default Model
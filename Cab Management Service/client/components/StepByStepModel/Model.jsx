import { useState, useEffect } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

//TODD: Confirmation page, processing page and confirmed page

function Model(props) {
    // let { setisModalOpen, heading, setData, data, selectedCab, setSelectedRowId } = props;
    let { setisModalOpen, heading, selectedCab, setSelectedRowId } = props;
    const [step, setStep] = useState(1);
    const [data, setData] = useState({});

    const handleStepOneNext = (stepOneData) => {
        setData(stepOneData);
        setStep(2);
    };

    const handleStepTwoPrev = () => {
        setStep(1);
    };

    const handleStepTwoComplete = (managerData) => {
        console.log(managerData)
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
import { useState,useEffect } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import ProcessingPage from './ProcessingPage';

//TODD: Confirmation page, processing page and confirmed page

function Model(props) {
    // let { setisModalOpen, heading, setData, data, selectedCab, setSelectedRowId } = props;
    let { setisModalOpen, heading, selectedCab, setSelectedRowId } = props;
    const [step, setStep] = useState(1);
    const [data, setData] = useState({});
    const [processing, setProcessing] = useState(false);

    const handleStepOneNext = (stepOneData) => {
        setData(stepOneData);
        setStep(2);
    };

    const handleStepTwoPrev = () => {
        setStep(1);
    };

    const handleStepTwoComplete = (stepTwoData) => {
        setProcessing(true); // Set processing to true when the form is submitted
        setStep(3)
        setTimeout(() => {
            setData(stepTwoData);
            setProcessing(false); // Set processing to false after the delay
            setStep(4)
            console.log(data);
        }, 5000); // Simulate a 5 second delay before displaying the confirmation message
    };

    

    return (
        <div>
            {step === 1 && (
                <StepOne onNext={handleStepOneNext} setisModalOpen={setisModalOpen} />
            )}
            {step === 2 && (
                <StepTwo
                    setisModalOpen = {setisModalOpen}
                    data={data}
                    onPrev={handleStepTwoPrev}
                    onComplete={handleStepTwoComplete}
                />
            )}
            {/* {step == 3 && processing && (
                <ProcessingPage />
            )}
            {step == 4 && !processing && data.name && (
                <div>
                    <h1>Your cab is confirmed!</h1>
                    <p>Registration number: {data.registrationNo}</p>
                    <p>Color: {data.color}</p>
                    <p>Model: {data.model}</p>
                </div>
            )} */}            
        </div>
    );
}

export default Model
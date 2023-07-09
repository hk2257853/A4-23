import Head from 'next/head';
import { useState, useEffect } from 'react';

function ProcessingPage() {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((dots) => dots.length < 3 ? dots + '.' : '');
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Head>
                <title>Processing...</title>
            </Head>
            <h1 className="text-4xl font-bold mb-8">Processing...</h1>
            <p className="text-lg mb-4">Please wait while we process your request{dots}</p>
            <div className="spinner-border text-blue-500" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default ProcessingPage;
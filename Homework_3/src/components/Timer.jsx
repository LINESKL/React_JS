import { useState, useEffect } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isCounting, setIsCounting] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        let timerId;
        if (isCounting && seconds > 0) {
            timerId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        } else if (seconds === 0 && isCounting) {
            setIsCounting(false);
            setShowAlert(true);
        }
        
        return () => clearInterval(timerId);
    }, [isCounting, seconds]); 

    const handleStart = () => {
        if (seconds > 0) {
            setIsCounting(true);
            setShowAlert(false); 
        }
    };

    const handleStop = () => {
        setIsCounting(false);
        setShowAlert(false); 
    };

    const handleReset = () => {
        setIsCounting(false);
        setSeconds(0);
        setShowAlert(false);
    };

    const handleAdd = () => {
        setSeconds(seconds + 5);
    };

    const handleSubtract = () => {
        setSeconds(Math.max(0, seconds - 5));
    };

    return (
        <>
            <div className="mt-10 flex items-center justify-center flex-col gap-5">
                <h1 className='text-green-900'>Timer</h1>
                <span className="countdown text-6xl">
                    <span style={{ "--value": seconds }} className="" aria-live="polite">{seconds}</span>
                </span>
                <div className="flex gap-5 ">
                    <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600" onClick={handleAdd}>+5s</button>
                    <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600" onClick={handleSubtract}>-5s</button>
                    <button className="focus:outline-none text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600" onClick={handleReset}>Reset</button>
                </div>
                <div className="flex gap-5">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={handleStart}>Start</button>
                    <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={handleStop}>Stop</button>
                </div>
                {showAlert && (
                    <div id="alert-1" className="flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 " role="alert">
                        <svg className="shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div className="ms-3 text-sm font-medium">
                            Время вышло!
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Timer;
import { useRef, useState, useCallback } from 'react';
import "./InputField.css";

export default function InputField() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const inputRef = useRef(null);
    const handleFocus = () => {
        inputRef.current.focus();
    }

    const showAlert = useCallback(() => {
    alert(`First Name: ${firstName}, Last Name: ${lastName}`);
  }, [firstName, lastName]);

    return (
        <>  
        <div className="mb-3 mt-20 w-1/6" >
            <label for="message" className="block mb-2 text-xl font-medium text-gray-900">First Name</label>
            <input type="text" onChange={(e) => setFirstName(e.target.value)}  className=" mb-2 block p-2.5 w-full text-sm text-gray-900 bg-green-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Type your name..." />
            <button onClick={handleFocus} className="text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Focus on lastname</button>
        </div>
        
        <div className="mb-3 mt-10 w-1/6" >
            <label for="message" className="block mb-2 text-xl font-medium text-gray-900">Last Name</label>
            <input type="text" onChange={(e) => setLastName(e.target.value)} ref={inputRef} className=" mb-2 block p-2.5 w-full text-sm text-gray-900 bg-green-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Type your lastname..." />
            <button onClick={showAlert} className="text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Show data</button>
        </div>
        </>
    )
}
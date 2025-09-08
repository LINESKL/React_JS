import './Button.css'

function Button(props) {
  return (
     <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <p className="p-0">{props.text}</p>
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeWidth="round" strokeLinejoin="round" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
  );
};

export default Button;
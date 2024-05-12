import React from 'react';

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
    return (
        <label className='flex items-center gap-3'>

        {/* input type */}

            <input
                type='checkbox'
                checked={checked}
                onChange={onChange}
                className='hidden'
            />

            {/* to check whether the checkbox is checked or not*/}

            <div
                className={`w-5 h-5 rounded-full flex flex-shrink-0 items-center justify-center border border-gray-400
                        ${checked ? 'bg-green-600 border-green-600' : ''}`}
            >
                {checked && <div className='w-4 h-4 rounded-full bg-green-600'></div>}
            </div>

            {/* input field*/}
            
            <span className='font-medium py-1 overflow-hidden flex-grow'>{label}</span>
        </label>
    );
};

export default Checkbox;

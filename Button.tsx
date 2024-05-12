import React from "react";

interface ButtonProps {
    variant : 'big' | 'small';
    onClick : () => void;
    children : React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children}) => {

    {/*styling the button based on variant*/}

    return (
        <button className={`button ${variant === 'big' ? 'px-7 py-4 text-lg' : 'px-3 py-1 text-base'}
                            bg-green-600 text-white rounded-lg`} onClick={onClick}>
            {children}
        </button>
    );

};

export default Button;
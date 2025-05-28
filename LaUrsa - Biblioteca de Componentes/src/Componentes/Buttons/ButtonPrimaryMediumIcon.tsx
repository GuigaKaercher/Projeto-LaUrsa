interface ButtonPrimaryMediumIconProps {
    text?: string;
    disabled?: boolean;
    isLoading?: boolean;
    showIcon?: boolean;
    iconSrc?: string;
    className?: string;
}

export function ButtonPrimaryMediumIcon({ 
    text = "Button Label", 
    disabled = false, 
    isLoading = false,
    showIcon = true,
    iconSrc = "../public/icon-right.png",
    className = ""
}: ButtonPrimaryMediumIconProps) {
    return (
        <button 
            disabled={disabled || isLoading} 
            className={`${isLoading ? 'bg-blue-900' : 'bg-blue-500'} text-white h-12 w-86 rounded-md border-solid ${!isLoading ? 'cursor-pointer hover:bg-blue-400 active:bg-blue-700' : ''} ${disabled && !isLoading ? 'disabled:bg-gray-300 disabled:font-bold disabled:text-gray-400' : ''} flex items-center justify-center gap-2 ${className}`}
        >
            {isLoading ? (
                <div className="flex items-center justify-center">
                    <img src="/loading.png" alt="loading" className="animate-spin w-6 h-6" />
                </div>
            ) : (
                <>
                    <span>{text}</span>
                    {showIcon && <img className="w-7 h-7" src={iconSrc} alt="icon-right" />}
                </>
            )}
        </button>
    );
}
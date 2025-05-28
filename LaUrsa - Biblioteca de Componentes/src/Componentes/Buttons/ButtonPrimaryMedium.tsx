
interface ButtonPrimaryMediumProps {
    text?: string;
    disabled?: boolean;
    isLoading?: boolean;
    className?: string;
}

export function ButtonPrimaryMedium({ 
    text = "Button Label", 
    disabled = false, 
    isLoading = false,
    className = ""
}: ButtonPrimaryMediumProps) {
    return (
        <button 
            disabled={disabled || isLoading} 
            className={`bg-blue-700 m-2 text-white h-12 w-86 rounded-md border-solid hover:bg-blue-200 ${!isLoading ? 'cursor-pointer hover:bg-blue-500 active:bg-blue-700' : ''} ${disabled && !isLoading ? 'disabled:bg-gray-300 disabled:font-bold disabled:text-gray-400' : ''} flex items-center justify-center gap-2 ${className}`}
        >
            {isLoading ? (
                <div className="flex items-center justify-center">
                    <img src="/loading.png" alt="loading" className="animate-spin w-6 h-6" />
                </div>
            ) : (
                <span>{text}</span>
            )}
        </button>
    );
}

export default ButtonPrimaryMedium
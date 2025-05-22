interface ButtonSecondaryMediumProps {
    text?: string;
    disabled?: boolean;
    isLoading?: boolean;
}

export function ButtonSecondaryMedium({ 
    text = "Button Label", 
    disabled = false, 
    isLoading = false
}: ButtonSecondaryMediumProps) {
    return (
        <div className="p-12">
            <button 
                disabled={disabled || isLoading} 
                className={`text-blue-300 border-solid border-2 border-blue-300 h-12 w-86 rounded hover:border-blue-400 active:border-blue-700 ${disabled && !isLoading ? 'disabled:border-gray-300 disabled:font-bold disabled:text-gray-300 disabled:bg-gray-100' : ''} flex items-center justify-center gap-2`}
            >
                {isLoading ? (
                    <div className="flex items-center justify-center border-solid">
                        <img src="/loading.png" alt="loading" className="animate-spin w-6 h-6" />
                    </div>
                ) : (
                    <span>{text}</span>
                )}
            </button>
        </div>
    )
}
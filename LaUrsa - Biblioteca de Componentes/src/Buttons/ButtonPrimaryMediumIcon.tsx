export function ButtonPrimaryMediumIcon() {
    return (
    
<div className=" flex flex-col items-baseline justify-baseline h-screen p-12  bg-gray-100">
            <h1 className="font-bold p-2">Button Primary Medium Icon</h1>
            <div className="p-1">
        <button disabled={false} className=" bg-blue-500 text-white h-12 w-86 rounded-md border-solid cursor-pointer hover:bg-blue-400 active:bg-blue-700 disabled:bg-gray-300 disabled:font-bold disabled:text-gray-400 flex items-center justify-center gap-2">
            <span>Button Label</span>
            <img className="w-7 h-7" src="../public/icon-right.png" alt="icon-right" />
                </button>
            </div>
            
            {/* primary-medium-icon-loading */}
            <div className="p-1 mt-4">
                <h1 className="font-bold p-2">Button Primary Medium Icon Loading</h1>
                <button 
                    className="bg-blue-900 text-white h-12 w-86 rounded-md border-solid cursor-pointer flex items-center justify-center gap-2"
                >
                    <div className="flex items-center justify-center">
                        <img src="/loading.png" alt="loading" className="animate-spin w-6 h-6" />
                    </div>
                </button>
            </div>  
        </div>
    )
}
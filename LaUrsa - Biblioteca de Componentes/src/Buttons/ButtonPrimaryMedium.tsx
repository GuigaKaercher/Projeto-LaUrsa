
export function ButtonPrimaryMedium() {
    return (
<div className=" flex flex-col items-baseline justify-baseline h-screen p-12 gap-7 bg-gray-100">
    
    {/*primary-medium-text-default*/}
    <div>

    <h1 className="font-bold p-2">Button Primary Medium</h1>
    <div className="flex flex-row">
    <button className="bg-blue-500 text-white h-12 w-86 rounded-md border-solid cursor-pointer hover:bg-blue-400 active:bg-blue-700 disabled:bg-gray-300 disabled:font-bold disabled:text-gray-400">Button Label</button>
    </div>
    </div>

    {/* primary-medium-loading */}
    <div>
    <h1 className="font-bold p-2">Button Primary Medium Loading</h1>
    <div className="flex flex-row">
    <button className="bg-blue-900 text-white h-12 w-86 rounded-md border-solid cursor-pointer">
        <div className="flex items-center justify-center">
            <img src="/loading.png" alt="loading" className="animate-spin w-6 h-6" />
        </div>
    </button>
    </div>
    </div>

    </div>
    )
}

export default ButtonPrimaryMedium
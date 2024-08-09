import React from 'react'

const SpinnerComp = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            <h1 className='bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-2xl md:text-4xl font-medium tracking-tight text-transparent ml-3'>Loading Excitement...</h1>
        </div>
    )
}

export default SpinnerComp

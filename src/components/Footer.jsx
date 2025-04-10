"use client"

export const Footer = () =>{
    return <div className="bg-blue-500 mt-3 h-60 md:justify-around">
        <div className="flex flex-col items-center justify-center mt-3">
            <div className="text-2xl font-semibold">
                Welcome to work manager
            </div>
            <div className="p-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, natus!</p>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center p-5 mt-3">
            <div>
                Important links
            </div>
            <div className="flex flex-col mt-2">
                <a href="#!">Facebook</a>
                <a href="#!">Youtube</a>
                <a href="#!">Instagram</a>
            </div>
        </div>
    </div>
}
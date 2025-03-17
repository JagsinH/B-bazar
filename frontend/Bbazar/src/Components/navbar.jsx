import { HandPlatter } from 'lucide-react';

export default function Navbar(){
    return(
        <>
        <div className="bg-orange-500 h-15 w-full rounded flex">
            <div className="text-white text-2xl p-2 items-center font-bold flex-1/3"><a href="">Bite baazar</a></div>
            <div className="flex-1/3 text-2xl text-white p-2.5"><a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-platter"><path d="M12 3V2"/><path d="m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"/><path d="M2 14h12a2 2 0 0 1 0 4h-2"/><path d="M4 10h16"/><path d="M5 10a7 7 0 0 1 14 0"/><path d="M5 14v6a1 1 0 0 1-1 1H2"/></svg>
            </a></div>
            <div className="text-white block text-center font-bold flex-1/3"><ul className="flex gap-3 text-center p-4 float-end">
                <li className="hover:bg-orange-700 w-fit"><a href="#">browse</a></li>
                <li className="hover:bg-orange-700"><a href="#">order</a></li>
                </ul></div>
        </div>
        </>
    )
}
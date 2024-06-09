import hero from '../public/images/hero.jpg';
import Image from 'next/image';
import TaperFade from '../public/images/TaperedFade.jpg';
import fade from '../public/images/fade.jpg';
import Mullet from '../public/images/Mullet.jpeg';
import Textured from '../public/images/Textured.webp';
import Link from 'next/link';

function Body() {
    return (
        <div>
            <article className="relative overflow-hidden shadow transition hover:shadow-lg">
        <Image alt="" src={hero} className="absolute inset-0 h-full w-full object-cover" />
        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
            <a className="block text-center">
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                
            </p>
            </div>
        </div>
    </article>
        <div className="bg-gray-900">
        <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
            <h2 className="text-xl font-bold text-gray-100 sm:text-3xl">
            Nuestro trabajo
            </h2>
            <br />
        </header>

        <div className="flex justify-center">
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li className="rounded-lg overflow-hidden shadow-md">
                <Link className="group block overflow-hidden">
                <Image src={TaperFade} alt="" className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"/>
                
                <div className="relative bg-gray-200 pt-3">
                    <h3 className="text-2xl font-bold text-center text-gray-900 mt-4 mb-2  group-hover:text-gray-600 transition-all duration-300 ease-in-out">
                    Tapered Fade
                    </h3>

                    <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                        {" "}
                    </span>
                    </p>
                </div>
                </Link>
            </li>

            <li className="rounded-lg overflow-hidden shadow-md">
                <Link className="group block overflow-hidden">
                <Image src={Mullet} alt="" className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"/>

                <div className="relative bg-gray-200 pt-3">
                    <h3 className="text-2xl font-bold text-center text-gray-900 mt-4 mb-2  group-hover:text-gray-600 transition-all duration-300 ease-in-out">
                    Mullet
                    </h3>

                    <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                        
                    </span>
                    </p>
                </div>
                </Link>
            </li>

            <li className="rounded-lg overflow-hidden shadow-md">
                <Link className="group block overflow-hidden">
                <Image src={fade} alt="" className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"/>

                <div className="relative bg-gray-200 pt-3">
                    <h3 className="text-2xl font-bold text-center text-gray-900 mt-4 mb-2  group-hover:text-gray-600 transition-all duration-300 ease-in-out">
                    Textured
                    </h3>

                    <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                        
                    </span>
                    </p>
                </div>
                </Link>
            </li>

            <li className="rounded-lg overflow-hidden shadow-md"> 
                <Link className="group block overflow-hidden">
                <Image src={Textured} alt="" className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"/>

                <div className="relative bg-gray-200 pt-3">
                    <h3 className="text-2xl font-bold text-center text-gray-900 mt-4 mb-2  group-hover:text-gray-600 transition-all duration-300 ease-in-out">
                    High Fade
                    </h3>

                    <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                        {" "}
                    </span>
                    </p>
                </div>
                </Link>
            </li>
            </ul>
        </div>
        </div>
    </section>
    <div className="text-center">
    <Link
        className="rounded-full border border-customA bg-gray-900 hover:bg-gray-200 hover:text-gray-900 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-customA focus:outline-none focus:ring active:text-opacity-75 transition-all"
        href="/citas"
        >
        Hacer cita
    </Link>
    </div>
    </div>
        </div>
    )
}

export default Body;
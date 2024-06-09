import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import corte from '../public/images/corte.jpg'

const About = () => {
    return (
        <div>
        <Head>
            <title>About Page</title>
            <meta name="description" content="About page description" />
        </Head>
        <Header />
        <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                <div className="relative z-10 lg:py-16">
                    <div className="relative h-64 sm:h-80 lg:h-full">
                    <Image alt="" src={corte}className="absolute inset-0 h-full w-full object-cover rounded"/>
                    </div>
                </div>

                <div className="relative flex items-center bg-gray-900">
                    <span
                    className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-900"
                    ></span>

                    <div className="p-8 sm:p-16 lg:p-24">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                        Visión
                    </h2>
                    <p className="mt-4 text-gray-100">
                        Ser la barbería líder en ofrecer servicios de calidad y estilo vanguardista, creando una experiencia única para cada cliente.
                    </p>

                    <h2 className="text-2xl font-bold sm:text-3xl mt-8">
                        Misión
                    </h2>
                    <p className="mt-4 text-gray-100">
                        Nuestra misión es proporcionar cortes de cabello y servicios de cuidado personal excepcionales, combinando tradición y modernidad, para que nuestros clientes se sientan confiados y con estilo.
                    </p>

                    <h2 className="text-2xl font-bold sm:text-3xl mt-8">
                        Promesa
                    </h2>
                    <p className="mt-4 text-gray-100">
                        En nuestra barbería, nos comprometemos a brindar un ambiente acogedor, un servicio amable y resultados impecables en cada visita. La satisfacción del cliente es nuestra prioridad.
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <Footer />
        </div>
    )
}

export default About
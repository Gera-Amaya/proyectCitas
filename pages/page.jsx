import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
        <Head>
            <title>Home Page</title>
            <meta name="description" content="Home page description" />
        </Head>
        <Header />
        <main>
            <h1>Welcome to the Home Page</h1>
        </main>
        
        <Footer />
        </div>
    )
}

export default Home
import Head from 'next/head'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Body from '../../components/Body';
import Api from '../../components/Api';


const Home = () => {
    return (
        <div>
        <Head>
            <title>Home Page</title>
            <meta name="description" content="Home page description" />
        </Head>
        <Header />
        <Body />
        <Footer />
        </div>
    )
}

export default Home
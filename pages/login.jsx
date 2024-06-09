import Head from 'next/head';
import styles from '../styles/Auth.module.css';
import Header from '../components/Header';

const Login = () => {
    return (
        <div>
            <Header/>
            <div className={styles.container}>
        <Head>
            <title>Login</title>
            <meta name="description" content="Login page" />
        </Head>
            <div className={styles.formContainer}>
                <h1 className={styles.authTitle}>Login</h1>
                <form>
                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className={styles.submitButton}>Login</button>
                </form>
            </div>
        </div>
        </div>
        
    );
};

export default Login;

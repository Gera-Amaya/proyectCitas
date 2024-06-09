import Head from 'next/head';
import styles from '../styles/Auth.module.css';
import Header from '../components/Header';

const Register = () => {
    return (
        <div>
            <Header/>
            <div className={styles.container}>
            <Head>
                <title>Register</title>
                <meta name="description" content="Register page" />
            </Head>
                <div className={styles.formContainer}>
                    <h1 class={styles.authTitle}>Register</h1>
                    <form>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className={styles.submitButton}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

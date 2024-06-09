import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css';

const BlogPost = ({ post }) => {
    const router = useRouter();
    const { id } = router.query;

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        </div>
    );
    };

    export async function getStaticPaths() {
    // Aquí es donde defines las rutas dinámicas que deseas pre-renderizar en el momento de la construcción.
    const response = await fetch('https://api.example.com/posts');
    const posts = await response.json();

    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }));

    return { paths, fallback: true };
    }

    export async function getStaticProps({ params }) {
    // Aquí obtienes los datos específicos para cada post basado en el id.
    const response = await fetch(`https://api.example.com/posts/${params.id}`);
    const post = await response.json();

    return { props: { post } };
}

export default BlogPost;
// blog/[id].js

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
    // Datos de ejemplo
    const posts = [
        { id: 1, title: "Post 1", content: "Contenido del post 1" },
        { id: 2, title: "Post 2", content: "Contenido del post 2" },
    ];

    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }));

    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    // Datos de ejemplo
    const posts = [
        { id: 1, title: "Post 1", content: "Contenido del post 1" },
        { id: 2, title: "Post 2", content: "Contenido del post 2" },
    ];

    const post = posts.find((post) => post.id.toString() === params.id);

    if (!post) {
        return { notFound: true };
    }

    return { props: { post } };
}

export default BlogPost;

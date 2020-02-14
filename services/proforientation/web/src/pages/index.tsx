import * as React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { apiClient, Post } from "@ucheba/dal/proforientation";

interface Props {
    posts: Post[];
}

const BlogIndex: NextPage<Props> = ({ posts }) => {
    return (
        <div>
            <h1>Acme's blog</h1>
            <ul>
                {posts.map(post => (
                    <li key={ post. id}><Link passHref href={`/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

BlogIndex.getInitialProps = async () => {
    const posts = await apiClient.posts.getListing();
    return { posts };
};

export default BlogIndex;

import Layout from '@/components/Layout';
import { getAllPosts } from '@/utils/posts';
import Link from 'next/link';

export default function Blog({ posts }: any) {
  return (
    <Layout title="Blog">
      <h1 className="text-2xl font-bold mb-6">My Blog Posts</h1>
      <ul className="space-y-6">
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 text-xl font-semibold hover:underline">
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}

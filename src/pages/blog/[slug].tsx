// /src/pages/blog/[slug].tsx
import Layout from '@/components/Layout';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllBlogSlugs, getBlogHtml } from '@/utils/blogUtils';

export default function BlogPage({ post }: any) {
  return (
    <Layout title={post.title}>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{post.date}</p>
      <article className="prose prose-lg">
        <MDXRemote source={post} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBlogSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = await getBlogHtml(params?.slug as string);
  return {
    props: blog,
  };
};

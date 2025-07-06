import Layout from '@/components/Layout';
import { getPostBySlug, getAllSlugs } from '@/utils/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function Post({ frontMatter, content }: any) {
  return (
    <Layout title={frontMatter.title}>
      <h1 className="text-3xl font-bold mb-2">{frontMatter.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{frontMatter.date}</p>
      <article className="prose prose-lg">
        <MDXRemote source={content} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllSlugs();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { frontMatter, content } = getPostBySlug(params.slug);
  return { props: { frontMatter, content } };
}
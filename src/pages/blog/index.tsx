import Layout from '@/components/Layout';
import { getAllBlogPosts } from '@/utils/blogUtils';
import Link from 'next/link';

export async function getStaticProps() {
  const posts = getAllBlogPosts();
  return { props: { posts } };
}

export default function Blog({ posts }: any) {
  return (
    <Layout title="Blog">
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Explore Blogs</h1>

        {/* Featured */}
        {posts[0] && (
          <Link href={`/blog/${posts[0].slug}`}>
            <div className="mb-12 relative group">
              <img src={posts[0].coverImage} alt={posts[0].title} className="w-full h-80 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg group-hover:bg-opacity-50 transition">
                <div className="absolute bottom-4 left-4 text-white font-satoshi">
                  <h2 className="text-2xl ">{posts[0].title}</h2>
                  <p className="text-sm">{posts[0].date}</p>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Rest of the blogs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 font-satoshi">
          {posts.slice(1).map((post: any) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <div className="relative group overflow-hidden rounded-sm shadow-md hover:shadow-lg transition-all cursor-pointer">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-5 w-full bg-black/20 text-white px-4 py-3 z-10 text-center">
                  <h3 className="text-lg font-satoshi">{post.title}</h3>
                </div>
                <div className="absolute inset-0 bg-black/70 text-white p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-center">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </Layout>
  );
}

import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <Layout title="Home">
      {/* <section className="text-center py-20">
        <h1 className="text-4xl font-bold">Hi, I&apos;m Nitesh 👋 </h1>
        <p className="mt-4 text-lg text-gray-600">SDE | Blogger | Creator</p>
      </section> */}
      <HeroSection/>
    </Layout>
  );
}

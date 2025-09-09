import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import SkillSection from '@/components/SkillSection';

export default function Home() {
  return (
    <Layout title="Home">
      <HeroSection/>
      <SkillSection/>
    </Layout>
  );
}

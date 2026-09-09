import Hero from '../../components/Hero';
import OurStory from '../../components/OurStory';
import Gallery from '../../components/Gallery';
import Videos from '../../components/Videos';
import Footer from '../../components/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <OurStory />
      <Gallery />
      <Videos />
      <Footer />
    </main>
  );
}

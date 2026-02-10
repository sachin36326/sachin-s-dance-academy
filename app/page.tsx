import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import DanceStyles from '@/components/home/DanceStyles';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';
import FadeIn from '@/components/animations/FadeIn';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DanceSchool',
    name: "Sachin's Dance Academy",
    image: 'https://sachinsdanceacademy.com/images/logo.png',
    description: 'India\'s Premier Online Dance Academy offering courses in Contemporary, Hip-Hop, and more.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Dance Street', // Update with real address if available
      addressLocality: 'Mumbai',
      addressRegion: 'MH',
      postalCode: '400001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.0760,
      longitude: 72.8777,
    },
    url: 'https://sachinsdanceacademy.com',
    telephone: '+919876543210', // Update with real phone
    priceRange: '₹2999 - ₹6999',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    sameAs: [
      'https://instagram.com/sachinsdanceacademy',
      'https://facebook.com/sachinsdanceacademy',
      'https://youtube.com/sachinsdanceacademy'
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <FadeIn delay={100}><Stats /></FadeIn>
      <FadeIn delay={200}><DanceStyles /></FadeIn>
      <FadeIn delay={300}><FeaturedCourses /></FadeIn>
      <FadeIn delay={400}><Testimonials /></FadeIn>
      <FadeIn delay={500}><CTA /></FadeIn>
      <Footer />
    </main>
  );
}

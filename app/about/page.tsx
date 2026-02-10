'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Users, Heart, Target } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We believe dance is more than movement—it\'s a form of expression that connects hearts.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our instructors are world-class professionals dedicated to bringing out the best in every student.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join a vibrant community of dancers who support, inspire, and grow together.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We leverage technology to make quality dance education accessible to everyone, everywhere.',
    },
  ];

  const instructors = [
    {
      name: 'Shahbaaz Shaikh',
      specialty: 'Contemporary Dance',
      image: '/images/instructors/shahbaaz.jpeg',
      bio: 'Trained under legendary Indian contemporary dancers, he blends traditional Indian expressions with modern movements. His choreography has been featured in major Indian cultural festivals.',
    },
    {
      name: 'Sachin Chauhan',
      specialty: 'Hip-Hop & Breaking',
      image: '/images/instructors/sachin.jpeg',
      bio: 'Born and raised in Mumbai, he began dancing in local cyphers and now leads Indias top breaking crew. His innovative style fuses hip-hop with Indian classical and folk movements.',
    },
    {
      name: 'Afrose Shaikh',
      specialty: 'Classical Ballet',
      image: '/images/instructors/afrose.jpeg',
      bio: 'One of the few Indian ballerinas to have trained at the Royal Ballet School, she now runs her own academy in Delhi. She incorporates Indian classical gestures into ballet, creating a unique fusion.',
    },
    {
      name: 'Karan Singh',
      specialty: 'Bollywood Dance',
      image: '/images/instructors/karan.jpeg',
      bio: 'With over a decade of experience in Bollywood, he has choreographed for top stars and blockbuster movies. His style is a vibrant mix of traditional Indian dance and modern Bollywood.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="gradient-title">Sachin's Dance Academy</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Empowering dancers worldwide through innovative online education and world-class instruction
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our <span className="gradient-gold">Story</span>
          </h2>
          <div className="max-w-none text-lg leading-relaxed text-gray-300 space-y-6 text-justify">
            <p>
              Founded in 2020, Sachin's Dance Academy started with a simple yet powerful vision: to democratize dance education. We realized that while talent is universal, opportunity is not. Many aspiring dancers lacked access to quality training due to geographical or financial constraints.
            </p>
            <p>
              What began as a humble Zoom class with just five students has blossomed into a global movement. Today, we are India's premier online dance ecosystem, nurturing over 10,000 students across 50+ countries. Our platform bridges the gap between traditional gurukul-style teaching and modern digital convenience.
            </p>
            <p>
              From classical Kathak rhythms to high-energy Hip-Hop beats, we curate courses that respect tradition while embracing innovation. Our carefully designed curriculum ensures that every student—whether a complete beginner or an advanced performer—finds their unique rhythm.
            </p>
            <p>
              We are more than just an academy; we are a family. A community of dreamers, shakers, and movers who believe that dance is the hidden language of the soul. We are committed to helping you discover that language, one step at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us - New Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Why <span className="text-gradient">Choose Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-primary/20 mb-6 backdrop-blur-sm border border-white/10">
                <span className="text-4xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-white">Expert Curriculum</h3>
              <p className="text-gray-400">
                Courses designed by industry veterans, broken down into easy-to-master modules that guarantee progress.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-secondary/20 mb-6 backdrop-blur-sm border border-white/10">
                <span className="text-4xl">🎥</span>
              </div>
              <h3 className="text-xl font-bold text-white">HD Production</h3>
              <p className="text-gray-400">
                Crystal clear multi-angle video lessons that let you see every detail of footwork and expression.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-accent/20 mb-6 backdrop-blur-sm border border-white/10">
                <span className="text-4xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-white">Certification</h3>
              <p className="text-gray-400">
                Earn recognized certificates upon course completion to showcase your achievements to the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our <span className="gradient-gold">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 shadow-xl hover-lift text-center border border-white/5">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 shadow-lg shadow-primary/30">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Meet Our <span className="gradient-title">Instructors</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="group glass-card rounded-2xl overflow-hidden shadow-xl hover-lift border border-white/5">
                <div
                  className="h-64 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${instructor.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-white mb-2">{instructor.name}</h3>
                  <p className="text-secondary font-semibold mb-2">{instructor.specialty}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{instructor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Clock,
  Users,
  Star,
  Award,
  PlayCircle,
  CheckCircle,
  ArrowLeft,
  Heart,
  Share2
} from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id;
  const { addItem, items } = useCart();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Mock course data
  const courses = {
    '1': {
      id: 1,
      title: 'Contemporary Dance Masterclass',
      instructor: 'Shahbaaz Shaikh',
      instructorBio: 'Professional dancer with 15+ years of experience in contemporary dance',
      style: 'Contemporary',
      difficulty: 'Intermediate',
      price: 4999,
      duration: '8 weeks',
      students: 1250,
      rating: 4.9,
      reviews: 342,
      thumbnail: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800',
      description: 'Master the art of contemporary dance with this comprehensive course. Learn fluid movements, emotional expression, and advanced techniques that will transform your dancing.',
      videoId: '3e5TQjaNysg', // Contemporary (Alex Warren)
      whatYouLearn: [
        'Fundamental contemporary dance techniques',
        'Floor work and improvisation',
        'Emotional expression through movement',
        'Choreography creation and performance',
        'Body awareness and flexibility training'
      ],
      curriculum: [
        { week: 1, title: 'Introduction to Contemporary Dance', lessons: 5 },
        { week: 2, title: 'Basic Techniques and Movements', lessons: 6 },
        { week: 3, title: 'Floor Work Fundamentals', lessons: 5 },
        { week: 4, title: 'Improvisation and Expression', lessons: 6 },
        { week: 5, title: 'Advanced Techniques', lessons: 5 },
        { week: 6, title: 'Choreography Basics', lessons: 6 },
        { week: 7, title: 'Performance Preparation', lessons: 5 },
        { week: 8, title: 'Final Performance', lessons: 4 }
      ],
      requirements: [
        'Basic dance experience recommended',
        'Comfortable workout clothes',
        'Dedicated practice space',
        'Willingness to learn and express'
      ]
    },
    '2': {
      id: 2,
      title: 'Hip-Hop Fundamentals',
      instructor: 'Sachin Chauhan',
      instructorBio: 'Award-winning hip-hop choreographer and street dance expert',
      style: 'Hip-Hop',
      difficulty: 'Beginner',
      price: 3999,
      duration: '6 weeks',
      students: 2100,
      rating: 4.8,
      reviews: 567,
      thumbnail: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800',
      description: 'Start your hip-hop journey with this beginner-friendly course. Learn the fundamentals of street dance, popping, locking, and breaking.',
      videoId: 'OZEk_ztv8ww', // Hip-Hop (Mihran Kirakosian)
      whatYouLearn: [
        'Hip-hop basic moves and grooves',
        'Popping and locking techniques',
        'Breaking fundamentals',
        'Freestyle and battle skills',
        'Music interpretation and rhythm'
      ],
      curriculum: [
        { week: 1, title: 'Hip-Hop History and Basics', lessons: 5 },
        { week: 2, title: 'Grooves and Foundation', lessons: 6 },
        { week: 3, title: 'Popping Techniques', lessons: 5 },
        { week: 4, title: 'Locking Fundamentals', lessons: 6 },
        { week: 5, title: 'Breaking Basics', lessons: 5 },
        { week: 6, title: 'Freestyle and Performance', lessons: 5 }
      ],
      requirements: [
        'No prior dance experience needed',
        'Sneakers and comfortable clothes',
        'Positive attitude and energy',
        'Willingness to practice regularly'
      ]
    },
    '3': {
      id: 3,
      title: 'Classical Ballet Technique',
      instructor: 'Afrose Shaikh',
      instructorBio: 'Classically trained ballet instructor with international performance experience',
      style: 'Ballet',
      difficulty: 'Advanced',
      price: 5999,
      duration: '12 weeks',
      students: 850,
      rating: 5.0,
      reviews: 198,
      thumbnail: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800',
      description: 'Refine your ballet technique with this advanced course covering classical ballet methodology, pointe work, and performance artistry.',
      videoId: '6Fz27G6WwWw', // Ballet (Ballet for Kids - Safe/Embeddable)
      whatYouLearn: [
        'Advanced ballet technique',
        'Pointe work mastery',
        'Classical variations',
        'Performance quality',
        'Injury prevention and body alignment'
      ],
      curriculum: [
        { week: 1, title: 'Advanced Barre Work', lessons: 6 },
        { week: 2, title: 'Center Practice', lessons: 6 },
        { week: 3, title: 'Allegro Combinations', lessons: 5 },
        { week: 4, title: 'Pointe Technique I', lessons: 6 },
        { week: 5, title: 'Pointe Technique II', lessons: 6 },
        { week: 6, title: 'Classical Variations I', lessons: 5 },
        { week: 7, title: 'Classical Variations II', lessons: 5 },
        { week: 8, title: 'Adagio and Partnering', lessons: 6 },
        { week: 9, title: 'Performance Preparation', lessons: 5 },
        { week: 10, title: 'Rehearsals', lessons: 6 },
        { week: 11, title: 'Final Rehearsals', lessons: 5 },
        { week: 12, title: 'Performance Week', lessons: 4 }
      ],
      requirements: [
        'Minimum 3 years ballet experience',
        'Pointe shoes (if applicable)',
        'Ballet attire and shoes',
        'Strong dedication and discipline'
      ]
    },
    '4': {
      id: 4,
      title: 'Bollywood Dance Basics',
      instructor: 'Karan Singh',
      instructorBio: 'Bollywood choreographer with credits in major film productions',
      style: 'Bollywood',
      difficulty: 'Beginner',
      price: 2999,
      duration: '4 weeks',
      students: 3200,
      rating: 4.7,
      reviews: 892,
      thumbnail: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800',
      description: 'Learn the vibrant and energetic moves of Bollywood dance. Perfect for beginners who want to dance like their favorite movie stars!',
      videoId: 'XkLMj1FH1SY', // Bollywood (Dance with Deepti - 30 min Workout)
      whatYouLearn: [
        'Classic Bollywood dance moves',
        'Facial expressions and acting',
        'Popular film choreography',
        'Rhythm and musicality',
        'Performance confidence'
      ],
      curriculum: [
        { week: 1, title: 'Bollywood Basics and Expressions', lessons: 6 },
        { week: 2, title: 'Classic Film Choreography', lessons: 6 },
        { week: 3, title: 'Modern Bollywood Styles', lessons: 5 },
        { week: 4, title: 'Performance and Showcase', lessons: 5 }
      ],
      requirements: [
        'No dance experience required',
        'Comfortable Indian or workout attire',
        'Love for Bollywood music',
        'Enthusiasm and energy'
      ]
    },
    '5': {
      id: 5,
      title: 'Salsa & Latin Dance',
      instructor: 'Marium Khan',
      instructorBio: 'International salsa champion and Latin dance specialist',
      style: 'Salsa',
      difficulty: 'Intermediate',
      price: 4499,
      duration: '6 weeks',
      students: 980,
      rating: 4.9,
      reviews: 276,
      thumbnail: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800',
      description: 'Spice up your dance skills with this exciting salsa and Latin dance course. Learn partner work, turns, and authentic Latin rhythms.',
      videoId: 'DTXQuA0xJrw', // Salsa (Social Dance Online)
      whatYouLearn: [
        'Salsa basic steps and patterns',
        'Partner connection and leading/following',
        'Turns and spins',
        'Bachata and Merengue basics',
        'Latin musicality and timing'
      ],
      curriculum: [
        { week: 1, title: 'Salsa Fundamentals', lessons: 5 },
        { week: 2, title: 'Partner Work Basics', lessons: 6 },
        { week: 3, title: 'Turns and Combinations', lessons: 5 },
        { week: 4, title: 'Bachata Introduction', lessons: 6 },
        { week: 5, title: 'Advanced Patterns', lessons: 5 },
        { week: 6, title: 'Social Dancing and Performance', lessons: 5 }
      ],
      requirements: [
        'Basic dance experience helpful',
        'Dance shoes or smooth-soled shoes',
        'Partner optional (not required)',
        'Sense of rhythm'
      ]
    },
    '6': {
      id: 6,
      title: 'Kathak Classical Dance',
      instructor: 'Guru Ramesh Kumar',
      instructorBio: 'Master of Kathak with 30+ years of teaching and performance experience',
      style: 'Kathak',
      difficulty: 'Advanced',
      price: 6999,
      duration: '16 weeks',
      students: 650,
      rating: 5.0,
      reviews: 145,
      thumbnail: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=800',
      description: 'Immerse yourself in the rich tradition of Kathak, one of India\'s eight classical dance forms. Master intricate footwork, spins, and storytelling.',
      videoId: 'I59Zr1z3FBA', // Kathak (Sadler's Wells)
      whatYouLearn: [
        'Traditional Kathak technique',
        'Footwork patterns (tatkar)',
        'Spins and pirouettes (chakkars)',
        'Abhinaya (expression and storytelling)',
        'Tabla and rhythm understanding'
      ],
      curriculum: [
        { week: 1, title: 'Introduction to Kathak', lessons: 5 },
        { week: 2, title: 'Basic Tatkar Patterns', lessons: 6 },
        { week: 3, title: 'Hand Gestures (Hastak)', lessons: 5 },
        { week: 4, title: 'Thaat and Aamad', lessons: 6 },
        { week: 5, title: 'Tukda and Toda', lessons: 5 },
        { week: 6, title: 'Chakkar Technique I', lessons: 6 },
        { week: 7, title: 'Chakkar Technique II', lessons: 5 },
        { week: 8, title: 'Paran and Kavit', lessons: 6 },
        { week: 9, title: 'Abhinaya Basics', lessons: 5 },
        { week: 10, title: 'Thumri and Bhajan', lessons: 6 },
        { week: 11, title: 'Tarana Composition', lessons: 5 },
        { week: 12, title: 'Advanced Compositions', lessons: 6 },
        { week: 13, title: 'Performance Preparation I', lessons: 5 },
        { week: 14, title: 'Performance Preparation II', lessons: 6 },
        { week: 15, title: 'Final Rehearsals', lessons: 5 },
        { week: 16, title: 'Arangetram (Debut Performance)', lessons: 4 }
      ],
      requirements: [
        'Prior classical dance experience required',
        'Kathak costume and ghungroo (ankle bells)',
        'Understanding of Indian classical music',
        'Dedication to traditional art form'
      ]
    }
  };

  const course = courses[courseId as keyof typeof courses] || courses['1'];

  useEffect(() => {
    // Check if user is authenticated
    const userStr = typeof window !== 'undefined' ? localStorage.getItem('sachinsdance_user') : null;

    // Check enrollment status
    const enrolledStr = typeof window !== 'undefined' ? localStorage.getItem('sachinsdance_enrolled') : null;
    if (enrolledStr && courseId) {
      try {
        const enrolled = JSON.parse(enrolledStr);
        setIsEnrolled(enrolled.includes(courseId));
      } catch { }
    }

    // Check if course is in cart
    if (items) {
      setIsInCart(items.some((item) => item.id.toString() === courseId));
    }
  }, [courseId, items]);

  const handleEnroll = () => {
    // Check if user is logged in
    const userStr = typeof window !== 'undefined' ? localStorage.getItem('sachinsdance_user') : null;

    if (!userStr) {
      // Redirect to login
      router.push('/login?redirect=/courses/' + courseId);
      return;
    }

    // Add to enrolled courses
    const enrolledStr = localStorage.getItem('sachinsdance_enrolled');
    let enrolled = enrolledStr ? JSON.parse(enrolledStr) : [];
    if (!enrolled.includes(courseId)) {
      enrolled.push(courseId);
      localStorage.setItem('sachinsdance_enrolled', JSON.stringify(enrolled));
      setIsEnrolled(true);

      // Dispatch storage event to update dashboard if open
      window.dispatchEvent(new Event('storage'));

      // Redirect to dashboard
      router.push('/dashboard');
    }
  };

  const handleAddToCart = () => {
    // Check if user is logged in
    const userStr = typeof window !== 'undefined' ? localStorage.getItem('sachinsdance_user') : null;

    if (!userStr) {
      // Redirect to login
      router.push('/login?redirect=/courses/' + courseId);
      return;
    }

    // Add to cart
    addItem({
      id: course.id,
      title: course.title,
      price: course.price,
      thumbnail: course.thumbnail,
    });

    // Redirect to cart
    router.push('/cart');
  };

  return (
    <main className="min-h-screen bg-light">
      <Navbar />

      {/* Back Button */}
      <div className="pt-24 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 text-gray-900 hover:text-primary transition font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Courses</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 text-white">
              <div className="mb-6">
                <span className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/30 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {course.style}
                </span>
                <span className="ml-3 inline-block bg-white/20 backdrop-blur-sm border border-white/10 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {course.difficulty}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-lg">
                {course.title}
              </h1>

              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-8 text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white">{course.rating}</span>
                  <span className="text-gray-300">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Users className="w-5 h-5" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={`https://ui-avatars.com/api/?name=${course.instructor}&background=random`}
                  alt={course.instructor}
                  className="w-14 h-14 rounded-full border-2 border-white/20 object-cover"
                />
                <div>
                  <p className="font-bold text-white text-lg">{course.instructor}</p>
                  <p className="text-gray-300 text-sm">{course.instructorBio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="bg-white pb-12 -mt-10 relative z-20 rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Detailed Content */}
            <div className="lg:col-span-2 space-y-8 pt-12">
              {/* What You'll Learn */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.whatYouLearn.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
                <div className="space-y-3">
                  {course.curriculum.map((week, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary transition">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">Week {week.week}: {week.title}</p>
                          <p className="text-sm text-gray-600">{week.lessons} lessons</p>
                        </div>
                        <PlayCircle className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
                <ul className="space-y-3">
                  {course.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Enrollment Card & Features */}
            <div className="lg:col-span-1 -mt-32 relative z-30 space-y-8">
              {/* Enrollment Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 border border-gray-200 group cursor-pointer" onClick={() => setShowVideo(true)}>
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition">
                    <PlayCircle className="w-16 h-16 text-white bg-black/50 rounded-full p-2 backdrop-blur-sm group-hover:scale-110 transition" />
                  </div>
                </div>

                {/* Video Modal */}
                {showVideo && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setShowVideo(false)}>
                    <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${course.videoId}?autoplay=1`}
                        title={course.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                      <button
                        onClick={() => setShowVideo(false)}
                        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </button>
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-4xl font-bold text-primary">₹{course.price.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-gray-600">One-time payment • Lifetime access</p>
                </div>

                {isEnrolled ? (
                  <div className="space-y-3">
                    <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">You're enrolled!</span>
                    </div>
                    <Link
                      href={`/dashboard/courses/${course.id}`}
                      className="block w-full btn-primary text-center"
                    >
                      Go to Course
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <button
                      onClick={handleEnroll}
                      className="w-full btn-primary"
                    >
                      Enroll Now
                    </button>
                    <button
                      onClick={handleAddToCart}
                      className="w-full border-2 border-primary text-primary font-semibold py-3 rounded-xl hover:bg-primary/10 transition"
                    >
                      {isInCart ? 'Go to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                )}

                <div className="flex gap-2 mb-6">
                  <button className="flex-1 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition flex items-center justify-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>Save</span>
                  </button>
                  <button className="flex-1 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition flex items-center justify-center space-x-2">
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Lifetime access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Certificate of completion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">30-day money-back guarantee</span>
                  </div>
                </div>
              </div>

              {/* Course Features */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Course Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-gray-900">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Difficulty</span>
                    <span className="font-semibold text-gray-900">{course.difficulty}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Students</span>
                    <span className="font-semibold text-gray-900">{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Language</span>
                    <span className="font-semibold text-gray-900">English, Hindi</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Certificate</span>
                    <span className="font-semibold text-gray-900">Yes</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

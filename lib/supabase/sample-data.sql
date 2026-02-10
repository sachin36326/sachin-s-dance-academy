-- Sample Data for Sachin's Dance Academy
-- Run this after setting up the main schema

-- Insert Sample Courses
INSERT INTO courses (
  title, 
  description, 
  instructor_name, 
  instructor_bio,
  dance_style, 
  difficulty, 
  price, 
  duration_weeks, 
  is_popular, 
  thumbnail_url,
  video_url,
  curriculum
) VALUES
(
  'Contemporary Dance Masterclass',
  'Dive deep into the world of contemporary dance with this comprehensive masterclass. Learn to express emotions through fluid movements, develop your unique style, and master advanced techniques used by professional dancers worldwide.',
  'Priya Sharma',
  '15+ years of experience, trained at Juilliard School of Dance. Former principal dancer with Mumbai Dance Company.',
  'Contemporary',
  'Intermediate',
  4999,
  8,
  true,
  'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800',
  'https://www.youtube.com/watch?v=sample',
  '{"modules": [
    {"title": "Foundation & Technique", "lessons": 8},
    {"title": "Emotional Expression", "lessons": 6},
    {"title": "Choreography Basics", "lessons": 10},
    {"title": "Performance Skills", "lessons": 8}
  ]}'::jsonb
),
(
  'Hip-Hop Fundamentals',
  'Master the fundamentals of hip-hop dance from the ground up. This course covers popping, locking, breaking, and freestyle techniques. Perfect for beginners who want to develop street dance skills.',
  'Rahul Verma',
  'International hip-hop champion, featured choreographer in Bollywood films. 10+ years teaching experience.',
  'Hip-Hop',
  'Beginner',
  3999,
  6,
  true,
  'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800',
  'https://www.youtube.com/watch?v=sample',
  '{"modules": [
    {"title": "Hip-Hop History & Culture", "lessons": 4},
    {"title": "Basic Moves & Grooves", "lessons": 8},
    {"title": "Popping & Locking", "lessons": 6},
    {"title": "Freestyle Techniques", "lessons": 6}
  ]}'::jsonb
),
(
  'Classical Ballet Technique',
  'An advanced course in classical ballet technique covering barre work, center practice, and repertoire. Designed for dancers with prior ballet experience looking to refine their technique.',
  'Anjali Desai',
  'Royal Ballet School graduate with 20+ years of teaching experience. Former soloist with National Ballet Company.',
  'Ballet',
  'Advanced',
  5999,
  12,
  false,
  'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800',
  'https://www.youtube.com/watch?v=sample',
  '{"modules": [
    {"title": "Advanced Barre Work", "lessons": 12},
    {"title": "Center Practice", "lessons": 10},
    {"title": "Pointe Technique", "lessons": 8},
    {"title": "Classical Repertoire", "lessons": 10}
  ]}'::jsonb
),
(
  'Bollywood Dance Basics',
  'Learn the vibrant and energetic style of Bollywood dance! This beginner-friendly course teaches you popular Bollywood moves, expressions, and choreography from hit movies.',
  'Karan Singh',
  'Award-winning choreographer for major Bollywood productions. Trained over 5000 students worldwide.',
  'Bollywood',
  'Beginner',
  2999,
  4,
  true,
  'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800',
  'https://www.youtube.com/watch?v=sample',
  '{"modules": [
    {"title": "Bollywood Dance Introduction", "lessons": 4},
    {"title": "Basic Steps & Moves", "lessons": 6},
    {"title": "Expressions & Acting", "lessons": 4},
    {"title": "Popular Song Choreography", "lessons": 6}
  ]}'::jsonb
),
(
  'Salsa & Latin Dance',
  'Feel the passion of Latin dance! Learn salsa, bachata, and merengue with proper technique, partner work, and styling. Perfect for social dancing and performances.',
  'Maria Rodriguez',
  'International Latin dance champion from Cuba. 12+ years teaching salsa worldwide.',
  'Salsa',
  'Intermediate',
  4499,
  6,
  false,
  'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800',
  'https://www.youtube.com/watch?v=sample',
  '{"modules": [
    {"title": "Salsa Fundamentals", "lessons": 8},
    {"title": "Partner Work & Leading", "lessons": 6},
    {"title": "Bachata Basics", "lessons": 4},
    {"title": "Styling & Performance", "lessons": 6}
  ]}'::jsonb
),
(
  'Kathak Classical Dance',
  'Immerse yourself in the ancient art of Kathak, one of India\'s eight classical dance forms. Learn intricate footwork, spins, expressions, and traditional compositions.',
  'Guru Ramesh Kumar',
  'Padma Shri awardee, trained under legendary Pandit Birju Maharaj. 30+ years of teaching experience.',
  'Kathak',
  'Advanced',
  6999,
  16,
  false,
  'https://images.unsplash.com/photo-1583224964811-5e1f8e6d3b0e?w=800',
  'https://www.youtube.com/watch?v=sample',
  '{"modules": [
    {"title": "Kathak History & Theory", "lessons": 6},
    {"title": "Basic Footwork (Tatkar)", "lessons": 10},
    {"title": "Spins (Chakkars)", "lessons": 8},
    {"title": "Expressions (Abhinaya)", "lessons": 8},
    {"title": "Traditional Compositions", "lessons": 12}
  ]}'::jsonb
),
(
  'Jazz Dance Essentials',
  'Explore the dynamic world of jazz dance! Learn classic jazz technique, modern jazz styles, and musical theater dance. Great for building versatility.',
  'Sophie Williams',
  'Broadway performer and choreographer. Trained at Alvin Ailey American Dance Theater.',
  'Contemporary',
  'Intermediate',
  4299,
  7,
  true,
  'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800',
  'https://www.youtube.com/watch?v=sample',
  '{"modules": [
    {"title": "Jazz Technique Basics", "lessons": 8},
    {"title": "Isolations & Coordination", "lessons": 6},
    {"title": "Musical Theater Style", "lessons": 6},
    {"title": "Jazz Choreography", "lessons": 8}
  ]}'::jsonb
),
(
  'Breaking & B-Boying',
  'Master the art of breaking! Learn power moves, freezes, footwork, and top rock. This course covers everything from basic moves to advanced combinations.',
  'DJ Spin',
  'Red Bull BC One competitor, 15+ years in the breaking scene. Founder of Mumbai B-Boy Crew.',
  'Hip-Hop',
  'Advanced',
  5499,
  10,
  false,
  'https://images.unsplash.com/photo-1545224144-b38cd309ef69?w=800',
  'https://www.youtube.com/watch?v=sample',
  '{"modules": [
    {"title": "Breaking Foundations", "lessons": 8},
    {"title": "Top Rock & Footwork", "lessons": 10},
    {"title": "Power Moves", "lessons": 8},
    {"title": "Freezes & Transitions", "lessons": 8}
  ]}'::jsonb
);

-- Insert Sample Reviews (for approved reviews)
-- Note: You'll need actual user IDs from your profiles table
-- This is just a template - adjust user_id and course_id as needed

-- Example review structure (uncomment and modify after creating users):
/*
INSERT INTO reviews (user_id, course_id, rating, comment, approved) VALUES
('user-uuid-here', 'course-uuid-here', 5, 'Amazing course! Priya is an excellent instructor.', true),
('user-uuid-here', 'course-uuid-here', 5, 'Best hip-hop course I have taken online!', true),
('user-uuid-here', 'course-uuid-here', 4, 'Great content, very detailed and easy to follow.', true);
*/

-- Verify data was inserted
SELECT 
  title, 
  instructor_name, 
  dance_style, 
  difficulty, 
  price, 
  is_popular 
FROM courses 
ORDER BY created_at DESC;

-- Check course count
SELECT 
  dance_style, 
  COUNT(*) as course_count,
  AVG(price) as avg_price
FROM courses 
GROUP BY dance_style;

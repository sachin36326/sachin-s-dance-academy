
export interface Lesson {
    id: number;
    title: string;
    duration: string;
    videoId: string;
}

export interface Week {
    week: number;
    title: string;
    lessons: Lesson[];
}

export interface Course {
    id: string;
    title: string;
    instructor: string;
    style: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    price: number;
    duration: string;
    students: number;
    rating: number;
    thumbnail: string;
    popular: boolean;
    totalLessons: number;
    curriculum: Week[];
}

export const COURSES: Course[] = [
    {
        id: '1',
        title: 'Contemporary Dance Masterclass',
        instructor: 'Shahbaaz Shaikh',
        style: 'Contemporary',
        difficulty: 'Intermediate',
        price: 4999,
        duration: '8 weeks',
        students: 1250,
        rating: 4.9,
        thumbnail: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800',
        popular: true,
        totalLessons: 10,
        curriculum: [
            {
                week: 1,
                title: 'Introduction to Contemporary Dance',
                lessons: [
                    { id: 1, title: 'Welcome & Course Overview', duration: '10:30', videoId: '3e5TQjaNysg' },
                    { id: 2, title: 'History of Contemporary Dance', duration: '15:20', videoId: '7vlx4t_tZkE' },
                    { id: 3, title: 'Basic Warm-up Exercises', duration: '20:15', videoId: 'd-X0yV4fC04' },
                    { id: 4, title: 'Understanding Body Alignment', duration: '18:45', videoId: 'w6G7v54uN9g' },
                    { id: 5, title: 'Week 1 Practice Session', duration: '25:00', videoId: 'n7_c-p3191I' },
                ]
            },
            {
                week: 2,
                title: 'Basic Techniques and Movements',
                lessons: [
                    { id: 6, title: 'Floor Work Basics', duration: '22:30', videoId: 'd7J31U3h99c' },
                    { id: 7, title: 'Weight Transfer Techniques', duration: '19:15', videoId: 'c9t0bV-I_k0' },
                    { id: 8, title: 'Spiral Movements', duration: '21:00', videoId: 'o6x8YV0280w' },
                    { id: 9, title: 'Release Technique', duration: '23:45', videoId: 'P_O6r23uXmI' },
                    { id: 10, title: 'Combination Practice', duration: '28:00', videoId: '4r7V_rN3gCg' },
                ]
            }
        ]
    },
    {
        id: '2',
        title: 'Hip-Hop Fundamentals',
        instructor: 'Sachin Chauhan',
        style: 'Hip-Hop',
        difficulty: 'Beginner',
        price: 3999,
        duration: '6 weeks',
        students: 2100,
        rating: 4.8,
        thumbnail: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800',
        popular: true,
        totalLessons: 10,
        curriculum: [
            {
                week: 1,
                title: 'Grooves and Foundation',
                lessons: [
                    { id: 101, title: 'History of Hip-Hop', duration: '12:00', videoId: 'OZEk_ztv8ww' },
                    { id: 102, title: 'Basic Bounce & Rock', duration: '15:30', videoId: 'kQGq_O6qJ6g' },
                    { id: 103, title: 'Isolation Techniques', duration: '18:45', videoId: 'D2c8Jp_Q77Q' },
                    { id: 104, title: 'Footwork Basics', duration: '20:00', videoId: 'nQ2m1121mng' },
                    { id: 105, title: 'Arm Mechanics', duration: '14:20', videoId: '8p4zX6Fk67c' },
                ]
            },
            {
                week: 2,
                title: 'Old School Moves',
                lessons: [
                    { id: 106, title: 'The Running Man', duration: '16:00', videoId: 'D0wXFm0iK4Q' },
                    { id: 107, title: 'The Roger Rabbit', duration: '15:45', videoId: 't1-WpS9hH8w' },
                    { id: 108, title: 'Party Machine', duration: '14:30', videoId: 'OZEk_ztv8ww' }, // Reusing valid ID
                    { id: 109, title: 'Cabbage Patch', duration: '12:15', videoId: 'kQGq_O6qJ6g' }, // Reusing valid ID
                    { id: 110, title: 'Review & Combo', duration: '25:00', videoId: 'D2c8Jp_Q77Q' }, // Reusing valid ID
                ]
            }
        ]
    },
    {
        id: '3',
        title: 'Classical Ballet Technique',
        instructor: 'Afrose Shaikh',
        style: 'Ballet',
        difficulty: 'Advanced',
        price: 5999,
        duration: '12 weeks',
        students: 850,
        rating: 5.0,
        thumbnail: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800',
        popular: false,
        totalLessons: 3,
        curriculum: [
            {
                week: 1,
                title: 'Ballet Basics',
                lessons: [
                    { id: 201, title: 'Positions of the Feet', duration: '15:00', videoId: '6Fz27G6WwWw' },
                    { id: 202, title: 'Plies and Releves', duration: '20:00', videoId: 'zW45o3n8qKI' },
                    { id: 203, title: 'Tendu and Degage', duration: '18:00', videoId: 'g5JpC_o6_mU' },
                ]
            }
        ]
    },
    {
        id: '4',
        title: 'Bollywood Dance Basics',
        instructor: 'Karan Singh',
        style: 'Bollywood',
        difficulty: 'Beginner',
        price: 2999,
        duration: '4 weeks',
        students: 3200,
        rating: 4.7,
        thumbnail: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800',
        popular: true,
        totalLessons: 3,
        curriculum: [
            {
                week: 1,
                title: 'Bollywood Basics',
                lessons: [
                    { id: 301, title: 'Introduction to Bollywood', duration: '12:00', videoId: 'XkLMj1FH1SY' },
                    { id: 302, title: 'Thumkas and Hip Movement', duration: '15:00', videoId: 'g5JpC_o6_mU' },
                    { id: 303, title: 'Hand Gestures', duration: '10:00', videoId: 'XkLMj1FH1SY' },
                ]
            }
        ]
    },
    {
        id: '5',
        title: 'Salsa & Latin Dance',
        instructor: 'Marium Khan',
        style: 'Salsa',
        difficulty: 'Intermediate',
        price: 4499,
        duration: '6 weeks',
        students: 980,
        rating: 4.9,
        thumbnail: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800',
        popular: false,
        totalLessons: 3,
        curriculum: [
            {
                week: 1,
                title: 'Salsa Fundamentals',
                lessons: [
                    { id: 401, title: 'Basic Step', duration: '14:00', videoId: 'DTXQuA0xJrw' },
                    { id: 402, title: 'Right Turn', duration: '12:00', videoId: 'DTXQuA0xJrw' }, // Reusing valid ID
                    { id: 403, title: 'Cross Body Lead', duration: '16:00', videoId: 'DTXQuA0xJrw' }, // Reusing valid ID
                ]
            }
        ]
    },
    {
        id: '6',
        title: 'Kathak Classical Dance',
        instructor: 'Guru Ramesh Kumar',
        style: 'Kathak',
        difficulty: 'Advanced',
        price: 6999,
        duration: '16 weeks',
        students: 650,
        rating: 5.0,
        thumbnail: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=800',
        popular: false,
        totalLessons: 3,
        curriculum: [
            {
                week: 1,
                title: 'Introduction to Kathak',
                lessons: [
                    { id: 501, title: 'Tatkar (Footwork)', duration: '18:00', videoId: 'I59Zr1z3FBA' },
                    { id: 502, title: 'Hastak (Hand Movements)', duration: '20:00', videoId: 'I59Zr1z3FBA' }, // Reusing valid ID
                    { id: 503, title: 'Chakkar (Spins)', duration: '15:00', videoId: 'I59Zr1z3FBA' }, // Reusing valid ID
                ]
            }
        ]
    }
];

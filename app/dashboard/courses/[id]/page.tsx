'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  PlayCircle,
  CheckCircle,
  Lock,
  Clock,
  FileText,
  Download,
  MessageSquare
} from 'lucide-react';

import { COURSES } from '@/data/courses';

export default function CoursePlayerPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id as string;

  // State for tracking progress
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [currentLessonId, setCurrentLessonId] = useState<number>(0);

  const selectedCourse = COURSES.find(c => c.id === courseId) || COURSES[0];

  const course = {
    id: courseId,
    title: selectedCourse.title,
    instructor: selectedCourse.instructor,
    // Calculate progress dynamically
    get progress() {
      const totalLessons = this.curriculum.reduce((acc: number, week: any) => acc + week.lessons.length, 0);
      return totalLessons === 0 ? 0 : Math.round((completedLessons.length / totalLessons) * 100);
    },
    curriculum: selectedCourse.curriculum
  };

  // Flatten lessons for easier navigation
  const allLessons = course.curriculum.flatMap((week: any) => week.lessons);
  const currentLessonData = allLessons.find((l: any) => l.id === currentLessonId) || allLessons[0];
  const isCompleted = completedLessons.includes(currentLessonId);

  useEffect(() => {
    // Reset to first lesson when course changes
    if (allLessons.length > 0) {
      setCurrentLessonId(allLessons[0].id);
    }

    // Load progress from localStorage
    const savedProgress = localStorage.getItem(`course_progress_${courseId}`);
    if (savedProgress) {
      try {
        setCompletedLessons(JSON.parse(savedProgress));
      } catch { }
    } else {
      setCompletedLessons([]);
    }
  }, [courseId]);

  const handleMarkComplete = () => {
    if (!completedLessons.includes(currentLessonId)) {
      const newCompleted = [...completedLessons, currentLessonId];
      setCompletedLessons(newCompleted);
      localStorage.setItem(`course_progress_${courseId}`, JSON.stringify(newCompleted));
    }

    // Move to next lesson
    const currentIndex = allLessons.findIndex((l: any) => l.id === currentLessonId);
    if (currentIndex < allLessons.length - 1) {
      setCurrentLessonId(allLessons[currentIndex + 1].id);
    } else {
      alert("Congratulations! You have completed the course!");
      router.push('/dashboard/certificates');
    }
  };

  const isLessonLocked = (lessonId: number) => {
    // Simple logic: Lesson is locked if previous lesson is not completed
    // Except first lesson is always unlocked
    if (lessonId === allLessons[0]?.id) return false;
    const index = allLessons.findIndex((l: any) => l.id === lessonId);
    if (index > 0) {
      const prevLessonId = allLessons[index - 1].id;
      return !completedLessons.includes(prevLessonId);
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <button
              onClick={() => router.push('/dashboard')}
              className="flex items-center space-x-2 text-gray-600 hover:text-primary transition"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </button>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Your Progress</p>
                <p className="text-lg font-bold text-primary">{course.progress}%</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              {/* Video Area */}
              <div className="relative bg-black aspect-video flex items-center justify-center group">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${currentLessonData.videoId}?autoplay=1&rel=0`}
                  title={currentLessonData.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              {/* Video Controls Info */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {currentLessonData.title}
                </h2>
                <div className="flex items-center space-x-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{currentLessonData.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>Lesson Notes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Resources</span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="border-t pt-6">
                  <div className="flex space-x-6 mb-4">
                    <button className="text-primary font-semibold border-b-2 border-primary pb-2">
                      Overview
                    </button>
                    <button className="text-gray-600 hover:text-primary pb-2">
                      Notes
                    </button>
                    <button className="text-gray-600 hover:text-primary pb-2">
                      Discussion
                    </button>
                  </div>

                  <div className="prose max-w-none">
                    <p className="text-gray-700">
                      Welcome to this lesson on {currentLessonData.title}.
                      Watch the video carefully and practice the movements.
                      Remember to warm up before starting!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mark Complete Button */}
            <button
              onClick={handleMarkComplete}
              className={`w-full py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 ${isCompleted
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-primary text-white hover:bg-primary/90'
                }`}
            >
              <CheckCircle className="w-5 h-5" />
              <span>{isCompleted ? 'Completed (Click to continue)' : 'Mark as Complete & Continue'}</span>
            </button>
          </div>

          {/* Curriculum Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Course Content</h3>

              <div className="space-y-4">
                {course.curriculum.map((week: any) => (
                  <div key={week.week} className="border-b pb-4 last:border-b-0">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Week {week.week}: {week.title}
                    </h4>
                    <div className="space-y-2">
                      {week.lessons.map((lesson: any) => {
                        const isLocked = isLessonLocked(lesson.id);
                        const isLessonCompleted = completedLessons.includes(lesson.id);
                        const isCurrent = currentLessonId === lesson.id;

                        return (
                          <button
                            key={lesson.id}
                            onClick={() => !isLocked && setCurrentLessonId(lesson.id)}
                            disabled={isLocked}
                            className={`w-full text-left p-3 rounded-lg transition-colors ${isCurrent
                              ? 'bg-primary/10 ring-1 ring-primary'
                              : isLessonCompleted
                                ? 'bg-green-50 hover:bg-green-100'
                                : isLocked
                                  ? 'bg-gray-50 cursor-not-allowed opacity-60'
                                  : 'bg-gray-50 hover:bg-gray-100'
                              }`}
                          >
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 mt-1">
                                {isLessonCompleted ? (
                                  <CheckCircle className="w-5 h-5 text-green-600" />
                                ) : isLocked ? (
                                  <Lock className="w-5 h-5 text-gray-400" />
                                ) : isCurrent ? (
                                  <PlayCircle className="w-5 h-5 text-primary animate-pulse" />
                                ) : (
                                  <PlayCircle className="w-5 h-5 text-gray-400" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className={`text-sm font-medium ${isLocked ? 'text-gray-400' : 'text-gray-900'
                                  }`}>
                                  {lesson.title}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">{lesson.duration}</p>
                              </div>
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

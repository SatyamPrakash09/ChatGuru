import React, { useState } from 'react';
import { BookOpen, Target, Lightbulb, Users, ArrowRight, Clock, Award, TrendingUp } from 'lucide-react';

const MentorshipHub: React.FC = () => {
  const [selectedField, setSelectedField] = useState('medical');

  const fields = [
    { id: 'medical', name: 'Medical & Health', icon: '🏥', color: 'from-red-500 to-pink-500' },
    { id: 'engineering', name: 'Engineering & Tech', icon: '⚙️', color: 'from-blue-500 to-cyan-500' },
    { id: 'business', name: 'Business & Finance', icon: '💼', color: 'from-green-500 to-emerald-500' },
    { id: 'arts', name: 'Arts & Design', icon: '🎨', color: 'from-purple-500 to-violet-500' },
    { id: 'law', name: 'Law & Legal', icon: '⚖️', color: 'from-yellow-500 to-orange-500' },
    { id: 'science', name: 'Science & Research', icon: '🔬', color: 'from-indigo-500 to-blue-500' },
  ];

  const mentorshipFeatures = [
    {
      title: 'Subject-Wise Mentoring',
      description: 'Get specialized guidance for your specific field of study',
      icon: BookOpen,
      color: 'bg-blue-500',
    },
    {
      title: 'Career Path Simulation',
      description: 'Explore different career options and their requirements',
      icon: Target,
      color: 'bg-purple-500',
    },
    {
      title: 'Study Planning',
      description: 'Create personalized study schedules and track progress',
      icon: Clock,
      color: 'bg-green-500',
    },
    {
      title: 'Skill Development',
      description: 'Build both technical and soft skills for career success',
      icon: TrendingUp,
      color: 'bg-rose-500',
    },
  ];

  const studyTips = [
    {
      category: 'Time Management',
      tip: 'Use the Pomodoro Technique: 25 minutes of focused study followed by 5-minute breaks',
      relevance: 'Increases concentration and prevents burnout',
    },
    {
      category: 'Memory Enhancement',
      tip: 'Create visual mind maps to connect concepts and improve retention',
      relevance: 'Helps with complex topics and exam preparation',
    },
    {
      category: 'Goal Setting',
      tip: 'Break large goals into smaller, achievable milestones with deadlines',
      relevance: 'Maintains motivation and tracks progress effectively',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            🎓 Mentorship Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized academic and career guidance tailored to your field of study. 
            Our AI mentor understands your unique challenges and goals.
          </p>
        </div>

        {/* Field Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Choose Your Field of Study
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {fields.map((field) => (
              <button
                key={field.id}
                onClick={() => setSelectedField(field.id)}
                className={`p-4 rounded-xl text-center transition-all transform hover:scale-105 ${
                  selectedField === field.id
                    ? 'bg-white shadow-lg border-2 border-purple-300'
                    : 'bg-white/70 hover:bg-white shadow-md border border-gray-200'
                }`}
              >
                <div className="text-2xl mb-2">{field.icon}</div>
                <div className="font-medium text-gray-900 text-sm">{field.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Mentorship Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mentorshipFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Ask Me Anything Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full flex items-center justify-center mr-4">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Ask Me Anything</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-purple-800 font-medium mb-2">Popular Questions:</p>
                <ul className="text-purple-700 space-y-1 text-sm">
                  <li>• How do I prepare for NEET/JEE exams?</li>
                  <li>• What career options are available in my field?</li>
                  <li>• How to balance studies with extracurriculars?</li>
                  <li>• Best study techniques for my learning style?</li>
                </ul>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-rose-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-rose-600 transition-all shadow-md hover:shadow-lg">
              Start Mentoring Session
            </button>
          </div>

          {/* Daily Study Tips */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Daily Study Tips</h3>
            </div>
            
            <div className="space-y-4">
              {studyTips.map((tip, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-semibold text-blue-700 mb-1">{tip.category}</h4>
                  <p className="text-gray-700 text-sm mb-1">{tip.tip}</p>
                  <p className="text-gray-500 text-xs">{tip.relevance}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Goal Planner Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Goal Planner</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Short-term Goals */}
            <div className="bg-green-50 p-6 rounded-xl">
              <h4 className="font-semibold text-green-800 mb-4">This Week</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-700 text-sm">Complete Chapter 5 revision</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-700 text-sm">Practice 10 mock questions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-700 text-sm">Attend study group session</span>
                </div>
              </div>
            </div>

            {/* Medium-term Goals */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-blue-800 mb-4">This Month</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700 text-sm">Complete 3 practice exams</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700 text-sm">Master organic chemistry</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700 text-sm">Research career options</span>
                </div>
              </div>
            </div>

            {/* Long-term Goals */}
            <div className="bg-purple-50 p-6 rounded-xl">
              <h4 className="font-semibold text-purple-800 mb-4">This Year</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-purple-700 text-sm">Ace entrance exams</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-purple-700 text-sm">Secure college admission</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-purple-700 text-sm">Build strong portfolio</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all">
              <span>Customize Your Goals</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorshipHub;
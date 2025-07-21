import React, { useState } from 'react';
import { Heart, Smile, Moon, Music, BookOpen, Phone, Shield, Zap } from 'lucide-react';

const WellnessCenter: React.FC = () => {
  const [selectedMoodScale, setSelectedMoodScale] = useState(5);
  const [currentAffirmation, setCurrentAffirmation] = useState(0);

  const moodOptions = [
    { value: 1, emoji: '😢', label: 'Very Low', color: 'text-red-500' },
    { value: 2, emoji: '😟', label: 'Low', color: 'text-orange-500' },
    { value: 3, emoji: '😐', label: 'Neutral', color: 'text-yellow-500' },
    { value: 4, emoji: '😊', label: 'Good', color: 'text-green-500' },
    { value: 5, emoji: '😄', label: 'Great', color: 'text-blue-500' },
  ];

  const affirmations = [
    "You are capable of amazing things.",
    "Your progress matters, no matter how small.",
    "It's okay to take breaks and rest.",
    "You are stronger than you think.",
    "Every challenge is an opportunity to grow.",
    "Your mental health is just as important as your grades.",
  ];

  const wellnessActivities = [
    {
      title: 'Guided Meditation',
      description: '5-minute breathing exercise',
      icon: Moon,
      color: 'from-purple-500 to-indigo-500',
      duration: '5 min',
    },
    {
      title: 'Gratitude Journal',
      description: 'Write down 3 things you\'re grateful for',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-500',
      duration: '3 min',
    },
    {
      title: 'Stress Relief',
      description: 'Progressive muscle relaxation',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      duration: '10 min',
    },
    {
      title: 'Mood Boost',
      description: 'Uplifting music and positive thoughts',
      icon: Music,
      color: 'from-rose-500 to-pink-500',
      duration: '7 min',
    },
  ];

  const emergencyResources = [
    {
      name: 'National Suicide Prevention Lifeline',
      number: '988',
      description: '24/7 crisis support',
      availability: 'Available 24/7',
    },
    {
      name: 'Crisis Text Line',
      number: 'Text HOME to 741741',
      description: 'Free, confidential support',
      availability: 'Available 24/7',
    },
    {
      name: 'Student Counseling Services',
      number: '1-800-STUDENT',
      description: 'Academic and personal support',
      availability: 'Mon-Fri 8AM-6PM',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            ❤️ Mental Wellness Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your safe space for emotional support, self-care, and mental health resources. 
            Remember, seeking help is a sign of strength, not weakness.
          </p>
        </div>

        {/* Mood Check-in */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Daily Mood Check-in</h3>
          </div>

          <p className="text-gray-600 mb-6">How are you feeling today? Your mental health matters.</p>

          <div className="grid grid-cols-5 gap-4 mb-6">
            {moodOptions.map((mood) => (
              <button
                key={mood.value}
                onClick={() => setSelectedMoodScale(mood.value)}
                className={`p-4 rounded-xl text-center transition-all transform hover:scale-105 ${
                  selectedMoodScale === mood.value
                    ? 'bg-gradient-to-r from-rose-100 to-pink-100 border-2 border-rose-300'
                    : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <div className="text-2xl mb-2">{mood.emoji}</div>
                <div className={`font-medium text-sm ${mood.color}`}>{mood.label}</div>
              </button>
            ))}
          </div>

          <div className="bg-rose-50 p-4 rounded-lg">
            <p className="text-rose-800 font-medium mb-2">✨ Daily Affirmation:</p>
            <p className="text-rose-700 text-lg italic">"{affirmations[currentAffirmation]}"</p>
            <button
              onClick={() => setCurrentAffirmation((prev) => (prev + 1) % affirmations.length)}
              className="mt-2 text-rose-600 hover:text-rose-700 font-medium text-sm"
            >
              Get New Affirmation →
            </button>
          </div>
        </div>

        {/* Wellness Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {wellnessActivities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group cursor-pointer">
                <div className={`w-12 h-12 bg-gradient-to-r ${activity.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{activity.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{activity.duration}</span>
                  <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                    Start →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Anonymous Chat */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Anonymous Support Chat</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-purple-800 font-medium mb-2">Safe Space Guidelines:</p>
                <ul className="text-purple-700 space-y-1 text-sm">
                  <li>• Your privacy is completely protected</li>
                  <li>• No judgment zone - share at your comfort level</li>
                  <li>• AI responses are empathetic and supportive</li>
                  <li>• Available 24/7 for emotional check-ins</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-rose-100 p-4 rounded-lg">
                <p className="text-purple-800 text-sm">
                  💬 "I'm feeling overwhelmed with my studies lately. Can you help me work through this?"
                </p>
                <p className="text-purple-600 text-xs mt-2">— Anonymous Student</p>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg">
              Start Anonymous Chat
            </button>
          </div>

          {/* Dear Guru Diary */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Dear Guru Diary</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Write to yourself or to Chat Guru. Sometimes putting thoughts into words helps clarify your feelings.
            </p>

            <div className="space-y-4">
              <textarea
                placeholder="Dear Guru, today I'm feeling..."
                className="w-full h-32 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 resize-none"
              />
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Your entries are private and secure</span>
                <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:from-rose-600 hover:to-pink-600 transition-all">
                  Save Entry
                </button>
              </div>
            </div>

            <div className="mt-6 p-4 bg-rose-50 rounded-lg">
              <p className="text-rose-800 font-medium mb-2">Recent Reflection:</p>
              <p className="text-rose-700 text-sm italic">
                "I realized that taking breaks doesn't make me lazy - it makes me more productive."
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Resources */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-rose-500 rounded-full flex items-center justify-center mr-4">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Emergency Support</h3>
          </div>

          <p className="text-gray-600 mb-6">
            If you're in crisis or need immediate support, please reach out to these resources:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyResources.map((resource, index) => (
              <div key={index} className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800 mb-2">{resource.name}</h4>
                <p className="text-red-700 font-bold text-lg mb-2">{resource.number}</p>
                <p className="text-red-600 text-sm mb-2">{resource.description}</p>
                <p className="text-red-500 text-xs">{resource.availability}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-yellow-800 font-medium mb-1">⚠️ Important Reminder:</p>
            <p className="text-yellow-700 text-sm">
              Chat Guru is not a replacement for professional mental health care. If you're experiencing thoughts of self-harm or suicide, please contact emergency services or a mental health professional immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessCenter;
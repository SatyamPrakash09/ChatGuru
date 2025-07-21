import React, { useState } from 'react';
import { User, BookOpen, Heart, TrendingUp, Calendar, Bell, Settings, Award } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState({
    name: 'Alex Johnson',
    email: 'alex@example.com',
    field: 'Medical Student',
    joinDate: 'January 2024',
    avatar: '👨‍⚕️',
  });

  const [wellnessScore, setWellnessScore] = useState(78);
  const [studyStreak, setStudyStreak] = useState(12);

  const recentSessions = [
    { id: 1, type: 'Mentorship', topic: 'NEET Preparation Strategy', date: '2 hours ago', duration: '25 min' },
    { id: 2, type: 'Wellness', topic: 'Stress Management', date: '1 day ago', duration: '15 min' },
    { id: 3, type: 'Community', topic: 'Study Group Discussion', date: '2 days ago', duration: '45 min' },
  ];

  const upcomingReminders = [
    { id: 1, type: 'study', message: 'Physics chapter 5 revision', time: '3:00 PM today' },
    { id: 2, type: 'wellness', message: 'Daily meditation session', time: '7:00 PM today' },
    { id: 3, type: 'goal', message: 'Weekly goal review', time: 'Tomorrow 9:00 AM' },
  ];

  const achievements = [
    { id: 1, title: 'Study Streak Champion', description: '10 days consecutive studying', icon: '🔥', date: '2 days ago' },
    { id: 2, title: 'Wellness Warrior', description: 'Completed 20 meditation sessions', icon: '🧘‍♀️', date: '1 week ago' },
    { id: 3, title: 'Community Helper', description: 'Helped 5 peers with questions', icon: '🤝', date: '2 weeks ago' },
  ];

  const progressData = [
    { subject: 'Physics', progress: 85, color: 'blue' },
    { subject: 'Chemistry', progress: 72, color: 'green' },
    { subject: 'Biology', progress: 91, color: 'purple' },
    { subject: 'Mathematics', progress: 68, color: 'orange' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            📊 Student Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Track your progress, manage your wellness, and stay motivated on your journey
          </p>
        </div>

        {/* User Profile Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-2xl">
                {user.avatar}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                <p className="text-gray-600">{user.field}</p>
                <p className="text-sm text-gray-500">Member since {user.joinDate}</p>
              </div>
            </div>
            <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-all">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Wellness Score</p>
                <p className="text-2xl font-bold text-green-600">{wellnessScore}%</p>
                <p className="text-xs text-gray-500">↑ 5% from last week</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Study Streak</p>
                <p className="text-2xl font-bold text-blue-600">{studyStreak} days</p>
                <p className="text-xs text-gray-500">Keep it up! 🔥</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Sessions</p>
                <p className="text-2xl font-bold text-purple-600">247</p>
                <p className="text-xs text-gray-500">This month: 28</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Subject Progress */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Subject Progress</h3>
              <div className="space-y-4">
                {progressData.map((subject) => (
                  <div key={subject.subject}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{subject.subject}</span>
                      <span className="text-sm text-gray-500">{subject.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${
                          subject.color === 'blue' ? 'from-blue-500 to-blue-600' :
                          subject.color === 'green' ? 'from-green-500 to-green-600' :
                          subject.color === 'purple' ? 'from-purple-500 to-purple-600' :
                          'from-orange-500 to-orange-600'
                        }`}
                        style={{ width: `${subject.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Sessions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Sessions</h3>
              <div className="space-y-3">
                {recentSessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        session.type === 'Mentorship' ? 'bg-blue-100' :
                        session.type === 'Wellness' ? 'bg-green-100' : 'bg-purple-100'
                      }`}>
                        {session.type === 'Mentorship' ? <BookOpen className="w-5 h-5 text-blue-600" /> :
                         session.type === 'Wellness' ? <Heart className="w-5 h-5 text-green-600" /> :
                         <User className="w-5 h-5 text-purple-600" />}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{session.topic}</p>
                        <p className="text-sm text-gray-500">{session.type} • {session.duration}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{session.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{achievement.title}</p>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                    <span className="text-xs text-gray-500">{achievement.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Guru Reminders */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-2 mb-4">
                <Bell className="w-5 h-5 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-900">Guru Reminders</h3>
              </div>
              <div className="space-y-3">
                {upcomingReminders.map((reminder) => (
                  <div key={reminder.id} className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <p className="font-medium text-purple-900 text-sm">{reminder.message}</p>
                    <p className="text-xs text-purple-600 mt-1">{reminder.time}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all">
                Manage Reminders
              </button>
            </div>

            {/* Weekly Goal */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-5 h-5 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">Weekly Goal</h3>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-900">Complete 5 practice tests</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <div className="flex-1 bg-green-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <span className="text-sm text-green-700">3/5</span>
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-900">Daily meditation streak</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <div className="flex-1 bg-blue-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-sm text-blue-700">6/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all">
                  Start Study Session
                </button>
                <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-700 hover:to-emerald-700 transition-all">
                  Wellness Check-in
                </button>
                <button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white py-3 px-4 rounded-lg font-medium hover:from-rose-700 hover:to-pink-700 transition-all">
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
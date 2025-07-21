import React, { useState } from 'react';
import { Users, MessageCircle, Heart, BookOpen, Briefcase, Clock, TrendingUp, Pin } from 'lucide-react';

const CommunityForum: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: Users, color: 'text-gray-600' },
    { id: 'support', name: 'Peer Support', icon: Heart, color: 'text-rose-600' },
    { id: 'study', name: 'Study Tips', icon: BookOpen, color: 'text-blue-600' },
    { id: 'career', name: 'Career Advice', icon: Briefcase, color: 'text-purple-600' },
    { id: 'wellness', name: 'Mental Health', icon: Heart, color: 'text-green-600' },
  ];

  const posts = [
    {
      id: 1,
      title: "How to overcome procrastination during exam season?",
      author: "Sarah M.",
      avatar: "👩‍🎓",
      category: "study",
      replies: 23,
      likes: 45,
      timeAgo: "2 hours ago",
      isPinned: false,
      preview: "I've been struggling with procrastination lately, especially with finals coming up. Any tips on staying focused?"
    },
    {
      id: 2,
      title: "Success Story: From anxiety to confidence",
      author: "Mike K.",
      avatar: "👨‍💼",
      category: "support",
      replies: 67,
      likes: 128,
      timeAgo: "5 hours ago",
      isPinned: true,
      preview: "Want to share my journey of overcoming exam anxiety. It's possible - here's how I did it!"
    },
    {
      id: 3,
      title: "NEET 2024 Study Group - Join us!",
      author: "Priya R.",
      avatar: "👩‍⚕️",
      category: "study",
      replies: 34,
      likes: 89,
      timeAgo: "1 day ago",
      isPinned: false,
      preview: "Looking for serious NEET aspirants to form a study group. Daily discussions and mock tests included!"
    },
    {
      id: 4,
      title: "Feeling overwhelmed - need some support",
      author: "Anonymous",
      avatar: "🤗",
      category: "wellness",
      replies: 18,
      likes: 56,
      timeAgo: "1 day ago",
      isPinned: false,
      preview: "Having a tough time balancing everything. Sometimes I feel like giving up. Anyone else going through this?"
    },
    {
      id: 5,
      title: "Internship opportunities in tech - sharing resources",
      author: "Alex J.",
      avatar: "👨‍💻",
      category: "career",
      replies: 42,
      likes: 73,
      timeAgo: "2 days ago",
      isPinned: false,
      preview: "Compiled a list of companies offering internships for CS students. Hope this helps!"
    },
  ];

  const upcomingWebinars = [
    {
      id: 1,
      title: "Stress Management Techniques for Students",
      speaker: "Dr. Lisa Chen",
      time: "Today, 7:00 PM",
      attendees: 234,
      category: "wellness"
    },
    {
      id: 2,
      title: "Career Paths in Medical Field",
      speaker: "Dr. Raj Patel",
      time: "Tomorrow, 6:00 PM",
      attendees: 189,
      category: "career"
    },
    {
      id: 3,
      title: "Effective Study Techniques",
      speaker: "Prof. Maria Santos",
      time: "Friday, 5:00 PM",
      attendees: 156,
      category: "study"
    },
  ];

  const filteredPosts = selectedCategory === 'all' ? posts : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            👥 Community Forum
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow students, share experiences, and grow together in a supportive environment. 
            Your voice matters here!
          </p>
        </div>

        {/* Category Navigation */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Posts Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Recent Discussions</h2>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all">
                    New Post
                  </button>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="p-6 hover:bg-gray-50 transition-all cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {post.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {post.isPinned && (
                            <Pin className="w-4 h-4 text-yellow-500" />
                          )}
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                            {post.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{post.preview}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="font-medium">{post.author}</span>
                            <span className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{post.timeAgo}</span>
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center space-x-1">
                              <MessageCircle className="w-4 h-4" />
                              <span>{post.replies}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Heart className="w-4 h-4" />
                              <span>{post.likes}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Members</span>
                  <span className="font-bold text-blue-600">12,847</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Posts This Week</span>
                  <span className="font-bold text-green-600">284</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Helpful Answers</span>
                  <span className="font-bold text-purple-600">1,523</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Success Stories</span>
                  <span className="font-bold text-rose-600">89</span>
                </div>
              </div>
            </div>

            {/* Upcoming Webinars */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Webinars</h3>
              <div className="space-y-4">
                {upcomingWebinars.map((webinar) => (
                  <div key={webinar.id} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-1">{webinar.title}</h4>
                    <p className="text-sm text-blue-700 mb-2">by {webinar.speaker}</p>
                    <div className="flex items-center justify-between text-xs text-blue-600">
                      <span>{webinar.time}</span>
                      <span className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{webinar.attendees}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guidelines */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Guidelines</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  <span>Be respectful and kind to all members</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  <span>Share knowledge and support each other</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  <span>Keep discussions constructive and helpful</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  <span>Report any inappropriate content</span>
                </li>
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 px-4 rounded-lg font-medium hover:from-green-700 hover:to-emerald-700 transition-all">
                  Ask for Help
                </button>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all">
                  Share Success Story
                </button>
                <button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:from-rose-700 hover:to-pink-700 transition-all">
                  Join Study Group
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityForum;
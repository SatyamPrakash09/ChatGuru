import React, { useState, useEffect } from 'react';
import { MessageCircle, Star, ArrowRight, Sparkles, Heart, BookOpen, Users } from 'lucide-react';

interface HeroProps {
  onStartChat: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartChat }) => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const quotes = [
    "Your mind matters. Your journey matters.",
    "Talk. Learn. Heal. Grow.",
    "Wisdom when you need it. Wellness when you feel it.",
    "Study smart. Feel stronger. Speak freely."
  ];

  const testimonials = [
    {
      text: "Chat Guru helped me navigate my pre-med anxiety. The AI mentor understood my struggles and provided practical study tips.",
      author: "Priya S., Medical Student",
      rating: 5
    },
    {
      text: "The wellness center became my safe space during finals week. The guided meditations and mood tracking really helped.",
      author: "Alex M., Engineering Student",
      rating: 5
    },
    {
      text: "Amazing platform! The career guidance helped me choose the right specialization. Feel so much more confident now.",
      author: "Rahul K., CS Student",
      rating: 5
    }
  ];

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => {
      clearInterval(quoteInterval);
      clearInterval(testimonialInterval);
    };
  }, [quotes.length, testimonials.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-purple-600 mb-4">
              <Sparkles className="w-6 h-6" />
              <span className="text-sm font-semibold tracking-wide uppercase">Your AI Mentor & Mental Wellness Guide</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Chat Guru
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <p className="text-xl sm:text-2xl text-gray-600 font-medium transition-all duration-500">
                {quotes[currentQuote]}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={onStartChat}
              className="group flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-rose-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Talk to Chat Guru</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">24/7</div>
              <div className="text-sm text-gray-600">AI Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">100k+</div>
              <div className="text-sm text-gray-600">Students Helped</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">50+</div>
              <div className="text-sm text-gray-600">Study Fields</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From academic guidance to mental wellness support, Chat Guru provides comprehensive tools for your growth journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mentorship Feature */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-purple-100 hover:border-purple-200">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Mentorship</h3>
              <p className="text-gray-600 mb-6">
                Get personalized guidance for your studies, career planning, and entrance exam preparation from our AI mentor.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>Subject-wise mentoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>Career path simulation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>Study planning tools</span>
                </li>
              </ul>
            </div>

            {/* Wellness Feature */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-rose-100 hover:border-rose-200">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mental Wellness</h3>
              <p className="text-gray-600 mb-6">
                A safe space for emotional support with guided exercises, mood tracking, and stress management tools.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                  <span>Anonymous emotional support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                  <span>Meditation & mindfulness</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                  <span>Mood tracking & insights</span>
                </li>
              </ul>
            </div>

            {/* Community Feature */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-blue-100 hover:border-blue-200">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Support</h3>
              <p className="text-gray-600 mb-6">
                Connect with fellow students, share experiences, and grow together in a supportive environment.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Peer support groups</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Expert-led webinars</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Safe discussion forums</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from students who found their path with Chat Guru
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <cite className="text-purple-600 font-semibold">
                — {testimonials[currentTestimonial].author}
              </cite>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-purple-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
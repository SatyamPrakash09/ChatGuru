import React from 'react';
import { MessageCircle, Brain, Heart, Users, BarChart3, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onChatClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection, onChatClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Brain },
    { id: 'mentorship', label: 'Mentorship', icon: Brain },
    { id: 'wellness', label: 'Wellness', icon: Heart },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'community', label: 'Community', icon: Users },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-rose-400 rounded-full flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-rose-500 bg-clip-text text-transparent">
              Chat Guru
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Chat Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onChatClick}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-rose-500 text-white px-4 py-2 rounded-full hover:from-purple-700 hover:to-rose-600 transition-all shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="font-medium">Talk to Guru</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-purple-50"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-100 bg-white/90 backdrop-blur-sm">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all ${
                      activeSection === item.id
                        ? 'bg-purple-100 text-purple-700'
                        : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
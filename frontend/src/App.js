import React, { useState } from 'react';

function App() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <i className="fas fa-exchange-alt text-indigo-600 text-2xl mr-2"></i>
                <span className="text-xl font-bold text-gray-900">Skill Exchange</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-600 px-4 py-2 rounded-md transition-colors">
                Sign In
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-user-circle text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section with Gradient */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Share Your Skills, Learn from Others
              </h1>
              <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
                Connect with people who want to learn what you know, and teach what they know.
              </p>
              {/* Enhanced Search Bar */}
              <div className="max-w-xl mx-auto">
                <div className="flex bg-white rounded-lg shadow-md p-1">
                  <input
                    type="text"
                    placeholder="Search for skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-2 text-gray-600 focus:outline-none rounded-l-lg"
                  />
                  <button 
                    onClick={handleSearch}
                    disabled={isSearching || !searchQuery.trim()}
                    className={`px-6 py-2 rounded-md transition-all duration-300 flex items-center justify-center min-w-[120px]
                      ${isSearching || !searchQuery.trim() 
                        ? 'bg-indigo-400 cursor-not-allowed' 
                        : 'bg-indigo-600 hover:bg-indigo-700'} text-white`}
                  >
                    {isSearching ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Searching...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-search mr-2"></i>
                        Search
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Skill Cards */}
            {[
              { title: 'Web Development', icon: 'fa-code', color: 'from-blue-500 to-indigo-500' },
              { title: 'Digital Marketing', icon: 'fa-bullhorn', color: 'from-green-500 to-teal-500' },
              { title: 'Graphic Design', icon: 'fa-palette', color: 'from-purple-500 to-pink-500' },
              { title: 'Photography', icon: 'fa-camera', color: 'from-yellow-500 to-orange-500' },
              { title: 'Music', icon: 'fa-music', color: 'from-red-500 to-pink-500' },
              { title: 'Language Learning', icon: 'fa-language', color: 'from-indigo-500 to-purple-500' }
            ].map((skill, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-r ${skill.color} p-6 rounded-t-xl`}>
                  <div className="flex items-center">
                    <i className={`fas ${skill.icon} text-3xl text-white mr-3`}></i>
                    <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Connect with others interested in {skill.title.toLowerCase()}.
                  </p>
                  <button className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center group">
                    Learn more 
                    <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our community today and start exchanging skills with people around the world.
            </p>
            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started Now <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <i className="fas fa-exchange-alt text-indigo-600 text-2xl mr-2"></i>
                <span className="text-xl font-bold text-gray-900">Skill Exchange</span>
              </div>
              <p className="text-gray-600">Connect, learn, and grow together.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">How It Works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
            <p>&copy; 2024 Skill Exchange. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

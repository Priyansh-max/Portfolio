import { HomeIcon, CodeBracketIcon, DocumentTextIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const navItems = [
    { icon: HomeIcon, to: '/', label: 'Home' },
    { icon: CodeBracketIcon, to: '/projects', label: 'Projects' },
  ];

  return (
    <header className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8 py-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={`cursor-pointer relative group pb-2 ${
                location.pathname === item.to 
                  ? 'border-b-2 border-pastel-purple' 
                  : ''
              }`}
            >
              <item.icon 
                className="w-6 h-6 text-gray-600 hover:text-pastel-purple transition-colors duration-300"
              />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navigation; 
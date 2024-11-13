import React from 'react';
import { Menu, X, Code2, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              DevMatrix
            </span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-indigo-600"
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-indigo-600"
              >
                Projects
              </a>
              <a
                href="#process"
                className="text-gray-700 hover:text-indigo-600"
              >
                Process
              </a>
              <a
                href="#contact"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a
              href="#services"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              Services
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              Projects
            </a>
            <a
              href="#process"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              Process
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-indigo-600 font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

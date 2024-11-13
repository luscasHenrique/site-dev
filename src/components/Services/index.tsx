import React from 'react';
import {
  Monitor,
  Smartphone,
  Server,
  Database,
  Cloud,
  Shield,
} from 'lucide-react';

const services = [
  {
    icon: <Monitor className="h-8 w-8" />,
    title: 'Web Development',
    description:
      'Modern, responsive websites and web applications built with cutting-edge technologies.',
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile apps for iOS and Android platforms.',
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: 'Custom Software',
    description:
      'Bespoke software solutions tailored to your specific business requirements.',
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: 'Database Design',
    description:
      'Efficient and scalable database architectures for your applications.',
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: 'Cloud Solutions',
    description: 'Cloud-native applications and infrastructure management.',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Security',
    description:
      'Implementation of robust security measures and best practices.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions for your digital needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow"
            >
              <div className="text-indigo-600">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

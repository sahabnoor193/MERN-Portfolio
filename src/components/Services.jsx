import { Monitor, Smartphone } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">Services</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">What I Offer</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
            <Monitor className="w-12 h-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Website Development</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Services that prioritize the best quality and the request of the client, with professional work and customer support
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
            <Smartphone className="w-12 h-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">App Development</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Services that prioritize the best quality and the request of the client, with professional work and customer support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
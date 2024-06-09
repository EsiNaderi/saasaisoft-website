import React from 'react';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="height-screen-helper">
      <main>
        <section className="text-center py-16 bg-gradient-to-r from-[#E0F7FA] to-white">
          <h1 className="text-4xl font-bold mb-4 text-salesforce-blue">
            Unlock the Power of Salesforce with AI
          </h1>
          <p className="text-xl mb-8">
            Transform your data into actionable insights effortlessly.
          </p>
          <Link href="/pricing">
            <Button>Get Started</Button>
          </Link>
        </section>

        <section className="text-center py-16">
          <h2 className="text-3xl font-bold mb-12">Features</h2>
          <div className="flex justify-center gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-sm text-center">
              <div className="text-4xl mb-4 text-salesforce-blue">📊</div>
              <h3 className="text-xl font-semibold mb-2">Feature One</h3>
              <p className="text-gray-600">Description of feature one.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-sm text-center">
              <div className="text-4xl mb-4 text-salesforce-blue">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
              <p className="text-gray-600">Description of feature two.</p>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gray-50">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="flex justify-center gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-sm text-center">
              <div className="text-4xl mb-4 text-salesforce-blue">1</div>
              <h3 className="text-xl font-semibold mb-2">Step One</h3>
              <p className="text-gray-600">Description of step one.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-sm text-center">
              <div className="text-4xl mb-4 text-salesforce-blue">2</div>
              <h3 className="text-xl font-semibold mb-2">Step Two</h3>
              <p className="text-gray-600">Description of step two.</p>
            </div>
          </div>
        </section>

        <section className="text-center py-16">
          <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
          <div className="flex justify-center gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-sm text-center">
              <img
                src="/user1.jpg"
                alt="User 1"
                className="rounded-full w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">User One</h3>
              <p className="text-gray-600">Testimonial from user one.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-sm text-center">
              <img
                src="/user2.jpg"
                alt="User 2"
                className="rounded-full w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">User Two</h3>
              <p className="text-gray-600">Testimonial from user two.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#E0F7FA] text-black py-8 flex justify-between px-16">
        <div>
          <h3 className="text-lg font-bold mb-2">About Us</h3>
          <p className="text-zinc-800">Information about the company.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p className="text-zinc-800">Contact information.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <p className="text-zinc-800">Social media links.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

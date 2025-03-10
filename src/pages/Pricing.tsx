import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChefHat, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const { user } = useAuth();

  const plans = [
    {
      name: 'Free',
      description: 'For casual cooking lovers',
      price: { monthly: 0, annually: 0 },
      features: ['Up to 5 recipes', 'Basic search', 'Community access', 'Standard support'],
      notIncluded: ['AI recipe generation', 'Nutritional analysis', 'Meal planning'],
      buttonText: user ? 'Current Plan' : 'Start Free',
      ctaColor: 'bg-gray-900',
    },
    {
      name: 'Pro',
      description: 'For dedicated home chefs',
      price: { monthly: 9.99, annually: 7.99 },
      features: ['Unlimited recipes', 'Advanced search', 'AI recipe generation (5/mo)', 'Priority support'],
      notIncluded: ['Advanced nutritional analysis', 'Meal planning'],
      buttonText: 'Upgrade Now',
      ctaColor: 'bg-blue-600',
    },
    {
      name: 'Chef',
      description: 'For professional chefs & businesses',
      price: { monthly: 19.99, annually: 16.99 },
      features: ['Unlimited recipes', 'AI recipe generation (unlimited)', 'Meal planning', 'Dedicated support'],
      notIncluded: [],
      buttonText: 'Go Pro',
      ctaColor: 'bg-green-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="text-center py-16 bg-gradient-to-r from-pink-500 to-red-500 text-white">
        <ChefHat className="h-16 w-16 mx-auto mb-4" />
        <h1 className="text-4xl font-bold">Choose Your Plan</h1>
        <p className="mt-2 text-lg">Find the perfect plan for your culinary journey.</p>
      </div>

      <div className="text-center py-8">
        <div className="inline-flex bg-white border rounded-full shadow p-1">
          <button onClick={() => setIsAnnual(false)} className={`px-5 py-2 rounded-full ${!isAnnual ? 'bg-blue-500 text-white' : 'text-gray-700'}`}>Monthly</button>
          <button onClick={() => setIsAnnual(true)} className={`px-5 py-2 rounded-full ${isAnnual ? 'bg-blue-500 text-white' : 'text-gray-700'}`}>Annually <span className="text-sm">(Save 20%)</span></button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 pb-16">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <div className="text-3xl font-bold mb-4">${isAnnual ? plan.price.annually : plan.price.monthly} <span className="text-sm font-normal">/month</span></div>
            <ul className="space-y-3 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <Check className="text-green-500 mr-2" /> {feature}
                </li>
              ))}
            </ul>
            {plan.notIncluded.length > 0 && (
              <ul className="mt-4 space-y-2 text-gray-500">
                {plan.notIncluded.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <X className="text-red-400 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
            )}
            <Link to={user ? '/dashboard' : '/sign-up'} className={`block mt-6 py-3 text-center text-white rounded-lg ${plan.ctaColor}`}>{plan.buttonText}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

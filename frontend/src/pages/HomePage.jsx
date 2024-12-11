import React from 'react';
import HomeDescription from '../components/HomeDescription';
import Dashboard from '../components/Dashboard';
import ContributionForm from '../components/ContributionForm';
import FeatureSection from '../components/FeatureSection';

const HomePage = () => {
  return (
    <div>
      <div className="flex">
        <HomeDescription />
      </div>
      <div className="mt-32">
      <FeatureSection />
      </div>
      <div className="mt-8">
        <Dashboard />
      </div>
      <div className="flex flex-col lg:flex-row mt-20 mb-10 mr-12 box-decoration-slice">
        <div className="lg:w-1/2 flex flex-col justify-center items-start p-24">
          <h2 className="text-6xl font-bold mb-4 text-center">JOIN THE FIGHT AGAINST HUNGER</h2>
          <p className="text-3xl text-gray-700 text-center">
            Your donation will help save the lives of children and their families.
          </p>
        </div>
        <div className="lg:w-1/2 p-4">
          <ContributionForm />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
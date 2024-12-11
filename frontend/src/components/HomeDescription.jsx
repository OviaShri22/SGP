import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'; // Import your CSS file

const HomeDescription = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row p-8 bg-gradient-to-b from-red
    -600 to--300">
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center pt-10 pb-10">
          <img src="/images/homeImage.jpg" alt="Image Component" className="h-full object-cover" />
        </div>

        <div className="flex-1 bg-white p-8 pt-10 pb-10 mt-20 mb-12 shadow-2xl shadow-blue-900 rounded-lg ml-12 max-w-xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
            An End to Malnutrition by Eliminating Food Wastage
          </h2>
          <p className="text-lg text-gray-700">
            Millions of people around the world suffer from malnutrition while tons of food go to waste every day. Join us in fighting hunger and food insecurity by bridging the gap between surplus food and those in need. Together, we can make a difference one meal at a time.
          </p>
          <br />
          <p className="text-lg text-gray-700">
            Your contribution matters; let's create a world where no one goes to bed hungry.
            </p>
            <div className="bottom-buttons home-bottom">
                    <button
                        className="button-main"
                        onClick={() => {
                          navigate("/Signup");
                      }}
                    >
                        <span>Sign Up</span>
                    </button>
                    &nbsp;&nbsp;
                    <button className="button-main"
                     onClick={() => {
                      navigate("/Login");
                  }}>                    
                        <span>Login</span>
                    </button>
                </div>
            </div>
        
         
        </div>
      </div>
      
    
  );
};

export default HomeDescription;

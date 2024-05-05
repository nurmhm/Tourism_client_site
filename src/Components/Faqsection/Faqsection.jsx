import React, { useState } from 'react';

import { Fade } from "react-awesome-reveal";


const Faqsection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-teal-600 text-center mb-8">Frequently Asked Questions</h2>
        <Fade cascade damping={0.5}>

        <div className="space-y-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <h3 className="text-lg font-medium">How can I book a trip on ChillTrip?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                />
              </svg>
            </div>
            {isOpen && (
              <div className="mt-4 text-gray-700">
                <p>To book a trip with ChillTrip, simply browse our website to find your desired destination. Once you've selected your destination, click on the booking button and follow the prompts to complete your reservation.</p>
              </div>
            )}
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpen2(!isOpen2)}
            >
              <h3 className="text-lg font-medium">What payment methods do you accept?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${isOpen2 ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen2 ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                />
              </svg>
            </div>
            {isOpen2 && (
              <div className="mt-4 text-gray-700">
                <p>We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. Rest assured that all transactions on our website are secure and encrypted to protect your personal information.</p>
              </div>
            )}
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpen3(!isOpen3)}
            >
              <h3 className="text-lg font-medium">Can I cancel or modify my booking?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${isOpen3 ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen3 ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                />
              </svg>
            </div>
            {isOpen3 && (
              <div className="mt-4 text-gray-700">
                <p>Yes, you can cancel or modify your booking, depending on the cancellation policy of the specific trip or accommodation you've chosen. Please refer to the booking confirmation email or contact our customer support team for assistance.</p>
              </div>
            )}
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpen4(!isOpen4)}
            >
              <h3 className="text-lg font-medium">Do you offer travel insurance?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${isOpen4 ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen4 ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                />
              </svg>
            </div>
            {isOpen4 && (
              <div className="mt-4 text-gray-700">
                <p>Yes, we offer travel insurance for added peace of mind during your trip. You can opt for travel insurance during the booking process or contact our customer support team to add it to your existing reservation.</p>
              </div>
            )}
          </div>
        </div>
        </Fade>

      </div>

    </div>
  );
};

export default Faqsection;


import React from "react";

const SendMail = () => {
 
  const recipientEmail = "moueducation2021@gmail.com"; 

  
  const subject = "Inquiry from your Portfolio";
  const body = "Hello Mou,\n\nI visited your portfolio and would like to connect about...";


  const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section id="contact-simple" className="flex flex-col items-center justify-center bg-transparent 
     border-blue-600 border-solid border-2 min-h-[300px]
     md:min-h-[300px]">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Have a Question?</h2>
      <p className="text-lg text-gray-600 mb-4 text-center max-w-sm">
        Click the button below to open your email client and send me a message directly.
      </p>

      <a
        href={mailtoLink}
        className="bg-blue-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
      >
        Email Me
      </a>
    </section>
  );
};

export default SendMail;
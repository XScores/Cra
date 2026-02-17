import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import interacLogo from 'figma:asset/d3acbe2dc554de34cd01eef84fc398c3b487a220.png';
import { Menu } from 'lucide-react';

interface InteracTermsScreenProps {
  onAccept: () => void;
  onDecline: () => void;
}

export function InteracTermsScreen({ onAccept, onDecline }: InteracTermsScreenProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div 
      className="h-full bg-white flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: isMounted ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="bg-black px-4 py-3 flex items-center justify-between flex-shrink-0">
        <img 
          src={interacLogo} 
          alt="Interac" 
          className="w-[50px] h-auto"
        />
        <button className="bg-[#FDB714] text-black px-4 py-2 rounded-[4px] border-0 cursor-pointer flex items-center gap-2 font-semibold text-[15px]">
          <Menu className="h-5 w-5" strokeWidth={2} />
          <span>Menu</span>
        </button>
      </div>

      {/* Title */}
      <div className="px-4 pt-6 pb-4">
        <h1 className="text-[18px] font-bold text-black m-0 text-center">
          Terms and Conditions of Use and Privacy Notice
        </h1>
      </div>

      {/* Scrollable Agreement Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="border-2 border-black rounded-[4px] p-4 bg-white">
          <h2 className="text-[16px] font-bold text-black m-0 mb-4" style={{ fontStyle: 'italic' }}>
            INTERAC SIGN-IN SERVICE END USER AGREEMENT
          </h2>
          
          <p className="text-[14px] text-[#666] m-0 mb-4 leading-relaxed">
            PLEASE CAREFULLY READ THE FOLLOWING AGREEMENT BEFORE AGREEING TO USE THIS <span style={{ fontStyle: 'italic' }}>INTERAC</span> SIGN-IN SERVICE (THE "SERVICE"). THE SERVICE ALLOWS YOU TO AUTHENTICATE YOUR CREDENTIALS (AS DEFINED BELOW) FOR USE AT THIS WEBSITE AND CERTAIN OTHER WEBSITES OPERATED BY THE GOVERNMENT OF CANADA. THIS AGREEMENT IS BETWEEN YOU AND 2859824 ONTARIO LIMITED, A SUBSIDIARY OF INTERAC CORP., WHO IS THE OPERATOR OF THE SERVICE, AND APPLIES TO YOUR USE OF THE SERVICE. BY USING THE SERVICE YOU ARE AGREEING TO BE BOUND BY THIS AGREEMENT. IF YOU DO NOT AGREE TO THIS AGREEMENT, YOU MAY NOT USE THE SERVICE.
          </p>

          <h3 className="text-[16px] font-bold text-black m-0 mb-3">
            DEFINITIONS:
          </h3>

          <p className="text-[14px] text-[#666] m-0 mb-4 leading-relaxed">
            <span className="font-bold">"Agreement"</span> means this <span style={{ fontStyle: 'italic' }}>Interac</span> sign-in service End User Agreement, as may be amended by Interac from time to time upon notice to you in accordance with section 11 hereof.
          </p>

          <p className="text-[14px] text-[#666] m-0 mb-4 leading-relaxed">
            <span className="font-bold">"Credentials"</span> means your username and password (or other authentication information) for your Account.
          </p>

          <p className="text-[14px] text-[#666] m-0 mb-4 leading-relaxed">
            <span className="font-bold">"Account"</span> means your account with your Financial Institution.
          </p>

          <p className="text-[14px] text-[#666] m-0 mb-4 leading-relaxed">
            <span className="font-bold">"Financial Institution"</span> means the financial institution or other organization with whom you have an account and who participates in the Service.
          </p>

          <p className="text-[14px] text-[#666] m-0 mb-4 leading-relaxed">
            <span className="font-bold">"Government Organization"</span> means a government department, agency, or other organization that offers the Service as a method for authenticating your identity when accessing their website or online services.
          </p>

          <h3 className="text-[16px] font-bold text-black m-0 mb-3 mt-6">
            1. USE OF THE SERVICE
          </h3>

          <p className="text-[14px] text-[#666] m-0 mb-4 leading-relaxed">
            1.1 The Service allows you to use your Credentials to authenticate your identity when accessing the website or online services of a Government Organization, without having to create and remember separate login credentials for each Government Organization.
          </p>

          <p className="text-[14px] text-[#666] m-0 mb-4 leading-relaxed">
            1.2 When you use the Service, you will be redirected to your Financial Institution's website to enter your Credentials. Your Financial Institution will then confirm to the Government Organization that your identity has been authenticated, but will not share your Credentials or any personal information about you with the Government Organization.
          </p>

          <h3 className="text-[16px] font-bold text-black m-0 mb-3 mt-6">
            2. PRIVACY
          </h3>

          <p className="text-[14px] text-[#666] m-0 mb-4 leading-relaxed">
            2.1 Your privacy is important to us. When you use the Service, we collect and use certain information in accordance with our Privacy Policy, which can be found at interac.ca/privacy.
          </p>

          <p className="text-[14px] text-[#666] m-0 mb-4 leading-relaxed">
            2.2 The Service is designed to protect your privacy. Your Credentials and account information are never shared with the Government Organization. Only a confirmation that you have been authenticated is shared.
          </p>

          <h3 className="text-[16px] font-bold text-black m-0 mb-3 mt-6">
            3. SECURITY
          </h3>

          <p className="text-[14px] text-[#666] m-0 mb-4 leading-relaxed">
            3.1 You are responsible for maintaining the confidentiality and security of your Credentials. You must not share your Credentials with anyone.
          </p>

          <p className="text-[14px] text-[#666] m-0 mb-4 leading-relaxed">
            3.2 If you believe that your Credentials have been compromised or that someone has accessed your Account without your permission, you must immediately contact your Financial Institution.
          </p>

          <h3 className="text-[16px] font-bold text-black m-0 mb-3 mt-6">
            4. DISCLAIMER OF WARRANTIES
          </h3>

          <p className="text-[14px] text-[#666] m-0 mb-4 leading-relaxed">
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
        </div>
      </div>

      {/* Fixed Bottom Buttons */}
      <div className="px-4 pb-4 pt-2 flex-shrink-0 bg-white">
        <button
          onClick={onAccept}
          className="w-full bg-[#FDB714] text-black text-[17px] font-semibold py-4 px-4 rounded-[8px] border-0 cursor-pointer hover:bg-[#E5A612] active:bg-[#CC9410] transition-colors mb-3 text-center"
        >
          Accept and Continue
        </button>
        
        <button
          onClick={onDecline}
          className="w-full bg-white text-black text-[17px] font-semibold py-4 px-4 rounded-[8px] border-2 border-black cursor-pointer hover:bg-[#f5f5f5] active:bg-[#ebebeb] transition-colors text-center"
        >
          Decline and Exit
        </button>
      </div>
    </motion.div>
  );
}
import { Mail, ChevronRight, ChevronLeft, Bot } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import regHeaderImg from 'figma:asset/f3f82fb93af1b2177d8464ea9850e7d9c259ddc7.png';

interface SignInHelpScreenProps {
  onBack: () => void;
  defaultAccordionItem?: string;
  onAIChat?: () => void;
  onSendMessage?: (to?: string, subject?: string) => void;
}

export function SignInHelpScreen({ 
  onBack, 
  defaultAccordionItem, 
  onAIChat, 
  onSendMessage
}: SignInHelpScreenProps) {

  return (
    <div className="h-full bg-[#f2f2f7] flex flex-col">
      {/* Registration Header - Fixed at top */}
      <div className="flex-shrink-0 relative">
        <img 
          src={regHeaderImg} 
          alt="My Account" 
          className="w-full h-auto block"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Fixed Page Title Area */}
      <div className="flex-shrink-0 px-4 pt-2 pb-3 bg-[#f2f2f7]">
        <div className="flex items-start gap-3">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[30.6px] h-[30.6px] rounded-full border-2 border-[#007AFF] bg-transparent text-[#007AFF] cursor-pointer hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white active:opacity-70 transition-all flex-shrink-0 mt-1"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={3} />
          </button>
          <h1 className="text-[28px] font-bold text-black m-0 tracking-tight leading-[1.2]">Get help with sign in and registration</h1>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 min-h-0 overflow-y-auto bg-[#f2f2f7] pb-20">
        <div className="px-4 py-4">

          {/* Common Issues */}
          <div className="mb-6">
            <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-0 opacity-95">Common issues</h2>
            
            <Accordion type="single" collapsible className="space-y-3" defaultValue={defaultAccordionItem}>
              {/* You need help with registering for My Account */}
              <AccordionItem value="item-0" className="card-ios overflow-hidden border-l-4 border-[#007AFF]">
                <AccordionTrigger className="text-black hover:no-underline py-3 px-4 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] text-[15px]">
                  You need help with registering for My Account
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <h4 className="text-black mb-2 text-[15px] font-semibold">How to register for My Account:</h4>
                  <div className="space-y-2 mb-4">
                    <p className="text-black text-[15px] m-0 opacity-80">1. Select the registration option from the sign-in screen</p>
                    <p className="text-black text-[15px] m-0 opacity-80">2. Choose your preferred authentication method (CRA user ID and password, or Sign-In Partner)</p>
                    <p className="text-black text-[15px] m-0 mb-2 opacity-80">3. Provide the following information:</p>
                    <div className="ml-4 space-y-1">
                      <div className="flex items-start gap-2">
                        <span className="text-[#007AFF] mt-1">•</span>
                        <p className="text-black text-[15px] m-0 opacity-80">Your social insurance number (SIN)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#007AFF] mt-1">•</span>
                        <p className="text-black text-[15px] m-0 opacity-80">Your date of birth</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#007AFF] mt-1">•</span>
                        <p className="text-black text-[15px] m-0 opacity-80">Your current mailing address</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#007AFF] mt-1">•</span>
                        <p className="text-black text-[15px] m-0 opacity-80">Your email address and phone number</p>
                      </div>
                    </div>
                    <p className="text-black text-[15px] m-0 opacity-80">4. Set up your security questions and multi-factor authentication</p>
                    <p className="text-black text-[15px] m-0 opacity-80">5. Complete identity verification using one of the available methods</p>
                  </div>

                  <h4 className="text-black mb-2 text-[15px] font-semibold">Identity verification options:</h4>
                  <p className="text-black text-[15px] m-0 mb-2 opacity-80">You can verify your identity by:</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <span className="text-[#007AFF] mt-1">•</span>
                      <p className="text-black text-[15px] m-0 opacity-80">Using the CRA security code sent by mail (arrives within 10 business days)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#007AFF] mt-1">•</span>
                      <p className="text-black text-[15px] m-0 opacity-80">Using the document verification service (upload valid government-issued ID)</p>
                    </div>
                  </div>

                  <h4 className="text-black mb-2 text-[15px] font-semibold">If you need help during registration:</h4>
                  <p className="text-black text-[15px] m-0 mb-3 opacity-80">
                    If you encounter any issues during the registration process, use the Help button in the top right corner of any registration screen, or contact us using the options below.
                  </p>

                  <h4 className="text-black mb-2 text-[15px]">More help with registration</h4>
                  <a href="#" className="text-[#007AFF] hover:opacity-70 active:opacity-50 underline text-[15px] transition-opacity">
                    Learn more about registering for My Account
                  </a>
                </AccordionContent>
              </AccordionItem>

              {/* You forgot your CRA user ID or password */}
              <AccordionItem value="item-1" className="card-ios overflow-hidden border-l-4 border-[#007AFF]">
                <AccordionTrigger className="text-black hover:no-underline py-3 px-4 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] text-[15px]">
                  You forgot your CRA user ID or password
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <h4 className="text-black mb-2 text-[15px] font-semibold">To recover your CRA user ID:</h4>
                  <div className="space-y-2 mb-4">
                    <p className="text-black text-[15px] m-0 opacity-80">1. Select CRA user ID and password from the sign-in options</p>
                    <p className="text-black text-[15px] m-0 opacity-80">2. Select Forgot your user ID?</p>
                    <p className="text-black text-[15px] m-0 mb-2 opacity-80">3. Provide the following information:</p>
                    <div className="ml-4 space-y-1">
                      <div className="flex items-start gap-2">
                        <span className="text-[#007AFF] mt-1">•</span>
                        <p className="text-black text-[15px] m-0 opacity-80">Your social insurance number (SIN)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#007AFF] mt-1">•</span>
                        <p className="text-black text-[15px] m-0 opacity-80">Your date of birth</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#007AFF] mt-1">•</span>
                        <p className="text-black text-[15px] m-0 opacity-80">Amount you entered on line 15000 of your most recent income tax and benefit return, from one of the previous 2 tax years</p>
                      </div>
                    </div>
                    <p className="text-black text-[15px] m-0 opacity-80">4. Answer the security questions you set up during registration</p>
                  </div>

                  <h4 className="text-black mb-2 text-[15px] font-semibold">Recovering your password:</h4>
                  <p className="text-black text-[15px] m-0 mb-2 opacity-80">If you have forgotten your CRA password:</p>
                  <div className="space-y-2 mb-4">
                    <p className="text-black text-[15px] m-0 opacity-80">1. Select CRA user ID and password from the sign-in options</p>
                    <p className="text-black text-[15px] m-0 opacity-80">2. Select Forgot your password?</p>
                    <p className="text-black text-[15px] m-0 opacity-80">3. Enter your CRA user ID</p>
                    <p className="text-black text-[15px] m-0 opacity-80">4. Answer the security questions you set up during registration</p>
                  </div>

                  <h4 className="text-black mb-2 text-[15px] font-semibold">If you can't access your account:</h4>
                  <p className="text-black text-[15px] m-0 mb-3 opacity-80">
                    If you lost access to your CRA account, going through the registration process again may help you get your access back.
                  </p>

                  <h4 className="text-black mb-2 text-[15px]">More help with CRA user ID and password</h4>
                  <a href="#" className="text-[#007AFF] hover:opacity-70 active:opacity-50 underline text-[15px] transition-opacity">
                    Learn more about CRA user ID and password recovery
                  </a>
                </AccordionContent>
              </AccordionItem>

              {/* You did not receive your one-time passcode */}
              <AccordionItem value="item-2" className="card-ios overflow-hidden border-l-4 border-[#007AFF]">
                <AccordionTrigger className="text-black hover:no-underline py-3 px-4 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] text-[15px]">
                  You did not receive your one-time passcode
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <h4 className="text-black mb-2 text-[15px] font-semibold">If you have a new phone number:</h4>
                  <p className="text-black text-[15px] m-0 mb-3 opacity-80">
                    If you can no longer access your old phone number, and you have not already added your new phone number or another multi-factor authentication (MFA) option to your account, you will have to contact us.
                  </p>

                  <h4 className="text-black mb-2 text-[15px] font-semibold">Authenticator app and passcode grid:</h4>
                  <p className="text-black text-[15px] m-0 mb-3 opacity-80">
                    If you have already added other MFA options to your profile, you can select Different option to use a third-party authenticator app or a passcode grid.
                  </p>

                  <h4 className="text-black mb-2 text-[15px] font-semibold">When to contact us:</h4>
                  <p className="text-black text-[15px] m-0 opacity-80">
                    If you still cannot receive your one-time passcode, you will have to contact us.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* You have not received your CRA security code */}
              <AccordionItem value="item-3" className="card-ios overflow-hidden border-l-4 border-[#007AFF]">
                <AccordionTrigger className="text-black hover:no-underline py-3 px-4 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] text-[15px]">
                  You have not received your CRA security code
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-black text-[15px] m-0 mb-2 opacity-80">
                    If your CRA security code has been lost or has not arrived after 10 business days, you can either:
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <span className="text-[#007AFF] mt-1">•</span>
                      <p className="text-black text-[15px] m-0 opacity-80">Use the document verification service instead to verify your identity</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#007AFF] mt-1">•</span>
                      <p className="text-black text-[15px] m-0 opacity-80">Contact us to get a new one by mail</p>
                    </div>
                  </div>

                  <p className="text-black text-[15px] m-0 mb-2 font-semibold">
                    If your CRA security code has expired, you can either:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-[#007AFF] mt-1">•</span>
                      <p className="text-black text-[15px] m-0 opacity-80">Use the document verification service instead to verify your identity</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#007AFF] mt-1">•</span>
                      <p className="text-black text-[15px] m-0 opacity-80">Sign in to request a new CRA security code to be sent by mail</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Your account is locked */}
              <AccordionItem value="item-4" className="card-ios overflow-hidden border-l-4 border-[#007AFF]">
                <AccordionTrigger className="text-black hover:no-underline py-3 px-4 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] text-[15px]">
                  Your account is locked
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-black text-[15px] m-0 mb-3 opacity-80">
                    You do not need to call if you are only temporarily locked out. Your account will become locked if you enter the wrong information too many times for any of the following:
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <span className="text-[#007AFF] mt-1">•</span>
                      <p className="text-black text-[15px] m-0 opacity-80">CRA user ID or password</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#007AFF] mt-1">•</span>
                      <p className="text-black text-[15px] m-0 opacity-80">One-time passcode for multi-factor authentication (MFA)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#007AFF] mt-1">•</span>
                      <p className="text-black text-[15px] m-0 opacity-80">Security questions</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#007AFF] mt-1">•</span>
                      <p className="text-black text-[15px] m-0 opacity-80">CRA security code</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#007AFF] mt-1">•</span>
                      <p className="text-black text-[15px] m-0 opacity-80">The document verification service</p>
                    </div>
                  </div>

                  <p className="text-black text-[15px] m-0 opacity-80">
                    You may be able to regain access to your CRA account with new sign-in information or contact us to have your account unlocked.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Your CRA user ID and password have been revoked */}
              <AccordionItem value="item-5" className="card-ios overflow-hidden border-l-4 border-[#007AFF]">
                <AccordionTrigger className="text-black hover:no-underline py-3 px-4 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] text-[15px]">
                  Your CRA user ID and password have been revoked
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-black text-[15px] m-0 mb-2 opacity-80">
                    If your CRA user ID and password have been revoked, you can regain access to your account in either of the following ways:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-[#007AFF] mt-1">•</span>
                      <p className="text-black text-[15px] m-0 opacity-80">Use a different sign-in option</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#007AFF] mt-1">•</span>
                      <p className="text-black text-[15px] m-0 opacity-80">Go through the registration process again to get a new CRA user ID and password</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Change the option you sign in with */}
              <AccordionItem value="item-6" className="card-ios overflow-hidden border-l-4 border-[#007AFF]">
                <AccordionTrigger className="text-black hover:no-underline py-3 px-4 hover:bg-[#f2f2f7] active:bg-[#e5e5ea] text-[15px]">
                  Change the option you sign in with
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-black text-[15px] m-0 mb-3 opacity-80">
                    If you registered with a provincial partner, you can also create a CRA user ID and password or use a Sign-In Partner.
                  </p>

                  <p className="text-black text-[15px] m-0 mb-3 opacity-80">
                    If you registered with a CRA user ID and password, you can sign in with your CRA user ID and password and revoke your credential so you can register with a different sign-in option or create a new CRA user ID and password.
                  </p>

                  <p className="text-black text-[15px] m-0 opacity-80">
                    If you registered with a Sign-In Partner, you can sign in to your current Sign-In Partner and switch to a different Sign-In Partner.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Contact CRA */}
          <div className="mb-8">
            <h2 className="text-black text-[13px] uppercase tracking-wider mb-2 px-0 opacity-95">For additional assistance</h2>
            
            {/* Contact Us */}
            <div className="mb-4 card-ios overflow-hidden">
              <button 
                onClick={onAIChat}
                className="list-item-ios flex items-center gap-3 px-4 py-3 w-full hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left"
              >
                <Bot className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px]">AI chat</div>
                  <div className="text-black text-[13px] opacity-60">Get instant answers from an AI Assistant</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </button>

              <button 
                onClick={() => onSendMessage?.('CRA Sign in support', 'Help with Sign in')} 
                className="list-item-ios flex items-center gap-3 px-4 py-3 w-full hover:bg-[#f2f2f7] active:bg-[#e5e5ea] transition-colors text-left"
              >
                <Mail className="h-5 w-5 text-[#007AFF] flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-black text-[17px]">Send us a message</div>
                  <div className="text-black text-[13px] opacity-60">We'll respond within 2 business days</div>
                </div>
                <div className="chevron-button-ios">
                  <ChevronRight />
                </div>
              </button>
            </div>

            {/* Service hours */}
            <div className="mb-4 card-ios p-4">
              <h3 className="text-black text-[17px] font-semibold mb-3">Service hours</h3>
              <div className="space-y-2 text-black text-[15px]">
                <div className="flex justify-between">
                  <span className="opacity-80">Monday to Friday:</span>
                  <span className="font-medium">8:00 AM - 8:00 PM (ET)</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">Saturday and Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
              <div className="bg-[#007AFF]/5 p-3 border-l-4 border-[#007AFF] mt-3 rounded-[4px]">
                <p className="text-black text-[13px] m-0 opacity-80">
                  <strong className="text-black opacity-100">Note:</strong> Service hours may be extended during peak periods (March to May)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
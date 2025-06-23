import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import SendMail from "./SendMail";

const Contact = () => {
  // const recipientEmail = "moueducation2021@gmail.com";
  // const subject = "Inquiry from your Portfolio";
  // const body = "Hello, I visited your portfolio and would like to connect...";

 // const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (
    <div
      className="bg-blue-200 flex p-9 flex-col justify-center
     items-center"
    >
      <p className="w-[100%] text-center ">
        <span className="text-3xl block p-2 w-[100%]">
          Ready to spark ✨ a digital connection?{" "}
        </span>
        Let's get in touch and turn your vision into a stunning reality! Drop me
        a line, and let's create something extraordinary together!
      </p>
      <div className="flex justify-start flex-col items-start w-[80%]  text-gray-800 
      md:pl-40 md:p-2">
        {/* github */}
        <div className="p-2 flex gap-2">
          <div>
            <FontAwesomeIcon
              icon={faGithub}
              size="2xl"
              fade
              style={{ color: "#010813" }}
            />
          </div>
          <div>
            <a href="https://github.com/moumajhi23">@MouMajhi23</a>
          </div>
        </div>
        {/* LinkedIN */}
        <div className="p-2 flex gap-2">
          <div>
            <FontAwesomeIcon
              icon={faLinkedin}
              fade
              style={{ color: "#0270ae" }}
              size="2xl"
            />
          </div>
          <div>
            <a href="https://www.linkedin.com/in/mou-majhi-5a4677246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              Let's Connect !
            </a>
          </div>
        </div>

        {/* instagram */}
        <div className="p-2 flex gap-2">
          <div>
            <FontAwesomeIcon
              icon={faInstagram}
              size="2xl"
              fade
              style={{ color: "#ff42cd" }}
            />
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/mou-majhi-5a4677246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className=""
            >
              @mou._.maji
            </a>
          </div>
        </div>
       
      </div>
      <div className="footer mt-4 md:w-[40%] w-[90%]">

      <SendMail></SendMail>
        

      </div>
      <footer className="md:w-full flex justify-center pt-6 w-full text-sm text-gray-500 ">
        <p>Crafted with code, passion & sleepless nights.👩🏻‍💻</p>
      </footer>
    </div>
  );
};
export default Contact;

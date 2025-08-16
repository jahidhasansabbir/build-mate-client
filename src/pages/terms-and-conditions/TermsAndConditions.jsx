// src/components/TermsAndConditions/TermsAndConditions.jsx
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="w-11/12 max-w-[1200px] mx-auto py-12 px-4 md:px-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Terms & Conditions
      </h1>

      <p className="text-gray-700 mb-6">
        Welcome to BuildMate! Our platform is designed to make living in your building easier, safer, and more convenient. By using BuildMate, you agree to follow these terms and conditions. We have written them in simple language so that every resident can easily understand their rights and responsibilities.
      </p>

      <ol className="list-decimal list-inside space-y-8 text-gray-700">

        <li>
          <strong>Use of Services:</strong> <br />
          BuildMate is meant to be used for legitimate purposes related to living in and managing your building. You agree not to misuse the platform for illegal activities or purposes that could harm other residents, staff, or the building itself. This includes but is not limited to sending spam messages, attempting to hack the platform, or sharing false information. Using BuildMate responsibly ensures a safe and reliable environment for everyone in the building.
        </li>

        <li>
          <strong>Account Security:</strong> <br />
          Each resident is responsible for keeping their account information secure. Your account may include personal details such as your name, apartment number, and contact information. Do not share your login credentials with anyone. If you suspect that your account has been accessed without permission, report it immediately. By keeping your account secure, you help protect both your personal information and the integrity of the platform for all users.
        </li>

        <li>
          <strong>Payments:</strong> <br />
          If you make any payments through BuildMate (for services, amenities, or fees), you must do so using the secure payment system provided. Always double-check your payment details before confirming a transaction. Late or missed payments may affect your access to certain services or amenities. BuildMate is committed to providing a safe and secure payment experience, but users must ensure they follow proper procedures to avoid mistakes.
        </li>

        <li>
          <strong>Announcements:</strong> <br />
          BuildMate will send important announcements and updates about your building. This may include scheduled maintenance, changes in services, safety alerts, or community events. By agreeing to these terms, you consent to receive notifications through the platform or your registered contact details. Staying informed helps you plan your daily activities and ensures your safety and comfort within the building.
        </li>

        <li>
          <strong>Data Privacy:</strong> <br />
          Your privacy is very important to us. BuildMate collects personal information only to provide better services and enhance your living experience. We do not sell your personal data to any third party. Information may be used for announcements, facility updates, or to improve the platform. You can rest assured that your data is handled carefully, securely, and only for the purposes described in our privacy policy.
        </li>

        <li>
          <strong>Promotional Features & Resident Benefits:</strong> <br />
          BuildMate offers special features and updates to enhance your living experience in the building. These features are designed to make life easier, more organized, and more enjoyable for all residents. Here’s a detailed explanation of each feature:

          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-4">
            <li>
              <strong>Announcements & Alerts:</strong> <br />
              BuildMate acts as the central hub for all building-related information. Residents will receive notifications about maintenance schedules, upcoming repairs, or urgent alerts such as water shutdowns or safety warnings. These alerts help you plan your day, avoid inconvenience, and stay safe. For example, if there is scheduled maintenance in the elevator or common areas, you will know in advance and can adjust your schedule accordingly. This feature ensures everyone is informed in a timely manner.
            </li>

            <li>
              <strong>Community Events & Engagement:</strong> <br />
              BuildMate encourages residents to participate in community activities, meetings, or workshops organized within the building. These events are meant to foster interaction among residents, build trust, and strengthen the sense of community. For instance, residents can join seasonal gatherings, safety meetings, or workshops that improve shared living spaces. Engaging in these activities allows you to meet neighbors, share ideas, and create a friendlier, more connected living environment.
            </li>

            <li>
              <strong>Facility Highlights & Upgrades:</strong> <br />
              BuildMate provides detailed information about building facilities and any upgrades. This could include renovated common areas, new gym equipment, enhanced security features, or seasonal improvements in gardens and recreational areas. Residents are informed not only about the availability of these facilities but also about how to access them and any rules that need to be followed. This ensures that everyone can enjoy the facilities safely and efficiently, and helps residents stay aware of improvements that enhance their quality of life.
            </li>
          </ul>
        </li>

        <li>
          <strong>Limitation of Liability:</strong> <br />
          BuildMate strives to provide accurate and timely information, but the platform cannot be held responsible for indirect or unforeseen damages that may occur from using the platform. This includes issues caused by miscommunication, missed alerts, or technical problems. By using the platform responsibly and staying attentive, residents can minimize risks and enjoy a smooth experience.
        </li>

        <li>
          <strong>Changes to Terms:</strong> <br />
          BuildMate may update these terms occasionally to improve clarity, security, or services. Users are responsible for reviewing the updated terms regularly. Continuing to use BuildMate after updates means you agree to the revised terms. We encourage all residents to check for updates to ensure they fully understand their rights and responsibilities.
        </li>

      </ol>

      <p className="text-gray-700 mt-6">
        By continuing to use BuildMate, you acknowledge that you have read, understood, and agreed to all of these terms and conditions. Our goal is to make your experience in the building smooth, secure, and enjoyable.
      </p>
    </div>
  );
};

export default TermsAndConditions;

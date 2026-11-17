
import React from "react";

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      {
        heading: "Employee Information",
        text: "We may collect employee name, employee code, account information, and other employment-related details provided by the organization."
      },
      {
        heading: "Attendance Information",
        text: "When employees mark attendance, the app may collect attendance date and time, attendance type, and attendance history."
      },
      {
        heading: "Camera and Selfie Information",
        text: "The app uses the device camera to capture attendance selfies. These images are submitted to the organization's backend for attendance verification."
      },
      {
        heading: "Location Information",
        text: "The app may collect GPS coordinates, location accuracy, and location capture time when attendance is marked. Location information is used for attendance verification."
      },
      {
        heading: "Device and Technical Information",
        text: "Technical information may be processed to support authentication, device security, troubleshooting, and application functionality."
      }
    ]
  },
  {
    title: "2. How We Use Information",
    bullets: [
      "Authenticate employees and maintain secure account access.",
      "Record and verify employee attendance.",
      "Associate attendance records with submitted selfies and location information.",
      "Allow authorized approvers to review, approve, or reject attendance.",
      "Maintain attendance history and organizational reports.",
      "Protect the application against unauthorized access and misuse.",
      "Maintain and improve application functionality."
    ]
  },
  {
    title: "3. Camera and Location Permissions",
    content: [
      {
        heading: "Camera Permission",
        text: "Camera access is requested to capture employee selfies for attendance verification. The camera is not intended for continuous monitoring."
      },
      {
        heading: "Location Permission",
        text: "Location access is requested to capture the employee's location when recording attendance. Location collection is associated with attendance functionality."
      }
    ]
  },
  {
    title: "4. Data Sharing",
    text: "Employee information and attendance records may be accessible to authorized personnel within the organization, including assigned attendance approvers and authorized administrators, for legitimate employment and attendance-management purposes.",
    extra: "We do not sell personal information to third parties. Information may be processed by infrastructure or service providers required to operate the application."
  },
  {
    title: "5. Data Storage and Security",
    text: "Information is transmitted to the Aapurti backend and stored using the organization's configured infrastructure. The application uses authentication mechanisms and Android secure storage for access credentials. Reasonable technical and organizational safeguards are used to protect information against unauthorized access, alteration, or disclosure."
  },
  {
    title: "6. Data Retention",
    text: "Personal information and attendance records are retained according to the organization's applicable record-retention requirements and operational needs. Contact the organization for information about applicable retention periods and deletion procedures."
  },
  {
    title: "7. Your Rights",
    bullets: [
      "Request information about personal data associated with your employee account.",
      "Request correction of inaccurate employee information.",
      "Raise concerns about the processing of your personal information.",
      "Contact the organization regarding applicable deletion or access requests."
    ]
  },
  {
    title: "8. Children's Privacy",
    text: "Aapurti One is an employee-management application and is not designed for children. It is intended for authorized organizational users."
  },
  {
    title: "9. Changes to This Privacy Policy",
    text: "We may update this Privacy Policy when application functionality, legal requirements, or data-processing practices change. The revised policy will be published on this page with an updated effective date."
  },
  {
    title: "10. Contact Us",
    text: "For questions, privacy requests, or concerns regarding this Privacy Policy, contact the organization using the details below."
  }
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-emerald-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <p className="text-sm font-semibold tracking-widest text-emerald-200">
            AAPURTI ONE
          </p>
          <h1 className="mt-3 text-4xl font-bold">
            Privacy Policy
          </h1>
          <p className="mt-3 text-emerald-100">
            Transparency and responsible handling of employee information.
          </p>
          <p className="mt-5 text-sm text-emerald-200">
            Effective date: [INSERT PUBLICATION DATE]
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-10">
        <section className="rounded-xl border border-emerald-100 bg-white p-6 shadow-sm">
          <p className="leading-7">
            This Privacy Policy explains how Aapurti One collects, uses,
            stores, and protects information when employees use the
            application. By using the application, you acknowledge that
            your information may be processed as described in this policy.
          </p>
        </section>

        <div className="mt-8 space-y-6">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold text-emerald-900">
                {section.title}
              </h2>

              {section.content?.map((item) => (
                <div key={item.heading} className="mt-4">
                  <h3 className="font-semibold text-slate-900">
                    {item.heading}
                  </h3>
                  <p className="mt-1 leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}

              {section.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-600">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {section.text && (
                <p className="mt-4 leading-7 text-slate-600">
                  {section.text}
                </p>
              )}

              {section.extra && (
                <p className="mt-3 leading-7 text-slate-600">
                  {section.extra}
                </p>
              )}

              {section.title === "10. Contact Us" && (
                <div className="mt-4 space-y-2 text-slate-600">
                  <p><strong>Organization:</strong> [LEGAL ORGANIZATION NAME]</p>
                  <p><strong>Email:</strong> [PRIVACY CONTACT EMAIL]</p>
                  <p><strong>Address:</strong> [BUSINESS ADDRESS]</p>
                </div>
              )}
            </section>
          ))}
        </div>

        <footer className="mt-10 border-t border-slate-200 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Aapurti One. All rights reserved.
        </footer>
      </div>
    </main>
  );
}

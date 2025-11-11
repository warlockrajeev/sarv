export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none text-stone-700">
            <p className="text-sm text-stone-500 mb-8">
              Last updated: {new Date().toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to Sarv EduCare ("we," "us," or "our"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                By accessing our website or using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">2.1 Personal Information</h3>
              <p className="mb-4">We may collect the following personal information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name (first name and last name)</li>
                <li>Contact information (email address, phone number)</li>
                <li>Address information (state, city, zip code)</li>
                <li>Educational institution details</li>
                <li>Business information for franchise inquiries</li>
              </ul>

              <h3 className="text-xl font-semibold text-stone-800 mb-3">2.2 Usage Information</h3>
              <p className="mb-4">We automatically collect certain information about your device and usage:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address and location information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website information</li>
                <li>Device information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Respond to inquiries:</strong> Process and respond to your questions and requests</li>
                <li><strong>Provide services:</strong> Deliver educational solutions and franchise opportunities</li>
                <li><strong>Communication:</strong> Send you updates, newsletters, and marketing materials (with your consent)</li>
                <li><strong>Improve services:</strong> Analyze usage patterns to enhance our website and services</li>
                <li><strong>Legal compliance:</strong> Meet legal obligations and protect our rights</li>
                <li><strong>Business operations:</strong> Process franchise applications and partnership inquiries</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Service providers:</strong> With trusted third-party service providers who assist in operating our website and conducting our business</li>
                <li><strong>Legal requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With consent:</strong> When you explicitly consent to the sharing of your information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">5. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure server infrastructure</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Employee training on data protection practices</li>
              </ul>
              <p>
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
              </p>
              <p>
                Types of cookies we use:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Essential cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">7. Your Rights and Choices</h2>
              <p className="mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data portability:</strong> Request transfer of your data in a structured format</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">8. Children's Privacy</h2>
              <p className="mb-4">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>
              <p>
                For educational institutions serving children, we collect only the necessary institutional information and do not collect personal information about individual students without appropriate consent and legal compliance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">9. International Data Transfers</h2>
              <p className="mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">10. Data Retention</h2>
              <p className="mb-4">
                We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">11. Third-Party Links</h2>
              <p className="mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">12. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
              </p>
              <p>
                Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">13. Contact Us</h2>
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-amber-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Sarv EduCare</strong></p>
                <p className="mb-2">123 Learning Street, Connaught Place</p>
                <p className="mb-2">New Delhi, India - 110001</p>
                <p className="mb-2">Email: privacy@sarv.educare</p>
                <p className="mb-2">Phone: +91 99999 99999</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">14. Governing Law</h2>
              <p className="mb-4">
                This Privacy Policy is governed by and construed in accordance with the laws of India. Any disputes arising from this Privacy Policy will be subject to the exclusive jurisdiction of the courts in New Delhi, India.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

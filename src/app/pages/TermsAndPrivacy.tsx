import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function TermsAndPrivacy() {
  return (
    <div className="pt-24 min-h-screen bg-[#02040a] relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950/0 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-[Space_Grotesk] font-medium">Back to Home</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="prose prose-invert prose-lg max-w-none
            prose-headings:font-[Space_Grotesk] prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:border-t prose-h2:border-white/10 prose-h2:pt-8 prose-h2:mb-6 prose-h2:mt-16
            prose-h3:pt-4 prose-h3:mb-4 prose-h3:text-blue-400
            prose-p:text-slate-300 prose-p:leading-relaxed
            prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-semibold
            prose-li:text-slate-300 prose-li:marker:text-blue-500">

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">
              VPN Blue
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center !border-0 !mt-0 !pt-0 text-white">
              Fast VPN Turbo IP Changer — Terms of Service
            </h2>

            <p className="text-sm text-slate-500 mb-8 text-center font-mono">Last Updated: March 26, 2026</p>

            <p>Please read these Terms of Service carefully before accessing or using VPN Blue. By downloading, installing, or using our application and services, you agree to be bound by these Terms. If you do not agree, you must not use the Service.</p>

            <p><strong>Our Core Commitment:</strong> VPN Blue operates a strict no-log policy. We do not store your browsing history, traffic destination, data content, DNS queries, IP address, outgoing VPN IP address, connection timestamps, or session duration. Your online activity is yours alone.</p>

            <h2 className="!border-0 !mt-8 !pt-0">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-1 text-slate-300 font-[Space_Grotesk]">
              <li>Overview</li>
              <li>Eligibility</li>
              <li>Description of Service</li>
              <li>Acceptable Use Policy</li>
              <li>No-Log Policy</li>
              <li>Account Registration</li>
              <li>Subscription, Billing &amp; Payments</li>
              <li>Cancellation &amp; Termination</li>
              <li>Intellectual Property</li>
              <li>Third-Party Services &amp; Links</li>
              <li>Disclaimer of Warranties</li>
              <li>Limitation of Liability</li>
              <li>Indemnification</li>
              <li>Privacy</li>
              <li>Modifications to These Terms</li>
              <li>Governing Law &amp; Dispute Resolution</li>
              <li>Severability</li>
              <li>Entire Agreement</li>
              <li>Contact Information</li>
            </ol>

            <h2>1. Overview</h2>
            <p>VPN Blue is operated by Human Data Systems Private Limited (referred to as "we", "us", or "our"). VPN Blue provides a fast, secure, and private Virtual Private Network (VPN) service accessible through our website, mobile application, and related platforms.</p>
            <p>These Terms of Service ("Terms") govern your access to and use of VPN Blue. By using the Service, you confirm that you have read, understood, and agreed to these Terms, including our Privacy Policy.</p>

            <h2>2. Eligibility</h2>
            <p>By using VPN Blue, you confirm that:</p>
            <ul>
              <li>You are at least 18 years of age, or the age of majority in your jurisdiction, whichever is greater.</li>
              <li>You have the legal capacity to enter into a binding agreement.</li>
              <li>You are not prohibited from using our Service under any applicable law or regulation.</li>
            </ul>
            <p>If you are using the Service on behalf of a company or legal entity, you represent that you have the authority to bind that entity to these Terms.</p>

            <h2>3. Description of Service</h2>
            <p>VPN Blue provides a Virtual Private Network (VPN) service designed to enhance your online privacy, security, and internet accessibility. Key features include:</p>
            <ul>
              <li>Encrypted VPN tunneling to secure your internet connection.</li>
              <li>Automatic selection of the nearest VPN server for optimal speed and performance.</li>
              <li>Multiple mode options: Online Anonymity, Full Security, and Fast Access.</li>
              <li>Strict no-log policy — we do not store your browsing history, traffic data, DNS queries, or IP addresses.</li>
              <li>Unlimited data and bandwidth (subject to your subscription plan).</li>
            </ul>
            <p>We reserve the right to add, modify, or discontinue any feature of the Service at any time without prior notice.</p>

            <h2>4. Acceptable Use Policy</h2>
            <p>By using VPN Blue, you agree not to use the Service for any of the following:</p>
            <ul>
              <li>Any unlawful, illegal, or fraudulent activity under applicable local, national, or international law.</li>
              <li>Uploading, transmitting, or distributing malware, viruses, ransomware, spyware, or any destructive code.</li>
              <li>Infringing upon the intellectual property rights of others, including copyright, trademark, or patent violations.</li>
              <li>Harassment, abuse, intimidation, defamation, or discrimination of any individual or group.</li>
              <li>Unauthorized access to or exploitation of computer systems, networks, or data.</li>
              <li>Circumventing digital rights management (DRM) protections or content access controls.</li>
              <li>Distributing unsolicited communications (spam), phishing, or fraudulent schemes.</li>
              <li>Collecting or harvesting personal data of others without their explicit consent.</li>
              <li>Degrading or disrupting the performance of the Service or the infrastructure of any third party.</li>
              <li>Facilitating human trafficking, child exploitation, or any form of abuse.</li>
            </ul>
            <p>Any breach of this policy may result in immediate suspension or termination of your account and access to the Service, without refund.</p>

            <h2>5. No-Log Policy</h2>
            <p>VPN Blue is committed to protecting your privacy. Consistent with our Privacy Policy, our no-log policy means we do not collect or retain:</p>
            <ul>
              <li>Your browsing history, traffic destinations, or data content.</li>
              <li>Your originating IP address or outgoing VPN IP address.</li>
              <li>DNS queries made during your session.</li>
              <li>Connection timestamps or session duration linked to your identity.</li>
            </ul>
            <p>Even if compelled by a legal authority, we are unable to produce data that we do not possess. For complete details, please review our <Link to="/privacy">Privacy Policy</Link>.</p>

            <h2>6. Account Registration</h2>
            <p>Certain features of VPN Blue may require you to create an account. When registering, you agree to:</p>
            <ul>
              <li>Provide accurate, current, and complete information.</li>
              <li>Maintain the confidentiality of your login credentials.</li>
              <li>Notify us promptly of any unauthorized use of your account.</li>
              <li>Accept full responsibility for all activity that occurs under your account.</li>
            </ul>
            <p>We reserve the right to suspend or terminate accounts that contain false information or that we reasonably believe have been compromised.</p>

            <h2>7. Subscription, Billing &amp; Payments</h2>

            <h3>Pricing</h3>
            <p>All prices are displayed in the applicable currency at the time of purchase and are subject to change with reasonable notice. Continued use of the Service after a price change constitutes your acceptance of the updated pricing.</p>

            <h3>Billing</h3>
            <p>Paid subscriptions are billed on a recurring basis (monthly or annually, depending on your chosen plan) and will automatically renew unless cancelled before the renewal date.</p>

            <h3>Payment Processing</h3>
            <p>Payments are processed by third-party payment service providers. VPN Blue does not directly store your payment card information. All payment data is governed by the privacy policy of the relevant payment processor.</p>

            <h3>Refund Policy</h3>
            <p>Refunds may be considered on a case-by-case basis, at our sole discretion. To request a refund, please contact us at <a href="mailto:contactus@kalagato.co">contactus@kalagato.co</a>. We are not obligated to issue refunds except as required by applicable consumer protection law.</p>

            <h2>8. Cancellation &amp; Termination</h2>
            <p>You may cancel your subscription at any time through the app or by contacting us. Cancellation takes effect at the end of your current billing period.</p>
            <p>We reserve the right to suspend or terminate your access to the Service, without notice, if:</p>
            <ul>
              <li>You breach any provision of these Terms.</li>
              <li>We reasonably believe your use of the Service poses a risk to us, other users, or third parties.</li>
              <li>We are required to do so by applicable law.</li>
            </ul>
            <p>Upon termination, all rights granted to you under these Terms will immediately cease. Obligations incurred prior to termination will survive.</p>

            <h2>9. Intellectual Property</h2>
            <p>All content, trademarks, logos, software, and technology associated with VPN Blue are the exclusive property of Human Data Systems Private Limited or its licensors. You are granted a limited, non-exclusive, non-transferable, revocable license to use the Service for personal, non-commercial purposes only.</p>
            <p>You must not:</p>
            <ul>
              <li>Copy, reproduce, modify, distribute, or create derivative works from any part of the Service without our express written permission.</li>
              <li>Reverse engineer, decompile, or disassemble any software used in the Service.</li>
              <li>Use VPN Blue's name, logo, or branding for any commercial purpose without prior written consent.</li>
            </ul>

            <h2>10. Third-Party Services &amp; Links</h2>
            <p>VPN Blue may integrate with or link to third-party services, tools, or websites. These are governed by their own terms and privacy policies. We are not responsible for the content, accuracy, availability, or practices of any third-party services.</p>
            <p>Specifically, VPN Blue uses the following third-party services for analytics and diagnostics:</p>
            <ul>
              <li><strong>Google Analytics for Firebase:</strong> App usage, device data, geography, and in-app purchases.</li>
              <li><strong>Amplitude:</strong> User behavior analytics to help optimize the application.</li>
              <li><strong>Apphud:</strong> In-app purchase insights and payment facilitation.</li>
            </ul>
            <p>We are not liable for any harm or loss arising from your interaction with third-party services.</p>

            <h2>11. Disclaimer of Warranties</h2>
            <p className="uppercase text-sm leading-relaxed">The service is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. To the maximum extent permitted by applicable law, we expressly disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the service will be uninterrupted, timely, secure, or error-free.</p>
            <p>VPN Blue does not warrant that using the Service will make your online activities completely anonymous or invulnerable to all security threats.</p>

            <h2>12. Limitation of Liability</h2>
            <p className="uppercase text-sm leading-relaxed">To the fullest extent permitted by applicable law, Human Data Systems Private Limited and its directors, officers, employees, affiliates, and service providers shall not be liable for any indirect, incidental, special, punitive, or consequential damages, including loss of profits, revenue, data, or business opportunities.</p>
            <p>Our total aggregate liability to you for any claim arising from or related to the Service shall not exceed the amount you paid us in the three (3) months preceding the event giving rise to the claim.</p>
            <p>Some jurisdictions do not allow the exclusion or limitation of certain damages; in such cases our liability shall be limited to the maximum extent permitted by law.</p>

            <h2>13. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Human Data Systems Private Limited and its officers, directors, employees, affiliates, contractors, licensors, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or related to:</p>
            <ul>
              <li>Your violation of these Terms.</li>
              <li>Your use or misuse of the Service.</li>
              <li>Your violation of any applicable law or the rights of any third party.</li>
            </ul>

            <h2>14. Privacy</h2>
            <p>Your use of VPN Blue is also governed by our <Link to="/privacy">Privacy Policy</Link>, which is incorporated into these Terms by reference. Our Privacy Policy describes how we collect, use, store, and protect your information. By using the Service, you consent to the collection and use of your data as described therein.</p>

            <h2>15. Modifications to These Terms</h2>
            <p>We reserve the right to update or revise these Terms at any time. When we make material changes, we will update the "Last Updated" date at the top of this page and may notify you through the application or by email.</p>
            <p>Your continued use of the Service after any changes become effective constitutes your acceptance of the revised Terms. If you do not agree with the updated Terms, you must stop using the Service.</p>

            <h2>16. Governing Law &amp; Dispute Resolution</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the courts of Jaipur, Rajasthan, India.</p>
            <p>Before initiating any legal proceedings, you agree to attempt to resolve disputes informally by contacting us at <a href="mailto:contactus@kalagato.co">contactus@kalagato.co</a>. We will make good-faith efforts to resolve any issue within 30 days.</p>

            <h2>17. Severability</h2>
            <p>If any provision of these Terms is found to be unlawful, void, or unenforceable, that provision shall be enforced to the maximum extent permissible, and the remaining provisions shall continue in full force and effect.</p>

            <h2>18. Entire Agreement</h2>
            <p>These Terms, together with our Privacy Policy and any other policies or agreements referenced herein, constitute the entire agreement between you and Human Data Systems Private Limited with respect to the Service. They supersede all prior agreements, representations, or understandings between you and us.</p>

            <h2>19. Contact Information</h2>
            <p>If you have any questions, concerns, or feedback about these Terms of Service, please reach out to us:</p>
            <p>Email: <a href="mailto:contactus@kalagato.co">contactus@kalagato.co</a></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

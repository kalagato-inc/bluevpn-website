import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function PrivacyPolicy() {
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
              Fast VPN turbo IP Changer Privacy Policy
            </h2>

            <p className="text-sm text-slate-500 mb-8 text-center font-mono">Last Updated: February 24, 2026</p>

            <p>We value your privacy and want to ensure that you understand how we handle your information when you use our Services. This Privacy Policy is designed to provide transparency regarding the collection, purpose, use, storage, disclosure, and protection of your information, including Personal Data. We want you to know the extent to which you can exercise your rights, such as accessing, verifying, correcting, and deleting your information.</p>

            <p>At the same time, we want to clarify what information we do not collect under any circumstances. Safeguarding your information is of utmost importance to us, and we have implemented security measures to protect it. If you have any questions or concerns about this Privacy Policy, we provide contact information for your convenience.</p>

            <p><strong>Our Primary Principle:</strong> Specifically, we do not keep logs of your activity, including browsing history, traffic destination, data content, or DNS queries. Additionally, we never retain connection logs, which means we do not store your IP address, outgoing VPN IP address, connection timestamp, or session duration.</p>

            <p>Our primary principle in collecting data is to gather only the necessary information to deliver exceptional services on a global scale. We have developed and continue to improve our systems to ensure that we do not possess sensitive data about our customers. Even when compelled, we are unable to disclose, misuse, or abuse data that we do not possess.</p>

            <p>Fast VPN is dedicated to preserving the privacy of your information as part of our core mission. We deeply respect the privacy rights of all our users, and we are fully committed to upholding the principles outlined in the General Data Protection Regulation (GDPR).</p>

            <p>When you use our Application, Fast VPN, and engage with our services, you entrust us with your personal information. We place a significant emphasis on safeguarding your privacy. This privacy notice aims to clearly explain the specifics of our privacy policy, including the information we collect, how we use it, and the rights you have concerning your data. We encourage you to carefully review this policy, as it is of great importance.</p>

            <h2>About Us</h2>
            <p>Fast VPN is VPN Service, the all-in-one solution for speed, privacy, and security on the internet. Our app offers features like quick mode selection, providing options such as "Online anonymity," "Full security," and "Fast access" to tailor your online experience. Our system automatically selects the nearest location for a fast and secure connection. Enjoy unlimited data, time, and bandwidth without registration, and rest assured, our no-log policy ensures your personal information remains private. Connect with just one tap for lightning-fast speeds and seamless connectivity.</p>

            <h2>General Data Collection</h2>
            <p>Fast VPN may collect few types of data based on your usage of the Services. Each type of data serves a specific purpose and is explained in detail below.</p>
            <ul>
              <li><strong>Personal Data:</strong> Fast VPN gathers user-provided personal data, which is essential for the delivery of our Services, processing payments, addressing support queries, and providing service-related updates.</li>
              <li><strong>Usage Statistics Data:</strong> A minimal amount of data is collected to ensure excellent customer support and service quality. This data does not include details about your browsing activity, VPN traffic, DNS queries, or IP addresses.</li>
              <li><strong>App Diagnostic Data:</strong> If you choose to opt in, anonymized data like crash reports and usability diagnostics may be collected to improve the performance of the Apps.</li>
            </ul>

            <h2>Personal Data</h2>
            <p>Fast VPN collects Personal Data provided by users. This information is necessary for us to deliver our Services, handle payments, respond to support inquiries, and service-related updates. We handle Personal Data solely for the purposes outlined in our Privacy Policy and do not sell or lease it to third parties. We collect and process Personal Data based on legitimate interests and contractual obligations to users.</p>

            <p>Personal information associated with Fast VPN accounts is controlled exclusively by Fast VPN. It is stored on our systems and servers or those leased by us and our subsidiaries. In limited circumstances where processing by related entities is required, data is shared solely for the specific and legitimate purposes described in the Privacy Policy. Data protection standards are maintained at all times. It's important to note that personal information of Fast VPN users will not be transferred to any other related entities.</p>

            <h2>The protection and retention of your personal data</h2>

            <h3>Security Measures</h3>
            <p>We have implemented top-tier physical, procedural, and technical security measures in our offices and information storage facilities to prevent any unauthorized access, disclosure, modification, loss, or misuse of your Personal Data. While we strive to maintain robust systems, it's important to note that no security measures are completely foolproof. Therefore, our primary principle is to collect only essential data.</p>

            <h3>Servers and Data Centers</h3>
            <p>Our servers are housed in highly secure data centers that adhere to stringent security practices. None of these data centers require us to collect or store any traffic data or Personal Data related to your use of the Services. If any data center were to request logging such data, we would immediately terminate our partnership with that service provider and explore alternative options. Even if a government were to seize one of our VPN servers, there would be no logs or information connecting individual users to specific events, websites, or activities.</p>

            <h3>Retention of Personal Data</h3>
            <p>Your Personal Data, which never includes sensitive information like browsing history, DNS queries, or user-linked IP addresses, is retained for a limited period in compliance with applicable data protection laws. We keep the data as long as we have your consent or a legitimate reason for holding it.</p>

            <h3>Legal Considerations</h3>
            <p>Your Personal Data is controlled and stored by Fast VPN. We vigorously defend our rights and the privacy protections.</p>

            <h2>Usage Statistics Data and App Diagnostic Data</h2>
            <p>To ensure exceptional customer support and maintain the quality of our service, Fast VPN gathers specific information regarding your VPN usage, as explained below. This data is only accessible to our staff on a need-to-know basis. We guarantee that Usage Statistics Data and App Diagnostic Data never contain any sensitive information, adhering to our overall commitment of never logging browsing history, traffic destinations, data content, IP addresses, or DNS queries.</p>

            <p>Our fundamental principle of minimal data collection means:</p>
            <ul>
              <li>We are unaware of which user accessed a particular website or service.</li>
              <li>We do not possess knowledge of which user was connected to the VPN at a specific time or which VPN server IP addresses they utilized.</li>
              <li>We do not have access to the set of original IP addresses associated with any individual user's computer.</li>
            </ul>
            <p>If anyone were to attempt to compel Fast VPN to disclose user information based on the aforementioned details, we would be unable to comply since the data simply does not exist.</p>

            <h3>Apps and Apps Versions</h3>
            <p>Fast VPN gathers data concerning the Apps and their respective version(s) that you have activated for using our Services. This information is useful for our Support Team to troubleshoot any technical problems that may arise during your usage.</p>

            <h3>Successful Connection</h3>
            <p>We collect information on whether you have successfully established a VPN connection on a specific day (without recording the exact time), the VPN location you connected to (without capturing your assigned outgoing IP address), and the country/ISP you connected from (without logging your source IP address). This minimal data helps us in providing technical support, identifying connection issues, offering country-specific usage advice, and facilitating our engineers in detecting and resolving network-related problems.</p>

            <h3>Usage Statistics Data summary</h3>
            <p>In short, we collect minimal usage statistics to ensure the quality of our service. Our systems are designed to avoid storing sensitive data. While we may know that a user used Fast VPN, we cannot identify the individual or how they used the service. We are fully committed to protecting our users' privacy and do not possess any data related to their online activities.</p>

            <h2>App Diagnostic Data</h2>
            <p>If you give us your permission, we collect anonymized App Diagnostic Data, including crash reports, usability diagnostics, and VPN connection diagnostics. This data helps us optimize network speeds and identify issues related to specific apps, VPN servers, or internet service providers (ISPs). The information we receive is completely anonymous and cannot be linked to individual users (we don't store which user sent the data or any user IP addresses).</p>

            <p>If you choose to share this information with Fast VPN, we will collect the following anonymized App Diagnostic Data:</p>
            <ul>
              <li>Diagnostic information about VPN connection attempts and any failures.</li>
              <li>Speed test data.</li>
              <li>App diagnostics, such as crash reports and usability diagnostics, without any personally identifiable information.</li>
            </ul>

            <h2>Cookies and Third-Party Analytics</h2>
            <p>For user experience and analytics purposes, Fast VPN uses various analytics services, including from third-party Service Providers. These services may utilize cookies, mobile identifiers, and other data to generate reports and statistics, but they do not have access to any information that directly identifies individuals or any Personal Data provided by users to Fast VPN.</p>

            <h3>What is a Cookie?</h3>
            <p>Cookies are small text files used to store information about your visit to the Site on your computer or mobile device. These cookies enable websites to remember your actions or preferences over time, helping to optimize and enhance the user experience of the Site.</p>

            <h3>Third-party Cookies</h3>
            <p>Fast VPN uses third-party services like Google Analytics and Adwords. The section contains information about analytics services used by the Owner to monitor and analyze web traffic and track User behavior:</p>
            <ul>
              <li><strong>Google Analytics for Firebase:</strong> Processes application opens, updates, device information, geography/region, in-app purchases, and usage data.</li>
              <li><strong>Amplitude:</strong> Helps app developers understand user behavior and optimize their applications.</li>
              <li><strong>Apphud:</strong> Provides comprehensive insights into mobile applications, including geographical data and in-app patterns.</li>
            </ul>

            <h2>Handling payments</h2>
            <p>Regarding the handling of payment data, Apphud does not directly handle payments. Instead, it integrates with external payment service providers for processing payments made within the application. Users provide their payment details and personal information directly to these external payment service providers. Apphud acts as a facilitator and receives notifications from the payment service providers regarding the successful completion of payments.</p>

            <h2>Your Privacy Rights</h2>
            <p>As a user of our Services, you are entitled to the following rights, subject to certain exceptions or exemptions:</p>
            <ul>
              <li><strong>Right to Access:</strong> You have the right to access the personal data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> You have the right to request the correction of any inaccurate or incomplete personal data.</li>
              <li><strong>Right to Deletion:</strong> You have the right to request the deletion of your personal data.</li>
              <li><strong>Right to Restriction and Objection:</strong> You have the right to request the restriction of or object to the processing of your personal data.</li>
              <li><strong>Right to Data Portability:</strong> Receive your personal data in a commonly used format.</li>
              <li><strong>Right to Withdraw Consent:</strong> You have the right to withdraw your consent at any time.</li>
            </ul>

            <h2>Contact Us</h2>
            <p>If you have any questions, concerns, or complaints about our Privacy Policy, our adherence to relevant laws, how we handle your information, or if you wish to exercise your privacy rights, please reach out to us at:</p>
            <p>Email: <a href="mailto:contactus@kalagato.co">contactus@kalagato.co</a></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

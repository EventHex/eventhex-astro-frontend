/**
 * Published body copy for the legal pages.
 *
 * These pages previously rendered their body straight from WordPress
 * (`cms.eventhex.ai`). The copy now lives in the repo so the wording required
 * for Google OAuth verification is version-controlled, reviewable, and cannot
 * drift silently. It also means the pages stay online even if the CMS is down.
 *
 * Source of the Google sections: the Google OAuth verification brief
 * (`eventhex-website-google-oauth-policy-updates.md`, 2026-09-18). The wording
 * of those sections is intentional and reviewed - do not paraphrase or shorten
 * them.
 */

/** Publish date shown at the top of both legal pages. */
export const LEGAL_LAST_UPDATED = "September 28, 2026";

export const privacyPolicyContent = `<p><span style="font-weight: 400;">Last Updated: ${LEGAL_LAST_UPDATED}</span></p>
<h2><b>1. Introduction</b></h2>
<p><span style="font-weight: 400;">Welcome to EventHex.ai (&#8220;we,&#8221; &#8220;our,&#8221; or &#8220;us&#8221;). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website (eventhex.ai) and our services.</span></p>
<h2><b>2. Information We Collect</b></h2>
<h3><b>2.1 Information You Provide</b></h3>
<ul>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Contact information (name, email address, phone number)</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Billing information (credit card details through Stripe, billing address)</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Account credentials</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Communication preferences</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Any other information you choose to provide</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Information from third-party accounts you connect, such as Google (see Section 4A)</span></li>
</ul>
<h3><b>2.2 Information Automatically Collected</b></h3>
<ul>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Log data (IP address, browser type, pages visited)</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Device information</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Usage patterns</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Cookies and similar tracking technologies</span></li>
</ul>
<h2><b>3. How We Use Your Information</b></h2>
<p><span style="font-weight: 400;">We use your information for the following purposes:</span></p>
<ul>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Process your payments through Stripe</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Provide and maintain our services</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Respond to your inquiries and support requests</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Send administrative information</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Send marketing communications (with your consent)</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Improve our services</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Detect and prevent fraud</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Comply with legal obligations</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Provide integrations you enable, such as creating Google Meet links in your Google Calendar</span></li>
</ul>
<h2><b>4. Payment Processing and Stripe</b></h2>
<h3><b>4.1 Stripe Integration</b></h3>
<p><span style="font-weight: 400;">We use Stripe for payment processing. When you make a payment, you provide your payment information directly to Stripe. We do not store your full credit card details on our servers.</span></p>
<h3><b>4.2 Stripe Data Collection</b></h3>
<p><span style="font-weight: 400;">Stripe collects and processes the following information:</span></p>
<ul>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Payment card details</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Billing address</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Transaction history</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Other information necessary for fraud prevention and regulatory compliance</span></li>
</ul>
<h3><b>4.3 Stripe&#8217;s Privacy Policy</b></h3>
<p><span style="font-weight: 400;">Stripe&#8217;s collection and use of your information is governed by their Privacy Policy. We recommend reviewing Stripe&#8217;s Privacy Policy to understand how they handle your payment information.</span></p>
<h2><b>4A. Google Services and Google User Data</b></h2>
<h3><b>4A.1 Google Sign-In</b></h3>
<p><span style="font-weight: 400;">You may sign in to EventHex using your Google account. When you do, we receive your name, email address and profile picture from Google and use them only to create and identify your EventHex account. We never receive your Google password.</span></p>
<h3><b>4A.2 Google Calendar and Google Meet Integration</b></h3>
<p><span style="font-weight: 400;">EventHex offers an optional integration with Google Calendar so that event organizers can generate Google Meet links for virtual and hybrid events. If you choose to connect your Google account for this feature, EventHex requests permission to view and manage your Google Calendar and its events, and to read your Google account email address. We use this access only to:</span></p>
<ul>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">create a calendar event containing a Google Meet link for the EventHex event you select;</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">update that calendar event when you change the event&#8217;s title, date, time or description in EventHex;</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">add attendees you choose to invite as guests on that calendar event, so Google can send them the invitation; and</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">display which Google account is connected.</span></li>
</ul>
<p><span style="font-weight: 400;">We do not read, display or process any other events on your calendar.</span></p>
<h3><b>4A.3 Storage and Deletion</b></h3>
<p><span style="font-weight: 400;">We store an OAuth refresh token and your Google email address, encrypted, so the integration continues to work without repeated sign-in. We delete them when you disconnect the integration from the event&#8217;s Virtual Meeting settings, when the related event or your account is deleted, or when you revoke EventHex&#8217;s access at <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">https://myaccount.google.com/permissions</a>. Events already created in your Google Calendar remain there under your control.</span></p>
<h3><b>4A.4 No Sale, Sharing or AI Use</b></h3>
<p><span style="font-weight: 400;">We do not sell, share or transfer Google user data to third parties except to our hosting provider (Google Cloud) solely to operate the service. We do not use Google user data for advertising, for credit or lending decisions, or to develop, improve or train generalized artificial-intelligence or machine-learning models. Our staff access Google user data only with your consent, for security purposes or where required by law.</span></p>
<h3><b>4A.5 Limited Use</b></h3>
<p><span style="font-weight: 400;">EventHex&#8217;s use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements.</span></p>
<h2><b>5. Information Sharing</b></h2>
<p><span style="font-weight: 400;">We may share your information with:</span></p>
<ul>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Service providers (including Stripe and Google Cloud)</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Legal authorities when required by law</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Third parties in connection with a business transfer</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Third parties with your consent</span></li>
</ul>
<h2><b>6. Data Security</b></h2>
<p><span style="font-weight: 400;">We implement appropriate security measures to protect your information, including:</span></p>
<ul>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Encryption of data in transit and at rest</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Regular security assessments</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Access controls</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Secure data storage</span></li>
</ul>
<h2><b>7. Your Rights</b></h2>
<p><span style="font-weight: 400;">You have the right to:</span></p>
<ul>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Access your personal information</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Correct inaccurate information</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Request deletion of your information</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Object to processing of your information</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Request data portability</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Withdraw consent</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Disconnect any linked third-party account (such as Google) at any time</span></li>
</ul>
<h2><b>8. International Data Transfers</b></h2>
<p><span style="font-weight: 400;">Your information may be transferred and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.</span></p>
<h2><b>9. Cookie Policy</b></h2>
<p><span style="font-weight: 400;">We use cookies and similar tracking technologies to:</span></p>
<ul>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Maintain your session</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Remember your preferences</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Analyze usage patterns</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Enable certain features</span></li>
</ul>
<p><span style="font-weight: 400;">You can control cookie settings through your browser preferences.</span></p>
<h2><b>10. Children&#8217;s Privacy</b></h2>
<p><span style="font-weight: 400;">Our services are not intended for children under 13. We do not knowingly collect information from children under 13.</span></p>
<h2><b>11. Changes to This Privacy Policy</b></h2>
<p><span style="font-weight: 400;">We may update this Privacy Policy periodically. We will notify you of any material changes by posting the updated Privacy Policy on our website.</span></p>
<h2><b>12. Data Retention</b></h2>
<p><span style="font-weight: 400;">We retain your information for as long as necessary to:</span></p>
<ul>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Provide our services</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Comply with legal obligations</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Resolve disputes</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Enforce agreements</span></li>
</ul>
<p><span style="font-weight: 400;">Third-party access tokens (such as Google OAuth tokens) are deleted immediately when you disconnect the integration or delete your account.</span></p>
<h2><b>13. Contact Us</b></h2>
<p><span style="font-weight: 400;">If you have questions about this Privacy Policy or our privacy practices, contact us at:</span></p>
<p><span style="font-weight: 400;">Email: info@eventhex.ai </span></p>
<p><span style="font-weight: 400;">Website: eventhex.ai</span></p>
<h2><b>14. California Privacy Rights</b></h2>
<p><span style="font-weight: 400;">California residents may have additional rights regarding their personal information under the California Consumer Privacy Act (CCPA) and other state laws.</span></p>
<h2><b>15. Legal Basis for Processing (GDPR)</b></h2>
<p><span style="font-weight: 400;">For users in the European Economic Area (EEA), we process personal data based on:</span></p>
<ul>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Contract performance</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Legal obligations</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Legitimate interests</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Consent</span></li>
</ul>
<h2><b>16. Additional Rights for EEA Users</b></h2>
<p><span style="font-weight: 400;">EEA users have additional rights under GDPR, including:</span></p>
<ul>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Right to lodge a complaint with a supervisory authority</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Right to object to direct marketing</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Right to restrict processing</span></li>
</ul>`;

export const termsOfServiceContent = `<p><span style="font-weight: 400;">Last Updated: ${LEGAL_LAST_UPDATED}</span></p>
<h2><b>1. Agreement to Terms</b></h2>
<p><span style="font-weight: 400;">By accessing and using eventhex.ai (the &#8220;Website&#8221;), you agree to be bound by these Terms of Service (&#8220;Terms&#8221;). If you disagree with any part of these terms, you may not access the Website or use our services.</span></p>
<h2><b>2. Description of Service</b></h2>
<p><span style="font-weight: 400;">EventHex.AI provides a comprehensive suite of services designed to enhance the event management experience through the power of artificial intelligence. The Service includes optional integrations with third-party services such as Google Calendar, Google Meet and Google Sign-In.</span></p>
<h2><b>3. Payment Terms</b></h2>
<p><span style="font-weight: 400;">3.1. We use Stripe as our payment processor. By making a payment, you agree to provide current, complete, and accurate purchase and account information.</span></p>
<p><span style="font-weight: 400;">3.2. You agree to promptly update your account and payment information, including email address, payment method, and payment card expiration date.</span></p>
<p><span style="font-weight: 400;">3.3. All payments are processed securely through Stripe. Your payment information is subject to Stripe&#8217;s privacy policy and terms of service.</span></p>
<p><span style="font-weight: 400;">3.4. Prices for services are subject to change without notice. We reserve the right to modify or discontinue services without notice.</span></p>
<h2><b>4. Refund Policy</b></h2>
<p><span style="font-weight: 400;">4.1. Refund requests will be evaluated on a case-by-case basis.</span></p>
<p><span style="font-weight: 400;">4.2. To request a refund, contact us at info@eventhex.ai.</span></p>
<h2><b>5. User Responsibilities</b></h2>
<p><span style="font-weight: 400;">5.1. You are responsible for maintaining the confidentiality of your account information.</span></p>
<p><span style="font-weight: 400;">5.2. You agree to notify us immediately of any unauthorized use of your account.</span></p>
<p><span style="font-weight: 400;">5.3. You must not transmit any viruses, malware, or other types of malicious code.</span></p>
<h2><b>5A. Third-Party Services and Integrations</b></h2>
<p><span style="font-weight: 400;">5A.1. EventHex allows you to connect third-party services, including Google Calendar, Google Meet and Google Sign-In. Your use of those services is subject to their own terms and privacy policies, including the <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Google Terms of Service</a> and <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.</span></p>
<p><span style="font-weight: 400;">5A.2. By connecting a third-party account you authorize EventHex to access and use that account&#8217;s data as described in our Privacy Policy. You may revoke this authorization at any time from within EventHex or from the third party&#8217;s account settings.</span></p>
<p><span style="font-weight: 400;">5A.3. When you create calendar events or send invitations to attendees through an integration, you are responsible for having the right to contact those attendees and for the content of the event. You must not use integrations to send unsolicited messages or in a way that violates the third party&#8217;s acceptable-use policies.</span></p>
<p><span style="font-weight: 400;">5A.4. EventHex is not responsible for the availability, accuracy or conduct of third-party services and may suspend or modify an integration if the third party changes or withdraws its API.</span></p>
<h2><b>6. Intellectual Property</b></h2>
<p><span style="font-weight: 400;">6.1. The Website and its original content, features, and functionality are owned by EventHex.AI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You retain ownership of the events, attendee lists and other content you create through the Service, including events created in your own Google Calendar; you grant EventHex a limited licence to process that content solely to provide the Service.</span></p>
<h2><b>7. Limitation of Liability</b></h2>
<p><span style="font-weight: 400;">7.1. EventHex.AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</span></p>
<p><span style="font-weight: 400;">7.2. In no event shall our liability exceed the amount paid by you for the services in question.</span></p>
<h2><b>8. Termination</b></h2>
<p><span style="font-weight: 400;">8.1. We reserve the right to terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason. On termination we delete your stored third-party access tokens and personal data as described in the Privacy Policy, except where retention is required by law.</span></p>
<h2><b>9. Changes to Terms</b></h2>
<p><span style="font-weight: 400;">9.1. We reserve the right to modify these Terms at any time. We will notify users of any changes by updating the date at the top of these Terms.</span></p>
<p><span style="font-weight: 400;">9.2. Continued use of the Website after any modifications indicates acceptance of the updated Terms.</span></p>
<h2><b>10. Privacy Policy</b></h2>
<p><span style="font-weight: 400;">10.1. Use of the Website is also governed by our Privacy Policy, which is incorporated into these Terms by reference.</span></p>
<h2><b>11. Governing Law</b></h2>
<p><span style="font-weight: 400;">11.1. These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</span></p>
<h2><b>12. Contact Information</b></h2>
<p><span style="font-weight: 400;">If you have any questions about these Terms, please contact us at:</span></p>
<p><span style="font-weight: 400;">Email: info@eventhex.ai </span></p>
<p><span style="font-weight: 400;">Website: eventhex.ai</span></p>
<h2><b>13. Severability</b></h2>
<p><span style="font-weight: 400;">13.1. If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.</span></p>`;

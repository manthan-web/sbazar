export interface Section {
  id: number;
  title: string;
  slug: string;
  content: string;
}

export const sections: Section[] = [
  { id: 1, title: "About Snext", slug: "introduction", content: "### Welcome to our documentation \nThis is the **introduction** section." },
  { id: 2, title: "Getting Started", slug: "getting-started", content: "To get started with our product..." },
  {
    id: 3,
    title: "Privacy Policies",
    slug: "privacy",
    content: `## 1. Introduction: Safeguarding Your Trust

### 1.1 Our Core Promise

At Snext, we believe users deserve an outstanding shopping experience and unwavering confidence that their personal information remains secure. Built to serve the global Indian diaspora, our platform merges technological convenience with robust privacy protocols. This policy details how we collect, use, and protect your data across our mobile application and affiliated services.

### 1.2 The Essence of Secure Commerce

From the moment you create an Snext account to the final checkout step, we adhere to strict measures ensuring your privacy. We protect user information to not only comply with data laws but also respect the diaspora community’s diverse backgrounds and needs.

## 2. Information We Collect

### 2.1 Personal Information

Name, email, and contact details facilitate account creation, enabling us to personalize your experience and confirm order details. By providing accurate information, you enhance our ability to ensure timely delivery and relevant notifications.

### 2.2 Payment Processing

To safeguard financial details, Snext integrates with secure third-party providers, such as Mollie, for payment handling. We never store full card or bank data on our servers, maintaining minimal exposure to potential threats.

### 2.3 Shipping Information

Partnered with DHL for reliable delivery across Germany, we share relevant address details strictly for shipment purposes. DHL operates under its own privacy and compliance policies, providing additional layers of security.

### 2.4 Location Information

Occasionally, we collect geolocation data to optimize your user experience (e.g., offering hyper-local deals or event suggestions). We never share these insights with unrelated third parties, reflecting our diaspora-first approach to customizing engagement.

### 2.5 Login Information

Users can access Snext through various social media or email logins. We respect third-party login credentials by only using them for authentication—never disclosing them to any external entities.

## 3. Use of Personal Information

### 3.1 Core Services

Snext employs your personal data to:

- Process Orders: Confirm product availability, shipping, and payment.
- Complete Transactions: Ensure all financial details pass securely to Mollie for final billing.
- Fulfill Deliveries: Coordinate with DHL to send groceries, festival kits, or local crafts to your doorstep.

### 3.2 Personalization & Recommendations

AI-driven processes may leverage browsing or purchase history to suggest relevant items, promotional offers, or diaspora-themed products. This fosters a more enriching user journey.

### 3.3 Internal Analytics

We utilize aggregated user data for business analytics—refining inventory, membership benefits, or expansion plans. By analyzing diaspora purchasing trends, we enhance service relevance while preserving your anonymity.

## 4. How We Share Your Information

### 4.1 Service Providers

To deliver a smooth experience, we share necessary information with payment (Mollie) and shipping (DHL) providers. These collaborations follow contractual obligations preventing misuse or unauthorized sharing.

### 4.2 Legal & Safety

When legally mandated or to uphold Snext's rights and users’ safety, we may disclose data to pertinent authorities. Compliance remains transparent; any non-standard requests (e.g., government subpoenas) follow official guidelines and user notifications where feasible.

## 5. Your Rights & Choices

### 5.1 Control & Access

Users can access and modify personal data, from shipping details to membership info, via Snext account settings. If a diaspora user relocates, updating addresses or payment methods is straightforward and immediate.

### 5.2 Feature Opt-Out

Choose whether to enable shipment tracking, block promotional notifications, or limit location data usage. We respect your decisions, ensuring advanced functionalities remain optional rather than compulsory.

### 5.3 Account Deletion

You maintain the option to permanently delete your Snext account. Upon request, we expunge personal records (unless legally bound to retain portions), reflecting our respect for user autonomy.

## 6. Protection of Personal Information

### 6.1 Robust Security Measures

Our servers employ encryption, firewalls, and routine audits to ward off potential threats. As a diaspora-centric marketplace, we champion heightened vigilance to keep user data intact and confidential.

### 6.2 No Commercial Sharing

Snext never monetizes user data through sales or rentals. We use it solely to facilitate or enhance your user experience.

### 6.3 Transparency in Disclosure

If a data breach or potential vulnerability arises, we promptly inform affected users, and swiftly conduct security upgrades or remedial actions to reestablish normalcy.

## 7. Updates to Privacy Policy

### 7.1 Policy Evolution

As Snext expands—integrating new modules like next-day deliveries, entertainment bookings, or advanced diaspora services—our privacy practices may adapt. We commit to prior announcements, giving you ample time to review changes before continuing usage.

### 7.2 Ongoing Commitment

Every policy revision emerges from improved technologies or expanded diaspora feedback—ensuring new features remain privacy-compliant and user-centric.

## 8. Contact Us

### 8.1 Questions or Concerns

For inquiries on personal data usage, security measures, or to request modifications:

Email: hello@snext.app

Responsiveness: Expect prompt, diaspora-friendly support that mirrors Snext ethos of care and connectivity.

### 8.2 Your Acknowledgment

Engaging Snext mobile app or services means you accept these principles, trusting us to maintain a secure, respectful environment for every diaspora shopper.

## 9. Conclusion: A Secure & Trusted Marketplace

Snext Privacy Policy cements our dedication to user privacy, ethical data handling, and diaspora empowerment—turning each interaction into a testament of trust. By uniting advanced technology with robust protections, we ensure an outstanding online shopping realm that respects cultural nuances, fosters diaspora togetherness, and keeps personal information under strict lock and key. Enjoy the comfort, and shop with confidence!`
  },
  { id: 4, title: "API Reference", slug: "api-reference", content: "Here's a comprehensive API reference..." },
  { id: 5, title: "Troubleshooting", slug: "troubleshooting", content: "Common issues and their solutions..." },
];
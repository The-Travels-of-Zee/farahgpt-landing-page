export const appName = "FarahGPT";

export const seoConfig = {
  title: "FarahGPT, Learn & Grow with Islamic AI",
  description:
    "Discover courses, ask questions, and grow in your deen with FarahGPT. Built by Muslims, for Muslims, aligned with authentic Islamic sources.",
};

export const theme = "light";
export const forceTheme = false;
export const showThemeSwitch = true;

export const topNavbar = {
  cta: "Join for Free",
  disableWidthAnimation: false,
  hideAppStore: false,
  hideGooglePlay: false,
  links: [
    { href: "/", title: "Home" },
    { href: "#features", title: "Features" },
    { href: "#how-it-works", title: "How it works" },
    { href: "#pricing", title: "Pricing" },
    { href: "#faq", title: "FAQ" },
  ],
};

export const header = {
  cta: "Join The Waitlist",
  headline: "FarahGPT - AI Islamic Assistant. For Muslims, by Muslims.",
  subtitle: "Join a growing ummah of students and mentors...",
  screenshots: ["/screenshots/explore-courses.webp"],
  rewards: ["إن شاءالله"],
  usersDescription: "2,000+ people already in the waiting list",
  headlineMark: [2, 5],
};

export const appBanner = {
  id: "app-banner",
  title: "Download Our Mobile App Today!",
  subtitle:
    "Unlock the full potential of our services with seamless access at your fingertips. Stay connected, informed, and in control wherever you are.",
  screenshots: [
    "/screenshots/explore-courses.webp",
    "/screenshots/seller-courses.webp",
    "/screenshots/farahgpt-course.webp",
  ],
  appStoreLink: "https://apps.apple.com/us/app/google/id284815942",
  googlePlayLink: "https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox",
};

export const pricing = {
  id: "pricing",
  title: "Choose Your Plan",
  subtitle: "Unlock premium features for a better experience",
  actionText: "Signup for Waitlist",
  plans: [
    {
      title: "Basic Tier",
      subtitle: "Basic access to Islamic Q&A",
      price: "Free",
      rows: ["10 queries per day", "General Islamic Q&A", "Limited Chat History"],
    },
    {
      title: "Premium Tier",
      subtitle: "Unlimited access & Exclusive features",
      price: "$9.99/month",
      featured: true,
      rows: [
        "Access to all Basic Tier features",
        "Unlimited queries",
        "Pin courses to chat",
        "Priority responses",
        "Full chat histroy access",
        "File uploads",
      ],
    },
  ],
};

export const faq = {
  id: "faq",
  title: "Frequently Asked Questions",
  qa: [
    {
      question: "What is FarahGPT?",
      answer:
        '"Farah" is an AI-powered assistant designed to answer your Islamic questions instantly, based on authentic sources and scholarly perspectives. It aims to provide reliable information and guidance on various Islamic topics.',
    },
    {
      question: "Is FarahGPT giving fatwas?",
      answer:
        "No. Farah is an AI assistant that provides information and guidance based on authentic Islamic knowledge, but it does not replace qualified scholars or personal fatwas. For specific legal rulings, always consult a qualified scholar.",
    },
    {
      question: "How accurate are the answers?",
      answer:
        "Answers are generated using GPT-4 Turbo AI, fine-tuned on authentic Islamic resources and verified content. However, users should always consult a trusted scholar for personal or complex issues. The AI is a tool to assist, not a replacement for scholarly advice.",
    },
    {
      question: "Is the FarahGPT trained by real Islamic scholars?",
      answer:
        "The responses are based on FINE-tuning the models that are already trained on datasets compiled from reliable Islamic books, hadith, and scholarly works.",
    },
    {
      question: "How does the FarahGPT ensure Islamic authenticity?",
      answer:
        "The AI uses curated data from reliable Islamic sources, but as it's a machine-generated response, users should verify sensitive matters. We recommend consulting a qualified scholar for personal or complex issues.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel anytime from your account settings. If you face any issues, please contact our support team for assistance.",
    },
    {
      question: "Is my data and privacy safe?",
      answer:
        "Absolutely. We follow strict data privacy protocols. Your personal information is never shared with third parties without your consent. We prioritize your privacy and security.",
    },
  ],
};

export const footer = {
  id: "footer",
  legalLinks: {
    // termsAndConditions: true,
    // cookiesPolicy: true,
    privacyPolicy: true,
  },
  poweredBy: {
    title: "The Travels of Zee",
    link: "https://business.thetravelsofzee.com/",
  },
  socials: {
    instagram: "https://instagram.com/google",
    facebook: "https://facebook.com/google",
    twitter: "https://x.com/google",
    upwork: "https://www.upwork.com/agencies/1900660843112486960/",
    linkedin: "https://www.linkedin.com/company/farahgpt/",
  },
  links: [
    { href: "/#features", title: "Features" },
    { href: "/#how-it-works", title: "How it works" },
    // { href: "/#pricing", title: "Pricing" },
    { href: "/#faq", title: "FAQ" },
    { href: "/#contact-us", title: "Contact Us" },
  ],
};

export const footerLegalLinks = {};

export const footerPoweredBy = {
  title: "The Travels of Zee",
  link: "https://business.thetravelsofzee.com/",
};

export const footerSocials = {
  instagram: "https://instagram.com/google",
  facebook: "https://facebook.com/google",
  twitter: "https://x.com/google",
  upwork: "https://www.upwork.com/agencies/1900660843112486960/",
  linkedin: "https://www.linkedin.com/company/farahgpt/",
};

export const footerLinks = [
  { href: "/#features", title: "Features" },
  { href: "/#how-it-works", title: "How it works" },
  { href: "/#faq", title: "FAQ" },
  { href: "/#contact-us", title: "Contact Us" },
];

// USERS Section
export const usersHowItWorks = {
  id: "how-it-works",
  title: "How It Works",
  subtitle:
    "Begin your journey of knowledge with clarity and sincerity. Here's how to get started as a student of deen.",
  steps: [
    {
      title: "Choose Your Path",
      subtitle: "Sign up and select whether you're a Student (طالب علم) or a Mentor (معلم). Your journey begins here.",
      image: "/images/choose-role.webp",
    },
    {
      title: "Set Up Your Profile",
      subtitle:
        "Create a profile that reflects your goals and interests. Mentors can showcase their expertise, while students highlight areas of focus.",
      image: "/images/setup-profile.webp",
    },
    {
      title: "Browse or Upload Courses",
      subtitle:
        "Students can explore a growing library of paid and free courses in Qur’an, Hadith, Fiqh, Arabic, and more. Mentors can upload and manage structured lessons with ease.",
      image: "/images/browse-courses.webp",
    },
    {
      title: "Get Support from FarahGPT",
      subtitle:
        "Meet FarahGPT — your AI-powered Islamic assistant. Ask questions about course material, get authentic references, and receive guidance based on trusted scholarly sources.",
      image: "/images/farahgpt-help.webp",
    },
    {
      title: "Learn and Interact",
      subtitle:
        "Join live classes or watch recordings. Ask questions, leave feedback, and benefit from direct mentor guidance, all in one place.",
      image: "/images/learn-interact.webp",
    },
    {
      title: "Grow with Consistency (Istiqamah)",
      subtitle:
        "Track your learning, set goals, and build habits of consistent seeking or teaching of knowledge, striving for barakah and impact.",
      image: "/images/grow-consistency.webp",
    },
  ],
};

export const usersFeatures = {
  id: "features",
  title: "Why FarahGPT? Because it’s crafted with values at its core.",
  subtitle:
    "In a digital world brimming with AI assistants, FarahGPT stands out by aligning technology with Islamic principles. It’s not just about providing answers; it’s about ensuring those answers resonate with your faith and lifestyle.",
  cards: [
    {
      title: "Faith-Aligned Guidance",
      subtitle:
        "Ever sought financial advice only to be presented with options that conflict with halal practices? FarahGPT understands and respects your values, offering solutions that are both effective and permissible.",
      icon: "/3D/link-front-color.webp",
    },
    {
      title: "Authentic Knowledge Base",
      subtitle:
        "By integrating existing AI capabilities with meticulously vetted Islamic data, FarahGPT ensures the information you receive is both accurate and appropriate.",
      icon: "/3D/sheild-front-color.webp",
    },
    {
      title: "Affordable Access",
      subtitle:
        "Quality AI assistance shouldn’t come at a premium. FarahGPT offers cost-effective solutions without compromising on integrity or performance.",
      icon: "/3D/dollar-front-color.webp",
    },
    {
      title: "Community-Centric Design",
      subtitle:
        "Built by Muslims for Muslims, FarahGPT is more than a tool, it’s a companion that understands your unique needs.",
      icon: "/3D/notify-heart-front-color.webp",
    },
  ],
};

// MENTORS Section
export const mentorsFeatures = {
  id: "features",
  title: "Elevate your teaching with FarahGPT’s tailored solutions.",
  subtitle:
    "In a digital world brimming with AI assistants, FarahGPT stands out by aligning technology with Islamic principles. It’s not just about providing answers; it’s about ensuring those answers resonate with your faith and lifestyle.",
  cards: [
    {
      title: "Controlled Access",
      subtitle:
        "Tired of reminding students not to share course materials? FarahGPT allows you to restrict access, ensuring only enrolled students benefit from your curated content.",
      icon: "/3D/tool-front-color.webp",
    },
    {
      title: "Integrated Educational Tools",
      subtitle:
        "Beyond AI responses, FarahGPT offers features designed specifically for educators, streamlining your teaching process.",
      icon: "/3D/computer-front-color.webp",
    },
    {
      title: "Secure Content Management",
      subtitle:
        "Protect your intellectual property with FarahGPT’s robust security measures, giving you peace of mind as you share your knowledge.",
      icon: "/3D/locker-front-color.webp",
    },
    {
      title: "Community-Centric Design",
      subtitle:
        "Built by Muslims for Muslims, FarahGPT is more than a tool, it’s a companion that understands your unique needs.",
      icon: "/3D/notify-heart-front-color.webp",
    },
  ],
};

export const mentorsHowItWorks = {
  id: "how-it-works",
  title: "How It Works",
  subtitle:
    "Begin your journey of seeking and sharing knowledge with these simple steps, rooted in sincerity and ease.",
  steps: [
    {
      title: "Sign Up",
      subtitle: "Apply to Become a Mentor and Launch Your Online Courses.",
      image: "/svg/mentor-signup.svg",
    },
    {
      title: "Upload Courses",
      subtitle: "Design structured Islamic courses with our easy-to-use dashboard.",
      image: "/svg/upload-courses.svg",
    },
    {
      title: "Earn & Engage",
      subtitle: "Earn revenue and help students progress in their deen.",
      image: "/images/mentor-earn.webp",
    },
  ],
};

export const mentorDashboard = {
  earningsData: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Earnings",
        data: [500, 900, 1200, 1600, 1820, 2100],
        backgroundColor: "#34d399",
      },
    ],
  },
  studentsData: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "New Students",
        data: [10, 25, 18, 30, 22],
        borderColor: "#3b82f6",
        tension: 0.3,
        fill: false,
      },
    ],
  },
};

export const privacyPolicy = {
  content: `# Privacy Policy

**Last Updated:** 21/5/2025

## Introduction

Welcome to FarahGPT. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our App.

## Information We Collect

### 1. Information You Provide
- **Account Information:** When you sign up for our App, We may collect identifiers such as your name, email address, and any other information you provide when creating an account.
- **User Content:** We may collect any content you upload, post, or otherwise transmit through the App, including messages, photos, and other media.

### 2. Information We Collect Automatically
- **Usage Data:** We collect information about your interactions with the App, such as the features you use and the time spent on the App.
- **Device Information:** We collect information about the device you use to access the App, including IP address, device type, and operating system.

### 3. Information from Third Parties
- **Third-Party Services:** If you connect to the App through a third-party service (e.g., social media), we may collect information from that service as permitted by their privacy policies.

## Legal Basis

We process your personal information based on your consent, to fulfill our contractual obligations, and where we have a legitimate interest.

## Children’s Privacy

Our App is not intended for use by children under the age of 13 (or 16 in the EU). We do not knowingly collect personal information from children.

## How We Use Your Information

We may use the information we collect for the following purposes:
- **To Provide and Maintain Our Service:** We use your information to operate and improve the App.
- **To Communicate with You:** We may use your contact information to send you updates, notifications, and other communications related to the App.
- **To Personalize Your Experience:** We may use your information to personalize your experience with the App and to offer you content tailored to your interests.
- **For Analytics and Research:** We use the information to analyze how our users interact with the App and to improve our services.

## Sharing Your Information

We do not share your personal information with third parties except in the following circumstances:
- **With Your Consent:** We may share your information with third parties if you give us explicit consent to do so.
- **Service Providers:** We may share your information with third-party service providers who perform services on our behalf.
- **Legal Requirements:** We may disclose your information if required by law, or if we believe that such action is necessary to comply with legal obligations, protect our rights, or prevent fraud.

## Your Rights and Choices

- **Access and Correction:** You have the right to access and correct the personal information we hold about you.
- **Data Deletion:** You may request that we delete your personal information by contacting us at [Your Contact Information].
- **Opt-Out:** You may opt out of receiving promotional communications from us by following the instructions in those communications.

## Security

We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no security system is completely secure, and we cannot guarantee the absolute security of your information.

We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Privacy Policy.

## Contact Us

If you have any questions or concerns about this Privacy Policy, please contact us at:

FarahGPT

📧 [info@thetravelsofzee.com](mailto:info@thetravelsofzee.com)  
🕌 With sincerity and responsibility,  
**Team Farah**

`,
};

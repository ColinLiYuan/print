export default {
  common: {
    home: 'Home',
    solutions: 'Solutions',
    verify: 'Verify Authenticity',
    industries: 'Industries',
    contact: 'Contact',
    language: 'Language',
    submit: 'Submit Request',
    cancel: 'Cancel',
    loading: 'Processing...',
    error: 'Error',
    success: 'Success',
    learnMore: 'Learn More',
    requestSample: 'Request Sample Kit',
  },
  hero: {
    title: 'Eliminate Counterfeits. Restore Brand Integrity.',
    subtitle: 'High-security holographic solutions & thermal transfer foils engineered for absolute brand protection.',
    ctaPrimary: 'Request Free Sample Kit',
    ctaSecondary: 'Technical Solutions',
  },
  productMatrix: {
    title: 'Advanced Security Solutions',
    holographic: {
      title: 'Holographic Hot Stamping',
      description: 'High-speed industrial application with brilliant optical effects for mass authentication.',
      features: ['High-Speed Application', 'Brilliant Optics', 'Custom Designs'],
    },
    tamperEvident: {
      title: 'Tamper Evident Tech',
      description: 'VOID & structural security that reveals hidden patterns upon removal, preventing label reuse.',
      features: ['VOID Technology', 'Irreversible Damage', 'Instant Verification'],
    },
    digitalTraceability: {
      title: 'Secure Digital Tracking',
      description: 'Encrypted QR codes integrated with traceability for end-to-end supply chain visibility.',
      features: ['Encrypted QR Codes', 'Real-time Tracking', 'Data Analytics'],
    },
    customLabels: {
      title: 'Bespoke Aesthetic Security',
      description: 'Custom premium finishes merged with multi-layer security features.',
      features: ['Bespoke Design', 'Multi-layer Security', 'Brand Enhancement'],
    },
  },
  products: {
    title: 'Products',
    subtitle: 'Comprehensive security solutions for global brand protection',
    category: 'Category',
    features: 'Features',
    viewDetails: 'View Details',
  },
  trustBarrier: {
    title: 'Multi-Level Security Architecture',
    subtitle: 'Three-tier authentication system providing comprehensive protection',
    levels: {
      level1: {
        title: 'Level 1 - Public Recognition',
        description: 'Features visible to the naked eye for instant consumer verification.',
        features: ['Rainbow Effect', 'Color-Shift Inks', 'Visible Watermarks'],
      },
      level2: {
        title: 'Level 2 - Professional Verification',
        description: 'Semi-covert features visible via UV light or 10x magnification.',
        features: ['UV Fluorescence', 'Microtext Patterns', 'Infrared Markers'],
      },
      level3: {
        title: 'Level 3 - Forensic Authentication',
        description: 'Invisible molecular patterns for legal and laboratory evidence.',
        features: ['DNA Markers', 'Chemical Tracers', 'Molecular Signatures'],
      },
    },
    process: {
      title: 'Confidential Production Workflow',
      steps: [
        { title: 'Encrypted Design', description: 'We protect your original artwork with military-grade encryption' },
        { title: 'Cleanroom Production', description: 'Manufactured in dust-free, high-security environments' },
        { title: 'Secure Destruction', description: 'Master dies and waste materials are certified destroyed after production' },
      ],
    },
  },
  industries: {
    title: 'Industry-Specific Solutions',
    subtitle: 'Tailored security protocols for critical sectors',
    pharmaceuticals: {
      title: 'Pharmaceuticals',
      description: 'Protect patient safety with serialization and track-and-trace compliance.',
    },
    luxury: {
      title: 'Luxury Goods',
      description: 'Preserve brand integrity and combat parallel market infiltration.',
    },
    liquor: {
      title: 'Premium Spirits & Tobacco',
      description: 'Safeguard premium products from sophisticated counterfeiting operations.',
    },
    government: {
      title: 'Government Documents',
      description: 'State-level security features for passports, IDs, and certificates.',
    },
  },
  leadGen: {
    title: 'Request Your Security Consultation',
    subtitle: 'Complete this brief assessment to receive a customized security proposal',
    step1: {
      title: 'Select Your Industry',
      description: 'Which sector requires protection?',
    },
    step2: {
      title: 'Choose Security Level',
      description: 'What level of authentication do you need?',
    },
    step3: {
      title: 'Contact Information',
      description: 'Where should we send your sample kit?',
    },
    next: 'Next Step',
    previous: 'Previous',
    complete: 'Submit Request',
  },
  verify: {
    title: 'Product Authentication',
    subtitle: 'Enter the verification code to authenticate your product',
    placeholder: 'Enter authentication code',
    button: 'Verify Now',
    verifying: 'Verifying...',
    result: {
      valid: 'Authentication Successful',
      invalid: 'Authentication Failed',
      validMessage: 'This is a genuine product verified by our secure database.',
      invalidMessage: 'Invalid code or previously verified. Please confirm product source immediately.',
      productInfo: 'Product Details',
      verifyTime: 'Verification Timestamp',
    },
  },
  solutions: {
    title: 'Industry-Specific Security Solutions',
    subtitle: 'Tailored protection protocols for critical sectors worldwide',
    pharma: {
      title: 'Pharmaceuticals',
      description: 'Our micro-text and UV ink solutions ensure patient safety and brand integrity against global counterfeiting networks.',
    },
    beauty: {
      title: 'Beauty & Personal Care',
      description: 'Premium aesthetic security features that enhance luxury appeal while providing robust anti-counterfeit protection.',
    },
    liquor: {
      title: 'Liquor & Spirits',
      description: 'Tamper-evident seals and destructive labels prevent refill operations and protect premium brand value.',
    },
    documents: {
      title: 'Documents & Certificates',
      description: 'Government-grade HRI overlay technology with multi-spectral features for ID cards, passports, and official documents.',
    },
  },
  footer: {
    rights: 'All Rights Reserved',
    address: 'Global Headquarters',
    email: 'Email',
    phone: 'Direct Line',
    followUs: 'Connect With Us',
    quickLinks: 'Quick Links',
    security: 'Security Features',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
  },
} as const;

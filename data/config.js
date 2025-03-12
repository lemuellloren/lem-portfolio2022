export const meta = {
  title: 'Lemuel Lloren - Web Developer and Designer',
  description: `
    I have proceeded my dream to be a developer as it has been my passion. 
    I am a talented Front-End developer with a UI/UX design background.
    I had the opportunity to enhance my expertise by collaborating with different companies 
    and by creating useful content for both business and customer use.
    I am naturally persevered, self-confident, quietly curios, innovative and constantly challenging my skills.
  `
};

export const hero = {
  title: 'Lemuel Lloren',
  profile: '/static/profile.png',
  isActive: false,
  position: ['Software Engineer', 'Web Enthusiast', 'Hobbyist Designer'],
  cv: 'https://drive.google.com/file/d/1uDCdezem-VuYak4ZZVCr_DSQ2NDvV6c2/view?usp=sharing',
  description: `
    Im a self-taught developer driven to
    create functional and aesthetically pleasing designs through
    continuous learning and a passion for tackling new challenges. 
  `
};

export const about = {
  title: 'About',
  description:
    'I build intuitive, visually engaging experiences with front-end development and UI/UX design, turning concepts into seamless, interactive websites.',

  technologies: [
    {
      header: 'Web and Software Development',
      description:
        'Building fast, dynamic web apps with React, Next.js, and Node.js, ensuring seamless and engaging user experiences.'
    },
    {
      header: 'E-Commerce Solutions',
      description:
        'Enhancing Shopify stores with custom themes and apps, optimizing user engagement and business growth.'
    },
    {
      header: 'Website Development',
      description:
        'Creating responsive, brand-aligned websites with WordPress (Divi, Elementor) and Webflow, including multisite management.'
    },
    {
      header: 'UI/UX and Animations',
      description:
        'I design in Figma, develop websites, and enhance them with React Framer Motion & GSAP animations.'
    }
  ]
};

export const projects = {
  title: 'My Projects',
  desc: '',
  scrollVelocityTexts: ['selected projects', 'digital creations'],
  projects: [
    {
      title: 'CarePulse Patient Management System',
      image: '/static/covers/healthcare.png',
      description: 'Next.js, Appwrite, Twilio, TypeScript, TailwindCSS',
      link: '',
      github:
        'https://github.com/lemuellloren/healthcare-patient-management-system'
    },
    {
      title: 'Owner Dashboard Renewal and Relisting',
      image: '/static/covers/rent.png',
      description: 'PostgreSQL, Node.js, Express, React, TypeScript',
      link: 'https://www.poplarhomes.com/login',
      github: ''
    },
    {
      title: 'Homyz',
      image: '/static/covers/real-estate.png',
      description: 'React, Next.js, Chakra UI, RapidAPI',
      link: 'https://homyz-app.vercel.app/',
      github: 'lemuellloren/modern-real-estate-app'
    },
    {
      title: 'ViewQwest',
      image: '/static/covers/internet.png',
      description: 'WordPress, Elementor, Vue, TS, Laravel',
      link: 'https://viewqwest.com/',
      github: ''
    },
    {
      title: 'Development Entrepreneurship',
      image: '/static/covers/help.png',
      description: 'WordPress and Divi',
      link: 'https://developmententrepreneurship.org/',
      github: ''
    },
    {
      title: 'Javier Project Managers',
      image: '/static/covers/interior.png',
      description: 'WordPress and Elementor',
      link: 'https://jpm.com.ph/',
      github: ''
    },
    {
      title: 'SLA-PH',
      image: '/static/covers/help2.png',
      description: 'WordPress and Divi',
      link: 'https://stemleadershipalliance.ph/',
      github: ''
    },
    {
      title: 'Consuelo ',
      image: '/static/covers/educ.png',
      description: 'WordPress and Divi',
      link: 'https://consuelo.org/',
      github: ''
    },
    {
      title: 'Atout ',
      image: '/static/covers/resto.png',
      description: 'WordPress and Elementor',
      link: 'https://atout.sg/',
      github: ''
    },
    {
      title: 'BearGrip ',
      image: '/static/covers/gym.png',
      description: 'Shopify',
      link: 'https://beargrip.co.uk/',
      github: ''
    }
  ]
};

export const experience = {
  title: 'Journey',
  desc: '',
  experiences: [
    {
      company: 'Harvey Norman',
      description: 'An Australian based retail company',
      year: 'March 2023 - Present',
      position: 'Software Engineer',
      link: 'https://www.harveynorman.com.au/',
      logo: '/static/logos/harvey-norman.jpg'
    },
    {
      company: 'Poplar Homes',
      description: 'A Silicon Valley based PropTech company',
      year: 'April 2022 - November 2022',
      position: 'Junior Software Engineer',
      link: 'https://www.poplarhomes.com/',
      logo: '/static/logos/poplar.jpg'
    },
    {
      company: 'ViewQwest',
      description: 'A Singapore and Malaysia based ISP company',
      year: 'September 2019 - April 2022',
      position: 'Software Engineer',
      link: 'https://viewqwest.com/',
      logo: '/static/logos/viewqwest.jpg'
    },
    {
      company: 'Leet Digital',
      description: 'A Sydney, Austalia based MarTech company',
      year: 'November 2016 - September 2019',
      position: 'Web Developer',
      link: 'https://www.leetdigital.com/',
      logo: '/static/logos/leet.jpg'
    }
  ]
};

export const stack = {
  title: 'My Stack',
  stack: [
    { logo: '/static/logos/javascript.svg', text: 'JavaScript' },
    { logo: '/static/logos/typescript.svg', text: 'TypeScript' },
    { logo: '/static/logos/react.svg', text: 'React' },
    { logo: '/static/logos/nodejs.svg', text: 'Node.js' },
    { logo: '/static/logos/wordpress.svg', text: 'WordPress' },
    { logo: '/static/logos/shopify.svg', text: 'Shopify' },
    { logo: '/static/logos/nextjs.svg', text: 'Next.js' },
    { logo: '/static/logos/graphql.svg', text: 'GraphQL' },
    { logo: '/static/logos/webflow.svg', text: 'Webflow' },
    { logo: '/static/logos/tailwindcss.svg', text: 'Tailwind CSS' }
  ]
};

export const contact = {
  title: 'Contact me',
  titleVelocity: ['contact me', 'let’s talk'],
  description: 'Curious? Start the conversation.',
  email: 'lemuelpaconlloren@gmail.com',
  github: 'lemuellloren',
  dribbble: 'Lemuel',
  linkedin: 'lemuel-lloren'
};

export const defaultAnimationConfig = {
  distance: 50,
  direction: 'vertical',
  reverse: false,
  config: { tension: 80, friction: 20 },
  initialOpacity: 0.2,
  animateOpacity: true,
  scale: 1.1,
  threshold: 0.2
};

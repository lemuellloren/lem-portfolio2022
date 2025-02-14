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
  isActive: false,
  position: 'Software Engineer - Frontend',
  cv: 'https://drive.google.com/file/d/1uDCdezem-VuYak4ZZVCr_DSQ2NDvV6c2/view?usp=sharing',
  desc: `My interests are in frontend engineering, and I love to create beautiful and performant products with delightful user experiences. 
  `
};

export const projects = {
  title: 'My Projects',
  desc: "Here are some of my favorite projects that I've worked on.",
  projects: [
    {
      title: 'Owner Dashboard Renewal and Relisting',
      description: "Poplar's owner dashboard: PERN stack",
      link: 'https://www.poplarhomes.com/login',
      github: ''
    },
    {
      title: 'ViewQwest',
      description:
        'ViewQwest portal and website: WordPress, Elementor, Vue, TS, Laravel',
      link: 'https://viewqwest.com/',
      github: ''
    },
    {
      title: 'Homyz',
      description:
        'Modern real estate app: React, Next.js, Chakra UI, RapidAPI',
      link: 'https://homyz-app.vercel.app/',
      github: 'lemuellloren/modern-real-estate-app'
    }
  ]
};

export const experience = {
  title: 'My Experience',
  desc: "Where I've Worked",
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
    { logo: '/static/logos/javascript.svg', altText: 'JavaScript' },
    { logo: '/static/logos/typescript.svg', altText: 'TypeScript' },
    { logo: '/static/logos/react.svg', altText: 'React' },
    { logo: '/static/logos/nodejs.svg', altText: 'Node.js' },
    { logo: '/static/logos/wordpress.svg', altText: 'WordPress' },
    { logo: '/static/logos/shopify.svg', altText: 'Shopify' },
    { logo: '/static/logos/nextjs.svg', altText: 'Next.js' },
    { logo: '/static/logos/graphql.svg', altText: 'GraphQL' },
    { logo: '/static/logos/webflow.svg', altText: 'Webflow' },
    { logo: '/static/logos/tailwindcss.svg', altText: 'Tailwind CSS' }
  ]
};

export const contact = {
  title: 'Contact Me',
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

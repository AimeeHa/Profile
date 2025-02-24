import flashcard from '../assets/flashcard.png';
import littlelemon from '../assets/littlelemon.png';
import portfolio from '../assets/portfolio.png';
import tripplanner from '../assets/tripplanner.png';
import ryalto from '../assets/ryalto.png';
import itnerary from '../assets/itinerary.png';
import tldw from '../assets/tldw.png';
import impakter from '../assets/impakter.png';

const projects = [
  {
    name: "TLDW (Too Long, Didn't Watch)",
    description: [
      'Feeling too tired of watching long videos and spending tons of time trying to remember what main points have been mentioned?',
      'TLDW can help summarise any YouTube video into a comprehensive summary with detailed sectional breakdowns. Our AI Chat function also allows you to understand the content more effectively by asking questions.',
      'Get your knowledge enhanced and your time saved.',
    ],
    summary: 'YouTube video summarisation tool using LangChain',
    tech: [
      'Python',
      'Next.js',
      'React',
      'Typescript',
      'MongoDB',
      'OpenAI',
      'LLM',
      'Tailwind CSS',
      'Git',
      'Kubernetes',
    ],
    img: tldw,
    link: 'https://tldw.pro/',
  },
  {
    name: 'Itinerary Genie',
    description: [
      'Say goodbye to the hassle and stress of trip planning, and let our intuitive AI-powered platform handle the heavy lifting for you',
      'With Itinerary Genie, users can relax and focus on the real fun of traveling while we craft personalised, seamless itineraries tailored to their preferences. ',
      "It's all about making your travel experiences smoother and more memorable.",
    ],
    summary: 'Your ultimate AI-powered travel planning companion',
    tech: ['React', 'Typescript', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Git'],
    img: itnerary,
    link: 'https://travel.aimeeha.dev/',
  },
  {
    name: 'Brainy Cards',
    summary: 'A dynamic flashcard app for your study excellence',
    description: [
      'A versatile and user-centric platform for creating and accessing flashcards.',
      'Users can easily craft flashcards manually or automate the process by uploading .CSV files. In addition, Brainy Cards empowers users to seamlessly explore popular sets, perform targeted searches, and curate their own personal study library.',
      'User security is also prioritised, along with robust authentication, secure password management, and custom email confirmation for a safe and friendly experience.',
    ],
    tech: [
      'React',
      'Typescript',
      'Django REST Framework',
      'HTML',
      'CSS',
      'Git',
    ],
    img: flashcard,
    link: 'https://flashcard.aimeeha.dev/',
  },
  // {
  //   name: 'Restaurant Reservation',
  //   summary: "Little Lemon Restaurant's Reservation Website",
  //   description: [
  //     'Centered around Front-End development, this project is where I meticulously crafted custom components, adhering to a specified Type System, mirroring the real-world collaboration experience with UX/UI designers.',
  //     'By leveraging advanced React hooks such as useReducer and useContext, the website seamlessly offers a list of available time slots for restaurant table reservations, and provides real-time updates for the availability of these slots, ensuring a smooth and dynamic user experience. ',
  //   ],
  //   tech: ['React', 'Javascript', 'HTML', 'CSS', 'Git'],
  //   img: littlelemon,
  //   link: 'https://github.com/AimeeHa/Restaurant_Reservation',
  // },
  {
    name: 'Portfolio',
    description: [
      'This website serves as a canvas for my newfound proficiency in Tailwind CSS and Node.js.',
      "It's the platform where I proudly display a collection of my personal projects, offering a glimpse into my evolving skills and the inventive ventures that have enriched my portfolio.",
    ],
    summary: "This delightful website you're currently browsing",
    tech: ['React', 'Javascript', 'Tailwind CSS', 'Node.js', 'MySQL', 'Git'],
    img: portfolio,
    link: '/',
  },
  {
    name: 'Impakter Index',
    description: [
      'This project was done as part of a coding challenge for Impakter, a platform that empowers sustainability for SMEs.',
      'The task was to develop Impakter Index Web Application, a tool for companies and individuals to understand how sustainable utility companies are across Europe.',
    ],
    summary: 'Sustainability index web application for Impakter',
    tech: ['React', 'Typescript', 'Tailwind CSS', 'Git'],
    img: impakter,
    link: 'https://github.com/AimeeHa/Impakter',
  },
  {
    name: "Ryalto's Developer Page",
    description: [
      'This project was done as part of a coding challenge for Ryalto, a healthcare startup based in the UK.',
      'The task was to improve the existing developer page (https://developer.ryalto.group/), give it better UX/UI and a more sematic HTML.',
    ],
    summary: "A design and coding challenge for Ryalto's developer page",
    tech: ['Javascript', 'HTML', 'CSS', 'Figma', 'Git'],
    img: ryalto,
    link: 'https://github.com/AimeeHa/Ryalto',
  },
];

export default projects;

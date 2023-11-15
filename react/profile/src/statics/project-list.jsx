import flashcard from '../assets/flashcard.png';
import littlelemon from '../assets/littlelemon.png';
import portfolio from '../assets/portfolio.png';
import tripplanner from '../assets/tripplanner.png';
import ryalto from '../assets/ryalto.png';

const projects = [
  {
    name: "Aimee's Cards",
    summary: 'A dynamic flashcard app for your study excellence',
    description: [
      'A versatile and user-centric platform for creating and accessing flashcards.',
      "Users can easily craft flashcards manually or automate the process by uploading .CSV files. In addition, Aimee's Cards empowers users to seamlessly explore popular sets, perform targeted searches, and curate their own personal study library.",
      'User security is also prioritised, along with robust authentication, secure password management, and custom email confirmation for a safe and friendly experience.',
    ],
    tech: [
      'React',
      'Typescript',
      'Django',
      'Django REST Framework',
      'HTML',
      'CSS',
      'Git',
      'AWS',
    ],
    img: flashcard,
    link: 'https://flashcard.aimeeha.dev/',
  },
  {
    name: 'Restaurant Reservation',
    summary: "Little Lemon Restaurant's Reservation Website",
    description: [
      'Centered around Front-End development, this project is where I meticulously crafted custom components, adhering to a specified Type System, mirroring the real-world collaboration experience with UX/UI designers.',
      'By leveraging advanced React hooks such as useReducer and useContext, the website seamlessly offers a list of available time slots for restaurant table reservations, and provides real-time updates for the availability of these slots, ensuring a smooth and dynamic user experience. ',
    ],
    tech: ['React', 'Javascript', 'HTML', 'CSS', 'Git'],
    img: littlelemon,
    link: 'https://github.com/AimeeHa/Restaurant_Reservation',
  },
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
  {
    name: 'Trip Planner',
    description: [
      'While this project is in its initial stages, it holds exciting potential.',
      'The vision is to assist users in crafting detailed trip itineraries for their upcoming travels with minimal input—just specify your destination, the number of days, and your preferred activities. The future plan includes integrating Gmail for seamless registration and login, and even generating calendar invites to ensure you have your itinerary readily accessible at your fingertips.',
      "It's all about making your travel experiences smoother and more memorable.",
    ],
    summary: 'Your ultimate travel planning companion, powered by OpenAI',
    tech: ['React', 'Typescript', 'Node.js', 'Tailwind CSS'],
    img: tripplanner,
    link: 'https://github.com/AimeeHa/TripPlanner',
  },
];

export default projects;

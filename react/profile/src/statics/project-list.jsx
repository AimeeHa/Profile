import flashcard from '../assets/flashcard.png';
import littlelemon from '../assets/littlelemon.png';

const projects = [
  {
    name: "Aimee's Cards",
    summary: 'A dynamic flashcard app for your study excellence',
    description: [
      'A versatile and user-centric platform for creating and accessing flashcards.',
      'Users can easily craft flashcards manually or automate the process by uploading .CSV files. Whether you prefer private study sets or sharing with the community, this app empowers you to choose.',
      'Seamlessly access public flashcards, explore popular sets, perform targeted searches, and curate your own personal study library. User security is also prioritised, along with robust authentication, secure password management, and custom email confirmation for a safe and friendly experience.',
    ],
    tech: [
      'React',
      'Typescript',
      'Django',
      'Django REST Framework',
      'HTML',
      'CSS',
      'AWS',
    ],
    img: flashcard,
    link: 'https://flashcard.aimeeha.dev/',
  },
  {
    name: 'Restaurant Reservation',
    summary: "Little Lemon Restaurant's Reservation Website",
    description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. '],
    tech: ['React', 'Typescript', 'HTML', 'CSS'],
    img: littlelemon,
    link: 'https://github.com/AimeeHa/Restaurant_Reservation',
  },
  {
    name: 'Project 3',
    description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. '],
    summary: 'A dynamic flashcard app for your study excellence.',
    tech: ['React', 'Typescript', 'HTML', 'CSS'],
    img: 'https://picsum.photos/320/500',
    link: 'https://www.google.com',
  },
  {
    name: 'Project 4',
    description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. '],
    summary: 'A dynamic flashcard app for your study excellence.',
    tech: ['React', 'Typescript', 'HTML', 'CSS'],
    img: 'https://picsum.photos/320/500',
    link: 'https://www.google.com',
  },
];

export default projects;

export const profile = {
  name: 'Md Anas',
  avatar: '/anas.jpeg',
  role: 'Software Engineer / Full Stack Developer',
  location: 'NIT Patna, India',
  phone: '+91-8809238625',
  email: 'mdanas8171@gmail.com',
  linkedin: 'https://linkedin.com/in/mdanas8809',
  github: 'https://github.com/Anas-8809',
  leetcode: 'https://leetcode.com/u/Md-Anas/',
  objective:
    "Aspiring software engineer with strong proficiency in the MERN stack and 700+ Data Structures & Algorithms problems solved. Experienced in designing RESTful APIs and building scalable, secure web applications. AI/ML enthusiast integrating intelligent features into full-stack projects.",
}

export const education = {
  school: 'National Institute of Technology Patna',
  degree: 'B.Tech, Electronics and Communication Engineering',
  years: '2023 – 2027',
  cgpa: '8.25',
}

export const skills = {
  languages: ['C', 'C++', 'JavaScript (ES6+)', 'Python', 'SQL', 'Java (basics)'],
  web: ['HTML5', 'CSS3', 'React.js', 'Node.js', 'Express.js', 'Redux Toolkit', 'Tailwind CSS'],
  databases: ['MongoDB', 'MySQL'],
  apis: ['RESTful APIs', 'JWT Authentication', 'RBAC', 'Session Management'],
  ml: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
  tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'Render', 'Cloudinary'],
}

export const projects = [
  {
    id: 'notes-app',
    file: 'notesApp.jsx',
    name: 'Full Stack Notes Management Application',
    date: 'July 2026',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/Anas-8809',
    live: 'https://notes-app-pearl-one-37.vercel.app/',
    points: [
      'Developed a full-stack Notes Management Application using the MERN stack with secure JWT-based authentication.',
      'Implemented user registration, login, protected routes, and token-based authorization for secure access.',
      'Built complete CRUD functionality allowing users to create, view, update, and delete personal notes.',
      'Integrated MongoDB Atlas for cloud database storage and deployed the frontend on Vercel and backend on Render.',
    ],
  },
  {
    id: 'bookshow',
    file: 'bookshow.jsx',
    name: 'BookShow — Movie Ticket Booking Platform',
    date: 'Jan 2026',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Clerk', 'Inngest', 'Stripe'],
    github: 'https://github.com/Anas-8809',
    live: 'https://bookshow-client.vercel.app/',
    points: [
      'Built and deployed a MERN-based movie ticket booking platform with real-time seat selection.',
      'Designed RESTful APIs for movies, bookings, users, and seat availability.',
      'Integrated Stripe payments and handled success, failure, and retry flows.',
      'Implemented a seat-locking mechanism with timed release to prevent double booking.',
      'Automated background jobs and email notifications using Inngest.',
    ],
  },
  {
    id: 'hostel-hungry',
    file: 'hostelHungry.jsx',
    name: 'Hostel Hungry — Real-time Food Delivery Platform',
    date: 'Jan 2026',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io', 'Google Maps API'],
    github: 'https://github.com/Anas-8809',
    live: 'https://hostel-hungry-0.onrender.com',
    points: [
      'Architected a scalable three-tier MERN app for Customer, Restaurant, and Delivery Partner roles.',
      'Enabled real-time order tracking with bi-directional Socket.io notifications.',
      'Integrated Google Maps and geolocation for restaurant discovery and live rider tracking.',
      'Strengthened security with email OTP verification and JWT authentication.',
    ],
  },
  {
    id: 'underwater-gan',
    file: 'underwaterEnhance.py',
    name: 'Underwater Image Enhancement using Deep Learning',
    date: 'March 2026',
    stack: ['PyTorch', 'Python', 'OpenCV', 'CUDA', 'GAN'],
    github: 'https://github.com/Anas-8809',
    live: 'https://',
    points: [
      'Implemented a GAN-based underwater image enhancement system with a custom CMRRCU-Net architecture.',
      'Trained an end-to-end restoration model to improve clarity, contrast, and color correction.',
      'Combined adversarial, L1, and gradient-based losses to preserve detail and visual quality.',
      'Optimized GPU-based training and evaluation pipelines with PyTorch and OpenCV.',
    ],
  },
]

export const certifications = [
  { name: 'Amazon ML Summer School 2026', meta: 'Qualified', featured: true },
  { name: 'HackerRank Java (Basic) Certification', meta: 'March 2025' },
  { name: 'NPTEL — Joy of Computing Using Python', meta: 'Elite + Gold, 90%+' },
  { name: 'NPTEL — Cloud Computing', meta: 'Elite + Gold, · Cloud Architecture focus' },
]

export const achievements = [
  { label: 'dsa_problems_solved', value: '700+', note: 'LeetCode & GeeksforGeeks' },
  { label: 'leetcode_rating', value: '1750+', note: 'competitive programming' },
  { label: 'cgpa', value: '8.25', note: 'NIT Patna, ECE' },
]

export const positions = [
  { role: 'DSA Team Member', org: 'Web and Coding Club, NIT Patna', period: 'Oct 2024 – Present' },
  { role: 'Technical Team Member', org: 'Tinkering Lab, NIT Patna', period: 'Mar 2024 – Present' },
]

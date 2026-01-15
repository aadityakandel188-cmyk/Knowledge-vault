
import { Book } from '../types';

export const BOOKS_DATA: Book[] = [
  // Existing Data
  { id: '1', title: 'Advanced Neural Networks', author: 'Dr. Aris Thorne', category: 'AI', description: 'Deep dive into transformer architectures.', coverImage: 'https://picsum.photos/seed/ai1/400/600', downloadUrl: '#', year: 2024 },
  { id: '2', title: 'Orbital Mechanics & Propulsion', author: 'Sarah Jenkins', category: 'Aerospace', description: 'Standard reference for LEO satellite deployment.', coverImage: 'https://picsum.photos/seed/aero1/400/600', downloadUrl: '#', year: 2023 },
  { id: '5', title: 'Systems Programming in Rust', author: 'Ken Thompson', category: 'Programming', description: 'Memory safety and high-concurrency patterns.', coverImage: 'https://picsum.photos/seed/prog1/400/600', downloadUrl: '#', year: 2024 },
  
  // Aerodynamics Specialization
  {
    id: 'ae1',
    title: 'Low Reynolds Number Aerodynamics',
    author: 'T.J. Mueller',
    category: 'Fluid Mechanics',
    description: 'Analysis of boundary layer transitions in EV body design.',
    coverImage: 'https://picsum.photos/seed/ae1/400/600',
    downloadUrl: '#',
    year: 2024
  },
  {
    id: 'ae2',
    title: 'Minimizing Automotive Drag',
    author: 'W.H. Hucho',
    category: 'Cd Optimization',
    description: 'The definitive guide to reducing drag coefficients for increased range.',
    coverImage: 'https://picsum.photos/seed/ae2/400/600',
    downloadUrl: '#',
    year: 2023
  },
  {
    id: 'ae3',
    title: 'Computational Wind Tunnel Design',
    author: 'Frank White',
    category: 'Wind Tunnel Testing',
    description: 'Simulating high-velocity airflow using modern CFD solvers.',
    coverImage: 'https://picsum.photos/seed/ae3/400/600',
    downloadUrl: '#',
    year: 2025
  },

  // Electric Drivetrain Specialization
  {
    id: 'ev1',
    title: 'BMS Architectures for EVs',
    author: 'Andrea Davide',
    category: 'BMS',
    description: 'Cell balancing and thermal runaway prevention strategies.',
    coverImage: 'https://picsum.photos/seed/ev1/400/600',
    downloadUrl: '#',
    year: 2024
  },
  {
    id: 'ev2',
    title: 'Next-Gen Lithium-Ion Chemistry',
    author: 'Jeff Dahn',
    category: 'Lithium-Ion Chemistry',
    description: 'Solid-state electrolyte research and anode optimization.',
    coverImage: 'https://picsum.photos/seed/ev2/400/600',
    downloadUrl: '#',
    year: 2024
  },
  {
    id: 'ev3',
    title: 'Regen-Braking Logic Control',
    author: 'Bosch Engineering',
    category: 'Regenerative Braking',
    description: 'Maximizing energy recovery during deceleration phases.',
    coverImage: 'https://picsum.photos/seed/ev3/400/600',
    downloadUrl: '#',
    year: 2023
  }
];

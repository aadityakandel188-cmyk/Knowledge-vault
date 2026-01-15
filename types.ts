
export type Category = 
  | 'All' | 'AI' | 'Aerospace' | 'Recycling' | 'Solar Energy' | 'Programming' | 'Life Helper'
  | 'Fluid Mechanics' | 'Cd Optimization' | 'Wind Tunnel Testing' | 'Airfoil Design'
  | 'BMS' | 'High-Voltage Safety' | 'Regenerative Braking' | 'Lithium-Ion Chemistry';

export interface Book {
  id: string;
  title: string;
  author: string;
  category: Category;
  description: string;
  coverImage: string;
  downloadUrl: string;
  year: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

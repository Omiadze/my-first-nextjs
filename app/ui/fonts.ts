import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    subsets: ['latin'], // Specify subset
    weight: ['400', '700'], // Specify weights (normal and bold)
  });
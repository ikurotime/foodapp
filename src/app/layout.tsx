import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs';
import './globals.css';
import { Pangolin } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LandingPage from '@/components/LandingPage';
import { useRouter } from 'next/navigation';
const inter = Pangolin({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'RecetasYa!',
  description:
    'RecetasYa! es una aplicación web para compartir recetas de cocina.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

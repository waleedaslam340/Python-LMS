import './globals.css';
import { ProfileProvider } from '@/lib/context/ProfileContext';
import { ThemeProvider } from '@/lib/context/ThemeContext';
import Navbar from '@/components/Navbar';
import { Fredoka, Nunito } from 'next/font/google';

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '600', '700', '800'],
});

export const metadata = {
  title: 'Python for Kids 🐍',
  description: 'Learn Python the fun way!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fredoka.variable} ${nunito.variable}`}>
      <body>
        <ThemeProvider>
          <ProfileProvider>
            <Navbar />
            <main>{children}</main>
          </ProfileProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

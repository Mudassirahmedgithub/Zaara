import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zaara I love you ',
  description: 'Happy Birthday',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
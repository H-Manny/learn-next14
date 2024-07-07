import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

/**
 * 指定された子でルートレイアウトをレンダリングします
 *
 * @param {{ children: React.ReactNode }} children - The React node to be rendered within the layout.
 * @return {React.ReactNode} The rendered HTML layout with the provided children.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

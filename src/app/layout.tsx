
export const metadata = {
  title: 'AI Auto Generated App',
  description: 'Created by Dify and Vercel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}

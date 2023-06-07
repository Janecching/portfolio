import '@styles/globals.css'
import Nav from '@components/Nav'
import Head from 'next/head';

export const metadata = {
    title: "Jane Chong",
    description: "Software Engineer"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" type="image/png" href="../portrait.png" />
</Head>
        <body>
            <div className="main">
            </div>
            <main className="app">
                <Nav/>
                {children}
            </main>
        </body>
    
    </html>
  )
}

export default RootLayout
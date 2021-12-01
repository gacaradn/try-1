import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Baby Daddy!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Record Today at Baby Daddy Records!" /><br><br><br><br>
        <p className="description">
          Call +254 728 479 523 
        </p>
      </main>

      <Footer />
    </div>
  )
}

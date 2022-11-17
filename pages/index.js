import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
      <title>Hamburguesa</title>
      <link rel="icon" href="/img/burger1.png"/>
    </Head>
    <header>
      <h1>Hamburguesa</h1>
    </header>
    <nav>
     <Link  href="/" legacyBehavior>
       <a>inicio</a>
     </Link>

     <Link href="/menu" legacyBehavior>
      <a>Menu</a>
     </Link>
 

     <Link href="/contacto" legacyBehavior>
      <a>contacto</a>
     </Link>
    
     </nav>
     <section>
      <article>
        <Image className="imagen1"  src="/img/burger.jpg" 
        width={350} height={280}
          alt="my burger"></Image>        
      </article>
       <article>
        <p>Una hamburguesa es un sándwich hecho a base de carne molida o de origen vegetal, ​ aglutinada en forma de filete cocinado a la parrilla o a la plancha, aunque también puede freírse u hornearse. Fuera del ámbito de habla hispana, es más común encontrar la denominación estadounidense
         burger, acortamiento de hamburger.</p>
       </article>
     </section>

     <footer>
      burger@2022
     </footer>
    </div>
  )
}

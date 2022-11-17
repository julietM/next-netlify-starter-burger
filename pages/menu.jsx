import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/menu.module.css'


export default function menu() {
  return (
    <div>
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
      
        <Image className={styles.box}  src="/img/burgersvd.svg" 
        width={420} height={380}
          alt="my burger"></Image> 
              
      </article>
      </section>

      <footer>
      burger@2022
     </footer>
    </div>
  )
}

import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/contacto.module.css'

export default function contacto() {
  return (
    <div>
     <Head>
      <title>Contacto</title>
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
         <div className={styles.box1}>
         <label>Nombre:</label>
         <input type="text"></input>

         <label>Email:</label>
         <input type="email"></input>

         <button type="submit">Envia</button>

         </div>
                 </article>
     </section>
    
     <footer>
      burger@2022
     </footer>
    </div>
  )
}

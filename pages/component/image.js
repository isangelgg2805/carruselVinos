import React from 'react'
import Imagen from 'next/image'
import ruta from '../../public/BRISA.png'
import styles from '../../styles/carrusel.module.css'


const Image = () => {
  return (
        <>
        
        <div className={styles.carrousel}>
                <article className={styles.card}>
                    <Imagen
                    src={ruta}
                    alt="Picture of the author"
                    width={200}
                    height={500}
                    />
                    
                    <span className={styles.descripcion}>HOLA</span>
                </article>

                <article className={styles.card}>
                    <Imagen
                    src={ruta}
                    alt="Picture of the author"
                    width={200}
                    height={500}
                    />
                </article>
                <article className={styles.card}>
                    <Imagen
                    src={ruta}
                    alt="Picture of the author"
                    width={200}
                    height={500}
                    />
                </article>
                <article className={styles.card}>
                    <Imagen
                    src={ruta}
                    alt="Picture of the author"
                    width={200}
                    height={500}
                    />
                </article>
                <article className={styles.card}>
                    <Imagen
                    src={ruta}
                    alt="Picture of the author"
                    width={200}
                    height={500}
                    />
                </article>
            </div>

        </>
  )
}
export default Image


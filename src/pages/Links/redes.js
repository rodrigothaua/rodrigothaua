import styles from './links.module.css'

function redes({nome, username, alt}) {

    return(
        <a
            href={`https://www.${alt}.com/${username}`}
            className={styles.links}
            alt={alt}
            target='_blank'
        >
            {nome}
        </a>           
    )
}

export default redes
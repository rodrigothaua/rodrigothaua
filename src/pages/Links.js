import styles from './links.module.css'

const avatar = "/img/perfil.jpeg"

function Links() {
    return(
        <div className={styles.container}>
            <div className={styles.avatar}>
                <h1>perfil</h1>
            </div>

            <div className={styles.link}>
                <a
                    href='#'
                >Instagram</a>
            </div>
        </div>
    )
}

export default Links
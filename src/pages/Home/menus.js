import styles from './Home.module.css'

function Menus({name, link}) {
    return(
        <div className={styles.menu}>
            <a
                href={link}
                className={styles.nav_burger}
            >
                {name}
            </a>
        </div>
    )
}

export default Menus
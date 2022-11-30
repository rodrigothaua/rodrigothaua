import styles from './Home.module.css'
import Menus from './menus'

function Home() {
    return(
        <div className={styles.menu}>
            <nav>
                <Menus name='Home' link='/' />
                <Menus name='Sobre' link='/sobre' />
                <Menus name='Portfólio' link='/portfolio' />
                <Menus name='Contato' link='/contato' />
            </nav>
        </div>
    )
}

export default Home
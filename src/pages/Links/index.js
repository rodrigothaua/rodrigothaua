import styles from './links.module.css'
import Redes from './redes'

const imgAvatar = "img/perfil.jpeg"

function Links() {
    return(
        <div className={styles.container}>
            <div className={styles.avatar}>
                <img src={imgAvatar}/>
            </div>

            <Redes nome='Instagram' username='rodrigothaua' alt='Instagram' />
            <Redes nome='Facebbok' username='rodrigothaua' alt='Facebook' />
            <Redes nome='Twitter' username='rodrigothaua' alt='Twitter' />
            <Redes nome='Github' username='rodrigothaua' alt='Github' />
            <Redes nome='Linkedin' username='rodrigothaua' alt='Linkedin' />

            
        </div>       
    )
}

export default Links
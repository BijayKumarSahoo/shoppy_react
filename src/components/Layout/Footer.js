import classes from './Footer.module.css';


const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.icons}>
                <i className="fab fa-twitter" style={{ color: 'rgb(70, 156, 226)' }}></i>
                <i className="fab fa-youtube-square" style={{ color: 'red' }}></i>
                <i className="fab fa-facebook-square" style={{ color: 'blue' }}></i>
            </div>
        </footer>
    )
}

export default Footer;
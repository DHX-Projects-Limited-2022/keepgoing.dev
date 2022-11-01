
const Year = new Date().getFullYear();


const Footer = () => {
    return (
       
        <footer className="site-footer">
            <p>Copyright &copy; {Year} <a href="https://dhxprojects.com/" target="blank">DHX Projects Limited</a>.</p>
        </footer>
    );
}

export default Footer;

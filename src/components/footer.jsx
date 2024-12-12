import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="fixed-bottom bg-dark text-white text-center py-3">
            <div className="container">
                <a href="https://twitter.com/yourusername" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="https://github.com/yourusername" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="https://linkedin.com/in/yourusername" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;

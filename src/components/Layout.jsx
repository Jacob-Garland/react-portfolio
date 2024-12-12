import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import ResumePage from './ResumePage';

const Layout = () => {
    return (
        <Router>
            <Header />
            <main className="mt-5 pt-3">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/resume" element={<ResumePage />} />
                    </Routes>
                </div>
            </main>
        </Router>
    );
};

export default Layout;

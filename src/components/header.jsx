import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar';

function Header() {
  return (
    <header className="fixed-top bg-danger text-white p-3">
      <h1>Jacob M. Garland - Portfolio</h1>
      <NavBar />
    </header>
  );
};

export default Header;
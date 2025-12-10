import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 w-full z-0 backdrop-blur-lg border-b border-primary/30 bg-dark/70">
      <nav className="flex items-center justify-between p-4 md:p-6 max-w-6xl mx-auto">
        <Link to="/" className="text-secondary text-2xl font-bold glow">
          DeleeCrest
        </Link>
        <ul className="flex gap-6 text-lg">
          {['/', '/pricing', '/forum', '/products', '/team', '/contact'].map((path) => {
            const name = path.slice(1) || 'Home';
            return (
              <li key={path}>
                <Link
                  to={path}
                  className={`hover:text-accent transition ${
                    location.pathname === path ? 'text-primary' : ''
                  }`}
                >
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;




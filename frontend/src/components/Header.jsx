import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-slate-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          CRUD APPLICATION
        </Link>
        <Link to="/add">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add User
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header; 
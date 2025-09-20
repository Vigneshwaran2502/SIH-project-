import { useEffect, useState } from 'react';
import axios from 'axios';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // This state will hold the list of users fetched from your backend
  const [users, setUsers] = useState([]);

  // This function fetches the user data
  const fetchUsers = async () => {
    try {
      // IMPORTANT: This URL points to the backend you will build later
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error("Could not fetch users, displaying dummy data:", error);
      // If the backend isn't running, we'll show some fake data
      setUsers([
        { _id: 1, name: 'Jayanth S', email: 'jayanth@example.com', job: 'Developer', mobile: '1234567890' },
        { _id: 2, name: 'Vignesh', email: 'vignesh@example.com', job: 'Designer', mobile: '0987654321' }
      ]);
    }
  };

  // This tells React to run the fetchUsers function once when the page loads
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    // A simple confirmation before deleting
    if (window.confirm("Are you sure you want to delete this user?")) {
        try {
            await axios.delete(`http://localhost:5000/api/users/${id}`);
            // After deleting, we refresh the user list
            fetchUsers();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    }
  }

  return (
    <div className="mt-10 container mx-auto px-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Id</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Job</th>
              <th className="py-3 px-6 text-left">Number</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {users.map((user, index) => (
              <tr key={user._id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                <td className="py-3 px-6 text-left">{user.name}</td>
                <td className="py-3 px-6 text-left">{user.email}</td>
                <td className="py-3 px-6 text-left">{user.job}</td>
                <td className="py-3 px-6 text-left">{user.mobile}</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center space-x-4">
                    <Link to={`/view/${user._id}`} title="View">
                      <Eye className="w-5 h-5 text-gray-500 hover:text-gray-800" />
                    </Link>
                    <Link to={`/edit/${user._id}`} title="Edit">
                      <Pencil className="w-5 h-5 text-gray-500 hover:text-blue-600" />
                    </Link>
                    <button onClick={() => handleDelete(user._id)} title="Delete">
                      <Trash2 className="w-5 h-5 text-gray-500 hover:text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
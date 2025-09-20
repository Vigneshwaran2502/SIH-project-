import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <main>
          <Routes>
            {/* This tells the app to show the Home page at the main URL */}
            <Route path="/" element={<Home />} />

            {/* We will add routes for Add, Edit, and View pages here later */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
```3.  **Save the file.**

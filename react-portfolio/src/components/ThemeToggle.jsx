import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <div className="slider round">
        <div className="sun-moon">
          <svg className="moon-dot" id="moon-dot-1" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </svg>
          <svg className="moon-dot" id="moon-dot-2" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </svg>
          <svg className="moon-dot" id="moon-dot-3" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </svg>
          <svg className="light-ray" id="light-ray-1" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </svg>
          <svg className="light-ray" id="light-ray-2" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </svg>
          <svg className="light-ray" id="light-ray-3" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </svg>
          {[1, 2, 3].map(i => (
            <svg key={`cloud-dark-${i}`} className="cloud-dark" id={`cloud-${i}`} viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" />
            </svg>
          ))}
          {[4, 5, 6].map(i => (
            <svg key={`cloud-light-${i}`} className="cloud-light" id={`cloud-${i}`} viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" />
            </svg>
          ))}
        </div>
        <div className="stars">
          {[1, 2, 3, 4].map(i => (
            <svg key={`star-${i}`} className="star" id={`star-${i}`} viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
          ))}
        </div>
      </div>
    </label>
  );
};

export default ThemeToggle;

import { useEffect, useState } from "react";

const themes = [
  "light-theme",
  "dark-theme",
  "cyberpunk",
  "garden",
  "cupcake",
  "synthwave",
];

const HeaderThemeToggle = ({
  onThemeChange,
}: {
  onThemeChange: (theme: string) => void;
}) => {
  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.getItem("selectedTheme") || themes[0]
  );

  useEffect(() => {
    localStorage.setItem("selectedTheme", selectedTheme);
    onThemeChange(selectedTheme);
  }, [selectedTheme, onThemeChange]);

  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn m-1 mq725:btn-sm">
        Select Theme
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        {themes.map((theme) => (
          <li key={theme}>
            <a href="#" onClick={() => setSelectedTheme(theme)}>
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderThemeToggle;

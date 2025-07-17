const useTheme = () => {
  const isDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const themeClass = isDark ? "bg-dark text-light" : "bg-light text-dark";

  return {
    isDark,
    themeClass,
  };
};

export default useTheme;

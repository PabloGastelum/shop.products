import { useTheme } from "../../hooks";

const Loading = () => {
  const { themeClass } = useTheme();
  return (
    <div
      className={`min-vh-100 w-100 d-flex justify-content-center align-items-center ${themeClass}`}
    >
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div
          className="spinner-border text-primary"
          role="status"
          style={{ width: "4rem", height: "4rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;

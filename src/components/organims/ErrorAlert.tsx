import { useTheme } from "../../hooks";

const ErrorAlert = ({ message }: { message: string | null }) => {
  const { themeClass } = useTheme();

  return (
    <div
      className={`min-vh-100 w-100 d-flex justify-content-center align-items-center ${themeClass}`}
    >
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="alert alert-danger" role="alert">
          {message}
        </div>
      </div>
    </div>
  );
};

export default ErrorAlert;

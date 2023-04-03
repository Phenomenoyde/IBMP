import './Error.css';

export const Error = ({ id, className, children }) => {
  return (
    <p id={id} role="alert" className={`RestError text-sm ${className ?? ''}`}>
      {children}
    </p>
  );
};

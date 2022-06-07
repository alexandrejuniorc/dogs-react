import '../../scss/Button.scss';

export const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="button">
      {children}
    </button>
  );
};

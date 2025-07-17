type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => (
  <button
    className={`bg-red-500 text-white font-bold py-2 px-4 rounded ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);
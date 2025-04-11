import React from "react";
type props = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};
export default function Button(props: props) {
  const { children, disabled, onClick, className } = props;
  return (
    <button
      className={`btn ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
      type="submit"
    >
      {children}
    </button>
  );
}

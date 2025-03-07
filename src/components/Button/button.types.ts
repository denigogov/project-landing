export interface ButtonTypes {
  label: string;
  size?: "small" | "medium" | "large";
  type?: "default" | "primary" | "secondary" | "tertiary" | "text" | "link";
  className?: string;
  href?: string;
  blank?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
}

export interface ButtonTypes {
  label: string;
  size?: "small" | "medium" | "large";
  type?: "default" | "primary" | "secondary" | "tertiary" | "text" | "link";
  className?: string;
  onClick?: () => void;
}

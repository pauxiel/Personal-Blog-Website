import Link from "next/link";
import classNames from "classnames";

type Props = Readonly<{
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}>;

function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: Props) {
  const baseClasses =
    "inline-block px-[24px] py-[12px] rounded-[8px] font-medium text-[1.4rem] xs:text-[1.6rem] transition-all duration-200 text-center";

  const variantClasses =
    variant === "primary"
      ? "bg-accent-light dark:bg-accent-dark text-white hover:opacity-90"
      : "border border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark hover:bg-black/5 dark:hover:bg-white/5";

  const classes = classNames(baseClasses, variantClasses);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export default Button;

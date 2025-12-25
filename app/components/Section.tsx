import classNames from "classnames";

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}>;

function Section({ children, className, id }: Props) {
  const classes = classNames(
    "flex flex-col items-center w-full gap-[2rem] xs:gap-[4rem]",
    className
  );

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
}

export default Section;

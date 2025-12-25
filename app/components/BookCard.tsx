import Image from "next/image";
import Button from "./Button";

type Props = Readonly<{
  title: string;
  author: string;
  price: string;
  coverImage: string;
  purchaseLink: string;
  description: string;
}>;

function BookCard({
  title,
  author,
  price,
  coverImage,
  purchaseLink,
  description,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-[24px] md:gap-[32px] p-[24px] bg-white dark:bg-zinc-900 rounded-[12px] border border-secondary-light/20 dark:border-secondary-dark/20">
      {/* Book Cover */}
      <div className="relative w-full md:w-[200px] aspect-[3/4] flex-shrink-0 rounded-[8px] overflow-hidden shadow-lg">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 200px"
        />
      </div>

      {/* Book Details */}
      <div className="flex flex-col gap-[16px] flex-1">
        <div>
          <h3 className="text-[1.8rem] xs:text-[2rem] font-semibold text-black dark:text-white leading-[130%]">
            {title}
          </h3>
          <p className="text-[1.4rem] text-secondary-light dark:text-secondary-dark mt-[4px]">
            by {author}
          </p>
        </div>

        <p className="text-[1.4rem] xs:text-[1.6rem] leading-[150%]">
          {description}
        </p>

        <div className="flex flex-col xs:flex-row items-start xs:items-center gap-[16px] mt-auto">
          <span className="text-[2rem] font-bold text-accent-light dark:text-accent-dark">
            {price}
          </span>
          <Button href={purchaseLink} external>
            Get the Book
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;

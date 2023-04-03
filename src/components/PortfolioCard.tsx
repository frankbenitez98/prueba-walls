import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import CardImage from "../../public/assets/images/walking-dog.jpg";
import { useRouter } from "next/router";

type Props = {
  path: string;
};
const PortfolioCard: FC<Props> = ({ path }) => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div className="flex flex-col gap-y-3 h-auto bg-white w-[320px] shrink-0 pb-5">
      <Image
        src={CardImage}
        className="w-auto h-[240px] brightness-75"
        alt="img card"
      />
      <div className="flex flex-col gap-y-2 px-5 justify-start">
        <span className="font-semibold text-gray-800">Project name</span>
        <span className="font-semibold text-2xl text-gray-800">
          Client: OLX
        </span>
        <span className="text-gray-500">
          Short descirption of the project goes here. Ipsum dolor sit amet,
          consectetur adipiscing elit fsfffee.
        </span>
        <div className="grid grid-flow-col justify-between">
          <span className="bg-green-100 w-fit px-4 py-1">
            video | video adaptation
          </span>
          <Icon icon="tabler:upload" fontSize={24} className="text-gray-500" />
        </div>
        <Link href={`/portfolio/${id}/${path}`}>
          <span className="font-semibold underline text-gray-800 cursor-pointer">
            view more
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;

import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface OwnProps {
  name: string;
  imgURL: string;
  siteURL: string;
}

type Props = OwnProps;

const PartnerCard: FunctionComponent<Props> = (props: OwnProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative flex flex-col  cursor-pointer  bg-clip-border rounded-xl w-64 m-4 md:m-2">
            <a
              href={props?.siteURL}
              target="_blank"
              rel="no-referrer"
              className="relative mx-4 overflow-hidden bg-clip-border rounded-xl"
            >
              <Image
                unoptimized
                width={800}
                height={500}
                // fill={true}
                src={props.imgURL}
                alt={props.name}
                // className={"h-[130px] object-cover"}
                className="h-[130px] w-full object-contain"
              />
            </a>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{props.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default PartnerCard;

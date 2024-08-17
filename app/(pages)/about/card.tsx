import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from "@/components/ui/dialog";

// <Avatar className='hover:cursor-pointer'>
//           <AvatarImage src="/" alt="@shadcn" />
//           <AvatarFallback>CN</AvatarFallback>
//       </Avatar>

const Card = ({ previewImage, title, description, subtitle, dialogImage }: { previewImage: string, title: string, description: string, subtitle: string, dialogImage: string }) => {
  return (
    <Dialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: "12px",
        }}
        className=""
      >
        <Avatar className="hover:cursor-pointer">
          <AvatarImage src={previewImage} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DialogTrigger>
      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: "24px",
          }}
          className="pointer-events-auto relative flex p-12 h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
        >
          <DialogImage
            src={dialogImage}
            alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
            className="h-40 w-40"
          />
          <div className="p-6">
            <DialogTitle className="text-2xl font-medium text-zinc-950 dark:text-zinc-50">
              {title}
            </DialogTitle>
            <DialogSubtitle className="text-zinc-700 dark:text-zinc-400">
              {subtitle}
            </DialogSubtitle>
            <DialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <p className="mt-2 text-zinc-500 dark:text-zinc-500">
                {description}
              </p>
              <a
                className="mt-2 inline-flex text-zinc-500 underline"
                href="https://www.are.na/block/12759029"
                target="_blank"
                rel="noopener noreferrer"
              >
                Are.na block
              </a>
            </DialogDescription>
          </div>
          <DialogClose className="text-black" />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
};

export default Card;

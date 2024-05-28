"use client";

import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <Image
          src="/documents.png"
          fill
          alt="Documents"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Heroes;

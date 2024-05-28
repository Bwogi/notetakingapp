"use client";

import { Button } from "@/components/ui/button";
import { ArrowBottomRightIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Easy File Access, Centralized for Convenience. Welcome to{" "}
        <span className="underline">NoteX</span>
      </h1>
      <h3 className="text-base sm:tex-xl md:text-2xl font-medium">
        NoteX is the connected workspace where access & convenience are
        prioritised.
      </h3>
      <Button>
        Enter NoteX
        <ArrowRightIcon className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default Heading;

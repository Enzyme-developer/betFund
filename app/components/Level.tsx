// import React from "react";

// interface props {
//   level: string;
//   price: string;
//   status: string;
// }

// const Level = ({ level, price, status }: props) => {
//   return (
//     <div className="w-fit flex flex-col space-y-2 border-[3px] border-primary p-1">
//       <p className="text-base font-medium text-white text-center uppercase">
//         {level}
//       </p>
//       <p className="text-lg font-medium text-white text-center uppercase">
//         {price}
//       </p>
//       <div
//         className={`p-1 text-center text-base uppercase ${
//           status == "active"
//             ? "text-primary"
//             : status == "passed"
//             ? "bg-primary"
//             : "border-[1px] border-primary text-primary"
//         }`}
//       >
//         {status}
//       </div>
//     </div>
//   );
// };

// export default Level;

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface props {
  level: string;
  price: string;
  status: string;
}

export function Level({level, price, status}: props) {
  return (
    <Card className="max-w-fit text-center mr-2 mb-1">
      <CardHeader>
        <CardTitle className="font-semibold text-base">{level}</CardTitle>
        <CardDescription>{price}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button
          variant={`${
            status == "passed"
              ? "outline"
              : status == "active"
              ? "default"
              : "ghost"
          }`}
        >
          {status}
        </Button>
      </CardFooter>
    </Card>
  );
}

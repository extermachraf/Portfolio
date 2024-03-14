import React from "react";
import Image from "next/image";

const Info = () => {
  return (
    <div className="text-[20px] font-romanesco">
      <div className="flex space-x-4 items-center">
        <Image
          src="/linkdeen.svg"
          width="24"
          height="24"
          className="h-[40px] w-[40px] object-cover group-hover/card:shadow-xl"
          alt=""
        />
        <div>extermachraf</div>
      </div>
      <div>
        <Image
          src="/linkdeen.svg"
          width="24"
          height="24"
          className="h-[40px] w-[40px] object-cover group-hover/card:shadow-xl"
          alt=""
        />
        <div>extermachraf</div>
      </div>
      <div>
        <Image
          src="/linkdeen.svg"
          width="24"
          height="24"
          className="h-[40px] w-[40px] object-cover group-hover/card:shadow-xl"
          alt=""
        />
        <div>extermachraf</div>
      </div>
      <div>
        <Image
          src="/linkdeen.svg"
          width="24"
          height="24"
          className="h-[40px] w-[40px] object-cover group-hover/card:shadow-xl"
          alt=""
        />
        <div>extermachraf</div>
      </div>
    </div>
  );
};

export default Info;

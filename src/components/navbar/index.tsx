import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button";
import { BUTTON_VARIANTS } from "@/types/enums";

export default function Navbar() {
  return (
    <div className="bg-primary text-mist px-4 py-1 w-full h-14 fixed left-0 top-0 z-50 flex items-center justify-between">
      <div>
        <Link href={"/"} className=" font-line text-2xl">
          IdidnotThinkOfAName
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <Button className="relative" variant={BUTTON_VARIANTS.PRIMARY}>
          <Image width={25} height={25} alt="cart-logo" src="/cart.svg" />
          <span className="absolute right-[-40%] top-0 w-4 h-4 flex items-center justify-center font-bold text-[12px] rounded-[50%] bg-mist text-primary">
            0
          </span>
        </Button>
      </div>
    </div>
  );
}

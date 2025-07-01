import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import { paths } from "@/utils/paths";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" p-2 ">
      <Button variant={"outline"}  >
        <IoIosArrowBack /> <Link href={paths.home}> Home </Link>
      </Button>
      {children}
    </div>
  );
}

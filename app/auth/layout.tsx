import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import { paths } from "@/utils/paths";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" p-2 ">
      <Button variant={"outline"}  >
        <IoIosArrowBack /> <a href={paths.home}> Home </a>
      </Button>
      {children}
    </section>
  );
}

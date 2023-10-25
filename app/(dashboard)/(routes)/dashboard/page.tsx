import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <>
      <p>Dashboard page (protected)</p>
      <UserButton afterSignOutUrl="/" />
      {/* <Button>Click</Button> */}
    </>
  );
};

export default DashboardPage;

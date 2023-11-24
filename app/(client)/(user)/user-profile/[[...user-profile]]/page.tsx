import { UserProfile } from "@clerk/nextjs";
import Link from "next/link";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

const UserProfilePage = () => {
  return (
    <div className=" w-screen h-screen flex justify-center overflow-y-scroll overflow-x-hidden">
      <Link href="/dashboard" className=" absolute top-10 left-10">
        <ArrowBackIosNewOutlinedIcon />
      </Link>
      <div className=" my-[5%]">
        <UserProfile path="/user-profile" routing="path" />
      </div>
    </div>
  );
};

export default UserProfilePage;

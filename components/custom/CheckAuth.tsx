"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
export default function CheckAuth() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return (
      <div className="w-full bg-blue text-white">
        You are not authendicated! Please Sign In{" "}
        <Link href="sign-in" className=" underline font-bold">
          Here
        </Link>
        .
      </div>
    );
  }
}

// "use client";
// import { useAuth } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";

// export default function CheckAuth() {
//   const { isLoaded, userId, sessionId, getToken } = useAuth();
//   const router = useRouter();

//   // In case the user signs out while on the page.
//   if (!isLoaded || !userId) {
//     router.push("/");
//   }

//   return <></>;
// }

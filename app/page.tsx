"use client";

// import { useRouter } from "next/navigation";
// export default function Home() {
//   const { data, status } = useSession();
//   const router = useRouter();
//   return (
//     <div>
//       {status === "authenticated" && JSON.stringify(data)}
//       <br />
//       {status === "authenticated" && (
//         <button
//           onClick={async () => {
//             await signOut();
//           }}
//         >
//           Log Out
//         </button>
//       )}
//       <br />
//       {status === "unauthenticated" && (
//         <button
//           onClick={() => {
//             router.push("/login");
//           }}
//         >
//           Sign In
//         </button>
//       )}
//     </div>
//   );
// }

import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const { userId } = useAuth();

  console.log(userId);
  
  return (
    <>
      <div className=" w-screen h-screen text-cblack">
        <div className=" w-full h-full">
          <div className=" w-full h-screen flex flex-col items-center justify-center bg-hero-image">
            <div className=" w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
              <div className=" text-9xl tracking-wide font-display">
                Collaboro
              </div>
              <div className=" text-3xl tracking-widest font-display">
                One Software To Replace Them All!
              </div>
              <div>
                {/* <div
                  onClick={() => {
                    router.push("dashboard");
                  }}
                  className=" px-8 py-3 text-xl border-2 border-transparent rounded-full my-6 bg-cblue bg-white text-black hover:bg-transparent hover:border-white hover:text-white cursor-pointer"
                >
                  Get Started!
                </div> */}

                {userId ? (
                  <div
                    onClick={() => {
                      router.push("dashboard");
                    }}
                    className=" px-8 py-3 text-xl border-2 border-transparent rounded-full my-6 bg-cblue bg-white text-black hover:bg-transparent hover:border-white hover:text-white cursor-pointer"
                  >
                    Get Started!
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      router.push("/sign-in");
                    }}
                    className=" px-8 py-3 text-xl border-2 border-transparent rounded-full my-6 bg-cblue bg-white text-black hover:bg-transparent hover:border-white hover:text-white cursor-pointer"
                  >
                    Login
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

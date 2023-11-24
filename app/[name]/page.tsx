"use client";

import React from "react";

import Link from "next/link";
function Page() {
  return (
    <>
      This Path Does Not Exist, Please Click{" "}
      <Link href="/login" className=" underline">
        Here
      </Link>{" "}
      to head over to Collaboro.
    </>
  );
}
export default Page;

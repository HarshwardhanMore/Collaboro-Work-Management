"use client";
import React from "react";

const OrganizationIdPage = ({ id, title }: any) => {
  return (
    <div className=" w-full h-full flex flex-col">
      <div className=" h-full w-full px-4">
        {id}        
        {title}        
      </div>
    </div>
  );
};

export default OrganizationIdPage;

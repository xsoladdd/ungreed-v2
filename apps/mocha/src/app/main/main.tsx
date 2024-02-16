"use client";

import Link from "next/link";
import React from "react";

const main = () => {
  return (
    <div>
      Hello, <Link href="/auth/login">Click here to login page</Link>
    </div>
  );
};

export default main;

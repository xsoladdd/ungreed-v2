"use server";
import { redirect } from "next/navigation";

const page: React.FC = () => {
  redirect(`/dashboard/ledger`);
};
export default page;

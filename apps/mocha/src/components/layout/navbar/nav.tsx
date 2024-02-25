import Navbar from "./navbar";
import { getServerSession } from "next-auth/next";
import { authOption } from "../../../app/api/auth/[...nextauth]/helper";

export default async function Nav() {
  const session = await getServerSession(authOption);
  return <Navbar session={session} />;
}

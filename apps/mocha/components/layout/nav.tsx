import Navbar from "./navbar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  console.log(`session`, session);
  return <Navbar session={session} />;
}

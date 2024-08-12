import Wrapper from "./Auth/Wrapper";
import Login from "./Auth/Login";
import { getServerSession } from "next-auth";
import { authOption } from "./api/auth/[...nextauth]/helper";
import { redirect } from "next/navigation";
import { SessionProvider } from "next-auth/react";

const page = async () => {
  const session = await getServerSession(authOption);

  if (session) {
    redirect(`/dashboard`);
  }
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
};
export default page;

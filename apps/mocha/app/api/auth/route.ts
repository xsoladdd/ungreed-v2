export const dynamic = "force-dynamic"; // defaults to auto
export async function GET() {
  const x = {
    clientId: process.env.GOOGLE_AUTH_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET as string,
  };
  return Response.json({ message: "Auth" });
}

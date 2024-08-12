export const dynamic = "force-dynamic"; // defaults to auto
export async function GET() {
  console.log(process.env);
  return Response.json({ message: "Auth" });
}

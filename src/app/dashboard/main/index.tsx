import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div className="min-h-screen    bg-red-300">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <div className="mb-8 flex items-center justify-between">
            {" "}
            <div className="w-4 h-4 bg-primary">asd</div>
            <h1 className="text-2xl font-bold text-accent-1">Dashboard</h1>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button variant="outline">Sign Out</Button>
            </form>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-accent-2 p-4">
              <h2 className="mb-2 text-lg font-semibold text-accent-1">
                Authentication Status
              </h2>
              {session ? (
                <div className="space-y-2">
                  <p className="text-accent-2">
                    Signed in as:{" "}
                    <span className="font-medium text-accent-1">
                      {session.user?.email}
                    </span>
                  </p>
                  <p className="text-sm text-accent-3">
                    User ID: {session.user?.id}
                  </p>
                </div>
              ) : (
                <p className="text-accent-2">Not signed in</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

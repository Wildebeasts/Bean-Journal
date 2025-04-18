import { createRootRoute, Outlet, useRouterState } from "@tanstack/react-router";
//import { ModeToggle } from "@/components/shared/ModeToggle";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: LandingRoot,
});

function LandingRoot() {
  const { location } = useRouterState();
  const isJournalRoute = location.pathname.startsWith('/journal');

  return (
    <div className={`min-h-screen ${!isJournalRoute ? 'bg-white dark:bg-transparent' : ''}`}>
      {/* Simple floating header - Conditionally rendered */}

      
      <main>
        <Outlet />
      </main>
      
      {/* Footer - Conditionally rendered */}
      <TanStackRouterDevtools />
    </div>
  );
} 
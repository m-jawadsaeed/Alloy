import { ErrorBoundary } from "react-error-boundary";
import AppRoutes from "./routes/AppRoutes";
import type {
  FallbackProps,
} from "react-error-boundary";

export function ErrorFallback({
  error,
}: FallbackProps) {
  const message =
    error instanceof Error
      ? error.message
      : "Unknown error";

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="rounded-lg border p-6 shadow">
        <h2 className="mb-2 text-xl font-bold text-red-500">
          Something went wrong
        </h2>

        <p>{message}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AppRoutes />
    </ErrorBoundary>
  );
}

export default App;

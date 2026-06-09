import { ErrorBoundary } from "react-error-boundary";
import AppRoutes from "./routes/AppRoutes";

function ErrorFallback() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h2>Something went wrong.</h2>
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

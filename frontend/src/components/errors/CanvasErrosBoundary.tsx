import { ErrorBoundary } from "react-error-boundary";

interface Props {
  children: React.ReactNode;
}

function Fallback() {
  return <div className="rounded-xl border p-8">Canvas crashed.</div>;
}

export default function CanvasErrorBoundary({ children }: Props) {
  return <ErrorBoundary FallbackComponent={Fallback}>{children}</ErrorBoundary>;
}

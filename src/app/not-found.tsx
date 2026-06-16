import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface-950 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-6">
          <span className="text-8xl sm:text-9xl font-bold gradient-text">
            404
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-heading mb-4">
          Page not found
        </h1>
        <p className="text-surface-400 max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25"
        >
          <ArrowLeft size={16} />
          Go Home
        </Link>
      </div>
    </div>
  );
}

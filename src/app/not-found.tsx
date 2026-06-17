import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <span className="text-[10rem] sm:text-[14rem] font-black leading-none outline-text select-none">
            404
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
          Page not found
        </h1>
        <p className="text-[#a3a3a3] max-w-md mx-auto mb-10 text-lg">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-white text-black font-medium text-sm hover:bg-[#e5e5e5] transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

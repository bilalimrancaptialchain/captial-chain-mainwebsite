import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-60 max-w-7xl mx-auto px-20 pb-12">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-active mb-4 font-display">
          Not found
        </h1>
        <div className="space-x-4">
          <Link
            href="/faq"
            className="inline-block bg-teal-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors"
          >
            Back to FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}

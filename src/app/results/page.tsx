"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Results() {
  const searchParams = useSearchParams();
  const score = searchParams.get("score");
  const type = searchParams.get("type");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div
        className={`bg-white bg-opacity-10 p-8 rounded-2xl shadow-lg backdrop-blur-md w-full max-w-2xl text-center transition-all duration-1000 ${
          animate
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-bold text-white mb-6 animate-pulse">
          Quiz Results
        </h2>
        <p className="text-2xl text-white mb-4">
          Your score for the {type} Next.js Quiz:
        </p>
        <p className="text-5xl font-bold text-white mb-8 animate-bounce">
          {score}%
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-purple-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Back to Home
          </Link>
          <Link
            href={`/quiz/${type?.toLowerCase()}`}
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Retake Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}


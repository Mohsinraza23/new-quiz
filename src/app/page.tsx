import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-blue-300 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8 mt-8">
        <Image
          src="/medi.jpeg"
          alt="Quiz Logo"
          width={300}
          height={280}
          className="mx-auto mb-6 animate-bounce"
        />
        <h1 className="text-4xl font-extrabold text-white mb-2 animate-pulse drop-shadow-lg">
          Web & Media 
        </h1>
      </div>
      <div className="bg-white bg-opacity-20 p-8 rounded-3xl shadow-2xl backdrop-blur-xl max-w-lg w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
          Next.js MCQ Quiz
        </h2>
        <div className="flex flex-col space-y-6">
          <Link
            href="/quiz/basic"
            className="bg-white text-purple-500 px-8 py-4 rounded-full font-semibold text-lg md:text-xl hover:bg-purple-200 transition duration-300 ease-in-out transform hover:scale-110 shadow-lg"
          >
            Basic Next.js
          </Link>
          <Link
            href="/quiz/advanced"
            className="bg-white text-blue-500 px-8 py-4 rounded-full font-semibold text-lg md:text-xl hover:bg-blue-200 transition duration-300 ease-in-out transform hover:scale-110 shadow-lg"
          >
            Advanced Next.js
          </Link>
        </div>
        <p className="text-black font-semibold text-center mt-8 animate-fade-in-up text-sm md:text-base">
          Made by Mohsin Raza (Thursday Morning) and Saad Rzaz (Sunday Morning)
        </p>
      </div>
    </div>
  );
}

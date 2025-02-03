// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white border-gray-200 dark:bg-gray-900">
        <a href="/editor">
            <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700">
            <h1>Go to Code Editor</h1>
            </button>
        </a>
      </div >
    </>
  );
}

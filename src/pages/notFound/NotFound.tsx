import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-yellow-100 px-4">
      <div className="text-center max-w-md">
        <p className="text-9xl font-extrabold text-yellow-600">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-gray-900">
          Page not found
        </h1>
        <p className="mt-2 text-lg text-gray-700">
          Sorry, we couldn't find the page you’re looking for.
        </p>
        <div className="mt-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-block rounded-lg bg-yellow-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            ⬅ Go back
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;

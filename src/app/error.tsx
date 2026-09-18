"use client";

import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };

  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold text-red-600">ERROR</p>

        <h1 className="mt-3 text-3xl font-semibold text-slate-900">
          Algo salió mal
        </h1>

        <p className="mt-3 text-slate-600">
          No pudimos completar la operación.
        </p>

        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white"
        >
          Intentar nuevamente
        </button>
      </div>
    </main>
  );
}

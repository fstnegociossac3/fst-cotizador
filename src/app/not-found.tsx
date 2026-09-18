import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="text-center">
        <p className="text-sm font-semibold text-slate-500">ERROR 404</p>

        <h1 className="mt-3 text-3xl font-semibold text-slate-900">
          Página no encontrada
        </h1>

        <p className="mt-3 text-slate-600">
          La página que intentas abrir no existe.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}

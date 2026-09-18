export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-slate-900" />

        <p className="mt-4 text-sm text-slate-600">Cargando...</p>
      </div>
    </main>
  );
}

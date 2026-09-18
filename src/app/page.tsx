import { Container } from "@/shared/components/layout/container";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            FST Negocios
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
            FST Cotizador
          </h1>

          <p className="mt-4 text-slate-600">
            Arquitectura base configurada correctamente.
          </p>
        </div>
      </Container>
    </main>
  );
}

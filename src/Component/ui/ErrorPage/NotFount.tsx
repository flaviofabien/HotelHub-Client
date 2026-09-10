export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-9xl font-bold text-(--color-primary)">
        404
      </h1>

      <h2 className="text-3xl font-bold mt-4">
        Page introuvable
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>

      <a
        href="/"
        className="mt-6 px-6 py-3 rounded-lg text-white bg-(--color-primary) hover:opacity-90"
      >
        Retour à l'accueil
      </a>
    </div>
  );
}
import { MdErrorOutline, MdRefresh } from "react-icons/md";
import { useNavigate } from "react-router-dom";

type Props = {
  refetch?: () => void;
};

export default function ErrorPage({ refetch }: Props) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 text-center">

        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
            <MdErrorOutline className="text-red-500 text-5xl" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800">
          Oups ! Une erreur est survenue
        </h1>

        <p className="text-gray-500 mt-3 leading-6">
          Impossible de charger les données pour le moment.
          Vérifiez votre connexion Internet ou réessayez dans quelques instants.
        </p>

        <div className="flex justify-center gap-3 mt-7">

          {refetch && (
            <button
              type="button"
              onClick={refetch}
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-(--color-primary) text-white hover:opacity-90 transition"
            >
              <MdRefresh className="text-xl" />
              Réessayer
            </button>
          )}

          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Accueil
          </button>

        </div>
      </div>
    </div>
  );
}
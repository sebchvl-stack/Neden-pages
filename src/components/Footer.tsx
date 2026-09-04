import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-edge mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-wrap gap-6 text-sm">
        <Link to="/confidentialite" className="text-secondary hover:underline">
          Politique de confidentialité
        </Link>
        <Link to="/cgu" className="text-secondary hover:underline">
          Conditions d'utilisation
        </Link>
        <div className="w-full text-dim mt-2">
          © {new Date().getFullYear()} Sébastien Cheval.
        </div>
      </div>
    </footer>
  );
}

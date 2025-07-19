import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-primary mb-4 drop-shadow-glow">404</h1>
        <p className="text-2xl sm:text-3xl font-semibold mb-4">Oops! Page not found</p>
        <p className="text-lg text-muted-foreground mb-8">The page you are looking for does not exist or has been moved.</p>
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-lg hover:bg-primary/90 transition-all duration-200"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

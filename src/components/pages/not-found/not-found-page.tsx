import { Link } from "react-router-dom";

export function NotFoundPage() {
    return (
        <div className="flex justify-center">
            <div className="pt-24 text-center">
                <p className="text-2xl">
                    Oops! Page not found.
                </p>
                <p className="mt-3">
                    Go <Link to="/" className="link">home</Link>?
                </p>
            </div>
        </div>
    )
}

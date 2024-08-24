import { Link, useNavigate } from "@remix-run/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Footer component handles navigation
export default function Footer({
  previousLink,
  nextLink,
  backToLessonsLink = "/",
}) {
  const navigate = useNavigate();

  // Function to handle the 'next' arrow
  const handleNextClick = () => {
    if (nextLink) {
      navigate(nextLink); // Navigate to next exercise if it exists
    } else {
      navigate(backToLessonsLink); // Navigate back to lesson list if no more exercises
    }
  };

  return (
    <footer className="flex justify-between items-center p-4 bg-violet-800 text-white fixed bottom-0 left-0 right-0">
      <Link
        to={previousLink || backToLessonsLink}
        className="text-3xl text-white hover:opacity-75">
        <FaArrowLeft />
      </Link>

      <button
        onClick={handleNextClick}
        className="text-3xl text-white hover:opacity-75">
        <FaArrowRight />
      </button>
    </footer>
  );
}

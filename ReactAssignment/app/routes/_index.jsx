import React from "react";
import { Link } from "@remix-run/react";
import lessonsData from "../data/lessons.json";

export default function Index() {
  const lessons = lessonsData.lessons; // Retrieve the list of lessons from JSON

  return (
    <div className="p-6 bg-violet-800 min-h-screen flex items-center justify-center">
      <div className="bg-violet-700 p-8 rounded-lg max-w-xl w-full">
        <h2 className="text-white font-bold text-3xl mb-4">Lessons</h2>

        <p className="text-white text-xl font-light mb-3">
          Select a lesson from the list below to view exercises:
        </p>

        <ul className="space-y-3">
          {lessons.map((lesson) => (
            <li key={lesson.id}>
              <label className="flex items-center bg-violet-500 text-white py-3 px-4 rounded-lg cursor-pointer hover:bg-violet-400 transition">
                <Link
                  to={`/exercise?lessonId=${lesson.id}&exerciseId=${lesson.exercises[0].id}`}
                  className="text-white">
                  {lesson.title}
                </Link>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

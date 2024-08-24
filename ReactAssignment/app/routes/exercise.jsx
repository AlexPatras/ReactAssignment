import React from "react";
import { useSearchParams } from "@remix-run/react";
import lessonsData from "../data/lessons.json";
import Question from "../components/multipleChoicePage/Question";
import VideoPlayer from "../components/videoPage/VideoPlayer";
import Footer from "../components/common/Footer";

export default function ExercisePage() {
  const [searchParams] = useSearchParams();
  const lessonId = searchParams.get("lessonId");
  const exerciseId = searchParams.get("exerciseId");

  // Find the lesson that matches the given Id
  const lesson = lessonsData.lessons.find((l) => l.id === lessonId);
  if (!lesson) return <div>Lesson not found</div>;

  // Find the exercise within the lesson that matches the given Id
  const exercise = lesson.exercises.find((e) => e.id === exerciseId);
  if (!exercise) return <div>Exercise not found</div>;

  // Finde the next and previous exercise
  const nextExercise = lesson.exercises.find(
    (e) => e.id === exercise.next_exercise_id
  );
  const previousExercise = lesson.exercises.find(
    (e) => e.id === exercise.previous_exercise_id
  );

  // Function to render different type of exercise
  const renderExerciseContent = () => {
    if (exercise.resourcetype === "MultipleChoiceExercise") {
      return <Question question={exercise} />;
    } else if (exercise.resourcetype === "VideoExercise") {
      return <VideoPlayer url={exercise.url} />;
    } else {
      return <div>Unknown exercise type</div>;
    }
  };

  return (
    <div className="p-6 bg-violet-800 min-h-screen flex flex-col justify-between">
      <div>{renderExerciseContent()}</div>

      <Footer
        previousLink={
          previousExercise
            ? `/exercise?lessonId=${lessonId}&exerciseId=${previousExercise.id}`
            : null
        }
        nextLink={
          nextExercise
            ? `/exercise?lessonId=${lessonId}&exerciseId=${nextExercise.id}`
            : null
        }
        backToLessonsLink="/"
      />
    </div>
  );
}

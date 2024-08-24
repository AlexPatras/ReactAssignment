export default function VideoPlayer({ url }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-4xl">
        <iframe
          src={url}
          allowFullScreen
          className="w-full h-[500px] "
          title="Video Player"></iframe>
      </div>
    </div>
  );
}

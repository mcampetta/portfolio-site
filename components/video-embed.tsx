type VideoEmbedProps = {
  title: string;
  embedId: string;
};

export function VideoEmbed({ title, embedId }: VideoEmbedProps) {
  return (
    <div className="relative w-full overflow-hidden border border-white/10 bg-black">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${embedId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}

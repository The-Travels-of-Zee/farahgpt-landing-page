function IPhoneVideoFrame({ src }) {
  return (
    <div className="relative h-full overflow-hidden rounded-4xl">
      {/* Video or Image inside screen */}
      <div className="absolute h-full w-[97%] left-[2%] aspect-[9/19.5] z-0 rounded-[5rem] overflow-hidden">{src}</div>

      {/* Frame Image */}
      <img src="/misc/iphone-frame.webp" alt="iphone-frame" className="relative z-10 h-full pointer-events-none" />
    </div>
  );
}

export default IPhoneVideoFrame;

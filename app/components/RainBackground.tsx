export default function RainBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <span className="r left-[15%] h-[140vh] animate-fall delay-0"></span>
      <span className="r left-[38%] h-[120vh] animate-fall delay-[1.5s]"></span>
      <span className="r left-[61%] h-[160vh] animate-fall delay-[3s]"></span>
      <span className="r left-[84%] h-[130vh] animate-fall delay-[4.5s]"></span>
    </div>
  );
}

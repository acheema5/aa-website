import Dither from "@/components/Dither";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="fixed bottom-0 right-0 w-1/2 z-10 px-16 pb-16">
        <h1 className="text-6xl font-bold text-white mb-8">
          Placeholder
        </h1>

        <p className="text-base leading-relaxed text-white mb-4">
          Placeholder is building an AI optimization platform that helps enterprises streamline their artificial intelligence workflows. Our tools reduce costs, improve performance, and provide clear audit trails for AI systems across your organization.
        </p>

        <p className="text-base text-gray-400 font-bold mb-8">
          Currently in Development
        </p>

        <div className="flex gap-6 text-base">
          <a
            href="mailto:contact@placeholder.com"
            className="text-[#f986e4] hover:opacity-60 transition-opacity"
          >
            [ x ] Email
          </a>
        </div>
      </div>

      <div className="fixed top-0 left-0 bottom-0 w-1/2 z-0">
        <Dither
          waveColor={[0.9764705882352941,0.5254901960784314,0.8941176470588236]}
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={0}
          colorNum={4}
          pixelSize={2}
          waveAmplitude={0.15}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
    </div>
  );
}

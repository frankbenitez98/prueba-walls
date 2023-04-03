import Introduction from "@src/components/Introduction";
import Sections from "@src/containers/Sections";

const Home = () => {
  return (
    <>
      <Introduction />
      <div className="flex flex-col gap-y-3 w-full px-5 md:pl-36 md:pr-64 py-14">
        <span className="font-semibold text-gray-600">portfolio</span>
        <span className="font-semibold text-5xl text-gray-800">
          We can help you grow...
        </span>
        <span className="text-gray-500 text-xl ml-24 tracking-widest font-light">
          We do not promise big things. We do great things, because we know that
          in the world of promises you can die of hunger.
        </span>
      </div>
      <Sections />
      <div className="w-full flex flex-col gap-y-1 bg-[#27232C] px-10 lg:px-56 py-14">
        <span className="text-white tracking-widest font-light">about us</span>
        <span className="text-white text-5xl font-semibold tracking-wider">
          We make things better
        </span>
        <span className="text-white tracking-widest font-light text-xl ml-16 mt-4">
          What we do: For more than 20 years, we have realized all kinds of
          audio-visual projects: TV commercials, 3D and 2D animation projects,
          music videos, corporate films, documentaries films, PR events,
          castings, radio commercials, voice over and dubbing, etc. For our
          clients we also offer all kind of media services like: media planning
          and buying, behavioral and demographic research focused on the target
          group, negotiations with media and consulting.
        </span>
      </div>
    </>
  );
};

export default Home;

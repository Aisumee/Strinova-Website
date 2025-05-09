import MapCard from "@/components/ui/MapCard";
import maps from "@/data/maps.json";

const Page = () => {
  return (
    <>
      <h1>Maps</h1>
      <div id="Demolition/Ranked/TDM">
        <h2>Demolition/Ranked/TDM</h2>
        <p>
          Demolition and Ranked is a 5v5 gamemode where P.U.S and Scissors go against eachother, P.U.S defends while
          Scissors attack. Urbino helps both sides.
        </p>
        <p>
          TDM is a 3v3v3v3 gamemode where you just try to get to 50 quicks as quickly as possible. Once a team reaches
          25 kills, there will be zones that spawns and starts killing the characters that enter the zone
        </p>
        {maps.tdm.map((map, index) => (
          <MapCard key={index} map={map} />
        ))}
      </div>
      <hr />
      <div id="Team Arena">
        <h2>Team Arena</h2>
        <p>A 10v10 Gamemode where you try to get to 50 kills the fastest</p>
        {maps.teamArena.map((map, index) => (
          <MapCard key={index} map={map} />
        ))}
      </div>
      <hr />
      <div id="Escort">
        <h2>Escort</h2>
        <p>A Escort style game where one team needs to escort the payload while the other team trys to stop them.</p>
        {maps.escort.map((map, index) => (
          <MapCard key={index} map={map} />
        ))}
      </div>
      <hr />
      <div id="Outbreak">
        <h2>Outbreak</h2>
        <p>
          A survival game where the characters need to survival against unknown beings that act like zombies that
          appeared after an outbreak.
        </p>
        {maps.outbreak.map((map, index) => (
          <MapCard key={index} map={map} />
        ))}
      </div>
    </>
  );
};

export default Page;

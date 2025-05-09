import Link from "next/link";
import "./page.css";

export default function Home() {
  return (
    <>
      <div className="wallpaper-container">
        <div className="wallpaper"></div>
        <div className="wallpaper-items">
          <h1 className="title">STRINOVA</h1>
          <h2 className="subtitle">The New World</h2>
          <a className="download" href="https://www.strinova.com/en-US" target="_blank">
            DOWNLOAD HERE
          </a>
        </div>
      </div>

      <main className="main-content">
        <div className="about-infomation">
          <h2 className="about-title">About</h2>
          <p className="about-text">
            Strinova is a game developed by Day1 Studio of iDreamSky using Unreal Engine 4. It was globally released on
            November 21 2025. Strinova is an anime-style third-person shooterwith many unique agents and Mechanics.
          </p>
        </div>
        <section className="">
          <div className="lore-wallpaper">
            <h2 className="lore-title">Lore</h2>
            <p className="lore-text">
              Following the catastrophe of the old world, humanity opted to migrate to a multidimensional realm known as
              "Strinova", gaining the "Stringify" ability to shift between 3D and 2D forms. This evolution ushered in a
              new Golden Age. Diverging ideologies led to the formation of factions: P.U.S, upholding government order;
              The Scissors, aiming to return to the old world; and Urbino, delving into the new world's potential.
            </p>
          </div>
        </section>
        <section className="m-auto max-w-7xl">
          <h2>Agents</h2>
          <div className="agents-container">
            <div className="card">
              <h2>P.U.S</h2>
              <p>
                The official government of the new world, maintaining order while striving to find a cure for "Collapse
                Syndrome
              </p>
            </div>
            <div className="card">
              <h2>Scissors</h2>
              <p>
                An armed group opposing P.U.S is attempting to seize control of Bablo Crystals to open a portal back to
                the old world.
              </p>
            </div>
            <div className="card">
              <h2>Urbino</h2>
              <p>
                A commercial syndicate controlling the industries of the new world, exploring ways to reach other
                dimensions using crystal energy.
              </p>
            </div>
          </div>
          <Link className="view-more" href="/agents">
            View More
          </Link>
        </section>
      </main>
    </>
  );
}

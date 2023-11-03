import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { useEffect, useState } from "react";
import Loading from "./loading";

function App() {
  type Game = {
    id: number;
    background_image: string;
    rating: number;
    name: string;
  };

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG}`)
    //   .then((res) => res.json())
    //   .then((json) => setData(json.results))
    //   .catch((err) => console.log(err));
    const fetchData = async () => {
      const data = await fetch(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG}`
      );
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const json = await data.json();
      setData(json.results);
      setIsLoading(false);
    };

    fetchData().catch(console.error);
  }, []);

  // console.log(data ? data : "loading...");

  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <main className="m-10 md:m-20  grid grid-cols-4 gap-4">
        <ModeToggle></ModeToggle>
        {isLoading == false ? (
          data.map((game: Game) => {
            return (
              <div
                className="bg-neutral-800 p-4 col-span-4 md:col-span-2 xl:col-span-1 rounded-md"
                key={game.id}
              >
                <h1>{game.name}</h1>
                <p className="font-bold text-sm mb-4">{game.rating}</p>
                <div className="aspect-video relative">
                  <img
                    src={game.background_image}
                    // fill
                    className="object-cover rounded-md"
                    alt={game.name}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <Loading></Loading>
        )}
        {/* <h1 className="m-5">Hello</h1>
        <h2 className="m-5">World</h2> */}
      </main>
    </ThemeProvider>
  );
}

export default App;

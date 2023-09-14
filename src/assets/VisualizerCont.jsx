import { Visualizer } from "./Visualizer";
import { useEffect, useState } from "react";
export default function VisualizerCont({ id }) {
  let token;
  let [song, setSong] = useState({});
  //   useEffect(() => {
  //     fetch("https://accounts.spotify.com/api/token", {
  //       method: "POST",
  //       body: new URLSearchParams({
  //         grant_type: "client_credentials",
  //         client_id: "067513abdb1046dbb2f48158bc855c57",
  //         client_secret: "1eb5d6b1e5f140c9b7e3300b12d93fb2",
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((json) => {
  //         token = json;
  //         console.log(token);
  //       });
  //   }, []);
  useEffect(() => {
    fetch("https://api.spotify.com/v1/audio-analysis/0LEac9zwe3qkQ5CfwYBY0T", {
      headers: {
        Authorization:
          "Bearer  BQC-QrKS4y0bjsregL4UPR5Afz_CGhUP9NO_5xwx3i6Tzfe9aBLkxEfYk6UjDg5RkxGQsy5NMZYdHewc8VwLwAzOtM33oeRcXHSTm2yHiFHYznUfu9Y",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setSong(json);
      });
  }, []);
  console.log(song);
  return Object.entries(song).length ? (
    <>
      <Visualizer song={song}></Visualizer>
    </>
  ) : (
    <></>
  );
}

/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

    const musicInfo = [
        {
          artist: "Daft Punk",
          title: "Homework",
          release_year: 1997,
          formats: ["CD", "Cassette", "LP"],
          gold: true
        },
        {
          artist: "Billy Joel",
          title: "Piano Man",
          release_year: 1973,
          formats: ["CD", "8T", "LP"],
          gold: true
        }
      ];
      
      // prints a message in the browser's dev tools console
      console.log("Hello " + musicInfo[0]["artist"] + " 🌎");
      
      let example1 = document.querySelector("#example1");
      example1.innerHTML = musicInfo[1]["artist"] + " is 900 feet tall.";
      
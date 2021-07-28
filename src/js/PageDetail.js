const apiKey = `?key=${process.env.RAWG_API}`

const PageDetail = (argument = "") => {
  console.log("Page Detail", argument);
  
  const preparePage = () => {
    const cleanedArgument = argument.replace(/\s+/g, "-");


    const fetchGame = (url, argument) => {
      let finalURL = url + argument + apiKey;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
          let { name, released, description, background_image, developers, rating, website, parent_platforms, tags, genres, publishers, ratings_count} = response;

          let articleDOM = document.querySelector(".page-detail .article");

          articleDOM.querySelector("h1.title").innerHTML = name;
          articleDOM.querySelector("p.release-date").innerHTML = `Release Date: ${released}`;
          articleDOM.querySelector(".descriptions").innerHTML = description;
          articleDOM.querySelector("img").src = background_image;
          articleDOM.querySelector("p.devs").innerHTML = `Studio: ${developers.map(x => x.name)}`;
          articleDOM.querySelector("a.web").setAttribute('href', `${website}`);
          articleDOM.querySelector("p.rating").innerHTML = `Rating: ${rating}/${ratings_count} vote`;
          articleDOM.querySelector("p.platform").innerHTML = `Plateform: ${parent_platforms.map(x => x.platform.name)}`;
          articleDOM.querySelector("p.tags").innerHTML = `Tags: ${tags.map(x => x.slug)}`;
          articleDOM.querySelector("p.genre").innerHTML = `Genre: ${genres.map(x => x.name)}`;
          articleDOM.querySelector("p.editor").innerHTML = `Publishers: ${publishers.map(x => x.name)}`;
        });
    };

    fetchGame(`https://api.rawg.io/api/games/`, cleanedArgument);
  };

  

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
          <h1 class="title"></h1>
          <div class="image">
            <img src="" alt="game image">
          </div>
          <div class="release">
            <p class="release-date"></p>
          </div>
          <div class="descriptions">
            <p></p>
          </div>
          <div class="developers">
            <p class="devs"> </p>
          </div>
          <div class="all-tags">
            <p class="tags"> </p>
          </div>
          <div class="game-genre">
            <p class="genre"> </p>
          </div>
          <div class="edit">
            <p class="editor"> </p>
          </div>
          <div class="console">
            <p class="platform"> </p>
          </div>
          <div class="website">
            <a class="web" href=""> GOOOOO</a>
          </div>
          <div class="rate">
            <p class="rating"> </p>
          </div>
          <div class="counting">
            <p class="count"> </p>
          </div>
          <div class="Buy">
            <button class="btn" name="button" href="#">Buy</button>
          </div>
          
        </div>
      </section>
    `;

    preparePage();
  };

  render();

};


export {PageDetail};
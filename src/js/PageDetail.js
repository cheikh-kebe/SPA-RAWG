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
          let { name, released, description, background_image} = response;

          let articleDOM = document.querySelector(".page-detail .article");

          articleDOM.querySelector("h1.title").innerHTML = name;
          articleDOM.querySelector("p.release-date span").innerHTML = released;
          articleDOM.querySelector(".descriptions").innerHTML = description;
          articleDOM.querySelector("img").src = background_image;
          
        });
    };

    fetchGame(`https://api.rawg.io/api/games/`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
          <h1 class="title"></h1>
          <img src="">
          <p class="release-date">Release date : <span></span></p>

          <div class="descriptions">
            <p> </p>
          </div>

        </div>
      </section>
    `;

    preparePage();
  };

  render();

};


export {PageDetail};
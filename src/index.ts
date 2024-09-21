type Tnews = {
    urlToImage: string
    author: string
    source: {
        id: string,
        name:string
    }
    publishedAt: string
    title: string
    description: string
    url: string
}

const apiKey = "2a2201f5330c4ea6a77364d4b63505a2"

async function fetchArticle() {
    const response = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`)
    const obj = await response.json()
    renderSource(obj.articles)
    
}

fetchArticle()

function renderNews(newsArr: Tnews[], idNews:string){
    const news = document.querySelector("#news") as HTMLDivElement;
    if(news instanceof HTMLDivElement){
        news.innerHTML = newsArr.map((item) =>{
            if(item.source.id == idNews || item.source.name == idNews){
                return `
        <div class="news__item">
                <div class="news__meta">
                    <div class="news__meta-photo" style="background-image: url(${item.urlToImage})"></div>
                    <ul class="news__meta-details">
                        <li class="news__meta-author">${item.author || item.source.name}</li>
                        <li class="news__meta-date">${item.publishedAt}</li>
                    </ul>
                </div>
                <div class="news__description">
                    <h2 class="news__description-title">${item.title}</h2>
                    <h3 class="news__description-source">${item.source.name}</h3>
                    <p class="news__description-content">${item.description}</p>
                    <p class="news__read-more">
                        <a href="${item.url}">Read More</a>
                    </p>
                </div>
            </div>`
            }
            return ""
        }).join('')
    }
    
    
}

function renderSource(sourceArr: Tnews[]) {
    const sourceItem = document.querySelector("#sources") as HTMLDivElement;
    const uniqueSources = new Set<string>();
  
    if (sourceItem instanceof HTMLDivElement) {
      sourceItem.innerHTML = sourceArr.map((item) => {
        if (!uniqueSources.has(item.source.name)) {
          uniqueSources.add(item.source.name);
          return `
           <div class="source__item" id="${item.source.id || item.source.name}">
                  <span class="source__item-name">${item.source.name}</span>
              </div>
          `;
        }
        return "";
      }).join('');


      const sourceItems = sourceItem.querySelectorAll(".source__item");
      sourceItems.forEach((item) => {
        item.addEventListener("click", () => {
          const itemId = (item as HTMLElement).id;
          renderNews(sourceArr, itemId)
        });
      });


    }
  }
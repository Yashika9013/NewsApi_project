const apikey ='c48a4bb75c4d470ba006f21511a52c1f'

const blogcontainer = document.getElementById("blog-container");

async function fetchRandomNews(){
    // try and catch is a property in which we try and if an error occur it goes to catch 
    try{
           const apiUrl = `https://newsapi.org/v2/top-headlines?&pageSize=10&apiKey=${apikey}`
           // pageSize means from all the data we want to fetch only 10 
           const response = await fetch(apiUrl )
           // await mai ikk error show ho rha tha usse humne quick fix then async krdia 
          const data = await response.json();
          return data.articles;
    } catch(error){
     console.error("Error fetching random news", error)
     return [];
    }
}

function displayBlogs(articles){
    blogcontainer.innerHTML = ""
    articles.forEach((articles) => {
        const blogCard = document.createElement("div")
        blogCard.classList.add("blog-card") // here we want blog display we have to make a div tag in js  and adding the class of blog-card form html
        const img = document.createElement("img")
        img.src = article.urlToImage //documentation of newsApi there is a property urlToImage
        img.alt = article.title
        const title = document.createElement("h2")
        title.textContent = article.title
        const description = document.cerz
    });
}

async () =>{
    try{
       const articles = await fetchRandomNews()
        displayBlogs(articles);
    } catch(error){
        console.error("Error fetching random news", error);
    }
}
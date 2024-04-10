const MostPopularBlogs = document.getElementById("most-popular-blogs")

const blogs = "../blogs.json"

fetch(blogs)
    .then((respone) => {
		return respone.json();
	})
    .then((data) => {
        data.blogs.map((blogs) => {
            const {title, content, img} = blogs;
            MostPopularBlogs.innerHTML += `
            <div class="card">
                <img src="${img}" alt="">
                <div class="card__content">
                    <p class="card__title">${title}</p>
                    <p class="card__description">${content}</p>
                    <button type="button" class="btn btn-outline-dark btn-sm mt-2">อ่านเพิ่มเติม</button>
                </div>
            </div>

            `
        });
    }
);


const statblogs =  document.getElementById("Stat-blogs")

const statistics = "../statblogs.json"

fetch(statistics)
    .then((respone) => {
        return respone.json();
    })
    .then((data) => {
        data.statistics.map((statistics) => {
            const {totalBlogs, totalViews, Visitor} = statistics;
            statblogs.innerHTML += `
            <div class="card-total">
                <div class="content">
                    <p class="heading">Blogs</p>
                    <p class="para">
                        ${totalBlogs}
                    </p>
                </div>
            </div>

            <div class="card-total">
                <div class="content">
                    <p class="heading">Views</p>
                    <p class="para">
                        ${totalViews}
                    </p>
                </div>
            </div>

            <div class="card-total">
                <div class="content">
                    <p class="heading">Visitor</p>
                    <p class="para">
                        ${Visitor}
                    </p>
                </div>
            </div>
      
          
            `
        });
    }
);



function Darktoggle() {
    var element = document.body;
    element.dataset.bsTheme = 
        element.dataset.bsTheme == "light" ? "dark" : "light"
}





















































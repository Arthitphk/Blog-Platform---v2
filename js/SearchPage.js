const blogCardTemplate = document.querySelector("[data-blog-template]")
const blogCardContainer = document.querySelector("[data-blog-cards-container]")
const searchInput = document.querySelector("[data-search]")
const blogsData =  "../blogs.json"

let blogs = []

searchInput.addEventListener("input", (e) => {
    const value = e.target.value
    blogs.forEach(blog => {
        const isVisible = 
        blog.title.toLowerCase().includes(value) || 
        blog.content.toLowerCase().includes(value) || 
        blog.category.toLowerCase().includes(value)
        blog.element.classList.toggle("hide", !isVisible)
    })
})



 
fetch(blogsData)
  .then(res => res.json())
  .then(data => {
    blogs = data.blogs.map(blog => {
    const Card = blogCardTemplate.content.cloneNode(true).children[0]
    const header = Card.querySelector("[data-header]")
    const body = Card.querySelector("[data-body]")
    const foot = Card.querySelector("[data-foot]")
    header.textContent = blog.title
    body.textContent = blog.content
    foot.textContent = blog.category
    blogCardContainer.append(Card)
    return { title: blog.title,content: blog.content, category: blog.category ,element: Card }
    })
    
});





function Darktoggle() {
    var element = document.body;
    element.dataset.bsTheme = 
        element.dataset.bsTheme == "light" ? "dark" : "light"
}
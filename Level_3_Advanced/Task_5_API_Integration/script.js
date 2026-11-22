const button = document.getElementById("loadBtn");
const postsContainer = document.getElementById("posts");

button.addEventListener("click", function() {

    postsContainer.innerHTML = "";

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {

            data.slice(0, 10).forEach(post => {
                postsContainer.innerHTML += `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <hr>
                `;
            });

        })
        .catch(error => {
            postsContainer.textContent = "Unable to load posts. Please try again.";
            console.error(error);
        });

});
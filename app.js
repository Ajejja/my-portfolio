(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });

    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

    const blogs = document.querySelectorAll('.blog');
    const blogDetailsSection = document.getElementById('blog-details');
    const blogsSection = document.getElementById('blogs');

    blogs.forEach(blog => {
        blog.addEventListener('click', () => {
            const id = blog.getAttribute('data-id');
            const details = document.getElementById(`${id}-details`);

            // Hide all blog detail contents
            document.querySelectorAll('.blog-details-content').forEach(detail => {
                detail.style.display = 'none';
            });

            // Show the selected blog detail
            if (details) {
                details.style.display = 'block';
                blogDetailsSection.style.display = 'block';
                blogsSection.style.display = 'none';
            }
        });
    });

    // Optionally add a back button to go back to the blogs list
    const backButton = document.createElement('button');
    backButton.innerText = 'Back to Blogs';
    backButton.addEventListener('click', () => {
        blogDetailsSection.style.display = 'none';
        blogsSection.style.display = 'block';
    });

    blogDetailsSection.appendChild(backButton);
})();

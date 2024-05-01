function displayTestimonials() {
  let content = document.querySelector("#testimonials-content");
  content.innerHTML = `
                <div class="row-two">
                    <blockquote class="first-quote">
                        <p>“Urban gardens are a reminder that nature is always present, even in the midst of
                            concrete
                            and
                            steel.”</p>
                        <cite>John Doe</cite>
                    </blockquote>
                    <blockquote class="second-quote">
                        <p>“I found solace in my local urban garden during a difficult time. It’s a true gem.”
                        </p>
                        <cite>Jane Smith</cite>
                    </blockquote>
                </div>`;
  displayTestimonialsBtn.textContent = "Hide Testimonials";
}

function hideTestimonials() {
  let content = document.querySelector("#testimonials-content");
  content.innerHTML = "";
  displayTestimonialsBtn.textContent = "See Testimonials";
}

function toggleTestimonials() {
  let content = document.querySelector("#testimonials-content");
  if (content.innerHTML === "") {
    displayTestimonials();
  } else {
    hideTestimonials();
  }
}

let displayTestimonialsBtn = document.querySelector("#testimonials-btn");
displayTestimonialsBtn.addEventListener("click", toggleTestimonials);

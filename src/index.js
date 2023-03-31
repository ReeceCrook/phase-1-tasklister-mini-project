document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form")
  form.addEventListener("submit", function() {
    event.preventDefault()
  });
  form.addEventListener("submit", function(){
    document.getElementById("tasks").textContent = form.querySelector("new-task-description").textContent
  })

});

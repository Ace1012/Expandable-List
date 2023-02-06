const jobTypes = Array.from(document.getElementsByClassName("job-type"));

jobTypes.forEach(jobType => {
  const header  = jobType.getElementsByTagName("header")[0];
  header.addEventListener("click", handleClick);
})

function handleClick(){
  this.parentElement.classList.toggle("open")
}
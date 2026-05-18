let list = document.getElementById("action-list");

list.addEventListener("click", (event) => {
  let target = event.target.closest("li");
  if (!target || !document.contains(target)) return;

  console.log(`current li is: ${target.textContent}`);
});

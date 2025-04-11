function toggleMode() {
  const body = document.body
  const img = document.querySelector("#profile img")

  body.classList.toggle("light")

  const isLight = body.classList.contains("light")

  // Mudar imagem de perfil
  img.setAttribute(
    "src",
    isLight ? "./assets/nini-light.png" : "./assets/fotor-20250410134529.png"
  )

  // Salvar preferência
  localStorage.setItem("theme", isLight ? "light" : "dark")
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem("theme")
  const body = document.body
  const img = document.querySelector("#profile img")
  const knob = document.querySelector(".knob")

  const isLight = savedTheme === "light"

  if (isLight) {
    body.classList.add("light")
    img.setAttribute("src", "./assets/nini-light.png")
  } else {
    body.classList.remove("light")
    img.setAttribute("src", "./assets/fotor-20250410134529.png")
  }
}

// Executar quando carregar a página
document.addEventListener("DOMContentLoaded", loadThemePreference)

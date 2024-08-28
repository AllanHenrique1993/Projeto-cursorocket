function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pega a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute('src','./assets/avatar-light.png')
    img.setAttribute("alt", "Foto de mayk brito sorrindo, com óculos escuro")
  } else {
    img.setAttribute('src','./assets/avatar.png')
    img.setAttribute("alt", "Foto de mayk brito sorrindo")
  }
}
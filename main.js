import './style.css'
import '@picocss/pico'

const formConsultarPerfil = document.querySelector('#LocalizadorPerfis')
const inputPerfil = formConsultarPerfil.pessoa
const divDados = document.querySelector('#dados')


formConsultarPerfil.addEventListener('submit', function(event){
  event.preventDefault()

  ativaLoader(true)
  consultarPerfil(inputPerfil.value)

 
})
async function consultarPerfil(pessoa){
  let response = await fetch(` https://api.github.com/users/${pessoa}`)
  let dadosPerfil = await response.json()


divDados.innerHTML = `
  <span class = "circle-image"> <img src= ${dadosPerfil.avatar_url} /> </span>
  <p> ${dadosPerfil.name} </p>
  <a> <a href= ${dadosPerfil.url}>Perfil no Github </a>

`

ativaLoader(false)

}

function ativaLoader(ativo){
  if(ativo){
  divDados.setAttribute('arial-busy','true')
  divDados.textContent = 'buscando...'
  }else{
    divDados.removeAttribute('aria-busy')
    
  }
}

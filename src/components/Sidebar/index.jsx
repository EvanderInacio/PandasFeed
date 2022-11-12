import { PencilLine } from 'phosphor-react'
import { AsideContainer } from './styles'

export function Sidebar() {
  return (
    <>
      <AsideContainer>
        <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

        <div className="profile">
          <img src="https://avatars.githubusercontent.com/u/72362299?v=4" />

          <strong>Evander Inácio</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar perfil
          </a>
        </footer>
      </AsideContainer>
    </>
  )
}

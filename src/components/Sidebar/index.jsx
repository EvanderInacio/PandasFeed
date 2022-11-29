import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar'
import { AsideContainer } from './styles'

export function Sidebar() {
  return (
    <>
      <AsideContainer>
        <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

        <div className="profile">
          <Avatar src="https://github.com/evanderInacio.png" />

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

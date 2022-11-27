import { ThumbsUp, Trash } from 'phosphor-react'
import { Box, CommentContainer } from './styles'

export function Comment() {
  return (
    <CommentContainer>
      <img src="https://github.com/evanderInacio.png" alt="perfil" />

      <Box>
        <div className="content">
          <header>
            <div className="author">
              <strong>Evander Inacio</strong>

              <time
                title="09 de novembro as 22:41"
                dateTime="2022-11-09 22:41:10"
              >
                Cerca de 1h atrás 
              </time>
            </div>

            <button title="Deletar comentário"><Trash size={24}/></button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp /> Aplaudir <span>20</span>
          </button>
        </footer>
      </Box>
    </CommentContainer>
  )
}

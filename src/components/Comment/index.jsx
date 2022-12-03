import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'
import { Box, CommentContainer } from './styles'

export function Comment({content}) {
  return (
    <CommentContainer>
      <Avatar src="https://github.com/evanderinacio.png" />

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

            <button onClick={handle} title="Deletar comentário"><Trash size={24}/></button>
          </header>

          <p>{content}</p>
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

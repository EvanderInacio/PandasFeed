import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'
import { Box, CommentContainer } from './styles'

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLike() {
    setLikeCount(likeCount + 1)
  }

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

            <button onClick={handleDeleteComment} title="Deletar comentário"><Trash size={24}/></button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLike}>
            <ThumbsUp /> Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </Box>
    </CommentContainer>
  )
}

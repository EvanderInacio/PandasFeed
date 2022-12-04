import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import { Form, Header, PostContainer } from './styles'

export function Posts({ author, publishedAt, content }) {
  const [comments, setComments] = useState(['Muito bom Dev, parabéns!! 👏👏'])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR
    }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')

    setNewCommentText(event.target.value)
  }

  function handleCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeleteOne)
  }

  return (
    <>
      <PostContainer>
        <Header>
          <div className="autor">
            <Avatar src={author.avatarUrl} />
            <div className="info">
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>

          <time
            title={publishedDateFormatted}
            dateTime={publishedAt.toISOString()}
          >
            {publishedDateRelativeToNow}
          </time>
        </Header>

        <div className="content">
          {content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>
            } else if (line.type === 'link') {
              return (
                <p key={line.content}>
                  <a href="#">{line.content}</a>
                </p>
              )
            }
          })}
        </div>

        <Form onSubmit={handleCreateNewComment}>
          <strong>Deixe seu feedback</strong>
          <textarea
            name="comment"
            placeholder="Deixe um comentário"
            value={newCommentText}
            onChange={handleNewCommentChange}
            onInvalid={handleCommentInvalid}
            required
          />

          <footer>
            <button type="submit" disabled={newCommentText.length === 0}>
              Publicar
            </button>
          </footer>
        </Form>

        <div className="commentsList">
          {comments.map(comment => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
            )
          })}
        </div>
      </PostContainer>
    </>
  )
}

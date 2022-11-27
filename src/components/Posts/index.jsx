import { Comment } from '../Comment'
import {Form, Header, PostContainer} from './styles'

export function Posts() {
  return (
    <>
      <PostContainer>
        <Header>
          <div className='autor'>
            <img src="https://github.com/evanderInacio.png" />
            <div className='info'>
              <strong>Evander Inacio</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time title="09 de novembro as 22:41" dateTime="2022-11-09 22:41:10">
            Publicado há 1h
          </time>
        </Header>

        <div className='content'>
          <p>Fala galeraa 👋</p>

          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>

          <p>
            👉 {' '} <a href="">jane.design/doctorcare</a>
          </p>
        </div>

        <Form>
          <strong>Deixe seu feedback</strong>
          <textarea 
            placeholder='Deixe um comentário'
          />

          <footer>
            <button type='submit'>Publicar</button>
          </footer>
        </Form>

        <div className='commentsList'>
          <Comment />
          <Comment />
          <Comment />

        </div>
      </PostContainer>
    </>
  )
}

import {PostContainer} from './styles'

export function Posts() {
  return (
    <>
      <PostContainer>
        <header>
          <div>
            <img src="https://github.com/evanderInacio.png" />
            <div>
              <strong>Evander Inacio</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time title="09 de novembro as 22:41" dateTime="2022-11-09 22:41:10">
            Publicado há 1h
          </time>
        </header>

        <div>
          <p>Fala galeraa 👋</p>

          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>

          <p>
            👉 <a href="">jane.design/doctorcare</a>
          </p>
        </div>
      </PostContainer>
    </>
  )
}

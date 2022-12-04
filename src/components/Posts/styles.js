import styled from 'styled-components'

export const PostContainer = styled.article`
  background: var(--gray-800);
  border-radius: 8px;
  padding: 2.5rem;
  margin-bottom: 2rem;

  .content {
    line-height: 1.6;
    color: var(--gray-300);
    margin-top: 1.5rem;
  }

  p {
    margin-top: 1rem;
  }

  a {
    font-weight: bold;
    color: var(--green-500);
    text-decoration: none;

    &:hover {
      color: var(--green-300);
    }
  }

  .commentsList{
    margin-top: 2rem;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  time {
    font-size: 0.875rem;
    color: var(--gray-400);
  }

  .autor {
    display: flex;
    align-items: center;
    gap: 1rem;

    .info {
      display: flex;
      flex-direction: column;

      strong {
        color: var(--gray-100);
        line-height: 1.6;
      }

      span {
        font-size: 0.875rem;
        color: var(--gray-400);
        line-height: 1.6;
      }
    }

    img {
      width: calc(3rem + 12px);
      height: calc(3rem + 12px);
      border-radius: 8px;
      border: 4px solid var(--gray-800);
      outline: 2px solid var(--green-500);
    }
  }
`

export const Form = styled.form`
  width: 100%;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--gray-600);

  strong {
    line-height: 1.6;
    color: var(--gray-100);
  }

  textarea {
    width: 100%;
    background: var(--gray-900);
    border: 0;
    resize: none;
    height: 6rem;
    padding: 1rem;
    border-radius: 8px;
    color: var(--gray-100);
    line-height: 1.4;
    margin-top: 1rem;
  }

  footer {
    button {
      padding: 1rem 1.5rem;
      margin-top: 1rem;
      border-radius: 8px;
      border: 0;
      background: var(--green-500);
      color: var(--white);
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.1s;

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: var(--green-300);
      }
    } 
  }
`

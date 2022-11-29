import styled from 'styled-components'

export const CommentContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;

  gap: 1rem;

  img {
    margin-top: 1.6rem;
    width: 3rem ;
    height: 3rem;
    border-radius: 8px;
  }
`

export const Box = styled.div`
  flex: 1;

  .content{
    background: var(--gray-700);
    border-radius: 8px;
    padding: 1rem;

    header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      .author{
        display: flex;
        flex-direction: column;

        strong {
          font-size: 0.875rem;
          line-height: 1.6;
        }

        time{
          font-size: 0.75rem;
          line-height: 1.6;
          color: var(--gray-400);
        }
      }

      button {
        background: transparent;
        border: none;
        color: var(--gray-400);
        cursor: pointer;
        line-height: 0;
        border-radius: 2px;

        &:hover{
          color: var(--red-500);
        }
      }
    }

    p {
      margin-top: 1rem;
      color: var(--gray-300);

    }
  }

  footer {
    margin-top: 1rem;

    button {
      background: transparent;
      border: 0;
      color: var(--gray-400);
      cursor: pointer;
      display: flex;
      align-items: center;
      border-radius: 2px;

      &:hover {
        color: var(--green-300);
      }

      svg {
        margin-right: 0.5rem;
      }

      span::before {
        content: "-";
        padding: 0 0.25rem;
      }
    }
  }

  

`

import styled from 'styled-components'

export const Title = styled('h2')`
  margin-top: 1.5rem;
  font-size: 20px;
`

export const Price = styled('p')`
  margin-top: 1.5rem;
  font-size: 30px;
  background-color: #f1f2f3;
  font-weight: 600;
  margin-bottom: 0;
  font-style: italic
  
`

export const BasePrice = styled('p')`
  margin-top: 0;
  text-decoration: line-through;
  text-decoration-color: red;
  text-decoration-thickness: 2px;
  font-size: 20px;
`

export const Content = styled('p')`
  margin-top: 0;
`

export const Container = styled('div')`
  position: relative;
  width: 100%;
  margin: 0 10px;
  text-align: center;
  box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px,
    rgb(60 64 67 / 15%) 0px 2px 6px 2px;
  padding: 25px 0;
`

export const ColContent = styled('div')`
  width: 80%;
  margin: 0 auto;
  border-bottom: 1px solid #f1f2f3;
}
`

export const TextWrapper = styled('div')`
  border-radius: 3rem;
  max-width: 400px;
  min-height: 400px;
`

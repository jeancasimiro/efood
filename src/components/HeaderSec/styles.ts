import styled from 'styled-components'
import { cores } from '../../styles'

export const Back = styled.div`
  height: 180px;
`
export const Container = styled.div`
  display: flex;
  max-width: 1024px;
  margin: 0 auto;
  justify-content: space-between;
`

export const Logo = styled.img`
  position: absolute;
  margin-top: 63px;
`

export const Restaurantes = styled.a`
  margin-top: 82px;
  font-size: 18px;
  font-weight: bold;
  color: ${cores.salmao};
`
export const Carrinho = styled.a`
  cursor: pointer;
  margin-top: 82px;
  font-size: 18px;
  font-weight: bold;
`

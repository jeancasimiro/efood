import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  margin-top: 80px;
`

export const Infos = styled.div`
  border: 0.3mm solid ${cores.salmao};
  background-color: #fff;
  padding: 8px;
  padding: 0;
  overflow: hidden;
  position: relative;
  margin-bottom: 48px;

  img {
    max-width: 100%;
  }

  p {
    font-size: 14px;
    line-height: 19px;
    padding: 8px;
  }
`

export const TituloNota = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;

  h3 {
    padding-left: 8px;
    padding-top: 8px;
  }

  div {
    display: flex;

    img {
      padding: 8px;
    }
  }
`
export const Botao = styled.button`
  background-color: ${cores.salmao};
  color: ${cores.begeClaro};
  font-weight: 500;
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  margin: 8px;
`

export const Tag1 = styled.div`
  background-color: ${cores.salmao};
  color: ${cores.begeClaro};
  font-size: 12px;
  padding: 6px 10px;
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Tag2 = styled.div`
  background-color: ${cores.salmao};
  color: ${cores.begeClaro};
  font-size: 12px;
  padding: 6px 10px;
  position: absolute;
  top: 16px;
  right: 96px;
`
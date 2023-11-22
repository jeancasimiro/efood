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
  height: 398px;

  .capa {
    width: 100%;
    height: 217px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    padding: 8px;
    padding-top: 16px;
  }
`

export const TituloNota = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 18px;
    padding-left: 8px;
    padding-top: 8px;
  }

  div {
    display: flex;

    img {
      max-width: 100%;
      padding: 8px;
      padding-bottom: 0px;
    }
  }
`
export const Botao = styled.button`
  position: absolute;
  text-decoration: none;
  background-color: ${cores.salmao};
  color: ${cores.begeClaro};
  font-weight: 700;
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  bottom: 8px;
  left: 8px;

  a {
    color: ${cores.begeClaro};
  }
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
  right: 83px;
`

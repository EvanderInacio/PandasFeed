import { ContainerHeader } from './styles';
import Logo from '../../assets/logo.svg'
 
export function Header() {
  return (
    <ContainerHeader>
      <img src={Logo} alt="Logo" />
      <h2>Pandas Feed</h2>
    </ContainerHeader>
  )
}

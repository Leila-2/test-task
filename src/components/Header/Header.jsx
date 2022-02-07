import { Container, Logo, LogoText } from "./Header.styled";

export default function Header({ logo }) {
  return (
    <header>
      <Container>
        <Logo src={logo} alt="Logo" />
        <LogoText>Chuck Norris</LogoText>
      </Container>
    </header>
  );
}

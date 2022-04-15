import styled from "styled-components";
import banner from "../assets/media/images/banner.jpg";
import mobile from "../assets/media/images/banner_mobile.jpg";
import NavDesktop from "../ui/navs/NavDesktop";
import NavMobile from "../ui/navs/NavMobile";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  background-image: url(${(props) => (props.isMobile ? mobile : banner)});
  background-repeat: no-repeat;
  background-size: ${(props) => (props.isMobile ? "cover" : "contain")};
  background-position: center;
`;

const Header = ({ isMobile }) => {
  return (
    <Wrapper isMobile={isMobile}>
      {isMobile ? <NavMobile /> : <NavDesktop />}
    </Wrapper>
  );
};

export default Header;

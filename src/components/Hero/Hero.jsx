import { MainContainer } from "../../layouts/MainContainer";
import { HeroSection, HeroTitle, ImgWrap } from "./Hero.styled";

const Hero = () => {
    return (
        <HeroSection>
            <ImgWrap>
                <MainContainer>
                    <div>
                        <HeroTitle className="animate__animated animate__fadeInLeft animate__slower">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Doloremque ipsum provident nesciunt cumque molestiae minus quos
                            recusandae voluptas voluptate nihil. Aliquid cupiditate voluptas
                            corporis reprehenderit autem nostrum voluptatum in cumque!
                        </HeroTitle>
                    </div>
                </MainContainer>
            </ImgWrap>
        </HeroSection>
    );
};

export default Hero;
import { MainContainer } from "../layouts/MainContainer";
import Hero from "../components/Hero/Hero";
import PicturesSection from "../components/PictureSection/PictureSection";
import ToggleThemeBtn from "../components/ToggleThemeBtn/ToggleThemeBtn";
import { MainWrapper } from "../components/ToggleThemeBtn/ToggleThemeBtn.styled";

const Main = () => {
    return (
        <MainWrapper>
            <MainContainer>
                <ToggleThemeBtn />
            </MainContainer>
            <Hero />
            <PicturesSection />
        </MainWrapper>
    );
};

export default Main;
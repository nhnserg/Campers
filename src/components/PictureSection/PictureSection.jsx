import { MainContainer } from "../../layouts/MainContainer";
import CamperSea from "../../assets/pictures/camperSea.jpg"
import CamperForest from "../../assets/pictures/camper-forest.jpg";
import CamperCouple from "../../assets/pictures/camper-couple.jpg";
import { PicturePositionWrap, PictureSection, SectionWrap, TextBlock } from "./PictureSection.styled";

const PicturesSection = () => {
    return (
        <PictureSection>
            <MainContainer>

                <TextBlock>
                    <div>
                        <h2>Welcome to the Camper Rental Application!</h2>

                        <p>
                            About Us
                            We offer a wide selection of campers for rent throughout Ukraine. Our company aims to provide customers with unforgettable adventures and comfortable outdoor experiences.

                            Catalog
                            In our catalog, you'll find campers of various configurations and types that suit your needs and preferences. You can easily filter campers by location, equipment, and type to find the perfect option for your journey.

                            Favorites
                            Save your favorite campers in the "Favorites" section to easily find them later and review additional information.

                            Detailed Information and Booking
                            When selecting a camper, you can view detailed information about it and read reviews from other users. After making your selection, you can book the camper by filling out a convenient booking form.
                        </p>

                        <p id="additional-info">
                            Filtering and Searching
                            For your convenience, you can use filters to search for campers by location, equipment, and type. Text search by name or description of the camper is also available.

                            Start Your Adventure Now!
                            Choose your perfect camper and embark on an unforgettable journey with our camper rental application. Enjoy comfort and freedom of movement with us!

                            Ready for adventure? Start now! 🚐💨
                        </p>
                    </div>
                </TextBlock>
                <SectionWrap>
                    <PicturePositionWrap>
                        <div>
                            <img
                                src={CamperCouple}
                                alt="couple sitting next to campervan"
                                width={200}
                                height={300}
                            />
                            <img
                                src={CamperForest}
                                alt="campervan in the forest"
                                width={200}
                                height={300}
                            />
                            <img
                                src={CamperSea}
                                alt="campervan on the sea"
                                width={200}
                                height={300}
                            />

                        </div>
                    </PicturePositionWrap>
                </SectionWrap>
            </MainContainer>
        </PictureSection >
    );
};

export default PicturesSection;
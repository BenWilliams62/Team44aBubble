import { ExploreContentContainer } from "../../containers/exploreContentContainer";
import { TallBubble } from "../bubbles";
import styles from "./exploreCategories.module.css";

export const ExploreCategories = () => {
  return (
    <>
      <ExploreContentContainer topRow={true} title="All categories">
        <TallBubble
          text="testing"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836848/Bubble/Kendrick_rzjge0.png"
          url="categories/1"
          colour="var(--accent-red)"
        />

        <TallBubble
          text="testing 2"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836849/Bubble/ManU_poggqm.png"
          url="categories/2"
          colour="var(--teal)"
        />

        <TallBubble
          text="testing 3"
          date="July 28th"
          image="https://res.cloudinary.com/ddrwijehn/image/upload/v1660836850/Bubble/Skateboard_l6mtul.png"
          url="categories/3"
          colour="var(--indigo)"
        />

        <TallBubble
          text="testing"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/1"
          colour="var(--orange)"
        />

        <TallBubble
          text="testing 2"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/2"
          colour="var(--blue)"
        />

        <TallBubble
          text="testing 3"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/3"
          colour="var(--green)"
        />
      </ExploreContentContainer>

      <ExploreContentContainer middleRow={true}>
        <TallBubble
          text="testing"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/1"
          colour="var(--accent-red)"
        />

        <TallBubble
          text="testing 2"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/2"
          colour="var(--teal)"
        />

        <TallBubble
          text="testing 3"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/3"
          colour="var(--indigo)"
        />

        <TallBubble
          text="testing"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/1"
          colour="var(--orange)"
        />

        <TallBubble
          text="testing 2"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/2"
          colour="var(--blue)"
        />

        <TallBubble
          text="testing 3"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/3"
          colour="var(--green)"
        />
      </ExploreContentContainer>

      <ExploreContentContainer bottomRow={true} seeMore="See more categories">
        <TallBubble
          text="testing"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/1"
          colour="var(--accent-red)"
        />

        <TallBubble
          text="testing 2"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/2"
          colour="var(--teal)"
        />

        <TallBubble
          text="testing 3"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/3"
          colour="var(--indigo)"
        />

        <TallBubble
          text="testing"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/1"
          colour="var(--orange)"
        />

        <TallBubble
          text="testing 2"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/2"
          colour="var(--blue)"
        />

        <TallBubble
          text="testing 3"
          date="July 28th"
          image="/phoebeBridges.png"
          url="categories/3"
          colour="var(--green)"
        />
      </ExploreContentContainer>
    </>
  );
};
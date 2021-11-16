import React from "react";
import PageLayout from "../components/PageLayout";
import JumboSaleDisplay from "../components/Landing/JumboSaleDisplay";
import styled from "styled-components";
import ProductGrid from "../components/Landing/ProductGrid";
import CategoryGrid from "../components/Landing/CategoryGrid";
import { AllProducts } from "../data/Category";
export default function home() {
  let product1 = [
    AllProducts[0],
    AllProducts[3],
    AllProducts[5],
    AllProducts[8],
    AllProducts[10],
    AllProducts[16],
  ];
  let category1 = [
    {
      name: "Snake Plants",
      description: "Sansevieria Zeylancia",
      img: "http://cokedama.herokuapp.com/media/products/2021/06/30/Picture4.jpg",
      urlQuery: "SnakePlants",
    },
    {
      name: "Money Plants",
      description: "Goldon Pothos",
      img: "http://cokedama.herokuapp.com/media/products/2021/06/30/Picture12.jpg",
      urlQuery: "MoneyPlants",
    },
    {
      name: "Chinese Evergreen Varieties",
      description: "Aglaonema",
      img: "http://cokedama.herokuapp.com/media/products/2021/06/30/Picture13_WN1qRLk.jpg",
      urlQuery: "ChineseEvergreenVarieties",
    },
    {
      name: "Dumb Cane Varieties",
      description: "Diffenbachia*",
      img: "https://i.ibb.co/xYMh8r0/CIP-P004-A0.jpg",
      urlQuery: "DumbCaneVarieties",
    },
    {
      name: "Etc.",
      description: "All Other Products",
      img: "https://i.ibb.co/fSC6M90/CIP-P005-B.jpg",
      urlQuery: "Etc",
    },
    {
      name: "GROW a little love with little PLANTS",
      img: "http://cokedama.herokuapp.com/media/products/2021/06/28/stringgarden1.jpg",
      urlQuery: "",
    },
  ];
  let grid1 = [AllProducts[2], AllProducts[1], AllProducts[6]];
  let grid2 = [AllProducts[5], AllProducts[4], AllProducts[3]];
  return (
    <PageLayout type={"HOME"}>
      <JumboSaleDisplay
        url="/category"
        img="https://i.ibb.co/SdwwgF3/shutterstock-1848217732.png"
        First
      />
      <div className="vision-section">
        <h2>Our Company's Mission</h2>
        <div className="vision-row1">
          <div className="vision-box">
            <img src={"Awareness.png"} />
            <h2>Awareness</h2>
            <p>
              Create a favorable perception of interior plantscaping and
              increase awareness of careers working with plants.
            </p>
          </div>
          <div className="vision-box">
            <img src="Education.png" />
            <h2>Education</h2>
            <p>
              Engage and excite students and professionals in interior design
              fields about horticulture.
            </p>
          </div>
          <div className="vision-box">
            <img src="Empower.png" />
            <h2>Empowerment</h2>
            <p>
              Empower creative moms by creating and popularizing business
              opportunities.
            </p>
          </div>
          <div className="vision-box">
            <img src="Partnership.png" />
            <h2>Partnerships</h2>
            <p>
              Cultivate and strengthen partnerships and collaborations, while
              diversifying and broadening the base of advocates and supporters.
            </p>
          </div>
        </div>
        <div className="vision-row2">
          <div className="vision-box">
            <img src="Eco Friendly.png" />
            <h2>Eco-Friendly</h2>
            <p>
              Popularize eco-friendly concepts in the interior design field by
              advocating the use of recycled materials.
            </p>
          </div>
          <div className="vision-box">
            <img src="Resource Dev.png" />
            <h2>Resource Development</h2>
            <p>
              Create educational resources such as plant databases, valuable
              tips, and guides for the community.
            </p>
          </div>
          <div className="vision-box">
            <img src="Workforce.png" />
            <h2>Workforce Developement</h2>
            <p>
              Increase the skilled workforce in plantscaping and develop a
              strong pipeline of future talent.
            </p>
          </div>
        </div>
      </div>
      <MainCont>
        <ProductGrid title={"Categories"} type={"CATEGORY"} data={category1} />
        <div className="goal">
          <div className="goalText">
            <h2>Our Goal</h2>
            <p>
              Our mission is to promote eco-friendly interior designing and
              inspire people to pursue careers working with plants while finding
              meaningful creative work to financially support them and their
              families.
            </p>
          </div>
        </div>
        <JumboSaleDisplay
          img="https://i.ibb.co/mtJ73vD/shutterstock-1848217774.jpg"
          url="/category?type=Snake+Plants"
          title="Slogan 1"
          text="Subtitle"
        />
        <JumboSaleDisplay
          img="https://i.ibb.co/JF0N6QZ/Shop-Image.jpg"
          url="/category?type=Rugs"
          title="Slogan 2"
          text="Subtitle"
        />
      </MainCont>
    </PageLayout>
  );
}
const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
  justify-content: center;
  padding: 0 24px;
  @media ${(props) => props.theme.laptop} {
  }
`;

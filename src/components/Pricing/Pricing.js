import React from "react";
import { Button } from "../../globalStyles";
import { GiFoodChain, GiFoodTruck, GiOpenedFoodCan } from "react-icons/gi";
import { FaDeviantart, FaAcquisitionsIncorporated } from "react-icons/fa";
import { GrRestaurant } from "react-icons/gr";
import { FcFeedIn } from "react-icons/fc";
import { SiIfood } from "react-icons/si";
// import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from "react-icons/lib";
import Modal from "../Modal/Modal";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 50 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Best restaurants</PricingHeading>
          <PricingContainer>
            <PricingCard to="/products">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GrRestaurant />
                </PricingCardIcon>
                <PricingCardPlan>Village Square</PricingCardPlan>
                <PricingCardCost>Rs2499.99</PricingCardCost>
                <PricingCardLength>per person</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Rating:🌟🌟🌟🌟🌟</PricingCardFeature>
                  <PricingCardFeature>Riview: 40K+</PricingCardFeature>
                  <PricingCardFeature>Trusted✅</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>
                  Check Menu
                </Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/products">
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaDeviantart />
                </PricingCardIcon>
                <PricingCardPlan>Le Bernardin</PricingCardPlan>
                <PricingCardCost>Rs799.99</PricingCardCost>
                <PricingCardLength>per person</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Rating:🌟🌟🌟</PricingCardFeature>
                  <PricingCardFeature>Review: 6k+</PricingCardFeature>
                  <PricingCardFeature>Trusted✅</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Check Menu</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/products">
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaAcquisitionsIncorporated />
                </PricingCardIcon>
                <PricingCardPlan>Zahav</PricingCardPlan>
                <PricingCardCost>Rs1299.99</PricingCardCost>
                <PricingCardLength>per person</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Rating:🌟🌟🌟🌟</PricingCardFeature>
                  <PricingCardFeature>Riview: 12K+</PricingCardFeature>
                  <PricingCardFeature>Trusted✅</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Check Menu</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/products">
              <PricingCardInfo>
                <PricingCardIcon>
                  <FcFeedIn />
                </PricingCardIcon>
                <PricingCardPlan>Gramercy Tavern</PricingCardPlan>
                <PricingCardCost>Rs899.99</PricingCardCost>
                <PricingCardLength>per person</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Rating:🌟🌟🌟</PricingCardFeature>
                  <PricingCardFeature>Review:2K+</PricingCardFeature>
                  <PricingCardFeature>Trusted✅</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Check Menu</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
        <PricingWrapper>
          <PricingContainer>
            <PricingCard to="/products">
              <PricingCardInfo>
                <PricingCardIcon>
                  <SiIfood />
                </PricingCardIcon>
                <PricingCardPlan>Le Coucou</PricingCardPlan>
                <PricingCardCost>Rs1999.99</PricingCardCost>
                <PricingCardLength>per person</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Rating:🌟🌟🌟🌟🌟</PricingCardFeature>
                  <PricingCardFeature>Review:20K+</PricingCardFeature>
                  <PricingCardFeature>Trusted✅</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Check Menu</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/products">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiFoodChain />
                </PricingCardIcon>
                <PricingCardPlan>Alinea</PricingCardPlan>
                <PricingCardCost>Rs.1499.00</PricingCardCost>
                <PricingCardLength>per person</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Rating:🌟🌟🌟🌟🌟</PricingCardFeature>
                  <PricingCardFeature>Review: 10K+</PricingCardFeature>
                  <PricingCardFeature>Trusted✅</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Check Menu</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/products">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiFoodTruck />
                </PricingCardIcon>
                <PricingCardPlan>Per Se</PricingCardPlan>
                <PricingCardCost>Rs359.00</PricingCardCost>
                <PricingCardLength>per person</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Rating: 🌟🌟</PricingCardFeature>
                  <PricingCardFeature>Review: 1K+</PricingCardFeature>
                  <PricingCardFeature>Trusted✅</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Check Menu</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/products">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiOpenedFoodCan />
                </PricingCardIcon>
                <PricingCardPlan>Quince</PricingCardPlan>
                <PricingCardCost>Rs.599.99</PricingCardCost>
                <PricingCardLength>per person</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Rating: 🌟🌟🌟🌟</PricingCardFeature>
                  <PricingCardFeature>Review: 5K+</PricingCardFeature>
                  <PricingCardFeature>Trusted✅</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Check Menu</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;

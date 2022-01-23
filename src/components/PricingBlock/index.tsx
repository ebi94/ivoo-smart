import { withTranslation } from "react-i18next";
import { Container } from "./styles";
import BlockPricing from "../BlockPricing";
import PricingContent from "../../content/PricingContent.json";

const PricingBlock = () => {
  return (
    <Container id="harga">
        {typeof PricingContent === "object" &&
          PricingContent.map((item: any, id: number) => {
            return (
              <BlockPricing 
                key={id}
                title={item.title}
                price={item.price}
                basePrice={item.basePrice}
                content={item.content}
              />
            );
          })
        }
    </Container>
  );
};

export default withTranslation()(PricingBlock);

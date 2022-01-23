import { withTranslation } from "react-i18next";
import { Container, TextWrapper, Title, Content, Price, BasePrice, ColContent } from "./styles";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";


interface Props {
  title: string;
  content: any;
  price: string;
  basePrice: string;
  t: any;
}

const BlockPricing = ({ title, content, price, basePrice, t }: Props) => {
  return (
    <Container>
      <Title>{t(title)}</Title>
      <Price>{price}</Price>
      <BasePrice>{basePrice}</BasePrice>
      <TextWrapper>
        {typeof content === "object" &&
          content.map((item: any, id: number) => {
            return (
              <ColContent key={id}>
                <SvgIcon src={item.icon} width="16px" height="auto" />
                <Content>{t(item.title)}</Content>
              </ColContent>
            );
          })
        }
      </TextWrapper>
      <a href="https://wa.me/6287804031850?text=Halo saya tertarik dengan Ivoo Smart System. Bisa dijelaskan untuk detailnya?" target="_blank" rel="noreferrer">
        <Button>
          Pesan Sekarang
        </Button>
      </a>
    </Container>
  );
};

export default withTranslation()(BlockPricing);

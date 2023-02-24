import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import SmartDoorlockContent from "../../content/SmartDoorlockContent.json";
import CctvOutdoorContent from "../../content/CctvOutdoorContent.json";
import CctvIndoorContent from "../../content/CctvIndoorContent.json";
import ListContent from "../../content/ListContent.json";
import PacketContent from "../../content/PacketContent.json";
import ContactContent from "../../content/ContactContent.json";
import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection, Content, ContentWrapper } from "../../components/MiddleBlock/styles";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const WhatsappChatBlock = lazy(() => import("../../components/WhatsappChatBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="ivoo-smart-lock.png"
        widthIcon="300px"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      {/* <PricingBlock /> */}
      <ContentBlock
        type="left"
        title={SmartDoorlockContent.title}
        content={SmartDoorlockContent.text}
        section={SmartDoorlockContent.section}
        icon="ivoo-smart-lock.png"
        widthIcon="400px"
        id="produk"
      />
      <ContentBlock
        type="right"
        title={CctvOutdoorContent.title}
        content={CctvOutdoorContent.text}
        icon="cctv-outdoor.png"
        id="cctvoutdoor"
      />
      <ContentBlock
        type="left"
        title={CctvIndoorContent.title}
        content={CctvIndoorContent.text}
        icon="cctv-indoor.png"
        id="cctvindoor"
      />
      <ContentBlock
        type="right"
        title={PacketContent.title}
        content={PacketContent.text}
        button={PacketContent.button}
        icon="paket2.png"
        id="paket"
      />
      <ContentBlock
        type="right"
        title={ListContent.title}
        content={ListContent.text}
        icon="logo-ivoo-circle.png"
        widthIcon="400px"
        id="about"
      />
      <MiddleBlockSection>
        <Slide triggerOnce direction="up">
          <Row justify="center" align="middle">
            <ContentWrapper>
              <Col lg={24} md={24} sm={24} xs={24}>
                <h6>Promo</h6>
                <Content>
                  <img src={`/img/png/promo-1.jpeg`} alt="Promo" width={'auto'} height={780} style={{marginBottom: 50}} />
                  <img src={`/img/png/promo-2.jpeg`} alt="Promo" width={'auto'} height={550} />
                </Content>
              </Col>
            </ContentWrapper>
          </Row>
        </Slide>
      </MiddleBlockSection>
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
      <WhatsappChatBlock />
    </Container>
  );
};

export default Home;

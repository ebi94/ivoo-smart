import { useState } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  FooterContainer,
  Language,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          {/* <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Kontak Kami")}</Language>
              <Para>
                {t(`Apakah anda memiliki pertanyaan ?`)}
              </Para>
              <a href="mailto:info@ivoosmart.com">
                <Chat>{t(`info@ivoosmart.com`)}</Chat>
              </a>
              <a href="tel:+6221 - 123123">
                <Chat>{t(`+6221 - 123123`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Kebijakan Privasi")}</Title>
              <Large to="/" left="true">
                {t("Kebijakan Privasi")}
              </Large>
              <Large left="true" to="/">
                {t("Syarat dan Ketentuan")}
              </Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large left="true" to="/">
                {t("Support Center")}
              </Large>
              <Large left="true" to="/">
                {t("Customer Support")}
              </Large>
            </Col>
          </Row> */}
          <Row justify="space-between">
            <Col lg={6} md={6} sm={12} xs={12}>
              <Language>{t("Kontak Kami")}</Language>
              <Para>
                {t(`Apakah anda memiliki pertanyaan ?`)}
              </Para>
              <a href="mailto:info@ivoosmart.com">
                <Chat>{t(`info@ivoosmart.com`)}</Chat>
              </a>
              {/* <a href="tel:+6287804031850">
                <Chat>{t(`+62 878-0403-1850`)}</Chat>
              </a> */}
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Language>{t("Alamat")}</Language>
              <Para>Ruko La Fenza Blok R4 No. 8</Para>
              <Para>Villa Mutiara Cikarang</Para>
              <Para>Ciantra, Cikarang Selatan</Para>
              <Para>Bekasi 17530</Para>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Title>{t("Menu")}</Title>
              <Large left="true" onClick={() => scrollTo("harga")}>
                {t("Harga")}
              </Large>
              <Large left="true"  onClick={() => scrollTo("produk")}>
                {t("Produk")}
              </Large>
              <Large left="true"  onClick={() => scrollTo("about")}>
                {t("Tentang Kami")}
              </Large>
              <Large left="true"  onClick={() => scrollTo("contact")}>
                {t("Hubungi Kami")}
              </Large> 
              {/* <Title>{t("Company")}</Title>
              <Large left="true" to="/">
                {t("About")}
              </Large>
              <Large left="true" to="/">
                {t("Blog")}
              </Large>
              <Large left="true" to="/">
                {t("Press")}
              </Large>
              <Large left="true" to="/">
                {t("Careers & Culture")}
              </Large> */}
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              {/* <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer> */}
              <Title>{t("Kebijakan Privasi")}</Title>
              <Large to="/" left="true">
                {t("Kebijakan Privasi")}
              </Large>
              <Large left="true" to="/">
                {t("Syarat dan Ketentuan")}
              </Large>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo-ivoo.png"
                  aria-label="homepage"
                  width="150px"
                  height="auto"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://facebook.com/ivoosmart"
                src="facebook.svg"
              />
              <SocialLink
                href="https://twitter.com/ivoosmart"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.tiktok.com/ivoosmart"
                src="tiktok.svg"
              />
              <SocialLink
                href="https://instagram.com/ivoosmart/"
                src="instagram.svg"
              />
              <SocialLink
                href="https://youtube.com/ivoosmart/"
                src="youtube.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);

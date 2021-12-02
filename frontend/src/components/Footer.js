import styled from 'styled-components';
import Link from 'next/link';

const FooterSection = styled.div`
  background: #b3cde0;
  color: #23272a;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>NUS Fintech Society 2021 All Rights Reserved</p>
    </FooterSection>
  );
};

export default Footer;
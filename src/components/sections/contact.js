import React, { useEffect, useRef } from 'react';
import { SocialHorizontal } from '@components';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { StyledPic } from '../picture';
import resume from '../../images/resume24.pdf'; // Update year number as you update resume

const StyledContactSection = styled.section`
  max-width: 900px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .inner {
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading">Get In Touch</h2>

      <p>Here you can find ways to contact me via my social media!</p>

      <a href={resume} target="_blank" rel="noopener noreferrer">
        Click here to download my resume!
      </a>

      <br></br>

      <SocialHorizontal />

      <br></br>
      <br></br>

      <div className="inner">
        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/bike.png" //TODO: replace this image (football w/ friends image?)
              quality={100}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/grad.png" // TODO: Replace, or say I'm the uncle of these kitties or something
              quality={100}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Cats"
            />
          </div>
        </StyledPic>
      </div>
    </StyledContactSection>
  );
};

export default Contact;

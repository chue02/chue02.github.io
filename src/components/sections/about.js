import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { StyledPic } from '../picture';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            {/*TODO: hyperlink About me to itself? */}
            <p>
              Welcome to my own section of the internet! I hope this website gets you to know me
              better, and what's about better place to start than my <i>About Me</i>?
            </p>

            <p>
              I was born and raised on Long Island, New York. In high school I took a whopping{' '}
              <b>thirteen</b> AP courses. Whenever someone asks me for a fun fact during
              icebreakers, I like to tell them that as a little flex (I also tend to follow up by
              telling them I did not get much sleep then).
            </p>

            <p>
              My efforts paid off as they got me admitted to what is
              <a
                href="https://www.usnews.com/education/best-colleges/the-short-list-college/articles/colleges-that-received-the-most-applications"
                target="_blank"
                rel="noreferrer"
              >
                statistically the most coveted college in the country:
              </a>{' '}
              <b>the University of California, Los Angeles.</b> I took the opportunity and privilege
              to venture across the country to obtain my degree in Mathematics of Computation.
            </p>

            <p>
              The cool thing about my major is it allowed me to take courses in math, computer
              science, and statistics. I took advantage of it's versatiility by enrolling in a
              variety classes to learn an assortment of interesting and valuable skills such as:
              <ul>
                <li>Machine learning</li>
                <li>Data mining</li>
                <li>Data structures & algorithms</li>
                <li>Actuarial science & financial mathematics </li>
                <li>Optimization</li>
                <li>
                  <b>Critical thinking</b> (the most invaluable)
                </li>
                <li>And much more!</li>
              </ul>
            </p>

            <p>
              Right now I'm wrapping up my final academic term at UCLA. After graduation I will be
              purusing a career using the skills I've learned. Currently I'm interested in data
              analysis in particular, as I'm intrigued in using data to solve problems and to answer
              questions. I'm interested in using data to discover and answer mysteries in football
              (go Giants). I'd like to share some of my findings and use statistics to provide
              quantifiable insight to intriguing hypotheses.
            </p>

            <p>
              In addition to football, I'm passionate in cinema, rock music, biking, fitness, and
              coffee making. I often go on long tangents with my friends about various movies,
              albums, and my trials and tribulations in my fitness journey. I figured why not
              publish some of my opinions so my friends can read it in structured and organized
              text?
            </p>
            {/* Add hyperlink to blog categories */}
            <p>
              In addition to providing information about me, I'm hoping this website can showcase
              the two sides of my brain. The findings my analytical and technical side (or left
              brain) discover will be posted as blogs in the <b>Analytics</b> category. The{' '}
              <b>Opinions</b> category will consist of blogs my creative side (or right brain) finds
              intriguing. I hope you enjoy the content here!
            </p>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me-ramen.png" // TODO: update image
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
          <br /> <br />
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/kitties.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Cats"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;

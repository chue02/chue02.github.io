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
              Welcome to my personal share of the internet! I hope this website gets you to know me
              better, and where's about better place to start than my <i>About Me</i>?
            </p>

            {/*TODO: AFTER graduation, change all college-related stuff to be past-tense. */}
            <p>
              I was born and raised in Long Island, New York. After high school, I ventured across
              the country for college, <b>the University of California, Los Angeles.</b> Here I am
              obtaining my Bachelor of Science in Mathematics of Computation.
            </p>

            <p>
              The cool thing about my major is it allows me to enroll courses in math, computer
              science, and statistics. I took advantage of it's versatiility to learn a variety of
              valuable skills such as:
              <ul>
                <li>Machine learning</li>
                <li>Data mining</li>
                <li>Data structures & algorithms</li>
                <li>Actuarial science & financial mathematics </li>
                <li>Mathematical optimization</li>
                <li>
                  <b>Problem solving and critical thinking</b> (the most valuable)
                </li>
                <li>And much more!</li>
              </ul>
            </p>

            <p>
              Right now I am wrapping up my final academic term at UCLA. After graduation, my goal
              is to pursue a career that intersects my skillset with my interests. I'm currently
              partial to jobs involving data analysis, particularly ones related to football
              statistics (go Giants), as I am drawn by the potential to use data to solve problems,
              answer questions, and discover new strategies within the sport.
            </p>

            <p>
              Other than analytics, some of my passions are cinema, rock music, photography, biking,
              fitness, and coffee brewing. I often go on lengthy discussions with my friends about
              these subjects, such as reviewing the latest movie I saw or sharing my progress in my
              fitness journey. Why not publish my opinions somewhere so my friends can access them
              on their own demand and with nicely structured presenteation?
            </p>

            {/* Add hyperlinks to blog categories */}
            <p>
              In addition to providing background information about myself, I'm hoping this website
              can showcase the two sides of my brain. The findings my &quot;left brain&quot; (i.e.
              the technical side) discovers will be posted as blogs in the <b>Analytics</b>{' '}
              category. The <b>Opinions</b> category will consist of blogs about topics my
              &quot;right brain&quot; (or the creative side) finds intriguing.
            </p>

            <p>Thanks for reading, I hope you enjoy my content here!</p>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/beach.png" // TODO: update image
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
              src="../../images/dinnerSF.png"
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
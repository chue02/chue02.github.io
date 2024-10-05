import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';
import Skillset from './skillset';
import { graphql } from 'gatsby';
import CoursesTable from './courses';

const StyledMainContainer = styled.main`
  & > header {
    margin-bottom: 100px;
    text-align: center;

    a {
      &:hover,
      &:focus {
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>")
            20 0,
          auto;
      }
    }
  }

  footer {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    margin-top: 20px;
  }
`;

const SkillPage = ({ location, data }) => {
  const courses = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <Helmet title="Skills" />

      <StyledMainContainer>
        <header>
          <h1 className="big-heading">Skills and Courses</h1>
          <h3 className="subtitle">
            <p>
              This page contains detalied lists of my skills and the courses I've taken at UCLA!
            </p>
          </h3>
        </header>

        <Skillset />

        <CoursesTable data={courses} />
      </StyledMainContainer>
    </Layout>
  );
};

SkillPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default SkillPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/courses/" } }
      sort: { fields: [frontmatter___subject], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            subject
            no
            name
            term
            external
          }
          html
        }
      }
    }
  }
`;

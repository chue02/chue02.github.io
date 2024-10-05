import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Icon } from '@components/icons';

const categoryColors = {
  CS: { color: '#32a838', fontWeight: 'bold' },
  Math: { color: '#328da8', fontWeight: 'bold' },
  Stats: { color: '#a33441', fontWeight: 'bold' },
};

/*
const TableContainer = styled.div`
  overflow-x: auto; // Enables horizontal scrolling on smaller screens 
`; 
*/

const StyledTableContainer = styled.table`
    width: 100%;
    border-collapse: collapse;

    .hide-on-mobile {
      @media (max-width: 768px) {
        display: none;
      }
    }
    tbody tr {
      &:hover,
      &:focus {
        background-color: var(--light-navy);
      }
    }
    th,
    td {
      padding: 10px;
      text-align: left;
      &:first-child {
        padding-left: 20px;
        @media (max-width: 768px) {
          padding-left: 10px;
        }
      }
      &:last-child {
        padding-right: 20px;
        @media (max-width: 768px) {
          padding-right: 10px;
        }
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }
    tr {
      cursor: default;
      td:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      td:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }
    td {
      &.year {
        padding-right: 20px;
        @media (max-width: 768px) {
          padding-right: 10px;
          font-size: var(--fz-sm);
        }
      }
      &.title {
        padding-top: 15px;
        padding-right: 20px;
        color: var(--lightest-slate);
        font-size: var(--fz-xl);
        font-weight: 600;
        line-height: 1.25;
      }
      &.category {
        padding-top: 15px;
        padding-right: 20px;
        color: var(--lightest-slate);
        font-size: var(--fz-xl);
        font-weight: 600;
        line-height: 1.25;
      }
      &.company {
        font-size: var(--fz-lg);
        white-space: nowrap;
      }
      &.tech {
        font-size: var(--fz-xxs);
        font-family: var(--font-mono);
        line-height: 1.5;
        .separator {
          margin: 0 5px;
        }
        span {
          display: inline-block;
        }
      }
      &.links {
        min-width: 100px;
        div {
          display: flex;
          align-items: center;
          a {
            ${({ theme }) => theme.mixins.flexCenter};
            flex-shrink: 0;
          }
          a + a {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;

const CoursesTable = () => {
  const revealCourses = useRef([]);

  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/courses/" } }
            sort: { fields: [frontmatter___date], order: DESC }
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
              }
            }
          }
        }
      `}
      render={data => {
        const courses = data.allMarkdownRemark.edges;

        return (
          <StyledTableContainer>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Number</th>
                <th>Name</th>
                <th>Term</th>
                <th>Link</th>
              </tr>
            </thead>

            <tbody>
              {courses.map(({ node }, index) => {
                const { subject, no, name, term, external } = node.frontmatter;
                return (
                  <tr key={index} ref={el => (revealCourses.current[index] = el)}>
                    <td style={categoryColors[subject] || { fontWeight: 'bold' }}>{subject}</td>
                    <td className="no">{no}</td>
                    <td className="name">{name}</td>
                    <td className="term">{term}</td>
                    <td className="links">
                      <div>
                        {external && (
                          <a href={external} aria-label="External Link">
                            <Icon name="External" />
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </StyledTableContainer>
        );
      }}
    />
  );
};

CoursesTable.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CoursesTable;

import React from 'react'
import {graphql, StaticQuery} from 'gatsby';
import styled from "styled-components";

const LogoWrapper = styled.div`
margin: auto 20px 0 0;
max-height: 100%;
`

const LogoImage = styled.img`
color: white;
margin: auto 0;
max-height: 100%;
`
const Logo = () => (
    <StaticQuery query={graphql` {
        allWordpressWpLogo{
          edges{
            node{
              id
              url{
                      source_url
              }
            }
          }
        }
        
      }
    `}  render={props => (
        <LogoWrapper>
            <LogoImage src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt="logo"/>
        </LogoWrapper>
    )}/>
);

export default Logo;
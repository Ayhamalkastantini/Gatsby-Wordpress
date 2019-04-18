import React from 'react'
import {graphql, StaticQuery,Link} from 'gatsby';
import styled from "styled-components";

const PortfolioItemWapper = styled.div`
    display: flex;
    justify-content: center;
`


const PortfolioItem = styled.div`
    width: 300px;
    border: 1px solid #efefef;
    padding: 16px;
    margin: 16px;
`

const PortfolioImage = styled.img`
    max-width: 100%;
`

const PortfolioItems = () => {
    return (
        <StaticQuery query={graphql`
            {
                allWordpressWpPortfolio{
                edges{
                    node{
                    id
                    title
                    slug
                    excerpt
                    content
                    featured_media{
                        source_url
                    }
                    }
                }
                }
            }
        `}
        render = {props =>
            <PortfolioItemWapper>
            {props.allWordpressWpPortfolio.edges.map(portfolioItems => (
            <PortfolioItem key={portfolioItems.node.id}>
                <h2>
                    {portfolioItems.node.title}
                </h2>
                <PortfolioImage src={portfolioItems.node.featured_media.source_url} alt={portfolioItems.node.title}/>
                <div dangerouslySetInnerHTML={{__html: portfolioItems.node.excerpt}}/>
                <Link to={`gatsby/portfolio/${portfolioItems.node.slug}`}>Read more</Link>
            </PortfolioItem>
            ))}
            </PortfolioItemWapper>
    }
        />
    );
}

export default PortfolioItems;
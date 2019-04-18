import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import styled from "styled-components";

import SiteInfo from './site-info';
import Logo from './logo';

const MainMenuWrapper =styled.div`
    display: flex;
    background-color: rgb(3,27,77);

`

const MainMenuInner = styled.div`
    max-width: 960px;
    margin: 0 auto;
    display:flex;
    width: 960px;
    height: 100%;
`
const MainItem  = styled(Link)`
    color: white;
    display: inline-block;
    padding: 32px 16px;

`
const MainMenu = () =>(
    <StaticQuery
    query={graphql`
        {
            allWordpressWpApiMenusMenusItems(filter: {
            name:{
            eq: "Main Menu"
            }
        }){
            edges{
            node{
                items{
                title
                object_slug
                }
            }
            }
        }
        }
    `}
    render={props => (
        <MainMenuWrapper>
            <MainMenuInner>
            <Logo/>
            <SiteInfo/>
             <div>
                {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                    <MainItem to={item.object_slug} key={item.title}>
                        {item.title}
                    </MainItem>
                ))}
            </div>
            </MainMenuInner>
        </MainMenuWrapper>
        
    )}
     />
);

export default MainMenu;
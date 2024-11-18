import styled from "styled-components";
import { IColumn } from "../../pages/feed/types";

export const Container = styled.main`
    width:100%;
    max-width:80%;
    margin:0 auto;
    margin-top:120px;

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`
export const Title = styled.h3`
    font-family:'Open-sans';
    font-style:normal;
    font-weight:700;
    font-size:18px;
    line-height:25px
    color: #fff;
    margin-bottom:24px;
`
export const TitleHighLight = styled.h3`
    font-family:'Open Sans':
    font-style:normal;
    font-weight:700;
    font-size:18px;
    line-height:25px;
    color:#f41050;
`
export const Column = styled.div<IColumn>`
    flex:${({flex}) => flex};
    padding-right:24px;
`
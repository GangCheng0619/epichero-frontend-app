import styled from "styled-components";


export const PhaseCardDiv = styled.div`
position: relative;
background-color: #282334;
width: 100%;
border-radius: 8px;

:before {
    content: "";
    background: url(https://storage.googleapis.com/epic-cdn/public/card/card-box1.webp) no-repeat;
    background-size: 93px 120px;
    display: block;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
}
:after {
    content: "";
    background: url(https://storage.googleapis.com/epic-cdn/public/card/card-box1.webp) no-repeat;
    background-size: 93px 120px;
    display: block;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    right: 0;
    background-position: -30px 0;
}
.div1 {
    :before {
        content: "";
        display: block;
        position: absolute;
        left: 30px;
        right: 30px;
        height: 30px;
        background: url(https://storage.googleapis.com/epic-cdn/public/card/card-box1.webp) repeat-x;
        background-size: 93px 120px;
        background-position: 0 -60px;
        top: 0;
    }
    :after {
        content: "";
        display: block;
        position: absolute;
        left: 30px;
        right: 30px;
        height: 30px;
        background: url(https://storage.googleapis.com/epic-cdn/public/card/card-box1.webp) repeat-x;
        background-size: 93px 120px;
        bottom: 0;
        background-position: 0 -90px;
    }
}
.div2 {
    :before {
        content: "";
        display: block;
        position: absolute;
        top: 30px;
        bottom: 30px;
        width: 30px;
        background: url(https://storage.googleapis.com/epic-cdn/public/card/card-box2.webp) repeat-y;
        background-size: 60px 60px;
        left: 0;
        background-position: -30px 0;
    }
    :after {
        content: "";
        display: block;
        position: absolute;
        top: 30px;
        bottom: 30px;
        width: 30px;
        background: url(https://storage.googleapis.com/epic-cdn/public/card/card-box2.webp) repeat-y;
        background-size: 60px 60px;
        right: 0;
        background-position: 0 0;
    }
}
.div3 {
    padding: 30px;
    :before {
        content: "";
        background: url(https://storage.googleapis.com/epic-cdn/public/card/card-box1.webp) no-repeat;
        background-size: 93px 120px;
        display: block;
        width: 30px;
        height: 30px;
        position: absolute;
        bottom: 0;
        background-position: 0 -30px;
        left: 0;
    }
    :after {
        content: "";
        background: url(https://storage.googleapis.com/epic-cdn/public/card/card-box1.webp) no-repeat;
        background-size: 93px 120px;
        display: block;
        width: 30px;
        height: 30px;
        position: absolute;
        bottom: 0;
        background-position: -30px -30px;
        right: 0;
    }
}
`
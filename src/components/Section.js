import * as React from "react";
import styled from "@emotion/styled";
import useFadeIn from "./hooks/useFadeIn";
import { config, Spring } from "react-spring/renderprops";
import tripleImg from "./assets/triple.png";
import goldImg from "./assets/gold.png";
import silverImg from "./assets/silver.png";

function Section() {
  const imgBox = useFadeIn("up", 0.7, 0.1);
  const txtBox = useFadeIn("center", 0.7, 0.2);
  const icoBox = useFadeIn("up", 0.7, 0.3);

  return (
    <SectionWrapper>
      <SectionContainer>
        <SectionContents>
          <SectionImgBox {...imgBox}>2021년 3월 기준</SectionImgBox>
          <SectionTxtBox {...txtBox}>
            <div>
              <strong>
                <Spring
                  from={{ number: 0 }}
                  to={{ number: 630 }}
                  delay={1}
                  config={config.slow}
                >
                  {(springProps) => {
                    return Math.round(springProps.number);
                  }}
                </Spring>
                만 명
              </strong>
              의 여행자
            </div>
            <div>
              <strong>
                <Spring
                  from={{ number: 0 }}
                  to={{ number: 95 }}
                  delay={1}
                  config={config.slow}
                >
                  {(springProps) => {
                    return Math.round(springProps.number);
                  }}
                </Spring>
                만 개
              </strong>
              의 여행 리뷰
            </div>
            <div>
              <strong>
                <Spring
                  from={{ number: 0 }}
                  to={{ number: 420 }}
                  delay={1}
                  config={config.slow}
                >
                  {(springProps) => {
                    return Math.round(springProps.number);
                  }}
                </Spring>
                만 개
              </strong>
              의 여행 일정
            </div>
          </SectionTxtBox>
          <SectionIcoBox {...icoBox}>
            <div>
              2018 구글 플레이스토어
              <br />
              올해의 앱 최우수상 수상
            </div>
            <div>
              2018 애플 앱스토어
              <br />
              오늘의 여행앱 선정
            </div>
          </SectionIcoBox>
        </SectionContents>
      </SectionContainer>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  overflow: hidden;
  position: relative;
  z-index: 100;
  min-width: 1200px;
  height: 100%;
  background-color: #fff;
`;

const SectionContainer = styled.div`
  width: 100%;
  height: 552px;
`;

const SectionContents = styled.div`
  width: 1040px;
  height: 552px;
  margin: 0 auto;
  position: relative;
`;

const SectionImgBox = styled.div`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;

  box-sizing: border-box;
  background-image: url(${tripleImg});
  background-repeat: no-repeat;
  text-align: center;
  color: rgba(58, 58, 58, 0.7);
`;

const SectionTxtBox = styled.div`
  padding-top: 150px;
  margin-left: 623px;

  & div {
    font-size: 36px;
    letter-spacing: -1px;
    color: rgb(58, 58, 58);
    margin-bottom: 20px;
    string {
      font-weight: bold;
    }
  }
`;

const SectionIcoBox = styled.div`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
  & div:first-child {
    background-size: 54px 54px;
    height: 54px;
    padding: 5px 0px 5px 62px;
    font-size: 14px;
    line-height: 22px;
    margin-right: 39px;

    display: inline-block;
    background-image: url(${goldImg});
    background-position: left top;
    background-repeat: no-repeat;
    color: rgba(58, 58, 58, 0.8);
    font-weight: bold;
  }

  & div:last-child {
    background-size: 54px 54px;
    height: 54px;
    padding: 5px 0px 5px 62px;
    font-size: 14px;
    line-height: 22px;
    margin-right: 39px;

    display: inline-block;
    background-image: url(${silverImg});
    background-position: left top;
    background-repeat: no-repeat;
    color: rgba(58, 58, 58, 0.8);
    font-weight: bold;
  }
`;

export default Section;

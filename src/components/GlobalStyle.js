import { Global } from "@emotion/react";
import * as React from "react";
import { css } from "@emotion/react";

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        /* reset */
        body,
        div,
        dl,
        dt,
        dd,
        ul,
        ol,
        li,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        pre,
        code,
        form,
        fieldset,
        legend,
        textarea,
        p,
        blockquote,
        th,
        td,
        input,
        select,
        button {
          margin: 0px;
          padding: 0px;
          border: 0px;
          font: inherit;
          vertical-align: baseline;
        }
        fieldset,
        img {
          border: 0 none;
        }
        dl,
        ul,
        ol,
        menu,
        li {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: "";
          content: none;
        }
        input,
        select,
        textarea,
        button {
          vertical-align: middle;
          font-size: 100%;
        }
        button {
          border: 0 none;
          background-color: transparent;
          cursor: pointer;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        body {
          -webkit-text-size-adjust: none;
        } /* 뷰포트 변환시 폰트크기 자동확대 방지. */
        input:checked[type="checkbox"] {
          background-color: #666;
          -webkit-appearance: checkbox;
        }
        input[type="text"],
        input[type="password"],
        input[type="submit"],
        input[type="search"],
        input[type="tel"],
        input[type="email"],
        html input[type="button"],
        input[type="reset"] {
          -webkit-appearance: none;
          border-radius: 0;
        }
        input[type="search"]::-webkit-search-cancel-button {
          -webkit-appearance: none;
        }
        body {
          background: #0f0f19;
        }
        body,
        th,
        td,
        input,
        select,
        textarea,
        button {
          font-size: 14px;
          line-height: 1;
          font-family: sans-serif;
          color: #fff;
        } /* color값은 디자인가이드에 맞게사용 */
        a {
          color: #fff;
          text-decoration: none;
        }
        a:active,
        a:hover {
          text-decoration: none;
        }
        address,
        caption,
        cite,
        code,
        dfn,
        em,
        var {
          font-style: normal;
          font-weight: normal;
        }
      `}
    />
  );
}

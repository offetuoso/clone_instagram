<template>
    <!--<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>-->
    <router-view />
</template>

<style>
body,
button,
input,
textarea {
    color: #262626;
    color: rgba(var(--i1d, 38, 38, 38), 1);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 18px;
}
input:-internal-autofill-selected {
    appearance: menulist-button;
    background-image: none !important;
    background-color: -internal-light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4)) !important;
    color: -internal-light-dark(black, white) !important;
}
사용자 에이전트 스타일시트 input[type="text" i] {
    padding: 1px 2px;
}
사용자 에이전트 스타일시트 input {
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
    cursor: text;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    margin: 0em;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}

body,
button,
input,
textarea {
    color: #262626;
    color: rgba(var(--i1d, 38, 38, 38), 1);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 18px;
}
button {
    margin: 0;
}

.app {
    align-items: stretch;
    border-bottom-color: rgb(0, 0, 0);
    border-bottom-style: solid;
    border-bottom-width: 0px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(0, 0, 0);
    border-left-style: solid;
    border-left-width: 0px;
    border-right-color: rgb(0, 0, 0);
    border-right-style: solid;
    border-right-width: 0px;
    border-top-color: rgb(0, 0, 0);
    border-top-style: solid;
    border-top-width: 0px;
    box-sizing: border-box;
    color: rgb(38, 38, 38);
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-stretch: 100%;
    font-style: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-weight: 400;

    line-height: 18px;
    margin-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    position: relative;
    text-size-adjust: 100%;
    vertical-align: baseline;
    height: 782.6px;
    width: 1075.2px;
    z-index: 0;
    -webkit-box-align: stretch;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>

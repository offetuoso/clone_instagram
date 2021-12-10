<template>
    <section class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png">
    <Login msg="Welcome to Your Instagram"/> -->
        <main>
            <article class="margin-center">
                <div class="sub-article">
                    <div class="img_box">
                        <img alt="" class="imgs fadeOut" src="https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg" />
                        <img alt="" class="imgs" src="https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg" />
                        <img alt="" class="imgs" src="https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg" />
                        <img alt="" class="imgs" src="https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg" />
                        <img alt="" class="imgs fadeIn" src="https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg" />
                    </div>
                </div>
                <div class="main-article">
                    <Login />
                </div>
            </article>
        </main>
    </section>
    <footer>
        <div class="footer_box">
            <div class="link_box">
                <div class="links">
                    <div class="link">
                        <a href="https://about.facebook.com/meta" rel="nofollow noopener noreferrer" target="_blank"
                            ><div class="link_label">Meta</div></a
                        >
                    </div>
                    <div class="link">
                        <a href="https://about.instagram.com/" rel="nofollow noopener noreferrer" target="_blank"
                            ><div class="link_label">소개</div></a
                        >
                    </div>
                    <div class="link">
                        <a href="https://about.instagram.com/blog/" rel="nofollow noopener noreferrer" target="_blank"
                            ><div class="link_label">블로그</div></a
                        >
                    </div>
                    <div class="link">
                        <a href="https://www.instagram.com/about/jobs/"><div class="link_label">채용 정보</div></a>
                    </div>
                    <div class="link">
                        <a href="https://help.instagram.com/" rel="nofollow noopener noreferrer" target="_blank"
                            ><div class="link_label">도움말</div></a
                        >
                    </div>
                    <div class="link">
                        <a href="https://developers.facebook.com/docs/instagram" rel="nofollow noopener noreferrer" target="_blank"
                            ><div class="link_label">API</div></a
                        >
                    </div>
                    <div class="link">
                        <a href="https://www.instagram.com/legal/privacy/"><div class="link_label">개인정보처리방침</div></a>
                    </div>
                    <div class="link">
                        <a href="https://www.instagram.com/legal/terms/"><div class="link_label">약관</div></a>
                    </div>
                    <div class="link">
                        <a href="https://www.instagram.com/directory/profiles/"><div class="link_label">인기 계정</div></a>
                    </div>
                    <div class="link">
                        <a href="https://www.instagram.com/directory/hashtags/"><div class="link_label">해시태그</div></a>
                    </div>
                    <div class="link">
                        <a href="https://www.instagram.com/explore/locations/"><div class="link_label">위치</div></a>
                    </div>
                    <div class="link">
                        <a href="https://www.instagram.com/web/lite/"><div class="link_label">Instagram Lite</div></a>
                    </div>
                </div>
                <div class="links">
                    <div class="link">
                        <a href="https://www.instagram.com/topics/beauty/"><div class="link_label">뷰티</div></a>
                    </div>
                    <div class="link">
                        <a href="https://www.instagram.com/topics/dance-and-performance/"><div class="link_label">댄스</div></a>
                    </div>
                    <div class="link">
                        <a href="https://www.instagram.com/topics/fitness/"><div class="link_label">피트니스</div></a>
                    </div>
                    <div class="link">
                        <a href="https://www.instagram.com/topics/food-and-drink/"><div class="link_label">식음료</div></a>
                    </div>
                    <div class="link">
                        <a href="https://www.instagram.com/topics/home-and-garden/"><div class="link_label">집 및 정원</div></a>
                    </div>
                    <div class="link">
                        <a href="https://www.instagram.com/topics/music/"><div class="link_label">음악</div></a>
                    </div>
                    <div class="link">
                        <a href="https://www.instagram.com/topics/visual-arts/"><div class="link_label">시각 예술</div></a>
                    </div>
                </div>
            </div>
            <div class="etc_box">
                <div class="language_part">
                    <span class="language_box"
                        ><div class="TQUPK">
                            <span>한국어</span>
                            <div class="qF0y9 Igw0E IwRSH eGOV_ _4EzTm WKY0a">
                                <span style="display: inline-block; transform: rotate(180deg)"
                                    ><svg
                                        aria-label="아래쪽 V자형 아이콘"
                                        class="_8-yf5"
                                        color="#8e8e8e"
                                        fill="#8e8e8e"
                                        height="12"
                                        role="img"
                                        viewBox="0 0 48 48"
                                        width="12"
                                    >
                                        <path
                                            d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"
                                        ></path></svg
                                ></span>
                            </div>
                        </div>
                        <select aria-label="표시 언어 변경" id="language_select" @change="fn_selectLanguage">
                            <option value="af">Afrikaans</option>
                            <option value="cs">Čeština</option>
                            <option value="da">Dansk</option>
                            <option value="de">Deutsch</option>
                            <option value="el">Ελληνικά</option>
                            <option value="en">English</option>
                            <option value="en-gb">English (UK)</option>
                            <option value="es">Español (España)</option>
                            <option value="es-la">Español</option>
                            <option value="fi">Suomi</option>
                            <option value="fr">Français</option>
                            <option value="id">Bahasa Indonesia</option>
                            <option value="it">Italiano</option>
                            <option value="ja">日本語</option>
                            <option value="ko">한국어</option>
                            <option value="ms">Bahasa Melayu</option>
                            <option value="nb">Norsk</option>
                            <option value="nl">Nederlands</option>
                            <option value="pl">Polski</option>
                            <option value="pt-br">Português (Brasil)</option>
                            <option value="pt">Português (Portugal)</option>
                            <option value="ru">Русский</option>
                            <option value="sv">Svenska</option>
                            <option value="th">ภาษาไทย</option>
                            <option value="tl">Filipino</option>
                            <option value="tr">Türkçe</option>
                            <option value="zh-cn">中文(简体)</option>
                            <option value="zh-tw">中文(台灣)</option>
                            <option value="bn">বাংলা</option>
                            <option value="gu">ગુજરાતી</option>
                            <option value="hi">हिन्दी</option>
                            <option value="hr">Hrvatski</option>
                            <option value="hu">Magyar</option>
                            <option value="kn">ಕನ್ನಡ</option>
                            <option value="ml">മലയാളം</option>
                            <option value="mr">मराठी</option>
                            <option value="ne">नेपाली</option>
                            <option value="pa">ਪੰਜਾਬੀ</option>
                            <option value="si">සිංහල</option>
                            <option value="sk">Slovenčina</option>
                            <option value="ta">தமிழ்</option>
                            <option value="te">తెలుగు</option>
                            <option value="vi">Tiếng Việt</option>
                            <option value="zh-hk">中文(香港)</option>
                            <option value="bg">Български</option>
                            <option value="fr-ca">Français (Canada)</option>
                            <option value="ro">Română</option>
                            <option value="sr">Српски</option>
                            <option value="uk">Українська</option>
                        </select></span
                    >
                </div>
                <div class="copyright_part"><div class="copyright">© 2021 Instagram from Meta</div></div>
            </div>
        </div>
    </footer>
</template>

<script>
import Login from "@/components/Login.vue";
let isFirst = true;
let interval1;

export default {
    name: "Home",
    components: {
        Login,
    },
    methods: {
        fadeInImg() {
            interval1 = setInterval(() => {
                const fadeIn = document.querySelector("img.fadeIn");
                const fadeOut = document.querySelector("img.fadeOut");
                this.img_idx = (this.img_idx + 1) % 5;

                if (fadeIn) {
                    fadeIn.classList.remove("fadeIn");
                }
                if (fadeOut) {
                    fadeOut.classList.remove("fadeOut");
                }
                document.querySelectorAll("img.imgs")[this.img_idx].classList.add("fadeOut");
                document.querySelectorAll("img.imgs")[(this.img_idx + 1) % 5].classList.add("fadeIn");

                //this.fadeOutImg();
            }, 10000);
        },
        fn_selectLanguage(e) {
            var value = document.querySelector("#language_select").value; // 선택된 옵션 값 (selected option value)
            var text = document.querySelector("#language_select option:checked").innerText; // 선택된 옵션 텍스트(selected option)

            document.querySelector(".language_box > div > span").innerText = text; // 선택된 옵션 텍스트

            console.log(value, text);
        },
    },
    data() {
        return {
            img_idx: 0,
            img_urls: [
                "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
                "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
                "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
                "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
                "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg",
            ],
        };
    },
    mounted() {
        this.fadeInImg();
    },
};
</script>
<style scoped>
.app section {
    /* min-height: 102vh; */
    overflow: hidden;
    margin-top: 34px;
    margin-bottom: 34px;
    width: 80%;
    height: 80%;
    margin-left: auto;
    margin-right: auto;
}
.app footer {
    width: inherit;
    height: 10%;
}
.app footer .footer_box {
    height: 100%;
    width: 966px;
    /*background-color: palevioletred;*/
    margin-left: auto;
    margin-right: auto;
}
.app footer .footer_box .link_box {
    height: 23px;
}

.app footer .footer_box .link_box .links {
    flex-wrap: wrap;
    justify-content: center;
    flex: 0 0 auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    align-items: stretch;
    display: flex;
}

.app footer .footer_box .link_box .links .link {
    margin-right: 8px;
    margin-left: 8px;
    margin-bottom: 12px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    display: flex;
}

.app footer .footer_box .link_box .links .link .link_label {
    display: block;
    color: #8e8e8e;
    color: rgba(var(--f52, 142, 142, 142), 1);
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    margin: -2px 0 -3px;
}

.etc_box {
    margin-top: 12px;
    margin-bottom: 12px;
    padding: 8px 10px 0px 10px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    display: flex;
}
.etc_box .language_part {
    display: block;
    color: rgba(var(--i1d, 38, 38, 38), 1);
    font-size: 12px;
    line-height: 16px;
}
select:not(:-internal-list-box) {
    overflow: visible !important;
}
select {
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
    box-sizing: border-box;
    align-items: center;
    white-space: pre;
    -webkit-rtl-ordering: logical;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    cursor: default;
    margin: 0em;
    border-width: 1px;
    border-style: solid;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
    border-radius: 0px;
}

.etc_box .language_part .language_box {
    font-weight: 400;
    color: #8e8e8e;
    color: rgba(var(--f52, 142, 142, 142), 1);
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    position: relative;
    vertical-align: top;
}

.etc_box .language_part #language_select {
    cursor: pointer;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

.etc_box .language_part .language_box div {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.copyright_part {
    margin-left: 16px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

.copyright_part .copyright {
    display: block;
    color: #8e8e8e;
    color: rgba(var(--f52, 142, 142, 142), 1);
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    margin: -2px 0 -3px;
}

.margin-center {
    margin-left: auto;
    margin-right: auto;
}

.app .home article {
    width: inherit;
    height: inherit;
    /*background-color: blue;*/
}

.app .home article .sub-article {
    float: left;
    height: inherit;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    background-image: url(https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png);
    background-position: 0 0;
    background-size: 454px inherit;
    -webkit-flex-basis: 454px;
    -ms-flex-preferred-size: 454px;
    flex-basis: 454px;
    width: 454px;
    height: 618px;
    margin-left: 32px;
    margin-right: -15px;

    /*background-color: blueviolet;*/
}

@media (max-width: 875px) {
    article .sub-article {
        display: none;
    }

    .app section {
        /* min-height: 102vh; */
        overflow: hidden;
        margin-top: 34px;
        margin-bottom: 34px;
        width: 350px !important;
        height: 80%;
        margin-left: auto;
        margin-right: auto;
    }
}

.app .home article .main-article {
    float: left;
    width: 350px;
    height: inherit;
    margin-top: 30px;
    /*background-color: aqua;*/
}

.app .home article .sub-article .img_box {
    margin: 99px 0 0 151px;
    background-color: white;
    position: relative;
}

.app .home article .sub-article .img_box .imgs {
    height: 427px;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    visibility: hidden;
    width: 240px;
}

@keyframes fadeIn {
    from {
        opacity: 0.1;
    }
    to {
        opacity: 1;
    }
}
@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0.1;
    }
}

.app .home article .sub-article .img_box .fadeIn {
    animation-name: fadeIn;
    animation-duration: 10s;
    animation-timing-function: linear;
    visibility: visible;
}

.app .home article .sub-article .img_box .fadeOut {
    animation-name: fadeOut;
    animation-duration: 10s;
    animation-timing-function: linear;
    visibility: visible;
}
</style>

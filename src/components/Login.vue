<template>
    <div class="Login">
        <div class="login_part parts">
            <h1 class="login_logo core_image">Instagram</h1>
            <div class="login_contents">
                <form class="login_form" id="loginForm" method="post">
                    <div class="login_from_inner">
                        <div class="-form-row">
                            <div class="_9GP1n">
                                <label class="form_labels">
                                    <input
                                        id="form_id"
                                        aria-label="전화번호, 사용자 이름 또는 이메일"
                                        placeholder="전화번호, 사용자 이름 또는 이메일"
                                        aria-required="true"
                                        autocapitalize="off"
                                        autocorrect="off"
                                        maxlength="75"
                                        name="username"
                                        type="text"
                                        class="input"
                                        value=""
                                    />
                                    <span class="label_span">전화번호, 사용자 이름 또는 이메일</span>
                                </label>
                                <div class=""></div>
                            </div>
                        </div>
                        <div class="-form-row">
                            <div class="">
                                <label class="form_labels">
                                    <input
                                        id="form_password"
                                        aria-label="비밀번호"
                                        placeholder="비밀번호"
                                        aria-required="true"
                                        autocapitalize="off"
                                        autocorrect="off"
                                        name="password"
                                        type="password"
                                        class="input"
                                        value=""
                                    />
                                    <span class="label_span">비밀번호</span>
                                    <div id="button_box" ref="buttonBox" v-html="viewPasswordBtn"></div>
                                </label>
                            </div>
                        </div>
                        <div class="submit_btn_box">
                            <button class="submit_btn" disabled="" type="submit">
                                <div>로그인</div>
                            </button>
                        </div>
                        <div class="other-option-box Z7p_S">
                            <div class="other-option-bar"></div>
                            <div class="other-option-label">또는</div>
                            <div class="other-option-bar"></div>
                        </div>
                        <div class="facebook_login_box">
                            <button class="facebook_login_btn row_center" type="button">
                                <span class="coreSpriteFacebookIcon core_image icon"></span
                                ><span class="facebook_login_label">Facebook으로 로그인</span>
                            </button>
                        </div>
                    </div>
                    <a class="forgot row_center" href="/accounts/password/reset/" tabindex="0">비밀번호를 잊으셨나요?</a>
                </form>
            </div>
        </div>
        <div class="join_part parts">
            <div class="join_box">
                <p class="join_text">
                    계정이 없으신가요?
                    <a data-testid="sign-up-link" href="/accounts/emailsignup/" tabindex="0"><span class="join_highlight">가입하기</span></a>
                </p>
            </div>
        </div>
        <div class="download_part">
            <p class="download_text">앱을 다운로드하세요.</p>
            <div class="download_box">
                <a
                    class="z1VUo"
                    href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo"
                    tabindex="0"
                    ><img
                        alt="App Store에서 이용 가능"
                        class="app_btns"
                        src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png" /></a
                ><a
                    class="z1VUo"
                    href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D59481A24-4CEB-4003-928F-E5B5F315758E%26utm_content%3Dlo%26utm_medium%3Dbadge"
                    tabindex="0"
                    ><img
                        alt="Google Play에서 이용 가능"
                        class="app_btns"
                        src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
                /></a>
            </div>
        </div>
    </div>
</template>

<script>
let passwordVisible = false;

export default {
    name: "Login",
    data() {
        return { viewPasswordBtn: "" };
    },
    mounted() {
        const inputId = document.querySelector("#form_id");
        const inputPassword = document.querySelector("#form_password");

        inputId.addEventListener("keyup", (e) => {
            var pw = document.querySelector("#form_password");

            document.querySelector(".submit_btn_box .submit_btn").classList.toggle("active", !!e.target.value && pw.value);
        });

        inputPassword.addEventListener("keyup", (e) => {
            var id = document.querySelector("#form_id");
            if (!!e.target.value) {
                if (!passwordVisible) {
                    this.viewPasswordBtn =
                        "<button class='change_mode' type='button'  style='border:0px; width: 100px; height:100%;    background-color: white;color: black; font-weight: bold;'>비밀번호 표시</button>";
                }
            } else {
                this.viewPasswordBtn = "";
                passwordVisible = false;
            }

            document.querySelector(".submit_btn_box .submit_btn").classList.toggle("active", !!e.target.value && id.value);
        });

        if (this.$refs["buttonBox"]) {
            this.$refs["buttonBox"].addEventListener("click", function (event) {
                event.preventDefault();
                console.log("clicked: ", event.target.innerHTML, "passwordVisible", passwordVisible);
                var pw = document.querySelector("#form_password");

                if (!passwordVisible) {
                    passwordVisible = true;
                    event.target.innerHTML = "숨기기";
                    pw.setAttribute("type", "text");
                } else {
                    passwordVisible = false;
                    event.target.innerHTML = "비밀번호 표시";
                    pw.setAttribute("type", "password");
                }
            });
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Login {
    width: inherit;
    height: inherit;
    padding-top: 10px;
    margin-bottom: 10px;
}

.login_part .login_logo {
    margin: 22px auto 12px;
    background-repeat: no-repeat;
    background-position: 0 -130px;
    height: 51px;
    width: 175px;
    display: block;
    overflow: hidden;
    text-indent: 110%;
    white-space: nowrap;
}
.login_part .login_contents {
    margin-bottom: 10px;
    max-width: 350px;
    width: 100%;
}

.login_part .login_contents input {
    border: 1px solid #dbdbdb;
    width: 100%;
    padding: 9px 8px 7px !important;
    background-color: rgb(232, 240, 254);
    border-radius: 3px;
}

.login_from_inner {
    margin-top: 24px;
}
.-form-row {
    height: 34px;
    margin: 0 40px 6px;
}
.form_labels {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 36px;
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 0;
    -ms-flex: 1 0 0;
    flex: 1 0 0;
    padding: 0;
    position: relative;
    margin: 0;
    min-width: 0;
    text-align: left;
}

.form_labels .label_span {
    top: -10px;
    color: #8e8e8e;
    color: rgba(var(--f52, 142, 142, 142), 1);
    font-size: 12px;
    height: 36px;
    left: 8px;
    line-height: 36px;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    right: 0;
    text-overflow: ellipsis;
    -webkit-transform-origin: left;
    transform-origin: left;
    -webkit-transition: -webkit-transform ease-out 0.1s;
    transition: -webkit-transform ease-out 0.1s;
    transition: transform ease-out 0.1s;
    transition: transform ease-out 0.1s, -webkit-transform ease-out 0.1s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
}
.form_labels .input {
    padding: 14px 0 2px 8px !important;
}
.form_labels .input:placeholder-shown + .label_span {
    display: none;
}

.login_contents .submit_btn_box {
    margin-top: 8px;
    margin-right: 40px;
    margin-left: 40px;
    margin-bottom: 8px;
}

.login_form {
    text-align: center;
}

.login_contents .submit_btn_box .submit_btn {
    margin-top: 5px;
    background-color: #b2dffc;
    color: white;
    border-radius: 3px;
    opacity: 1;
    border: 0px;
    padding: 10px;
    width: 100%;
    font-weight: bold;
}

.login_contents .submit_btn_box .active {
    background-color: rgba(0, 149, 246) !important;
}

.other-option-box {
    margin: 10px 40px 5px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    width: inherit;
    height: 30px;
}
.other-option-bar {
    float: left;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-shrink: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    background-color: #dbdbdb;
    background-color: rgba(var(--b38, 219, 219, 219), 1);
    height: 1px;
    width: 38%;
    position: relative;
    top: 0.45em;
}
.other-option-label {
    float: left;
    color: #8e8e8e;
    color: rgba(var(--f52, 142, 142, 142), 1);
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: 13px;
    font-weight: 600;
    line-height: 15px;
    margin: 0 18px;
    text-transform: uppercase;
    height: 24px;
    width: 10%;
}
.facebook_login_label {
    color: #385185;
}
.facebook_login_btn .icon {
    display: inline-block;
    margin-right: 8px;
    position: relative;
    top: 3px;
}

.coreSpriteFacebookIcon,
.coreSpriteFacebookIconInverted {
    background-repeat: no-repeat;
    background-position: -414px -259px;
    height: 16px;
    width: 16px;
}

.facebook_login_btn {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: 0 0;
    border: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    font-weight: 600;
    padding: 5px 9px;
    text-align: center;
    text-transform: inherit;
    text-overflow: ellipsis;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: auto;
    margin-bottom: 18px;
    flex-direction: row;
    width: inherit;
    height: 30px;
}
.forgot,
.forgot:hover,
.forgot:active,
.forgot:visited {
    color: #00376b;
    color: rgba(var(--fe0, 0, 55, 107), 1);
    font-size: 12px;
    line-height: 16px;
    margin-top: 12px;
    width: 100%;
    height: 16px;
}

.row_center {
    margin-left: auto;
    margin-right: auto;
}
.parts {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #fff;
    background-color: rgba(var(--d87, 255, 255, 255), 1);
    border: 1px solid #dbdbdb;
    border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    border-radius: 1px;
    margin: 0 0 10px;
    padding: 10px 0;
}
.join_text {
    color: #262626;
    color: rgba(var(--i1d, 38, 38, 38), 1);
    font-size: 14px;
    margin: 15px;
    text-align: center;
}

.join_highlight {
    display: inline !important;
    margin: 0 !important;
    color: #0095f6;
    color: rgba(var(--d69, 0, 149, 246), 1);
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    margin: -3px 0 -4px;
}
.download_part {
    margin-top: 25px;
}
.download_text {
    color: #262626;
    color: rgba(var(--i1d, 38, 38, 38), 1);
    font-size: 14px;
    line-height: 18px;
    margin: 10px 20px 25px 30px;
    text-align: center;
}

.download_box {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 10px 0 10px 0;
    text-align: center;
}

.download_box .app_btns {
    height: 40px;
    margin-left: 5px;
    margin-right: 5px;
}
</style>

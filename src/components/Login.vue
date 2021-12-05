<template>
    <div class="Login">
        <div class="login_part">
            <h1 class="login_logo">Instagram</h1>
            <div class="login_contents">
                <form class="login_form" id="loginForm" method="post">
                    <div class="login_from_inner">
                        <div class="-form-row">
                            <div class="_9GP1n">
                                <label class="form_labels">
                                    <input
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
                                    <div id="button_box" v-html="viewPasswordBtn"></div>
                                </label>
                            </div>
                        </div>
                        <div class="submit_btn_box">
                            <button class="submit_btn" disabled="" type="submit">
                                <div class="qF0y9 Igw0E IwRSH eGOV_ _4EzTm">로그인</div>
                            </button>
                        </div>
                        <div class="K-1uj Z7p_S">
                            <div class="s311c"></div>
                            <div class="_0tv-g">또는</div>
                            <div class="s311c"></div>
                        </div>
                        <div class="qF0y9 Igw0E IwRSH eGOV_ _4EzTm bkEs3 CovQj jKUp7 DhRcB">
                            <button class="sqdOP yWX7d y3zKF" type="button">
                                <span class="coreSpriteFacebookIcon AeB99"></span><span class="KPnG0">Facebook으로 로그인</span>
                            </button>
                        </div>
                    </div>
                    <a class="_2Lks6" href="/accounts/password/reset/" tabindex="0">비밀번호를 잊으셨나요?</a>
                </form>
            </div>
        </div>
        <div class="join_part"></div>
        <div class="download_part"></div>
    </div>
</template>

<script>
const passwordVisible = false;

export default {
    name: "Login",
    data() {
        return { viewPasswordBtn: "" };
    },
    mounted() {
        const input = document.querySelector("#form_password");
        input.addEventListener("keyup", (e) => {
            if (!!e.target.value) {
                console.log(11);
                if (!passwordVisible) {
                    this.viewPasswordBtn =
                        "<button class='changePwView' type='button'  style='border:0px; width: 100px; height:100%;'>비밀번호 표시</button>";
                } else {
                    this.viewPasswordBtn = "<button style='border:0px; width: 100px; height:100%;'>숨기기</button>";
                }

                const btn = document.querySelector(".changePwView");
                if (btn) {
                    /*
                    btn.removeEventListener("click", clickHandler);
                    btn.addEventListener("click", (e) => {
                        e.preventDefault();
                        alert(111);
                    });
                    */
                }
            } else {
                this.viewPasswordBtn = "";
                passwordVisible = false;
            }
        });
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
.login_part {
    width: inherit;
    height: 60%;
    border: 1px solid #dbdbdb;
    /*background-color: beige;*/
}
.login_part .login_logo {
    margin: 22px auto 12px;
    background-repeat: no-repeat;
    background-position: 0 -130px;
    height: 51px;
    width: 175px;

    background-image: url(https://www.instagram.com/static/bundles/es6/sprite_core_32f0a4f27407.png/32f0a4f27407.png);
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
.login_contents .submit_btn_box .submit_btn {
    margin-top: 5px;
    background-color: rgba(0, 149, 246);
    color: white;
    border-radius: 3px;
    opacity: 1;
    border: 0px;
    padding: 10px;
    width: 100%;
}
</style>

<template>
    <section class="home">
        <main>
            <article>
                <div class="main-article">
                    <Login />
                </div>
            </article>
        </main>
    </section>
    <footer></footer>
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
.app .home {
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
    /*background-color: palevioletred;*/
}
.app .home > * {
    margin-left: auto;
    margin-right: auto;
}

.app .home main {
    width: inherit;
    height: 100%;
}

.app .home article {
    width: inherit;
    height: inherit;
    /*background-color: blue;*/
}
.app .home article .sub-article {
    float: left;
    width: 454px;
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
    height: inherit;
    margin-left: 32px;
    margin-right: -15px;

    /*background-color: blueviolet;*/
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

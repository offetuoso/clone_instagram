<template>
    <section class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png">
    <Login msg="Welcome to Your Instagram"/> -->
        <main>
            <article>
                <div class="sub-article"></div>
                <div class="main-article">
                    <Login />
                </div>
            </article>
        </main>
    </section>
    <footer></footer>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";

export default {
    name: "Home",
    components: {
        Login,
    },
};
</script>
<style scoped>
.app .home {
    margin-top: 34px;
    margin-bottom: 34px;
    width: inherit;
    height: 80%;
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
    width: 88%;
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
</style>

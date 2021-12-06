const path = require("path");
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/clone_instagram/" : "/",
    outputDir: path.resolve(__dirname, "./dist"),

    //   assetsDir: "./"
    //   asset 파일 위치 설정
};

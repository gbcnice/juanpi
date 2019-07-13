module.exports ={
    devServer:{
        proxy:{
            "/juanpi":{
                "target":"https://webservice.juanpi.com",
                "changeOrigin":true,
                "pathRewrite":{
                    "^/juanpi":""
                }
            }
        }
    }
}
export default {
    getProducts : async function(){
        return Promise.resolve({
            json:function () {
                return Promise.resolve({
                    product: [
                        {
                            "id":"1",
                            "name": "Google",
                            "discription": "This is a search engine.",
                            "module":[{ "id": "1",
                                        "name": "abc",
                                        "description": "efg",
                                        "features": [{  "id":"1",
                                                        "name": "abc",
                                                        "description": "efg",
                                                        "useCase": [{   "id": "1",
                                                                        "name": "abc",
                                                                        "description": "efg",
                                                                    }]//useCase array 
                                                    }]//features array
                                    }]//module array
                        },
                        {
                            "id":"1",
                            "name": "FireFox",
                            "discription": "This is a search engine.",
                            "module":[{ "id": "1",
                                        "name": "abc",
                                        "description": "efg",
                                        "features": [{  "id":"1",
                                                        "name": "abc",
                                                        "description": "efg",
                                                        "useCase": [{   "id": "1",
                                                                        "name": "abc",
                                                                        "description": "efg",
                                                                    }]//useCase array 
                                                    }]//features array
                                    }]//module array
                        },
                        {
                            "id":"1",
                            "name": "Mcdonald's",
                            "discription": "This is a food brand.",
                            "module":[{ "id": "1",
                                        "name": "abc",
                                        "description": "efg",
                                        "features": [{  "id":"1",
                                                        "name": "abc",
                                                        "description": "efg",
                                                        "useCase": [{   "id": "1",
                                                                        "name": "abc",
                                                                        "description": "efg",
                                                                    }]//useCase array 
                                                    }]//features array
                                    }]//module array
                        },
                        {
                            "id":"1",
                            "name": "Gillet",
                            "discription": "This is a food brand.",
                        }

                    ]//products array

                })//Promise.resolve

            }//json
        })
    },//getProducts
    createProduct : async function(product){
        
        return Promise.resolve({
            "response":"Product added successfully."
        })
    },//createProduct
    updateProduct : async function(){
        return Promise.resolve({
            json:function(){
                return Promise.resolve(
                    {
                        "resp": {
                            "success": true,
                            "body": "Kiosk Update Successfully"
                        }
                    }
                )
            }
        })
    }//updateProduct
}//export default

const obj ={product: [{name: "SpreeSuite",
description: "This is a billing product."},
{name: "Google",
description: "This is a search engine."},
{name: "Mcdonald's",
description: "This is a food brand."}
]
}
export {obj}
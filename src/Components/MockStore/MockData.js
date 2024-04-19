export default {
    
    getAllProducts : async function(){
        return Promise.resolve({
            
                    product: [
                        {
                            "id":"1",
                            "name": "Google",
                            "description": "This is a search engine.",
                            "module":[{ "id": "1",
                                        "name": "module_12345678",
                                        "description": "efg",
                                        "feature": [{  "id":"1",
                                                        "name": "feature_1",
                                                        "description": "efg",
                                                        "useCase": [{   "id": "2",
                                                                        "name": "useCase_1",
                                                                        "description": "efg",
                                                                    },
                                                                    {   "id": "2",
                                                                        "name": "useCase_2",
                                                                        "description": "efg",
                                                                    }
                                                                    ]//useCase array 
                                                    },
                                                    {  "id":"2",
                                                        "name": "feature_2",
                                                        "description": "efg",
                                                        "useCase": [{   "id": "1",
                                                                        "name": "useCase",
                                                                        "description": "efg",
                                                                    }]//useCase array 
                                                    }
                                                    ]//features array
                                    },
                                    { "id": "1",
                                        "name": "module_2",
                                        "description": "efg",
                                        "feature": [{  "id":"1",
                                                        "name": "feature",
                                                        "description": "efg",
                                                        "useCase": [{   "id": "1",
                                                                        "name": "useCase",
                                                                        "description": "efg",
                                                                    }]//useCase array 
                                                    }]//features array
                                    }
                                    ]//module array
                        },
                        {
                            "id":"2",
                            "name": "FireFox",
                            "description": "This is a search engine.",
                            "module":[{ "id": "1",
                                        "name": "module_1",
                                        "description": "efg",
                                        "feature": [{  "id":"1",
                                                        "name": "feature",
                                                        "description": "efg",
                                                        "useCase": [{   "id": "1",
                                                                        "name": "useCase",
                                                                        "description": "efg",
                                                                    }]//useCase array 
                                                    }]//features array
                                    }]//module array
                        },
                        {
                            "id":"3",
                            "name": "Mcdonald's",
                            "description": "This is a food brand.",
                            "module":[{ "id": "1",
                                        "name": "module_1",
                                        "description": "efg",
                                        "feature": [{  "id":"1",
                                                        "name": "feature",
                                                        "description": "efg",
                                                        "useCase": [{   "id": "1",
                                                                        "name": "useCase",
                                                                        "description": "efg",
                                                                    }]//useCase array 
                                                    }]//features array
                                    }]//module array
                        },
                        {
                            "id":"1",
                            "name": "Gillet",
                            "description": "This is a food brand.",
                        },
                        {
                            "id":"3",
                            "name": "Saphora",
                            "description": "This is a cosmetic brand.",
                            "module":[{ "id": "1",
                                        "name": "module_1",
                                        "description": "efg",
                                    },
                                    { "id": "1",
                                        "name": "module_2",
                                        "description": "efg",
                                    }
                                    ]//module array
                        }

                    ]//products array
        })
    },//getAllProducts
    getProduct: async function(){
        ///////////////////////////////////////////////////////////////////////////////
    },//getProduct
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
    },//updateProduct
    createModule : async function(module){
        return Promise.resolve({
            "response":"Module added successfully."
        })
    },// createModule
    createFeature : async function(feature){
        return Promise.resolve({
            "response":"feature added successfully."
        })
    },//createFeature
    createUseCase : async function(useCase){
        return Promise.resolve({
            "response":"useCase added successfully."
        })
    }
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
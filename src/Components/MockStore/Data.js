// export default 

// {  products:[ {name:"Google",
//                description:"This is a search engine.",
//                module: [{name: "abc",
//                          description: "xyz",
//                          feature:[{name: "abc",
//                                    description: "xyz",
//                                    useCase:[{name: "abc",
//                                              description: "xyz",
//                                              code: "123",
//                                              preCondition: "111",
//                                              postCondition: "333"}//UseCase-1
//                                             ]//all useCases are in this array
                                        
//                                     }//Feature-1
//                                     ]//all features are in this array

//                         }//Module-1
//                         ]//all modules are in this array

//             }//Product-1
//             ]//all products are in this array
// }//this is the object that has key "product" and value an array


let count = 0;
let index = 0;
let obj ={};
let productData = [
        {
            "id" : 1,
            "name" : "Google",
            "description" : "This is a search engine",
            "module" : [{
                "name" : "Abc",
                "description" : "Hello, how are you?",
                "Feature" :[{"name":"abc",
                "description" : "jksdfkjh",
                "useCase":[{"Name":"abc",
                "description":"kdsjhafkjlljd",
                "code":"sdfjkjhkh",
                "preConditions":"ahdgfjhkdc"
            }]
            }]}]
    },{
        "id" : 1,
        "name" : "Google",
        "description" : "This is a search engine",
        "module" : [{
            "name" : "Abc",
            "description" : "Hello, how are you?",
            "Feature" :[{"name":"abc",
            "description" : "jksdfkjh",
            "useCase":[{"Name":"abc",
            "description":"kdsjhafkjlljd",
            "code":"sdfjkjhkh",
            "preConditions":"ahdgfjhkdc"
        }]
        }]}]
},{
    "id" : 1,
    "name" : "Google",
    "description" : "This is a search engine",
    "module" : [{
        "name" : "Abc",
        "description" : "Hello, how are you?",
        "Feature" :[{"name":"abc",
        "description" : "jksdfkjh",
        "useCase":[{"Name":"abc",
        "description":"kdsjhafkjlljd",
        "code":"sdfjkjhkh",
        "preConditions":"ahdgfjhkdc"
    }]
    }]}]
},{
    "id" : 1,
    "name" : "Google",
    "description" : "This is a search engine",
    "module" : [{
        "name" : "Abc",
        "description" : "Hello, how are you?",
        "Feature" :[{"name":"abc",
        "description" : "jksdfkjh",
        "useCase":[{"Name":"abc",
        "description":"kdsjhafkjlljd",
        "code":"sdfjkjhkh",
        "preConditions":"ahdgfjhkdc"
    }]
    }]}]
},{
    "id" : 1,
    "name" : "Google",
    "description" : "This is a search engine",
    "module" : [{
        "name" : "Abc",
        "description" : "Hello, how are you?",
        "Feature" :[{"name":"abc",
        "description" : "jksdfkjh",
        "useCase":[{"Name":"abc",
        "description":"kdsjhafkjlljd",
        "code":"sdfjkjhkh",
        "preConditions":"ahdgfjhkdc"
    }]
    }]}]
},{
    "id" : 1,
    "name" : "Google",
    "description" : "This is a search engine",
    "module" : [{
        "name" : "Abc",
        "description" : "Hello, how are you?",
        "Feature" :[{"name":"abc",
        "description" : "jksdfkjh",
        "useCase":[{"Name":"abc",
        "description":"kdsjhafkjlljd",
        "code":"sdfjkjhkh",
        "preConditions":"ahdgfjhkdc"
    }]
    }]}]
}
];

export default {
    getProduct: async function() {
        return Promise.resolve({
            json: function() {
                return Promise.resolve({
                    product: productData
                });
            }
        });
    },
    createProduct: async function(props) {
        obj.id = count++;
        obj.name = props.name;
        obj.description = props.description;

        productData.push(obj);

        return Promise.resolve({
            json: function() {
                return Promise.resolve({
                    "resp": {
                        "success": true,
                        "body": "Product add is Successfully"
                    }
                })
            }
        })
    }
};


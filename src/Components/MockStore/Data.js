export default 

{  products:[ {name:"Google",
               description:"This is a search engine.",
               module: [{name: "abc",
                         description: "xyz",
                         feature:[{name: "abc",
                                   description: "xyz",
                                   useCase:[{name: "abc",
                                             description: "xyz",
                                             code: "123",
                                             preCondition: "111",
                                             postCondition: "333"}//UseCase-1
                                            ]//all useCases are in this array
                                        
                                    }//Feature-1
                                    ]//all features are in this array

                        }//Module-1
                        ]//all modules are in this array

            }//Product-1
            ]//all products are in this array
}//this is the object that has key "product" and value an array
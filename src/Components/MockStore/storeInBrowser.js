var arra=[];
let count = 0;
let index = 0;
let obj ={
        id:"",
        name:"",
        description:"",
        module:[{id: "",
                name: "",
                description: "",
                feature:[{id:"",
                          name:"",
                          description:"",
                          useCase:[{name:"", description:""}] 
                        }]//feature array
                }]//module array
};
let productData = [
    {
        "id" : 1,
        "name" : "Google",
        "description" : "This is serach engine "
    },
];

export default {
    getProduct: async function() {
        return Promise.resolve({
            json: function() {
                return Promise.resolve({
                    product:[
                        {
                            "id" : 1,
                            "name" : "Google",
                            "description" : "This is serach engine "
                        },
                    ]
                });
            }
        });
    },
    createProduct: async function(props) {
        //localStorage.clear()
        if(localStorage.getItem('product')==null){
            index++
            obj.id = count++;
            obj.name = props.name;
            obj.description = props.description;
            arra.push(obj);
            localStorage.setItem('product', JSON.stringify(arra));
        }else{
            obj.name=props.name;
            obj.description=props.description;
            arra=JSON.parse(localStorage.getItem('product'))
            arra.push(obj)
            console.log(arra)
            localStorage.setItem('product', JSON.stringify(arra));
        }

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
    },
    createModule: async function(props){
        arra=JSON.parse(localStorage.getItem('product'))
        for (let i = 0; i < arra.length; i++) {
            if(arra[i].id==props.id){
                arra[i].module.push({name:props.name});
                arra[i].module.push({description:props.description});
                i=arra.length;
            }//if (i < arra.length)
            
        }//for loop
    
        localStorage.setItem('product', JSON.stringify(arra));

        return Promise.resolve({
            json: function() {
                return Promise.resolve({
                    "resp": {
                        "success": true,
                        "body": "Module added Successfully"
                    }
                })
            }
        })
    },
    createFeature: async function(props){
        arra=JSON.parse(localStorage.getItem('product'))
        for (let i = 0; i < arra.length; i++) {
            if(arra[i].id==props.p_id){
                for (let x = 0; x < arra[i].module.length; x++) {
                    if(arra[i].module[x].id==props.m_id){
                        arra[i].module[x].feature.name=props.name;
                        arra[i].module[x].feature.description=props.description;
                        x=arra[i].module.length;

                    }//if (x < arra[i].module.length)
                    
                }//for loop (arra[i].module.length)
                i=arra.length;
            }//if (i < arra.length)
            
        }//for (arra.length)
    
        localStorage.setItem('product', JSON.stringify(arra));

        return Promise.resolve({
            json: function() {
                return Promise.resolve({
                    "resp": {
                        "success": true,
                        "body": "Feature added Successfully"
                    }
                })
            }
        })

    },
    createUseCase: async function(props){
        arra=JSON.parse(localStorage.getItem('product'))
        for (let i = 0; i < arra.length; i++) {
            if(arra[i].id==props.p_id){
                for (let x = 0; x < arra[i].module.length; x++) {
                    if(arra[i].module[x].id==props.m_id){
                        for (let k = 0; k < arra[i].module[x].feature.length ; k++) {
                            if(arra[i].module[x].feature[k].id==props.f_id){
                                arra[i].module[x].feature[k].useCase.push()
                            }
                            
                        }//for ( arra[i].module[x].feature.length )

                    }//if (x < arra[i].module.length)
                    
                }//for loop (arra[i].module.length)
                i=arra.length;
            }//if (i < arra.length)
            
        }//for (arra.length)
    
        localStorage.setItem('product', JSON.stringify(arra));
        return Promise.resolve({
            json: function() {
                return Promise.resolve({
                    "resp": {
                        "success": true,
                        "body": "Feature added Successfully"
                    }
                })
            }
        })
    }
};

export {productData}
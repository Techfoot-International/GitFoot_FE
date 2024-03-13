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
            console.log(arra)
            arra.push(obj)
            console.log(arra)
            localStorage.setItem('product', JSON.stringify(arra));
        }

        return Promise.resolve({
            json: function() {
                return Promise.resolve({
                    "resp": {
                        "success": true,
                        "body": "Product added Successfully"
                    }
                })
            }
        })
    }//this function takes 2 values like this "{name, description}"
    ,
    createModule: async function(props){
        arra=JSON.parse(localStorage.getItem('product'))
        for (let i = 0; i < arra.length; i++) {
            if(arra[i].id==props.p_id){
                arra[i].module.push({id:"", name:props.name, description: props.description});
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
    }//this function takes 3 values like this "{p_id, name, description}"
    ,
    createFeature: async function(props){
        arra=JSON.parse(localStorage.getItem('product'))
        for (let i = 0; i < arra.length; i++) {
            if(arra[i].id==props.p_id){
                for (let x = 0; x < arra[i].module.length; x++) {
                    if(arra[i].module[x].id==props.m_id){
                        arra[i].module[x].feature.push({id:"", name: props.name, description: props.description})
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

    }//this function takes 4 values like this "{p_id, m_id, name, description}"
    ,
    createUseCase: async function(props){
        arra=JSON.parse(localStorage.getItem('product'))
        for (let i = 0; i < arra.length; i++) {
            if(arra[i].id==props.p_id){
                for (let x = 0; x < arra[i].module.length; x++) {
                    if(arra[i].module[x].id==props.m_id){
                        for (let k = 0; k < arra[i].module[x].feature.length ; k++) {
                            if(arra[i].module[x].feature[k].id==props.f_id){
                                arra[i].module[x].feature[k].useCase.push({id:"", name:props, description: props.description})
                                k=arra[i].module[x].feature.length;
                            }
                            
                        }//for ( arra[i].module[x].feature.length )
                        x=arra[i].module.length;
                    }//if (x < arra[i].module.length)
                    i=arra.length
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
                        "body": "UseCase added Successfully"
                    }
                })
            }
        })
    }//this function takes 5 values like this "{p_id, m_id, f_id, name, description}"
};

export {productData}
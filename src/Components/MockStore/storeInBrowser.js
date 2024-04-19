var arra=[];
let count = 0;
let index = 0;
let obj ={
        id:"",
        name:"",
        description:"",
        module:[{id: 1,
                name: "module-1",
                description: "this is module-1",
                feature:[{id:1,
                          name:"feature-1",
                          description:"this is feature-1",
                          useCase:[{name:1, description:"this is useCase-1"}] 
                        }]//feature array
                }]//module array
};

export default {
    getAllProducts: async function(p_id) {
            if(localStorage.getItem('product')===null){
                return
            }
            arra=JSON.parse(localStorage.getItem('product'))
            return arra;
    },
    getProduct: function(id){
        arra=JSON.parse(localStorage.getItem('product'))
        return arra[id]
    },
    createProduct: async function(props) {
        //localStorage.clear()
        if(localStorage.getItem('product')==null){
            //index++
            //obj.id = count++;
            obj.id=props.p_id
            obj.name = props.p_name;
            obj.description = props.p_description;
            arra.push(obj);
            localStorage.setItem('product', JSON.stringify(arra));
        }else{
            obj.id=props.p_id
            obj.name=props.p_name;
            obj.description=props.p_description;
            arra=JSON.parse(localStorage.getItem('product'))
            console.log(arra)
            arra.push(obj)
            console.log(arra)
            localStorage.setItem('product', JSON.stringify(arra));
        }

        return Promise.resolve({
            "response": "product added."
        })
    }//this function takes 2 values like this "{name, description}"
    ,
    createModule: async function(props){
        arra=JSON.parse(localStorage.getItem('product'))
        for (let i = 0; i < arra.length; i++) {
            if(arra[i].id==props.p_id){
                arra[i].module.push({id:"", name:props.m_name, description: props.m_description});
                i=arra.length;
            }//if (i < arra.length)
            
        }//for loop
    
        localStorage.setItem('product', JSON.stringify(arra));

        return Promise.resolve({
            "response":"Module added successfully."
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

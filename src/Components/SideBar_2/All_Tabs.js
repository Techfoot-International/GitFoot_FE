import React, {useState, useEffect} from "react";
import SideBar_Tab from "./SideBar_Tab.js";
import Data from '../MockStore/storeIn.js'
//import Data from '../MockStore/MockData.js'
//import Data from '../MockStore/storeInBrowser.js'
import './All_Tabs.css'

function All_Tabs(props){
    

    const [module, setModule] = useState([]);
    const [visibility, setVisibility]=useState(null)

    function toggleVisibility(val){
        setVisibility(val)
    }

    useEffect(() => {
        async function fetchProduct() {
            try{
                const productData = await Data.getProduct(props.product_id);
                setModule(productData.module);
            }
            catch(error){
                //console.error(error)
                console.log("this is an error coming from All_Tabs.js")
            }
            
        }
        fetchProduct();
    }, [props.product_id]);

    if (!module || module.length === 0) {
        return null; // or some loading indicator
    }

    var prod_arr=[<SideBar_Tab  key={`product No. ${props.product_id}`}
                                tracking_id={{p_id: props.product_id}}
                                tracking_id_func={props.tracking_id_func}
                                tabName={props.product_name}
                                tabType={"one_product"}/>
                ]//prod_arr
    var mod_arr=[]
    var feat_arr=[]
    var us_arr=[]


    for (let i = 0; i < module.length; i++) {
        mod_arr.push(<SideBar_Tab   key={`module No. ${i}`}
                                    tracking_id={{p_id:props.product_id, m_id:i}}
                                    tracking_id_func={props.tracking_id_func}
                                    tabName={module[i].name}
                                    tabType={"module"}
                                    module_id={i}/>)

        for (let x = 0; x < module[i].feature.length; x++) {

            feat_arr.push(<SideBar_Tab  key={`feature No. ${i}-${x}`}
                                        tracking_id={{p_id:props.product_id, m_id:i, f_id:x}}
                                        tracking_id_func={props.tracking_id_func}
                                        tabName={module[i].feature[x].name}
                                        tabType={"feature"}
                                        feature_id={x}/>)

            for (let s = 0; s < module[i].feature[x].useCase.length; s++) {
                
                us_arr.push(<SideBar_Tab    key={`useCase No. ${i}-${x}-${s}`}
                                            tabType={"useCase"}
                                            tabName={module[i].feature[x].useCase[s].name}
                                            useCase_id={s}/>)
                
            }//s < module[i].feature[x].useCase.length

            feat_arr.push(<div id="useCase_div">{us_arr}</div>)
            
        }//module[i].feature.length

        mod_arr.push(<div id="feature_div">{feat_arr}</div>)
        
    }//i < module.length

    prod_arr.push(<div id="module_div">{mod_arr}</div>)
    
    return prod_arr
}

export default All_Tabs;
//tealium universal tag - utag.472 ut4.0.202409041407, Copyright 2024 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;u.ev={"view":1,"link":1};u.toBoolean=function(val){val=val||"";return val===true||val.toLowerCase()==="true"||val.toLowerCase()==="on";};u.hasgtagjs=function(){window.gtagRename=window.gtagRename||""||"gtag";if(utag.ut.gtagScriptRequested){return true;}
var i,s=document.getElementsByTagName("script");for(i=0;i<s.length;i++){if(s[i].src&&s[i].src.indexOf("gtag/js")>=0&&(s[i].id&&s[i].id.indexOf("utag")>-1)){return true;}}
var data_layer_name=""||"dataLayer";window[data_layer_name]=window[data_layer_name]||[];if(typeof window[window.gtagRename]!=="function"){window[window.gtagRename]=function(){window[data_layer_name].push(arguments);};var cross_track=u.toBoolean(""),cross_track_domains="";if(cross_track&&cross_track_domains!==""){window[window.gtagRename]("set","linker",{domains:cross_track_domains.split(","),accept_incoming:true});}
window[window.gtagRename]("js",new Date());}
return false;}
u.scriptrequested=u.hasgtagjs();u.initialized=false;u.o=window[window.gtagRename];u.mapFunc=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.mapFunc(arr,obj[i],item);}else{obj[i]=item;}};u.clearEmptyKeys=function(object){Object.keys(object).forEach(function(key){if(object[key]===''||object[key]===undefined){delete object[key];}});return object;};u.setGlobalProperties=function(data,reset,custom_property){var map={"user_id":{"name":"user_id","type":"exists","reset":true},"page_path":{"name":"page_path","type":"exists","reset":true},"page_title":{"name":"page_title","type":"exists","reset":true},"page_location":{"name":"page_location","type":"exists","reset":false},"developer_id.dYmQxMT":{"name":"developer_id.dYmQxMT","type":"exists","reset":false},"user_properties":{"name":"user_properties","type":"object","reset":true}},prop,subProp,g={};if(custom_property&&reset){g[custom_property]="";}
for(prop in utag.loader.GV(map)){if(reset&&map[prop].reset){if(map[prop].name==="user_properties"){for(subProp in data[prop]){if(!g[map[prop].name]){g[map[prop].name]={};}
g[map[prop].name][subProp]="";}}else{g[map[prop].name]="";}}else{if(map[prop].type==="bool"){if(data[prop]==true||data[prop]==="true"){g[map[prop].name]=true;}}
else if(map[prop].type==="exists"||map[prop].type==="object"){if(data[prop]){g[map[prop].name]=data[prop];}}}}
if(!utag.ut.isEmptyObject(g)){u.o("set",g);}}
u.createAddress=function(address){return u.clearEmptyKeys({first_name:address.first_name,sha256_first_name:address.sha256_first_name,last_name:address.last_name,sha256_last_name:address.sha256_last_name,street:address.street,city:address.city,region:address.region,postal_code:address.postal_code,country:address.country});}
u.getValueByIndex=function(value,index){return Array.isArray(value)?value[index]:value;};u.setUserData=function(user_data){var formattedUserData={};formattedUserData.email=user_data.email;formattedUserData.sha256_email_address=user_data.sha256_email_address;formattedUserData.phone_number=user_data.phone_number;formattedUserData.sha256_phone_number=user_data.sha256_phone_number;if(user_data.address){if(Array.isArray(user_data.address.first_name)){formattedUserData.address=user_data.address.first_name.map(function(_,i){return u.createAddress({first_name:u.getValueByIndex(user_data.address.first_name,i),sha256_first_name:u.getValueByIndex(user_data.sha256_first_name,i),last_name:u.getValueByIndex(user_data.address.last_name,i),sha256_last_name:u.getValueByIndex(user_data.sha256_last_name,i),street:u.getValueByIndex(user_data.address.street,i),city:u.getValueByIndex(user_data.address.city,i),region:u.getValueByIndex(user_data.address.region,i),postal_code:u.getValueByIndex(user_data.address.postal_code,i),country:u.getValueByIndex(user_data.address.country,i)});});}else{formattedUserData.address=u.createAddress(user_data.address);}}
u.o('set','user_data',u.clearEmptyKeys(formattedUserData));}
u.getItems=function(length){var g={},i,items=[];length=length||u.data.product_id.length||u.data.product_name.length;for(i=0;i<length;i++){g={};g.item_id=u.data.product_id[i];if(u.data.product_name[i]){g.item_name=u.data.product_name[i];}
if(u.data.product_coupon[i]){g.coupon=u.data.product_coupon[i];}
if(u.data.product_discount[i]){g.discount=u.data.product_discount[i];}
if(u.data.product_affiliation[i]){g.affiliation=u.data.product_affiliation[i];}
if(u.data.product_brand[i]){g.item_brand=u.data.product_brand[i];}
if(u.data.product_category[i]){g.item_category=u.data.product_category[i];}
if(u.data.product_subcategory[i]){g.item_category2=u.data.product_subcategory[i];}
if(u.data.product_addcategory3[i]){g.item_category3=u.data.product_addcategory3[i];}
if(u.data.product_addcategory4[i]){g.item_category4=u.data.product_addcategory4[i];}
if(u.data.product_addcategory5[i]){g.item_category5=u.data.product_addcategory5[i];}
if(u.data.product_variant[i]){g.item_variant=u.data.product_variant[i];}
if(u.data.product_unit_price[i]){g.price=u.data.product_unit_price[i];}
if(u.data.order_currency){g.currency=u.data.order_currency;}
if(u.data.product_quantity[i]){g.quantity=u.data.product_quantity[i];}
if(u.data.product_promotion_id[i]){g.promotion_id=u.data.product_promotion_id[i];}
if(u.data.product_promotion_name[i]){g.promotion_name=u.data.product_promotion_name[i];}
if(u.data.product_creative_name[i]){g.creative_name=u.data.product_creative_name[i];}
if(u.data.product_creative_slot[i]){g.creative_slot=u.data.product_creative_slot[i];}
if(u.data.product_location_id[i]){g.location_id=u.data.product_location_id[i];}
if(u.data.product_index[i]){g.index=u.data.product_index[i];}
if(u.data.product_item_list_name[i]){g.item_list_name=u.data.product_item_list_name[i];}
if(u.data.product_item_list_id[i]){g.item_list_id=u.data.product_item_list_id[i];}
if(u.data.item){Object.keys(u.data.item).forEach(function(itemKey){if(Array.isArray(u.data.item[itemKey])){g[itemKey]=u.data.item[itemKey][i]}})}
items.push(g);}
return items;}
u.event_map={add_payment_info:["coupon","currency","items","payment_type","value"],add_shipping_info:["coupon","currency","items","shipping_tier","value"],add_to_cart:["currency","items","value"],add_to_wishlist:["currency","items","value"],begin_checkout:["coupon","currency","items","value"],earn_virtual_currency:["virtual_currency_name","value"],generate_lead:["currency","value"],join_group:["group_id"],level_end:["level_name","success"],level_start:["level_name"],level_up:["level","character"],login:["method"],post_score:["score","level","character"],purchase:["affiliation","coupon","currency","items","transaction_id","shipping","tax","value"],refund:["affiliation","coupon","currency","items","transaction_id","shipping","tax","value"],remove_from_cart:["currency","items","value"],search:["search_term"],select_content:["content_type","item_id"],select_item:["items","item_list_name","item_list_id"],select_promotion:["items","location_id"],share:["method","content_type","content_id"],sign_up:["method"],spend_virtual_currency:["item_name","virtual_currency_name","value"],tutorial_begin:[],tutorial_complete:[],unlock_achievement:["achievement_id"],view_cart:["currency","items","value"],view_item:["currency","items","value"],view_item_list:["items","item_list_name","item_list_id"],view_promotion:["items","location_id"],exception:["description","fatal"],screen_view:["screen_name"]};u.std_params={"transaction_id":function(){return u.data.order_id;},"affiliation":function(){return u.data.order_store;},"value":function(event){if(event.match(/timing_complete|virtual_currency/i)){return u.data.value;}
return u.data.order_total;},"currency":function(){return u.data.order_currency;},"tax":function(){return u.data.order_tax;},"shipping":function(){return u.data.order_shipping;},"coupon":function(){return u.data.order_coupon_code;},"fatal":function(){return u.toBoolean(u.data.fatal);},"items":function(event){if(event.match(/view_item$|select_content/)){return u.getItems(1);}
return u.getItems();},"item_id":function(){return u.data.product_id[0]?u.data.product_id[0]:"";}};u.map={"event_data.formActivityId":"form-submit.form_id,form-submit-success.form_id,form-submit-error.form_id","event_data.productLineCode":"trial-download-intent.trial_product,trial-download-initiate.trial_product,trial-download-start.trial_product,trial-download-start-intent.trial_product","ga_measurement_id":"measurement_id","ga_event_name":"dynamic_event_trigger"};u.extend=[function(a,b,c,d,e,f,g){if(typeof b['tealium_environment']!='undefined'){d=b['tealium_environment'];if(typeof d=='undefined')return;c=[{'prod':'G-NZSJ72N6RX'},{'qa':'G-WWJ4KLFHYZ'},{'dev':'G-WWJ4KLFHYZ'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['ga_measurement_id']=c[e][f];m=true};};if(m)break};if(!m)b['ga_measurement_id']='G-WWJ4KLFHYZ';}},function(a,b,c,d,e,f,g){if(1){d=b['event_name'];if(typeof d=='undefined')return;c=[{'link':'link_click'},{'link-click':'link_click'},{'link_click':'link_click'},{'call-to-action-clicked':'call_to_action_clicked'},{'buy-components':'buy_intent'},{'cloud-trial':'cloud_trial'},{'edu-cloud-trial-access':'edu_cloud_trial_access'},{'file-download':'file_download'},{'form-submit':'form_submit'},{'form-submit-success':'form_submit_success'},{'form-submit-error':'form_submit_error'},{'trial-download-intent':'trial_download_intent'},{'trial-download-initiate':'trial_download_initiate'},{'trial-download-start-intent':'trial_download_start_intent'},{'trial-download-start':'trial_download_start'},{'edu-trial-download':'edu_trial_download'},{'video-play':'video_start'},{'video-complete':'video_complete'},{'video-25-percent':'video_progress'},{'video-50-percent':'video_progress'},{'video-75-percent':'video_progress'},{'video-tracking':'video_progress'},{'add-to-cart':'add_to_cart'},{'remove-from-cart':'remove_from_cart'},{'update-renewal-date-page':'view_item'},{'add-seats-page':'view_item'},{'product-page':'view_item'},{'checkout-page':'begin_checkout'},{'cart-page':'view_cart'},{'account-page':'view_account'},{'billing-page':'view_billing_page'},{'billing-payment-page':'add_payment_info'},{'purchase-page':'purchase'},{'page-view':'page_view'},{'pageview':'page_view'},{'ga-purchase-plc-event':'purchase'},{'estore_add_to_cart':'add_to_cart'},{'estore_decrease_quantity':'remove_from_cart'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['ga_event_name']=c[e][f];m=true};};if(m)break};if(!m)b['ga_event_name']='';}}];u.send=function(utag_event,data_layer){if(u.ev[utag_event]||u.ev.all!==undefined){utag.DB("send:472");utag.DB(data_layer);var a,b,c,d,i,j,has_purchase=false,prop;a=utag_event;b=data_layer;u.data={"base_url":"https://www.googletagmanager.com/gtag/js?id=##utag_measurement_id##","measurement_id":"G-WWJ4KLFHYZ","clear_global_vars":"false","data_layer_name":"","send_page_view":"true","order_id":"","order_total":"","order_subtotal":"","order_shipping":"","order_tax":"","order_store":"","order_currency":"","order_coupon_code":"","product_id":[],"product_name":[],"product_brand":[],"product_category":[],"product_subcategory":[],"product_addcategory3":[],"product_addcategory4":[],"product_addcategory5":[],"product_quantity":[],"product_unit_price":[],"product_discount":[],"product_coupon":[],"product_variant":[],"product_promotion_id":[],"product_promotion_name":[],"product_creative_name":[],"product_creative_slot":[],"product_location_id":[],"product_index":[],"product_item_list_name":[],"product_item_list_id":[],"product_affiliation":[],"event_queue":[],"config":{},"set":{"developer_id.dYmQxMT":true,"user_properties":{}},"dynamic_event_trigger":"","dynamic_event":{},"user_data":{},"event":{},"items":[]};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:472:EXTENSIONS");utag.DB(data_layer);for(var mapping_key in utag.loader.GV(u.map)){if(data_layer[mapping_key]!==undefined&&data_layer[mapping_key]!==""){var destinations=u.map[mapping_key].split(",");for(i=0;i<destinations.length;i++){u.mapFunc(destinations[i].split("."),u.data,data_layer[mapping_key]);}}else{var event_destinations=mapping_key.split(":");if(event_destinations.length===2&&data_layer[event_destinations[0]]===event_destinations[1]){if(u.map[mapping_key]){u.data.event_queue=u.data.event_queue.concat(u.map[mapping_key].split(","));}}}}
utag.DB("send:472:MAPPINGS");utag.DB(u.data);u.data.order_id=u.data.order_id||data_layer._corder||"";u.data.order_total=u.data.order_total||data_layer._ctotal||"";u.data.order_shipping=u.data.order_shipping||data_layer._cship||"";u.data.order_tax=u.data.order_tax||data_layer._ctax||"";u.data.order_store=u.data.order_store||data_layer._cstore||"";u.data.order_currency=u.data.order_currency||data_layer._ccurrency||"";u.data.order_coupon_code=u.data.order_coupon_code||data_layer._cpromo||"";u.data.customer_id=u.data.customer_id||data_layer._ccustid||"";u.data.customer_city=u.data.customer_city||data_layer._ccity||"";u.data.customer_state=u.data.customer_state||data_layer._cstate||"";u.data.customer_zip=u.data.customer_zip||data_layer._czip||"";u.data.customer_country=u.data.customer_country||data_layer._ccountry||"";if(u.data.product_id.length===0&&data_layer._cprod!==undefined){u.data.product_id=data_layer._cprod.slice(0);}
if(u.data.product_name.length===0&&data_layer._cprodname!==undefined){u.data.product_name=data_layer._cprodname.slice(0);}
if(u.data.product_brand.length===0&&data_layer._cbrand!==undefined){u.data.product_brand=data_layer._cbrand.slice(0);}
if(u.data.product_category.length===0&&data_layer._ccat!==undefined){u.data.product_category=data_layer._ccat.slice(0);}
if(u.data.product_subcategory.length===0&&data_layer._ccat2!==undefined){u.data.product_subcategory=data_layer._ccat2.slice(0);}
if(u.data.product_quantity.length===0&&data_layer._cquan!==undefined){u.data.product_quantity=data_layer._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&data_layer._cprice!==undefined){u.data.product_unit_price=data_layer._cprice.slice(0);}
if(u.data.product_discount.length===0&&data_layer._cpdisc!==undefined){u.data.product_discount=data_layer._cpdisc.slice(0);}
if(utag.ut.typeOf(u.data.measurement_id)==="string"&&u.data.measurement_id!==""){u.data.measurement_id=u.data.measurement_id.replace(/\s/g,"").split(",");}
if(u.data.data_layer_name){u.data.base_url=u.data.base_url+"&l="+u.data.data_layer_name;}
if(!u.data.measurement_id){utag.DB(u.id+": Tag not fired: Required attribute measurement_id not populated");return;}
if(u.data.gtag_enable_tcf_support){window["gtag_enable_tcf_support"]=u.toBoolean(u.data.gtag_enable_tcf_support);}
var utmParams=["utm_source","utm_medium","utm_campaign","utm_term","utm_content"];var utmPageLocation=u.data.config.page_location||data_layer["dom.url"];var utmQuery=[];utmParams.forEach(function(paramName){if(u.data[paramName]&&utmPageLocation.indexOf(paramName+"=")===-1){utmQuery.push(paramName+"="+u.data[paramName]);}});if(utmQuery.length){u.data.config.page_location=utmPageLocation.indexOf("?")===-1?utmPageLocation+"?"+utmQuery.join("&"):utmPageLocation+"&"+utmQuery.join("&");}
u.data.event.send_to=u.data.event.send_to||u.data.measurement_id;if(u.data.customer_id){u.data.config.user_id=u.data.customer_id;}
if(u.toBoolean(u.data.clear_global_vars)){u.setGlobalProperties(u.data.config,true);for(prop in utag.loader.GV(u.data.set)){if(prop!=="developer_id.dYmQxMT"){u.setGlobalProperties(u.data.set,true,prop);}}}
u.setGlobalProperties(u.data.config,false);u.setGlobalProperties(u.data.set,false);u.setUserData(u.data.user_data);if(u.data.config.send_page_view!==undefined){u.data.send_page_view=u.toBoolean(u.data.config.send_page_view);}
if(u.toBoolean(u.data.send_page_view)&&(utag_event==='view'||!u.initialized)){u.data.event_queue.unshift("page_view");}
u.data.config.send_page_view=false;for(i=0;i<u.data.measurement_id.length;i++){if(!/^[a-zA-Z]{1}-|^[a-zA-Z]{2}-/.test(u.data.measurement_id[i])){u.data.measurement_id[i]="G-"+u.data.measurement_id[i];}
u.o("config",u.data.measurement_id[i],u.data.config);}
u.initialized=true;for(i=0;i<u.data.event_queue.length;i++){if(u.data.event_queue[i]==="purchase"||u.data.event_queue[i]==="refund"){has_purchase=true;}}
if(u.data.order_id&&!has_purchase){u.data.event_queue.push("purchase");}
if(u.data.dynamic_event_trigger){u.data.event_queue.push(u.data.dynamic_event_trigger);u.data[u.data.dynamic_event_trigger]=u.data.dynamic_event||{};}
for(i=0;i<u.data.event_queue.length;i++){var event_name=u.data.event_queue[i];var event_data={};event_data=JSON.parse(JSON.stringify(u.data.event));if(u.data.event.event_callback){event_data.event_callback=u.data.event.event_callback;}
if(u.data.event.non_interaction){u.data.event.non_interaction=true;}
if(u.event_map[event_name]){for(j=0;j<u.event_map[event_name].length;j++){var event_param=u.event_map[event_name][j];var event_param_value=u.std_params[event_param]?u.std_params[event_param](event_name):u.data[event_param]||"";if(event_param_value!==""){event_data[event_param]=event_param_value;}}}
Object.keys(u.map).forEach(function(mapping_from){if(u.map[mapping_from].match(new RegExp(event_name+'^'))&&typeof b[mapping_from]!=="undefined"){var mapDestination=u.map[mapping_from].split(',')[0];var mapping_to=mapDestination.substring(event_name.length+1);event_data[mapping_to]=b[mapping_from];}});utag.ut.merge(event_data,u.data[event_name],0);utag.ut.merge(event_data,u.data.all_events||{},0);u.o("event",event_name,event_data);}
if(!u.hasgtagjs()){u.scriptrequested=true;utag.ut.gtagScriptRequested=true;u.data.base_url=u.data.base_url.replace("##utag_measurement_id##",u.data.measurement_id[0]);utag.ut.loader({type:"script",src:u.data.base_url,cb:null,loc:"script",id:"utag_472",attrs:{}});}
utag.DB("send:472:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("472","autodesk.micro-basic"));}catch(error){utag.DB(error);}

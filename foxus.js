[rewrite_local]
  
# > foco
^https?:\/\/focos\.oracle\.bendingspoonsapps\.com\/v\d\/(users\/setup|purchases\/verify\/apple) url script-response-body https://raw.githubusercontent.com/fzanb/js/main/foxus.js 


[mitm]
 
hostname = focos.oracle.bendingspoonsapps.com


***********************************/




















var obj=JSON.parse($response.body);obj.me.active_subscriptions_ids=["com.focos.1w_t8_1w"],$done({body:JSON.stringify(obj)});

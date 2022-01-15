/*
网易蜗牛读书 解锁特权

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body https://raw.githubusercontent.com/fzanb/js/main/wnyd.js

[mitm]
hostname = p.du.163.com
**************************/
var body = $response.body;
var obj = JSON.parse(body);

obj.tradeEndTime = 4102415999000;
body = JSON.stringify(obj);
$done({body});

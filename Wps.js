QuantumultX:

[rewrite_local]
^https?:\/\/account\.wps\.cn\/api\/users url script-response-body https://raw.githubusercontent.com/fzanb/js/main/Wps.js

[mitm]
hostname = account.wps.cn

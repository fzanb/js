QuantumultX:

[rewrite_local]
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://raw.githubusercontent.com/fzanb/js/main/Kuwo.js

[mitm]
hostname = vip1.kuwo.cn

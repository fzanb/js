/*
 *
 *
6.4.4
2022-01-23

*******************************

[rewrite_local]


^https?:\/\/api\.revenuecat\.com\/v1\/subscribers\/(identify|\d+)$ url script-response-body https://raw.githubusercontent.com/fzanb/js/main/audiomack.js

[mitm] 

hostname = api.revenuecat.com
*
*
*/


var objc = JSON.parse($response.body);

    objc = 
{
  "request_date" : "2021-01-24T09:52:51Z",
  "request_date_ms" : 1611453171000,
  "subscriber" : {
    "entitlements" : {
      "Premium1" : {
        "expires_date" : "2999-09-28T09:00:00Z",
        "grace_period_expires_date" : null,
        "product_identifier" : "com.audiomack.premium.2018",
        "purchase_date" : "2021-01-24T09:51:12Z"
      }
    },
    "first_seen" : "2021-01-23T15:26:25Z",
    "last_seen" : "2021-01-24T09:51:16Z",
    "management_url" : "itms-apps://apps.apple.com/account/subscriptions",
    "non_subscriptions" : {},
    "original_app_user_id" : "$RCAnonymousID:98acaef952e6c42b364db358b3a48487",
    "original_application_version" : "4396",
    "original_purchase_date" : "2022-01-23T12:45:28Z",
    "other_purchases" : {},
    "subscriptions" : {
      "com.audiomack.premium.2018" : {
        "billing_issues_detected_at" : null,
        "expires_date" : "2999-09-28T09:00:00Z",
        "grace_period_expires_date" : null,
        "is_sandbox" : false,
        "original_purchase_date" : "2021-01-24T09:51:13Z",
        "ownership_type" : "PURCHASED",
        "period_type" : "premium",
        "purchase_date" : "2021-01-24T09:51:12Z",
        "store" : "app_store",
        "unsubscribe_detected_at" : null
      }
    }
  }
};

$done({body : JSON.stringify(objc)});

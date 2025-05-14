/*
 *
 *
 酷我音乐 解锁VIP & 去广告
 使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# 酷我音乐 解锁VIP & 去广告
^https?:\/\/(vip|musicpay|account)\.kuwo\.cn\/.*\/(vip|user)\/(vipUser|verifyUser) url script-response-body kuwo_vip.js

[mitm]
hostname = *.kuwo.cn

*
*
*/
// ==Kuwo Music VIP Unlock Script==
// 适配 Quantumult X
let body = $response.body;

try {
  let obj = JSON.parse(body);

  // 判断是否为用户信息返回
  if (obj.data) {
    obj.data.vip = 1;
    obj.data.vipExpire = 4092599349000; // 设置一个很远的时间戳
    obj.data.isVip = true;
    obj.data.vipLevel = 9;
    obj.data.payType = 1;
  }

  body = JSON.stringify(obj);
} catch (e) {
  console.log("Kuwo VIP unlock error:", e);
}

$done({ body });

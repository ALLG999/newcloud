/*
Quantumult X Script
番茄小说本地会员模拟
作者：ChatGPT
*/

let body = $response.body;
let obj = JSON.parse(body);

// 通用 VIP 字段修改逻辑（可能因接口而异）
if (obj.data) {
  obj.data.is_vip = true;
  obj.data.vip_type = "vip";
  obj.data.vip_expired_at = 4092599349; // 未来时间戳
  obj.data.expire_time = 4092599349;
  obj.data.name = "番茄会员";
  obj.data.remain_day = 9999;
  obj.data.is_auto_renewal = true;
}

// 某些接口返回不带 data 的顶层字段
if (obj.vip_status !== undefined) {
  obj.vip_status = 1;
  obj.vip_type = 2;
  obj.vip_end_time = "2099-12-31 23:59:59";
}

$done({ body: JSON.stringify(obj) });

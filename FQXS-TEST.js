
/*
脚本功能：番茄去广告
下载地址：appstore
软件版本：所有
脚本作者：ALLG999
飞机频道：https://t.me/allg999
更新时间：2025-05-16
测试版本：5.6.5/6.2.1
降级id：854680019/865224914
最新版6.5.9测试有效（文中【看视频免30分钟广告】点击广告「网络异常，请稍候再试」）
注意事项：1. ⚠️建议启动 Quantumult X 后再启动番茄小说；
         2. ⚠️开启此规则可能导致抖音直播不可用；
         3. ⚠️京东购物 & 淘宝购物 & 微信小游戏广告暂未完全处理；
配合以下分流食用更香哦！（勾选策略偏好--REJECT）
         https://raw.githubusercontent.com/EAlyce/conf/main/Rule/FQNovelAdvertising.list
         https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/FQFL.list
*/
#!name=番茄小说
#!desc=番茄小说去广告
[filter_local]
PROCESS-NAME,com.dragon.read,DIRECT
DOMAIN-KEYWORD,ad,REJECT
DOMAIN-KEYWORD,sdk,REJECT

[rewrite_local]


[MITM]
hostname = %APPEND%,*.fqnovel.com,*.zijieapi.com,*.pangolin-sdk-toutiao.com

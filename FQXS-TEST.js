
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

# 🍅 本地伪装 VIP（仅界面效果，并没有能力写出来）
//^https?:\/\/.*\/(user\/vip_info|vip\/user_info).*$ script-response-body https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/FQBDHY.js
//^https:\/\/api-access\.pangolin-sdk-toutiao\.com\/.* script-response-body https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/FQXSHY.JS

# 🧠 广告识别数据相关接口屏蔽脚本（用于分析屏蔽）
^https:\/\/api-access\.pangolin-sdk-toutiao\.com\/.* script-response-body https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/FQXSHY.JS

# 🎥 抖音推荐/搜索等广告内容脚本处理
^https:\/\/(.pangolin-sdk-toutiao|.*douyin.*|.snssdk|pglstatp-toutiao)\.com\/(search|recommend|feed).* script-response-body https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/DYZB.js

# ⚠️【可选】抖音直播广告极限拦截（会导致无法观看直播）
^https?:\/\/(live|.*douyin.*)\.com\/.* url reject-200

# 📸 图文类广告 URL 拦截（通用广告链接）
^https?:\/\/.*\.ecombdimg\.com\/.*ad.* url reject-200
^https?:\/\/.*\.bdurl\.net\/.*ad.* url reject-200

# 🔌 Pangolin SDK 广告系统核心接口封禁
^https?:\/\/.*\.pangolin-sdk-toutiao\.com\/.*(live|ad|api|sdk).* url reject-200
^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/.* url reject-200
^https?:\/\/.*pangolin-sdk-toutiao.*\.com\/.* url reject-200

# 🌐 其他广告域名/视频广告图像拦截
^https?:\/\/.*\.oceanengine.com url reject-200
^https?:\/\/.*\.zijieapi.com url reject-200
^https?:\/\/.*\.fqnovelpic.com url reject-200
^https?:\/\/.*\.ecombdapi.com url reject-200
^https?:\/\/.*\.snssdk.com url reject-200
^https?:\/\/mcs.snssdk.com url reject-200
^https?:\/\/.*\.fqnovel.com url reject-200
^https?:\/\/.*\.byteimg.com url reject-200
^https?:\/\/.*\.amemv.com url reject-200
^https?:\/\/.*\.bytegecko.com url reject-200
^https?:\/\/.*\.safebrowsing.apple url reject-200

# 🎯 特定 JSON 接口/广告 SDK 拦截
^https?:\/\/.*\.zijieapi\.com\/.*(ad|api|sdk).* url reject-200
^https?:\/\/.*\.pangolin-sdk-toutiao\.com\/.*(ad|api|sdk).* url reject-200
^https?:\/\/.*\.wcp.taobao.com\/.*adstrack.* url reject-200

# 📹 媒体资源拦截（如视频图像广告）
^https?:\/\/.+\.pglstatp-toutiao\.com\/.+\/toutiao\.mp4 - reject
^https?:\/\/.+\.(pglstatp-toutiao|pstatp)\.com\/(obj|img)\/(ad-app-package|ad)\/.+ - reject
^https?:\/\/.+\.snssdk\.com\/video\/play\/1\/toutiao\/.+\/mp4 - reject
^https?:\/\/.+\.snssdk\.com\/api\/ad\/.+ - reject

# 🧱 请求头处理（用于躲避识别/广告标识）
^https?:\/\/.*\.zijieapi.*\.com.* script-request-header https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/FQLJ.js

# =========================
[MITM]
hostname = %APPEND%,.pangolin-sdk-toutiao,*.ecombdimg.com,*.douyin.com,*.ihunantv.com,ecombdapi.com,bdurl.net,byteimg.com,fqnovel.com,fqnovelpic.com,pangolin-sdk-toutiao.com,.pstatp.com,.pglstatp-toutiao.com,gurd.snssdk.com,.snssdk.com,.default.ixigua.com,.360buyimg.com,.zijieapi.com,.buysecm.com,wcp.taobao.com

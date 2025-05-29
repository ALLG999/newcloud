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
功能检测：登录✅ 关注作者✅ 作者动态✅  点赞✅
         小说阅读✅ 简介✅ 热门书评✅ 小说内评论✅ 小说下载✅ 小说封面❌ 小说内图片❌
         经典✅ 小说下载✅ 字里行间✅
         知识✅
         听书✅ 听书下载✅ 点击右上角番茄❌
         看剧✅ 追剧✅ 评论✅ 点赞✅（ps：因为走的代理，有点卡）
         视频✅ 追剧✅ 评论✅ 点赞✅（ps：因为走的代理，有点卡）
         动漫✅ 追剧✅ 评论✅ 点赞✅（ps：因为走的代理，有点卡）
         买书✅ 
         短篇✅ 看广告继续阅读✅ （ps：点击提示网络错误，已解锁更多内容）
         漫画❌ 简介✅ 封面❌ 内容❌
         最新上架✅
         福利✅ 开宝箱领番茄✅ 看视频最高领***番茄❌ 现金收益--银行卡提现✅ 支付宝看视频提现❌ 番茄红包雨✅ 看视频翻倍领取❌ 看视频赚番茄❌ 逛街赚番茄❌ （ps：逛J8，看个破页面一分钟才给200，打发叫花子。还得滑动，不建议整这个！）看漫画赚番茄❌ 邀新领番茄✅ 写小说赚番茄✅ 读出版物赚番茄✅ 看视频翻倍领取❌ 看佳作赚番茄✅ 查取现额度领奖励✅ （ps：别点） 抽奖必中番茄✅ 看视频抽奖❌ 阅读抽奖✅ 逛街抽奖❌ 连续抽奖✅ 去芭芭农场领水果✅ （ps：跳转支付宝）
         书架✅ 小说封面❌（ps：除非你开圈X前加载过封面就能显示）
         我的✅ 领取我的今日专属福利❌ 
配合以下分流食用更香哦！（勾选策略偏好--REJECT）
         https://raw.githubusercontent.com/EAlyce/conf/main/Rule/FQNovelAdvertising.list
         https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/FQFL.list
这是测试版（不稳定，不定时更新）
         https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/FQXS-TEST.js
这是LOON版（CHATGPT转译）
         https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/FQXS-LOON.js

2025-5-29：这几天测试了汽水音乐，发现不弹【免】字，但是也能听vip歌曲，大伙可以测试下行不行。ps：我免广告有二十几天，测试结果不一定准确，最好是没有任何会员和免广告权限的号测试，欢迎反馈！
         
如果你有什么软件需要去广告的，可以联系我尝试制作一个。（我是新手！）
*/
#!name=番茄小说
#!desc=番茄小说去广告
[filter_remote]
//https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/FQFL.list, tag=番茄分流, force-policy=reject, update-interval=172800, opt-parser=true, enabled=true
//https://raw.githubusercontent.com/EAlyce/conf/main/Rule/FQNovelAdvertising.list, tag=番茄去广告, force-policy=reject, update-interval=172800, opt-parser=true, enabled=true
         
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
[filter_local]

# 📱 进程名过滤（确保模块识别）
PROCESS-NAME,com.dragon.read,番茄小说

# 📍 精准域名拦截
DOMAIN,p6-ad-sign.byteimg.com,REJECT
DOMAIN,p9-ad-sign.byteimg.com,REJECT
DOMAIN,ads0-normal-lq.zijieapi.com,REJECT
DOMAIN,ads1-normal-lq.zijieapi.com,REJECT
DOMAIN,ads2-normal-lq.zijieapi.com,REJECT
DOMAIN,ads3-normal-lq.zijieapi.com,REJECT
DOMAIN,ads4-normal-lq.zijieapi.com,REJECT
DOMAIN,ads5-normal-lq.zijieapi.com,REJECT

# 🧬 广告推送/回传接口拦截
DOMAIN,api-access.pangolin-sdk-toutiao.com,REJECT
DOMAIN,api-access.pangolin-sdk-toutiao1.com,REJECT
DOMAIN,i-lq-snssdk.com,REJECT
DOMAIN,i.snssdk.com,REJECT
DOMAIN,is.snssdk.com,REJECT
DOMAIN,mcs.snssdk.com,REJECT

# 🔍 TNC 系列追踪/配置节点屏蔽
DOMAIN,tnc0-aliec1.zijieapi.com,REJECT
DOMAIN,tnc0-aliec2.zijieapi.com,REJECT
DOMAIN,tnc0-aliec3.zijieapi.com,REJECT
DOMAIN,tnc1-aliec1.zijieapi.com,REJECT
DOMAIN,tnc1-aliec2.zijieapi.com,REJECT
DOMAIN,tnc1-aliec3.zijieapi.com,REJECT
DOMAIN,tnc2-aliec1.zijieapi.com,REJECT
DOMAIN,tnc2-aliec2.zijieapi.com,REJECT
DOMAIN,tnc2-aliec3.zijieapi.com,REJECT
DOMAIN,tnc3-aliec1.zijieapi.com,REJECT
DOMAIN,tnc3-aliec2.zijieapi.com,REJECT
DOMAIN,tnc3-aliec3.zijieapi.com,REJECT

# 🛡️ 杂项广告/监控域名
DOMAIN,activity-ag.awemeughun.com,REJECT
DOMAIN,security-lq.snssdk.com,REJECT
DOMAIN,v6-novelapp.ixigua.com,REJECT
DOMAIN,*novelapp.ixigua.com,REJECT
DOMAIN,*default.ixigua.com,REJECT
DOMAIN,apd-pcdnwxlogin.teg.tencent-cloud.net,REJECT
DOMAIN,api.iegadp.qq.com,REJECT
DOMAIN,sf3-ttcdn-tos.pstatp.com,REJECT

# 🌍 域名后缀屏蔽（字节跳动/京东相关）
DOMAIN-SUFFIX,byteimg.com,DIRECT
DOMAIN-SUFFIX,pglstatp-toutiao.com,REJECT
DOMAIN-SUFFIX,byteorge.com,REJECT
DOMAIN-SUFFIX,bytegoofy.com,REJECT
DOMAIN-SUFFIX,bytedance.com,REJECT
DOMAIN,360buyimg.com,REJECT
DOMAIN,buysecm.com,REJECT

# 📌 泛关键词拦截（低精度但广覆盖）
//DOMAIN-KEYWORD,zijieapi,REJECT
//DOMAIN-KEYWORD,api,REJECT
//DOMAIN-KEYWORD,sdk,REJECT
//DOMAIN-KEYWORD,ad,REJECT
//DOMAIN-KEYWORD,video,REJECT
//DOMAIN-KEYWORD,img,REJECT

# 🧭 特定 IP 黑名单（静态封锁某些广告节点）
IP-CIDR,49.71.37.101/32,REJECT,no-resolve
IP-CIDR,117.71.105.23/32,REJECT,no-resolve
IP-CIDR,218.94.207.205/32,REJECT,no-resolve
IP-CIDR,117.92.229.188/32,REJECT,no-resolve
IP-CIDR,101.36.166.16/32,REJECT,no-resolve
IP-CIDR,180.96.2.114/32,REJECT,no-resolve

# =========================
[MITM]
hostname = %APPEND%,.pangolin-sdk-toutiao,*.ecombdimg.com,*.douyin.com,*.ihunantv.com,ecombdapi.com,bdurl.net,byteimg.com,fqnovel.com,fqnovelpic.com,pangolin-sdk-toutiao.com,.pstatp.com,.pglstatp-toutiao.com,gurd.snssdk.com,.snssdk.com,.default.ixigua.com,.360buyimg.com,.zijieapi.com,.buysecm.com,wcp.taobao.com

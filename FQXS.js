
/*
脚本功能：番茄去广告
下载地址：appstore
软件版本：所有
脚本作者：ALLG999
飞机频道：https://t.me/allg999
更新时间：2025-05-16
测试版本：5.6.5/6.2.1
降级id：854680019/865224914
最新版6.5.9测试部分有效（文中【看视频免30分钟广告】点击广告无法去除「待解决，我有空再研究一下」））
更新日志：5.17 禁用抖音直播广告，会出现广告界面，不会播放广告（缺点：抖音看不了直播）
             目前发现问题：京东广告，微信小游戏广告还未完成
        5.18
使用声明：⚠️连接圈X再打开番茄！广告太他妈的多了.
         ⚠️开启本脚本可能导致抖音直播无法正常使用！！！
         
         配合食用更香哦！https://raw.githubusercontent.com/EAlyce/conf/main/Rule/FQNovelAdvertising.list
*/
#!name=番茄小说
#!desc=番茄小说去广告

[rewrite_local]
# VIP伪装 & 抖音/番茄小说广告脚本替换
^https?:\/\/.*\/(user\/vip_info|vip\/user_info).* script-response-body https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/FQBDHY.js
^https:\/\/api-access\.pangolin-sdk-toutiao\.com\/.* script-response-body https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/FQXSHY.JS
^https:\/\/(.pangolin-sdk-toutiao|.*douyin.*|.snssdk|pglstatp-toutiao)\.com\/(search|recommend|feed).* script-response-body https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/DYZB.js
^https?:\/\/.*\/(ad|advertisement|commercial|feed|launch|start)\/?.* url reject-200
# 可选：抖音直播彻底拦截（副作用：直播功能无法使用）
^https?:\/\/(live|.*douyin.*)\.com\/.* url reject-200

[filter_remote]
# 常规广告拦截（部分基于域名关键字 ad）
^https?:\/\/.*\.(pangolin-sdk-toutiao|ecombdimg|bdurl|snssdk|zijieapi|byteimg|oceanengine|fqnovelpic|fqnovel|bytescm|bytetos|volccdn|volcengine|bytegecko|bytegoofy)\.com\/.*ad.* url reject-200
^https?:\/\/.*\.(pangolin-sdk-toutiao|ecombdimg|bdurl|snssdk|zijieapi|fqnovel|byteimg)\.com\/.* url reject-200
^https?:\/\/mcs\.snssdk\.com url reject-200
^https?:\/\/normal\.(zijieapi|fqnovel)\.com url reject-200
^https?:\/\/lq\.(fqnovel|snssdk)\.com url reject-200
^https?:\/\/i-lq\.snssdk\.com url reject-200

# 抖音 Webcast 直播广告流（MP4）
^https?:\/\/.+\.(pglstatp-toutiao|pstatp)\.com\/(obj|img)\/(ad|web\.business\.image|ad-app-package)\/.+ - reject
^https?:\/\/.+\.byteimg.com\/tos-cn-i-1yzifmftcy\/.+\.jpeg - reject
^https?:\/\/.+\.pstatp\.com\/obj\/mosaic-legacy\/.+\?from=ad - reject
^https?:\/\/.+\.snssdk\.com\/api\/ad\/.+ - reject

# 抖音请求头劫持脚本
^https?:\/\/.*\.zijieapi.*\.com.* url script-request-header https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/FQLJ.js

[filter_local]
PROCESS-NAME,com.dragon.read,番茄小说广告

[filter_local]
PROCESS-NAME,com.dragon.read,番茄小说广告

# 小说正常接口白名单
DOMAIN,ecombdapi.com,DIRECT

# 关键词拦截（广告域名关键词）
DOMAIN-KEYWORD,ad,REJECT
DOMAIN-KEYWORD,live,REJECT
DOMAIN-KEYWORD,img,REJECT
DOMAIN-KEYWORD,video,REJECT
DOMAIN-KEYWORD,sdk,REJECT
DOMAIN-KEYWORD,api,REJECT

# 其他广告相关域名拦截
DOMAIN-KEYWORD,zijieapi,REJECT
DOMAIN-KEYWORD,dig.zjurl.cn,REJECT
DOMAIN-KEYWORD,dig.bdurl.net,REJECT
DOMAIN,is.snssdk.com,REJECT
DOMAIN,p6-ad-sign.byteimg.com,REJECT
DOMAIN,p9-ad-sign.byteimg.com,REJECT
DOMAIN,mcs.snssdk.com,REJECT
DOMAIN,i.snssdk.com,REJECT
DOMAIN,i-lq.snssdk.com,REJECT
DOMAIN,v6-novelapp.ixigua.com,REJECT
DOMAIN,api-access.pangolin-sdk-toutiao.com,REJECT
DOMAIN,api-access.pangolin-sdk-toutiao1.com,REJECT
DOMAIN,byteimg.com,REJECT
DOMAIN,bdurl.net,REJECT
DOMAIN,fqnovel.com,REJECT
DOMAIN,fqnovelpic.com,REJECT
DOMAIN,ecombdimg.com,REJECT
DOMAIN,bytegoofy.com,REJECT
DOMAIN,bytegecko.com,REJECT
DOMAIN,volcengine.com,REJECT
DOMAIN,volccdn.com,REJECT
DOMAIN,bytetos.com,REJECT
DOMAIN,360buyimg.com,REJECT
DOMAIN,api.iegadp.qq.com,REJECT

[MITM]
hostname = %APPEND%,*.pangolin-sdk-toutiao.com,*.pangolin-sdk-toutiao-a.com,*.pangolin-sdk-toutiao-b.com,*.pangolin-sdk-toutiao-c.com,*.ecombdimg.com,*.douyin.com,*.snssdk.com,*.pglstatp-toutiao.com,*.pstatp.com,*.zijieapi.com,*.byteimg.com,*.bdurl.net,*.ecombdapi.com,*.volcengine.com,*.volccdn.com,*.bytegecko.com,*.bytetos.com,*.bytegoofy.com,*.fqnovel.com,*.fqnovelpic.com,*.ixigua.com,*.buysecm.com,wcp.taobao.com,*.360buyimg.com

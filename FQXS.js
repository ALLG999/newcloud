
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
# 核心：拦截推荐流广告，替换广告响应体
^https:\/\/(pangolin-sdk-toutiao|douyin|snssdk|pglstatp-toutiao)\.com\/(search|recommend|feed).* script-response-body https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/DYZB.js

# 抖音直播广告拦截（开启后抖音直播可能无法正常使用，慎用）
# ^https?:\/\/(live|.*douyin.*)\.com\/.* url reject-200

# 电商广告请求拦截
^https?:\/\/.*\.(ecombdimg|bdurl|buysecm)\.com\/.*ad.* url reject-200

# 字节跳动直播广告及SDK广告请求拦截
^https?:\/\/.*pangolin-sdk-toutiao\.com\/.*(live|ad|union\/sdk|get_ads|stats|settings).* url reject-200
^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/.* url reject-200

# 静态广告资源图片拦截
^https?:\/\/.*toutiao.*\.(png|jpg|jpeg|webp)$ url reject-200

# 视频广告mp4拦截
^https?:\/\/.+\.(pglstatp-toutiao|pstatp)\.com\/.+\/toutiao\.mp4 url reject-200

# 字节跳动相关广告图片、视频资源拦截
^https?:\/\/.+\.(pglstatp-toutiao|pstatp)\.com\/(obj|img)\/(ad-app-package|ad|web\.business\.image)\/.+ url reject-200
^https?:\/\/.+\.snssdk\.com\/api\/ad\/.+ url reject-200
^https?:\/\/.+\.snssdk\.com\/video\/play\/1\/toutiao\/.+\/mp4 url reject-200

# 专项广告流量请求拦截
^https?:\/\/normal\.zijieapi\.com url reject-200
^https?:\/\/lq\.fqnovel\.com url reject-200
^https?:\/\/normal\.fqnovel\.com url reject-200
^https?:\/\/api\.pangolin-sdk-toutiao.com url reject-200
^https?:\/\/api\.pangolin-sdk-toutiao1.com url reject-200
^https?:\/\/lq\.snssdk\.com url reject-200
^https?:\/\/i-lq\.snssdk\.com url reject-200
^https?:\/\/api\.fqnovel\.com url reject-200

# 广告统计与跟踪请求拦截
^https?:\/\/.+\.pstatp\.com\/bytecom\/resource\/track-log\/src\/.+ url reject-200

# 脚本注入处理（header修改）
^https?:\/\/.*\.zijieapi.*\.com.* url script-request-header https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/FQLJ.js


[filter_local]
PROCESS-NAME,com.dragon.read,番茄小说广告

# 字节跳动广告域名
DOMAIN,p6-ad-sign.byteimg.com,REJECT
DOMAIN,p9-ad-sign.byteimg.com,REJECT

# 番茄小说广告服务域名
DOMAIN,ads0-normal-lq.zijieapi.com,REJECT
DOMAIN,ads1-normal-lq.zijieapi.com,REJECT
DOMAIN,ads2-normal-lq.zijieapi.com,REJECT
DOMAIN,ads3-normal-lq.zijieapi.com,REJECT
DOMAIN,ads4-normal-lq.zijieapi.com,REJECT
DOMAIN,ads5-normal-lq.zijieapi.com,REJECT

# 番茄小说API广告域名
DOMAIN,api0-normal-sinfonlinea.fqnovel.com,REJECT
DOMAIN,api1-normal-sinfonlinea.fqnovel.com,REJECT
DOMAIN,api2-normal-sinfonlinea.fqnovel.com,REJECT
DOMAIN,api3-normal-sinfonlinea.fqnovel.com,REJECT
DOMAIN,api4-normal-sinfonlinea.fqnovel.com,REJECT
DOMAIN,api5-normal-sinfonlinea.fqnovel.com,REJECT

# 字节跳动广告SDK访问域名
DOMAIN,api-access.pangolin-sdk-toutiao.com,REJECT
DOMAIN,api-access.pangolin-sdk-toutiao1.com,REJECT

# 字节跳动短视频广告及直播相关
DOMAIN,i-lq-snssdk.com,REJECT
DOMAIN,i.snssdk.com,REJECT
DOMAIN,is.snssdk.com,REJECT
DOMAIN,mcs.snssdk.com,REJECT

# 字节跳动广告流量域名
DOMAIN-SUFFIX,pglstatp-toutiao.com,REJECT
DOMAIN-SUFFIX,pstatp.com,REJECT
DOMAIN-SUFFIX,byteorge.com,REJECT
DOMAIN-SUFFIX,bytegoofy.com,REJECT
DOMAIN-SUFFIX,bytedance.com,REJECT

# 其他广告及追踪域名
DOMAIN,360buyimg.com,REJECT
DOMAIN,buysecm.com,REJECT
DOMAIN,snssdk.com,REJECT
DOMAIN,fqnovel.com,REJECT
DOMAIN,fqnovelpic.com,REJECT
DOMAIN,byteimg.com,REJECT
DOMAIN,bdurl.net,REJECT
DOMAIN,ecombdapi.com,REJECT

# 广告服务器IP黑名单（无解析，直接拒绝）
IP-CIDR,49.71.37.101/32,REJECT,no-resolve
IP-CIDR,117.71.105.23/32,REJECT,no-resolve
IP-CIDR,218.94.207.205/32,REJECT,no-resolve
IP-CIDR,117.92.229.188/32,REJECT,no-resolve
IP-CIDR,101.36.166.16/32,REJECT,no-resolve
IP-CIDR,180.96.2.114/32,REJECT,no-resolve

# 关键字拦截规则
DOMAIN-KEYWORD,zijieapi,REJECT
DOMAIN-KEYWORD,dig.bdurl.net,REJECT
DOMAIN-KEYWORD,dig.zjurl.cn,REJECT
DOMAIN-KEYWORD,is.snssdk.com,REJECT

# 关键词拦截 毁天灭地
//DOMAIN-KEYWORD,api,REJECT
//DOMAIN-KEYWORD,sdk,REJECT
//DOMAIN-KEYWORD,ad,REJECT
DOMAIN-KEYWORD,video,REJECT
DOMAIN-KEYWORD,img,REJECT
DOMAIN-KEYWORD,live,REJECT

# 细粒度过滤（域名与关键字组合）
AND,((DOMAIN-KEYWORD,zijieapi),(DOMAIN-KEYWORD,ad)),REJECT


[MITM]
hostname = %APPEND% *.pangolin-sdk-toutiao.com,*.douyin.com,*.snssdk.com,*.ecombdimg.com,*.zijieapi.com,*.fqnovel.com,*.fqnovelpic.com,*.byteimg.com,*.pstatp.com,*.pglstatp-toutiao.com,gurd.snssdk.com,default.ixigua.com,buysecm.com,wcp.taobao.com,360buyimg.com

# Loon 配置文件 - 番茄小说去广告规则
# 作者：ALLG999
# Telegram频道：https://t.me/allg999
# 本文件由 ChatGPT 自动转换生成
# 更新时间：2025-05-25

#  圈X正式版：https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/FQXS.js
#  圈X测试版https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/FQXS-TEST.js

[General]
# DNS劫持和广告过滤建议配合 MITM 使用
skip-proxy = 360buyimg.com

[Remote Rule]
# 引入外部去广告分流规则
https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/FQFL.list, tag=番茄分流, policy=REJECT, enabled=true
https://raw.githubusercontent.com/EAlyce/conf/main/Rule/FQNovelAdvertising.list, tag=番茄去广告, policy=REJECT, enabled=true

[Script]
# VIP 信息伪装(没用)
//http-response ^https?:\/\/.*\/(user\/vip_info|vip\/user_info).* script-path=https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/FQBDHY.js, requires-body=true, tag=VIP伪装

# Pangolin SDK 广告分析拦截
http-response ^https:\/\/api-access\.pangolin-sdk-toutiao\.com\/.* script-path=https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/FQXSHY.JS, requires-body=true, tag=Pangolin广告分析

# 抖音类推荐广告拦截
http-response ^https:\/\/(\.pangolin-sdk-toutiao|.*douyin.*|\.snssdk|pglstatp-toutiao)\.com\/(search|recommend|feed).* script-path=https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/DYZB.js, requires-body=true, tag=抖音推荐广告

# 请求头处理脚本（可用于去除不必要的参数）
http-request ^https?:\/\/.*\.zijieapi.*\.com.* script-path=https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/FQLJ.js, requires-headers=true, tag=请求头处理

[Rewrite]
# 通用广告请求重定向为空响应
^https?:\/\/(live|.*douyin.*)\.com\/.* reject-200
^https?:\/\/.*\.ecombdimg\.com\/.*ad.* reject-200
^https?:\/\/.*\.bdurl\.net\/.*ad.* reject-200
^https?:\/\/.*\.pangolin-sdk-toutiao\.com\/.*(live|ad|api|sdk).* reject-200
^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/.* reject-200
^https?:\/\/.*pangolin-sdk-toutiao.*\.com\/.* reject-200
^https?:\/\/.*\.oceanengine.com reject-200
^https?:\/\/.*\.zijieapi.com reject-200
^https?:\/\/.*\.fqnovelpic.com reject-200
^https?:\/\/.*\.ecombdapi.com reject-200
^https?:\/\/.*\.snssdk.com reject-200
^https?:\/\/mcs.snssdk.com reject-200
^https?:\/\/.*\.fqnovel.com reject-200
^https?:\/\/.*\.byteimg.com reject-200
^https?:\/\/.*\.amemv.com reject-200
^https?:\/\/.*\.bytegecko.com reject-200
^https?:\/\/.*\.safebrowsing.apple reject-200
^https?:\/\/.*\.zijieapi\.com\/.*(ad|api|sdk).* reject-200
^https?:\/\/.*\.pangolin-sdk-toutiao\.com\/.*(ad|api|sdk).* reject-200
^https?:\/\/.*\.wcp.taobao.com\/.*adstrack.* reject-200
^https?:\/\/.*\.pglstatp-toutiao\.com\/.+\/toutiao\.mp4 reject
^https?:\/\/.*\.(pglstatp-toutiao|pstatp)\.com\/(obj|img)\/(ad-app-package|ad)\/.+ reject
^https?:\/\/.*\.snssdk\.com\/video\/play\/1\/toutiao\/.+\/mp4 reject
^https?:\/\/.*\.snssdk\.com\/api\/ad\/.+ reject

[Rule]
# 进程层面拦截番茄小说主程序
PROCESS-NAME,com.dragon.read,REJECT

# 特定域名拦截
DOMAIN,p6-ad-sign.byteimg.com,REJECT
DOMAIN,p9-ad-sign.byteimg.com,REJECT
DOMAIN,ads0-normal-lq.zijieapi.com,REJECT
DOMAIN,ads1-normal-lq.zijieapi.com,REJECT
DOMAIN,ads2-normal-lq.zijieapi.com,REJECT
DOMAIN,ads3-normal-lq.zijieapi.com,REJECT
DOMAIN,ads4-normal-lq.zijieapi.com,REJECT
DOMAIN,ads5-normal-lq.zijieapi.com,REJECT

DOMAIN,api-access.pangolin-sdk-toutiao.com,REJECT
DOMAIN,api-access.pangolin-sdk-toutiao1.com,REJECT
DOMAIN,i-lq-snssdk.com,REJECT
DOMAIN,i.snssdk.com,REJECT
DOMAIN,is.snssdk.com,REJECT
DOMAIN,mcs.snssdk.com,REJECT

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

DOMAIN,activity-ag.awemeughun.com,REJECT
DOMAIN,security-lq.snssdk.com,REJECT
DOMAIN,v6-novelapp.ixigua.com,REJECT
DOMAIN-SUFFIX,novelapp.ixigua.com,REJECT
DOMAIN-SUFFIX,default.ixigua.com,REJECT
DOMAIN,apd-pcdnwxlogin.teg.tencent-cloud.net,REJECT
DOMAIN,api.iegadp.qq.com,REJECT
DOMAIN,sf3-ttcdn-tos.pstatp.com,REJECT

# 放行图片资源域名（可调试）
DOMAIN-SUFFIX,byteimg.com,DIRECT

# 广告类域名后缀拦截
DOMAIN-SUFFIX,pglstatp-toutiao.com,REJECT
DOMAIN-SUFFIX,byteorge.com,REJECT
DOMAIN-SUFFIX,bytegoofy.com,REJECT
DOMAIN-SUFFIX,bytedance.com,REJECT
DOMAIN,360buyimg.com,REJECT
DOMAIN,buysecm.com,REJECT

# 关键词拦截
//DOMAIN-KEYWORD,zijieapi,REJECT
//DOMAIN-KEYWORD,api,REJECT
///DOMAIN-KEYWORD,sdk,REJECT
//DOMAIN-KEYWORD,ad,REJECT
//DOMAIN-KEYWORD,video,REJECT
//DOMAIN-KEYWORD,img,REJECT

# 特定 IP 精准拦截
IP-CIDR,49.71.37.101/32,REJECT,no-resolve
IP-CIDR,117.71.105.23/32,REJECT,no-resolve
IP-CIDR,218.94.207.205/32,REJECT,no-resolve
IP-CIDR,117.92.229.188/32,REJECT,no-resolve
IP-CIDR,101.36.166.16/32,REJECT,no-resolve
IP-CIDR,180.96.2.114/32,REJECT,no-resolve

[MITM]
hostname = *.pangolin-sdk-toutiao.com,*.ecombdimg.com,*.douyin.com,*.ihunantv.com,ecombdapi.com,bdurl.net,byteimg.com,fqnovel.com,fqnovelpic.com,.pstatp.com,.pglstatp-toutiao.com,gurd.snssdk.com,.snssdk.com,.default.ixigua.com,.360buyimg.com,.zijieapi.com,.buysecm.com,wcp.taobao.com

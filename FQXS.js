/*
脚本功能：番茄去广告
下载地址：appstore
软件版本：所有
脚本作者：ALLG
更新时间：2025-05-16
测试版本：5.6.5
降级id：854680019
使用声明：⚠️卸载软件连接圈X再打开番茄！广告太他妈的多了，降级
         ⚠️开启本脚本可能导致抖音直播无法正常使用！！！
*/
#!name=番茄小说
#!desc=番茄小说去广告
[rewrite_local]
# 本地svip显示（并没有这能力做出来，哈哈哈）
^https?:\/\/.*\/(user\/vip_info|vip\/user_info).*$ script-response-body https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/FQBDHY.js
^https:\/\/api-access\.pangolin-sdk-toutiao\.com\/.* script-response-body https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/FQXSHY.JS

^https:\/\/(.pangolin-sdk-toutiao|.*douyin.*|.snssdk|pglstatp-toutiao)\.com\/(search|recommend|feed).* script-response-body https://raw.githubusercontent.com/ALLG999/newcloud/refs/heads/master/DYZB.js
//^https?:\/\/(live|.*douyin.*)\.com\/.* url reject-200
^https?:\/\/.*\.pangolin-sdk-toutiao\.com\/.*live.* url reject-200
^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/.* url reject-200
^https?:\/\/.*\.snssdk\.com\/.*ad.* url reject-200
^https?:\/\/.*\.fqnovrl\.com\/.*ad.* url reject-200
^https?:\/\/.*\.zijieapi\.com\/.*ad.* url reject-200
^https?:\/\/.*\.pangolin-sdk-toutiao\.com\/.*ad.* url reject-200
^https?:\/\/.+\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/sdk\/(get_ads|stats|settings)\/ - reject
^https?:\/\/.+\.pglstatp-toutiao\.com\/.+\/toutiao\.mp4 - reject
^https?:\/\/.+\.(pglstatp-toutiao|pstatp)\.com\/(obj|img)\/(ad-app-package|ad)\/.+ - reject
^https?:\/\/.+\.(pglstatp-toutiao|pstatp)\.com\/(obj|img)\/web\.business\.image\/.+ - reject
^https?:\/\/.+\.(pglstatp-toutiao|pstatp)\.com\/obj\/ad-pattern\/renderer - reject
^https?:\/\/gurd\.snssdk\.com\/src\/server\/v3\/package - reject
^https?:\/\/.+\.byteimg.com/tos-cn-i-1yzifmftcy\/(.+)-jpeg\.jpeg - reject
^https?:\/\/.+\.pstatp\.com\/obj\/mosaic-legacy\/.+\?from\=ad - reject
^https?:\/\/.+\.pstatp\.com\/bytecom\/resource\/track-log\/src\/.+ - reject
^https?:\/\/.+\.snssdk\.com\/video\/play\/1\/toutiao\/.+\/mp4 - reject
^https?:\/\/.+\.snssdk.com\/api\/ad\/.+ - reject
^http:\/\/.+\.byteimg\.com\/ad-app-package - reject
^http:\/\/.+\.byteimg\.com\/web\.business\.image - reject
^https?:\/\/.+?\.snssdk\.com\/motor\/operation\/activity\/display\/config\/V2\/ - reject
^https?:\/\/normal\.zijieapi\.com - reject
^https?:\/\/lq\.fqnovrl\.com - reject 
^https?:\/\/normal\.fqnovrl\.com - reject 
^https?:\/\/api\.pangolin-sdk-toutiao\.com - reject 
^https?:\/\/api\.pangolin-sdk-toutiao1\.com - reject 
^https?:\/\/lq\.snssdk\.com - reject 
^https?:\/\/i-lq\.snssdk\.com - reject 
^https?:\/\/api\.fqnovrl\.com - reject 
[filter_local]
DOMAIN,p6-ad-sign.byteimg.com,REJECT
DOMAIN,p9-ad-sign.byteimg.com,REJECT
DOMAIN,ads0-normal-lq.zijieapi.com,REJECT
DOMAIN,ads1-normal-lq.zijieapi.com,REJECT
DOMAIN,ads2-normal-lq.zijieapi.com,REJECT
DOMAIN,ads3-normal-lq.zijieapi.com,REJECT
DOMAIN,ads4-normal-lq.zijieapi.com,REJECT
DOMAIN,ads5-normal-lq.zijieapi.com,REJECT
DOMAIN,api0-normal-sinfonlinea.fqbovel.com,REJECT
DOMAIN,api1-normal-sinfonlinea.fqbovel.com,REJECT
DOMAIN,api2-normal-sinfonlinea.fqbovel.com,REJECT
DOMAIN,api3-normal-sinfonlinea.fqbovel.com,REJECT
DOMAIN,api4-normal-sinfonlinea.fqbovel.com,REJECT
DOMAIN,api5-normal-sinfonlinea.fqbovel.com,REJECT
DOMAIN,api-access.pangolin-sdk-toutiao.com,REJECT
DOMAIN,api-access.pangolin-sdk-toutiao1.com,REJECT
DOMAIN,i-lq-snssdk.com,REJECT
DOMAIN-SUFFIX,byteimg.com,DIRECT
DOMAIN,i.snssdk.com,REJECT
DOMAIN,i-lq.snssdk.com,REJECT
DOMAIN,dig.bdurl.net,REJECT
DOMAIN-KEYWORD,zijieapi,REJECT
DOMAIN,activity-ag.awemeughun.com,REJECT
DOMAIN,mcs.snssdk.com,REJECT
DOMAIN,tnc3-alisc1.snssdk.com,REJECT
DOMAIN,security-lq.snssdk.com,REJECT
DOMAIN,tnc3-aliec2.snssdk.com,REJECT
DOMAIN,tnc3-aliec3.snssdk.com,REJECT
DOMAIN,tnc0-aliec1.snssdk.com,REJECT
DOMAIN,tnc0-aliec2.snssdk.com,REJECT
DOMAIN,tnc0-aliec3.snssdk.com,REJECT
DOMAIN,tnc1-aliec1.snssdk.com,REJECT
DOMAIN,tnc1-aliec2.snssdk.com,REJECT
DOMAIN,tnc1-aliec3.snssdk.com,REJECT
DOMAIN,tnc2-aliec1.snssdk.com,REJECT
DOMAIN,tnc2-aliec2.snssdk.com,REJECT
DOMAIN,tnc2-aliec3.snssdk.com,REJECT
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
DOMAIN,is.snssdk.com,REJECT
DOMAIN,i.snssdk.com,REJECT
DOMAIN,v6-novelapp.ixigua.com,REJECT
DOMAIN,*novelapp.ixigua.com,REJECT
DOMAIN,*default.ixigua.com,REJECT
DOMAIN,msync-im1-vip6-std.easemob.com,REJECT
DOMAIN,apd-pcdnwxlogin.teg.tencent-cloud.net,REJECT
DOMAIN,api.iegadp.qq.com,REJECT
DOMAIN,sf3-ttcdn-tos.pstatp.com,REJECT
DOMAIN-SUFFIX,pglstatp-toutiao.com,REJECT
DOMAIN-SUFFIX,byteorge.com,REJECT
DOMAIN-SUFFIX,bytegoofy.com,REJECT
DOMAIN-SUFFIX,bytedance.com,REJECT
DOMAIN,360buyimg.com,REJECT
DOMAIN,buysecm.com,REJECT
DOMAIN,snssdk.com,REJECT
DOMAIN,fqnovel.com,REJECT
DOMAIN,fqnovelpic.com,REJECT
DOMAIN,byteimg.com,REJECT
DOMAIN,bdurl.net,REJECT
DOMAIN,ecombdapi.com,REJECT
IP-CIDR,49.71.37.101/32,REJECT,no-resolve
IP-CIDR,117.71.105.23/32,REJECT,no-resolve
IP-CIDR,218.94.207.205/32,REJECT,no-resolve
IP-CIDR,117.92.229.188/32,REJECT,no-resolve
IP-CIDR,101.36.166.16/32,REJECT,no-resolve
IP-CIDR,180.96.2.114/32,REJECT,no-resolve
DOMAIN-KEYWORD,dig.zjurl.cn
DOMAIN-KEYWORD,dig.bdurl.net
AND,((DOMAIN-KEYWORD,zijieapi),(DOMAIN-KEYWORD,ad))
DOMAIN-KEYWORD,is.snssdk.com
[MITM]
hostname = %APPEND% .pangolin-sdk-toutiao,*.douyin.com,*.ihunantv.com,ecombdapi.com,bdurl.net,byteimg.com,fqnovel.com,fqnovelpic.com,pangolin-sdk-toutiao.com,.pstatp.com,.pstatp.com.,.pglstatp-toutiao.com.,.pglstatp-toutiao.com,gurd.snssdk.com,gurd.snssdk.com,.snssdk.com,*default.ixigua.com,.360buyimg.com,.zijieapi.com,.buysecm.com

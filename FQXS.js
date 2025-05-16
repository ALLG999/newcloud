/*
脚本功能：番茄去广告
下载地址：appstore
软件版本：所有
脚本作者：ALLG
更新时间：2025-05-16
使用声明：⚠️卸载软件连接圈X再打开番茄！
*/
#!name=番茄小说
#!desc=番茄小说去广告
[rewrite_local]
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
[filter_local]
DOMAIN,p6-ad-sign.byteimg.com,REJECT
DOMAIN,p9-ad-sign.byteimg.com,REJECT
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
DOMAIN-SUFFIX,360buyimg.com,REJECT
DOMAIN-SUFFIX,buysecm.com,REJECT
DOMAIN-SUFFIX,snssdk.com,REJECT
DOMAIN-SUFFIX,fqnovel.com,REJECT
DOMAIN-SUFFIX,fqnovelpic.com,REJECT
DOMAIN-SUFFIX,byteimg.com,REJECT
DOMAIN-SUFFIX,bdurl.net,REJECT
DOMAIN-SUFFIX,ecombdapi.com,REJECT
IP-CIDR,49.71.37.101/32,REJECT,no-resolve
IP-CIDR,117.71.105.23/32,REJECT,no-resolve
IP-CIDR,218.94.207.205/32,REJECT,no-resolve
IP-CIDR,117.92.229.188/32,REJECT,no-resolve
IP-CIDR,101.36.166.16/32,REJECT,no-resolve
IP-CIDR,180.96.2.114/32,REJECT,no-resolve
[MITM]
hostname = %APPEND% .pangolin-sdk-toutiao,.ecombdapi.com,.bdurl.net,.byteimg.com,.fqnovel.com,.fqnovelpic.com,.pangolin-sdk-toutiao.,.pstatp.com,.pstatp.com.,.pglstatp-toutiao.com.,.pglstatp-toutiao.com,gurd.snssdk.com,gurd.snssdk.com,.snssdk.com,*default.ixigua.com,.360buyimg.com,.zijieapi.com,.buysecm.com

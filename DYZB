let body = $response.body;

try {
    let obj = JSON.parse(body);

    if (obj.data && Array.isArray(obj.data)) {
        obj.data = obj.data.filter(item => {
            // 移除含有 "douyin" 或 "直播间" 的卡片
            const s = JSON.stringify(item);
            return !s.includes("douyin") && !s.includes("直播间");
        });
    }

    body = JSON.stringify(obj);
} catch (e) {
    console.log("处理直播广告失败:", e);
}

$done({ body });

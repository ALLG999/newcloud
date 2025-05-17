// 拦截请求中包含 "live" 的 header 或 URL 中含 "img" 的请求
if ($request) {
  const url = $request.url.toLowerCase();
  const headers = JSON.stringify($request.headers || {}).toLowerCase();

  if (headers.includes("live")) {
    $done({
      response: {
        status: 403,
        body: "Blocked due to header: live"
      }
    });
    return;
  }

  if (url.includes("img")) {
    $done({
      response: {
        status: 403,
        body: "Blocked due to URL containing: img"
      }
    });
    return;
  }
}

$done({});

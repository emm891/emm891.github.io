const app_item=[
    { name: "哔哩哔哩", url:"apps/bilibili/bilibili.html" },
    { name: "bilibili", url:"apps/bilibili/bilibili.html" },
    { name: "mozilia firefox", url:"apps/firefox/firefox.html" },
    { name: "firefox", url:"apps/firefox/firefox.html" },
    { name: "火狐浏览器", url:"apps/firefox/firefox.html" },
    { name: "qq", url:"apps/qq/qq.html" },
    { name: "微信", url:"apps/wechat/wechat.html" },
    { name: "腾讯视频", url:"apps/tencent_video/tencent_video.html" },
    { name: "抖音", url:"apps/douyin/douyin.html" },
]
function search() {
    const keyword = document.getElementById("keyword").value.trim().toLowerCase();
    if(!keyword) {
        alert("请输入搜索关键词");
        return;
    }
    for(let i=0; i<app_item.length; i++){
        if(app_item[i].name.toLowerCase()==keyword){
            window.location.href = app_item[i].url;
                return;
        }
        else if(i === app_item.length - 1){
            alert("未找到相关应用");
        }
    }
}
document.getElementById("keyword").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        search();
    }
});
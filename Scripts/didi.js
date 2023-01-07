
/***********************************

> 應用名稱：滴滴打车
> 軟件版本：-
> 下載地址：-
> 腳本作者：Dean
> 微信賬號：-
> 更新時間：2023-01-07
> 通知頻道：-
> 問題反饋：-
> 特別說明：本腳本僅供學習交流使用，禁止轉載售賣
 
[rewrite_local]

https?:\/\/conf.diditaxi.com.cn\/nav\/widget url script-response-body didi.js

[mitm] 

hostname=conf.diditaxi.com.cn

***********************************/



var didiConfJson = JSON.parse($response.body);


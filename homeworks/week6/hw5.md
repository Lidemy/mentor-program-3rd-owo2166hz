## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
	<u>文字</u>	底線	
	<sup>文字</sup>	上標字	
	<sub>文字</sub>	下標字	
## 請問什麼是盒模型（box modal）
在文件中，元素被表示為一個矩形的盒子
每個盒子有四個邊:外邊距邊(margin), 邊框邊(border), 內填充邊(padding)與內容邊(content)。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
* inline 

  元素與為並排顯示,其容器大小以內容物判定,無法設定寬高,上下外距等屬性...
* inline-block 
  以inline顯示 但有著block的屬性可以設定

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

* position: static

  每個元素的預設值，表示元素的位置會在「瀏覽器依照 html 由上到下排列的順序渲染後」自動配置的位置上。

* position: relative

  以元素的 `position: static` 的位置為基準，利用 `top`、`left`、`bottom`、`right`設定值做上下左右的相對移動。元素移動後，最原始的位置的空間會留著，不會不見。

* position: absolute

  元素會去尋找在它上面是否有非 `position: static` 的父元素（不限於緊鄰一層的父元素），如果有，就以那個父元素的位置為基準，利用 `top`、`left`、`bottom`、`right`設定值做上下左右的相對移動；如果沒有，就以 viewport 左上角那一點為基準，做相對移動。元素最原始的位置的空間會不見，因此在它下方的元素會遞補上來。元素所在的位置不會干涉到其它元素的位置配置。

* position: fixed

  元素根據 viewport 左上角那一點為基準，做相對移動，並且在任何時刻，不管頁面如何上下左右滾動，都會保持在那一個位置。元素最原始的位置的空間會不見，因此在它下方的元素會遞補上來。元素所在的位置不會干涉到其它元素的位置配置。
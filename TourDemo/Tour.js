var images = [ //图片数组，内容为轮播图
	"img/banner1.jpg",
	"img/banner2.jpg",
	"img/banner3.jpg",
	"img/banner4.jpg"
];

var img_pos = 0; //轮播图片的位置

console.log(Date());

function sleep(numberMillis) { //休眠函数
	var now = new Date(); 
	var exitTime = now.getTime() + numberMillis; 
	while (true) { 
		now = new Date(); 
		if (now.getTime() > exitTime) 
		return; 
	} 
}

function vp(click){
	if(click == 'left'){
		img_pos--;
		if(img_pos < 0){
			img_pos = images.length - 1;
		}
	}else if (click == 'right') {
		img_pos++;
		if(img_pos > images.length - 1){
			img_pos = 0;
		}
	}

	document.getElementById("view").src = images[img_pos];
}

//学了Ajax才能弄这种不用刷新的改变当前页面元素
// while (img_pos >= 0) {
// 	img_pos++;
// 	if(img_pos > images.length - 1){
// 		img_pos = 0;
// 	}
// 	sleep(3000);
// 	document.getElementById("view").src = images[img_pos];
// }

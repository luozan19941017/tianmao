$(function(){
	var ban=$(".banner")[0];
	var imgbox=$(".img-box",ban)[0]
	var as=$("a",imgbox);
	var lunbo=$(".lunbo-box",ban)[0];
	var as2=$("a",lunbo)
	var index=0;
	var t=setInterval(move,2000)
	function move(){
		if(index>as.length-1){
			index=0;
		}
		for (var i = 0; i < as.length; i++) {
			as[i].style.opacity=0;
			as2[i].style.background=""
		};
		as[index].style.opacity=0.8;
		index++;
		as2[index].style.background="blue"
	}
	ban.onmouseover=function(){
		clearInterval(t)
	}
	ban.onmouseout=function(){
		 t=setInterval(move,2000)
	}
	as2[0].style.background="blue"
	for (var i = 0; i < as2.length; i++) {
		as2[i].ind=i;
		as2[i].onmouseover=function(){
			for (var i = 0; i < as2.length; i++) {
				as2[i].style.background=""
				as[i].style.opacity=0;
			};
		as2[this.ind].style.background="blue"
		as[this.ind].style.opacity=1;
	}
};

//图片放大

  var neirong2box=$(".neirong2_juzhong")[0];
  var a=$(".fangda")
  var img=$("img",neirong2box);
  // console.log(img)
  for (var i = 0; i < a.length; i++) {
  	a[i].index=i;
  	a[i].onmouseover=function(){
  		animate(img[this.index],{width:140,height:140,bottom:-3})
  	}
  	a[i].onmouseout=function(){
  		animate(img[this.index],{width:130,height:130,bottom:2})
  	}
  };


//图片移动
	var yidong=$(".yidong");
	function zyyd(yidong){
	var yi=$(".yi",yidong)
	var imgs=$("img",yidong)
	// console.log(imgs)
	for (var i = 0; i < yi.length; i++) {
		yi[i].index=i
		yi[i].onmouseover=function(){
			animate(imgs[this.index],{left:170},500)
		}
		yi[i].onmouseout=function(){
			animate(imgs[this.index],{left:190},500)
		}
	};
	}
	for (var i = 0; i < yidong.length; i++) {
		zyyd(yidong[i])
	};


	var yidong1=$(".yidong1");
	function y(yidong1){
			var yixbox=$(".yixbox",yidong1)[0];
	var yix=$(".yix",yixbox);
	var im=$("img",yixbox);
	var yixxbox=$(".yixxbox",yidong1)[0];
	var yixx=$(".yixx",yixxbox)
	var imm=$("img",yixxbox)
	for (var i = 0; i < yix.length; i++) {
		yix[i].index=i;
		yix[i].onmouseover=function(){
			animate(im[this.index],{left:70},500)
		}
		yix[i].onmouseout=function(){
			animate(im[this.index],{left:80},500)
		}

	};
	for (var i = 0; i < yixx.length; i++) {
		yixx[i].index=i;
		yixx[i].onmouseover=function(){
			animate(imm[this.index],{left:130},500)
		}
		yixx[i].onmouseout=function(){
			animate(imm[this.index],{left:140},500)
		}

	};

	}
	for (var i = 0; i < yidong1.length; i++) {
		y(yidong1[i])
	};

	
	
//head
	 var he=$(".head")[0];
	 var flag=true;
	 window.onscroll=function(){
	 	var hh=document.body.scrollTop||document.documentElement.scrollTop;
	if(hh>800){
		if(flag){
			flag=false;
			animate(he,{top:0},200)
		}
		
	}else{
		if(!flag){
			flag=true;
			animate(he,{top:-50},200)
		}
		
	}	
	//楼层跳转
	var floorbox=$(".floor-box")[0];
	var floor=$(".floor")[0];
	var fa=$("a",floor);
	var neirong3=$(".neirong3")
	var arr=[];
	for (var l = 0; l < fa.length; l++) {
		fa[l].style.background="rgb(224,228,228)"
		};
	if(hh>800){
			animate(floorbox,{left:0},200)
	}else{
			animate(floorbox,{left:-50},200)
	}	
	for (var i = 0; i < neirong3.length; i++) {
		arr.push(neirong3[i].offsetTop)
	};
	for (var i = 0; i < arr.length; i++) {
		if(hh+500>arr[i]){
			for (var j =0; j < fa.length; j++) {
				fa[j].style.background="rgb(224,228,228)"
			};
			fa[i].style.background=""
		}
	};
	for (var k =0; k < fa.length; k++) {
			fa[k].index=k;
			fa[k].onclick=function(){
				
				animate(document.body,{scrollTop:arr[this.index]},500);
				animate(document.documentElement,{scrollTop:arr[this.index]},500)
			}
		};
		var ch=document.documentElement.clientHeight;
		var yh=$(".yh");
		var yarr=[];
		for (var i = 0; i < yh.length; i++) {
			yarr.push(yh[i].offsetTop)
		};
		for (var i = 0; i < yarr.length; i++) {
			if(hh+ch>yarr[i]){
				var yimg=$("img",yh[i])

			for (var j = 0; j < yimg.length; j++) {
				yimg[j].src=yimg[j].getAttribute("asrc") 
			};

			}
		};
		
		var r7=$(".r7")[0];
		r7.onclick=function(){
			// document.body.scrollTop=0;
			// document.documentElement.scrollTop=0;
			animate(document.body,{scrollTop:0},200)
			animate(document.documentElement,{scrollTop:0})
		}






	 }





	 //遮罩效果
	 var tubiaobox=$(".tubiao_box")[0];
	 var as3=$(".c1",tubiaobox);
	 var maskb=$(".maskb",tubiaobox)
	 for (var i = 0; i < as3.length-1; i++) {
	 	as3[i].inx=i;
	 	as3[i].onmouseover=function(){
	 		for (var u = 0; u <maskb.length; u++) {
	 			maskb[u].style.zIndex=0;
	 		};
	 		maskb[this.inx].style.zIndex=10;
	 	}
	 };




	 //top
	var topright=$(".top_right")[0];
	var ra=$(".ra",topright);
	var rb=$(".rb",topright);
	for (var i = 0; i < ra.length; i++) {
		ra[i].attr=i;
	hover(ra[i],function(){
		rb[this.attr].style.display="block";
		ra[this.attr].style.background="#fff";
	},function(){
		rb[this.attr].style.display="none"
		ra[this.attr].style.background=""
	})		
	};


	//banner  left

	var shangpin=$(".shangpin")[0];
	var shangpin1=$(".shangpin1",shangpin)
	var xuanfu=$(".xuanfu",shangpin)
	for (var i = 0; i < shangpin1.length; i++) {
		shangpin1[i].sp=i
		hover(shangpin1[i],function(){
			xuanfu[this.sp].style.display="block"
			shangpin1[this.sp].style.background="#fff"
		},function(){
			xuanfu[this.sp].style.display="none"
			shangpin1[this.sp].style.background=""
		})
	};

	 //left动画
	 var left=$(".left")[0];
	 var leftbox=$(".leftbox",left);
	 var left1=$(".left1",left);
	 for (var i = 0; i < leftbox.length; i++) {
	 	leftbox[i].lf=i;
	 	hover(leftbox[i],function(){
	 		left1[this.lf].style.display="block"
	 		animate(left1[this.lf],{right:4},200);
	 	},function(){
	 		left1[this.lf].style.display="none"
	 		animate(left1[this.lf],{right:30},200);
	 	})
	 };
	 //分类

	 var  fl=$(".f2");
	 var maomao=$(".maomao");
	 for (var i = 0; i < fl.length; i++) {
	 	fl[i].fla=i;
	 	hover(fl[i],function(){
	 		maomao[this.fla].style.display="block"
	 	},function(){
	 		maomao[this.fla].style.display="none"
	 	})
	 };
})
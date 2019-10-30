
// 置换图片函数
function changepic(obj) {
    //console.log(obj.files[0]);//这里可以获取上传文件的name 
    //  var newsrc=getObjectURL(obj.files[0]);
    // var reader = new FileReader();    
    // var src2= reader.readAsDataURL(obj);    
    // alert(src2);
    document.getElementById('main_img').src = null;

    var newsrc = obj.files[0].name;
    document.getElementById('main_img').src = "img/" + newsrc;

    localStorage.mainimgsrc = main_img.src;

}

// 导出文件函数
function testdaochu(neirong, title) {
    var text = neirong.value;
    var texttitle = title.value;
    var blob = new Blob([text], {
        type: "text/plain;charset=utf-8"
    });
    eval("saveAs(blob, \"" + texttitle + ".txt\",\"/text\");");

}

// 写文件页面加载函数
function newpassageload() {
    document.getElementById("file").value = "";
    document.getElementById("filetitle").value = "";
    var loadtags = document.getElementById("main_self_p");
    loadtags.innerHTML = main.tags;
    //预加载个人头像图片
    var newsrc2 = localStorage.mainimgsrc;
    document.getElementById('main_img').src = newsrc2;
    loadnav();
    loadbk();

}

// 加载图标
function loadnav() {
    for (x in nav) {
        var src = nav[x].url;
        var imgsrc = nav[x].imgsrc;

        var c = "	<a href=\"https:\\" + src + "\" target=\"_blank\">   <span class=\"fa-stack fa-lg\">    <i class=\"fa fa-square-o fa-stack-2x\"></i>    <img src=\"" + imgsrc + "\" style=\"margin-top: 6px; width:26px; height:26px; \"  >      </span></a>";
        // alert(c);
        $("#main_nav").append(c);

    }
    for(x in fontawesomenav){
        var src = fontawesomenav[x].url;
        var number = fontawesomenav[x].navname;

        var c = "	<a href=\"https:\\" + src + "\" target=\"_blank\">   <span class=\"fa-stack fa-lg\">    <i class=\"fa fa-square-o fa-stack-2x\"></i>    <i class=\"fa fa-"+number+" fa-stack-1x\"></i>  >      </span></a>";
        $("#main_nav").append(c);
    
    }

}

// 加载背景
function loadbk(){
    var bk = main.bkimgsrc;
    document.body.style.backgroundImage = "url(" + bk + ")";
}


//图片链接函数
function Go() {
    var C = document.getElementById("main_img");
    var W = document.getElementById("fileinp");
    W.click();
}



//加载所有加载项
var i = 1;

function loadall() {
    //  var newsrc2=getCookie("name");
    //预加载标签
    var loadtags = document.getElementById("main_self_p");
    loadtags.innerHTML = main.tags;
    //预加载个人头像图片
    var newsrc2 = localStorage.mainimgsrc;
    document.getElementById('main_img').src = newsrc2;

    document.getElementById("searchtext").value = "";
    loadnav();
    loadbk();

}


//测试bug专用函数
// 测试功能代码在文件底部
var x3=new Array();
function chuangjian() {

        var y=0;
   
        alert(x3);
}

// 获得天数差函数
function getdays(date1,date2){//获得天数
    //date1：开始日期，date2结束日期
    var a1 = Date.parse(new Date(date1));
    var a2 = Date.parse(new Date(date2));
    var day = parseInt((a2-a1)/ (1000 * 60 * 60 * 24));//核心：时间戳相减，然后除以天数
    return day
}



//遍历文件函数在这里
// 要用到的全局变量放在这里

var k = 0;
var yeshu = 0;
// var mingzi=0;
var yici =0;
localStorage.last7daysdiary=0;

function bianli() {

    var f = document.getElementById("fileget");
    // var fs = document.getElementById("files");         
    //this.files即获取input中上传的file对象 是个数组   
    // f.onchange = function(){  
    //获取文件对象 

    // 第一遍加载
    if(yici==0){

        var a = "<div id=\"eachdiary\" class=\"diary" + 1 + "\">" + "<div>";
        var a2 = "<div id=\"eachdiary\" class=\"diary" + 2 + "\">" + "<div>";
        var a3= "<div id=\"eachdiary\" class=\"diary" + 3 + "\">" + "<div>";
    $("#main").append(a);
    $("#main").append(a2);
    $("#main").append(a3);


        var number = 0;

        while (f.files[number]) {
            var time2 = f.files[number].lastModified;
            var date1 = new Date(time2);
            var nowdate= new Date();
            // alert(nowdate);
            // getdays(date1,nowdate);
    
            if(getdays(date1,nowdate)<=7){
                localStorage.last7daysdiary++;
            }
    
            number++;
                    yici++;
        }
        // 七天文章数量渐入
        document.getElementById("last7days").style.opacity="0";
    
        document.getElementById("last7days").innerHTML="你七天内一共写了"+Number(localStorage.last7daysdiary)+"篇文章了";   
    
        $("#last7days").animate({opacity:"1" },6000,'swing');
    
        $("#last7days").animate({opacity:"0",left:"0px" },8000,'swing');
    
        localStorage.diarynumber = number;
    }
    // 结束



    scrollTo(0, 0);

    // var b22=0;  

    // 加载文章内容           
    while (f.files[k]) {

        // 使用这一步来推迟函数进行进度使得onload函数执行三次
        // 要不然只能执行一次
        alert(f.files[k].name);

        // 获取名字
        var name1 = f.files[k].name;
        var name2 = name1.split(".", 3);
        var name = name2[0];
        // eval("var localStorage.name"+mingzi+"=");
        // eval("alert(localStorage.name"+mingzi+")");
        // mingzi++;
        var time = f.files[k].lastModified;

        // 获取文件最后修改时间
        var date1 = new Date(time);
        var date = date1.toLocaleString();
        var nowdate= new Date();

        var file = f.files[k]; 
          k++;// alert(k);
        //使用fileReader对文件对象进行操作

        var reader = new FileReader();
        reader.readAsText(file, "GBK");
        // var result =reader.readAsText(file, "GBK");
                // alert(reader.result);

                // onload事件加载
                reader.onload = function() {
            // var m = k;

            eval("$(\"" + ".diary" + k+ "\").append( \"<h2>\"+name+\"<br>\"+\"</h2>\"+\"<h3>\"+date+\"</h3>\"+  \"<br><p id=\\\"asd\\\">\"+reader.result+\"<\p>\" +\"<input type=\\\"button\\\" value=\\\"阅读全文\\\" onclick=\\\"yueduquanwen(this);\\\" >\" ); ");
            // alert("调用了这个函数");
            // eval("localStorage.content"+m+"=\""+reader.result+"\"");
            // eval("$(\""+".diary"+k+ "\").append(\"<input type=\\\"button\\\" value=\\\"点我上传\\\" >\")");
        }

        


        // 按钮类型追加和判断
        if (k % 3 == 0) {

            if ((k / 3) > 1) {
                $(beforefooter).append("<div id=\"qianfanyebutton\" style=\"text-align: center;\"><input type=\"button\" onclick=\"qianfanye();\" value=\"点击进入上一页\" style=\" text-align:center; margin-right:30px;\" >    	    <input type=\"button\" onclick=\"fanye();\" value=\"点击进入下一页\"  >        </div>");
                break;
            }

            // eval("$(\""+ma\")");
            // $(footer).append("<div style=\"text-align: center;\"><input type=\"button\" value=\"点击进入下一页\"></div>");
            $(beforefooter).append("<div id=\"fanyebutton\" >   <input type=\"button\" onclick=\"fanye();\" value=\"点击进入下一页\" style=\"height:25px;\" ></div>");

            break;
        }

// style=\"text-align: center;\"
        // readeronload();
	// <p id=\"beforeyeshu\" >sdfhhsdjfhksdf</p>
    }



    // 上传按钮渐出
    document.getElementById("filegetlabel").style.opacity="1";
    $("#filegetlabel").animate({opacity:"0"},2000,'swing');
    document.getElementById("filegetlabel").style.cursor="default";
}



var o=0;

// 图库遍历函数
function bianligallery(){
    var imgfile=document.getElementById("imgfileget");
    var imgshuzu=new Array();
    var imgduixiang=0;
    while(imgfile.files[o]){
        var imgname=imgfile.files[o].name;
        imgshuzu[imgduixiang]=imgname;
        // alert(imgname);
        imgduixiang++;
        o++;
        localStorage.imgnumber=o-1;
    }
    localStorage.realimgnumber=0;
    var src="gallery/"+imgfile.files[0].name;
    // eval("document.getElementById(\"eachpicture\").style.backgroundImage=\"url(\\\""+src+"\\\")\";");

    $("#eachpicture").animate({opacity:"0"},1500,'linear');
    
    setTimeout(function () {

        eval( "$(\"#eachpicture\").css({'background-image':'url("+src+")'});");
                }, 1500); 
           
            // eval();
    $("#eachpicture").animate({opacity:"1"},1500,'linear');
        

}
    
// function houyigeimg(){
//   

// }


// 图片翻页函数
function houyigeimg(){

    var imgfile=document.getElementById("imgfileget");
    var imgshuzu=new Array();
    var imgduixiang=0;
    var p=0;
    while(imgfile.files[p]){
        var imgname=imgfile.files[p].name;
        imgshuzu[imgduixiang]=imgname;
        // alert(imgname);
        imgduixiang++;
        p++;
    }
    if(localStorage.realimgnumber==localStorage.imgnumber){
        localStorage.realimgnumber=0;
    }else{
            localStorage.realimgnumber++;
    }
    var src="gallery/"+imgfile.files[localStorage.realimgnumber].name;
    $("#eachpicture").animate({opacity:"0"},1200,'linear');
    setTimeout(function () {

eval( "$(\"#eachpicture\").css({'background-image':'url("+src+")'});");
        }, 1200);   
    // eval();
    $("#eachpicture").animate({opacity:"1"},1200,'linear');
    // eval("document.getElementById(\"eachpicture\").style.backgroundImage=\"url(\\\""+src+"\\\")\";"); 
}
// 上一个
function shangyigeimg(){
    var imgfile=document.getElementById("imgfileget");
    var imgshuzu=new Array();
    var imgduixiang=0;
    var p=0;
    while(imgfile.files[p]){
        var imgname=imgfile.files[p].name;
        imgshuzu[imgduixiang]=imgname;
        // alert(imgname);
        imgduixiang++;
        p++;
    }
    if(localStorage.realimgnumber==0){
        localStorage.realimgnumber=localStorage.imgnumber;
    }else{
            localStorage.realimgnumber--;
    }
    $("#eachpicture").animate({opacity:"0"},1200,'linear');
    setTimeout(function () {
        var src="gallery/"+imgfile.files[localStorage.realimgnumber].name;
eval( "$(\"#eachpicture\").css({'background-image':'url("+src+")'});");
        }, 1200);   
    // eval();
    $("#eachpicture").animate({opacity:"1"},1200,'linear');
}


var xunhuan=1;

// 图片关闭函数
function hideorshow(){      
    // alert();
    // var mainopacity=document.getElementById("gallery_main");


    if(xunhuan%2==1){
        document.getElementById("gallery_main").style.opacity="1";
        // alert(document.getElementById("gallery_main").style.opacity);
        $("#gallery_main").animate({opacity:"0",left:"1600px"},1200,'linear');
        $("#eachpicture").animate({width:"1520px"},1200,'linear');
        $("#houjiantou").animate({left:"1430px"},1200,'linear');
        $("#guanbijiantou").animate({left:"1430px"},1200,'linear');
        document.getElementById("guanbijiantou").style.backgroundImage="url("+"img/菜单.png"+")";
        xunhuan++;
    }
    else{
        // alert(document.getElementById("gallery_main").style.opacity);
        $("#gallery_main").animate({opacity:"1",left:"1159.2px"},1200,'linear');
        $("#eachpicture").animate({width:"1175.7px"},1200,'linear');
        $("#houjiantou").animate({left:"1070px"},1200,'linear');
        $("#guanbijiantou").animate({left:"1070px"},1200,'linear');
        document.getElementById("guanbijiantou").style.backgroundImage="url(img/关闭.png)";

        xunhuan++;
    }


    // if(document.getElementById("gallery_main").style.opacity==1){
    // }

}




// url(\""+ src+"\")
var s = Number(localStorage.diarynumber) + 1;



// 向后翻页
function fanye() {
    // alert(k);
    var c = k - 3;
    for (x = k; x > c; x--) {
        eval("$(\".diary" + x + "\").remove();");

        // alert("dsfsdfs");
    }
    eval("$(\"#fanyebutton\").remove()");
    eval("$(\"#qianfanyebutton\").remove()");

    // alert(i);
    // if(i=4){        i--;}
    // alert("s是"+s);
    // alert("i是"+i);
    // alert("k是"+k);

    // if(i==6)
    // i++;
    k = (yeshu + 1) * 3;
    i = (yeshu + 1) * 3 + 1;
    if (s - i < 3) {
        var duo = i + 2;
        for (; i < s; i++) {
            var a = "<div id=\"eachdiary\" class=\"diary" + i + "\">" + "<div>";
            $("#main").append(a);
            if (i == duo) {

                break;
            }
        }

        eval("$(\"#qianfanyebutton\").remove()");
        $("#main").append("<div id=\"qianfanyebutton\" style=\"text-align: center; 	position: relative;right: 200px; \"><input type=\"button\" onclick=\"qianfanye();\" value=\"点击进入上一页\" style=\"height:25px;\" ></div>");

        // eval("$(\"#beforefooter\").append(\"<div id=\"qianfanyebutton\" style=\"text-align: center;\"><input type=\"button\" onclick=\"qianfanye();\" value=\"点击进入上一页\" style=\"height:25px;\" >    </div>	)");
    } else {
        var duo = i + 2;
        for (; i < s; i++) {
            var a = "<div id=\"eachdiary\" class=\"diary" + i + "\">" + "<div>";
            $("#main").append(a);
            if (i == duo) {

                break;
            }

        }
    }

    scrollTo(0, 0);

    bianli();

    yeshu++;
    // document.getElementById("beforeyeshu").innerHTML=yeshu+1;

}



// 向前翻页
function qianfanye() {

    var c = k - 3;
    for (x = k; x > c; x--) {
        eval("$(\".diary" + x + "\").remove();");
        // eval("$(\"#eachdiary\").remove();");

        // alert("dsfsdfs");
    }
    eval("$(\"#qianfanyebutton\").remove()");

    k = (yeshu - 1) * 3;
    i = (yeshu - 1) * 3 + 1;

    // if((i-3)==6){        i=i-6;}
    // else{        i=i-5;}
    var duo = i + 2;
    for (; i < s; i++) {
        var a = "<div id=\"eachdiary\" class=\"diary" + i + "\">" + "<div>";
        $("#main").append(a);
        if (i == duo) {

            break;
        }

    }
    scrollTo(0, 0);

    bianli();
    // history.back();
    yeshu--;
    // document.getElementById("beforeyeshu").innerHTML=yeshu+1;

}



// 搜索函数
var sousuojieguo = 0;
function sousuo() {
    var f2 = document.getElementById("fileget");
    var sousuotext = document.getElementById("searchtext").value;
    var number2 = 0;
    sousuojieguo = 0;
    var sousuoshuzu = new Array();
    while (f2.files[number2]) {
        var str = f2.files[number2].name;
        if (str.search(sousuotext) != -1) {
            sousuoshuzu[sousuojieguo] = number2;

            sousuojieguo++;
            // alert("success");
        }
        // alert(sousuoshuzu[sousuojieguo-1]);
        number2++;
    }
    eval("$(\"#eachdiary\").remove();");
    eval("$(\"#eachdiary\").remove();");
    eval("$(\"#eachdiary\").remove();");
    eval("$(\"#qianfanyebutton\").remove()");
    eval("$(\"#fanyebutton\").remove()");

    // var c=k-3;
    // for(x=k;x>c;x--){
    // eval("$(\".diary"+x+"\").remove();");
    // alert("dsfsdfs");
    // }
    //此时文章个数就是sousuojieguo
    for (bl = 0; bl < sousuojieguo; bl++) {
        var realbl = sousuoshuzu[bl];
        var a = "<div id=\"eachdiary\" class=\"diary" +realbl + "\">" + "<div>";
        $("#main").append(a);
    }
        for (bl = 0; bl < sousuojieguo; bl++) {
        var realbl = sousuoshuzu[bl];
        var f = document.getElementById("fileget");
        alert(f.files[realbl].name);
        var name1 = f.files[realbl].name;
        var name2 = name1.split(".", 3);
        var name = name2[0];
        var time = f.files[realbl].lastModified;
        var date1 = new Date(time);
        var date = date1.toLocaleString();
        var file = f.files[realbl];

        var bl2=realbl;
        var reader = new FileReader();
        // alert(reader.result)
        reader.readAsText(file, "GBK");
        reader.onload = function() {

            eval("$(\"" + ".diary" + bl2 + "\").append( \"<h2>\"+name+\"<br>\"+\"</h2>\"+\"<h3>\"+date+\"</h3>\"+  \"<br><p>\"+reader.result+\"<br><\p>\"+\"<input type=\\\"button\\\" value=\\\"阅读全文\\\" onclick=\\\"yueduquanwen(this);\\\" >\"); ");
            // eval("localStorage.content"+m+"=\""+reader.result+"\"");
        }
    }


}


// 阅读全文函数
function yueduquanwen(a) {
    //    alert(a.parentNode.id);
    scrollTo(0,0);
    // var diaryclass=a.parentNode.parentNode.id;
    // alert(diaryclass);


    localStorage.quanwenname = a.parentNode.parentNode.childNodes[1].innerHTML;

    localStorage.quanwenshijian = a.parentNode.parentNode.childNodes[2].innerHTML;

    localStorage.quanwenneirong = a.parentNode.parentNode.childNodes[4].innerHTML;
    // alert("2323asd");
    eval("$(\"#eachdiary\").remove();");
    eval("$(\"#eachdiary\").remove();");
    eval("$(\"#eachdiary\").remove();");
    eval("$(\"#qianfanyebutton\").remove()");
    eval("$(\"#fanyebutton\").remove()");
    var a = "<div id=\"eachdiary\" style=\"height:1200px;\" >" + "<div>";
    $("#main").append(a);
    eval("$(\"#eachdiary\").append( \"<h2>\"+localStorage.quanwenname+\"<br>\"+\"</h2>\"+\"<h3>\"+localStorage.quanwenshijian+\"</h3>\"+  \"<br><p id=\\\"asd\\\" style=\\\" height:1000px !important;\\\" >\"+localStorage.quanwenneirong+\"<\p> 		<input type=\\\"button\\\" value=\\\"返回\\\" onclick=\\\"yueduquanwenfanhui();\\\">\" ); ");



}



function test() {
    alert("test成功");
}




// 阅读全文返回按钮函数
function yueduquanwenfanhui(){

    scrollTo(0,0);

    eval("$(\"#eachdiary\").remove();");
    k=3*yeshu;
    i = (yeshu) * 3 + 1;
    var duo = i + 2;
    for (; i < s; i++) {
        var a = "<div id=\"eachdiary\" class=\"diary" + i + "\">" + "<div>";
        $("#main").append(a);
        if (i == duo) {

            break;
        }

    }
    bianli();

    
    // bianli();

}

     // var diarytitle=diary.diary01.name;
    // var a="<p>"+diarytitle+"</p>";
    // $("#eachdiary").append(a);
    // alert("success");
    // var i=1;
    // for(x in diary){
    //     var diarytitle2="diary.diary0"+i+".name";
    //     eval("var diarytitle="+diarytitle2);
    // var a="<p>"+diarytitle+"</p>";
    // $("#eachdiary").append(a);
    // i=i+1;
    // }

    // alert(localStorage.content3);
    // alert(localStorage.content1);


    // alert(c);

    // alert("s是"+s);
    // alert("i是"+i);
    // alert("k是"+k);

   // eval("$(\"#eachdiary\").append(\"ghjhgjhgjhg\")");
    // var id = $(a).parentNode.attr("id");
    // test();
    // 返回按钮，不好判断所以不添加
    //    <input type=\\\"button\\\" value=\\\"返回\\\" onclick=\\\"sousuo(this);\\\" >

    // var ok=0;
    // while(document.getElementById("eachpicture").opacity!=0){
    //     if(ok==0)
    //     {  ok++;}   
    // }
    // alert(localStorage.imgnumber);

    // k=0;
    // var a = "<div id=\"eachdiary\" class=\"diary" + 1 + "\">" + "<div>";
    // var a2 = "<div id=\"eachdiary\" class=\"diary" + 2 + "\">" + "<div>";
    // var a3= "<div id=\"eachdiary\" class=\"diary" + 3 + "\">" + "<div>";
    // $("#main").append(a);
    // $("#main").append(a2);
    // $("#main").append(a3);
    
    
    // var y=0;
    // var c=document.getElementById("fileget").files;
    //     while(c[y]){
       
    //     var nametime=new Date(c[y].lastModified);
    //     localStorage.filegetname=nametime.toLocaleString();
    //     x3[y]=localStorage.filegetname;
    // // alert("dsfsdf");

    // y++;

    // }
    //     x3.sort(); 

    // document.getElementById("inputid").value=diary.diary01.name;
    // // 在main后动态添加文章内容
    // for (b = 0; b < localStorage.diarynumber; b++) {
    //     // var diarytitle2="diary.diary0"+i+".name";
    //     //     eval("var diarytitle="+diarytitle2);
    //     var yeshu = localStorage.diarynumber;
    //     // if(yeshu>3)
    //     var a = "<div id=\"eachdiary\" class=\"diary" + i + "\">" + "<div>";

    //     // // <p>"+diarytitle+"</p>"+"<a id=\"diarytitle_a\"> &nbsp&nbsp&nbsp1231 </a>
    //     if (b == 3) {
    //         break;
    //     }
    //     $("#main").append(a);
    //     i = i + 1;
    // }
    // alert(sousuojieguo);


// function showtext(){
//     var a=document.getElementById("show1");
//     if(a.style.visibility=="visible"){
//         a.style.visibility="hidden";
//     }
//     else{
//         a.style.visibility="visible";
//     }
// }
    //遍历成功
    // var bianlijieguo=0;
    // while(sousuoshuzu[bianlijieguo]){
    //     alert(sousuoshuzu[bianlijieguo]);
    //     bianlijieguo++;
    // }

    // sousuojieguo=0;
    // alert(":dsfsdf");
                    // var baocunname=f.files[k].name;
                    // var baocunshijian=f.files[k].lastModified;
                    // var baocunlujin=f.files[k].webkitRelativePath;

                    // alert("换之前是"+f.files[k].name);
                    // f.files[k].name=f.files[j].name;
                    // alert("换之后是"+f.files[k].name);
                    
                    // f.files[k].lastModified=f.files[j].lastModified;
                    // f.files[k].webkitRelativePath=f.files[j].webkitRelativePath;
                    // f.files[j].name=baocunname;
                    // f.files[j].lastModified=baocunshijian;
                    // f.files[j].webkitRelativePath=baocunlujin;
                    // alert(f.files[k]=f.files[j]);  
                                // var a = "<div id=\"eachdiary\" class=\"diary" + k + "\">" + "<div>";
                                // $("#main").append(a);
       // alert("加载了"+f.files[k].name);


                // // alert("加载了"+f.files[k].name);
                // var name1 = f.files[k].name;
                // var name2 = name1.split(".", 3);
                // var name = name2[0];
        
                // // eval("var localStorage.name"+mingzi+"=");
                // // eval("alert(localStorage.name"+mingzi+")");
                // // mingzi++;
                // var time = f.files[k].lastModified;
        
        
                // var date1 = new Date(time);
                // var date = date1.toLocaleString();
                // var nowdate= new Date();
        
                // var file = f.files[k]; // alert(k);
                // //使用fileReader对文件对象进行操作
                // var reader = new FileReader();
                // // alert(reader.result)
                // reader.readAsText(file, "GBK");
                // k++;
        
                // reader.onload = function() {
                //     var m = k;
                //     eval("$(\"" + ".diary" + k + "\").append( \"<h2>\"+name+\"<br>\"+\"</h2>\"+\"<h3>\"+date+\"</h3>\"+  \"<br><p id=\\\"asd\\\">\"+reader.result+\"<\p>\" +\"<input type=\\\"button\\\" value=\\\"阅读全文\\\" onclick=\\\"yueduquanwen(this);\\\" >\" ); ");
                //     // eval("localStorage.content"+m+"=\""+reader.result+"\"");
                //     // eval("$(\""+".diary"+k+ "\").append(\"<input type=\\\"button\\\" value=\\\"点我上传\\\" >\")");
                // }



        // eval("$(\""+".diary"+k+ "\").append(\"<input type=\\\"button\\\" value=\\\"点我上传\\\" >\")");
        // $(".diary1").append("<input type=\"button\" value=\"点我上传\">");
        /* <input type=\"button\" value=\"点我上传\" > */


        // var x=new Array();
        // var x2=new Array();
        // var t=0;
        // while(f.files[t]){
        //     var time = f.files[t].lastModified;
        //     for(t2=t+1;t2<localStorage.diarynumber;t2++){
        //         var time2=f.files[t2].lastModified;
        //         if(time1<time2){

        //         }
        //     }
        // }



    // var number = 0;
    // while (f.files[number]) {
    //     var time2 = f.files[number].lastModified;
    //     var date1 = new Date(time2);
    //     var nowdate= new Date();
    //     // alert(nowdate);
    //     // getdays(date1,nowdate);

    //     if(getdays(date1,nowdate)<=7){
    //         localStorage.last7daysdiary++;
    //     }

    //     number++;
    // }
    // document.getElementById("last7days").style.opacity="0";

    // document.getElementById("last7days").innerHTML="你七天内一共写了"+Number(localStorage.last7daysdiary)+"篇文章了";   

    // $("#last7days").animate({opacity:"1" },6000,'swing');

    // $("#last7days").animate({opacity:"0",left:"0px" },8000,'swing');

    // localStorage.diarynumber = number;
    // alert("文章总数是"+number);


    //将文件读取为arrayBuffer  
    //reader.readAsArrayBuffer(file);  
    //reader.onload = function(){  
    //  console.log(reader.result);  
    //}  

    /*reader.readAsBinaryString(file);  
            reader.onload = function(){  
                console.log(reader.result);  
            }  
            */
    //用于图片显示不需要传入后台，reader.result的结果是base64编码数据，直接放入img的src中即可  
    // }   





// function tupianjianchu(){
//     var a=document.getElementById("eachpicture").style.backgroundImage;
//     alert(a);
// }



    
// window.onload=function(){
//     // document.getElementById("loadinput").click();
//     console.log("gh");
// }     

// function test2(){
//     document.getElementById("loadinput").click();

// }


    // document.getElementById('main_img').src=src2;  


    // 设置一个过期时间



// function chuangjian(){

//         var fso, tf;
//         fso = new ActiveXObject("Scripting.FileSystemObject");
//         // 创建新文件
//         tf = fso.CreateTextFile("testfile.txt", true);
//         // 填写数据，并增加换行符
//         tf.WriteLine("Testing 1, 2, 3.") ;
//         // 增加3个空行
//         tf.WriteBlankLines(3) ;
//         // 填写一行，不带换行符
//         tf.Write ("This is a test.");
//         // 关闭文件
//         tf.Close();
// alert("dsfsdfsdf");
//     }



    //5.26即使是硬盘cookie在火狐也会被自动删除
    //360浏览器会在刷新时侯删除
    //ie可用


/* <div class=\"diarytitle\"></div> */
        // document.getElementById("loadinput")
        // var W=document.getElementById("fileinp").click();
// W.click();


    // var d = new Date();
	// d.setTime(d.getTime()+(50*24*60*60*1000));
    // var expires = "expires="+d.toGMTString();
    // document.cookie="name="+main_img.src+";"+expires;  
    


 // var diary={
//     "name":"baidu"

// }
// for(x1 in diary){
//     // for(x in x1)
//     //     {
//             alert(x1);
//     //     }
//     }

    // var newsrc=document.cookie.split(";");

    // var newsrc=getCookie("name");
    // var newsrc2=getObjectURL(fileinp.files[0]);
    //  document.cookie="name="+newsrc;


// function loadXMLDoc()
// {
    
// var xmlhttp;
// if (window.XMLHttpRequest)
// {
//     //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
//     xmlhttp=new XMLHttpRequest();
//     alert("s");
// }
// else
// {
//     // IE6, IE5 浏览器执行代码
//     xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
// }

// }

// var date=new Date(); 
// var expiresDays=20; 
// //将date设置为10天以后的时间 
// date.setTime(date.getTime()+expiresDays*24*3600*1000);
//     alert(date.toUTCString());
//     alert(document.cookie);


    // var src1;
    // var newsrc=getObjectURL(fileinp.files[0]);
    // document.cookie= src1+"="+newsrc1;
    // setCookie("userName", newsrc);
    // var newsrc=getObjectURL(fileinp.files[0]);
    // document.cookie="name="+newsrc;
    //删除cookie
    // document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT"; 
    // var c=getCookie("name");
    // alert(document.cookie);
    // alert(newsrc);
    // alert(main_img.src);
    // alert(c);

    // if (window.FileReader) {   
    //     if (window.FileReader) {    
    //         var reader = new FileReader();    
    //         reader.readAsDataURL(fileinp.files[0]);  
    //     alert("sdaasdasd"); }
        // var reader = new FileReader();    
        // reader.readAsDataURL(file);  

        // var newsrc2=getCookie("name");


// function filemove(fname,mname){
//     var fso,f;
//     fso=new ActiveXObject("Scripting.FileSystemObject");
//     f=fso.GetFile(fname.value);
//     f.Move(mname);
//     alert("文件移除成功");
// }

// function showDataByURL() {
//     var resultFile = document.getElementById("fileDemo").files[0];
//     if (resultFile) {
//         var reader = new FileReader();
         
//         reader.readAsDataURL(resultFile);
//         reader.onload = function (e) {
//             var urlData = this.result;
//             document.getElementById("result").innerHTML += "<img src='" + urlData + "' alt='" + resultFile.name + "' />";
//         }; 
        
//     }
     
// }

    //  function getObjectURL(file) { 
    //     var url = null ;
    //      // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已 
    //     if (window.createObjectURL!=undefined) { // basic 
    //         url = window.createObjectURL(file) ;
    //     }else if (window.URL!=undefined) { // mozilla(firefox)
    //         url = window.URL.createObjectURL(file) ;
    //     } 
    // else if (window.webkitURL!=undefined) { // webkit or chrome 
    // url = window.webkitURL.createObjectURL(file) ; 
    // }
    // location.reload();
    // var fs = require("fs");


        //  return url ; }

    // Response.Cookie["name"].Expires = DateTime.Now.AddYears(1);

    // Response.Cookies("CookieName").Expires=DateAdd("m",60,now());

// var date=new Date(); 
// var expiresDays=10; 
// //将date设置为10天以后的时间 
// date.setTime(date.getTime()+expiresDays*24*3600*1000);
// document.cookie="name="+main_img.src+"; expires="+date.toGMTString();
    // function test1(src){
//     alert("s45fd46s54f64sd54");
//     console.log(src.files[0]);
// }


// function getCookie(cname)
// {
//   var name = cname + "=";
//   var ca = document.cookie.split(';');
//   for(var i=0; i<ca.length; i++) 
//   {
//     var c = ca[i].trim();
//     if (c.indexOf(name)==0) return c.substring(name.length,c.length);
//   }
//   return "";
// }

    // for(x in nav){
    //     var src=nav[x].url;
    //     var imgsrc=nav[x].imgsrc;
       
    //     var c="	<a href=\""+src+"\" target=\"_blank\">   <span class=\"fa-stack fa-lg\">    <i class=\"fa fa-square-o fa-stack-2x\"></i>    <img src=\""+imgsrc+"\" style=\"margin-top: 6px; width:26px; height:26px; \"  >      </span></a>";
    //     // alert(c);
    //     $("#main_nav").append(c);


    // }
    // var bk=main.bkimgsrc;
    // document.body.style.backgroundImage="url("+bk+")";

    // var x=document.getElementById("headbutton");
    // alert(i);
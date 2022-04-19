const VISITED_PAGE_ARR = [];
const VISIT_PAGE = function (page_name = "", callback) {
    if(page_name.length <= 0) {
        return ;
    }
    VISITED_PAGE_ARR.push(page_name);
    callback();
}


export const vns_method_to_btn_name = str => {
    str = str || "";
    if(typeof str !== "string") return str;
    return str.substring(0, 1).toUpperCase() + str.substring(1);
};

window.onload = function () {
    // 定位到tab
    VISIT_PAGE("home", openHomepage_ex);

    // 导航栏事件绑定
    document.querySelectorAll(".navbar-item").forEach((tab, i, nodes) => {
        let tab_name = tab.getAttribute("name");
        let callback;
        tab.onclick = function() {
            navRelocation(tab_name);
            if(tab_name === "home") {
                callback = openHomepage_ex;
            }
            if(tab_name === "youli") {
                callback = openYouli;
            }
            if(tab_name === "yundongji") {
                callback = openYundongji;
            }

            if(tab_name === "xueren") {
                callback = openXueren;
            }

            if(tab_name === "baomihua") {
                callback = openBaomihua;
            }
            
            if(tab_name === "niko") {
                callback = openNiko;
            }

            if(tab_name === "keyandonghua") {
                callback = openKeyandonghua;
            }

            if(tab_name === "keyanjiaohu") {
                callback = openKeyanjiaohu;
            }

            if(tab_name === "works") {
            }
            
            VISIT_PAGE(tab_name, callback);
            
        };
    });
    
}

function navRelocation(name = "") {
    name = name || "home";
    // console.log(name + " tab clicked.");

    document.querySelectorAll(".navbar-item").forEach((tab, i, nodes) => {
        if(tab.getAttribute("name") === name) {
            if(!tab.classList.contains("active")) {
                if(tab.getAttribute("name") =='youli'|| tab.getAttribute("name") =='yundong'|| tab.getAttribute("name") =='baomihua'){
                    document.getElementById("works").classList.add("active");
                }else{
                    tab.classList.add("active");
                }
                
            }
        } else {
            if(tab.classList.contains("active")) {
                if(tab.getAttribute("name") =='youli' || tab.getAttribute("name") =='yundong'|| tab.getAttribute("name") =='baomihua'){
                    document.getElementById("works").classList.remove("active");
                }else{
                    tab.classList.remove("active");
                }
                
            }
            // if(tab.classList.contains("active")) {
            //     tab.classList.remove("active");
            // }
        }
    });

    document.querySelector("main").innerHTML = "";
}

/* page loading methods */
function openHomepage_ex() {
    // 页面呈现loading
    // document.querySelector("main").innerHTML = "";

    // 界面异步加载
    $.ajax({
        // url: "https://jkalan6991.gitee.io/video-explorer/assets/static/homepage_ex.html",
        url: "./assets/static/homepage_ex.html",
        type: "get",
        contentType: "text/html",
        dataType: "html",
        success: function(res) {
            document.querySelector("main").innerHTML = res;
            // gallery_loading();
        }
    });
}



function openYouli() {
    // 页面呈现loading
    // document.querySelector("main").innerHTML = "";

    // 界面异步加载
    $.ajax({
        // url: "https://jkalan6991.gitee.io/video-explorer/assets/static/videodataset.html",
        url: "./assets/static/youli.html",
        type: "get",
        contentType: "text/html",
        dataType: "html",
        success: function(res) {
            document.querySelector("main").innerHTML = res;
        }
    });
}
function openYundongji() {
    $.ajax({
        url: "./assets/static/yundongji.html",
        type: "get",
        contentType: "text/html",
        dataType: "html",
        success: function(res) {
            document.querySelector("main").innerHTML = res;
        }
    });
}
function openXueren() {
    $.ajax({
        url: "./assets/static/xueren.html",
        type: "get",
        contentType: "text/html",
        dataType: "html",
        success: function(res) {
            document.querySelector("main").innerHTML = res;
        }
    });
}
function openBaomihua() {
    $.ajax({
        url: "./assets/static/baomihua.html",
        type: "get",
        contentType: "text/html",
        dataType: "html",
        success: function(res) {
            document.querySelector("main").innerHTML = res;
        }
    });
}
function openNiko() {
    $.ajax({
        url: "./assets/static/niko.html",
        type: "get",
        contentType: "text/html",
        dataType: "html",
        success: function(res) {
            document.querySelector("main").innerHTML = res;
        }
    });
}

function openVideoDataset() {
    // 页面呈现loading
    // document.querySelector("main").innerHTML = "";

    // 界面异步加载
    $.ajax({
        // url: "https://jkalan6991.gitee.io/video-explorer/assets/static/videodataset.html",
        url: "./assets/static/videodataset.html",
        type: "get",
        contentType: "text/html",
        dataType: "html",
        success: function(res) {
            document.querySelector("main").innerHTML = res;
        }
    });
}

function openGalleryDataset() {
    // 页面呈现loading
    // document.querySelector("main").innerHTML = "";

    // 界面异步加载
    $.ajax({
        // url: "https://jkalan6991.gitee.io/video-explorer/assets/static/videodataset.html",
        url: "./assets/static/gallery.html",
        type: "get",
        contentType: "text/html",
        dataType: "html",
        success: function(res) {
            document.querySelector("main").innerHTML = res;
        }
    });
}


function openDownloads() {
    // 页面呈现loading
    // document.querySelector("main").innerHTML = "";

    // 界面异步加载
    $.ajax({
        // url: "https://jkalan6991.gitee.io/video-explorer/assets/static/downloads.html",
        url: "./assets/static/downloads.html",
        type: "get",
        contentType: "text/html",
        dataType: "html",
        success: function(res) {
            document.querySelector("main").innerHTML = res;
        }
    });
}


function openKeyandonghua() {

    $.ajax({
        url: "./assets/static/keyandonghua.html",
        type: "get",
        contentType: "text/html",
        dataType: "html",
        success: function(res) {
            document.querySelector("main").innerHTML = res;
        }
    });
}

function openKeyanjiaohu() {

    $.ajax({
        url: "./assets/static/keyanjiaohu.html",
        type: "get",
        contentType: "text/html",
        dataType: "html",
        success: function(res) {
            document.querySelector("main").innerHTML = res;
        }
    });
}

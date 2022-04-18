import { VNS_panel, EL_panel} from './hp_panel.js';
import { MNav, Collapse_Btn } from './hp_mobileNav.js';
import { init_card_display } from './hp_middle.js';
import { VideoData_Card } from './video_dataset.js';
import { downloads_loading } from './downloads.js';

import { StudyMaterial_Card } from './study_material.js';

const VISITED_PAGE_ARR = [];
const VISIT_PAGE = function (page_name = "", callback) {
    if(page_name.length <= 0) {
        return ;
    }
    VISITED_PAGE_ARR.push(page_name);
    callback();
}

// const IS_PAGE_EXISTED = function (page_name = "") {
//     if(page_name.length > 0 && VISITED_PAGE_ARR.indexOf(page_name) >= 0) {
//         return true;
//     }

//     return false;
// }

export const vns_method_to_btn_name = str => {
    str = str || "";
    if(typeof str !== "string") return str;
    return str.substring(0, 1).toUpperCase() + str.substring(1);
};

window.onload = function () {
    // 定位到tab
    VISIT_PAGE("home", openHomepage_ex);


    // 搜索框重新绑定
    
    // 导航栏事件绑定
    document.querySelectorAll(".navbar-item").forEach((tab, i, nodes) => {
        let tab_name = tab.getAttribute("name");
        let callback;
        tab.onclick = function() {
            navRelocation(tab_name);
            if(tab_name === "home") {
                callback = openHomepage_ex;
            }
            if(tab_name === "uiux") {
                callback = openStudyMaterial;
            }
            
            if(tab_name === "niko") {
                callback = openGalleryDataset;
            }

            if(tab_name === "about") {
                callback = openAbout;
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
                tab.classList.add("active");
            }
        } else {
            if(tab.classList.contains("active")) {
                tab.classList.remove("active");
            }
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
    });
}



function openStudyMaterial() {
    // 页面呈现loading
    // document.querySelector("main").innerHTML = "";

    // 界面异步加载
    $.ajax({
        // url: "https://jkalan6991.gitee.io/video-explorer/assets/static/videodataset.html",
        url: "./assets/static/studymaterial.html",
        type: "get",
        contentType: "text/html",
        dataType: "html"
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
        dataType: "html"
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
        // success: function(res) {
        //     document.querySelector("main").innerHTML = res;
        //     // videoDataset_loading();
        //     gallery_loading();
        // }
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
        dataType: "html"
    });
}


function openAbout() {
    // 页面呈现loading
    // document.querySelector("main").innerHTML = "";

    // 界面异步加载
    $.ajax({
        // url: "https://jkalan6991.gitee.io/video-explorer/assets/static/about.html",
        url: "./assets/static/about.html",
        type: "get",
        contentType: "text/html",
        dataType: "html"
    });
}


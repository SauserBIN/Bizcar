// function change(){
//     document.querySelector('.hov_vt').classList.add('viewb');
// }
// function hide(){
//     document.querySelector('.hov_vt').classList.remove('viewb');
// }

// function change(){
//     document.querySelector('.hov_vt').classList.add('viewb');
// }

// forEach를 활용하여 마이페이지,비즈카,커넥트프로 등등 나눌것
// let hov_on = document.querySelectorAll('.dep2-hover');
// let hov_vt = document.querySelectorAll('.hov_vt');
// let hd_p = document.querySelector('.head_wrap')

// hov_on.forEach(function(Hover, c){
//     Hover.addEventListener('mouseenter',function(){
//         for(let b=0; b<hov_on.length; b++){            
//             hov_vt[b].classList.remove('viewb');
//         }
//         hov_vt[c].classList.add('viewb');
//     });
// });

// hov_vt.forEach(function(item){
//     item.addEventListener('mouseleave',function(){
//       item.classList.remove('viewb');
//     })
//     // item.classList.add('viewb')
// })
let hov_on = document.querySelectorAll('.dep2-hover');
let hov_vt = document.querySelectorAll('.hov_vt');
let sw = document.querySelector('.search_wrap');
let nav = document.querySelector('nav');
// 얘는 클레스명이 아니라 이름이라 앞에.이 없음

hov_on.forEach(function(Hover, c){
    Hover.addEventListener('mouseenter',function(){
        for(let b=0; b<hov_on.length; b++){            
            hov_vt[b].classList.remove('viewb');
        }
        hov_vt[c].classList.add('viewb');
    });
});

nav.addEventListener('mouseleave', function() {
    hov_vt.forEach(function(item) {
        item.classList.remove('viewb');
    });
});

sw.addEventListener('mouseenter', function() {
    hov_vt.forEach(function(item) {
        item.classList.remove('viewb');
    });
});

function opener(){
    document.querySelector('.snb-wrap').classList.toggle('hi100');
    document.getElementById('spin').classList.toggle('spin_up');
}



let t_boxs = document.querySelectorAll('.t_box');
let OA_wraps = document.querySelectorAll('.OA_wrap');
t_boxs[0].classList.add('actives');
OA_wraps[0].classList.add('view');
// 기존에 하나라도 연출하기위해 사용한 두개

t_boxs.forEach(function(t_box, i){
    t_box.addEventListener('click',function(){
        for(let j=0; j<t_boxs.length; j++){
            t_boxs[j].classList.remove('actives')
            OA_wraps[j].classList.remove('view')
        }
        t_box.classList.add('actives');
        OA_wraps[i].classList.add('view');
    })
});
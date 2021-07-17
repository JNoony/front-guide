'use strict';
var dataUrl = 'js/data.json';
var dataList = {
    init:function(){
        dataList.httpGet();
    },
    td:function(data){
        var _li = document.createElement('li');
            _li.classList.add('guide-table-tr');
        var _td = `<div class="guide-table-td">${data.no}</div>
                    <div class="guide-table-td">${data.file}</div>
                    <div class="guide-table-td">${data.dep1}</div>
                    <div class="guide-table-td">${data.dep2}</div>
                    <div class="guide-table-td">${data.dep3}</div>
                    <div class="guide-table-td"><a href="${data.link}">${data.link}</a></div>
                    <div class="guide-table-td">${data.noti}</div>`;
            _li.innerHTML = _td;
        return _li;
    },
    httpGet:function(){
        fetch(dataUrl).then(function(res) {
            return res.json(); //JSON.parse(res);
          }).then(function(res) {
            var _tbody = document.querySelector('.guide-table-tbody');
            for( var i=0,len=res.length;i<len;i++){
                _tbody.append(dataList.td(res[i]));
            }
          }).catch(function(err) {
            console.log("err-->",err);
          });
    },
}

dataList.init();




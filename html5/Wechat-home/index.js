var parent = document.getElementById('content-items')
//console.log(parent)
var send = document.getElementById('send')
send.addEventListener('click', function(){
    // console.log(123)

var li = document.createElement('li')
li.setAttribute('class', 'content-item')

var divPic = document.createElement('div')
divPic.setAttribute('class', 'pic')
li.appendChild(divPic)

var img = document.createElement('img')
img.setAttribute('src', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568993850581&di=18ddbd33911de1181bf345dc170e4537&imgtype=0&src=http%3A%2F%2Fimg.tukexw.com%2Fimg%2F234ec671ca54feb2.jpg')
divPic.appendChild(img)

var message= document.createElement('div')
message.setAttribute('class', 'message')
li.appendChild(message)

var p1 = document.createElement('p')
p1.setAttribute('class', 'name')
var p1Text = document.createTextNode('呲溜')
p1.appendChild(p1Text)
message.appendChild(p1)

var p2 = document.createElement('p')
p2.setAttribute('class', 'detail')
var p2Text = document.createTextNode('巴拉巴拉')
p2.appendChild(p2Text)
message.appendChild(p2)

// console.log(li)
parent.appendChild(li)
})


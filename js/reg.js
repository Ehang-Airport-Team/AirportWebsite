function insert1() {
    var li13 = document.getElementById("li13");
    //创建li
    var li15 = document.createElement("li");
    //创建文本
    var text15 = document.createElement('input');
    text15.setAttribute('type', 'text'); //输入框的类型
    text15.setAttribute('name', "answers"); //输入框的名字
    text15.setAttribute('id', "b"); //输入框的id
    //把文本添加到li下面 appendChild
    li15.appendChild(text15);
    //获取到ul
    var ul21 = document.getElementById("ulid21");

    //insertBefore(newNode,oldNode)
    ul21.insertBefore(li15, li13);
}

function del() {
    var li13 = document.getElementById("li13");
    //创建li
    var li15 = document.createElement("li");
    //创建文本
    var text15 = document.createElement('input');
    text15.setAttribute('type', 'text'); //输入框的类型
    text15.setAttribute('name', "answers"); //输入框的名字
    text15.setAttribute('id', "b"); //输入框的id
    //把文本添加到li下面 appendChild
    li15.appendChild(text15);
    //获取到ul
    var ul21 = document.getElementById("ulid21");

    //insertBefore(newNode,oldNode)
    ul21.insertBefore(li15, li13);
}

function HandleOnClose() {
    var close = confirm("确认报名？");
    if (close) {
        window.open("../index.html");
        window.close("application-form.html")
    } else {
        window.event;
    }
    return message;
}
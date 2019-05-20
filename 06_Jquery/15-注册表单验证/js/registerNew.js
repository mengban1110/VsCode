$(function () {
    
    // 1.监听 失去焦点事件
    $('#user_name').blur(function () {

        if ($(this).val() == ""){
            $(this).next().html('用户名不为空!');
            $(this).next().show();

            return;
        }

        var reUser = /^\w{6,20}$/; 

        var judge = reUser.test($(this).val())

        if (!judge){
            $(this).next().html('用户名必须是6-20位数字字母下划线');
            $(this).next().show();
        }

    })

    // 2.监听 获取焦点事件
    $('#user_name').focus(function () {
        $(this).next().val('')
        $(this).next().hide()
    })

   
})
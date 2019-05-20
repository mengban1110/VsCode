$(function () {
    

    // 1.用户名

    // 1.1 失去焦点 验证输入内容
    $('#user_name').blur(function () {
    
        fnJudgeInputContent($(this),'用户名不能为空',/^\w{6,20}$/,'6-20字母数字')
        
    })


    // 1.2 获取焦点 隐藏提示框
    $('#user_name').focus(function () {
        $(this).next().hide();
    })



    // 1.1 封装的代码
    function fnJudgeInputContent(obj,nullStr,reJudge,reStr) {
        // 判断输入是否为空
        if (obj.val() == ""){
            obj.next().show();
            obj.next().html(nullStr);
            return;
        }
        // 正则比对
        if (!reJudge.test(obj.val())){//不通过
            obj.next().show();
            obj.next().html(reStr);
        }
    }
   




    // $('#user_name').blur(function () {
    //     // 判断输入是否为空
    //     if ($(this).val() == ""){
    //         $(this).next().show();
    //         $(this).next().html('用户名不能为空!');
    //         return;
    //     }
    //     // 正则比对
    //     var reUser = /^\w{6,20}$/;
    //     var judge = reUser.test($(this).val());

    //     if (!judge){//不通过
    //         $(this).next().show();
    //         $(this).next().html('用户名6-20的数字字母下划线_');
    //     }
        
    // })


    // 判断 多选框 是否 有对勾
    $('#allow').click(function () {
        
        if ($(this).is(':checked')){//有对勾
            $(this).next().next().hide();
        }else {
            $(this).next().next().show();
            $(this).nextAll('span').html('请勾选同意!')
        }

    })

})
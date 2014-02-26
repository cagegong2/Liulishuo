$(function () {
    $.mobile.navigate("#page2");
    $("#page2").on("pageshow", function (event) {
        console.log("pageshow page2 loaded");
        $('#popupDialog').popup("open");
        $('#average').addClass("ui-btn-active");
        //loading data
        var data = getData();
        $("#userlist").html("");
        var insert = "";
        for (var i = 0; i < data.length; i++) {
            if (i == 0) {
                // First one
                insert += '<li>'
                        + '<div id="firstone" class="listitem">'
                        + '<label class="sequence float-left" style="font-size: 25px; margin: 0">' + (i + 1) + '</label>'
                        + '<div class="avatar float-left" style="background-image: url(' + data[i].avatar + ');margin-bottom:200px"></div>'
                        +'<div>'
                          + '  <label class="name float-left" style="font-size: 25px; font-weight: bold; margin: 0">'+ data[i].name +'</label>'
                            + '<label class="float-right score" style="font-size: 30px; font-weight: bold; margin: 0">' + data[i].score + '</label>'
                            +'<div>'
                                +'<label class="name float-left" style="font-size: 25px; font-weight: bold; margin: 0">奖品：Beats Tour耳机</label>'
                                +'<label class="name float-left" style="font-size: 25px; font-weight: bold; margin: 0">价值：1500元</label>'
                                +'<img   src="Images/Award/女神.png" />'
                            +'</div>'
                           +' <div>'
                                 +'<label class="name float-left" style="font-size: 25px; font-weight: bold; margin: 0">奖品：知名企业面试机会</label>'
                                +' <img   src="Images/Award/面试机会.png" />'
                            +' </div>'
                       +'  </div>'
                       +'  <div class="clear"></div>'
                  +'   </div>'
                    + '</li>';
            } else if (i == data.length - 1) {
                // Last one
                insert += '<li>'
                        + '<div id="firstone" class="listitem">'
                        + '<label class="sequence float-left" style="font-size: 25px; margin: 0">' + (i + 1) + '</label>'
                        + '<div class="avatar float-left" style="background-image: url(' + data[i].avatar + ');margin-bottom:200px"></div>'
                        + '<div>'
                          + '  <label class="name float-left" style="font-size: 25px; font-weight: bold; margin: 0">' + data[i].name + '</label>'
                            + '<label class="float-right score" style="font-size: 30px; font-weight: bold; margin: 0">' + data[i].score + '</label>'
                            + '<div>'
                                + '<label class="name float-left" style="font-size: 25px; font-weight: bold; margin: 0">奖品：阿狸公仔</label>'
                                + '<label class="name float-left" style="font-size: 25px; font-weight: bold; margin: 0">价值：150元</label>'
                                + '<img   src="Images/Award/阿狸.png" />'
                            + '</div>'
                           + ' <div>'
                                 + '<label class="name float-left" style="font-size: 25px; font-weight: bold; margin: 0">奖品：知名企业面试机会</label>'
                                + ' <img   src="Images/Award/面试机会.png" />'
                            + ' </div>'
                       + '  </div>'
                       + '  <div class="clear"></div>'
                  + '   </div>'
                    + '</li>';
            } else {
                // Last one
                insert += '<li>'
                        + '<div id="lastone" class="listitem">'
                            + '<label class="float-left sequence" style="font-size:25px;margin:0">' + (i + 1) + '</label>'
                            + '<div class="float-left avatar" style="background-image:url(' + data[i].avatar + ')"></div>'
                            + '<label class="float-left name" style="font-size:25px;font-weight: bold;margin:0">' + data[i].name + '</label>'
                            + '<label class="float-right score" style="font-size:30px;font-weight: bold;margin:0">' + data[i].score + '</label>'
                            + '<div class="clear"></div>'
                        + '</div>'
                    + '</li>';
            }
        }
        $("#userlist").html(insert);

    });
});

function getData() {
    var mockData = [
        {
            "name": "Crossin先生",
            "avatar": "Images/Avatars/1.jpg",
            "score": 96.73,
        },
        {
            "name": "圈羊托尼",
            "avatar": "Images/Avatars/2.jpg",
            "score": 92.84,
        },
        {
            "name": "Vesper Zhao",
            "avatar": "Images/Avatars/1.jpg",
            "score": 91.22,
        },
        {
            "name": "孟尝",
            "avatar": "Images/Avatars/2.jpg",
            "score": 90.27,
        },
        {
            "name": "Robin",
            "avatar": "Images/Avatars/1.jpg",
            "score": 89.40,
        },
        {
            "name": "Wick",
            "avatar": "Images/Avatars/2.jpg",
            "score": 89.22,
        },
        {
            "name": "Quint Newcomer",
            "avatar": "Images/Avatars/1.jpg",
            "score": 88.75,
        },
    ];
    return mockData;
}
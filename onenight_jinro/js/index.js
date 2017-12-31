// カードの初期設定
const MURABITO = 1;
const JINRO = 2;
const URANAISHI = 3;
const KAITO = 4;
let users = ["userA", "userB", "userC", "userD"]; // ユーザーの人数
let userA_card, userB_card, userC_card, userD_card, remain_card1, remain_card2;
let users_card = []; //配布されたカードの初期値
// カードを配布する（ゲーム開始）
$(document).on("click", "#button", function () {
    let btn_id = $(this).data("id");
    if (btn_id == 0) {
        // 配布するカード
        let array_card = [MURABITO, MURABITO, JINRO, JINRO, URANAISHI, KAITO];
        // カードの初期化
        $("#userA").empty();
        $("#userB").empty();
        $("#remain1").empty();
        $("#remain2").empty();
        $("#userC").empty();
        $("#userD").empty();
        for (let i in users) {
            let int = Math.floor(Math.random() * array_card.length);
            users_card.push(array_card[int]);
            array_card.splice(int, 1);
            console.log(users[i])
        }
        
        userA_card = card_image(users_card[0]);
        $("#userA").append(`<p>ユーザーA</p><img src="image/card-backimage.png" alt="" id="userA_image" data-id="back">`);
        userB_card = card_image(users_card[1]);
        $("#userB").append(`<p>ユーザーB</p><img src="image/card-backimage.png" alt="" id="userB_image" data-id="back">`);
        remain_card1 = card_image(array_card[0]);
        $("#remain1").append(`<img src="image/card-backimage.png" alt="" id="remain1_image" data-id="back">`);
        remain_card2 = card_image(array_card[1]);
        $("#remain2").append(`<img src="image/card-backimage.png" alt="" id="remain2_image" data-id="back">`);
        userC_card = card_image(users_card[2]);
        $("#userC").append(`<p>ユーザーC</p><img src="image/card-backimage.png" alt="" id="userC_image" data-id="back">`);
        userD_card = card_image(users_card[3]);
        $("#userD").append(`<p>ユーザーD</p><img src="image/card-backimage.png" alt="" id="userD_image" data-id="back">`);
        $("#button-area").html(`<p id="description">ユーザーそれぞれのカードを確認しよう！</p>` + `<button id="button" data-id="1">カードを確認しました</button>`);
    }
    else if (btn_id == 1) {
        $("#button-area").html(`<p id="description">占い師は他のプレーヤーのカードをみるか、<br>真ん中の２枚のカードをみてください</p>` + `<button id="button" data-id="2">カードを確認しました</button>`);
    }
    else if (btn_id == 2) {
        $("#button-area").html(`<p id="description">人狼は人狼同士を確認してください</p>` + `<button id="button" data-id="3">人狼を確認しました</button>`);
    }
    else if (btn_id == 3) {
        $("#button-area").html(`<p id="description">怪盗は他のプレーヤーとカードを交換するか、<br>何もしないでゲームを開始してください</p>` + `<p>【ユーザーを選択】</p>` + `<select name='user_myself'>
                <option value='99'>自分を選択する</option>            
                <option value='0'>ユーザーA</option>
                <option value='1'>ユーザーB</option>
                <option value='2'>ユーザーC</option>
                <option value='3'>ユーザーD</option>
            </select>と` + `<select name='user_other'>
                <option value='99'>相手を選択する</option>            
                <option value='0'>ユーザーA</option>
                <option value='1'>ユーザーB</option>
                <option value='2'>ユーザーC</option>
                <option value='3'>ユーザーD</option>
            </select>の` + `<button id="button" data-id="4">カードを交換する</button>` + `<p>【ユーザーを選択しない】</p>` + `<button id="button" data-id="5">何もしないでゲーム開始</button>`);
    }
    else if (btn_id == 4) {
        let user_myself = $('[name=user_myself]').val();
        let user_other = $('[name=user_other]').val();
        console.log(users_card);
        let my_card = users_card[user_myself];
        users_card[user_myself] = users_card[user_other];
        users_card[user_other] = my_card;
        console.log(users_card);
        $("#userA").empty();
        $("#userB").empty();
        $("#userC").empty();
        $("#userD").empty();
        userA_card = card_image(users_card[0]);
        $("#userA").append(`<p>ユーザーA</p><img src="image/card-backimage.png" alt="" id="userA_image" data-id="back">`);
        userB_card = card_image(users_card[1]);
        $("#userB").append(`<p>ユーザーB</p><img src="image/card-backimage.png" alt="" id="userB_image" data-id="back">`);
        userC_card = card_image(users_card[2]);
        $("#userC").append(`<p>ユーザーC</p><img src="image/card-backimage.png" alt="" id="userC_image" data-id="back">`);
        userD_card = card_image(users_card[3]);
        $("#userD").append(`<p>ユーザーD</p><img src="image/card-backimage.png" alt="" id="userD_image" data-id="back">`);
        $("#button-area").html(`<p id="description">ゲームスタート</p>` + `<button class="answer" id="button" data-id="6">答えをみる</button>`);
    }
    else if (btn_id == 5) {
        $("#button-area").html(`<p id="description">ゲームスタート！</p>` + `<button id="button" data-id="6">答えをみる</button>`);
    }
    else if (btn_id == 6) {
        $("#userA").html(`<p>ユーザーB</p><img src="${userA_card}" alt="" id="userB_image" data-id="front">`);
        $("#userB").html(`<p>ユーザーB</p><img src="${userB_card}" alt="" id="userB_image" data-id="front">`);
        $("#remain1").html(`<img src="${remain_card1}" alt="" id="remain1_image" data-id="front">`);
        $("#remain2").html(`<img src="${remain_card2}" alt="" id="remain2_image" data-id="front">`);
        $("#userC").html(`<p>ユーザーB</p><img src="${userC_card}" alt="" id="userB_image" data-id="front">`);
        $("#userD").html(`<p>ユーザーB</p><img src="${userD_card}" alt="" id="userB_image" data-id="front">`);
        $("#button-area").html(`<p id="description">最初から</p>` + `<button id="button" data-id="0">リスタート</button>`);
    }
});

function card_image(card_number) {
    let image_url = "";
    if (card_number == 1) {
        image_url = "image/murabito.png"
    }
    else if (card_number == 2) {
        image_url = "image/jinro.png"
    }
    else if (card_number == 3) {
        image_url = "image/uranaishi.png"
    }
    else {
        image_url = "image/kaito.png"
    }
    return image_url
}
$(document).on("click", "#userA_image", function () {
    if ($(this).data("id") == "back") {
        $("#userA").html(`<p>ユーザーA</p><img src="${userA_card}" alt="" id="userA_image" data-id="front">`);
    }
    else {
        $("#userA").html(`<p>ユーザーA</p><img src="image/card-backimage.png" alt="" id="userA_image" data-id="back">`);
    }
});
$(document).on("click", "#userB_image", function () {
    if ($(this).data("id") == "back") {
        $("#userB").html(`<p>ユーザーB</p><img src="${userB_card}" alt="" id="userB_image" data-id="front">`);
    }
    else {
        $("#userB").html(`<p>ユーザーB</p><img src="image/card-backimage.png" alt="" id="userB_image" data-id="back">`);
    }
});
$(document).on("click", "#remain1_image", function () {
    if ($(this).data("id") == "back") {
        $("#remain1").html(`<img src="${remain_card1}" alt="" id="remain1_image" data-id="front">`);
    }
    else {
        $("#remain1").html(`<img src="image/card-backimage.png" alt="" id="remain1_image" data-id="back">`);
    }
});
$(document).on("click", "#remain2_image", function () {
    if ($(this).data("id") == "back") {
        $("#remain2").html(`<img src="${remain_card2}" alt="" id="remain2_image" data-id="front">`);
    }
    else {
        $("#remain2").html(`<img src="image/card-backimage.png" alt="" id="remain2_image" data-id="back">`);
    }
});
$(document).on("click", "#userC_image", function () {
    if ($(this).data("id") == "back") {
        $("#userC").html(`<p>ユーザーC</p><img src="${userC_card}" alt="" id="userC_image" data-id="front">`);
    }
    else {
        $("#userC").html(`<p>ユーザーC</p><img src="image/card-backimage.png" alt="" id="userC_image" data-id="back">`);
    }
});
$(document).on("click", "#userD_image", function () {
    if ($(this).data("id") == "back") {
        $("#userD").html(`<p>ユーザーD</p><img src="${userD_card}" alt="" id="userD_image" data-id="front">`);
    }
    else {
        $("#userD").html(`<p>ユーザーD</p><img src="image/card-backimage.png" alt="" id="userD_image" data-id="back">`);
    }
});
function randomise(){
    
    var weapon_list = ["ボールドマーカー","わかばシューター","シャープマーカー",
                       "プロモデラー","スプラシューター",".52ガロン","N-ZAP",
                       "プライムシューター",".96ガロン","ジェットスイーパー","ノヴァ",
                       "ホットブラスター","ロングブラスター","クラッシュブラスター","ラピッドブラスター",
                       "Rブラスターエリート","L3リールガン", "H3リールガン","ボトルガイザー",
                       "カーボンローラー","スプラローラー","ダイナモローラー","ヴァリアブルローラー",
                       "パブロ","ホクサイ","スクイックリン","スプラチャージャー",
                       "リッター4K","14式竹筒銃","ソイチューバー","バケットスロッシャー",
                       "ヒッセン","スクリュースロッシャー","オーバーフロッシャー","エクスプロッシャー",
                       "スプラスピナー","バレルスピナー","ハイドラント","クーゲルシュライバー",
                       "ノーチラス","スパッタリー","スプラマニューバー","ケルビン",
                       "デュアルスイーパー","クアッドホッパー","パラシェルター","キャンピングシェルター",
                       "スパイガジェット","トライストリンガー","LACT-450","ジムワイパー",
                       "ドライブワイパー","R-PEN/5H","スペースシューター","ガエンFF","モップリン","24式張替傘","フィンセント","S-BLAST"];

    //length=配列の要素数取得
    //splice=要素の取り除き
    
    var weapons=[]
    
    for(var counter=0;counter<24;counter++){
        var sheet_number = Math.floor(Math.random() * weapon_list.length)
        var weaponspush = weapon_list[sheet_number];
        weapons.push(weaponspush);
        weapon_list.splice(sheet_number, 1);
    }

    
    //document.getElementByID("ID").appendChildを使えば書き換えでない追加ができる
    
    for(var i=0;i<24;i++){
        var weaponbutton=document.createTextNode(weapons[i])
        var elementid="weapon"+i
        //console.log(elementid)
        document.getElementById( elementid ).innerHTML=weaponbutton.textContent;
        //console.log(document.getElementById(elementid),weaponbutton)
    }
        
    console.log(weapons);
}

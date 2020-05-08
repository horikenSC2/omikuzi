'use strict'

{
  $(function(){

    // document.getElementById('close-modal').addEventListener('click',()=>{
    //   document.getElementById('modal-wrapper').classList.add('hidden');
    // });

    $('#close-modal').click(function(){
      $('#modal-wrapper').fadeOut();
    });
  
    // const btn=document.getElementById('btn');
    // btn.addEventListener('click',()=>{
    //   document.getElementById('modal-wrapper').classList.remove('hidden');

    $('#btn').click(function(){
      $('#modal-wrapper').fadeIn(500);

      const rnge=Math.random();
      const rnde=Math.random();
      const rnvt=Math.random();
      const rnvp=Math.random();
      const rnvz=Math.random();
  
      if(document.querySelector('select').value==='テラン'){
        const general=[{text:'大事なところでサプライ詰まる',point:0},{text:'サプライブロック30秒以内！すごい！',point:2},{text:'サプライブロック4分…。',point:0},{text:'マスOCでマスミュールだ！',point:2},{text:'連続生産がうまくいく1日',point:2},{text:'ガスが余ってミネラル不足のアレ',point:0},{text:'バラック足りずに予約パンパン',point:0},{text:'アーモリー忘れて2-2が入らない',point:0},{text:'スムーズに2-2が入る1日',point:2},{text:'タンクが詰まって出られないアレ',point:0},{text:'完璧な引き撃ちができるかも',point:2},{text:'引き撃ちしてたら間違ってメディに乗せるアレ',point:0},{text:'プロキシばっか食らう1日',point:0},{text:'チーズばっか食らう1日',point:0},{text:'マクロ志向の相手が多い1日',point:2},{text:'煽ってくるやつばっかな1日',point:0},{text:'Good Mannerな相手が多い1日',point:2},{text:'ゴースト何もせずに死んでた',point:0},{text:'軍のコントロールグループに生産施設が入る',point:0},{text:'頼りになりますトールさん',point:2},];
  
        const vt=[{text:'レイヴンでタンクをドーン！',point:2},{text:'ドゥームドロップで死ぬクソゲー',point:0},{text:'プロキシリーパーに悩まされる',point:0},{text:'レンジアップリベ大活躍',point:2},{text:'イヤーな位置にシージされがち',point:0},{text:'調子乗ってフルエアー行って負けるアレ',point:0},{text:'バイオでメックを振り回す',point:2},{text:'メックでバイオを踏み潰す',point:2},{text:'やりたくないけどミラーばっかり',point:0},{text:'あっスティムパック開発忘れてたわ',point:0},{text:'忘れたころに飛んでくるBC',point:0},{text:'華麗なマリタンで勝利',point:2},{text:'リーパーヘリオン合戦に勝てない',point:0},{text:'敵のエアトランジッションに気づけず',point:0},{text:'とにかく疲れるTvT',point:0},{text:'敵のアンシージをキャッチ！',point:2},{text:'プロキシマローダーでさくっと勝利',point:2},];
  
        const vp=[{text:'マインドロップで15キル',point:2},{text:'Maxpaxで即死',point:0},{text:'ディスラプターに吹き飛ばされる',point:0},{text:'完璧なEMPでHTも怖くない',point:2},{text:'キャノンラッシュで即死',point:0},{text:'やっぱりタンクは頼りになる',point:2},{text:'ブリンクストーカーに止められるスティム',point:0},{text:'意外と刺さるvPメック',point:2},{text:'DT侵入直前にミュールを落とす',point:0},{text:'レンジアップリベで憤死させる',point:2},{text:'バイオで押し撃ち気持ちいい',point:2},{text:'喰らえ山梨バンカー',point:2},{text:'強化EMPで丸裸にしてやろう',point:2},{text:'サプライ上げそこねて入ってくるAdept',point:0},{text:'チャージロット硬すぎない？',point:0},{text:'困ったときのSCV Pull',point:2},{text:'コロッサスでマリーンがジュッ',point:0},{text:'アンチアーマーミサイルでゼロットを柔らかく仕上げました',point:2},];
  
        const vz=[{text:'BCでイライラさせてやろう',point:2},{text:'自陣手前まで伸びるクリープ',point:0},{text:'SO MANY BANELING',point:0},{text:'カッチカチのウルトラさんに死亡',point:0},{text:'完璧なスプリットでベインも怖くない',point:2},{text:'ベイン地雷でドカーン',point:0},{text:'バイオ2正面攻撃で振り回せ',point:2},{text:'マストールで全てを殴り殺す',point:2},{text:'いくらでも湧いてくるリングベイン',point:0},{text:'クイーンだけで守られるプッシュ',point:0},{text:'サードに無限に来るリングランバイ',point:0},{text:'ローチマクロプッシュ勘弁して',point:0},{text:'ラーカーに切り刻まれて死亡',point:0},{text:'Maruかと見紛うバイオマイクロ',point:2},{text:'INnoVationのようなメックマネージメント',point:2},{text:'マリーンマローダーは畑から取れます',point:2},{text:'メックのスワホに弱いこと弱いこと',point:0},];
  
        document.getElementById('general').textContent=general[Math.floor(rnge*general.length)].text;
        switch(general[Math.floor(rnge*general.length)].point){
          case 0:
          document.getElementById('general').style.color="red";
          break;
          case 2:
          document.getElementById('general').style.color="blue";
          break;
        }
        document.getElementById('vt').textContent=vt[Math.floor(rnvt*vt.length)].text;
        switch(vt[Math.floor(rnvt*vt.length)].point){
          case 0:
          document.getElementById('vt').style.color="red";
          break;
          case 2:
          document.getElementById('vt').style.color="blue";
          break;
        }
        document.getElementById('vp').textContent=vp[Math.floor(rnvp*vp.length)].text;
        switch(vp[Math.floor(rnvp*vp.length)].point){
          case 0:
          document.getElementById('vp').style.color="red";
          break;
          case 2:
          document.getElementById('vp').style.color="blue";
          break;
        }
        document.getElementById('vz').textContent=vz[Math.floor(rnvz*vz.length)].text;
        switch(vz[Math.floor(rnvz*vz.length)].point){
          case 0:
          document.getElementById('vz').style.color="red";
          break;
          case 2:
          document.getElementById('vz').style.color="blue";
          break;
        }
  
        const sum=general[Math.floor(rnge*general.length)].point+vt[Math.floor(rnvt*vt.length)].point+vp[Math.floor(rnvp*vp.length)].point+vz[Math.floor(rnvz*vz.length)].point
        
        switch(sum){
          case 0:
          document.getElementById('main-result').textContent="大凶";
          break;
          case 2:
          document.getElementById('main-result').textContent="凶";
          break;
          case 4:
          document.getElementById('main-result').textContent="中吉";
          break;
          case 6:
          document.getElementById('main-result').textContent="吉";
          break;
          case 8:
          document.getElementById('main-result').textContent="大吉";
          break;
        }
  
      }else if(document.querySelector('select').value==='プロトス'){
        const general=[{text:'大事なところでサプライ詰まる',point:0},{text:'サプライブロック1分以内！すごい！',point:2},{text:'サプライブロック4分…。',point:0},{text:'完璧なブリンクストーカーマイクロ',point:2},{text:'チャージロット15体同時ワープイン！',point:2},{text:'うわっずっとガス2人掘りしてた',point:0},{text:'Artosis Pylon割られて終了',point:0},{text:'肝心な所でスローワープイン',point:0},{text:'素晴らしいワープリジャグリング',point:2},{text:'軍のコントロールグループにワープゲートが入る',point:0},{text:'マスキャリアーでAムーブWIN',point:2},{text:'クロノブーストと間違ってリコール',point:0},{text:'プロキシばっか食らう1日',point:0},{text:'チーズばっか食らう1日',point:0},{text:'マクロ志向の相手が多い1日',point:2},{text:'煽ってくるやつばっかな1日',point:0},{text:'Good Mannerな相手が多い1日',point:2},{text:'ディスラプターでBOOOOOM',point:2},{text:'頼りになりますイモータル',point:2},{text:'フルエナジーHTをアーコンにしちゃった',point:0},{text:'パイロン引っかかってネクサス立たない・・・',point:0},];
  
        const vt=[{text:'ブリンクストーカーでスティムをストップ！',point:2},{text:'ドゥームドロップで死ぬクソゲー',point:0},{text:'ウィドウマインが15キル',point:0},{text:'レンジアップリベに憤死',point:0},{text:'チャージロットで切り刻め！',point:2},{text:'2－2完成直前のダブルフォージ割られる',point:0},{text:'HTコロディスラプターでバイオも怖くない！',point:2},{text:'Adeptで敵陣内偵察成功',point:2},{text:'サーマルランス研究は誤差',point:0},{text:'あっストーム開発忘れてたわ',point:0},{text:'たまにやられてしんどいメック',point:0},{text:'キャノンラッシュでさくっと勝利',point:2},{text:'Maxpaxでさくっと勝利',point:2},{text:'SHADOW STRIDE AND WIN',point:2},{text:'2ベースタンクプッシュで死亡',point:0},{text:'強化ゴーストに丸裸にされる',point:0},{text:'プロキシシールドバッテリーヴォイドという電波を受信',point:2},{text:'リーパーに翻弄されるアデプト',point:0},{text:'SCV壁にするのずるいよずるい',point:0},];
  
        const vp=[{text:'やりたくないけどミラーばっかり',point:0},{text:'はいはいまたプロキシロボね',point:0},{text:'敵のプロキシを発見！',point:2},{text:'DT来たのにオブザーバー無し',point:0},{text:'キャノンラッシュで即死',point:0},{text:'キャノンラッシュで即死させよう',point:2},{text:'1ベース同士の泥沼殴り合いに勝利',point:2},{text:'Pミラー ワカラナイ',point:0},{text:'やっぱり頼れるイモータル',point:2},{text:'フェニックス合戦という地獄',point:0},{text:'2アデプト来たからパイロンを・・・ミネラルがない！',point:0},{text:'アーコンがいっぱいいれば勝てるってことさ',point:2},];
  
        const vz=[{text:'気づいたらオラクルがクイーン殴ってて死亡',point:0},{text:'えっ俺の軍はどこ・・・あっそこにラーカーいたのね',point:0},{text:'ひたすらプローブを溶かし続けるベインハラス',point:0},{text:'やっぱ2ベースイモータルっしょ',point:2},{text:'ストームでハイドラを焼き尽くせ',point:2},{text:'あっゼロットホールドしてない',point:0},{text:'マスアデプトプッシュでワーカー20キル',point:2},{text:'えるしっているか　いもーたると　あーこんがいっぱいいるとつよい',point:2},{text:'苦労して出したキャリアー軍団をヴァイパーがヒョイッ',point:0},{text:'ベインで溶けるハイテン4体',point:0},{text:'FFで止めてイモータルで殴れ！',point:2},{text:'アーコン2体入りワープリが落とされる',point:0},{text:'ワープリハラスでハイヴを割ったぞ',point:2},{text:'躍動する3オラクル',point:2},{text:'Statsのような鉄壁のディフェンス',point:2},{text:'ナイダススワホで憤死',point:0},{text:'ラベジャーにワープリ落とされる',point:0},];
  
        document.getElementById('general').textContent=general[Math.floor(rnge*general.length)].text;
        switch(general[Math.floor(rnge*general.length)].point){
          case 0:
          document.getElementById('general').style.color="red";
          break;
          case 2:
          document.getElementById('general').style.color="blue";
          break;
        }
        document.getElementById('vt').textContent=vt[Math.floor(rnvt*vt.length)].text;
        switch(vt[Math.floor(rnvt*vt.length)].point){
          case 0:
          document.getElementById('vt').style.color="red";
          break;
          case 2:
          document.getElementById('vt').style.color="blue";
          break;
        }
        document.getElementById('vp').textContent=vp[Math.floor(rnvp*vp.length)].text;
        switch(vp[Math.floor(rnvp*vp.length)].point){
          case 0:
          document.getElementById('vp').style.color="red";
          break;
          case 2:
          document.getElementById('vp').style.color="blue";
          break;
        }
        document.getElementById('vz').textContent=vz[Math.floor(rnvz*vz.length)].text;
        switch(vz[Math.floor(rnvz*vz.length)].point){
          case 0:
          document.getElementById('vz').style.color="red";
          break;
          case 2:
          document.getElementById('vz').style.color="blue";
          break;
        }
  
        const sum=general[Math.floor(rnge*general.length)].point+vt[Math.floor(rnvt*vt.length)].point+vp[Math.floor(rnvp*vp.length)].point+vz[Math.floor(rnvz*vz.length)].point
        
        switch(sum){
          case 0:
          document.getElementById('main-result').textContent="大凶";
          break;
          case 2:
          document.getElementById('main-result').textContent="凶";
          break;
          case 4:
          document.getElementById('main-result').textContent="中吉";
          break;
          case 6:
          document.getElementById('main-result').textContent="吉";
          break;
          case 8:
          document.getElementById('main-result').textContent="大吉";
          break;
        }
      }else{
        const general=[{text:'大事なところでOL足りない',point:0},{text:'サプライブロック1分以内！すごい！',point:2},{text:'サプライブロック4分…。',point:0},{text:'マップをクリープで埋め尽くせ！',point:2},{text:'はーいミュータ25体同時生産いきまーす',point:2},{text:'Creep Tumor邪魔でベース建てられねえ',point:0},{text:'クリープOLザーグリングで合法マップハック',point:2},{text:'産卵不足でラーバが足りない',point:0},{text:'フォースを取らせてもらえない',point:0},{text:'間違ってスワホ作っちゃった',point:0},{text:'案ずるな Serral王が守ってくださっておる',point:2},{text:'プロキシばっか食らう1日',point:0},{text:'チーズばっか食らう1日',point:0},{text:'マクロ志向の相手が多い1日',point:2},{text:'Microbial Shroudって何に使うの',point:0},{text:'Good Mannerな相手が多い1日',point:2},{text:'ザーグリング100体同時生産いきます',point:2},{text:'偵察が冴えてすべてを守れる1日',point:2},{text:'大量のバンクで安心な試合運び',point:2},{text:'コラプター作りすぎちゃった',point:0},{text:'CALM DOWN MAKE DRONE',point:2},];
  
        const vt=[{text:'T3エアユニットがハラスで飛んでくるのおかしくない？',point:0},{text:'クリープが伸びていればバイオも怖くない',point:2},{text:'SO MANY BANELING',point:2},{text:'建物に詰まるウルトラさん',point:0},{text:'オフクリープで追いすぎちゃった・・・',point:0},{text:'ベイン地雷でさよならマリーン',point:2},{text:'バイオ2正面攻撃にイライラ',point:0},{text:'タンクがいてもヴァイパーでへっちゃら',point:2},{text:'マスクイーンで序盤のプッシュはへっちゃら',point:2},{text:'無限にランバイ入れてやれ',point:2},{text:'ローチで決めきれず賞味期限切れで死亡',point:0},{text:'ラーカーでバイオを切り刻め',point:2},{text:'フォースを取らせてもらえない',point:0},{text:'内政勝負で大勝利！',point:2},{text:'ウィドウマインで弾け飛ぶベイン15体',point:0},{text:'青ヘリランバイ勘弁して',point:0},{text:'スワホでメックを振り回せ',point:2},{text:'さんざん荒らして飛んで帰るたびに1体ずつ増えるBC',point:0},{text:'PFなんてベインでイチコロさ',point:2},{text:'3-3バイオに押し切られて死亡',point:0},];
  
        const vp=[{text:'オラクルをクイーンできっちりディフェンス',point:2},{text:'ベインドロップでプローブ12キル',point:2},{text:'詳細は省くが、最終的にイモータルプッシュで死亡',point:0},{text:'大事なハイドラがストームに焼かれた',point:0},{text:'ゼロットホールドしてないじゃーんおじゃましまーす',point:2},{text:'アデプト実質2箇所に同時に存在できるのずるいでしょ',point:0},{text:'イモータルがブリンクするのおかしいよ',point:0},{text:'マザーシップもキャリアーもヴァイパーでヒョイッ',point:2},{text:'ベインラッシュでサクッと勝利',point:2},{text:'DTにサード割られる最悪なスタート',point:0},{text:'クイーン選手、アーコン入りワープリを落とすファインプレー',point:2},{text:'進軍中に限ってやってくるワープリハラス',point:0},{text:'キャノンラッシュからのシールドイモータルで死亡',point:0},{text:'あんなにサプライ勝ってたのに負けちゃうのかよ',point:0},{text:'ナイダススワホで憤死させてやろう',point:2},{text:'FF？こんだけラベジャーいれば無問題',point:2},];
  
        const vz=[{text:'やりたくないけどミラーばっかり',point:0},{text:'楽しい雪合戦で勝利',point:2},{text:'ローチを多く出したほうが勝つゲーム',point:2},{text:'じゃんけんぽん！負け・・・。',point:0},{text:'雪合戦やりたくない・・・。',point:0},{text:'バローチに荒らし回られて死亡',point:0},{text:'油断してたら来るミュータ',point:0},{text:'じゃんけんぽん！勝ち！',point:2},{text:'ドローンスパインラッシュという地獄',point:0},{text:'先Hatフェイクリングフラッドでサクッと勝利',point:2},{text:'スパイア見てからナイダス余裕でした',point:2},{text:'テック伸ばし遅れてラーカーで死亡',point:0},{text:'ワープリハラスでハイヴを割ったぞ',point:2},];
  
        document.getElementById('general').textContent=general[Math.floor(rnge*general.length)].text;
        switch(general[Math.floor(rnge*general.length)].point){
          case 0:
          document.getElementById('general').style.color="red";
          break;
          case 2:
          document.getElementById('general').style.color="blue";
          break;
        }
        document.getElementById('vt').textContent=vt[Math.floor(rnvt*vt.length)].text;
        switch(vt[Math.floor(rnvt*vt.length)].point){
          case 0:
          document.getElementById('vt').style.color="red";
          break;
          case 2:
          document.getElementById('vt').style.color="blue";
          break;
        }
        document.getElementById('vp').textContent=vp[Math.floor(rnvp*vp.length)].text;
        switch(vp[Math.floor(rnvp*vp.length)].point){
          case 0:
          document.getElementById('vp').style.color="red";
          break;
          case 2:
          document.getElementById('vp').style.color="blue";
          break;
        }
        document.getElementById('vz').textContent=vz[Math.floor(rnvz*vz.length)].text;
        switch(vz[Math.floor(rnvz*vz.length)].point){
          case 0:
          document.getElementById('vz').style.color="red";
          break;
          case 2:
          document.getElementById('vz').style.color="blue";
          break;
        }
  
        const sum=general[Math.floor(rnge*general.length)].point+vt[Math.floor(rnvt*vt.length)].point+vp[Math.floor(rnvp*vp.length)].point+vz[Math.floor(rnvz*vz.length)].point
        
        switch(sum){
          case 0:
          document.getElementById('main-result').textContent="大凶";
          break;
          case 2:
          document.getElementById('main-result').textContent="凶";
          break;
          case 4:
          document.getElementById('main-result').textContent="中吉";
          break;
          case 6:
          document.getElementById('main-result').textContent="吉";
          break;
          case 8:
          document.getElementById('main-result').textContent="大吉";
          break;
        }
      }
    });
  });

}
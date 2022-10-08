const menu = [
  '今はコンビニ弁当のキブンね',
  'すきやきにしようよ！',
  'ルナ、パスタつくって！',
  'たまにはソバなんてどう？',
  'ラーメン食べたい！',
  'ハンバーグがいいわ！',
  'ピザを分けて食べるのがいいわ',
  '白いご飯がいい！',
  '鍋にしましょう！'
];
const imgPath = [
  '<img src="./img/sani-.png" alt="サニー">',
  '<img src="./img/sani-(smile).png" alt="笑顔のサニー">',
  '<img src="./img/sani-(smile).png" alt="笑顔のサニー">',
  '<img src="./img/luna.png" alt="ルナ">',
  '<img src="./img/luna(smile).png" alt="笑顔のルナ">',
  '<img src="./img/luna(smile).png" alt="笑顔のルナ">',
  '<img src="./img/star.png" alt="スター">',
  '<img src="./img/star(smile).png" alt="笑顔のスター">',
  '<img src="./img/star(smile).png" alt="笑顔のスター">',
];
function dinner() {
  randMenu = Math.floor(Math.random() * menu.length);
  document.getElementById('comment').innerText = menu[randMenu];
  document.getElementById('fairy').innerHTML = imgPath[randMenu];
}
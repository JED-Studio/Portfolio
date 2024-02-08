 




<?php
//Сбор данных из полей формы. 
$name = $_POST['email1'];// Берём данные из input c атрибутом name="name"
 // Берём данные из input c атрибутом name="phone"
$email = $_POST['text1']; // Берём данные из input c атрибутом name="mail"

$token = "6040218763:AAGz5dXc7AXy7kP4rPojMz0QfQp42OcbB_w"; // Тут пишем токен
$chat_id = "-915520783"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "jedstudio.ru"; //Указываем название сайта

$arr = array(

  'Заказ с сайта: ' => $sitename,
  'Имя: ' => $name,
  
  'Почта' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");



/*if (!empty($_POST) && !empty(trim($_POST['email1']))
  $sitename = 'jedstudio.ru'

if (mail($name,$email,$sitename)){
  $result = '<div class\'success\'>Спасибо, ваша заявка принята!</div>'
  echo 'OK';
} else{
  $result = '<div class="success">Спасибо, ваша заявка принята!</div>';
  echo $result;
}*/
?>


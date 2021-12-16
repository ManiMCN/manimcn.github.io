   /* JavaScript */
   var val   = 0;
   var angel = 0;

   /* 呼び出し毎に36度進んだ正弦を返す */
   function getValue() {
     val = Math.sin(angel * (Math.PI / 180));
     angel = (angel + 36) % 360;
     return val;
   }

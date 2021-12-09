const keys = document.querySelectorAll(".key");

for (let i = 0; i < keys.length; i++) {
   keys[i].addEventListener("click", function () {
      let keyId = this.id;
      playSound(keyId);
      playAnimation(keyId);
   })
}

document.addEventListener("keypress", function (event) {
   const currentSound = keyToSound(event.key);
   if (currentSound == ""){
      return
   } else {
      playSound(currentSound);
      playAnimation(currentSound);
   }
});

function playSound(id) {

   switch (id) {
      case "c":
         const c = new Audio('./notes/c.mp3')
         c.play()
         break
      case "cSharp":
         const cSharp = new Audio('./notes/csharp.mp3')
         cSharp.play()
         break
      case "d":
         const d = new Audio('./notes/d.mp3')
         d.play()
         break
      case "dSharp":
         const dSharp = new Audio('./notes/dsharp.mp3')
         dSharp.play()
         break
      case "e":
         const e = new Audio('./notes/e.mp3')
         e.play()
         break
      case "f":
         const f = new Audio('./notes/f.mp3')
         f.play()
         break
      case "fSharp":
         const fSharp = new Audio('./notes/fsharp.mp3')
         fSharp.play()
         break
      case "g":
         const g = new Audio('./notes/g.mp3')
         g.play()
         break
      case "gSharp":
         const gSharp = new Audio('./notes/gsharp.mp3')
         gSharp.play()
         break
      case "a":
         const a = new Audio('./notes/a.mp3')
         a.play()
         break
      case "aSharp":
         const aSharp = new Audio('./notes/asharp.mp3')
         aSharp.play()
         break
      case "b":
         const b = new Audio('./notes/b.mp3')
         b.play()
         break
      default:
         console.log(id)
   }
}

function playAnimation(id) {
   const currentKey = document.querySelector(`#${id}`);
   currentKey.classList.add("pressed");
   setTimeout(function () {
      currentKey.classList.remove("pressed");
   }, 100);
}

function keyToSound(pressedKey){
   if (pressedKey == "z"){
      return "c";
   }
   if (pressedKey == "s"){
      return "cSharp";
   } 
   if (pressedKey == "x"){
      return "d";
   } 
   if (pressedKey == "d"){
      return "dSharp";
   } 
   if (pressedKey == "c"){
      return "e";
   } 
   if (pressedKey == "v"){
      return "f";
   } 
   if (pressedKey == "g"){
      return "fSharp";
   } 
   if (pressedKey == "b"){
      return "g";
   } 
   if (pressedKey == "h"){
      return "gSharp";
   } 
   if (pressedKey == "n"){
      return "a";
   } 
   if (pressedKey == "j"){
      return "aSharp";
   } 
   if (pressedKey == "m"){
      return "b";
   }
   else {
      return "";
   }
}
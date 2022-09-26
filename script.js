 const drum = document.getElementsByClassName('drum')

   for(let i = 0 ;i<drum.length; i++){
    drum[i].addEventListener('click', ()=>{
    let text = drum[i].textContent;  
    playmusic(text)
    Animation(text) 
 });
}
   document.addEventListener('keypress',   (e)=>{
    let keytext = e.key;
    playmusic(keytext);
    animation(keytext);
   });

    function playmusic(key) {
        switch (key) {
            case "w":
                let music1 = new Audio ("sounds/crash.mp3")
                music1.play()
                break;
                case "a":
                    let music2 = new Audio ("sounds/kick-bass.mp3")
                    music2.play()
                    break;
                    case "s":
                        let music3 = new Audio ("sounds/snare.mp3")
                        music3.play()
                        break;
                        case "d":
                            let music4 = new Audio ("sounds/tom-1.mp3")
                            music4.play()
                            break;
                            case "j":
                            let music5 = new Audio ("sounds/tom-2.mp3")
                            music5.play()
                            break;
                            case "k":
                            let music6 = new Audio ("sounds/tom-3.mp3")
                            music6.play()
                            break;
                            case "l":
                            let music7 = new Audio ("sounds/tom-4.mp3")
                            music7.play()
                            break;
        
        
            default:
                break;
        }
    }



   function animation(key) {
  const pressed = document.querySelector(`.${key}`);
  pressed.classList.add("pressed");

  setTimeout(() => {
    pressed.classList.remove("pressed");
  }, 100);
}

   



 
    //   switch case shaklidagi
   
// for(let i = 0 ;i<drum.length; i++){
//     drum[i].addEventListener('click', ()=>{
//     let text = drum[i].textContent;   
//     switch (text) {
//         case "w":
//             let music1 = new Audio ("sounds/crash.mp3")
//             music1.play()
//             break;
//             case "a":
//                 let music2 = new Audio ("sounds/kick-bass.mp3")
//                 music2.play()
//                 break;
//                 case "s":
//                     let music3 = new Audio ("sounds/snare.mp3")
//                     music3.play()
//                     break;
//                     case "d":
//                         let music4 = new Audio ("sounds/tom-1.mp3")
//                         music4.play()
//                         break;
//                         case "j":
//                         let music5 = new Audio ("sounds/tom-2.mp3")
//                         music5.play()
//                         break;
//                         case "k":
//                         let music6 = new Audio ("sounds/tom-3.mp3")
//                         music6.play()
//                         break;
//                         case "":
//                         let music7 = new Audio ("sounds/tom-4.mp3")
//                         music7.play()
//                         break;

    
//         default:
//             break;
//     }


//  })
// }

//    if shaklidagi

// for(let i = 0 ;i<drum.length; i++){
//     drum[i].addEventListener('click', ()=>{
//     let text = drum[i].textContent;   
    
    
//     if (text=="w"){
//         let music1 = new Audio ("sounds/crash.mp3")
//         music1.play();
//     }
//     else if (text=="a"){
//         let music2 =new Audio ("sounds/kick-bass.mp3")
//         music2.play()
//     }else if (text=="s"){
//         let music3 =new Audio ("sounds/snare.mp3")
//         music3.play()
//     }else if (text=="d"){
//         let music4 =new Audio ("sounds/tom-1.mp3")
//         music4.play()
//     }else if (text=="j"){
//         let music5 =new Audio ("sounds/tom-2.mp3")
//         music5.play()
//     }else if (text=="k"){
//         let music6 =new Audio ("sounds/tom-3.mp3")
//         music6.play()
//     }else if (text=="l"){
//         let music7 =new Audio ("sounds/tom-4.mp3")
//         music7.play()
//     }
// })
// }

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

    

 word();


});

let word = async () => {

    let on = () =>{
        var led = new five.Led(13);
        led.on();
    }

    let off = () =>{
        var led = new five.Led(13);
        led.off()
    }

    let blink = (time) => {
        setTimeout(on,time * 200);
        setTimeout(off,time * 300);
    }

    let hold = (time) => {
        setTimeout(on,time * 500);
        setTimeout(off,time * 1000);
    }
    
    let a =  () =>{
        console.log("running a")
        // blink and hold

        on()
        setTimeout(off,100);

        setTimeout(on,300);
        setTimeout(off,600);

    }

    let b = () => {
        //hold and 3 blinks
        console.log('running b')
        on()
        setTimeout(off,300);

        setTimeout(on,600);
        setTimeout(off,700);

        setTimeout(on,1000);
        setTimeout(off,1100);

        setTimeout(on,1400);
        setTimeout(off,1500);

    }

    let c = () => {
        //hold blink hold blink

        console.log('running c')

        on()
        setTimeout(off,300);

        setTimeout(on,600);
        setTimeout(off,700);

        setTimeout(on,1000);
        setTimeout(off,1300);

        setTimeout(on,1600);
        setTimeout(off,1700);

    }

    let d = () => {
        // hold and 2 blinks

        console.log('runnin d')

        on()
        setTimeout(off,300);

        setTimeout(on,600);
        setTimeout(off,700);

        setTimeout(on,1000);
        setTimeout(off,1100);
    }

    let e = () => {
        // 1 blink 
        console.log('running 3')

        on()
        setTimeout(off,100);

    }

    let f = () => {
        // 2 blinks hold and blink
        console.log('running f')
        on()
        setTimeout(off,100);

        setTimeout(on, 400)
        setTimeout(off,500);

        setTimeout(on,800);
        setTimeout(off,1100);

        setTimeout(on, 1400)
        setTimeout(off,1500);

    }

    let g = () => {
        // 2 holds and a blink
        console.log('running g')

        on()
        setTimeout(off,300);

        setTimeout(on,500);
        setTimeout(off,800);

        setTimeout(on,1100);
        setTimeout(off,1200);

    }

    let h = () => {
        //4 blinks
        console.log('running h')

        on()
        setTimeout(off,100);

        setTimeout(on, 400)
        setTimeout(off,500);

        setTimeout(on, 800)
        setTimeout(off,900);

        setTimeout(on, 1200)
        setTimeout(off,1300);
    }

    let i = () => {
        //2 blinks
        console.log('runnin i')

        on()
        setTimeout(off,100);

        setTimeout(on, 400)
        setTimeout(off,500);

    }

    let j = () => {
        // blink and 3 holds
        on()
        setTimeout(off,100);

        setTimeout(on,300);
        setTimeout(off,600);

        setTimeout(on,900);
        setTimeout(off,1200);

        setTimeout(on,1500);
        setTimeout(off,1800);

    }

    let k =() => {
        // hold blink hold
        console.log("running k")

        on()
        setTimeout(off,300);

        setTimeout(on,600);
        setTimeout(off,700);

        setTimeout(on,1000);
        setTimeout(off,1300);

    }

    let l = () => {
        //blink hold 2 blinks
        console.log('running l')

        on()
        setTimeout(off,100);

        setTimeout(on,300);
        setTimeout(off,600);

        setTimeout(on,900);
        setTimeout(off,1000);

        setTimeout(on,1300);
        setTimeout(off,1600);

    }

    let n = () => {
        //hold and blink
        console.log('runnin n')

        on()
        setTimeout(off,300);

        setTimeout(on,600);
        setTimeout(off,700);

    }

    let p = () => {
        //blink 2 holds blink
        console.log('runnin p')

        on()
        setTimeout(off,100);

        setTimeout(on,300);
        setTimeout(off,600);

        setTimeout(on,900);
        setTimeout(off,1200);

        setTimeout(on,1500);
        setTimeout(off,1600);

    }

    let q = () => {
        //2 holds blink and hold
        console.log('running q')

        on()
        setTimeout(off,300);

        setTimeout(on,500);
        setTimeout(off,800);

        setTimeout(on,1100);
        setTimeout(off,1200);

        setTimeout(on,1500);
        setTimeout(off,1800);
    }

    let r = () => {
        //blink hold blink
        on()
        setTimeout(off,100);

        setTimeout(on,300);
        setTimeout(off,600);

        setTimeout(on,900);
        setTimeout(off,1000);
    }

    let s = () => {
        //3 blinks
        console.log('running s')

        on()
        setTimeout(off,100);

        setTimeout(on, 400)
        setTimeout(off,500);

        setTimeout(on, 800)
        setTimeout(off,900);
    }

    let u = () => {
        // 2 blinks and hold
        console.log*'running u'
        on()
        setTimeout(off,100);

        setTimeout(on, 400)
        setTimeout(off,500);

        setTimeout(on, 800)
        setTimeout(off,1100);
    }

    let v = () => {
        // 3 blinks and a hold
        console.log('running v')

        on()
        setTimeout(off,100);

        setTimeout(on, 400)
        setTimeout(off,500);

        setTimeout(on, 800)
        setTimeout(off,900);

        
        setTimeout(on, 1200)
        setTimeout(off,1500);
    }

    let w = () => {
        // blink and 2 holds
        console.log('running w')
        on()
        setTimeout(off,100);

        setTimeout(on,300);
        setTimeout(off,600);

        setTimeout(on,900);
        setTimeout(off,1200);
    }

    let x = () => {
        // hold 2 blinks hold
        console.log('running x')

        on()
        setTimeout(off,300);

        setTimeout(on,600);
        setTimeout(off,700);

        setTimeout(on,1000);
        setTimeout(off,1100);

        setTimeout(on,1400);
        setTimeout(off,1700);

    }

    let y = () => {
        // hold blink and 2 holds
        console.log('running y')

        on()
        setTimeout(off,300);

        setTimeout(on,600);
        setTimeout(off,700);

        setTimeout(on,1000);
        setTimeout(off,1300);

        setTimeout(on,1600);
        setTimeout(off,1900);

    }

    let z = () => {
        //2 holds 2 blinks
        console.log('running z')

        on()
        setTimeout(off,300);

        setTimeout(on,500);
        setTimeout(off,800);

        setTimeout(on,1100);
        setTimeout(off,1200);

        setTimeout(on,1500);
        setTimeout(off,1600);

    }

    let t = () => {
        console.log('running t')
        // 1 hold
         on()
        setTimeout(off,300);
    }

    let o = () => {
        console.log('running 0')
        //3 holds
        on()
        setTimeout(off,300);

        setTimeout(on,500);
        setTimeout(off,800);

        setTimeout(on,1000);
        setTimeout(off,1300);
        
    }

    let m = () => {
        // 2 hold
        console.log('running m')
        on()
        setTimeout(off,300);

        setTimeout(on,600);
        setTimeout(off,900);
    }

//     let readline = require('readline-sync');

// let answer = readline.question("What is your name?");

let value = 0;

let readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter word for morse code: ',(answer) => {
    for (let i = 0; i < answer.length; i++) {
        let response = answer.charAt(i);

        if(response == 't'){
            setTimeout(t,value)
        }
       else if(response == 'o'){
            setTimeout(o,value)
        }
        else if(response == 'm'){
            setTimeout(m,value)
        }
        else if(response == 'y'){
            setTimeout(y,value)
        }
        else if(response == 'a'){
            setTimeout(a,value)
        }
        else if(response == 'b'){
            setTimeout(b,value)
        }
        else if(response == 'c'){
            setTimeout(c,value)
        }
        else if(response == 'd'){
            setTimeout(d,value)
        }
        else if(response == 'e'){
            setTimeout(e,value)
        }
        else if(response == 'f'){
            setTimeout(f,value)
        }
        else if(response == 'g'){
            setTimeout(g,value)
        }
        else if(response == 'h'){
            setTimeout(h,value)
        }
        else if(response == 'i'){
            setTimeout(i,value)
        }
        else if(response == 'j'){
            setTimeout(j,value)
        }
        else if(response == 'k'){
            setTimeout(k,value)
        }
        else if(response == 'l'){
            setTimeout(l,value)
        }
        else if(response == 'l'){
            setTimeout(y,value)
        }
        else if(response == 'n'){
            setTimeout(n,value)
        }
        else if(response == 'p'){
            setTimeout(p,value)
        }
        else if(response == 'q'){
            setTimeout(q,value)
        }
        else if(response == 'r'){
            setTimeout(r,value)
        }
        else if(response == 's'){
            setTimeout(s,value)
        }
        else if(response == 'u'){
            setTimeout(u,value)
        }
        else if(response == 'v'){
            setTimeout(v,value)
        }
        else if(response == 'w'){
            setTimeout(w,value)
        }
        else if(response == 'x'){
            setTimeout(x,value)
        }
        else if(response == 'z'){
            setTimeout(y,value)
        }
        else
        console.log('space detected')
        value += 2200;
      }
      rl.close();
})


}


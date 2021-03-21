function setup() {

    if(!SEED) {
        return
    }

    block = SEED;
    
    //MONDRIATICA v1.0
    //February 2021
    //programmed by Katherina "Kate the Cursed" Jesek with love <3
    //katethecursed.com
    
    //special thanks to sgt_slaughtermelon for tips + random hex script
    //sgtslaughtermelon.com
    
    
    // INDEX
    // i. color palette generation
    
    
    let colorlet1 = block.substring(0,2);
    let color1 = unhex(colorlet1);
    
    
    let colorlet2 = block.substring(2,4);
    let color2 = unhex(colorlet2);
    
    
    let colorlet3 = block.substring(4,6);
    let color3 = unhex(colorlet3);
    
    
    let colorlet4 = block.substring(6,8);
    let color4 = unhex(colorlet4);
    
    
    let colorlet5 = block.substring(8,10);
    let color5 = unhex(colorlet5);
    
    
    let colorlet6 = block.substring(10,12);
    let color6 = unhex(colorlet6);
    
    
    let colorlet7 = block.substring(12,14);
    let color7 = unhex(colorlet7);
    
    
    let colorlet8 = block.substring(14,16);
    let color8 = unhex(colorlet8);
    
    
    let colorlet9 = block.substring(16,18);
    let color9 = unhex(colorlet9);
    
    // shape generation
    
    let shapelet1 = block.substring(18,20); // hex 10
    let shape1 = unhex(shapelet1);
    
    let shapelet2 = block.substring(20,22); // hex 11
    let shape2 = unhex(shapelet2);
    
    let shapelet3 = block.substring(22,24); // hex 12
    let shape3 = unhex(shapelet3);
    
    let shapelet4 = block.substring(24,26); // hex 13
    let shape4 = unhex(shapelet4);
    
    let shapelet5 = block.substring(26,28); // hex 14
    let shape5 = unhex(shapelet5);
    
    let shapelet6 = block.substring(28,30); // hex 15
    let shape6 = unhex(shapelet6);
    
    let shapelet7 = block.substring(30,32); // hex 16
    let shape7 = unhex(shapelet7);
    
    let shapelet8 = block.substring(32,34); // hex 17
    let shape8 = unhex(shapelet8);
    
    let shapelet9 = block.substring(34,36); // hex 18
    let shape9 = unhex(shapelet9);
    
    let shapelet10 = block.substring(36,38); // hex 19
    let shape10 = unhex(shapelet10);
    
    let shapelet11 = block.substring(38,40); // hex 20
    let shape11 = unhex(shapelet11);
    
    let shapelet12 = block.substring(40,42); // hex 21
    let shape12 = unhex(shapelet12);
    
    let shapelet13 = block.substring(42,44); // hex 22
    let shape13 = unhex(shapelet13);
    
    let shapelet14 = block.substring(44,46); // hex 23
    let shape14 = unhex(shapelet14);
    
    let shapelet15 = block.substring(46,48); // hex 24
    let shape15 = unhex(shapelet15);
    
    let shapelet16 = block.substring(48,50); // hex 25
    let shape16 = unhex(shapelet16);
    
    let shapelet17 = block.substring(50,52); // hex 26
    let shape17 = unhex(shapelet17);
    
    let shapelet18 = block.substring(52,54); // hex 27
    let shape18 = unhex(shapelet18);
    
    // palette picker
    
    let modifierlet1 = block.substring(54,56); // hex 28
    let modifier1 = unhex(modifierlet1);
    
    let modifierlet2 = block.substring(56,58); // hex 29
    let modifier2 = unhex(modifierlet2);
    
    let modifierlet3 = block.substring(58,60); // hex 30
    let modifier3 = unhex(modifierlet3);
    
    let modifierlet4 = block.substring(60,62); // hex 31
    let modifier4 = unhex(modifierlet4);
    
    let modifierlet5 = block.substring(62,64); // hex 31
    let modifier5 = unhex(modifierlet5);
    
    let modifier6 = (modifier1+modifier2)/2;
    let modifier7 = (modifier3+modifier4)/2;
    let modifier8 = (modifier5+modifier6)/2;
    let modifier9 = (modifier6+modifier7)/2;
    
    let palette1 = shape1;
    let palette2 = shape2;
    let palette3 = shape3;
    let palette4 = shape4;
    let palette5 = shape5;
    let palette6 = shape6;
    let palette7 = shape7;
    let palette8 = shape8;
    let palette9 = shape9;
     //
    
    
    // SETUP
        // this is where the fun begins
    
      createCanvas(640, 640);
      background(255);
      
      rectMode(CORNER);
      stroke(0);
      noFill();
      strokeWeight(height/15);
      rect(0, 0, width, height);
    
    if (modifier1 > 123) {
      rectMode(CENTER);
    }
    
    // TILE GENERATION 
        // TILE 1
    
        // make an exception for tiles too large or small
        
    if ((width*shape1/255 < width/6) || (height*shape2/255 < height/6) || (width*shape1/255 > width*0.75) || (height*shape2/255 > height*0.75)) {
      print("Tile createCanvas exception at Tile 1 / ");
      if (palette1 <= 85) {
        print("palette 1 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(0, 0, width/3, height/3);
        fill(color1, color2, color3);
      } else if (palette1 >= 170) {
        print("palette 2 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(0, 0, width/3, height/3);
        fill(color4, color5, color6);
      } else
        print("palette 3 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(0, 0, width/3, height/3);
        fill(color7, color8, color9);
          
          // now that we've covered our bases, let's generate some tiles <3
    
    } else if (palette1 <= 85) {
      print("palette 1 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(0, 0, width*shape1/255, height*shape2/255);
      fill(color1, color2, color3);
    } else if (palette1 >= 170) {
      print("palette 2 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(0, 0, width*shape1/255, height*shape2/255);
      fill(color4, color5, color6);
    } else
      print("palette 3 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(0, 0, width*shape1/255, height*shape2/255);
      fill(color7, color8, color9);
      
      // c-c-c-combo breaker!!!
    if (modifier2 > 123) {
      rectMode(CENTER);
    } else
      rectMode(CORNER);
    
     // TILE 2
    
        // make an exception for tiles too large or small
        
    if ((width*shape3/255 < width/6) || (height*shape4/255 < height/6) || (width*shape3/255 > width*0.75) || (height*shape4/255 > height*0.75)) {
      print("Tile createCanvas exception at Tile 2 / ");
      if (palette2 <= 85) {
        print("palette 1 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(width/3, 0, width/3, height/3);
        fill(color1, color2, color3);
      } else if (palette2 >= 170) {
        print("palette 2 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(width/3, 0, width/3, height/3);
        fill(color4, color5, color6);
      } else
        print("palette 3 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(width/3, 0, width/3, height/3);
        fill(color7, color8, color9);
     
        
        // now that we've covered our bases, let's generate some tiles <3
    } else if (palette2 <= 85) {
      print("palette 1 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(width/3, 0, width*shape3/255, height*shape4/255);
      fill(color1, color2, color3);
    } else if (palette2 >= 170) {
      print("palette 2 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(width/3, 0, width*shape3/255, height*shape4/255);
      fill(color4, color5, color6);
    } else
      print("palette 3 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(width/3, 0, width*shape3/255, height*shape4/255);
      fill(color7, color8, color9);
      
      
      // c-c-c-combo breaker!!!
    if (modifier3 > 123) {
      rectMode(CENTER);
    } else
      rectMode(CORNER);
      
      
     // TILE 3
    
        // make an exception for tiles too large or small
        
    if ((width*shape5/255 < width/6) || (height*shape6/255 < height/6) || (width*shape5/255 > width*0.75) || (height*shape6/255 > height*0.75)) {
      print("Tile createCanvas exception at Tile 3 / ");
      if (palette3 <= 85) {
        print("palette 1 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(width/3*2, 0, width/3, height/3);
        fill(color1, color2, color3);
      } else if (palette3 >= 170) {
        print("palette 2 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(width/3*2, 0, width/3, height/3);
        fill(color4, color5, color6);
      } else
        print("palette 3 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(width/3*2, 0, width/3, height/3);
        fill(color7, color8, color9);
     
        
        // now that we've covered our bases, let's generate some tiles <3
    } else if (palette3 <= 85) {
      print("palette 1 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(width/3*2, 0, width*shape5/255, height*shape6/255);
      fill(color1, color2, color3);
    } else if (palette3 >= 170) {
      print("palette 2 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(width/3*2, 0, width*shape5/255, height*shape6/255);
      fill(color4, color5, color6);
    } else
      print("palette 3 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(width/3*2, 0, width*shape5/255, height*shape6/255);
      fill(color7, color8, color9);
      
      
        // c-c-c-combo breaker!!!
    if (modifier4 > 123) {
      rectMode(CENTER);
    } else
      rectMode(CORNER);
      
      
     // TILE 4
    
        // make an exception for tiles too large or small
        
    if ((width*shape7/255 < width/6) || (height*shape8/255 < height/6) || (width*shape7/255 > width*0.75) || (height*shape8/255 > height*0.75)) {
      print("Tile createCanvas exception at Tile 4 / ");
      if (palette4 <= 85) {
        print("palette 1 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(0, height/3, width/3, height/3);
        fill(color1, color2, color3);
      } else if (palette4 >= 170) {
        print("palette 2 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(0, height/3, width/3, height/3);
        fill(color4, color5, color6);
      } else
        print("palette 3 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(0, height/3, width/3, height/3);
        fill(color7, color8, color9);
     
        
        // now that we've covered our bases, let's generate some tiles <3
    } else if (palette4 <= 85) {
      print("palette 1 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(0, height/3, width*shape7/255, height*shape8/255);
      fill(color1, color2, color3);
    } else if (palette4 >= 170) {
      print("palette 2 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(0, height/3, width*shape7/255, height*shape8/255);
      fill(color4, color5, color6);
    } else
      print("palette 3 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(0, height/3, width*shape7/255, height*shape8/255);
      fill(color7, color8, color9);
      
      
      // c-c-c-combo breaker!!!
    if (modifier5 > 123) {
      rectMode(CENTER);
    } else
      rectMode(CORNER);
      
     // TILE 5
    
        // make an exception for tiles too large or small
        
    if ((width*shape9/255 < width/6) || (height*shape10/255 < height/6) || (width*shape9/255 > width*0.75) || (height*shape10/255 > height*0.75)) {
      print("Tile createCanvas exception at Tile 5 / ");
      if (palette5 <= 85) {
        print("palette 1 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(width/3, height/3, width/3, height/3);
        fill(color1, color2, color3);
      } else if (palette5 >= 170) {
        print("palette 2 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(width/3, height/3, width/3, height/3);
        fill(color4, color5, color6);
      } else
        print("palette 3 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(width/3, height/3, width/3, height/3);
        fill(color7, color8, color9);
     
        
        // now that we've covered our bases, let's generate some tiles <3
    } else if (palette5 <= 85) {
      print("palette 1 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(width/3, height/3, width*shape9/255, height*shape10/255);
      fill(color1, color2, color3);
    } else if (palette5 >= 170) {
      print("palette 2 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(width/3, height/3, width*shape9/255, height*shape10/255);
      fill(color4, color5, color6);
    } else
      print("palette 3 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(width/3, height/3, width*shape9/255, height*shape10/255);
      fill(color7, color8, color9);  
      
      
      // c-c-c-combo breaker!!!
    if (modifier6 > 123) {
      rectMode(CENTER);
    } else
      rectMode(CORNER);
    
    
     // TILE 6
    
        // make an exception for tiles too large or small
        
    if ((width*shape11/255 < width/6) || (height*shape12/255 < height/6) || (width*shape11/255 > width*0.75) || (height*shape12/255 > height*0.75)) {
      print("Tile createCanvas exception at Tile 6 / ");
      if (palette6 <= 85) {
        print("palette 1 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(width/3*2, height/3, width/3, height/3);
        fill(color1, color2, color3);
      } else if (palette6 >= 170) {
        print("palette 2 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(width/3*2, height/3, width/3, height/3);
        fill(color4, color5, color6);
      } else
        print("palette 3 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(width/3*2, height/3, width/3, height/3);
        fill(color7, color8, color9);
     
        
        // now that we've covered our bases, let's generate some tiles <3
    } else if (palette6 <= 85) {
      print("palette 1 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(width/3*2, height/3, width*shape11/255, height*shape12/255);
      fill(color1, color2, color3);
    } else if (palette6 >= 170) {
      print("palette 2 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(width/3*2, height/3, width*shape11/255, height*shape12/255);
      fill(color4, color5, color6);
    } else
      print("palette 3 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(width/3*2, height/3, width*shape11/255, height*shape12/255);
      fill(color7, color8, color9);  
      
      // c-c-c-combo breaker!!!
    if (modifier7 > 123) {
      rectMode(CENTER);
    } else
      rectMode(CORNER);
      
     // TILE 7
    
        // make an exception for tiles too large or small
        
    if ((width*shape13/255 < width/6) || (height*shape14/255 < height/6) || (width*shape13/255 > width*0.75) || (height*shape14/255 > height*0.75)) {
      print("Tile createCanvas exception at Tile 7 / ");
      if (palette7 <= 85) {
        print("palette 1 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(0, height/3*2, width/3, height/3);
        fill(color1, color2, color3);
      } else if (palette7 >= 170) {
        print("palette 2 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(0, height/3*2, width/3, height/3);
        fill(color4, color5, color6);
      } else
        print("palette 3 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(0, height/3*2, width/3, height/3);
        fill(color7, color8, color9);
     
        
        // now that we've covered our bases, let's generate some tiles <3
    } else if (palette7 <= 85) {
      print("palette 1 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(0, height/3*2, width*shape13/255, height*shape14/255);
      fill(color1, color2, color3);
    } else if (palette7 >= 170) {
      print("palette 2 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(0, height/3*2, width*shape13/255, height*shape14/255);
      fill(color4, color5, color6);
    } else
      print("palette 3 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(0, height/3*2, width*shape13/255, height*shape14/255);
      fill(color7, color8, color9);  
      
      // c-c-c-combo breaker!!!
    if (modifier8 > 123) {
      rectMode(CENTER);
    } else
      rectMode(CORNER);
    
     // TILE 8
    
        // make an exception for tiles too large or small
        
    if ((width*shape15/255 < width/6) || (height*shape16/255 < height/6) || (width*shape15/255 > width*0.75) || (height*shape16/255 > height*0.75)) {
      print("Tile createCanvas exception at Tile 8 / ");
      if (palette8 <= 85) {
        print("palette 1 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(width/3, height/3*2, width/3, height/3);
        fill(color1, color2, color3);
      } else if (palette8 >= 170) {
        print("palette 2 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(width/3, height/3*2, width/3, height/3);
        fill(color4, color5, color6);
      } else
        print("palette 3 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(width/3, height/3*2, width/3, height/3);
        fill(color7, color8, color9);
     
        
        // now that we've covered our bases, let's generate some tiles <3
    } else if (palette8 <= 85) {
      print("palette 1 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(width/3, height/3*2, width*shape15/255, height*shape16/255);
      fill(color1, color2, color3);
    } else if (palette8 >= 170) {
      print("palette 2 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(width/3, height/3*2, width*shape15/255, height*shape16/255);
      fill(color4, color5, color6);
    } else
      print("palette 3 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(width/3, height/3*2, width*shape15/255, height*shape16/255);
      fill(color7, color8, color9);  
      
      
      // c-c-c-combo breaker!!!
    if (modifier9 > 123) {
      rectMode(CENTER);
    } else
      rectMode(CORNER);
    
     // TILE 9
    
        // make an exception for tiles too large or small
        
    if ((width*shape17/255 < width/6) || (height*shape18/255 < height/6) || (width*shape17/255 > width*0.75) || (height*shape18/255 > height*0.75)) {
      print("Tile createCanvas exception at Tile 8 / ");
      if (palette9 <= 85) {
        print("palette 1 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(width/3*2, height/3*2, width/3, height/3);
        fill(color1, color2, color3);
      } else if (palette9 >= 170) {
        print("palette 2 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(width/3*2, height/3*2, width/3, height/3);
        fill(color4, color5, color6);
      } else
        print("palette 3 selected / ");
        stroke(0);
        strokeWeight(height/30);
        rect(width/3*2, height/3*2, width/3, height/3);
        fill(color7, color8, color9);
     
        
        // now that we've covered our bases, let's generate some tiles <3
    } else if (palette9 <= 85) {
      print("palette 1 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(width/3*2, height/3*2, width*shape17/255, height*shape18/255);
      fill(color1, color2, color3);
    } else if (palette9 >= 170) {
      print("palette 2 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(width/3*2, height/3*2, width*shape17/255, height*shape18/255);
      fill(color4, color5, color6);
    } else
      print("palette 3 selected / ");
      stroke(0);
      strokeWeight(height/30);
      rect(width/3*2, height/3*2, width*shape17/255, height*shape18/255);
      fill(color7, color8, color9);  
    
      
    if (shape13 == 255) {   
      stroke(0);
      ellipse(width/2, height/2, width/3, height/3);
      fill(color1, color2, color3);
    }
    // outline
    rectMode(CORNER);
    stroke(0);
    noFill();
    strokeWeight(height/15);
    rect(0, 0, width, height);
            
    print("you're valid and you matter, have a nice day!!");
}

var hash;

var prefix;

// PALETTES
var albers1;

var albers2;

var albers3;

var albers4;

var albers5;

var albers6;

var albers7;

var albers8;

var albers9;

var albers10;

var albers11;

var albers12;

var albers13;

var albers14;

var albers15;

var albers16;

var albers17;

var albers18;

var albers19;

var albers20;

var albers21;

var albers22;

var albers23;

var albers24;

var albers25;

function setup() {
    initializeFields();
    createCanvas(500, 500);
    background(color(0xe6, 0xe5, 0xe1));
}

function draw() {

    if (!SEED) {
        return
    }
    var block = SEED;

    // / BLOCK STRING GENERATED
    // hex parsing -----------------------------------
    // HEX 30 - 32 Square Wiggle Adjusters & Repeater Direction Switches
    // hex30
    var wiggleAdjustString = block.substring(58, 60);
    // hex31
    var repeaterDirectionString = block.substring(60, 62);
    // hex32
    var repeaterAgainDirectionString = block.substring(62, 64);
    // booleans to multiply repeatLength by -1 later on so they repeat in the opposite direction
    var repeatMinus = false;
    // booleans to multiply repeatLength by -1 later on so they repeat in the opposite direction
    var repeatAgainMinus = false;
    // stores wiggleAdjust to int
    var wiggleAdjust = unhex(wiggleAdjustString);
    var wiggleAdjustLength = 0;
    if (wiggleAdjust < 64) {
        // Gives different wiggle adust based on roughly which quarter of 255 the value falls into, moves the main square up and right or down and left later on
        wiggleAdjustLength = 0;
    }
    if (wiggleAdjust > 64 && wiggleAdjust < 128) {
        wiggleAdjustLength = 100;
    }
    if (wiggleAdjust > 128 && wiggleAdjust < 192) {
        wiggleAdjustLength = -100;
    }
    if (wiggleAdjust > 192) {
        wiggleAdjustLength = 0;
    }
    // stores the string to an int
    var repeaterDirection = unhex(repeaterDirectionString);
    if (repeaterDirection > 125) {
        // not quite 50/50 on whether to reverse repeat direction
        repeatMinus = true;
    }
    // stores the string to an int
    var repeaterAgainDirection = unhex(repeaterAgainDirectionString);
    if (repeaterAgainDirection < 125) {
        // not quite 50/50 on whether to reverse repeat direction
        repeatAgainMinus = true;
    }
    // HEX 4 Palette Select
    var paletteString = block.substring(6, 8);
    var palette_select = unhex(paletteString);
    // out of 255, divides by 10 and rounds to get 1 of 25 palettes
    palette_select = round(palette_select / 10);
    // HEX 5 Choose 1st Color
    // initializes clr1 value
    var clr1 = 000000;
    var colorString1 = block.substring(8, 10);
    var color1 = unhex(colorString1);
    color1 = color1 * 2;
    if (color1 > 4) {
        // subtracts 5 conditionally for nice 100 division to one of 5 array values
        color1 = color1 - 5;
    }
    color1 = color1 / 100;
    color1 = round(color1);
    if (color1 == 5) {
        color1 = color1 - 1;
    }
    switch(// switch function matches array values to hex value and stores as clr1
    palette_select) {
        case 1:
            clr1 = albers1[color1];
            break;
        case 2:
            clr1 = albers2[color1];
            break;
        case 3:
            clr1 = albers3[color1];
            break;
        case 4:
            clr1 = albers4[color1];
            break;
        case 5:
            clr1 = albers5[color1];
            break;
        case 6:
            clr1 = albers6[color1];
            break;
        case 7:
            clr1 = albers7[color1];
            break;
        case 8:
            clr1 = albers8[color1];
            break;
        case 9:
            clr1 = albers9[color1];
            break;
        case 10:
            clr1 = albers10[color1];
            break;
        case 11:
            clr1 = albers11[color1];
            break;
        case 12:
            clr1 = albers12[color1];
            break;
        case 13:
            clr1 = albers13[color1];
            break;
        case 14:
            clr1 = albers14[color1];
            break;
        case 15:
            clr1 = albers15[color1];
            break;
        case 16:
            clr1 = albers16[color1];
            break;
        case 17:
            clr1 = albers17[color1];
            break;
        case 18:
            clr1 = albers18[color1];
            break;
        case 19:
            clr1 = albers19[color1];
            break;
        case 20:
            clr1 = albers20[color1];
            break;
        case 21:
            clr1 = albers21[color1];
            break;
        case 22:
            clr1 = albers22[color1];
            break;
        case 23:
            clr1 = albers23[color1];
            break;
        case 24:
            clr1 = albers24[color1];
            break;
        case 25:
            clr1 = albers25[color1];
            break;
    }
    // HEX 6 Choose 2nd Color
    // initializes clr2 value
    var clr2 = 000000;
    var colorString2 = block.substring(10, 12);
    var color2 = unhex(colorString2);
    color2 = color2 * 2;
    if (color2 > 4) {
        // subtracts 5 conditionally for nice 100 division to one of 5 array values
        color2 = color2 - 5;
    }
    color2 = color2 / 100;
    color2 = round(color2);
    if (color2 == 5) {
        color2 = color2 - 1;
    }
    switch(// switch function matches array values to hex value and stores as clr2
    palette_select) {
        case 1:
            clr2 = albers1[color2];
            break;
        case 2:
            clr2 = albers2[color2];
            break;
        case 3:
            clr2 = albers3[color2];
            break;
        case 4:
            clr2 = albers4[color2];
            break;
        case 5:
            clr2 = albers5[color2];
            break;
        case 6:
            clr2 = albers6[color2];
            break;
        case 7:
            clr2 = albers7[color2];
            break;
        case 8:
            clr2 = albers8[color2];
            break;
        case 9:
            clr2 = albers9[color2];
            break;
        case 10:
            clr2 = albers10[color2];
            break;
        case 11:
            clr2 = albers11[color2];
            break;
        case 12:
            clr2 = albers12[color2];
            break;
        case 13:
            clr2 = albers13[color2];
            break;
        case 14:
            clr2 = albers14[color2];
            break;
        case 15:
            clr2 = albers15[color2];
            break;
        case 16:
            clr2 = albers16[color2];
            break;
        case 17:
            clr2 = albers17[color2];
            break;
        case 18:
            clr2 = albers18[color2];
            break;
        case 19:
            clr2 = albers19[color2];
            break;
        case 20:
            clr2 = albers20[color2];
            break;
        case 21:
            clr2 = albers21[color2];
            break;
        case 22:
            clr2 = albers22[color2];
            break;
        case 23:
            clr2 = albers23[color2];
            break;
        case 24:
            clr2 = albers24[color2];
            break;
        case 25:
            clr2 = albers25[color2];
            break;
    }
    // HEX 26 RARE BARS
    // hex26
    var middleBarString = block.substring(50, 52);
    // hex27
    var BarColorRollString = block.substring(52, 54);
    // hex28
    var BarColorString = block.substring(54, 56);
    // hex29
    var BarThickness = block.substring(56, 58);
    var middleCheck = false;
    var rareMiddle = unhex(middleBarString);
    var barWeight = unhex(BarThickness);
    if (barWeight < 15) {
        // too thin is no good
        barWeight = barWeight + 100;
    }
    var chooseBarColor = unhex(BarColorRollString);
    // initializes clr8 value
    var clr8 = 000000;
    var color8 = unhex(BarColorString);
    color8 = color8 * 2;
    if (color8 > 4) {
        // subtracts 5 conditionally for nice 100 division to one of 5 array values
        color8 = color8 - 5;
    }
    color8 = color8 / 100;
    color8 = round(color8);
    if (color8 == 5) {
        color8 = color8 - 1;
    }
    switch(// switch function matches array values to hex value and stores as clr8
    palette_select) {
        case 1:
            clr8 = albers1[color8];
            break;
        case 2:
            clr8 = albers2[color8];
            break;
        case 3:
            clr8 = albers3[color8];
            break;
        case 4:
            clr8 = albers4[color8];
            break;
        case 5:
            clr8 = albers5[color8];
            break;
        case 6:
            clr8 = albers6[color8];
            break;
        case 7:
            clr8 = albers7[color8];
            break;
        case 8:
            clr8 = albers8[color8];
            break;
        case 9:
            clr8 = albers9[color8];
            break;
        case 10:
            clr8 = albers10[color8];
            break;
        case 11:
            clr8 = albers11[color8];
            break;
        case 12:
            clr8 = albers12[color8];
            break;
        case 13:
            clr8 = albers13[color8];
            break;
        case 14:
            clr8 = albers14[color8];
            break;
        case 15:
            clr8 = albers15[color8];
            break;
        case 16:
            clr8 = albers16[color8];
            break;
        case 17:
            clr8 = albers17[color8];
            break;
        case 18:
            clr8 = albers18[color8];
            break;
        case 19:
            clr8 = albers19[color8];
            break;
        case 20:
            clr8 = albers20[color8];
            break;
        case 21:
            clr8 = albers21[color8];
            break;
        case 22:
            clr8 = albers22[color8];
            break;
        case 23:
            clr8 = albers23[color8];
            break;
        case 24:
            clr8 = albers24[color8];
            break;
        case 25:
            clr8 = albers25[color8];
            break;
    }
    if (rareMiddle == 7 || rareMiddle == 12 || rareMiddle == 3 || rareMiddle == 40) {
        middleCheck = true;
    }
    if (middleCheck == true) {
        if (chooseBarColor > 125) {
            stroke(clr8);
            strokeWeight(barWeight);
            line(0, 250, 500, 250);
            stroke(clr1);
            line(0, 250 - (barWeight / 2), 500, 250 - (barWeight / 2));
            stroke(clr2);
            line(0, 250 + (barWeight / 2), 500, 250 + (barWeight / 2));
        }
        if (chooseBarColor < 125) {
            stroke(clr1);
            strokeWeight(barWeight);
            line(0, 250, 500, 250);
            stroke(clr1);
            line(0, 250 - (barWeight / 2), 500, 250 - (barWeight / 2));
            stroke(clr1);
            line(0, 250 + (barWeight / 2), 500, 250 + (barWeight / 2));
        }
    }
    // HEX 1 CHOOSE POSITION
    var positionString = block.substring(0, 2);
    var position = unhex(positionString);
    position = position * 2;
    if (position > 4) {
        // subtracts 5 so that the full spectrum of 500px can be used
        position = position - 5;
    }
    // HEX 2 CHOOSE LENGTH
    var lengthString = block.substring(2, 4);
    var lengthVar = unhex(lengthString);
    if (lengthVar < 50) {
        lengthVar = lengthVar + 100;
    }
    // HEX 23 LINE LENGTH
    var lineLengthString = block.substring(44, 46);
    var lineLength = unhex(lineLengthString);
    // double it to use the whole space
    lineLength = lineLength * 2;
    if (lineLength < 50) {
        // tiny lines look weird
        lineLength = lineLength + 150;
    }
    // HEX 3 Center Position Wiggle
    var centerString = block.substring(4, 6);
    var centerVar = unhex(centerString);
    // wiggles from center by 1/10th the hex value
    centerVar = (centerVar / 10) + 250;
    // HEX 20 VERTICAL LINES OPTION SWITCH
    // hex20
    var verticalSwitchString = block.substring(38, 40);
    var verticalCheck = unhex(verticalSwitchString);
    var vertLines = false;
    if (verticalCheck > 126) {
        vertLines = true;
    }
    // HEX 21 HORIZONTAL LINES OPTION SWITCH
    // hex21
    var horizontalSwitchString = block.substring(40, 42);
    var horizontalCheck = unhex(horizontalSwitchString);
    var horzLines = false;
    if (horizontalCheck < 126) {
        horzLines = true;
    }
    // HEX 22 TIE BREAKER
    // hex 22
    var tieBreakerString = block.substring(42, 44);
    var tieBreak = unhex(tieBreakerString);
    if (horzLines == true && vertLines == true) {
        if (tieBreak > 126) {
            horzLines = false;
        }
        if (tieBreak <= 126) {
            vertLines = false;
        }
    }
    // HEX 7 - 12 LINE & LINE COLOR
    // hex7
    var lineCordString1 = block.substring(12, 14);
    // hex8
    var lineCordString2 = block.substring(14, 16);
    // hex9
    var lineCordString3 = block.substring(16, 18);
    // hex10
    var lineCordString4 = block.substring(18, 20);
    // hex11
    var lineStrokeString = block.substring(20, 22);
    // hex12
    var lineColorString = block.substring(22, 24);
    // initializes clr3 value
    var clr3 = color(0xFF, 0xFF, 0xFF);
    // String hashlineColorString = hash + lineColorString;
    // color3 is now some integer value 0-255
    var color3 = unhex(lineColorString);
    color3 = color3 * 2;
    if (color3 > 4) {
        // subtracts 5 conditionally for nice 100 division to one of 5 array values
        color3 = color3 - 5;
    }
    color3 = color3 / 100;
    color3 = round(color3);
    if (color3 == 5) {
        color3 = color3 - 1;
    }
    switch(// switch function matches array values to hex value and stores as clr2
    palette_select) {
        case 1:
            clr3 = albers1[color3];
            break;
        case 2:
            clr3 = albers2[color3];
            break;
        case 3:
            clr3 = albers3[color3];
            break;
        case 4:
            clr3 = albers4[color3];
            break;
        case 5:
            clr3 = albers5[color3];
            break;
        case 6:
            clr3 = albers6[color3];
            break;
        case 7:
            clr3 = albers7[color3];
            break;
        case 8:
            clr3 = albers8[color3];
            break;
        case 9:
            clr3 = albers9[color3];
            break;
        case 10:
            clr3 = albers10[color3];
            break;
        case 11:
            clr3 = albers11[color3];
            break;
        case 12:
            clr3 = albers12[color3];
            break;
        case 13:
            clr3 = albers13[color3];
            break;
        case 14:
            clr3 = albers14[color3];
            break;
        case 15:
            clr3 = albers15[color3];
            break;
        case 16:
            clr3 = albers16[color3];
            break;
        case 17:
            clr3 = albers17[color3];
            break;
        case 18:
            clr3 = albers18[color3];
            break;
        case 19:
            clr3 = albers19[color3];
            break;
        case 20:
            clr3 = albers20[color3];
            break;
        case 21:
            clr3 = albers21[color3];
            break;
        case 22:
            clr3 = albers22[color3];
            break;
        case 23:
            clr3 = albers23[color3];
            break;
        case 24:
            clr3 = albers24[color3];
            break;
        case 25:
            clr3 = albers25[color3];
            break;
    }
    var lineCord1 = unhex(lineCordString1);
    var lineCord2 = unhex(lineCordString2);
    var lineCord3 = unhex(lineCordString3);
    var lineCord4 = unhex(lineCordString4);
    var lineStroke = unhex(lineStrokeString);
    // multiply lineCord values by 2 so we use the full 500px space
    lineCord1 = lineCord1 * 2;
    lineCord2 = lineCord2 * 2;
    lineCord3 = lineCord3 * 2;
    lineCord4 = lineCord4 * 2;
    stroke(clr3);
    if (lineStroke < 4) {
        lineStroke = lineStroke + 10;
    }
    strokeWeight(int(lineStroke));
    strokeCap(SQUARE);
    if (vertLines == true) {
        // checks vertical lines boolean
        line(lineCord1, lineCord2, lineCord1, lineCord2 + lineLength);
    }
    if (horzLines == true) {
        // checks horizontal lines boolean
        line(lineCord1, lineCord2, lineCord1 + lineLength, lineCord2);
    }
    if (vertLines != true && horzLines != true) {
        // when both are false we use the other lineCords
        line(lineCord1, lineCord2, lineCord3, lineCord4);
    }
    // HEX 13 SQUARE
    // hex13
    var squarePosString = block.substring(24, 26);
    fill(clr1);
    noStroke();
    var SquarePos = unhex(squarePosString);
    SquarePos = 250 - SquarePos;
    if (SquarePos < 100) {
        SquarePos = (SquarePos + 50);
    }
    square(SquarePos + wiggleAdjustLength, SquarePos - wiggleAdjustLength, lengthVar);
    // HEX 18 & 19 SQUARE FIRST REPEAT & CLR6
    // hex 18
    var repeatFirstSquareString = block.substring(34, 36);
    // hex 19
    var repeatFirstSquareStringColor = block.substring(36, 38);
    // initializes clr6 value
    var clr6 = color(0xFF, 0xFF, 0xFF);
    // color6 is now some integer value 0-255
    var color6 = unhex(repeatFirstSquareStringColor);
    color6 = color6 * 2;
    if (color6 > 4) {
        // subtracts 5 conditionally for nice 100 division to one of 5 array values
        color6 = color6 - 5;
    }
    color6 = color6 / 100;
    color6 = round(color6);
    if (color6 == 5) {
        color6 = color6 - 1;
    }
    switch(// switch function matches array values to hex value and stores as clr6
    palette_select) {
        case 1:
            clr6 = albers1[color6];
            break;
        case 2:
            clr6 = albers2[color6];
            break;
        case 3:
            clr6 = albers3[color6];
            break;
        case 4:
            clr6 = albers4[color6];
            break;
        case 5:
            clr6 = albers5[color6];
            break;
        case 6:
            clr6 = albers6[color6];
            break;
        case 7:
            clr6 = albers7[color6];
            break;
        case 8:
            clr6 = albers8[color6];
            break;
        case 9:
            clr6 = albers9[color6];
            break;
        case 10:
            clr6 = albers10[color6];
            break;
        case 11:
            clr6 = albers11[color6];
            break;
        case 12:
            clr6 = albers12[color6];
            break;
        case 13:
            clr6 = albers13[color6];
            break;
        case 14:
            clr6 = albers14[color6];
            break;
        case 15:
            clr6 = albers15[color6];
            break;
        case 16:
            clr6 = albers16[color6];
            break;
        case 17:
            clr6 = albers17[color6];
            break;
        case 18:
            clr6 = albers18[color6];
            break;
        case 19:
            clr6 = albers19[color6];
            break;
        case 20:
            clr6 = albers20[color6];
            break;
        case 21:
            clr6 = albers21[color6];
            break;
        case 22:
            clr6 = albers22[color6];
            break;
        case 23:
            clr6 = albers23[color6];
            break;
        case 24:
            clr6 = albers24[color6];
            break;
        case 25:
            clr6 = albers25[color6];
            break;
    }
    var firstRepeat = unhex(repeatFirstSquareString);
    if (firstRepeat > 50) {
        fill(clr6);
        square(SquarePos + (lengthVar / 10) + wiggleAdjustLength, SquarePos + (lengthVar / 10) + (lengthVar / 20) - wiggleAdjustLength, (lengthVar - (lengthVar / 10) - (lengthVar / 10)));
    }
    // HEX 14 & 15 TRIBUTE REPEAT SQUARE
    // hex14
    var repeatSquareString = block.substring(26, 28);
    // hex15
    var repeatSquareColor = block.substring(28, 30);
    // initializes clr4 value
    var clr4 = color(0xFF, 0xFF, 0xFF);
    // color4 is now some integer value 0-255
    var color4 = unhex(repeatSquareColor);
    color4 = color4 * 2;
    if (color4 > 4) {
        // subtracts 5 conditionally for nice 100 division to one of 5 array values
        color4 = color4 - 5;
    }
    color4 = color4 / 100;
    color4 = round(color4);
    if (color4 == 5) {
        color4 = color4 - 1;
    }
    switch(// switch function matches array values to hex value and stores as clr4
    palette_select) {
        case 1:
            clr4 = albers1[color4];
            break;
        case 2:
            clr4 = albers2[color4];
            break;
        case 3:
            clr4 = albers3[color4];
            break;
        case 4:
            clr4 = albers4[color4];
            break;
        case 5:
            clr4 = albers5[color4];
            break;
        case 6:
            clr4 = albers6[color4];
            break;
        case 7:
            clr4 = albers7[color4];
            break;
        case 8:
            clr4 = albers8[color4];
            break;
        case 9:
            clr4 = albers9[color4];
            break;
        case 10:
            clr4 = albers10[color4];
            break;
        case 11:
            clr4 = albers11[color4];
            break;
        case 12:
            clr4 = albers12[color4];
            break;
        case 13:
            clr4 = albers13[color4];
            break;
        case 14:
            clr4 = albers14[color4];
            break;
        case 15:
            clr4 = albers15[color4];
            break;
        case 16:
            clr4 = albers16[color4];
            break;
        case 17:
            clr4 = albers17[color4];
            break;
        case 18:
            clr4 = albers18[color4];
            break;
        case 19:
            clr4 = albers19[color4];
            break;
        case 20:
            clr4 = albers20[color4];
            break;
        case 21:
            clr4 = albers21[color4];
            break;
        case 22:
            clr4 = albers22[color4];
            break;
        case 23:
            clr4 = albers23[color4];
            break;
        case 24:
            clr4 = albers24[color4];
            break;
        case 25:
            clr4 = albers25[color4];
            break;
    }
    var RepeatCount = unhex(repeatSquareString);
    fill(clr2);
    square(SquarePos + (lengthVar / 4) + wiggleAdjustLength, SquarePos + (lengthVar / 4) + (lengthVar / 8) - wiggleAdjustLength, lengthVar / 2);
    if (RepeatCount > 125) {
        // either or cointoss
        fill(clr4);
        square(SquarePos + (lengthVar / 4) + (lengthVar / 8) + wiggleAdjustLength, SquarePos + (lengthVar / 4) + (lengthVar / 8) + (lengthVar / 8) + (lengthVar / 16) - wiggleAdjustLength, lengthVar / 4);
    }
    // HEX 16 & 17 LINE REPEATER & REPEATER COLOR (CLR5) CHOOSER
    // hex16
    var repeatLineString = block.substring(30, 32);
    // hex17
    var repeatLineColor = block.substring(32, 34);
    // initializes clr5 value
    var clr5 = color(0xFF, 0xFF, 0xFF);
    // color5 is now some integer value 0-255
    var color5 = unhex(repeatSquareColor);
    color5 = color5 * 2;
    if (color5 > 4) {
        // subtracts 5 conditionally for nice 100 division to one of 5 array values
        color5 = color5 - 5;
    }
    color5 = color5 / 100;
    color5 = round(color5);
    if (color5 == 5) {
        color5 = color5 - 1;
    }
    switch(// switch function matches array values to hex value and stores as clr5
    palette_select) {
        case 1:
            clr5 = albers1[color5];
            break;
        case 2:
            clr5 = albers2[color5];
            break;
        case 3:
            clr5 = albers3[color5];
            break;
        case 4:
            clr5 = albers4[color5];
            break;
        case 5:
            clr5 = albers5[color5];
            break;
        case 6:
            clr5 = albers6[color5];
            break;
        case 7:
            clr5 = albers7[color5];
            break;
        case 8:
            clr5 = albers8[color5];
            break;
        case 9:
            clr5 = albers9[color5];
            break;
        case 10:
            clr5 = albers10[color5];
            break;
        case 11:
            clr5 = albers11[color5];
            break;
        case 12:
            clr5 = albers12[color5];
            break;
        case 13:
            clr5 = albers13[color5];
            break;
        case 14:
            clr5 = albers14[color5];
            break;
        case 15:
            clr5 = albers15[color5];
            break;
        case 16:
            clr5 = albers16[color5];
            break;
        case 17:
            clr5 = albers17[color5];
            break;
        case 18:
            clr5 = albers18[color5];
            break;
        case 19:
            clr5 = albers19[color5];
            break;
        case 20:
            clr5 = albers20[color5];
            break;
        case 21:
            clr5 = albers21[color5];
            break;
        case 22:
            clr5 = albers22[color5];
            break;
        case 23:
            clr5 = albers23[color5];
            break;
        case 24:
            clr5 = albers24[color5];
            break;
        case 25:
            clr5 = albers25[color5];
            break;
    }
    var repeaterCheck = unhex(repeatLineString);
    var lineRepeat = repeaterCheck / 2 + lineStroke;
    if (repeatMinus == true) {
        // reverses direction of lineRepeat if repeatMinus is true
        lineRepeat = (lineRepeat * (-1));
    }
    if (repeaterCheck < 65) {
        print("no repeat");
    }
    if (repeaterCheck > 64 && repeaterCheck < 128) {
        // repeaterCheck 0-64 = nothing, 64-128 = diagonal,
        stroke(clr5);
        if (vertLines == true) {
            // checks vertical lines boolean
            lineCord1 = lineCord1 + lineRepeat;
            lineCord2 = lineCord2 + lineRepeat;
            line(lineCord1, lineCord2, lineCord1, lineCord2 + lineLength);
        }
        if (horzLines == true) {
            // checks horizontal lines boolean
            lineCord1 = lineCord1 + lineRepeat;
            lineCord2 = lineCord2 + lineRepeat;
            line(lineCord1, lineCord2, lineCord1 + lineLength, lineCord2);
        }
        if (vertLines != true && horzLines != true) {
            // when both are false we use the other lineCords
            lineCord1 = lineCord1 + lineRepeat;
            lineCord2 = lineCord2 + lineRepeat;
            lineCord3 = lineCord3 + lineRepeat;
            lineCord4 = lineCord4 + lineRepeat;
            line(lineCord1, lineCord2, lineCord3, lineCord4);
        }
        print("line repeat diagonal");
    }
    if (repeaterCheck > 128 && repeaterCheck < 192) {
        // repeaterCheck 0-64 = nothing, 64-128 = diagonal, 128-192 = vertical
        stroke(clr5);
        if (vertLines == true) {
            // checks vertical lines boolean
            lineCord2 = lineCord2 + lineRepeat + lineLength;
            line(lineCord1, lineCord2, lineCord1, lineCord2 + lineLength);
        }
        if (horzLines == true) {
            // checks horizontal lines boolean
            lineCord2 = lineCord2 + lineRepeat;
            line(lineCord1, lineCord2, lineCord1 + lineLength, lineCord2);
        }
        if (vertLines != true && horzLines != true) {
            // when both are false we use the other lineCords
            lineCord2 = lineCord2 + lineRepeat;
            lineCord4 = lineCord4 + lineRepeat;
            line(lineCord1, lineCord2, lineCord3, lineCord4);
        }
        print("line repeat vertical");
    }
    if (repeaterCheck > 192) {
        // repeaterCheck 0-64 = nothing, 64-128 = diagonal, 128-192 = vertical, 192+ == horizontal
        stroke(clr5);
        if (vertLines == true) {
            // checks vertical lines boolean
            lineCord1 = lineCord1 + lineRepeat;
            line(lineCord1, lineCord2, lineCord1, lineCord2 + lineLength);
        }
        if (horzLines == true) {
            // checks horizontal lines boolean
            lineCord1 = lineCord1 + lineRepeat + lineLength;
            line(lineCord1, lineCord2, lineCord1 + lineLength, lineCord2);
        }
        if (vertLines != true && horzLines != true) {
            // when both are false we use the other lineCords
            lineCord1 = lineCord1 + lineRepeat;
            lineCord3 = lineCord3 + lineRepeat;
            line(lineCord1, lineCord2, lineCord3, lineCord4);
        }
        print("line repeat horizontal");
    }
    // HEX 24 & 25 LINE REPEATER & REPEATER COLOR (CLR7) CHOOSER
    // hex24
    var repeatAgainLineString = block.substring(46, 48);
    // hex25
    var repeatAgainLineColor = block.substring(48, 50);
    // initializes clr7 value
    var clr7 = color(0xFF, 0xFF, 0xFF);
    // color7 is now some integer value 0-255
    var color7 = unhex(repeatSquareColor);
    color7 = color7 * 2;
    if (color7 > 4) {
        // subtracts 5 conditionally for nice 100 division to one of 5 array values
        color7 = color7 - 5;
    }
    color7 = color7 / 100;
    color7 = round(color7);
    if (color7 == 5) {
        color7 = color7 - 1;
    }
    switch(// switch function matches array values to hex value and stores as clr7
    palette_select) {
        case 1:
            clr7 = albers1[color7];
            break;
        case 2:
            clr7 = albers2[color7];
            break;
        case 3:
            clr7 = albers3[color7];
            break;
        case 4:
            clr7 = albers4[color7];
            break;
        case 5:
            clr7 = albers5[color7];
            break;
        case 6:
            clr7 = albers6[color7];
            break;
        case 7:
            clr7 = albers7[color7];
            break;
        case 8:
            clr7 = albers8[color7];
            break;
        case 9:
            clr7 = albers9[color7];
            break;
        case 10:
            clr7 = albers10[color7];
            break;
        case 11:
            clr7 = albers11[color7];
            break;
        case 12:
            clr7 = albers12[color7];
            break;
        case 13:
            clr7 = albers13[color7];
            break;
        case 14:
            clr7 = albers14[color7];
            break;
        case 15:
            clr7 = albers15[color7];
            break;
        case 16:
            clr7 = albers16[color7];
            break;
        case 17:
            clr7 = albers17[color7];
            break;
        case 18:
            clr7 = albers18[color7];
            break;
        case 19:
            clr7 = albers19[color7];
            break;
        case 20:
            clr7 = albers20[color7];
            break;
        case 21:
            clr7 = albers21[color7];
            break;
        case 22:
            clr7 = albers22[color7];
            break;
        case 23:
            clr7 = albers23[color7];
            break;
        case 24:
            clr7 = albers24[color7];
            break;
        case 25:
            clr7 = albers25[color7];
            break;
    }
    var repeaterAgainCheck = unhex(repeatAgainLineString);
    var lineAgainRepeat = lineRepeat;
    if (repeatAgainMinus == true) {
        // reverses direction of lineRepeat if repeatMinus is true
        lineRepeat = (lineRepeat * (-1));
    }
    if (repeaterAgainCheck < 65) {
        print("no repeat again");
    }
    if (repeaterAgainCheck > 64 && repeaterAgainCheck < 128) {
        // repeaterAgainCheck 0-64 = nothing, 64-128 = diagonal,
        stroke(clr7);
        if (vertLines == true) {
            // checks vertical lines boolean
            line(lineCord1 + lineAgainRepeat, lineCord2 + lineAgainRepeat, lineCord1 + lineAgainRepeat, lineCord2 + lineLength + lineAgainRepeat);
        }
        if (horzLines == true) {
            // checks horizontal lines boolean
            line(lineCord1 + lineAgainRepeat, lineCord2 + lineAgainRepeat, lineCord1 + lineLength + lineAgainRepeat, lineCord2 + lineAgainRepeat);
        }
        if (vertLines != true && horzLines != true) {
            // when both are false we use the other lineCords
            line(lineCord1 + lineAgainRepeat, lineCord2 + lineAgainRepeat, lineCord3 + lineAgainRepeat, lineCord4 + lineAgainRepeat);
        }
        print("line repeat again diagonal");
    }
    if (repeaterAgainCheck > 128 && repeaterAgainCheck < 192) {
        // repeaterCheck 0-64 = nothing, 64-128 = diagonal, 128-192 = vertical
        stroke(clr7);
        if (vertLines == true) {
            // checks vertical lines boolean
            lineAgainRepeat = lineAgainRepeat + lineLength;
            line(lineCord1, lineCord2 + lineAgainRepeat, lineCord1, lineCord2 + lineLength + lineAgainRepeat);
        }
        if (horzLines == true) {
            // checks horizontal lines boolean
            line(lineCord1, lineCord2 + lineAgainRepeat, lineCord1 + lineLength, lineCord2 + lineAgainRepeat);
        }
        if (vertLines != true && horzLines != true) {
            // when both are false we use the other lineCords
            line(lineCord1, lineCord2 + lineAgainRepeat, lineCord3, lineCord4 + lineAgainRepeat);
        }
        print("line repeat again vertical");
    }
    if (repeaterAgainCheck > 192) {
        // repeaterCheck 0-64 = nothing, 64-128 = diagonal, 128-192 = vertical, 192+ == horizontal
        stroke(clr7);
        if (vertLines == true) {
            // checks vertical lines boolean
            line(lineCord1 + lineAgainRepeat, lineCord2, lineCord1 + lineAgainRepeat, lineCord2 + lineLength);
        }
        if (horzLines == true) {
            // checks horizontal lines boolean
            line(lineCord1 + lineAgainRepeat + lineLength, lineCord2, lineCord1 + lineLength + lineAgainRepeat + lineLength, lineCord2);
        }
        if (vertLines != true && horzLines != true) {
            // when both are false we use the other lineCords
            line(lineCord1 + lineAgainRepeat, lineCord2, lineCord3 + lineAgainRepeat, lineCord4);
        }
        print("line repeat again horizontal");
    }
    // DEBUGGING PRINTLN HERE
    // println("position ",position," palette_select",palette_select," color 1 = ",clr1);
    print("random block = ", block, " length", block.length);
    print("palette_select = ", palette_select, " should be 0-25");
    print("lineStroke = ", lineStroke);
    print("vertical line:", vertLines, " horizontal line:", horzLines);
    print("Repeater length:", lineRepeat);
    // println("firstRepeat =",firstRepeat);
    // println("clr3 = ",clr3, "color3  = ",color3, " lineColorString = ",lineColorString);
    // println("linecord1 = ", lineCord1,"linecord2 = ", lineCord2,"linecord3 = ", lineCord3,"linecord1 = ", lineCord4);
    // println("squarePos = ", SquarePos);
    print("wiggleAdjustLength", wiggleAdjustLength);
    // println("Middle Check", middleCheck);
    // END DEBUG
    // save function for testing
    /*
save(middleCheck+" albertron"+block+".png");
background(color(0xe6, 0xe5, 0xe1));
*/
    // turn this off to batch save
    noLoop();
}

function initializeFields() {
    hash = "0x";
    prefix = "0000";
    albers1 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0x80, 0x46, 0x30), color(0x57, 0x57, 0x59), color(0x00, 0x7f, 0x81), color(0x00, 0x97, 0x76) ];
    albers2 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0xd1, 0xaf, 0x4e), color(0xd2, 0xb6, 0x3b), color(0xe3, 0xb7, 0x5e), color(0xd6, 0xc6, 0x2b) ];
    albers3 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0x4c, 0x58, 0x28), color(0x7f, 0x7f, 0x81), color(0x6a, 0x69, 0x6e), color(0x5a, 0x58, 0x5b) ];
    albers4 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0xfb, 0xb1, 0x00), color(0xf2, 0xb1, 0x4b), color(0xee, 0x98, 0x4b), color(0xef, 0x73, 0x0f) ];
    albers5 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0xdc, 0x42, 0x38), color(0xd3, 0x55, 0x46), color(0xd8, 0x53, 0x4a), color(0xe7, 0x3e, 0x2b) ];
    albers6 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0x01, 0x4d, 0x31), color(0x00, 0x7f, 0x88), color(0xa1, 0xa1, 0xa1), color(0xd6, 0xb7, 0x5a) ];
    albers7 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0x01, 0x54, 0x64), color(0x50, 0x56, 0x66), color(0x50, 0x56, 0x66), color(0x7d, 0x45, 0x34) ];
    albers8 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0x7d, 0x90, 0x34), color(0x8a, 0x8f, 0x92), color(0x8a, 0x8f, 0x92), color(0x7d, 0x90, 0x34) ];
    albers9 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0x5c, 0x5b, 0x60), color(0x3e, 0x5f, 0x4a), color(0x00, 0x72, 0x3e), color(0x00, 0x73, 0x6e) ];
    albers10 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0xea, 0xa7, 0x00), color(0xe1, 0xa8, 0x13), color(0xe1, 0xc1, 0x4a), color(0xe8, 0xb4, 0x00) ];
    albers11 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0xb9, 0x61, 0x21), color(0xbf, 0x6c, 0x1e), color(0xf1, 0x89, 0x04), color(0xf0, 0x72, 0x0e) ];
    albers12 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0x00, 0x6e, 0x65), color(0x00, 0x51, 0x62), color(0x01, 0x50, 0x79), color(0x01, 0x50, 0x79) ];
    albers13 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0x93, 0x20, 0x4b), color(0x48, 0x16, 0x0f), color(0x2d, 0x2e, 0x30), color(0x93, 0x20, 0x4b) ];
    albers14 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0x6c, 0xbc, 0xaf), color(0x40, 0x75, 0x87), color(0x29, 0x58, 0xb0), color(0x6c, 0xbc, 0xaf) ];
    albers15 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0x98, 0x1d, 0x15), color(0x38, 0x34, 0x33), color(0x17, 0x37, 0x74), color(0x98, 0x1d, 0x15) ];
    albers16 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0x64, 0x63, 0x5e), color(0x9c, 0x5b, 0x25), color(0xb9, 0x61, 0x22), color(0xc8, 0x66, 0x25) ];
    albers17 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0x26, 0x58, 0x9f), color(0x53, 0x55, 0x54), color(0x74, 0x48, 0x19), color(0xac, 0x77, 0x29) ];
    albers18 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0xed, 0xd8, 0x95), color(0xed, 0xe5, 0xda), color(0xf8, 0xf7, 0xf3), color(0xed, 0xd8, 0x95) ];
    albers19 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0x52, 0x14, 0x09), color(0x19, 0x19, 0x17), color(0x01, 0x01, 0x01), color(0x52, 0x14, 0x09) ];
    albers20 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0xcf, 0x93, 0x33), color(0xc0, 0x61, 0x27), color(0xc0, 0x49, 0x21), color(0xcf, 0x93, 0x33) ];
    albers21 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0xc7, 0xc7, 0xc7), color(0x21, 0x45, 0x9d), color(0xf8, 0xf9, 0xf4), color(0x79, 0xac, 0xe5) ];
    albers22 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0x00, 0x55, 0x7e), color(0x7f, 0x28, 0x90), color(0xd1, 0x16, 0x31), color(0x00, 0x55, 0x7e) ];
    albers23 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0x00, 0x5e, 0x26), color(0x9e, 0x9e, 0x9e), color(0x42, 0xbb, 0xea), color(0xef, 0x8f, 0x55) ];
    albers24 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0x77, 0x70, 0x91), color(0x92, 0x62, 0x00), color(0xe5, 0x40, 0x3a), color(0xe3, 0x35, 0x03) ];
    albers25 = [ // all palletes sourced from Josef Albers
    color(0xe6, 0xe5, 0xe1), color(0x6a, 0x95, 0x9b), color(0xbb, 0x4e, 0x0b), color(0x49, 0x28, 0x3d), color(0xff, 0xd8, 0x25) ];
}


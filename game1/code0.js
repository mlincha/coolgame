gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDPlayerObjects1= [];
gdjs.MainCode.GDPlayerObjects2= [];
gdjs.MainCode.GDGoldCoinObjects1= [];
gdjs.MainCode.GDGoldCoinObjects2= [];
gdjs.MainCode.GDNewTiledSpriteObjects1= [];
gdjs.MainCode.GDNewTiledSpriteObjects2= [];
gdjs.MainCode.GDBoundaryObjects1= [];
gdjs.MainCode.GDBoundaryObjects2= [];
gdjs.MainCode.GDFireObjects1= [];
gdjs.MainCode.GDFireObjects2= [];
gdjs.MainCode.GDPlatform1Objects1= [];
gdjs.MainCode.GDPlatform1Objects2= [];
gdjs.MainCode.GDDoorObjects1= [];
gdjs.MainCode.GDDoorObjects2= [];
gdjs.MainCode.GDLadderObjects1= [];
gdjs.MainCode.GDLadderObjects2= [];
gdjs.MainCode.GDUI_9595ScoreObjects1= [];
gdjs.MainCode.GDUI_9595ScoreObjects2= [];
gdjs.MainCode.GDPlatform3Objects1= [];
gdjs.MainCode.GDPlatform3Objects2= [];
gdjs.MainCode.GDPlatform2Objects1= [];
gdjs.MainCode.GDPlatform2Objects2= [];
gdjs.MainCode.GDFlatHeartBarObjects1= [];
gdjs.MainCode.GDFlatHeartBarObjects2= [];
gdjs.MainCode.GDGoRightObjects1= [];
gdjs.MainCode.GDGoRightObjects2= [];
gdjs.MainCode.GDGoLeftObjects1= [];
gdjs.MainCode.GDGoLeftObjects2= [];
gdjs.MainCode.GDHearth3PlusOneObjects1= [];
gdjs.MainCode.GDHearth3PlusOneObjects2= [];


gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDGoldCoinObjects1Objects = Hashtable.newFrom({"GoldCoin": gdjs.MainCode.GDGoldCoinObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDFireObjects1Objects = Hashtable.newFrom({"Fire": gdjs.MainCode.GDFireObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBoundaryObjects1Objects = Hashtable.newFrom({"Boundary": gdjs.MainCode.GDBoundaryObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.MainCode.GDDoorObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs.MainCode.GDGoLeftObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlatform2Objects1Objects = Hashtable.newFrom({"Platform2": gdjs.MainCode.GDPlatform2Objects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.MainCode.GDGoRightObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlatform2Objects1Objects = Hashtable.newFrom({"Platform2": gdjs.MainCode.GDPlatform2Objects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDHearth3PlusOneObjects1Objects = Hashtable.newFrom({"Hearth3PlusOne": gdjs.MainCode.GDHearth3PlusOneObjects1});
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs.MainCode.GDGoLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs.MainCode.GDGoRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MainCode.GDPlayerObjects1.length !== 0 ? gdjs.MainCode.GDPlayerObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.MainCode.GDGoRightObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDGoRightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainCode.GDGoLeftObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDGoLeftObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Boundary"), gdjs.MainCode.GDBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{gdjs.evtTools.camera.clampCamera(runtimeScene, (( gdjs.MainCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDPlayerObjects1[0].getPointX("")) - 1000, (( gdjs.MainCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDPlayerObjects1[0].getPointY("")) - 1000, (( gdjs.MainCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDPlayerObjects1[0].getPointX("")) + 1000, (( gdjs.MainCode.GDBoundaryObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDBoundaryObjects1[0].getY()), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoldCoin"), gdjs.MainCode.GDGoldCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayerObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDGoldCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDGoldCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("UI_Score"), gdjs.MainCode.GDUI_9595ScoreObjects1);
{for(var i = 0, len = gdjs.MainCode.GDGoldCoinObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDGoldCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.MainCode.GDUI_9595ScoreObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDUI_9595ScoreObjects1[i].getBehavior("Text").setText("Score: " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fire"), gdjs.MainCode.GDFireObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayerObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDFireObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13937644);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.MainCode.GDFlatHeartBarObjects1);
{for(var i = 0, len = gdjs.MainCode.GDFlatHeartBarObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFlatHeartBarObjects1[i].SetValue(gdjs.MainCode.GDFlatHeartBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boundary"), gdjs.MainCode.GDBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayerObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBoundaryObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.MainCode.GDFlatHeartBarObjects1);
/* Reuse gdjs.MainCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].setPosition(440,440);
}
}{for(var i = 0, len = gdjs.MainCode.GDFlatHeartBarObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFlatHeartBarObjects1[i].SetValue(gdjs.MainCode.GDFlatHeartBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.MainCode.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayerObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game win", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs.MainCode.GDGoLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platform2"), gdjs.MainCode.GDPlatform2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDGoLeftObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlatform2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDPlatform2Objects1 */
{for(var i = 0, len = gdjs.MainCode.GDPlatform2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlatform2Objects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.MainCode.GDPlatform2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlatform2Objects1[i].addForce(-(150), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs.MainCode.GDGoRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platform2"), gdjs.MainCode.GDPlatform2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDGoRightObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlatform2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDPlatform2Objects1 */
{for(var i = 0, len = gdjs.MainCode.GDPlatform2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlatform2Objects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.MainCode.GDPlatform2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlatform2Objects1[i].addForce(150, 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.MainCode.GDFlatHeartBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDFlatHeartBarObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDFlatHeartBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDFlatHeartBarObjects1[k] = gdjs.MainCode.GDFlatHeartBarObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDFlatHeartBarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game over", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hearth3PlusOne"), gdjs.MainCode.GDHearth3PlusOneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDPlayerObjects1Objects, gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDHearth3PlusOneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13942124);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.MainCode.GDFlatHeartBarObjects1);
/* Reuse gdjs.MainCode.GDHearth3PlusOneObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDHearth3PlusOneObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDHearth3PlusOneObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MainCode.GDFlatHeartBarObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDFlatHeartBarObjects1[i].SetValue(gdjs.MainCode.GDFlatHeartBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDPlayerObjects1.length = 0;
gdjs.MainCode.GDPlayerObjects2.length = 0;
gdjs.MainCode.GDGoldCoinObjects1.length = 0;
gdjs.MainCode.GDGoldCoinObjects2.length = 0;
gdjs.MainCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MainCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MainCode.GDBoundaryObjects1.length = 0;
gdjs.MainCode.GDBoundaryObjects2.length = 0;
gdjs.MainCode.GDFireObjects1.length = 0;
gdjs.MainCode.GDFireObjects2.length = 0;
gdjs.MainCode.GDPlatform1Objects1.length = 0;
gdjs.MainCode.GDPlatform1Objects2.length = 0;
gdjs.MainCode.GDDoorObjects1.length = 0;
gdjs.MainCode.GDDoorObjects2.length = 0;
gdjs.MainCode.GDLadderObjects1.length = 0;
gdjs.MainCode.GDLadderObjects2.length = 0;
gdjs.MainCode.GDUI_9595ScoreObjects1.length = 0;
gdjs.MainCode.GDUI_9595ScoreObjects2.length = 0;
gdjs.MainCode.GDPlatform3Objects1.length = 0;
gdjs.MainCode.GDPlatform3Objects2.length = 0;
gdjs.MainCode.GDPlatform2Objects1.length = 0;
gdjs.MainCode.GDPlatform2Objects2.length = 0;
gdjs.MainCode.GDFlatHeartBarObjects1.length = 0;
gdjs.MainCode.GDFlatHeartBarObjects2.length = 0;
gdjs.MainCode.GDGoRightObjects1.length = 0;
gdjs.MainCode.GDGoRightObjects2.length = 0;
gdjs.MainCode.GDGoLeftObjects1.length = 0;
gdjs.MainCode.GDGoLeftObjects2.length = 0;
gdjs.MainCode.GDHearth3PlusOneObjects1.length = 0;
gdjs.MainCode.GDHearth3PlusOneObjects2.length = 0;

gdjs.MainCode.eventsList0(runtimeScene);
gdjs.MainCode.GDPlayerObjects1.length = 0;
gdjs.MainCode.GDPlayerObjects2.length = 0;
gdjs.MainCode.GDGoldCoinObjects1.length = 0;
gdjs.MainCode.GDGoldCoinObjects2.length = 0;
gdjs.MainCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MainCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MainCode.GDBoundaryObjects1.length = 0;
gdjs.MainCode.GDBoundaryObjects2.length = 0;
gdjs.MainCode.GDFireObjects1.length = 0;
gdjs.MainCode.GDFireObjects2.length = 0;
gdjs.MainCode.GDPlatform1Objects1.length = 0;
gdjs.MainCode.GDPlatform1Objects2.length = 0;
gdjs.MainCode.GDDoorObjects1.length = 0;
gdjs.MainCode.GDDoorObjects2.length = 0;
gdjs.MainCode.GDLadderObjects1.length = 0;
gdjs.MainCode.GDLadderObjects2.length = 0;
gdjs.MainCode.GDUI_9595ScoreObjects1.length = 0;
gdjs.MainCode.GDUI_9595ScoreObjects2.length = 0;
gdjs.MainCode.GDPlatform3Objects1.length = 0;
gdjs.MainCode.GDPlatform3Objects2.length = 0;
gdjs.MainCode.GDPlatform2Objects1.length = 0;
gdjs.MainCode.GDPlatform2Objects2.length = 0;
gdjs.MainCode.GDFlatHeartBarObjects1.length = 0;
gdjs.MainCode.GDFlatHeartBarObjects2.length = 0;
gdjs.MainCode.GDGoRightObjects1.length = 0;
gdjs.MainCode.GDGoRightObjects2.length = 0;
gdjs.MainCode.GDGoLeftObjects1.length = 0;
gdjs.MainCode.GDGoLeftObjects2.length = 0;
gdjs.MainCode.GDHearth3PlusOneObjects1.length = 0;
gdjs.MainCode.GDHearth3PlusOneObjects2.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;

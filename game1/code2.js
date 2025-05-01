gdjs.Game_32overCode = {};
gdjs.Game_32overCode.localVariables = [];
gdjs.Game_32overCode.GDNewTiledSpriteObjects1= [];
gdjs.Game_32overCode.GDNewTiledSpriteObjects2= [];
gdjs.Game_32overCode.GDRetryObjects1= [];
gdjs.Game_32overCode.GDRetryObjects2= [];
gdjs.Game_32overCode.GDMenuObjects1= [];
gdjs.Game_32overCode.GDMenuObjects2= [];
gdjs.Game_32overCode.GDNewTextObjects1= [];
gdjs.Game_32overCode.GDNewTextObjects2= [];


gdjs.Game_32overCode.mapOfGDgdjs_9546Game_959532overCode_9546GDRetryObjects1Objects = Hashtable.newFrom({"Retry": gdjs.Game_32overCode.GDRetryObjects1});
gdjs.Game_32overCode.mapOfGDgdjs_9546Game_959532overCode_9546GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.Game_32overCode.GDMenuObjects1});
gdjs.Game_32overCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.Game_32overCode.GDRetryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32overCode.mapOfGDgdjs_9546Game_959532overCode_9546GDRetryObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.Game_32overCode.GDMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32overCode.mapOfGDgdjs_9546Game_959532overCode_9546GDMenuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


};

gdjs.Game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32overCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Game_32overCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Game_32overCode.GDRetryObjects1.length = 0;
gdjs.Game_32overCode.GDRetryObjects2.length = 0;
gdjs.Game_32overCode.GDMenuObjects1.length = 0;
gdjs.Game_32overCode.GDMenuObjects2.length = 0;
gdjs.Game_32overCode.GDNewTextObjects1.length = 0;
gdjs.Game_32overCode.GDNewTextObjects2.length = 0;

gdjs.Game_32overCode.eventsList0(runtimeScene);
gdjs.Game_32overCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Game_32overCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Game_32overCode.GDRetryObjects1.length = 0;
gdjs.Game_32overCode.GDRetryObjects2.length = 0;
gdjs.Game_32overCode.GDMenuObjects1.length = 0;
gdjs.Game_32overCode.GDMenuObjects2.length = 0;
gdjs.Game_32overCode.GDNewTextObjects1.length = 0;
gdjs.Game_32overCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['Game_32overCode'] = gdjs.Game_32overCode;

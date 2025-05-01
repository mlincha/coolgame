gdjs.Game_32winCode = {};
gdjs.Game_32winCode.localVariables = [];
gdjs.Game_32winCode.GDNewTiledSpriteObjects1= [];
gdjs.Game_32winCode.GDNewTiledSpriteObjects2= [];
gdjs.Game_32winCode.GDMenuObjects1= [];
gdjs.Game_32winCode.GDMenuObjects2= [];
gdjs.Game_32winCode.GDNewTextObjects1= [];
gdjs.Game_32winCode.GDNewTextObjects2= [];


gdjs.Game_32winCode.mapOfGDgdjs_9546Game_959532winCode_9546GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.Game_32winCode.GDMenuObjects1});
gdjs.Game_32winCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.Game_32winCode.GDMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32winCode.mapOfGDgdjs_9546Game_959532winCode_9546GDMenuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


};

gdjs.Game_32winCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32winCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Game_32winCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Game_32winCode.GDMenuObjects1.length = 0;
gdjs.Game_32winCode.GDMenuObjects2.length = 0;
gdjs.Game_32winCode.GDNewTextObjects1.length = 0;
gdjs.Game_32winCode.GDNewTextObjects2.length = 0;

gdjs.Game_32winCode.eventsList0(runtimeScene);
gdjs.Game_32winCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Game_32winCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Game_32winCode.GDMenuObjects1.length = 0;
gdjs.Game_32winCode.GDMenuObjects2.length = 0;
gdjs.Game_32winCode.GDNewTextObjects1.length = 0;
gdjs.Game_32winCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['Game_32winCode'] = gdjs.Game_32winCode;

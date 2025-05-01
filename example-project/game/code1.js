gdjs.StartCode = {};
gdjs.StartCode.localVariables = [];
gdjs.StartCode.GDNewTiledSpriteObjects1= [];
gdjs.StartCode.GDNewTiledSpriteObjects2= [];
gdjs.StartCode.GDPlayObjects1= [];
gdjs.StartCode.GDPlayObjects2= [];
gdjs.StartCode.GDNewTexObjects1= [];
gdjs.StartCode.GDNewTexObjects2= [];
gdjs.StartCode.GDHelpObjects1= [];
gdjs.StartCode.GDHelpObjects2= [];
gdjs.StartCode.GDDefaultPanel15Objects1= [];
gdjs.StartCode.GDDefaultPanel15Objects2= [];
gdjs.StartCode.GDNewTextObjects1= [];
gdjs.StartCode.GDNewTextObjects2= [];
gdjs.StartCode.GDNewText2Objects1= [];
gdjs.StartCode.GDNewText2Objects2= [];
gdjs.StartCode.GDNewText3Objects1= [];
gdjs.StartCode.GDNewText3Objects2= [];
gdjs.StartCode.GDLargeExitButtonObjects1= [];
gdjs.StartCode.GDLargeExitButtonObjects2= [];


gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.StartCode.GDPlayObjects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDHelpObjects1Objects = Hashtable.newFrom({"Help": gdjs.StartCode.GDHelpObjects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDLargeExitButtonObjects1Objects = Hashtable.newFrom({"LargeExitButton": gdjs.StartCode.GDLargeExitButtonObjects1});
gdjs.StartCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.StartCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Help"), gdjs.StartCode.GDHelpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDHelpObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "help");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LargeExitButton"), gdjs.StartCode.GDLargeExitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDLargeExitButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "help");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "help");
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.StartCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.StartCode.GDPlayObjects1.length = 0;
gdjs.StartCode.GDPlayObjects2.length = 0;
gdjs.StartCode.GDNewTexObjects1.length = 0;
gdjs.StartCode.GDNewTexObjects2.length = 0;
gdjs.StartCode.GDHelpObjects1.length = 0;
gdjs.StartCode.GDHelpObjects2.length = 0;
gdjs.StartCode.GDDefaultPanel15Objects1.length = 0;
gdjs.StartCode.GDDefaultPanel15Objects2.length = 0;
gdjs.StartCode.GDNewTextObjects1.length = 0;
gdjs.StartCode.GDNewTextObjects2.length = 0;
gdjs.StartCode.GDNewText2Objects1.length = 0;
gdjs.StartCode.GDNewText2Objects2.length = 0;
gdjs.StartCode.GDNewText3Objects1.length = 0;
gdjs.StartCode.GDNewText3Objects2.length = 0;
gdjs.StartCode.GDLargeExitButtonObjects1.length = 0;
gdjs.StartCode.GDLargeExitButtonObjects2.length = 0;

gdjs.StartCode.eventsList0(runtimeScene);
gdjs.StartCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.StartCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.StartCode.GDPlayObjects1.length = 0;
gdjs.StartCode.GDPlayObjects2.length = 0;
gdjs.StartCode.GDNewTexObjects1.length = 0;
gdjs.StartCode.GDNewTexObjects2.length = 0;
gdjs.StartCode.GDHelpObjects1.length = 0;
gdjs.StartCode.GDHelpObjects2.length = 0;
gdjs.StartCode.GDDefaultPanel15Objects1.length = 0;
gdjs.StartCode.GDDefaultPanel15Objects2.length = 0;
gdjs.StartCode.GDNewTextObjects1.length = 0;
gdjs.StartCode.GDNewTextObjects2.length = 0;
gdjs.StartCode.GDNewText2Objects1.length = 0;
gdjs.StartCode.GDNewText2Objects2.length = 0;
gdjs.StartCode.GDNewText3Objects1.length = 0;
gdjs.StartCode.GDNewText3Objects2.length = 0;
gdjs.StartCode.GDLargeExitButtonObjects1.length = 0;
gdjs.StartCode.GDLargeExitButtonObjects2.length = 0;


return;

}

gdjs['StartCode'] = gdjs.StartCode;

var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1284 = root || request.c( 'UnityEngine.JointSpring' )
  var i1285 = data
  i1284.spring = i1285[0]
  i1284.damper = i1285[1]
  i1284.targetPosition = i1285[2]
  return i1284
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1286 = root || request.c( 'UnityEngine.JointMotor' )
  var i1287 = data
  i1286.m_TargetVelocity = i1287[0]
  i1286.m_Force = i1287[1]
  i1286.m_FreeSpin = i1287[2]
  return i1286
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1288 = root || request.c( 'UnityEngine.JointLimits' )
  var i1289 = data
  i1288.m_Min = i1289[0]
  i1288.m_Max = i1289[1]
  i1288.m_Bounciness = i1289[2]
  i1288.m_BounceMinVelocity = i1289[3]
  i1288.m_ContactDistance = i1289[4]
  i1288.minBounce = i1289[5]
  i1288.maxBounce = i1289[6]
  return i1288
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.JointDrive' )
  var i1291 = data
  i1290.m_PositionSpring = i1291[0]
  i1290.m_PositionDamper = i1291[1]
  i1290.m_MaximumForce = i1291[2]
  i1290.m_UseAcceleration = i1291[3]
  return i1290
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1293 = data
  i1292.m_Spring = i1293[0]
  i1292.m_Damper = i1293[1]
  return i1292
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1295 = data
  i1294.m_Limit = i1295[0]
  i1294.m_Bounciness = i1295[1]
  i1294.m_ContactDistance = i1295[2]
  return i1294
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1297 = data
  i1296.m_ExtremumSlip = i1297[0]
  i1296.m_ExtremumValue = i1297[1]
  i1296.m_AsymptoteSlip = i1297[2]
  i1296.m_AsymptoteValue = i1297[3]
  i1296.m_Stiffness = i1297[4]
  return i1296
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1298 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1299 = data
  i1298.m_LowerAngle = i1299[0]
  i1298.m_UpperAngle = i1299[1]
  return i1298
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1300 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1301 = data
  i1300.m_MotorSpeed = i1301[0]
  i1300.m_MaximumMotorTorque = i1301[1]
  return i1300
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1302 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1303 = data
  i1302.m_DampingRatio = i1303[0]
  i1302.m_Frequency = i1303[1]
  i1302.m_Angle = i1303[2]
  return i1302
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1304 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1305 = data
  i1304.m_LowerTranslation = i1305[0]
  i1304.m_UpperTranslation = i1305[1]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1306 = root || new pc.UnityMaterial()
  var i1307 = data
  i1306.name = i1307[0]
  request.r(i1307[1], i1307[2], 0, i1306, 'shader')
  i1306.renderQueue = i1307[3]
  i1306.enableInstancing = !!i1307[4]
  var i1309 = i1307[5]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1309[i + 0]) );
  }
  i1306.floatParameters = i1308
  var i1311 = i1307[6]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1311[i + 0]) );
  }
  i1306.colorParameters = i1310
  var i1313 = i1307[7]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1313[i + 0]) );
  }
  i1306.vectorParameters = i1312
  var i1315 = i1307[8]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1315[i + 0]) );
  }
  i1306.textureParameters = i1314
  var i1317 = i1307[9]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1317[i + 0]) );
  }
  i1306.materialFlags = i1316
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1321 = data
  i1320.name = i1321[0]
  i1320.value = i1321[1]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1325 = data
  i1324.name = i1325[0]
  i1324.value = new pc.Color(i1325[1], i1325[2], i1325[3], i1325[4])
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1329 = data
  i1328.name = i1329[0]
  i1328.value = new pc.Vec4( i1329[1], i1329[2], i1329[3], i1329[4] )
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1333 = data
  i1332.name = i1333[0]
  request.r(i1333[1], i1333[2], 0, i1332, 'value')
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1337 = data
  i1336.name = i1337[0]
  i1336.enabled = !!i1337[1]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1339 = data
  i1338.name = i1339[0]
  i1338.width = i1339[1]
  i1338.height = i1339[2]
  i1338.mipmapCount = i1339[3]
  i1338.anisoLevel = i1339[4]
  i1338.filterMode = i1339[5]
  i1338.hdr = !!i1339[6]
  i1338.format = i1339[7]
  i1338.wrapMode = i1339[8]
  i1338.alphaIsTransparency = !!i1339[9]
  i1338.alphaSource = i1339[10]
  i1338.graphicsFormat = i1339[11]
  i1338.sRGBTexture = !!i1339[12]
  i1338.desiredColorSpace = i1339[13]
  i1338.wrapU = i1339[14]
  i1338.wrapV = i1339[15]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1341 = data
  i1340.name = i1341[0]
  i1340.index = i1341[1]
  i1340.startup = !!i1341[2]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1343 = data
  i1342.position = new pc.Vec3( i1343[0], i1343[1], i1343[2] )
  i1342.scale = new pc.Vec3( i1343[3], i1343[4], i1343[5] )
  i1342.rotation = new pc.Quat(i1343[6], i1343[7], i1343[8], i1343[9])
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1345 = data
  i1344.enabled = !!i1345[0]
  i1344.aspect = i1345[1]
  i1344.orthographic = !!i1345[2]
  i1344.orthographicSize = i1345[3]
  i1344.backgroundColor = new pc.Color(i1345[4], i1345[5], i1345[6], i1345[7])
  i1344.nearClipPlane = i1345[8]
  i1344.farClipPlane = i1345[9]
  i1344.fieldOfView = i1345[10]
  i1344.depth = i1345[11]
  i1344.clearFlags = i1345[12]
  i1344.cullingMask = i1345[13]
  i1344.rect = i1345[14]
  request.r(i1345[15], i1345[16], 0, i1344, 'targetTexture')
  i1344.usePhysicalProperties = !!i1345[17]
  i1344.focalLength = i1345[18]
  i1344.sensorSize = new pc.Vec2( i1345[19], i1345[20] )
  i1344.lensShift = new pc.Vec2( i1345[21], i1345[22] )
  i1344.gateFit = i1345[23]
  i1344.commandBufferCount = i1345[24]
  i1344.cameraType = i1345[25]
  return i1344
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i1346 = root || request.c( 'CameraAspectFitter' )
  var i1347 = data
  request.r(i1347[0], i1347[1], 0, i1346, 'targetSprite')
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1349 = data
  i1348.name = i1349[0]
  i1348.tagId = i1349[1]
  i1348.enabled = !!i1349[2]
  i1348.isStatic = !!i1349[3]
  i1348.layer = i1349[4]
  return i1348
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i1350 = root || request.c( 'AudioManager' )
  var i1351 = data
  request.r(i1351[0], i1351[1], 0, i1350, 'library')
  i1350.sfxPoolSize = i1351[2]
  return i1350
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i1352 = root || request.c( 'TaskManager' )
  var i1353 = data
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1355 = data
  i1354.enabled = !!i1355[0]
  request.r(i1355[1], i1355[2], 0, i1354, 'sharedMaterial')
  var i1357 = i1355[3]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 2) {
  request.r(i1357[i + 0], i1357[i + 1], 2, i1356, '')
  }
  i1354.sharedMaterials = i1356
  i1354.receiveShadows = !!i1355[4]
  i1354.shadowCastingMode = i1355[5]
  i1354.sortingLayerID = i1355[6]
  i1354.sortingOrder = i1355[7]
  i1354.lightmapIndex = i1355[8]
  i1354.lightmapSceneIndex = i1355[9]
  i1354.lightmapScaleOffset = new pc.Vec4( i1355[10], i1355[11], i1355[12], i1355[13] )
  i1354.lightProbeUsage = i1355[14]
  i1354.reflectionProbeUsage = i1355[15]
  i1354.color = new pc.Color(i1355[16], i1355[17], i1355[18], i1355[19])
  request.r(i1355[20], i1355[21], 0, i1354, 'sprite')
  i1354.flipX = !!i1355[22]
  i1354.flipY = !!i1355[23]
  i1354.drawMode = i1355[24]
  i1354.size = new pc.Vec2( i1355[25], i1355[26] )
  i1354.tileMode = i1355[27]
  i1354.adaptiveModeThreshold = i1355[28]
  i1354.maskInteraction = i1355[29]
  i1354.spriteSortPoint = i1355[30]
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1361 = data
  i1360.pivot = new pc.Vec2( i1361[0], i1361[1] )
  i1360.anchorMin = new pc.Vec2( i1361[2], i1361[3] )
  i1360.anchorMax = new pc.Vec2( i1361[4], i1361[5] )
  i1360.sizeDelta = new pc.Vec2( i1361[6], i1361[7] )
  i1360.anchoredPosition3D = new pc.Vec3( i1361[8], i1361[9], i1361[10] )
  i1360.rotation = new pc.Quat(i1361[11], i1361[12], i1361[13], i1361[14])
  i1360.scale = new pc.Vec3( i1361[15], i1361[16], i1361[17] )
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1363 = data
  i1362.enabled = !!i1363[0]
  i1362.planeDistance = i1363[1]
  i1362.referencePixelsPerUnit = i1363[2]
  i1362.isFallbackOverlay = !!i1363[3]
  i1362.renderMode = i1363[4]
  i1362.renderOrder = i1363[5]
  i1362.sortingLayerName = i1363[6]
  i1362.sortingOrder = i1363[7]
  i1362.scaleFactor = i1363[8]
  request.r(i1363[9], i1363[10], 0, i1362, 'worldCamera')
  i1362.overrideSorting = !!i1363[11]
  i1362.pixelPerfect = !!i1363[12]
  i1362.targetDisplay = i1363[13]
  i1362.overridePixelPerfect = !!i1363[14]
  return i1362
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1364 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1365 = data
  i1364.m_UiScaleMode = i1365[0]
  i1364.m_ReferencePixelsPerUnit = i1365[1]
  i1364.m_ScaleFactor = i1365[2]
  i1364.m_ReferenceResolution = new pc.Vec2( i1365[3], i1365[4] )
  i1364.m_ScreenMatchMode = i1365[5]
  i1364.m_MatchWidthOrHeight = i1365[6]
  i1364.m_PhysicalUnit = i1365[7]
  i1364.m_FallbackScreenDPI = i1365[8]
  i1364.m_DefaultSpriteDPI = i1365[9]
  i1364.m_DynamicPixelsPerUnit = i1365[10]
  i1364.m_PresetInfoIsWorld = !!i1365[11]
  return i1364
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1366 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1367 = data
  i1366.m_IgnoreReversedGraphics = !!i1367[0]
  i1366.m_BlockingObjects = i1367[1]
  i1366.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1367[2] )
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1369 = data
  i1368.cullTransparentMesh = !!i1369[0]
  return i1368
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1370 = root || request.c( 'UnityEngine.UI.Image' )
  var i1371 = data
  request.r(i1371[0], i1371[1], 0, i1370, 'm_Sprite')
  i1370.m_Type = i1371[2]
  i1370.m_PreserveAspect = !!i1371[3]
  i1370.m_FillCenter = !!i1371[4]
  i1370.m_FillMethod = i1371[5]
  i1370.m_FillAmount = i1371[6]
  i1370.m_FillClockwise = !!i1371[7]
  i1370.m_FillOrigin = i1371[8]
  i1370.m_UseSpriteMesh = !!i1371[9]
  i1370.m_PixelsPerUnitMultiplier = i1371[10]
  request.r(i1371[11], i1371[12], 0, i1370, 'm_Material')
  i1370.m_Maskable = !!i1371[13]
  i1370.m_Color = new pc.Color(i1371[14], i1371[15], i1371[16], i1371[17])
  i1370.m_RaycastTarget = !!i1371[18]
  i1370.m_RaycastPadding = new pc.Vec4( i1371[19], i1371[20], i1371[21], i1371[22] )
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1373 = data
  i1372.m_Alpha = i1373[0]
  i1372.m_Interactable = !!i1373[1]
  i1372.m_BlocksRaycasts = !!i1373[2]
  i1372.m_IgnoreParentGroups = !!i1373[3]
  i1372.enabled = !!i1373[4]
  return i1372
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i1374 = root || request.c( 'CanvasGroupAnimator' )
  var i1375 = data
  request.r(i1375[0], i1375[1], 0, i1374, 'canvasGroup')
  i1374.animateFade = !!i1375[2]
  i1374.triggerOnStart = !!i1375[3]
  i1374.isLooping = !!i1375[4]
  i1374.fadeTo = i1375[5]
  i1374.fadeDuration = i1375[6]
  i1374.fadeEaseType = i1375[7]
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1377 = data
  request.r(i1377[0], i1377[1], 0, i1376, 'animatorController')
  request.r(i1377[2], i1377[3], 0, i1376, 'avatar')
  i1376.updateMode = i1377[4]
  i1376.hasTransformHierarchy = !!i1377[5]
  i1376.applyRootMotion = !!i1377[6]
  var i1379 = i1377[7]
  var i1378 = []
  for(var i = 0; i < i1379.length; i += 2) {
  request.r(i1379[i + 0], i1379[i + 1], 2, i1378, '')
  }
  i1376.humanBones = i1378
  i1376.enabled = !!i1377[8]
  return i1376
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1382 = root || request.c( 'UnityEngine.UI.Button' )
  var i1383 = data
  i1382.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1383[0], i1382.m_OnClick)
  i1382.m_Navigation = request.d('UnityEngine.UI.Navigation', i1383[1], i1382.m_Navigation)
  i1382.m_Transition = i1383[2]
  i1382.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1383[3], i1382.m_Colors)
  i1382.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1383[4], i1382.m_SpriteState)
  i1382.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1383[5], i1382.m_AnimationTriggers)
  i1382.m_Interactable = !!i1383[6]
  request.r(i1383[7], i1383[8], 0, i1382, 'm_TargetGraphic')
  return i1382
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1384 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1385 = data
  i1384.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1385[0], i1384.m_PersistentCalls)
  return i1384
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1386 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1387 = data
  var i1389 = i1387[0]
  var i1388 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.add(request.d('UnityEngine.Events.PersistentCall', i1389[i + 0]));
  }
  i1386.m_Calls = i1388
  return i1386
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1392 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1393 = data
  request.r(i1393[0], i1393[1], 0, i1392, 'm_Target')
  i1392.m_TargetAssemblyTypeName = i1393[2]
  i1392.m_MethodName = i1393[3]
  i1392.m_Mode = i1393[4]
  i1392.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1393[5], i1392.m_Arguments)
  i1392.m_CallState = i1393[6]
  return i1392
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1394 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1395 = data
  request.r(i1395[0], i1395[1], 0, i1394, 'm_ObjectArgument')
  i1394.m_ObjectArgumentAssemblyTypeName = i1395[2]
  i1394.m_IntArgument = i1395[3]
  i1394.m_FloatArgument = i1395[4]
  i1394.m_StringArgument = i1395[5]
  i1394.m_BoolArgument = !!i1395[6]
  return i1394
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1396 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1397 = data
  i1396.m_Mode = i1397[0]
  i1396.m_WrapAround = !!i1397[1]
  request.r(i1397[2], i1397[3], 0, i1396, 'm_SelectOnUp')
  request.r(i1397[4], i1397[5], 0, i1396, 'm_SelectOnDown')
  request.r(i1397[6], i1397[7], 0, i1396, 'm_SelectOnLeft')
  request.r(i1397[8], i1397[9], 0, i1396, 'm_SelectOnRight')
  return i1396
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1398 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1399 = data
  i1398.m_NormalColor = new pc.Color(i1399[0], i1399[1], i1399[2], i1399[3])
  i1398.m_HighlightedColor = new pc.Color(i1399[4], i1399[5], i1399[6], i1399[7])
  i1398.m_PressedColor = new pc.Color(i1399[8], i1399[9], i1399[10], i1399[11])
  i1398.m_SelectedColor = new pc.Color(i1399[12], i1399[13], i1399[14], i1399[15])
  i1398.m_DisabledColor = new pc.Color(i1399[16], i1399[17], i1399[18], i1399[19])
  i1398.m_ColorMultiplier = i1399[20]
  i1398.m_FadeDuration = i1399[21]
  return i1398
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1400 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1401 = data
  request.r(i1401[0], i1401[1], 0, i1400, 'm_HighlightedSprite')
  request.r(i1401[2], i1401[3], 0, i1400, 'm_PressedSprite')
  request.r(i1401[4], i1401[5], 0, i1400, 'm_SelectedSprite')
  request.r(i1401[6], i1401[7], 0, i1400, 'm_DisabledSprite')
  return i1400
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1402 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1403 = data
  i1402.m_NormalTrigger = i1403[0]
  i1402.m_HighlightedTrigger = i1403[1]
  i1402.m_PressedTrigger = i1403[2]
  i1402.m_SelectedTrigger = i1403[3]
  i1402.m_DisabledTrigger = i1403[4]
  return i1402
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1404 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1405 = data
  i1404.m_Spacing = i1405[0]
  i1404.m_ChildForceExpandWidth = !!i1405[1]
  i1404.m_ChildForceExpandHeight = !!i1405[2]
  i1404.m_ChildControlWidth = !!i1405[3]
  i1404.m_ChildControlHeight = !!i1405[4]
  i1404.m_ChildScaleWidth = !!i1405[5]
  i1404.m_ChildScaleHeight = !!i1405[6]
  i1404.m_ReverseArrangement = !!i1405[7]
  i1404.m_Padding = UnityEngine.RectOffset.FromPaddings(i1405[8], i1405[9], i1405[10], i1405[11])
  i1404.m_ChildAlignment = i1405[12]
  return i1404
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1406 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1407 = data
  i1406.m_ShowMaskGraphic = !!i1407[0]
  return i1406
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i1408 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i1409 = data
  request.r(i1409[0], i1409[1], 0, i1408, 'm_Content')
  i1408.m_Horizontal = !!i1409[2]
  i1408.m_Vertical = !!i1409[3]
  i1408.m_MovementType = i1409[4]
  i1408.m_Elasticity = i1409[5]
  i1408.m_Inertia = !!i1409[6]
  i1408.m_DecelerationRate = i1409[7]
  i1408.m_ScrollSensitivity = i1409[8]
  request.r(i1409[9], i1409[10], 0, i1408, 'm_Viewport')
  request.r(i1409[11], i1409[12], 0, i1408, 'm_HorizontalScrollbar')
  request.r(i1409[13], i1409[14], 0, i1408, 'm_VerticalScrollbar')
  i1408.m_HorizontalScrollbarVisibility = i1409[15]
  i1408.m_VerticalScrollbarVisibility = i1409[16]
  i1408.m_HorizontalScrollbarSpacing = i1409[17]
  i1408.m_VerticalScrollbarSpacing = i1409[18]
  i1408.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i1409[19], i1408.m_OnValueChanged)
  return i1408
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i1410 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i1411 = data
  i1410.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1411[0], i1410.m_PersistentCalls)
  return i1410
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i1412 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i1413 = data
  request.r(i1413[0], i1413[1], 0, i1412, 'm_HandleRect')
  i1412.m_Direction = i1413[2]
  i1412.m_Value = i1413[3]
  i1412.m_Size = i1413[4]
  i1412.m_NumberOfSteps = i1413[5]
  i1412.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i1413[6], i1412.m_OnValueChanged)
  i1412.m_Navigation = request.d('UnityEngine.UI.Navigation', i1413[7], i1412.m_Navigation)
  i1412.m_Transition = i1413[8]
  i1412.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1413[9], i1412.m_Colors)
  i1412.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1413[10], i1412.m_SpriteState)
  i1412.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1413[11], i1412.m_AnimationTriggers)
  i1412.m_Interactable = !!i1413[12]
  request.r(i1413[13], i1413[14], 0, i1412, 'm_TargetGraphic')
  return i1412
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i1414 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i1415 = data
  i1414.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1415[0], i1414.m_PersistentCalls)
  return i1414
}

Deserializers["DragToResizeLeft"] = function (request, data, root) {
  var i1416 = root || request.c( 'DragToResizeLeft' )
  var i1417 = data
  request.r(i1417[0], i1417[1], 0, i1416, 'target')
  i1416.minWidth = i1417[2]
  return i1416
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1418 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1419 = data
  request.r(i1419[0], i1419[1], 0, i1418, 'm_FirstSelected')
  i1418.m_sendNavigationEvents = !!i1419[2]
  i1418.m_DragThreshold = i1419[3]
  return i1418
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1420 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1421 = data
  i1420.m_HorizontalAxis = i1421[0]
  i1420.m_VerticalAxis = i1421[1]
  i1420.m_SubmitButton = i1421[2]
  i1420.m_CancelButton = i1421[3]
  i1420.m_InputActionsPerSecond = i1421[4]
  i1420.m_RepeatDelay = i1421[5]
  i1420.m_ForceModuleActive = !!i1421[6]
  i1420.m_SendPointerHoverToParent = !!i1421[7]
  return i1420
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i1422 = root || request.c( 'ButtonPulse' )
  var i1423 = data
  i1422.scaleAmount = i1423[0]
  i1422.pulseDuration = i1423[1]
  return i1422
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i1424 = root || request.c( 'StartClickHandler' )
  var i1425 = data
  return i1424
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1426 = root || request.c( 'GameManager' )
  var i1427 = data
  request.r(i1427[0], i1427[1], 0, i1426, 'endPanel')
  i1426.end = !!i1427[2]
  request.r(i1427[3], i1427[4], 0, i1426, 'hand')
  request.r(i1427[5], i1427[6], 0, i1426, 'hand2')
  i1426.enableSound = !!i1427[7]
  request.r(i1427[8], i1427[9], 0, i1426, 'startClickHandler')
  i1426.currentScore = i1427[10]
  request.r(i1427[11], i1427[12], 0, i1426, 'BodyToSummarize')
  request.r(i1427[13], i1427[14], 0, i1426, 'SummarizedText')
  request.r(i1427[15], i1427[16], 0, i1426, 'transcriptBtnBlue')
  request.r(i1427[17], i1427[18], 0, i1426, 'transcriptBtn')
  request.r(i1427[19], i1427[20], 0, i1426, 'summaryBtn')
  request.r(i1427[21], i1427[22], 0, i1426, 'summaryBtnBlue')
  request.r(i1427[23], i1427[24], 0, i1426, 'mainPanel')
  request.r(i1427[25], i1427[26], 0, i1426, 'handle1')
  request.r(i1427[27], i1427[28], 0, i1426, 'animator')
  request.r(i1427[29], i1427[30], 0, i1426, 'maskA')
  request.r(i1427[31], i1427[32], 0, i1426, 'filter')
  request.r(i1427[33], i1427[34], 0, i1426, 'arrow')
  request.r(i1427[35], i1427[36], 0, i1426, 'toTap')
  request.r(i1427[37], i1427[38], 0, i1426, 'openingPanel')
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1429 = data
  i1428.ambientIntensity = i1429[0]
  i1428.reflectionIntensity = i1429[1]
  i1428.ambientMode = i1429[2]
  i1428.ambientLight = new pc.Color(i1429[3], i1429[4], i1429[5], i1429[6])
  i1428.ambientSkyColor = new pc.Color(i1429[7], i1429[8], i1429[9], i1429[10])
  i1428.ambientGroundColor = new pc.Color(i1429[11], i1429[12], i1429[13], i1429[14])
  i1428.ambientEquatorColor = new pc.Color(i1429[15], i1429[16], i1429[17], i1429[18])
  i1428.fogColor = new pc.Color(i1429[19], i1429[20], i1429[21], i1429[22])
  i1428.fogEndDistance = i1429[23]
  i1428.fogStartDistance = i1429[24]
  i1428.fogDensity = i1429[25]
  i1428.fog = !!i1429[26]
  request.r(i1429[27], i1429[28], 0, i1428, 'skybox')
  i1428.fogMode = i1429[29]
  var i1431 = i1429[30]
  var i1430 = []
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1431[i + 0]) );
  }
  i1428.lightmaps = i1430
  i1428.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1429[31], i1428.lightProbes)
  i1428.lightmapsMode = i1429[32]
  i1428.mixedBakeMode = i1429[33]
  i1428.environmentLightingMode = i1429[34]
  i1428.ambientProbe = new pc.SphericalHarmonicsL2(i1429[35])
  i1428.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1429[36])
  i1428.useReferenceAmbientProbe = !!i1429[37]
  request.r(i1429[38], i1429[39], 0, i1428, 'customReflection')
  request.r(i1429[40], i1429[41], 0, i1428, 'defaultReflection')
  i1428.defaultReflectionMode = i1429[42]
  i1428.defaultReflectionResolution = i1429[43]
  i1428.sunLightObjectId = i1429[44]
  i1428.pixelLightCount = i1429[45]
  i1428.defaultReflectionHDR = !!i1429[46]
  i1428.hasLightDataAsset = !!i1429[47]
  i1428.hasManualGenerate = !!i1429[48]
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1435 = data
  request.r(i1435[0], i1435[1], 0, i1434, 'lightmapColor')
  request.r(i1435[2], i1435[3], 0, i1434, 'lightmapDirection')
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1436 = root || new UnityEngine.LightProbes()
  var i1437 = data
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1445 = data
  var i1447 = i1445[0]
  var i1446 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1447[i + 0]));
  }
  i1444.ShaderCompilationErrors = i1446
  i1444.name = i1445[1]
  i1444.guid = i1445[2]
  var i1449 = i1445[3]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.push( i1449[i + 0] );
  }
  i1444.shaderDefinedKeywords = i1448
  var i1451 = i1445[4]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1451[i + 0]) );
  }
  i1444.passes = i1450
  var i1453 = i1445[5]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1453[i + 0]) );
  }
  i1444.usePasses = i1452
  var i1455 = i1445[6]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1455[i + 0]) );
  }
  i1444.defaultParameterValues = i1454
  request.r(i1445[7], i1445[8], 0, i1444, 'unityFallbackShader')
  i1444.readDepth = !!i1445[9]
  i1444.isCreatedByShaderGraph = !!i1445[10]
  i1444.compiled = !!i1445[11]
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1459 = data
  i1458.shaderName = i1459[0]
  i1458.errorMessage = i1459[1]
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1464 = root || new pc.UnityShaderPass()
  var i1465 = data
  i1464.id = i1465[0]
  i1464.subShaderIndex = i1465[1]
  i1464.name = i1465[2]
  i1464.passType = i1465[3]
  i1464.grabPassTextureName = i1465[4]
  i1464.usePass = !!i1465[5]
  i1464.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1465[6], i1464.zTest)
  i1464.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1465[7], i1464.zWrite)
  i1464.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1465[8], i1464.culling)
  i1464.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1465[9], i1464.blending)
  i1464.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1465[10], i1464.alphaBlending)
  i1464.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1465[11], i1464.colorWriteMask)
  i1464.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1465[12], i1464.offsetUnits)
  i1464.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1465[13], i1464.offsetFactor)
  i1464.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1465[14], i1464.stencilRef)
  i1464.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1465[15], i1464.stencilReadMask)
  i1464.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1465[16], i1464.stencilWriteMask)
  i1464.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1465[17], i1464.stencilOp)
  i1464.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1465[18], i1464.stencilOpFront)
  i1464.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1465[19], i1464.stencilOpBack)
  var i1467 = i1465[20]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1467[i + 0]) );
  }
  i1464.tags = i1466
  var i1469 = i1465[21]
  var i1468 = []
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.push( i1469[i + 0] );
  }
  i1464.passDefinedKeywords = i1468
  var i1471 = i1465[22]
  var i1470 = []
  for(var i = 0; i < i1471.length; i += 1) {
    i1470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1471[i + 0]) );
  }
  i1464.passDefinedKeywordGroups = i1470
  var i1473 = i1465[23]
  var i1472 = []
  for(var i = 0; i < i1473.length; i += 1) {
    i1472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1473[i + 0]) );
  }
  i1464.variants = i1472
  var i1475 = i1465[24]
  var i1474 = []
  for(var i = 0; i < i1475.length; i += 1) {
    i1474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1475[i + 0]) );
  }
  i1464.excludedVariants = i1474
  i1464.hasDepthReader = !!i1465[25]
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1477 = data
  i1476.val = i1477[0]
  i1476.name = i1477[1]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1479 = data
  i1478.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1479[0], i1478.src)
  i1478.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1479[1], i1478.dst)
  i1478.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1479[2], i1478.op)
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1481 = data
  i1480.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1481[0], i1480.pass)
  i1480.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1481[1], i1480.fail)
  i1480.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1481[2], i1480.zFail)
  i1480.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1481[3], i1480.comp)
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1485 = data
  i1484.name = i1485[0]
  i1484.value = i1485[1]
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1489 = data
  var i1491 = i1489[0]
  var i1490 = []
  for(var i = 0; i < i1491.length; i += 1) {
    i1490.push( i1491[i + 0] );
  }
  i1488.keywords = i1490
  i1488.hasDiscard = !!i1489[1]
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1495 = data
  i1494.passId = i1495[0]
  i1494.subShaderIndex = i1495[1]
  var i1497 = i1495[2]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.push( i1497[i + 0] );
  }
  i1494.keywords = i1496
  i1494.vertexProgram = i1495[3]
  i1494.fragmentProgram = i1495[4]
  i1494.exportedForWebGl2 = !!i1495[5]
  i1494.readDepth = !!i1495[6]
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1501 = data
  request.r(i1501[0], i1501[1], 0, i1500, 'shader')
  i1500.pass = i1501[2]
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1505 = data
  i1504.name = i1505[0]
  i1504.type = i1505[1]
  i1504.value = new pc.Vec4( i1505[2], i1505[3], i1505[4], i1505[5] )
  i1504.textureValue = i1505[6]
  i1504.shaderPropertyFlag = i1505[7]
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1507 = data
  i1506.name = i1507[0]
  request.r(i1507[1], i1507[2], 0, i1506, 'texture')
  i1506.aabb = i1507[3]
  i1506.vertices = i1507[4]
  i1506.triangles = i1507[5]
  i1506.textureRect = UnityEngine.Rect.MinMaxRect(i1507[6], i1507[7], i1507[8], i1507[9])
  i1506.packedRect = UnityEngine.Rect.MinMaxRect(i1507[10], i1507[11], i1507[12], i1507[13])
  i1506.border = new pc.Vec4( i1507[14], i1507[15], i1507[16], i1507[17] )
  i1506.transparency = i1507[18]
  i1506.bounds = i1507[19]
  i1506.pixelsPerUnit = i1507[20]
  i1506.textureWidth = i1507[21]
  i1506.textureHeight = i1507[22]
  i1506.nativeSize = new pc.Vec2( i1507[23], i1507[24] )
  i1506.pivot = new pc.Vec2( i1507[25], i1507[26] )
  i1506.textureRectOffset = new pc.Vec2( i1507[27], i1507[28] )
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1509 = data
  i1508.name = i1509[0]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1511 = data
  i1510.name = i1511[0]
  i1510.wrapMode = i1511[1]
  i1510.isLooping = !!i1511[2]
  i1510.length = i1511[3]
  var i1513 = i1511[4]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1513[i + 0]) );
  }
  i1510.curves = i1512
  var i1515 = i1511[5]
  var i1514 = []
  for(var i = 0; i < i1515.length; i += 1) {
    i1514.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1515[i + 0]) );
  }
  i1510.events = i1514
  i1510.halfPrecision = !!i1511[6]
  i1510._frameRate = i1511[7]
  i1510.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1511[8], i1510.localBounds)
  i1510.hasMuscleCurves = !!i1511[9]
  var i1517 = i1511[10]
  var i1516 = []
  for(var i = 0; i < i1517.length; i += 1) {
    i1516.push( i1517[i + 0] );
  }
  i1510.clipMuscleConstant = i1516
  i1510.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1511[11], i1510.clipBindingConstant)
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1521 = data
  i1520.path = i1521[0]
  i1520.hash = i1521[1]
  i1520.componentType = i1521[2]
  i1520.property = i1521[3]
  i1520.keys = i1521[4]
  var i1523 = i1521[5]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1523[i + 0]) );
  }
  i1520.objectReferenceKeys = i1522
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1527 = data
  i1526.time = i1527[0]
  request.r(i1527[1], i1527[2], 0, i1526, 'value')
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1531 = data
  i1530.functionName = i1531[0]
  i1530.floatParameter = i1531[1]
  i1530.intParameter = i1531[2]
  i1530.stringParameter = i1531[3]
  request.r(i1531[4], i1531[5], 0, i1530, 'objectReferenceParameter')
  i1530.time = i1531[6]
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1533 = data
  i1532.center = new pc.Vec3( i1533[0], i1533[1], i1533[2] )
  i1532.extends = new pc.Vec3( i1533[3], i1533[4], i1533[5] )
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1537 = data
  var i1539 = i1537[0]
  var i1538 = []
  for(var i = 0; i < i1539.length; i += 1) {
    i1538.push( i1539[i + 0] );
  }
  i1536.genericBindings = i1538
  var i1541 = i1537[1]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.push( i1541[i + 0] );
  }
  i1536.pptrCurveMapping = i1540
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1543 = data
  i1542.name = i1543[0]
  var i1545 = i1543[1]
  var i1544 = []
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1545[i + 0]) );
  }
  i1542.layers = i1544
  var i1547 = i1543[2]
  var i1546 = []
  for(var i = 0; i < i1547.length; i += 1) {
    i1546.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1547[i + 0]) );
  }
  i1542.parameters = i1546
  i1542.animationClips = i1543[3]
  i1542.avatarUnsupported = i1543[4]
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1551 = data
  i1550.name = i1551[0]
  i1550.defaultWeight = i1551[1]
  i1550.blendingMode = i1551[2]
  i1550.avatarMask = i1551[3]
  i1550.syncedLayerIndex = i1551[4]
  i1550.syncedLayerAffectsTiming = !!i1551[5]
  i1550.syncedLayers = i1551[6]
  i1550.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1551[7], i1550.stateMachine)
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1553 = data
  i1552.id = i1553[0]
  i1552.name = i1553[1]
  i1552.path = i1553[2]
  var i1555 = i1553[3]
  var i1554 = []
  for(var i = 0; i < i1555.length; i += 1) {
    i1554.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1555[i + 0]) );
  }
  i1552.states = i1554
  var i1557 = i1553[4]
  var i1556 = []
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1557[i + 0]) );
  }
  i1552.machines = i1556
  var i1559 = i1553[5]
  var i1558 = []
  for(var i = 0; i < i1559.length; i += 1) {
    i1558.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1559[i + 0]) );
  }
  i1552.entryStateTransitions = i1558
  var i1561 = i1553[6]
  var i1560 = []
  for(var i = 0; i < i1561.length; i += 1) {
    i1560.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1561[i + 0]) );
  }
  i1552.exitStateTransitions = i1560
  var i1563 = i1553[7]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 1) {
    i1562.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1563[i + 0]) );
  }
  i1552.anyStateTransitions = i1562
  i1552.defaultStateId = i1553[8]
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1567 = data
  i1566.id = i1567[0]
  i1566.name = i1567[1]
  i1566.cycleOffset = i1567[2]
  i1566.cycleOffsetParameter = i1567[3]
  i1566.cycleOffsetParameterActive = !!i1567[4]
  i1566.mirror = !!i1567[5]
  i1566.mirrorParameter = i1567[6]
  i1566.mirrorParameterActive = !!i1567[7]
  i1566.motionId = i1567[8]
  i1566.nameHash = i1567[9]
  i1566.fullPathHash = i1567[10]
  i1566.speed = i1567[11]
  i1566.speedParameter = i1567[12]
  i1566.speedParameterActive = !!i1567[13]
  i1566.tag = i1567[14]
  i1566.tagHash = i1567[15]
  i1566.writeDefaultValues = !!i1567[16]
  var i1569 = i1567[17]
  var i1568 = []
  for(var i = 0; i < i1569.length; i += 2) {
  request.r(i1569[i + 0], i1569[i + 1], 2, i1568, '')
  }
  i1566.behaviours = i1568
  var i1571 = i1567[18]
  var i1570 = []
  for(var i = 0; i < i1571.length; i += 1) {
    i1570.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1571[i + 0]) );
  }
  i1566.transitions = i1570
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1577 = data
  i1576.fullPath = i1577[0]
  i1576.canTransitionToSelf = !!i1577[1]
  i1576.duration = i1577[2]
  i1576.exitTime = i1577[3]
  i1576.hasExitTime = !!i1577[4]
  i1576.hasFixedDuration = !!i1577[5]
  i1576.interruptionSource = i1577[6]
  i1576.offset = i1577[7]
  i1576.orderedInterruption = !!i1577[8]
  i1576.destinationStateId = i1577[9]
  i1576.isExit = !!i1577[10]
  i1576.mute = !!i1577[11]
  i1576.solo = !!i1577[12]
  var i1579 = i1577[13]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1579[i + 0]) );
  }
  i1576.conditions = i1578
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1585 = data
  i1584.destinationStateId = i1585[0]
  i1584.isExit = !!i1585[1]
  i1584.mute = !!i1585[2]
  i1584.solo = !!i1585[3]
  var i1587 = i1585[4]
  var i1586 = []
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1587[i + 0]) );
  }
  i1584.conditions = i1586
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1591 = data
  i1590.defaultBool = !!i1591[0]
  i1590.defaultFloat = i1591[1]
  i1590.defaultInt = i1591[2]
  i1590.name = i1591[3]
  i1590.nameHash = i1591[4]
  i1590.type = i1591[5]
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1595 = data
  i1594.mode = i1595[0]
  i1594.parameter = i1595[1]
  i1594.threshold = i1595[2]
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1597 = data
  i1596.name = i1597[0]
  i1596.bytes64 = i1597[1]
  i1596.data = i1597[2]
  return i1596
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i1598 = root || request.c( 'AudioLibrary' )
  var i1599 = data
  var i1601 = i1599[0]
  var i1600 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i1601.length; i += 1) {
    i1600.add(request.d('AudioLibrary+ClipEntry', i1601[i + 0]));
  }
  i1598.clips = i1600
  return i1598
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i1604 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i1605 = data
  i1604.key = i1605[0]
  i1604.channel = i1605[1]
  request.r(i1605[2], i1605[3], 0, i1604, 'clip')
  i1604.volume = i1605[4]
  i1604.loop = !!i1605[5]
  return i1604
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1606 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1607 = data
  i1606.useSafeMode = !!i1607[0]
  i1606.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1607[1], i1606.safeModeOptions)
  i1606.timeScale = i1607[2]
  i1606.unscaledTimeScale = i1607[3]
  i1606.useSmoothDeltaTime = !!i1607[4]
  i1606.maxSmoothUnscaledTime = i1607[5]
  i1606.rewindCallbackMode = i1607[6]
  i1606.showUnityEditorReport = !!i1607[7]
  i1606.logBehaviour = i1607[8]
  i1606.drawGizmos = !!i1607[9]
  i1606.defaultRecyclable = !!i1607[10]
  i1606.defaultAutoPlay = i1607[11]
  i1606.defaultUpdateType = i1607[12]
  i1606.defaultTimeScaleIndependent = !!i1607[13]
  i1606.defaultEaseType = i1607[14]
  i1606.defaultEaseOvershootOrAmplitude = i1607[15]
  i1606.defaultEasePeriod = i1607[16]
  i1606.defaultAutoKill = !!i1607[17]
  i1606.defaultLoopType = i1607[18]
  i1606.debugMode = !!i1607[19]
  i1606.debugStoreTargetId = !!i1607[20]
  i1606.showPreviewPanel = !!i1607[21]
  i1606.storeSettingsLocation = i1607[22]
  i1606.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1607[23], i1606.modules)
  i1606.createASMDEF = !!i1607[24]
  i1606.showPlayingTweens = !!i1607[25]
  i1606.showPausedTweens = !!i1607[26]
  return i1606
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1608 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1609 = data
  i1608.logBehaviour = i1609[0]
  i1608.nestedTweenFailureBehaviour = i1609[1]
  return i1608
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1610 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1611 = data
  i1610.showPanel = !!i1611[0]
  i1610.audioEnabled = !!i1611[1]
  i1610.physicsEnabled = !!i1611[2]
  i1610.physics2DEnabled = !!i1611[3]
  i1610.spriteEnabled = !!i1611[4]
  i1610.uiEnabled = !!i1611[5]
  i1610.textMeshProEnabled = !!i1611[6]
  i1610.tk2DEnabled = !!i1611[7]
  i1610.deAudioEnabled = !!i1611[8]
  i1610.deUnityExtendedEnabled = !!i1611[9]
  i1610.epoOutlineEnabled = !!i1611[10]
  return i1610
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1612 = root || request.c( 'TMPro.TMP_Settings' )
  var i1613 = data
  i1612.m_enableWordWrapping = !!i1613[0]
  i1612.m_enableKerning = !!i1613[1]
  i1612.m_enableExtraPadding = !!i1613[2]
  i1612.m_enableTintAllSprites = !!i1613[3]
  i1612.m_enableParseEscapeCharacters = !!i1613[4]
  i1612.m_EnableRaycastTarget = !!i1613[5]
  i1612.m_GetFontFeaturesAtRuntime = !!i1613[6]
  i1612.m_missingGlyphCharacter = i1613[7]
  i1612.m_warningsDisabled = !!i1613[8]
  request.r(i1613[9], i1613[10], 0, i1612, 'm_defaultFontAsset')
  i1612.m_defaultFontAssetPath = i1613[11]
  i1612.m_defaultFontSize = i1613[12]
  i1612.m_defaultAutoSizeMinRatio = i1613[13]
  i1612.m_defaultAutoSizeMaxRatio = i1613[14]
  i1612.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1613[15], i1613[16] )
  i1612.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1613[17], i1613[18] )
  i1612.m_autoSizeTextContainer = !!i1613[19]
  i1612.m_IsTextObjectScaleStatic = !!i1613[20]
  var i1615 = i1613[21]
  var i1614 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1615.length; i += 2) {
  request.r(i1615[i + 0], i1615[i + 1], 1, i1614, '')
  }
  i1612.m_fallbackFontAssets = i1614
  i1612.m_matchMaterialPreset = !!i1613[22]
  request.r(i1613[23], i1613[24], 0, i1612, 'm_defaultSpriteAsset')
  i1612.m_defaultSpriteAssetPath = i1613[25]
  i1612.m_enableEmojiSupport = !!i1613[26]
  i1612.m_MissingCharacterSpriteUnicode = i1613[27]
  i1612.m_defaultColorGradientPresetsPath = i1613[28]
  request.r(i1613[29], i1613[30], 0, i1612, 'm_defaultStyleSheet')
  i1612.m_StyleSheetsResourcePath = i1613[31]
  request.r(i1613[32], i1613[33], 0, i1612, 'm_leadingCharacters')
  request.r(i1613[34], i1613[35], 0, i1612, 'm_followingCharacters')
  i1612.m_UseModernHangulLineBreakingRules = !!i1613[36]
  return i1612
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1618 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1619 = data
  i1618.hashCode = i1619[0]
  request.r(i1619[1], i1619[2], 0, i1618, 'material')
  i1618.materialHashCode = i1619[3]
  request.r(i1619[4], i1619[5], 0, i1618, 'spriteSheet')
  var i1621 = i1619[6]
  var i1620 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.add(request.d('TMPro.TMP_Sprite', i1621[i + 0]));
  }
  i1618.spriteInfoList = i1620
  var i1623 = i1619[7]
  var i1622 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1623.length; i += 2) {
  request.r(i1623[i + 0], i1623[i + 1], 1, i1622, '')
  }
  i1618.fallbackSpriteAssets = i1622
  i1618.m_Version = i1619[8]
  i1618.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1619[9], i1618.m_FaceInfo)
  var i1625 = i1619[10]
  var i1624 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.add(request.d('TMPro.TMP_SpriteCharacter', i1625[i + 0]));
  }
  i1618.m_SpriteCharacterTable = i1624
  var i1627 = i1619[11]
  var i1626 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.add(request.d('TMPro.TMP_SpriteGlyph', i1627[i + 0]));
  }
  i1618.m_SpriteGlyphTable = i1626
  return i1618
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1630 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1631 = data
  i1630.name = i1631[0]
  i1630.hashCode = i1631[1]
  i1630.unicode = i1631[2]
  i1630.pivot = new pc.Vec2( i1631[3], i1631[4] )
  request.r(i1631[5], i1631[6], 0, i1630, 'sprite')
  i1630.id = i1631[7]
  i1630.x = i1631[8]
  i1630.y = i1631[9]
  i1630.width = i1631[10]
  i1630.height = i1631[11]
  i1630.xOffset = i1631[12]
  i1630.yOffset = i1631[13]
  i1630.xAdvance = i1631[14]
  i1630.scale = i1631[15]
  return i1630
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1634 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1635 = data
  i1634.m_FaceIndex = i1635[0]
  i1634.m_FamilyName = i1635[1]
  i1634.m_StyleName = i1635[2]
  i1634.m_PointSize = i1635[3]
  i1634.m_Scale = i1635[4]
  i1634.m_UnitsPerEM = i1635[5]
  i1634.m_LineHeight = i1635[6]
  i1634.m_AscentLine = i1635[7]
  i1634.m_CapLine = i1635[8]
  i1634.m_MeanLine = i1635[9]
  i1634.m_Baseline = i1635[10]
  i1634.m_DescentLine = i1635[11]
  i1634.m_SuperscriptOffset = i1635[12]
  i1634.m_SuperscriptSize = i1635[13]
  i1634.m_SubscriptOffset = i1635[14]
  i1634.m_SubscriptSize = i1635[15]
  i1634.m_UnderlineOffset = i1635[16]
  i1634.m_UnderlineThickness = i1635[17]
  i1634.m_StrikethroughOffset = i1635[18]
  i1634.m_StrikethroughThickness = i1635[19]
  i1634.m_TabWidth = i1635[20]
  return i1634
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1638 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1639 = data
  i1638.m_Name = i1639[0]
  i1638.m_HashCode = i1639[1]
  i1638.m_ElementType = i1639[2]
  i1638.m_Unicode = i1639[3]
  i1638.m_GlyphIndex = i1639[4]
  i1638.m_Scale = i1639[5]
  return i1638
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1642 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1643 = data
  request.r(i1643[0], i1643[1], 0, i1642, 'sprite')
  i1642.m_Index = i1643[2]
  i1642.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1643[3], i1642.m_Metrics)
  i1642.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1643[4], i1642.m_GlyphRect)
  i1642.m_Scale = i1643[5]
  i1642.m_AtlasIndex = i1643[6]
  i1642.m_ClassDefinitionType = i1643[7]
  return i1642
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1644 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1645 = data
  i1644.m_Width = i1645[0]
  i1644.m_Height = i1645[1]
  i1644.m_HorizontalBearingX = i1645[2]
  i1644.m_HorizontalBearingY = i1645[3]
  i1644.m_HorizontalAdvance = i1645[4]
  return i1644
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1646 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1647 = data
  i1646.m_X = i1647[0]
  i1646.m_Y = i1647[1]
  i1646.m_Width = i1647[2]
  i1646.m_Height = i1647[3]
  return i1646
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1648 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1649 = data
  var i1651 = i1649[0]
  var i1650 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.add(request.d('TMPro.TMP_Style', i1651[i + 0]));
  }
  i1648.m_StyleList = i1650
  return i1648
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1654 = root || request.c( 'TMPro.TMP_Style' )
  var i1655 = data
  i1654.m_Name = i1655[0]
  i1654.m_HashCode = i1655[1]
  i1654.m_OpeningDefinition = i1655[2]
  i1654.m_ClosingDefinition = i1655[3]
  i1654.m_OpeningTagArray = i1655[4]
  i1654.m_ClosingTagArray = i1655[5]
  i1654.m_OpeningTagUnicodeArray = i1655[6]
  i1654.m_ClosingTagUnicodeArray = i1655[7]
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1657 = data
  var i1659 = i1657[0]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1659[i + 0]) );
  }
  i1656.files = i1658
  i1656.componentToPrefabIds = i1657[1]
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1663 = data
  i1662.path = i1663[0]
  request.r(i1663[1], i1663[2], 0, i1662, 'unityObject')
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1665 = data
  var i1667 = i1665[0]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1667[i + 0]) );
  }
  i1664.scriptsExecutionOrder = i1666
  var i1669 = i1665[1]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1669[i + 0]) );
  }
  i1664.sortingLayers = i1668
  var i1671 = i1665[2]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1671[i + 0]) );
  }
  i1664.cullingLayers = i1670
  i1664.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1665[3], i1664.timeSettings)
  i1664.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1665[4], i1664.physicsSettings)
  i1664.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1665[5], i1664.physics2DSettings)
  i1664.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1665[6], i1664.qualitySettings)
  i1664.enableRealtimeShadows = !!i1665[7]
  i1664.enableAutoInstancing = !!i1665[8]
  i1664.enableDynamicBatching = !!i1665[9]
  i1664.lightmapEncodingQuality = i1665[10]
  i1664.desiredColorSpace = i1665[11]
  var i1673 = i1665[12]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.push( i1673[i + 0] );
  }
  i1664.allTags = i1672
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1677 = data
  i1676.name = i1677[0]
  i1676.value = i1677[1]
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1681 = data
  i1680.id = i1681[0]
  i1680.name = i1681[1]
  i1680.value = i1681[2]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1685 = data
  i1684.id = i1685[0]
  i1684.name = i1685[1]
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1687 = data
  i1686.fixedDeltaTime = i1687[0]
  i1686.maximumDeltaTime = i1687[1]
  i1686.timeScale = i1687[2]
  i1686.maximumParticleTimestep = i1687[3]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1689 = data
  i1688.gravity = new pc.Vec3( i1689[0], i1689[1], i1689[2] )
  i1688.defaultSolverIterations = i1689[3]
  i1688.bounceThreshold = i1689[4]
  i1688.autoSyncTransforms = !!i1689[5]
  i1688.autoSimulation = !!i1689[6]
  var i1691 = i1689[7]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1691[i + 0]) );
  }
  i1688.collisionMatrix = i1690
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1695 = data
  i1694.enabled = !!i1695[0]
  i1694.layerId = i1695[1]
  i1694.otherLayerId = i1695[2]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1697 = data
  request.r(i1697[0], i1697[1], 0, i1696, 'material')
  i1696.gravity = new pc.Vec2( i1697[2], i1697[3] )
  i1696.positionIterations = i1697[4]
  i1696.velocityIterations = i1697[5]
  i1696.velocityThreshold = i1697[6]
  i1696.maxLinearCorrection = i1697[7]
  i1696.maxAngularCorrection = i1697[8]
  i1696.maxTranslationSpeed = i1697[9]
  i1696.maxRotationSpeed = i1697[10]
  i1696.baumgarteScale = i1697[11]
  i1696.baumgarteTOIScale = i1697[12]
  i1696.timeToSleep = i1697[13]
  i1696.linearSleepTolerance = i1697[14]
  i1696.angularSleepTolerance = i1697[15]
  i1696.defaultContactOffset = i1697[16]
  i1696.autoSimulation = !!i1697[17]
  i1696.queriesHitTriggers = !!i1697[18]
  i1696.queriesStartInColliders = !!i1697[19]
  i1696.callbacksOnDisable = !!i1697[20]
  i1696.reuseCollisionCallbacks = !!i1697[21]
  i1696.autoSyncTransforms = !!i1697[22]
  var i1699 = i1697[23]
  var i1698 = []
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1699[i + 0]) );
  }
  i1696.collisionMatrix = i1698
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1703 = data
  i1702.enabled = !!i1703[0]
  i1702.layerId = i1703[1]
  i1702.otherLayerId = i1703[2]
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1705 = data
  var i1707 = i1705[0]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1707[i + 0]) );
  }
  i1704.qualityLevels = i1706
  var i1709 = i1705[1]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( i1709[i + 0] );
  }
  i1704.names = i1708
  i1704.shadows = i1705[2]
  i1704.anisotropicFiltering = i1705[3]
  i1704.antiAliasing = i1705[4]
  i1704.lodBias = i1705[5]
  i1704.shadowCascades = i1705[6]
  i1704.shadowDistance = i1705[7]
  i1704.shadowmaskMode = i1705[8]
  i1704.shadowProjection = i1705[9]
  i1704.shadowResolution = i1705[10]
  i1704.softParticles = !!i1705[11]
  i1704.softVegetation = !!i1705[12]
  i1704.activeColorSpace = i1705[13]
  i1704.desiredColorSpace = i1705[14]
  i1704.masterTextureLimit = i1705[15]
  i1704.maxQueuedFrames = i1705[16]
  i1704.particleRaycastBudget = i1705[17]
  i1704.pixelLightCount = i1705[18]
  i1704.realtimeReflectionProbes = !!i1705[19]
  i1704.shadowCascade2Split = i1705[20]
  i1704.shadowCascade4Split = new pc.Vec3( i1705[21], i1705[22], i1705[23] )
  i1704.streamingMipmapsActive = !!i1705[24]
  i1704.vSyncCount = i1705[25]
  i1704.asyncUploadBufferSize = i1705[26]
  i1704.asyncUploadTimeSlice = i1705[27]
  i1704.billboardsFaceCameraPosition = !!i1705[28]
  i1704.shadowNearPlaneOffset = i1705[29]
  i1704.streamingMipmapsMemoryBudget = i1705[30]
  i1704.maximumLODLevel = i1705[31]
  i1704.streamingMipmapsAddAllCameras = !!i1705[32]
  i1704.streamingMipmapsMaxLevelReduction = i1705[33]
  i1704.streamingMipmapsRenderersPerFrame = i1705[34]
  i1704.resolutionScalingFixedDPIFactor = i1705[35]
  i1704.streamingMipmapsMaxFileIORequests = i1705[36]
  i1704.currentQualityLevel = i1705[37]
  return i1704
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[2],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[2],"76":[77],"78":[79],"80":[79],"13":[12],"5":[2],"29":[12],"81":[54],"82":[12],"83":[6],"84":[12],"85":[12],"16":[13],"18":[17,12],"86":[12],"15":[13],"87":[12],"88":[12],"25":[12],"89":[12],"90":[12],"91":[12],"92":[12],"26":[12],"93":[12],"94":[17,12],"95":[12],"28":[12],"27":[12],"96":[12],"97":[17,12],"98":[12],"99":[30],"100":[30],"31":[30],"101":[30],"102":[2],"103":[2],"104":[105],"106":[2],"107":[12],"108":[77,12],"109":[12,17],"110":[12],"111":[17,12],"112":[77],"113":[17,12],"114":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAspectFitter","UnityEngine.SpriteRenderer","AudioManager","AudioLibrary","TaskManager","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.CanvasGroup","CanvasGroupAnimator","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Button","GameManager","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","DragToResizeLeft","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ButtonPulse","StartClickHandler","UnityEngine.GameObject","UnityEngine.Texture2D","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bullet","UIHorizontalDraggable","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "core2d";

Deserializers.lunaInitializationTime = "08/14/2025 11:33:59";

Deserializers.lunaDaysRunning = "11.9";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "KeyPoints_Mip1";

Deserializers.lunaAppID = "32259";

Deserializers.projectId = "25cf7bcc16a03234c9bd68200ba66e30";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1710";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4288";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "5904f371-a229-4b95-a340-bb40f70e5a39";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


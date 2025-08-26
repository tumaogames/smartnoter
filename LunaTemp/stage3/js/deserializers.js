var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1272 = root || request.c( 'UnityEngine.JointSpring' )
  var i1273 = data
  i1272.spring = i1273[0]
  i1272.damper = i1273[1]
  i1272.targetPosition = i1273[2]
  return i1272
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1274 = root || request.c( 'UnityEngine.JointMotor' )
  var i1275 = data
  i1274.m_TargetVelocity = i1275[0]
  i1274.m_Force = i1275[1]
  i1274.m_FreeSpin = i1275[2]
  return i1274
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1276 = root || request.c( 'UnityEngine.JointLimits' )
  var i1277 = data
  i1276.m_Min = i1277[0]
  i1276.m_Max = i1277[1]
  i1276.m_Bounciness = i1277[2]
  i1276.m_BounceMinVelocity = i1277[3]
  i1276.m_ContactDistance = i1277[4]
  i1276.minBounce = i1277[5]
  i1276.maxBounce = i1277[6]
  return i1276
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1278 = root || request.c( 'UnityEngine.JointDrive' )
  var i1279 = data
  i1278.m_PositionSpring = i1279[0]
  i1278.m_PositionDamper = i1279[1]
  i1278.m_MaximumForce = i1279[2]
  i1278.m_UseAcceleration = i1279[3]
  return i1278
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1280 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1281 = data
  i1280.m_Spring = i1281[0]
  i1280.m_Damper = i1281[1]
  return i1280
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1282 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1283 = data
  i1282.m_Limit = i1283[0]
  i1282.m_Bounciness = i1283[1]
  i1282.m_ContactDistance = i1283[2]
  return i1282
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1284 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1285 = data
  i1284.m_ExtremumSlip = i1285[0]
  i1284.m_ExtremumValue = i1285[1]
  i1284.m_AsymptoteSlip = i1285[2]
  i1284.m_AsymptoteValue = i1285[3]
  i1284.m_Stiffness = i1285[4]
  return i1284
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1286 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1287 = data
  i1286.m_LowerAngle = i1287[0]
  i1286.m_UpperAngle = i1287[1]
  return i1286
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1288 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1289 = data
  i1288.m_MotorSpeed = i1289[0]
  i1288.m_MaximumMotorTorque = i1289[1]
  return i1288
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1291 = data
  i1290.m_DampingRatio = i1291[0]
  i1290.m_Frequency = i1291[1]
  i1290.m_Angle = i1291[2]
  return i1290
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1293 = data
  i1292.m_LowerTranslation = i1293[0]
  i1292.m_UpperTranslation = i1293[1]
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1294 = root || new pc.UnityMaterial()
  var i1295 = data
  i1294.name = i1295[0]
  request.r(i1295[1], i1295[2], 0, i1294, 'shader')
  i1294.renderQueue = i1295[3]
  i1294.enableInstancing = !!i1295[4]
  var i1297 = i1295[5]
  var i1296 = []
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1297[i + 0]) );
  }
  i1294.floatParameters = i1296
  var i1299 = i1295[6]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1299[i + 0]) );
  }
  i1294.colorParameters = i1298
  var i1301 = i1295[7]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1301[i + 0]) );
  }
  i1294.vectorParameters = i1300
  var i1303 = i1295[8]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1303[i + 0]) );
  }
  i1294.textureParameters = i1302
  var i1305 = i1295[9]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1305[i + 0]) );
  }
  i1294.materialFlags = i1304
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1309 = data
  i1308.name = i1309[0]
  i1308.value = i1309[1]
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1313 = data
  i1312.name = i1313[0]
  i1312.value = new pc.Color(i1313[1], i1313[2], i1313[3], i1313[4])
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1317 = data
  i1316.name = i1317[0]
  i1316.value = new pc.Vec4( i1317[1], i1317[2], i1317[3], i1317[4] )
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1321 = data
  i1320.name = i1321[0]
  request.r(i1321[1], i1321[2], 0, i1320, 'value')
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1325 = data
  i1324.name = i1325[0]
  i1324.enabled = !!i1325[1]
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1327 = data
  i1326.name = i1327[0]
  i1326.width = i1327[1]
  i1326.height = i1327[2]
  i1326.mipmapCount = i1327[3]
  i1326.anisoLevel = i1327[4]
  i1326.filterMode = i1327[5]
  i1326.hdr = !!i1327[6]
  i1326.format = i1327[7]
  i1326.wrapMode = i1327[8]
  i1326.alphaIsTransparency = !!i1327[9]
  i1326.alphaSource = i1327[10]
  i1326.graphicsFormat = i1327[11]
  i1326.sRGBTexture = !!i1327[12]
  i1326.desiredColorSpace = i1327[13]
  i1326.wrapU = i1327[14]
  i1326.wrapV = i1327[15]
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1329 = data
  i1328.name = i1329[0]
  i1328.index = i1329[1]
  i1328.startup = !!i1329[2]
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1331 = data
  i1330.position = new pc.Vec3( i1331[0], i1331[1], i1331[2] )
  i1330.scale = new pc.Vec3( i1331[3], i1331[4], i1331[5] )
  i1330.rotation = new pc.Quat(i1331[6], i1331[7], i1331[8], i1331[9])
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1333 = data
  i1332.enabled = !!i1333[0]
  i1332.aspect = i1333[1]
  i1332.orthographic = !!i1333[2]
  i1332.orthographicSize = i1333[3]
  i1332.backgroundColor = new pc.Color(i1333[4], i1333[5], i1333[6], i1333[7])
  i1332.nearClipPlane = i1333[8]
  i1332.farClipPlane = i1333[9]
  i1332.fieldOfView = i1333[10]
  i1332.depth = i1333[11]
  i1332.clearFlags = i1333[12]
  i1332.cullingMask = i1333[13]
  i1332.rect = i1333[14]
  request.r(i1333[15], i1333[16], 0, i1332, 'targetTexture')
  i1332.usePhysicalProperties = !!i1333[17]
  i1332.focalLength = i1333[18]
  i1332.sensorSize = new pc.Vec2( i1333[19], i1333[20] )
  i1332.lensShift = new pc.Vec2( i1333[21], i1333[22] )
  i1332.gateFit = i1333[23]
  i1332.commandBufferCount = i1333[24]
  i1332.cameraType = i1333[25]
  return i1332
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i1334 = root || request.c( 'CameraAspectFitter' )
  var i1335 = data
  request.r(i1335[0], i1335[1], 0, i1334, 'targetSprite')
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1337 = data
  i1336.name = i1337[0]
  i1336.tagId = i1337[1]
  i1336.enabled = !!i1337[2]
  i1336.isStatic = !!i1337[3]
  i1336.layer = i1337[4]
  return i1336
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i1338 = root || request.c( 'AudioManager' )
  var i1339 = data
  request.r(i1339[0], i1339[1], 0, i1338, 'library')
  i1338.sfxPoolSize = i1339[2]
  return i1338
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i1340 = root || request.c( 'TaskManager' )
  var i1341 = data
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1343 = data
  i1342.enabled = !!i1343[0]
  request.r(i1343[1], i1343[2], 0, i1342, 'sharedMaterial')
  var i1345 = i1343[3]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 2) {
  request.r(i1345[i + 0], i1345[i + 1], 2, i1344, '')
  }
  i1342.sharedMaterials = i1344
  i1342.receiveShadows = !!i1343[4]
  i1342.shadowCastingMode = i1343[5]
  i1342.sortingLayerID = i1343[6]
  i1342.sortingOrder = i1343[7]
  i1342.lightmapIndex = i1343[8]
  i1342.lightmapSceneIndex = i1343[9]
  i1342.lightmapScaleOffset = new pc.Vec4( i1343[10], i1343[11], i1343[12], i1343[13] )
  i1342.lightProbeUsage = i1343[14]
  i1342.reflectionProbeUsage = i1343[15]
  i1342.color = new pc.Color(i1343[16], i1343[17], i1343[18], i1343[19])
  request.r(i1343[20], i1343[21], 0, i1342, 'sprite')
  i1342.flipX = !!i1343[22]
  i1342.flipY = !!i1343[23]
  i1342.drawMode = i1343[24]
  i1342.size = new pc.Vec2( i1343[25], i1343[26] )
  i1342.tileMode = i1343[27]
  i1342.adaptiveModeThreshold = i1343[28]
  i1342.maskInteraction = i1343[29]
  i1342.spriteSortPoint = i1343[30]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1349 = data
  i1348.pivot = new pc.Vec2( i1349[0], i1349[1] )
  i1348.anchorMin = new pc.Vec2( i1349[2], i1349[3] )
  i1348.anchorMax = new pc.Vec2( i1349[4], i1349[5] )
  i1348.sizeDelta = new pc.Vec2( i1349[6], i1349[7] )
  i1348.anchoredPosition3D = new pc.Vec3( i1349[8], i1349[9], i1349[10] )
  i1348.rotation = new pc.Quat(i1349[11], i1349[12], i1349[13], i1349[14])
  i1348.scale = new pc.Vec3( i1349[15], i1349[16], i1349[17] )
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1351 = data
  i1350.enabled = !!i1351[0]
  i1350.planeDistance = i1351[1]
  i1350.referencePixelsPerUnit = i1351[2]
  i1350.isFallbackOverlay = !!i1351[3]
  i1350.renderMode = i1351[4]
  i1350.renderOrder = i1351[5]
  i1350.sortingLayerName = i1351[6]
  i1350.sortingOrder = i1351[7]
  i1350.scaleFactor = i1351[8]
  request.r(i1351[9], i1351[10], 0, i1350, 'worldCamera')
  i1350.overrideSorting = !!i1351[11]
  i1350.pixelPerfect = !!i1351[12]
  i1350.targetDisplay = i1351[13]
  i1350.overridePixelPerfect = !!i1351[14]
  return i1350
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1352 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1353 = data
  i1352.m_UiScaleMode = i1353[0]
  i1352.m_ReferencePixelsPerUnit = i1353[1]
  i1352.m_ScaleFactor = i1353[2]
  i1352.m_ReferenceResolution = new pc.Vec2( i1353[3], i1353[4] )
  i1352.m_ScreenMatchMode = i1353[5]
  i1352.m_MatchWidthOrHeight = i1353[6]
  i1352.m_PhysicalUnit = i1353[7]
  i1352.m_FallbackScreenDPI = i1353[8]
  i1352.m_DefaultSpriteDPI = i1353[9]
  i1352.m_DynamicPixelsPerUnit = i1353[10]
  i1352.m_PresetInfoIsWorld = !!i1353[11]
  return i1352
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1354 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1355 = data
  i1354.m_IgnoreReversedGraphics = !!i1355[0]
  i1354.m_BlockingObjects = i1355[1]
  i1354.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1355[2] )
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1357 = data
  i1356.cullTransparentMesh = !!i1357[0]
  return i1356
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1358 = root || request.c( 'UnityEngine.UI.Image' )
  var i1359 = data
  request.r(i1359[0], i1359[1], 0, i1358, 'm_Sprite')
  i1358.m_Type = i1359[2]
  i1358.m_PreserveAspect = !!i1359[3]
  i1358.m_FillCenter = !!i1359[4]
  i1358.m_FillMethod = i1359[5]
  i1358.m_FillAmount = i1359[6]
  i1358.m_FillClockwise = !!i1359[7]
  i1358.m_FillOrigin = i1359[8]
  i1358.m_UseSpriteMesh = !!i1359[9]
  i1358.m_PixelsPerUnitMultiplier = i1359[10]
  request.r(i1359[11], i1359[12], 0, i1358, 'm_Material')
  i1358.m_Maskable = !!i1359[13]
  i1358.m_Color = new pc.Color(i1359[14], i1359[15], i1359[16], i1359[17])
  i1358.m_RaycastTarget = !!i1359[18]
  i1358.m_RaycastPadding = new pc.Vec4( i1359[19], i1359[20], i1359[21], i1359[22] )
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1361 = data
  i1360.m_Alpha = i1361[0]
  i1360.m_Interactable = !!i1361[1]
  i1360.m_BlocksRaycasts = !!i1361[2]
  i1360.m_IgnoreParentGroups = !!i1361[3]
  i1360.enabled = !!i1361[4]
  return i1360
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i1362 = root || request.c( 'CanvasGroupAnimator' )
  var i1363 = data
  request.r(i1363[0], i1363[1], 0, i1362, 'canvasGroup')
  i1362.animateFade = !!i1363[2]
  i1362.triggerOnStart = !!i1363[3]
  i1362.isLooping = !!i1363[4]
  i1362.fadeTo = i1363[5]
  i1362.fadeDuration = i1363[6]
  i1362.fadeEaseType = i1363[7]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1365 = data
  request.r(i1365[0], i1365[1], 0, i1364, 'animatorController')
  request.r(i1365[2], i1365[3], 0, i1364, 'avatar')
  i1364.updateMode = i1365[4]
  i1364.hasTransformHierarchy = !!i1365[5]
  i1364.applyRootMotion = !!i1365[6]
  var i1367 = i1365[7]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 2) {
  request.r(i1367[i + 0], i1367[i + 1], 2, i1366, '')
  }
  i1364.humanBones = i1366
  i1364.enabled = !!i1365[8]
  return i1364
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1370 = root || request.c( 'UnityEngine.UI.Button' )
  var i1371 = data
  i1370.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1371[0], i1370.m_OnClick)
  i1370.m_Navigation = request.d('UnityEngine.UI.Navigation', i1371[1], i1370.m_Navigation)
  i1370.m_Transition = i1371[2]
  i1370.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1371[3], i1370.m_Colors)
  i1370.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1371[4], i1370.m_SpriteState)
  i1370.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1371[5], i1370.m_AnimationTriggers)
  i1370.m_Interactable = !!i1371[6]
  request.r(i1371[7], i1371[8], 0, i1370, 'm_TargetGraphic')
  return i1370
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1372 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1373 = data
  i1372.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1373[0], i1372.m_PersistentCalls)
  return i1372
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1374 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1375 = data
  var i1377 = i1375[0]
  var i1376 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.add(request.d('UnityEngine.Events.PersistentCall', i1377[i + 0]));
  }
  i1374.m_Calls = i1376
  return i1374
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1380 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1381 = data
  request.r(i1381[0], i1381[1], 0, i1380, 'm_Target')
  i1380.m_TargetAssemblyTypeName = i1381[2]
  i1380.m_MethodName = i1381[3]
  i1380.m_Mode = i1381[4]
  i1380.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1381[5], i1380.m_Arguments)
  i1380.m_CallState = i1381[6]
  return i1380
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1382 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1383 = data
  request.r(i1383[0], i1383[1], 0, i1382, 'm_ObjectArgument')
  i1382.m_ObjectArgumentAssemblyTypeName = i1383[2]
  i1382.m_IntArgument = i1383[3]
  i1382.m_FloatArgument = i1383[4]
  i1382.m_StringArgument = i1383[5]
  i1382.m_BoolArgument = !!i1383[6]
  return i1382
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1384 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1385 = data
  i1384.m_Mode = i1385[0]
  i1384.m_WrapAround = !!i1385[1]
  request.r(i1385[2], i1385[3], 0, i1384, 'm_SelectOnUp')
  request.r(i1385[4], i1385[5], 0, i1384, 'm_SelectOnDown')
  request.r(i1385[6], i1385[7], 0, i1384, 'm_SelectOnLeft')
  request.r(i1385[8], i1385[9], 0, i1384, 'm_SelectOnRight')
  return i1384
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1386 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1387 = data
  i1386.m_NormalColor = new pc.Color(i1387[0], i1387[1], i1387[2], i1387[3])
  i1386.m_HighlightedColor = new pc.Color(i1387[4], i1387[5], i1387[6], i1387[7])
  i1386.m_PressedColor = new pc.Color(i1387[8], i1387[9], i1387[10], i1387[11])
  i1386.m_SelectedColor = new pc.Color(i1387[12], i1387[13], i1387[14], i1387[15])
  i1386.m_DisabledColor = new pc.Color(i1387[16], i1387[17], i1387[18], i1387[19])
  i1386.m_ColorMultiplier = i1387[20]
  i1386.m_FadeDuration = i1387[21]
  return i1386
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1388 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1389 = data
  request.r(i1389[0], i1389[1], 0, i1388, 'm_HighlightedSprite')
  request.r(i1389[2], i1389[3], 0, i1388, 'm_PressedSprite')
  request.r(i1389[4], i1389[5], 0, i1388, 'm_SelectedSprite')
  request.r(i1389[6], i1389[7], 0, i1388, 'm_DisabledSprite')
  return i1388
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1390 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1391 = data
  i1390.m_NormalTrigger = i1391[0]
  i1390.m_HighlightedTrigger = i1391[1]
  i1390.m_PressedTrigger = i1391[2]
  i1390.m_SelectedTrigger = i1391[3]
  i1390.m_DisabledTrigger = i1391[4]
  return i1390
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1392 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1393 = data
  i1392.m_Spacing = i1393[0]
  i1392.m_ChildForceExpandWidth = !!i1393[1]
  i1392.m_ChildForceExpandHeight = !!i1393[2]
  i1392.m_ChildControlWidth = !!i1393[3]
  i1392.m_ChildControlHeight = !!i1393[4]
  i1392.m_ChildScaleWidth = !!i1393[5]
  i1392.m_ChildScaleHeight = !!i1393[6]
  i1392.m_ReverseArrangement = !!i1393[7]
  i1392.m_Padding = UnityEngine.RectOffset.FromPaddings(i1393[8], i1393[9], i1393[10], i1393[11])
  i1392.m_ChildAlignment = i1393[12]
  return i1392
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1394 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1395 = data
  i1394.m_ShowMaskGraphic = !!i1395[0]
  return i1394
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i1396 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i1397 = data
  request.r(i1397[0], i1397[1], 0, i1396, 'm_Content')
  i1396.m_Horizontal = !!i1397[2]
  i1396.m_Vertical = !!i1397[3]
  i1396.m_MovementType = i1397[4]
  i1396.m_Elasticity = i1397[5]
  i1396.m_Inertia = !!i1397[6]
  i1396.m_DecelerationRate = i1397[7]
  i1396.m_ScrollSensitivity = i1397[8]
  request.r(i1397[9], i1397[10], 0, i1396, 'm_Viewport')
  request.r(i1397[11], i1397[12], 0, i1396, 'm_HorizontalScrollbar')
  request.r(i1397[13], i1397[14], 0, i1396, 'm_VerticalScrollbar')
  i1396.m_HorizontalScrollbarVisibility = i1397[15]
  i1396.m_VerticalScrollbarVisibility = i1397[16]
  i1396.m_HorizontalScrollbarSpacing = i1397[17]
  i1396.m_VerticalScrollbarSpacing = i1397[18]
  i1396.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i1397[19], i1396.m_OnValueChanged)
  return i1396
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i1398 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i1399 = data
  i1398.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1399[0], i1398.m_PersistentCalls)
  return i1398
}

Deserializers["DragToResizeLeft"] = function (request, data, root) {
  var i1400 = root || request.c( 'DragToResizeLeft' )
  var i1401 = data
  request.r(i1401[0], i1401[1], 0, i1400, 'target')
  i1400.minWidth = i1401[2]
  return i1400
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1402 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1403 = data
  request.r(i1403[0], i1403[1], 0, i1402, 'm_FirstSelected')
  i1402.m_sendNavigationEvents = !!i1403[2]
  i1402.m_DragThreshold = i1403[3]
  return i1402
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1404 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1405 = data
  i1404.m_HorizontalAxis = i1405[0]
  i1404.m_VerticalAxis = i1405[1]
  i1404.m_SubmitButton = i1405[2]
  i1404.m_CancelButton = i1405[3]
  i1404.m_InputActionsPerSecond = i1405[4]
  i1404.m_RepeatDelay = i1405[5]
  i1404.m_ForceModuleActive = !!i1405[6]
  i1404.m_SendPointerHoverToParent = !!i1405[7]
  return i1404
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i1406 = root || request.c( 'ButtonPulse' )
  var i1407 = data
  i1406.scaleAmount = i1407[0]
  i1406.pulseDuration = i1407[1]
  return i1406
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i1408 = root || request.c( 'StartClickHandler' )
  var i1409 = data
  return i1408
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1410 = root || request.c( 'GameManager' )
  var i1411 = data
  request.r(i1411[0], i1411[1], 0, i1410, 'endPanel')
  i1410.end = !!i1411[2]
  request.r(i1411[3], i1411[4], 0, i1410, 'hand')
  request.r(i1411[5], i1411[6], 0, i1410, 'hand2')
  i1410.enableSound = !!i1411[7]
  request.r(i1411[8], i1411[9], 0, i1410, 'startClickHandler')
  i1410.currentScore = i1411[10]
  request.r(i1411[11], i1411[12], 0, i1410, 'BodyToSummarize')
  request.r(i1411[13], i1411[14], 0, i1410, 'SummarizedText')
  request.r(i1411[15], i1411[16], 0, i1410, 'transcriptBtnBlue')
  request.r(i1411[17], i1411[18], 0, i1410, 'transcriptBtn')
  request.r(i1411[19], i1411[20], 0, i1410, 'summaryBtn')
  request.r(i1411[21], i1411[22], 0, i1410, 'summaryBtnBlue')
  request.r(i1411[23], i1411[24], 0, i1410, 'mainPanel')
  request.r(i1411[25], i1411[26], 0, i1410, 'handle1')
  request.r(i1411[27], i1411[28], 0, i1410, 'animator')
  request.r(i1411[29], i1411[30], 0, i1410, 'maskA')
  request.r(i1411[31], i1411[32], 0, i1410, 'filter')
  request.r(i1411[33], i1411[34], 0, i1410, 'arrow')
  request.r(i1411[35], i1411[36], 0, i1410, 'toTap')
  request.r(i1411[37], i1411[38], 0, i1410, 'openingPanel')
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1413 = data
  i1412.ambientIntensity = i1413[0]
  i1412.reflectionIntensity = i1413[1]
  i1412.ambientMode = i1413[2]
  i1412.ambientLight = new pc.Color(i1413[3], i1413[4], i1413[5], i1413[6])
  i1412.ambientSkyColor = new pc.Color(i1413[7], i1413[8], i1413[9], i1413[10])
  i1412.ambientGroundColor = new pc.Color(i1413[11], i1413[12], i1413[13], i1413[14])
  i1412.ambientEquatorColor = new pc.Color(i1413[15], i1413[16], i1413[17], i1413[18])
  i1412.fogColor = new pc.Color(i1413[19], i1413[20], i1413[21], i1413[22])
  i1412.fogEndDistance = i1413[23]
  i1412.fogStartDistance = i1413[24]
  i1412.fogDensity = i1413[25]
  i1412.fog = !!i1413[26]
  request.r(i1413[27], i1413[28], 0, i1412, 'skybox')
  i1412.fogMode = i1413[29]
  var i1415 = i1413[30]
  var i1414 = []
  for(var i = 0; i < i1415.length; i += 1) {
    i1414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1415[i + 0]) );
  }
  i1412.lightmaps = i1414
  i1412.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1413[31], i1412.lightProbes)
  i1412.lightmapsMode = i1413[32]
  i1412.mixedBakeMode = i1413[33]
  i1412.environmentLightingMode = i1413[34]
  i1412.ambientProbe = new pc.SphericalHarmonicsL2(i1413[35])
  i1412.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1413[36])
  i1412.useReferenceAmbientProbe = !!i1413[37]
  request.r(i1413[38], i1413[39], 0, i1412, 'customReflection')
  request.r(i1413[40], i1413[41], 0, i1412, 'defaultReflection')
  i1412.defaultReflectionMode = i1413[42]
  i1412.defaultReflectionResolution = i1413[43]
  i1412.sunLightObjectId = i1413[44]
  i1412.pixelLightCount = i1413[45]
  i1412.defaultReflectionHDR = !!i1413[46]
  i1412.hasLightDataAsset = !!i1413[47]
  i1412.hasManualGenerate = !!i1413[48]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1419 = data
  request.r(i1419[0], i1419[1], 0, i1418, 'lightmapColor')
  request.r(i1419[2], i1419[3], 0, i1418, 'lightmapDirection')
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1420 = root || new UnityEngine.LightProbes()
  var i1421 = data
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1429 = data
  var i1431 = i1429[0]
  var i1430 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1431[i + 0]));
  }
  i1428.ShaderCompilationErrors = i1430
  i1428.name = i1429[1]
  i1428.guid = i1429[2]
  var i1433 = i1429[3]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( i1433[i + 0] );
  }
  i1428.shaderDefinedKeywords = i1432
  var i1435 = i1429[4]
  var i1434 = []
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1435[i + 0]) );
  }
  i1428.passes = i1434
  var i1437 = i1429[5]
  var i1436 = []
  for(var i = 0; i < i1437.length; i += 1) {
    i1436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1437[i + 0]) );
  }
  i1428.usePasses = i1436
  var i1439 = i1429[6]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1439[i + 0]) );
  }
  i1428.defaultParameterValues = i1438
  request.r(i1429[7], i1429[8], 0, i1428, 'unityFallbackShader')
  i1428.readDepth = !!i1429[9]
  i1428.isCreatedByShaderGraph = !!i1429[10]
  i1428.compiled = !!i1429[11]
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1443 = data
  i1442.shaderName = i1443[0]
  i1442.errorMessage = i1443[1]
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1448 = root || new pc.UnityShaderPass()
  var i1449 = data
  i1448.id = i1449[0]
  i1448.subShaderIndex = i1449[1]
  i1448.name = i1449[2]
  i1448.passType = i1449[3]
  i1448.grabPassTextureName = i1449[4]
  i1448.usePass = !!i1449[5]
  i1448.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1449[6], i1448.zTest)
  i1448.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1449[7], i1448.zWrite)
  i1448.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1449[8], i1448.culling)
  i1448.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1449[9], i1448.blending)
  i1448.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1449[10], i1448.alphaBlending)
  i1448.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1449[11], i1448.colorWriteMask)
  i1448.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1449[12], i1448.offsetUnits)
  i1448.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1449[13], i1448.offsetFactor)
  i1448.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1449[14], i1448.stencilRef)
  i1448.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1449[15], i1448.stencilReadMask)
  i1448.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1449[16], i1448.stencilWriteMask)
  i1448.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1449[17], i1448.stencilOp)
  i1448.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1449[18], i1448.stencilOpFront)
  i1448.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1449[19], i1448.stencilOpBack)
  var i1451 = i1449[20]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1451[i + 0]) );
  }
  i1448.tags = i1450
  var i1453 = i1449[21]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( i1453[i + 0] );
  }
  i1448.passDefinedKeywords = i1452
  var i1455 = i1449[22]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1455[i + 0]) );
  }
  i1448.passDefinedKeywordGroups = i1454
  var i1457 = i1449[23]
  var i1456 = []
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1457[i + 0]) );
  }
  i1448.variants = i1456
  var i1459 = i1449[24]
  var i1458 = []
  for(var i = 0; i < i1459.length; i += 1) {
    i1458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1459[i + 0]) );
  }
  i1448.excludedVariants = i1458
  i1448.hasDepthReader = !!i1449[25]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1461 = data
  i1460.val = i1461[0]
  i1460.name = i1461[1]
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1463 = data
  i1462.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1463[0], i1462.src)
  i1462.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1463[1], i1462.dst)
  i1462.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1463[2], i1462.op)
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1465 = data
  i1464.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1465[0], i1464.pass)
  i1464.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1465[1], i1464.fail)
  i1464.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1465[2], i1464.zFail)
  i1464.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1465[3], i1464.comp)
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1469 = data
  i1468.name = i1469[0]
  i1468.value = i1469[1]
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1473 = data
  var i1475 = i1473[0]
  var i1474 = []
  for(var i = 0; i < i1475.length; i += 1) {
    i1474.push( i1475[i + 0] );
  }
  i1472.keywords = i1474
  i1472.hasDiscard = !!i1473[1]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1479 = data
  i1478.passId = i1479[0]
  i1478.subShaderIndex = i1479[1]
  var i1481 = i1479[2]
  var i1480 = []
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.push( i1481[i + 0] );
  }
  i1478.keywords = i1480
  i1478.vertexProgram = i1479[3]
  i1478.fragmentProgram = i1479[4]
  i1478.exportedForWebGl2 = !!i1479[5]
  i1478.readDepth = !!i1479[6]
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1485 = data
  request.r(i1485[0], i1485[1], 0, i1484, 'shader')
  i1484.pass = i1485[2]
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1489 = data
  i1488.name = i1489[0]
  i1488.type = i1489[1]
  i1488.value = new pc.Vec4( i1489[2], i1489[3], i1489[4], i1489[5] )
  i1488.textureValue = i1489[6]
  i1488.shaderPropertyFlag = i1489[7]
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1491 = data
  i1490.name = i1491[0]
  request.r(i1491[1], i1491[2], 0, i1490, 'texture')
  i1490.aabb = i1491[3]
  i1490.vertices = i1491[4]
  i1490.triangles = i1491[5]
  i1490.textureRect = UnityEngine.Rect.MinMaxRect(i1491[6], i1491[7], i1491[8], i1491[9])
  i1490.packedRect = UnityEngine.Rect.MinMaxRect(i1491[10], i1491[11], i1491[12], i1491[13])
  i1490.border = new pc.Vec4( i1491[14], i1491[15], i1491[16], i1491[17] )
  i1490.transparency = i1491[18]
  i1490.bounds = i1491[19]
  i1490.pixelsPerUnit = i1491[20]
  i1490.textureWidth = i1491[21]
  i1490.textureHeight = i1491[22]
  i1490.nativeSize = new pc.Vec2( i1491[23], i1491[24] )
  i1490.pivot = new pc.Vec2( i1491[25], i1491[26] )
  i1490.textureRectOffset = new pc.Vec2( i1491[27], i1491[28] )
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1493 = data
  i1492.name = i1493[0]
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1495 = data
  i1494.name = i1495[0]
  i1494.wrapMode = i1495[1]
  i1494.isLooping = !!i1495[2]
  i1494.length = i1495[3]
  var i1497 = i1495[4]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1497[i + 0]) );
  }
  i1494.curves = i1496
  var i1499 = i1495[5]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1499[i + 0]) );
  }
  i1494.events = i1498
  i1494.halfPrecision = !!i1495[6]
  i1494._frameRate = i1495[7]
  i1494.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1495[8], i1494.localBounds)
  i1494.hasMuscleCurves = !!i1495[9]
  var i1501 = i1495[10]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 1) {
    i1500.push( i1501[i + 0] );
  }
  i1494.clipMuscleConstant = i1500
  i1494.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1495[11], i1494.clipBindingConstant)
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1505 = data
  i1504.path = i1505[0]
  i1504.hash = i1505[1]
  i1504.componentType = i1505[2]
  i1504.property = i1505[3]
  i1504.keys = i1505[4]
  var i1507 = i1505[5]
  var i1506 = []
  for(var i = 0; i < i1507.length; i += 1) {
    i1506.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1507[i + 0]) );
  }
  i1504.objectReferenceKeys = i1506
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1511 = data
  i1510.time = i1511[0]
  request.r(i1511[1], i1511[2], 0, i1510, 'value')
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1515 = data
  i1514.functionName = i1515[0]
  i1514.floatParameter = i1515[1]
  i1514.intParameter = i1515[2]
  i1514.stringParameter = i1515[3]
  request.r(i1515[4], i1515[5], 0, i1514, 'objectReferenceParameter')
  i1514.time = i1515[6]
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1517 = data
  i1516.center = new pc.Vec3( i1517[0], i1517[1], i1517[2] )
  i1516.extends = new pc.Vec3( i1517[3], i1517[4], i1517[5] )
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1521 = data
  var i1523 = i1521[0]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( i1523[i + 0] );
  }
  i1520.genericBindings = i1522
  var i1525 = i1521[1]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 1) {
    i1524.push( i1525[i + 0] );
  }
  i1520.pptrCurveMapping = i1524
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1527 = data
  i1526.name = i1527[0]
  var i1529 = i1527[1]
  var i1528 = []
  for(var i = 0; i < i1529.length; i += 1) {
    i1528.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1529[i + 0]) );
  }
  i1526.layers = i1528
  var i1531 = i1527[2]
  var i1530 = []
  for(var i = 0; i < i1531.length; i += 1) {
    i1530.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1531[i + 0]) );
  }
  i1526.parameters = i1530
  i1526.animationClips = i1527[3]
  i1526.avatarUnsupported = i1527[4]
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1535 = data
  i1534.name = i1535[0]
  i1534.defaultWeight = i1535[1]
  i1534.blendingMode = i1535[2]
  i1534.avatarMask = i1535[3]
  i1534.syncedLayerIndex = i1535[4]
  i1534.syncedLayerAffectsTiming = !!i1535[5]
  i1534.syncedLayers = i1535[6]
  i1534.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1535[7], i1534.stateMachine)
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1537 = data
  i1536.id = i1537[0]
  i1536.name = i1537[1]
  i1536.path = i1537[2]
  var i1539 = i1537[3]
  var i1538 = []
  for(var i = 0; i < i1539.length; i += 1) {
    i1538.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1539[i + 0]) );
  }
  i1536.states = i1538
  var i1541 = i1537[4]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1541[i + 0]) );
  }
  i1536.machines = i1540
  var i1543 = i1537[5]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1543[i + 0]) );
  }
  i1536.entryStateTransitions = i1542
  var i1545 = i1537[6]
  var i1544 = []
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1545[i + 0]) );
  }
  i1536.exitStateTransitions = i1544
  var i1547 = i1537[7]
  var i1546 = []
  for(var i = 0; i < i1547.length; i += 1) {
    i1546.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1547[i + 0]) );
  }
  i1536.anyStateTransitions = i1546
  i1536.defaultStateId = i1537[8]
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1551 = data
  i1550.id = i1551[0]
  i1550.name = i1551[1]
  i1550.cycleOffset = i1551[2]
  i1550.cycleOffsetParameter = i1551[3]
  i1550.cycleOffsetParameterActive = !!i1551[4]
  i1550.mirror = !!i1551[5]
  i1550.mirrorParameter = i1551[6]
  i1550.mirrorParameterActive = !!i1551[7]
  i1550.motionId = i1551[8]
  i1550.nameHash = i1551[9]
  i1550.fullPathHash = i1551[10]
  i1550.speed = i1551[11]
  i1550.speedParameter = i1551[12]
  i1550.speedParameterActive = !!i1551[13]
  i1550.tag = i1551[14]
  i1550.tagHash = i1551[15]
  i1550.writeDefaultValues = !!i1551[16]
  var i1553 = i1551[17]
  var i1552 = []
  for(var i = 0; i < i1553.length; i += 2) {
  request.r(i1553[i + 0], i1553[i + 1], 2, i1552, '')
  }
  i1550.behaviours = i1552
  var i1555 = i1551[18]
  var i1554 = []
  for(var i = 0; i < i1555.length; i += 1) {
    i1554.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1555[i + 0]) );
  }
  i1550.transitions = i1554
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1561 = data
  i1560.fullPath = i1561[0]
  i1560.canTransitionToSelf = !!i1561[1]
  i1560.duration = i1561[2]
  i1560.exitTime = i1561[3]
  i1560.hasExitTime = !!i1561[4]
  i1560.hasFixedDuration = !!i1561[5]
  i1560.interruptionSource = i1561[6]
  i1560.offset = i1561[7]
  i1560.orderedInterruption = !!i1561[8]
  i1560.destinationStateId = i1561[9]
  i1560.isExit = !!i1561[10]
  i1560.mute = !!i1561[11]
  i1560.solo = !!i1561[12]
  var i1563 = i1561[13]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 1) {
    i1562.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1563[i + 0]) );
  }
  i1560.conditions = i1562
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1569 = data
  i1568.destinationStateId = i1569[0]
  i1568.isExit = !!i1569[1]
  i1568.mute = !!i1569[2]
  i1568.solo = !!i1569[3]
  var i1571 = i1569[4]
  var i1570 = []
  for(var i = 0; i < i1571.length; i += 1) {
    i1570.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1571[i + 0]) );
  }
  i1568.conditions = i1570
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1575 = data
  i1574.defaultBool = !!i1575[0]
  i1574.defaultFloat = i1575[1]
  i1574.defaultInt = i1575[2]
  i1574.name = i1575[3]
  i1574.nameHash = i1575[4]
  i1574.type = i1575[5]
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1579 = data
  i1578.mode = i1579[0]
  i1578.parameter = i1579[1]
  i1578.threshold = i1579[2]
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1581 = data
  i1580.name = i1581[0]
  i1580.bytes64 = i1581[1]
  i1580.data = i1581[2]
  return i1580
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i1582 = root || request.c( 'AudioLibrary' )
  var i1583 = data
  var i1585 = i1583[0]
  var i1584 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i1585.length; i += 1) {
    i1584.add(request.d('AudioLibrary+ClipEntry', i1585[i + 0]));
  }
  i1582.clips = i1584
  return i1582
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i1588 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i1589 = data
  i1588.key = i1589[0]
  i1588.channel = i1589[1]
  request.r(i1589[2], i1589[3], 0, i1588, 'clip')
  i1588.volume = i1589[4]
  i1588.loop = !!i1589[5]
  return i1588
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1590 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1591 = data
  i1590.useSafeMode = !!i1591[0]
  i1590.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1591[1], i1590.safeModeOptions)
  i1590.timeScale = i1591[2]
  i1590.unscaledTimeScale = i1591[3]
  i1590.useSmoothDeltaTime = !!i1591[4]
  i1590.maxSmoothUnscaledTime = i1591[5]
  i1590.rewindCallbackMode = i1591[6]
  i1590.showUnityEditorReport = !!i1591[7]
  i1590.logBehaviour = i1591[8]
  i1590.drawGizmos = !!i1591[9]
  i1590.defaultRecyclable = !!i1591[10]
  i1590.defaultAutoPlay = i1591[11]
  i1590.defaultUpdateType = i1591[12]
  i1590.defaultTimeScaleIndependent = !!i1591[13]
  i1590.defaultEaseType = i1591[14]
  i1590.defaultEaseOvershootOrAmplitude = i1591[15]
  i1590.defaultEasePeriod = i1591[16]
  i1590.defaultAutoKill = !!i1591[17]
  i1590.defaultLoopType = i1591[18]
  i1590.debugMode = !!i1591[19]
  i1590.debugStoreTargetId = !!i1591[20]
  i1590.showPreviewPanel = !!i1591[21]
  i1590.storeSettingsLocation = i1591[22]
  i1590.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1591[23], i1590.modules)
  i1590.createASMDEF = !!i1591[24]
  i1590.showPlayingTweens = !!i1591[25]
  i1590.showPausedTweens = !!i1591[26]
  return i1590
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1592 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1593 = data
  i1592.logBehaviour = i1593[0]
  i1592.nestedTweenFailureBehaviour = i1593[1]
  return i1592
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1594 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1595 = data
  i1594.showPanel = !!i1595[0]
  i1594.audioEnabled = !!i1595[1]
  i1594.physicsEnabled = !!i1595[2]
  i1594.physics2DEnabled = !!i1595[3]
  i1594.spriteEnabled = !!i1595[4]
  i1594.uiEnabled = !!i1595[5]
  i1594.textMeshProEnabled = !!i1595[6]
  i1594.tk2DEnabled = !!i1595[7]
  i1594.deAudioEnabled = !!i1595[8]
  i1594.deUnityExtendedEnabled = !!i1595[9]
  i1594.epoOutlineEnabled = !!i1595[10]
  return i1594
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1596 = root || request.c( 'TMPro.TMP_Settings' )
  var i1597 = data
  i1596.m_enableWordWrapping = !!i1597[0]
  i1596.m_enableKerning = !!i1597[1]
  i1596.m_enableExtraPadding = !!i1597[2]
  i1596.m_enableTintAllSprites = !!i1597[3]
  i1596.m_enableParseEscapeCharacters = !!i1597[4]
  i1596.m_EnableRaycastTarget = !!i1597[5]
  i1596.m_GetFontFeaturesAtRuntime = !!i1597[6]
  i1596.m_missingGlyphCharacter = i1597[7]
  i1596.m_warningsDisabled = !!i1597[8]
  request.r(i1597[9], i1597[10], 0, i1596, 'm_defaultFontAsset')
  i1596.m_defaultFontAssetPath = i1597[11]
  i1596.m_defaultFontSize = i1597[12]
  i1596.m_defaultAutoSizeMinRatio = i1597[13]
  i1596.m_defaultAutoSizeMaxRatio = i1597[14]
  i1596.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1597[15], i1597[16] )
  i1596.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1597[17], i1597[18] )
  i1596.m_autoSizeTextContainer = !!i1597[19]
  i1596.m_IsTextObjectScaleStatic = !!i1597[20]
  var i1599 = i1597[21]
  var i1598 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1599.length; i += 2) {
  request.r(i1599[i + 0], i1599[i + 1], 1, i1598, '')
  }
  i1596.m_fallbackFontAssets = i1598
  i1596.m_matchMaterialPreset = !!i1597[22]
  request.r(i1597[23], i1597[24], 0, i1596, 'm_defaultSpriteAsset')
  i1596.m_defaultSpriteAssetPath = i1597[25]
  i1596.m_enableEmojiSupport = !!i1597[26]
  i1596.m_MissingCharacterSpriteUnicode = i1597[27]
  i1596.m_defaultColorGradientPresetsPath = i1597[28]
  request.r(i1597[29], i1597[30], 0, i1596, 'm_defaultStyleSheet')
  i1596.m_StyleSheetsResourcePath = i1597[31]
  request.r(i1597[32], i1597[33], 0, i1596, 'm_leadingCharacters')
  request.r(i1597[34], i1597[35], 0, i1596, 'm_followingCharacters')
  i1596.m_UseModernHangulLineBreakingRules = !!i1597[36]
  return i1596
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1602 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1603 = data
  i1602.hashCode = i1603[0]
  request.r(i1603[1], i1603[2], 0, i1602, 'material')
  i1602.materialHashCode = i1603[3]
  request.r(i1603[4], i1603[5], 0, i1602, 'spriteSheet')
  var i1605 = i1603[6]
  var i1604 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.add(request.d('TMPro.TMP_Sprite', i1605[i + 0]));
  }
  i1602.spriteInfoList = i1604
  var i1607 = i1603[7]
  var i1606 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1607.length; i += 2) {
  request.r(i1607[i + 0], i1607[i + 1], 1, i1606, '')
  }
  i1602.fallbackSpriteAssets = i1606
  i1602.m_Version = i1603[8]
  i1602.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1603[9], i1602.m_FaceInfo)
  var i1609 = i1603[10]
  var i1608 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1609.length; i += 1) {
    i1608.add(request.d('TMPro.TMP_SpriteCharacter', i1609[i + 0]));
  }
  i1602.m_SpriteCharacterTable = i1608
  var i1611 = i1603[11]
  var i1610 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.add(request.d('TMPro.TMP_SpriteGlyph', i1611[i + 0]));
  }
  i1602.m_SpriteGlyphTable = i1610
  return i1602
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1614 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1615 = data
  i1614.name = i1615[0]
  i1614.hashCode = i1615[1]
  i1614.unicode = i1615[2]
  i1614.pivot = new pc.Vec2( i1615[3], i1615[4] )
  request.r(i1615[5], i1615[6], 0, i1614, 'sprite')
  i1614.id = i1615[7]
  i1614.x = i1615[8]
  i1614.y = i1615[9]
  i1614.width = i1615[10]
  i1614.height = i1615[11]
  i1614.xOffset = i1615[12]
  i1614.yOffset = i1615[13]
  i1614.xAdvance = i1615[14]
  i1614.scale = i1615[15]
  return i1614
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1619 = data
  i1618.m_FaceIndex = i1619[0]
  i1618.m_FamilyName = i1619[1]
  i1618.m_StyleName = i1619[2]
  i1618.m_PointSize = i1619[3]
  i1618.m_Scale = i1619[4]
  i1618.m_UnitsPerEM = i1619[5]
  i1618.m_LineHeight = i1619[6]
  i1618.m_AscentLine = i1619[7]
  i1618.m_CapLine = i1619[8]
  i1618.m_MeanLine = i1619[9]
  i1618.m_Baseline = i1619[10]
  i1618.m_DescentLine = i1619[11]
  i1618.m_SuperscriptOffset = i1619[12]
  i1618.m_SuperscriptSize = i1619[13]
  i1618.m_SubscriptOffset = i1619[14]
  i1618.m_SubscriptSize = i1619[15]
  i1618.m_UnderlineOffset = i1619[16]
  i1618.m_UnderlineThickness = i1619[17]
  i1618.m_StrikethroughOffset = i1619[18]
  i1618.m_StrikethroughThickness = i1619[19]
  i1618.m_TabWidth = i1619[20]
  return i1618
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1622 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1623 = data
  i1622.m_Name = i1623[0]
  i1622.m_HashCode = i1623[1]
  i1622.m_ElementType = i1623[2]
  i1622.m_Unicode = i1623[3]
  i1622.m_GlyphIndex = i1623[4]
  i1622.m_Scale = i1623[5]
  return i1622
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1626 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1627 = data
  request.r(i1627[0], i1627[1], 0, i1626, 'sprite')
  i1626.m_Index = i1627[2]
  i1626.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1627[3], i1626.m_Metrics)
  i1626.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1627[4], i1626.m_GlyphRect)
  i1626.m_Scale = i1627[5]
  i1626.m_AtlasIndex = i1627[6]
  i1626.m_ClassDefinitionType = i1627[7]
  return i1626
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1628 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1629 = data
  i1628.m_Width = i1629[0]
  i1628.m_Height = i1629[1]
  i1628.m_HorizontalBearingX = i1629[2]
  i1628.m_HorizontalBearingY = i1629[3]
  i1628.m_HorizontalAdvance = i1629[4]
  return i1628
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1630 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1631 = data
  i1630.m_X = i1631[0]
  i1630.m_Y = i1631[1]
  i1630.m_Width = i1631[2]
  i1630.m_Height = i1631[3]
  return i1630
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1632 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1633 = data
  var i1635 = i1633[0]
  var i1634 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1635.length; i += 1) {
    i1634.add(request.d('TMPro.TMP_Style', i1635[i + 0]));
  }
  i1632.m_StyleList = i1634
  return i1632
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1638 = root || request.c( 'TMPro.TMP_Style' )
  var i1639 = data
  i1638.m_Name = i1639[0]
  i1638.m_HashCode = i1639[1]
  i1638.m_OpeningDefinition = i1639[2]
  i1638.m_ClosingDefinition = i1639[3]
  i1638.m_OpeningTagArray = i1639[4]
  i1638.m_ClosingTagArray = i1639[5]
  i1638.m_OpeningTagUnicodeArray = i1639[6]
  i1638.m_ClosingTagUnicodeArray = i1639[7]
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1641 = data
  var i1643 = i1641[0]
  var i1642 = []
  for(var i = 0; i < i1643.length; i += 1) {
    i1642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1643[i + 0]) );
  }
  i1640.files = i1642
  i1640.componentToPrefabIds = i1641[1]
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1647 = data
  i1646.path = i1647[0]
  request.r(i1647[1], i1647[2], 0, i1646, 'unityObject')
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1649 = data
  var i1651 = i1649[0]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1651[i + 0]) );
  }
  i1648.scriptsExecutionOrder = i1650
  var i1653 = i1649[1]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1653[i + 0]) );
  }
  i1648.sortingLayers = i1652
  var i1655 = i1649[2]
  var i1654 = []
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1655[i + 0]) );
  }
  i1648.cullingLayers = i1654
  i1648.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1649[3], i1648.timeSettings)
  i1648.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1649[4], i1648.physicsSettings)
  i1648.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1649[5], i1648.physics2DSettings)
  i1648.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1649[6], i1648.qualitySettings)
  i1648.enableRealtimeShadows = !!i1649[7]
  i1648.enableAutoInstancing = !!i1649[8]
  i1648.enableDynamicBatching = !!i1649[9]
  i1648.lightmapEncodingQuality = i1649[10]
  i1648.desiredColorSpace = i1649[11]
  var i1657 = i1649[12]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.push( i1657[i + 0] );
  }
  i1648.allTags = i1656
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1661 = data
  i1660.name = i1661[0]
  i1660.value = i1661[1]
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1665 = data
  i1664.id = i1665[0]
  i1664.name = i1665[1]
  i1664.value = i1665[2]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1669 = data
  i1668.id = i1669[0]
  i1668.name = i1669[1]
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1671 = data
  i1670.fixedDeltaTime = i1671[0]
  i1670.maximumDeltaTime = i1671[1]
  i1670.timeScale = i1671[2]
  i1670.maximumParticleTimestep = i1671[3]
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1673 = data
  i1672.gravity = new pc.Vec3( i1673[0], i1673[1], i1673[2] )
  i1672.defaultSolverIterations = i1673[3]
  i1672.bounceThreshold = i1673[4]
  i1672.autoSyncTransforms = !!i1673[5]
  i1672.autoSimulation = !!i1673[6]
  var i1675 = i1673[7]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1675[i + 0]) );
  }
  i1672.collisionMatrix = i1674
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1679 = data
  i1678.enabled = !!i1679[0]
  i1678.layerId = i1679[1]
  i1678.otherLayerId = i1679[2]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1681 = data
  request.r(i1681[0], i1681[1], 0, i1680, 'material')
  i1680.gravity = new pc.Vec2( i1681[2], i1681[3] )
  i1680.positionIterations = i1681[4]
  i1680.velocityIterations = i1681[5]
  i1680.velocityThreshold = i1681[6]
  i1680.maxLinearCorrection = i1681[7]
  i1680.maxAngularCorrection = i1681[8]
  i1680.maxTranslationSpeed = i1681[9]
  i1680.maxRotationSpeed = i1681[10]
  i1680.baumgarteScale = i1681[11]
  i1680.baumgarteTOIScale = i1681[12]
  i1680.timeToSleep = i1681[13]
  i1680.linearSleepTolerance = i1681[14]
  i1680.angularSleepTolerance = i1681[15]
  i1680.defaultContactOffset = i1681[16]
  i1680.autoSimulation = !!i1681[17]
  i1680.queriesHitTriggers = !!i1681[18]
  i1680.queriesStartInColliders = !!i1681[19]
  i1680.callbacksOnDisable = !!i1681[20]
  i1680.reuseCollisionCallbacks = !!i1681[21]
  i1680.autoSyncTransforms = !!i1681[22]
  var i1683 = i1681[23]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1683[i + 0]) );
  }
  i1680.collisionMatrix = i1682
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1687 = data
  i1686.enabled = !!i1687[0]
  i1686.layerId = i1687[1]
  i1686.otherLayerId = i1687[2]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1689 = data
  var i1691 = i1689[0]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1691[i + 0]) );
  }
  i1688.qualityLevels = i1690
  var i1693 = i1689[1]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( i1693[i + 0] );
  }
  i1688.names = i1692
  i1688.shadows = i1689[2]
  i1688.anisotropicFiltering = i1689[3]
  i1688.antiAliasing = i1689[4]
  i1688.lodBias = i1689[5]
  i1688.shadowCascades = i1689[6]
  i1688.shadowDistance = i1689[7]
  i1688.shadowmaskMode = i1689[8]
  i1688.shadowProjection = i1689[9]
  i1688.shadowResolution = i1689[10]
  i1688.softParticles = !!i1689[11]
  i1688.softVegetation = !!i1689[12]
  i1688.activeColorSpace = i1689[13]
  i1688.desiredColorSpace = i1689[14]
  i1688.masterTextureLimit = i1689[15]
  i1688.maxQueuedFrames = i1689[16]
  i1688.particleRaycastBudget = i1689[17]
  i1688.pixelLightCount = i1689[18]
  i1688.realtimeReflectionProbes = !!i1689[19]
  i1688.shadowCascade2Split = i1689[20]
  i1688.shadowCascade4Split = new pc.Vec3( i1689[21], i1689[22], i1689[23] )
  i1688.streamingMipmapsActive = !!i1689[24]
  i1688.vSyncCount = i1689[25]
  i1688.asyncUploadBufferSize = i1689[26]
  i1688.asyncUploadTimeSlice = i1689[27]
  i1688.billboardsFaceCameraPosition = !!i1689[28]
  i1688.shadowNearPlaneOffset = i1689[29]
  i1688.streamingMipmapsMemoryBudget = i1689[30]
  i1688.maximumLODLevel = i1689[31]
  i1688.streamingMipmapsAddAllCameras = !!i1689[32]
  i1688.streamingMipmapsMaxLevelReduction = i1689[33]
  i1688.streamingMipmapsRenderersPerFrame = i1689[34]
  i1688.resolutionScalingFixedDPIFactor = i1689[35]
  i1688.streamingMipmapsMaxFileIORequests = i1689[36]
  i1688.currentQualityLevel = i1689[37]
  return i1688
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[2],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[2],"75":[76],"77":[78],"79":[78],"13":[12],"5":[2],"28":[12],"80":[53],"81":[12],"82":[6],"83":[12],"84":[12],"16":[13],"18":[17,12],"85":[12],"15":[13],"86":[12],"87":[12],"25":[12],"88":[12],"89":[12],"90":[12],"91":[12],"26":[12],"92":[12],"93":[17,12],"94":[12],"95":[12],"27":[12],"96":[12],"97":[17,12],"98":[12],"99":[29],"100":[29],"30":[29],"101":[29],"102":[2],"103":[2],"104":[105],"106":[2],"107":[12],"108":[76,12],"109":[12,17],"110":[12],"111":[17,12],"112":[76],"113":[17,12],"114":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAspectFitter","UnityEngine.SpriteRenderer","AudioManager","AudioLibrary","TaskManager","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.CanvasGroup","CanvasGroupAnimator","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Button","GameManager","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.ScrollRect","DragToResizeLeft","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ButtonPulse","StartClickHandler","UnityEngine.GameObject","UnityEngine.Texture2D","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bullet","UIHorizontalDraggable","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "core2d";

Deserializers.lunaInitializationTime = "08/14/2025 11:33:59";

Deserializers.lunaDaysRunning = "11.9";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "KeyPoints_Mip2";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4287";

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

Deserializers.buildID = "7600bc28-cdb2-4510-b898-c4cb4f552cc0";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


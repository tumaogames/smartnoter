var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2496 = root || request.c( 'UnityEngine.JointSpring' )
  var i2497 = data
  i2496.spring = i2497[0]
  i2496.damper = i2497[1]
  i2496.targetPosition = i2497[2]
  return i2496
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2498 = root || request.c( 'UnityEngine.JointMotor' )
  var i2499 = data
  i2498.m_TargetVelocity = i2499[0]
  i2498.m_Force = i2499[1]
  i2498.m_FreeSpin = i2499[2]
  return i2498
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2500 = root || request.c( 'UnityEngine.JointLimits' )
  var i2501 = data
  i2500.m_Min = i2501[0]
  i2500.m_Max = i2501[1]
  i2500.m_Bounciness = i2501[2]
  i2500.m_BounceMinVelocity = i2501[3]
  i2500.m_ContactDistance = i2501[4]
  i2500.minBounce = i2501[5]
  i2500.maxBounce = i2501[6]
  return i2500
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2502 = root || request.c( 'UnityEngine.JointDrive' )
  var i2503 = data
  i2502.m_PositionSpring = i2503[0]
  i2502.m_PositionDamper = i2503[1]
  i2502.m_MaximumForce = i2503[2]
  i2502.m_UseAcceleration = i2503[3]
  return i2502
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2504 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2505 = data
  i2504.m_Spring = i2505[0]
  i2504.m_Damper = i2505[1]
  return i2504
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2506 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2507 = data
  i2506.m_Limit = i2507[0]
  i2506.m_Bounciness = i2507[1]
  i2506.m_ContactDistance = i2507[2]
  return i2506
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2508 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2509 = data
  i2508.m_ExtremumSlip = i2509[0]
  i2508.m_ExtremumValue = i2509[1]
  i2508.m_AsymptoteSlip = i2509[2]
  i2508.m_AsymptoteValue = i2509[3]
  i2508.m_Stiffness = i2509[4]
  return i2508
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2510 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2511 = data
  i2510.m_LowerAngle = i2511[0]
  i2510.m_UpperAngle = i2511[1]
  return i2510
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2512 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2513 = data
  i2512.m_MotorSpeed = i2513[0]
  i2512.m_MaximumMotorTorque = i2513[1]
  return i2512
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2514 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2515 = data
  i2514.m_DampingRatio = i2515[0]
  i2514.m_Frequency = i2515[1]
  i2514.m_Angle = i2515[2]
  return i2514
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2516 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2517 = data
  i2516.m_LowerTranslation = i2517[0]
  i2516.m_UpperTranslation = i2517[1]
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2518 = root || new pc.UnityMaterial()
  var i2519 = data
  i2518.name = i2519[0]
  request.r(i2519[1], i2519[2], 0, i2518, 'shader')
  i2518.renderQueue = i2519[3]
  i2518.enableInstancing = !!i2519[4]
  var i2521 = i2519[5]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2521[i + 0]) );
  }
  i2518.floatParameters = i2520
  var i2523 = i2519[6]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2523[i + 0]) );
  }
  i2518.colorParameters = i2522
  var i2525 = i2519[7]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2525[i + 0]) );
  }
  i2518.vectorParameters = i2524
  var i2527 = i2519[8]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2527[i + 0]) );
  }
  i2518.textureParameters = i2526
  var i2529 = i2519[9]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2529[i + 0]) );
  }
  i2518.materialFlags = i2528
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2533 = data
  i2532.name = i2533[0]
  i2532.value = i2533[1]
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2537 = data
  i2536.name = i2537[0]
  i2536.value = new pc.Color(i2537[1], i2537[2], i2537[3], i2537[4])
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2541 = data
  i2540.name = i2541[0]
  i2540.value = new pc.Vec4( i2541[1], i2541[2], i2541[3], i2541[4] )
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2545 = data
  i2544.name = i2545[0]
  request.r(i2545[1], i2545[2], 0, i2544, 'value')
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2549 = data
  i2548.name = i2549[0]
  i2548.enabled = !!i2549[1]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2551 = data
  i2550.name = i2551[0]
  i2550.width = i2551[1]
  i2550.height = i2551[2]
  i2550.mipmapCount = i2551[3]
  i2550.anisoLevel = i2551[4]
  i2550.filterMode = i2551[5]
  i2550.hdr = !!i2551[6]
  i2550.format = i2551[7]
  i2550.wrapMode = i2551[8]
  i2550.alphaIsTransparency = !!i2551[9]
  i2550.alphaSource = i2551[10]
  i2550.graphicsFormat = i2551[11]
  i2550.sRGBTexture = !!i2551[12]
  i2550.desiredColorSpace = i2551[13]
  i2550.wrapU = i2551[14]
  i2550.wrapV = i2551[15]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2553 = data
  i2552.name = i2553[0]
  i2552.index = i2553[1]
  i2552.startup = !!i2553[2]
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2555 = data
  i2554.position = new pc.Vec3( i2555[0], i2555[1], i2555[2] )
  i2554.scale = new pc.Vec3( i2555[3], i2555[4], i2555[5] )
  i2554.rotation = new pc.Quat(i2555[6], i2555[7], i2555[8], i2555[9])
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2557 = data
  i2556.enabled = !!i2557[0]
  i2556.aspect = i2557[1]
  i2556.orthographic = !!i2557[2]
  i2556.orthographicSize = i2557[3]
  i2556.backgroundColor = new pc.Color(i2557[4], i2557[5], i2557[6], i2557[7])
  i2556.nearClipPlane = i2557[8]
  i2556.farClipPlane = i2557[9]
  i2556.fieldOfView = i2557[10]
  i2556.depth = i2557[11]
  i2556.clearFlags = i2557[12]
  i2556.cullingMask = i2557[13]
  i2556.rect = i2557[14]
  request.r(i2557[15], i2557[16], 0, i2556, 'targetTexture')
  i2556.usePhysicalProperties = !!i2557[17]
  i2556.focalLength = i2557[18]
  i2556.sensorSize = new pc.Vec2( i2557[19], i2557[20] )
  i2556.lensShift = new pc.Vec2( i2557[21], i2557[22] )
  i2556.gateFit = i2557[23]
  i2556.commandBufferCount = i2557[24]
  i2556.cameraType = i2557[25]
  return i2556
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i2558 = root || request.c( 'CameraAspectFitter' )
  var i2559 = data
  request.r(i2559[0], i2559[1], 0, i2558, 'targetSprite')
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2561 = data
  i2560.name = i2561[0]
  i2560.tagId = i2561[1]
  i2560.enabled = !!i2561[2]
  i2560.isStatic = !!i2561[3]
  i2560.layer = i2561[4]
  return i2560
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i2562 = root || request.c( 'AudioManager' )
  var i2563 = data
  request.r(i2563[0], i2563[1], 0, i2562, 'library')
  i2562.sfxPoolSize = i2563[2]
  return i2562
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i2564 = root || request.c( 'TaskManager' )
  var i2565 = data
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2567 = data
  i2566.enabled = !!i2567[0]
  request.r(i2567[1], i2567[2], 0, i2566, 'sharedMaterial')
  var i2569 = i2567[3]
  var i2568 = []
  for(var i = 0; i < i2569.length; i += 2) {
  request.r(i2569[i + 0], i2569[i + 1], 2, i2568, '')
  }
  i2566.sharedMaterials = i2568
  i2566.receiveShadows = !!i2567[4]
  i2566.shadowCastingMode = i2567[5]
  i2566.sortingLayerID = i2567[6]
  i2566.sortingOrder = i2567[7]
  i2566.lightmapIndex = i2567[8]
  i2566.lightmapSceneIndex = i2567[9]
  i2566.lightmapScaleOffset = new pc.Vec4( i2567[10], i2567[11], i2567[12], i2567[13] )
  i2566.lightProbeUsage = i2567[14]
  i2566.reflectionProbeUsage = i2567[15]
  i2566.color = new pc.Color(i2567[16], i2567[17], i2567[18], i2567[19])
  request.r(i2567[20], i2567[21], 0, i2566, 'sprite')
  i2566.flipX = !!i2567[22]
  i2566.flipY = !!i2567[23]
  i2566.drawMode = i2567[24]
  i2566.size = new pc.Vec2( i2567[25], i2567[26] )
  i2566.tileMode = i2567[27]
  i2566.adaptiveModeThreshold = i2567[28]
  i2566.maskInteraction = i2567[29]
  i2566.spriteSortPoint = i2567[30]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2573 = data
  i2572.pivot = new pc.Vec2( i2573[0], i2573[1] )
  i2572.anchorMin = new pc.Vec2( i2573[2], i2573[3] )
  i2572.anchorMax = new pc.Vec2( i2573[4], i2573[5] )
  i2572.sizeDelta = new pc.Vec2( i2573[6], i2573[7] )
  i2572.anchoredPosition3D = new pc.Vec3( i2573[8], i2573[9], i2573[10] )
  i2572.rotation = new pc.Quat(i2573[11], i2573[12], i2573[13], i2573[14])
  i2572.scale = new pc.Vec3( i2573[15], i2573[16], i2573[17] )
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2575 = data
  i2574.enabled = !!i2575[0]
  i2574.planeDistance = i2575[1]
  i2574.referencePixelsPerUnit = i2575[2]
  i2574.isFallbackOverlay = !!i2575[3]
  i2574.renderMode = i2575[4]
  i2574.renderOrder = i2575[5]
  i2574.sortingLayerName = i2575[6]
  i2574.sortingOrder = i2575[7]
  i2574.scaleFactor = i2575[8]
  request.r(i2575[9], i2575[10], 0, i2574, 'worldCamera')
  i2574.overrideSorting = !!i2575[11]
  i2574.pixelPerfect = !!i2575[12]
  i2574.targetDisplay = i2575[13]
  i2574.overridePixelPerfect = !!i2575[14]
  return i2574
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2576 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2577 = data
  i2576.m_UiScaleMode = i2577[0]
  i2576.m_ReferencePixelsPerUnit = i2577[1]
  i2576.m_ScaleFactor = i2577[2]
  i2576.m_ReferenceResolution = new pc.Vec2( i2577[3], i2577[4] )
  i2576.m_ScreenMatchMode = i2577[5]
  i2576.m_MatchWidthOrHeight = i2577[6]
  i2576.m_PhysicalUnit = i2577[7]
  i2576.m_FallbackScreenDPI = i2577[8]
  i2576.m_DefaultSpriteDPI = i2577[9]
  i2576.m_DynamicPixelsPerUnit = i2577[10]
  i2576.m_PresetInfoIsWorld = !!i2577[11]
  return i2576
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2578 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2579 = data
  i2578.m_IgnoreReversedGraphics = !!i2579[0]
  i2578.m_BlockingObjects = i2579[1]
  i2578.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2579[2] )
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2581 = data
  i2580.cullTransparentMesh = !!i2581[0]
  return i2580
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2582 = root || request.c( 'UnityEngine.UI.Image' )
  var i2583 = data
  request.r(i2583[0], i2583[1], 0, i2582, 'm_Sprite')
  i2582.m_Type = i2583[2]
  i2582.m_PreserveAspect = !!i2583[3]
  i2582.m_FillCenter = !!i2583[4]
  i2582.m_FillMethod = i2583[5]
  i2582.m_FillAmount = i2583[6]
  i2582.m_FillClockwise = !!i2583[7]
  i2582.m_FillOrigin = i2583[8]
  i2582.m_UseSpriteMesh = !!i2583[9]
  i2582.m_PixelsPerUnitMultiplier = i2583[10]
  request.r(i2583[11], i2583[12], 0, i2582, 'm_Material')
  i2582.m_Maskable = !!i2583[13]
  i2582.m_Color = new pc.Color(i2583[14], i2583[15], i2583[16], i2583[17])
  i2582.m_RaycastTarget = !!i2583[18]
  i2582.m_RaycastPadding = new pc.Vec4( i2583[19], i2583[20], i2583[21], i2583[22] )
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2585 = data
  i2584.m_Alpha = i2585[0]
  i2584.m_Interactable = !!i2585[1]
  i2584.m_BlocksRaycasts = !!i2585[2]
  i2584.m_IgnoreParentGroups = !!i2585[3]
  i2584.enabled = !!i2585[4]
  return i2584
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i2586 = root || request.c( 'CanvasGroupAnimator' )
  var i2587 = data
  request.r(i2587[0], i2587[1], 0, i2586, 'canvasGroup')
  i2586.animateFade = !!i2587[2]
  i2586.triggerOnStart = !!i2587[3]
  i2586.isLooping = !!i2587[4]
  i2586.fadeTo = i2587[5]
  i2586.fadeDuration = i2587[6]
  i2586.fadeEaseType = i2587[7]
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2589 = data
  request.r(i2589[0], i2589[1], 0, i2588, 'animatorController')
  request.r(i2589[2], i2589[3], 0, i2588, 'avatar')
  i2588.updateMode = i2589[4]
  i2588.hasTransformHierarchy = !!i2589[5]
  i2588.applyRootMotion = !!i2589[6]
  var i2591 = i2589[7]
  var i2590 = []
  for(var i = 0; i < i2591.length; i += 2) {
  request.r(i2591[i + 0], i2591[i + 1], 2, i2590, '')
  }
  i2588.humanBones = i2590
  i2588.enabled = !!i2589[8]
  return i2588
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2594 = root || request.c( 'UnityEngine.UI.Button' )
  var i2595 = data
  i2594.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2595[0], i2594.m_OnClick)
  i2594.m_Navigation = request.d('UnityEngine.UI.Navigation', i2595[1], i2594.m_Navigation)
  i2594.m_Transition = i2595[2]
  i2594.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2595[3], i2594.m_Colors)
  i2594.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2595[4], i2594.m_SpriteState)
  i2594.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2595[5], i2594.m_AnimationTriggers)
  i2594.m_Interactable = !!i2595[6]
  request.r(i2595[7], i2595[8], 0, i2594, 'm_TargetGraphic')
  return i2594
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2596 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2597 = data
  i2596.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2597[0], i2596.m_PersistentCalls)
  return i2596
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2598 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2599 = data
  var i2601 = i2599[0]
  var i2600 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.add(request.d('UnityEngine.Events.PersistentCall', i2601[i + 0]));
  }
  i2598.m_Calls = i2600
  return i2598
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2604 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2605 = data
  request.r(i2605[0], i2605[1], 0, i2604, 'm_Target')
  i2604.m_TargetAssemblyTypeName = i2605[2]
  i2604.m_MethodName = i2605[3]
  i2604.m_Mode = i2605[4]
  i2604.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2605[5], i2604.m_Arguments)
  i2604.m_CallState = i2605[6]
  return i2604
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2606 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2607 = data
  request.r(i2607[0], i2607[1], 0, i2606, 'm_ObjectArgument')
  i2606.m_ObjectArgumentAssemblyTypeName = i2607[2]
  i2606.m_IntArgument = i2607[3]
  i2606.m_FloatArgument = i2607[4]
  i2606.m_StringArgument = i2607[5]
  i2606.m_BoolArgument = !!i2607[6]
  return i2606
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2608 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2609 = data
  i2608.m_Mode = i2609[0]
  i2608.m_WrapAround = !!i2609[1]
  request.r(i2609[2], i2609[3], 0, i2608, 'm_SelectOnUp')
  request.r(i2609[4], i2609[5], 0, i2608, 'm_SelectOnDown')
  request.r(i2609[6], i2609[7], 0, i2608, 'm_SelectOnLeft')
  request.r(i2609[8], i2609[9], 0, i2608, 'm_SelectOnRight')
  return i2608
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2610 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2611 = data
  i2610.m_NormalColor = new pc.Color(i2611[0], i2611[1], i2611[2], i2611[3])
  i2610.m_HighlightedColor = new pc.Color(i2611[4], i2611[5], i2611[6], i2611[7])
  i2610.m_PressedColor = new pc.Color(i2611[8], i2611[9], i2611[10], i2611[11])
  i2610.m_SelectedColor = new pc.Color(i2611[12], i2611[13], i2611[14], i2611[15])
  i2610.m_DisabledColor = new pc.Color(i2611[16], i2611[17], i2611[18], i2611[19])
  i2610.m_ColorMultiplier = i2611[20]
  i2610.m_FadeDuration = i2611[21]
  return i2610
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2612 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2613 = data
  request.r(i2613[0], i2613[1], 0, i2612, 'm_HighlightedSprite')
  request.r(i2613[2], i2613[3], 0, i2612, 'm_PressedSprite')
  request.r(i2613[4], i2613[5], 0, i2612, 'm_SelectedSprite')
  request.r(i2613[6], i2613[7], 0, i2612, 'm_DisabledSprite')
  return i2612
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2614 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2615 = data
  i2614.m_NormalTrigger = i2615[0]
  i2614.m_HighlightedTrigger = i2615[1]
  i2614.m_PressedTrigger = i2615[2]
  i2614.m_SelectedTrigger = i2615[3]
  i2614.m_DisabledTrigger = i2615[4]
  return i2614
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2616 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2617 = data
  i2616.m_Spacing = i2617[0]
  i2616.m_ChildForceExpandWidth = !!i2617[1]
  i2616.m_ChildForceExpandHeight = !!i2617[2]
  i2616.m_ChildControlWidth = !!i2617[3]
  i2616.m_ChildControlHeight = !!i2617[4]
  i2616.m_ChildScaleWidth = !!i2617[5]
  i2616.m_ChildScaleHeight = !!i2617[6]
  i2616.m_ReverseArrangement = !!i2617[7]
  i2616.m_Padding = UnityEngine.RectOffset.FromPaddings(i2617[8], i2617[9], i2617[10], i2617[11])
  i2616.m_ChildAlignment = i2617[12]
  return i2616
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2618 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2619 = data
  i2618.m_ShowMaskGraphic = !!i2619[0]
  return i2618
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i2620 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i2621 = data
  request.r(i2621[0], i2621[1], 0, i2620, 'm_Content')
  i2620.m_Horizontal = !!i2621[2]
  i2620.m_Vertical = !!i2621[3]
  i2620.m_MovementType = i2621[4]
  i2620.m_Elasticity = i2621[5]
  i2620.m_Inertia = !!i2621[6]
  i2620.m_DecelerationRate = i2621[7]
  i2620.m_ScrollSensitivity = i2621[8]
  request.r(i2621[9], i2621[10], 0, i2620, 'm_Viewport')
  request.r(i2621[11], i2621[12], 0, i2620, 'm_HorizontalScrollbar')
  request.r(i2621[13], i2621[14], 0, i2620, 'm_VerticalScrollbar')
  i2620.m_HorizontalScrollbarVisibility = i2621[15]
  i2620.m_VerticalScrollbarVisibility = i2621[16]
  i2620.m_HorizontalScrollbarSpacing = i2621[17]
  i2620.m_VerticalScrollbarSpacing = i2621[18]
  i2620.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i2621[19], i2620.m_OnValueChanged)
  return i2620
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i2622 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i2623 = data
  i2622.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2623[0], i2622.m_PersistentCalls)
  return i2622
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i2624 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i2625 = data
  request.r(i2625[0], i2625[1], 0, i2624, 'm_HandleRect')
  i2624.m_Direction = i2625[2]
  i2624.m_Value = i2625[3]
  i2624.m_Size = i2625[4]
  i2624.m_NumberOfSteps = i2625[5]
  i2624.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i2625[6], i2624.m_OnValueChanged)
  i2624.m_Navigation = request.d('UnityEngine.UI.Navigation', i2625[7], i2624.m_Navigation)
  i2624.m_Transition = i2625[8]
  i2624.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2625[9], i2624.m_Colors)
  i2624.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2625[10], i2624.m_SpriteState)
  i2624.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2625[11], i2624.m_AnimationTriggers)
  i2624.m_Interactable = !!i2625[12]
  request.r(i2625[13], i2625[14], 0, i2624, 'm_TargetGraphic')
  return i2624
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i2626 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i2627 = data
  i2626.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2627[0], i2626.m_PersistentCalls)
  return i2626
}

Deserializers["DragToResizeLeft"] = function (request, data, root) {
  var i2628 = root || request.c( 'DragToResizeLeft' )
  var i2629 = data
  request.r(i2629[0], i2629[1], 0, i2628, 'target')
  i2628.minWidth = i2629[2]
  return i2628
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2630 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2631 = data
  request.r(i2631[0], i2631[1], 0, i2630, 'm_FirstSelected')
  i2630.m_sendNavigationEvents = !!i2631[2]
  i2630.m_DragThreshold = i2631[3]
  return i2630
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2632 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2633 = data
  i2632.m_HorizontalAxis = i2633[0]
  i2632.m_VerticalAxis = i2633[1]
  i2632.m_SubmitButton = i2633[2]
  i2632.m_CancelButton = i2633[3]
  i2632.m_InputActionsPerSecond = i2633[4]
  i2632.m_RepeatDelay = i2633[5]
  i2632.m_ForceModuleActive = !!i2633[6]
  i2632.m_SendPointerHoverToParent = !!i2633[7]
  return i2632
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i2634 = root || request.c( 'ButtonPulse' )
  var i2635 = data
  i2634.scaleAmount = i2635[0]
  i2634.pulseDuration = i2635[1]
  return i2634
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i2636 = root || request.c( 'StartClickHandler' )
  var i2637 = data
  return i2636
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2638 = root || request.c( 'GameManager' )
  var i2639 = data
  request.r(i2639[0], i2639[1], 0, i2638, 'endPanel')
  i2638.end = !!i2639[2]
  request.r(i2639[3], i2639[4], 0, i2638, 'hand')
  request.r(i2639[5], i2639[6], 0, i2638, 'hand2')
  i2638.enableSound = !!i2639[7]
  request.r(i2639[8], i2639[9], 0, i2638, 'startClickHandler')
  i2638.currentScore = i2639[10]
  request.r(i2639[11], i2639[12], 0, i2638, 'BodyToSummarize')
  request.r(i2639[13], i2639[14], 0, i2638, 'SummarizedText')
  request.r(i2639[15], i2639[16], 0, i2638, 'transcriptBtnBlue')
  request.r(i2639[17], i2639[18], 0, i2638, 'transcriptBtn')
  request.r(i2639[19], i2639[20], 0, i2638, 'summaryBtn')
  request.r(i2639[21], i2639[22], 0, i2638, 'summaryBtnBlue')
  request.r(i2639[23], i2639[24], 0, i2638, 'mainPanel')
  request.r(i2639[25], i2639[26], 0, i2638, 'handle1')
  request.r(i2639[27], i2639[28], 0, i2638, 'animator')
  request.r(i2639[29], i2639[30], 0, i2638, 'maskA')
  request.r(i2639[31], i2639[32], 0, i2638, 'filter')
  request.r(i2639[33], i2639[34], 0, i2638, 'arrow')
  request.r(i2639[35], i2639[36], 0, i2638, 'toTap')
  request.r(i2639[37], i2639[38], 0, i2638, 'openingPanel')
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2641 = data
  i2640.ambientIntensity = i2641[0]
  i2640.reflectionIntensity = i2641[1]
  i2640.ambientMode = i2641[2]
  i2640.ambientLight = new pc.Color(i2641[3], i2641[4], i2641[5], i2641[6])
  i2640.ambientSkyColor = new pc.Color(i2641[7], i2641[8], i2641[9], i2641[10])
  i2640.ambientGroundColor = new pc.Color(i2641[11], i2641[12], i2641[13], i2641[14])
  i2640.ambientEquatorColor = new pc.Color(i2641[15], i2641[16], i2641[17], i2641[18])
  i2640.fogColor = new pc.Color(i2641[19], i2641[20], i2641[21], i2641[22])
  i2640.fogEndDistance = i2641[23]
  i2640.fogStartDistance = i2641[24]
  i2640.fogDensity = i2641[25]
  i2640.fog = !!i2641[26]
  request.r(i2641[27], i2641[28], 0, i2640, 'skybox')
  i2640.fogMode = i2641[29]
  var i2643 = i2641[30]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2643[i + 0]) );
  }
  i2640.lightmaps = i2642
  i2640.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2641[31], i2640.lightProbes)
  i2640.lightmapsMode = i2641[32]
  i2640.mixedBakeMode = i2641[33]
  i2640.environmentLightingMode = i2641[34]
  i2640.ambientProbe = new pc.SphericalHarmonicsL2(i2641[35])
  i2640.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2641[36])
  i2640.useReferenceAmbientProbe = !!i2641[37]
  request.r(i2641[38], i2641[39], 0, i2640, 'customReflection')
  request.r(i2641[40], i2641[41], 0, i2640, 'defaultReflection')
  i2640.defaultReflectionMode = i2641[42]
  i2640.defaultReflectionResolution = i2641[43]
  i2640.sunLightObjectId = i2641[44]
  i2640.pixelLightCount = i2641[45]
  i2640.defaultReflectionHDR = !!i2641[46]
  i2640.hasLightDataAsset = !!i2641[47]
  i2640.hasManualGenerate = !!i2641[48]
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2647 = data
  request.r(i2647[0], i2647[1], 0, i2646, 'lightmapColor')
  request.r(i2647[2], i2647[3], 0, i2646, 'lightmapDirection')
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2648 = root || new UnityEngine.LightProbes()
  var i2649 = data
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2657 = data
  var i2659 = i2657[0]
  var i2658 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2659[i + 0]));
  }
  i2656.ShaderCompilationErrors = i2658
  i2656.name = i2657[1]
  i2656.guid = i2657[2]
  var i2661 = i2657[3]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.push( i2661[i + 0] );
  }
  i2656.shaderDefinedKeywords = i2660
  var i2663 = i2657[4]
  var i2662 = []
  for(var i = 0; i < i2663.length; i += 1) {
    i2662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2663[i + 0]) );
  }
  i2656.passes = i2662
  var i2665 = i2657[5]
  var i2664 = []
  for(var i = 0; i < i2665.length; i += 1) {
    i2664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2665[i + 0]) );
  }
  i2656.usePasses = i2664
  var i2667 = i2657[6]
  var i2666 = []
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2667[i + 0]) );
  }
  i2656.defaultParameterValues = i2666
  request.r(i2657[7], i2657[8], 0, i2656, 'unityFallbackShader')
  i2656.readDepth = !!i2657[9]
  i2656.isCreatedByShaderGraph = !!i2657[10]
  i2656.compiled = !!i2657[11]
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2671 = data
  i2670.shaderName = i2671[0]
  i2670.errorMessage = i2671[1]
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2676 = root || new pc.UnityShaderPass()
  var i2677 = data
  i2676.id = i2677[0]
  i2676.subShaderIndex = i2677[1]
  i2676.name = i2677[2]
  i2676.passType = i2677[3]
  i2676.grabPassTextureName = i2677[4]
  i2676.usePass = !!i2677[5]
  i2676.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2677[6], i2676.zTest)
  i2676.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2677[7], i2676.zWrite)
  i2676.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2677[8], i2676.culling)
  i2676.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2677[9], i2676.blending)
  i2676.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2677[10], i2676.alphaBlending)
  i2676.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2677[11], i2676.colorWriteMask)
  i2676.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2677[12], i2676.offsetUnits)
  i2676.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2677[13], i2676.offsetFactor)
  i2676.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2677[14], i2676.stencilRef)
  i2676.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2677[15], i2676.stencilReadMask)
  i2676.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2677[16], i2676.stencilWriteMask)
  i2676.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2677[17], i2676.stencilOp)
  i2676.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2677[18], i2676.stencilOpFront)
  i2676.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2677[19], i2676.stencilOpBack)
  var i2679 = i2677[20]
  var i2678 = []
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2679[i + 0]) );
  }
  i2676.tags = i2678
  var i2681 = i2677[21]
  var i2680 = []
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.push( i2681[i + 0] );
  }
  i2676.passDefinedKeywords = i2680
  var i2683 = i2677[22]
  var i2682 = []
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2683[i + 0]) );
  }
  i2676.passDefinedKeywordGroups = i2682
  var i2685 = i2677[23]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2685[i + 0]) );
  }
  i2676.variants = i2684
  var i2687 = i2677[24]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2687[i + 0]) );
  }
  i2676.excludedVariants = i2686
  i2676.hasDepthReader = !!i2677[25]
  return i2676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2689 = data
  i2688.val = i2689[0]
  i2688.name = i2689[1]
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2691 = data
  i2690.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2691[0], i2690.src)
  i2690.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2691[1], i2690.dst)
  i2690.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2691[2], i2690.op)
  return i2690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2693 = data
  i2692.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[0], i2692.pass)
  i2692.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[1], i2692.fail)
  i2692.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[2], i2692.zFail)
  i2692.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[3], i2692.comp)
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2697 = data
  i2696.name = i2697[0]
  i2696.value = i2697[1]
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2701 = data
  var i2703 = i2701[0]
  var i2702 = []
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.push( i2703[i + 0] );
  }
  i2700.keywords = i2702
  i2700.hasDiscard = !!i2701[1]
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2707 = data
  i2706.passId = i2707[0]
  i2706.subShaderIndex = i2707[1]
  var i2709 = i2707[2]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( i2709[i + 0] );
  }
  i2706.keywords = i2708
  i2706.vertexProgram = i2707[3]
  i2706.fragmentProgram = i2707[4]
  i2706.exportedForWebGl2 = !!i2707[5]
  i2706.readDepth = !!i2707[6]
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2713 = data
  request.r(i2713[0], i2713[1], 0, i2712, 'shader')
  i2712.pass = i2713[2]
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2717 = data
  i2716.name = i2717[0]
  i2716.type = i2717[1]
  i2716.value = new pc.Vec4( i2717[2], i2717[3], i2717[4], i2717[5] )
  i2716.textureValue = i2717[6]
  i2716.shaderPropertyFlag = i2717[7]
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2719 = data
  i2718.name = i2719[0]
  request.r(i2719[1], i2719[2], 0, i2718, 'texture')
  i2718.aabb = i2719[3]
  i2718.vertices = i2719[4]
  i2718.triangles = i2719[5]
  i2718.textureRect = UnityEngine.Rect.MinMaxRect(i2719[6], i2719[7], i2719[8], i2719[9])
  i2718.packedRect = UnityEngine.Rect.MinMaxRect(i2719[10], i2719[11], i2719[12], i2719[13])
  i2718.border = new pc.Vec4( i2719[14], i2719[15], i2719[16], i2719[17] )
  i2718.transparency = i2719[18]
  i2718.bounds = i2719[19]
  i2718.pixelsPerUnit = i2719[20]
  i2718.textureWidth = i2719[21]
  i2718.textureHeight = i2719[22]
  i2718.nativeSize = new pc.Vec2( i2719[23], i2719[24] )
  i2718.pivot = new pc.Vec2( i2719[25], i2719[26] )
  i2718.textureRectOffset = new pc.Vec2( i2719[27], i2719[28] )
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2721 = data
  i2720.name = i2721[0]
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2723 = data
  i2722.name = i2723[0]
  i2722.wrapMode = i2723[1]
  i2722.isLooping = !!i2723[2]
  i2722.length = i2723[3]
  var i2725 = i2723[4]
  var i2724 = []
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2725[i + 0]) );
  }
  i2722.curves = i2724
  var i2727 = i2723[5]
  var i2726 = []
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2727[i + 0]) );
  }
  i2722.events = i2726
  i2722.halfPrecision = !!i2723[6]
  i2722._frameRate = i2723[7]
  i2722.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2723[8], i2722.localBounds)
  i2722.hasMuscleCurves = !!i2723[9]
  var i2729 = i2723[10]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.push( i2729[i + 0] );
  }
  i2722.clipMuscleConstant = i2728
  i2722.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2723[11], i2722.clipBindingConstant)
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2733 = data
  i2732.path = i2733[0]
  i2732.hash = i2733[1]
  i2732.componentType = i2733[2]
  i2732.property = i2733[3]
  i2732.keys = i2733[4]
  var i2735 = i2733[5]
  var i2734 = []
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2735[i + 0]) );
  }
  i2732.objectReferenceKeys = i2734
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2739 = data
  i2738.time = i2739[0]
  request.r(i2739[1], i2739[2], 0, i2738, 'value')
  return i2738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2743 = data
  i2742.functionName = i2743[0]
  i2742.floatParameter = i2743[1]
  i2742.intParameter = i2743[2]
  i2742.stringParameter = i2743[3]
  request.r(i2743[4], i2743[5], 0, i2742, 'objectReferenceParameter')
  i2742.time = i2743[6]
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2745 = data
  i2744.center = new pc.Vec3( i2745[0], i2745[1], i2745[2] )
  i2744.extends = new pc.Vec3( i2745[3], i2745[4], i2745[5] )
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2749 = data
  var i2751 = i2749[0]
  var i2750 = []
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.push( i2751[i + 0] );
  }
  i2748.genericBindings = i2750
  var i2753 = i2749[1]
  var i2752 = []
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.push( i2753[i + 0] );
  }
  i2748.pptrCurveMapping = i2752
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2755 = data
  i2754.name = i2755[0]
  var i2757 = i2755[1]
  var i2756 = []
  for(var i = 0; i < i2757.length; i += 1) {
    i2756.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2757[i + 0]) );
  }
  i2754.layers = i2756
  var i2759 = i2755[2]
  var i2758 = []
  for(var i = 0; i < i2759.length; i += 1) {
    i2758.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2759[i + 0]) );
  }
  i2754.parameters = i2758
  i2754.animationClips = i2755[3]
  i2754.avatarUnsupported = i2755[4]
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2763 = data
  i2762.name = i2763[0]
  i2762.defaultWeight = i2763[1]
  i2762.blendingMode = i2763[2]
  i2762.avatarMask = i2763[3]
  i2762.syncedLayerIndex = i2763[4]
  i2762.syncedLayerAffectsTiming = !!i2763[5]
  i2762.syncedLayers = i2763[6]
  i2762.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2763[7], i2762.stateMachine)
  return i2762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2765 = data
  i2764.id = i2765[0]
  i2764.name = i2765[1]
  i2764.path = i2765[2]
  var i2767 = i2765[3]
  var i2766 = []
  for(var i = 0; i < i2767.length; i += 1) {
    i2766.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2767[i + 0]) );
  }
  i2764.states = i2766
  var i2769 = i2765[4]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2769[i + 0]) );
  }
  i2764.machines = i2768
  var i2771 = i2765[5]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2771[i + 0]) );
  }
  i2764.entryStateTransitions = i2770
  var i2773 = i2765[6]
  var i2772 = []
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2773[i + 0]) );
  }
  i2764.exitStateTransitions = i2772
  var i2775 = i2765[7]
  var i2774 = []
  for(var i = 0; i < i2775.length; i += 1) {
    i2774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2775[i + 0]) );
  }
  i2764.anyStateTransitions = i2774
  i2764.defaultStateId = i2765[8]
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2779 = data
  i2778.id = i2779[0]
  i2778.name = i2779[1]
  i2778.cycleOffset = i2779[2]
  i2778.cycleOffsetParameter = i2779[3]
  i2778.cycleOffsetParameterActive = !!i2779[4]
  i2778.mirror = !!i2779[5]
  i2778.mirrorParameter = i2779[6]
  i2778.mirrorParameterActive = !!i2779[7]
  i2778.motionId = i2779[8]
  i2778.nameHash = i2779[9]
  i2778.fullPathHash = i2779[10]
  i2778.speed = i2779[11]
  i2778.speedParameter = i2779[12]
  i2778.speedParameterActive = !!i2779[13]
  i2778.tag = i2779[14]
  i2778.tagHash = i2779[15]
  i2778.writeDefaultValues = !!i2779[16]
  var i2781 = i2779[17]
  var i2780 = []
  for(var i = 0; i < i2781.length; i += 2) {
  request.r(i2781[i + 0], i2781[i + 1], 2, i2780, '')
  }
  i2778.behaviours = i2780
  var i2783 = i2779[18]
  var i2782 = []
  for(var i = 0; i < i2783.length; i += 1) {
    i2782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2783[i + 0]) );
  }
  i2778.transitions = i2782
  return i2778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2789 = data
  i2788.fullPath = i2789[0]
  i2788.canTransitionToSelf = !!i2789[1]
  i2788.duration = i2789[2]
  i2788.exitTime = i2789[3]
  i2788.hasExitTime = !!i2789[4]
  i2788.hasFixedDuration = !!i2789[5]
  i2788.interruptionSource = i2789[6]
  i2788.offset = i2789[7]
  i2788.orderedInterruption = !!i2789[8]
  i2788.destinationStateId = i2789[9]
  i2788.isExit = !!i2789[10]
  i2788.mute = !!i2789[11]
  i2788.solo = !!i2789[12]
  var i2791 = i2789[13]
  var i2790 = []
  for(var i = 0; i < i2791.length; i += 1) {
    i2790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2791[i + 0]) );
  }
  i2788.conditions = i2790
  return i2788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2797 = data
  i2796.destinationStateId = i2797[0]
  i2796.isExit = !!i2797[1]
  i2796.mute = !!i2797[2]
  i2796.solo = !!i2797[3]
  var i2799 = i2797[4]
  var i2798 = []
  for(var i = 0; i < i2799.length; i += 1) {
    i2798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2799[i + 0]) );
  }
  i2796.conditions = i2798
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2803 = data
  i2802.defaultBool = !!i2803[0]
  i2802.defaultFloat = i2803[1]
  i2802.defaultInt = i2803[2]
  i2802.name = i2803[3]
  i2802.nameHash = i2803[4]
  i2802.type = i2803[5]
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2807 = data
  i2806.mode = i2807[0]
  i2806.parameter = i2807[1]
  i2806.threshold = i2807[2]
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2809 = data
  i2808.name = i2809[0]
  i2808.bytes64 = i2809[1]
  i2808.data = i2809[2]
  return i2808
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i2810 = root || request.c( 'AudioLibrary' )
  var i2811 = data
  var i2813 = i2811[0]
  var i2812 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.add(request.d('AudioLibrary+ClipEntry', i2813[i + 0]));
  }
  i2810.clips = i2812
  return i2810
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i2816 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i2817 = data
  i2816.key = i2817[0]
  i2816.channel = i2817[1]
  request.r(i2817[2], i2817[3], 0, i2816, 'clip')
  i2816.volume = i2817[4]
  i2816.loop = !!i2817[5]
  return i2816
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2818 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2819 = data
  i2818.useSafeMode = !!i2819[0]
  i2818.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2819[1], i2818.safeModeOptions)
  i2818.timeScale = i2819[2]
  i2818.unscaledTimeScale = i2819[3]
  i2818.useSmoothDeltaTime = !!i2819[4]
  i2818.maxSmoothUnscaledTime = i2819[5]
  i2818.rewindCallbackMode = i2819[6]
  i2818.showUnityEditorReport = !!i2819[7]
  i2818.logBehaviour = i2819[8]
  i2818.drawGizmos = !!i2819[9]
  i2818.defaultRecyclable = !!i2819[10]
  i2818.defaultAutoPlay = i2819[11]
  i2818.defaultUpdateType = i2819[12]
  i2818.defaultTimeScaleIndependent = !!i2819[13]
  i2818.defaultEaseType = i2819[14]
  i2818.defaultEaseOvershootOrAmplitude = i2819[15]
  i2818.defaultEasePeriod = i2819[16]
  i2818.defaultAutoKill = !!i2819[17]
  i2818.defaultLoopType = i2819[18]
  i2818.debugMode = !!i2819[19]
  i2818.debugStoreTargetId = !!i2819[20]
  i2818.showPreviewPanel = !!i2819[21]
  i2818.storeSettingsLocation = i2819[22]
  i2818.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2819[23], i2818.modules)
  i2818.createASMDEF = !!i2819[24]
  i2818.showPlayingTweens = !!i2819[25]
  i2818.showPausedTweens = !!i2819[26]
  return i2818
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2820 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2821 = data
  i2820.logBehaviour = i2821[0]
  i2820.nestedTweenFailureBehaviour = i2821[1]
  return i2820
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2822 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2823 = data
  i2822.showPanel = !!i2823[0]
  i2822.audioEnabled = !!i2823[1]
  i2822.physicsEnabled = !!i2823[2]
  i2822.physics2DEnabled = !!i2823[3]
  i2822.spriteEnabled = !!i2823[4]
  i2822.uiEnabled = !!i2823[5]
  i2822.textMeshProEnabled = !!i2823[6]
  i2822.tk2DEnabled = !!i2823[7]
  i2822.deAudioEnabled = !!i2823[8]
  i2822.deUnityExtendedEnabled = !!i2823[9]
  i2822.epoOutlineEnabled = !!i2823[10]
  return i2822
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2824 = root || request.c( 'TMPro.TMP_Settings' )
  var i2825 = data
  i2824.m_enableWordWrapping = !!i2825[0]
  i2824.m_enableKerning = !!i2825[1]
  i2824.m_enableExtraPadding = !!i2825[2]
  i2824.m_enableTintAllSprites = !!i2825[3]
  i2824.m_enableParseEscapeCharacters = !!i2825[4]
  i2824.m_EnableRaycastTarget = !!i2825[5]
  i2824.m_GetFontFeaturesAtRuntime = !!i2825[6]
  i2824.m_missingGlyphCharacter = i2825[7]
  i2824.m_warningsDisabled = !!i2825[8]
  request.r(i2825[9], i2825[10], 0, i2824, 'm_defaultFontAsset')
  i2824.m_defaultFontAssetPath = i2825[11]
  i2824.m_defaultFontSize = i2825[12]
  i2824.m_defaultAutoSizeMinRatio = i2825[13]
  i2824.m_defaultAutoSizeMaxRatio = i2825[14]
  i2824.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2825[15], i2825[16] )
  i2824.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2825[17], i2825[18] )
  i2824.m_autoSizeTextContainer = !!i2825[19]
  i2824.m_IsTextObjectScaleStatic = !!i2825[20]
  var i2827 = i2825[21]
  var i2826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2827.length; i += 2) {
  request.r(i2827[i + 0], i2827[i + 1], 1, i2826, '')
  }
  i2824.m_fallbackFontAssets = i2826
  i2824.m_matchMaterialPreset = !!i2825[22]
  request.r(i2825[23], i2825[24], 0, i2824, 'm_defaultSpriteAsset')
  i2824.m_defaultSpriteAssetPath = i2825[25]
  i2824.m_enableEmojiSupport = !!i2825[26]
  i2824.m_MissingCharacterSpriteUnicode = i2825[27]
  i2824.m_defaultColorGradientPresetsPath = i2825[28]
  request.r(i2825[29], i2825[30], 0, i2824, 'm_defaultStyleSheet')
  i2824.m_StyleSheetsResourcePath = i2825[31]
  request.r(i2825[32], i2825[33], 0, i2824, 'm_leadingCharacters')
  request.r(i2825[34], i2825[35], 0, i2824, 'm_followingCharacters')
  i2824.m_UseModernHangulLineBreakingRules = !!i2825[36]
  return i2824
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2830 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2831 = data
  i2830.hashCode = i2831[0]
  request.r(i2831[1], i2831[2], 0, i2830, 'material')
  i2830.materialHashCode = i2831[3]
  request.r(i2831[4], i2831[5], 0, i2830, 'atlas')
  i2830.normalStyle = i2831[6]
  i2830.normalSpacingOffset = i2831[7]
  i2830.boldStyle = i2831[8]
  i2830.boldSpacing = i2831[9]
  i2830.italicStyle = i2831[10]
  i2830.tabSize = i2831[11]
  i2830.m_Version = i2831[12]
  i2830.m_SourceFontFileGUID = i2831[13]
  request.r(i2831[14], i2831[15], 0, i2830, 'm_SourceFontFile_EditorRef')
  request.r(i2831[16], i2831[17], 0, i2830, 'm_SourceFontFile')
  i2830.m_AtlasPopulationMode = i2831[18]
  i2830.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2831[19], i2830.m_FaceInfo)
  var i2833 = i2831[20]
  var i2832 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.add(request.d('UnityEngine.TextCore.Glyph', i2833[i + 0]));
  }
  i2830.m_GlyphTable = i2832
  var i2835 = i2831[21]
  var i2834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2835.length; i += 1) {
    i2834.add(request.d('TMPro.TMP_Character', i2835[i + 0]));
  }
  i2830.m_CharacterTable = i2834
  var i2837 = i2831[22]
  var i2836 = []
  for(var i = 0; i < i2837.length; i += 2) {
  request.r(i2837[i + 0], i2837[i + 1], 2, i2836, '')
  }
  i2830.m_AtlasTextures = i2836
  i2830.m_AtlasTextureIndex = i2831[23]
  i2830.m_IsMultiAtlasTexturesEnabled = !!i2831[24]
  i2830.m_ClearDynamicDataOnBuild = !!i2831[25]
  var i2839 = i2831[26]
  var i2838 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2839.length; i += 1) {
    i2838.add(request.d('UnityEngine.TextCore.GlyphRect', i2839[i + 0]));
  }
  i2830.m_UsedGlyphRects = i2838
  var i2841 = i2831[27]
  var i2840 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.add(request.d('UnityEngine.TextCore.GlyphRect', i2841[i + 0]));
  }
  i2830.m_FreeGlyphRects = i2840
  i2830.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2831[28], i2830.m_fontInfo)
  i2830.m_AtlasWidth = i2831[29]
  i2830.m_AtlasHeight = i2831[30]
  i2830.m_AtlasPadding = i2831[31]
  i2830.m_AtlasRenderMode = i2831[32]
  var i2843 = i2831[33]
  var i2842 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2843.length; i += 1) {
    i2842.add(request.d('TMPro.TMP_Glyph', i2843[i + 0]));
  }
  i2830.m_glyphInfoList = i2842
  i2830.m_KerningTable = request.d('TMPro.KerningTable', i2831[34], i2830.m_KerningTable)
  i2830.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2831[35], i2830.m_FontFeatureTable)
  var i2845 = i2831[36]
  var i2844 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2845.length; i += 2) {
  request.r(i2845[i + 0], i2845[i + 1], 1, i2844, '')
  }
  i2830.fallbackFontAssets = i2844
  var i2847 = i2831[37]
  var i2846 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2847.length; i += 2) {
  request.r(i2847[i + 0], i2847[i + 1], 1, i2846, '')
  }
  i2830.m_FallbackFontAssetTable = i2846
  i2830.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2831[38], i2830.m_CreationSettings)
  var i2849 = i2831[39]
  var i2848 = []
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.push( request.d('TMPro.TMP_FontWeightPair', i2849[i + 0]) );
  }
  i2830.m_FontWeightTable = i2848
  var i2851 = i2831[40]
  var i2850 = []
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.push( request.d('TMPro.TMP_FontWeightPair', i2851[i + 0]) );
  }
  i2830.fontWeights = i2850
  return i2830
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2852 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2853 = data
  i2852.m_FaceIndex = i2853[0]
  i2852.m_FamilyName = i2853[1]
  i2852.m_StyleName = i2853[2]
  i2852.m_PointSize = i2853[3]
  i2852.m_Scale = i2853[4]
  i2852.m_UnitsPerEM = i2853[5]
  i2852.m_LineHeight = i2853[6]
  i2852.m_AscentLine = i2853[7]
  i2852.m_CapLine = i2853[8]
  i2852.m_MeanLine = i2853[9]
  i2852.m_Baseline = i2853[10]
  i2852.m_DescentLine = i2853[11]
  i2852.m_SuperscriptOffset = i2853[12]
  i2852.m_SuperscriptSize = i2853[13]
  i2852.m_SubscriptOffset = i2853[14]
  i2852.m_SubscriptSize = i2853[15]
  i2852.m_UnderlineOffset = i2853[16]
  i2852.m_UnderlineThickness = i2853[17]
  i2852.m_StrikethroughOffset = i2853[18]
  i2852.m_StrikethroughThickness = i2853[19]
  i2852.m_TabWidth = i2853[20]
  return i2852
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2856 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2857 = data
  i2856.m_Index = i2857[0]
  i2856.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2857[1], i2856.m_Metrics)
  i2856.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2857[2], i2856.m_GlyphRect)
  i2856.m_Scale = i2857[3]
  i2856.m_AtlasIndex = i2857[4]
  i2856.m_ClassDefinitionType = i2857[5]
  return i2856
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2858 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2859 = data
  i2858.m_Width = i2859[0]
  i2858.m_Height = i2859[1]
  i2858.m_HorizontalBearingX = i2859[2]
  i2858.m_HorizontalBearingY = i2859[3]
  i2858.m_HorizontalAdvance = i2859[4]
  return i2858
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2860 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2861 = data
  i2860.m_X = i2861[0]
  i2860.m_Y = i2861[1]
  i2860.m_Width = i2861[2]
  i2860.m_Height = i2861[3]
  return i2860
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2864 = root || request.c( 'TMPro.TMP_Character' )
  var i2865 = data
  i2864.m_ElementType = i2865[0]
  i2864.m_Unicode = i2865[1]
  i2864.m_GlyphIndex = i2865[2]
  i2864.m_Scale = i2865[3]
  return i2864
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2870 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2871 = data
  i2870.Name = i2871[0]
  i2870.PointSize = i2871[1]
  i2870.Scale = i2871[2]
  i2870.CharacterCount = i2871[3]
  i2870.LineHeight = i2871[4]
  i2870.Baseline = i2871[5]
  i2870.Ascender = i2871[6]
  i2870.CapHeight = i2871[7]
  i2870.Descender = i2871[8]
  i2870.CenterLine = i2871[9]
  i2870.SuperscriptOffset = i2871[10]
  i2870.SubscriptOffset = i2871[11]
  i2870.SubSize = i2871[12]
  i2870.Underline = i2871[13]
  i2870.UnderlineThickness = i2871[14]
  i2870.strikethrough = i2871[15]
  i2870.strikethroughThickness = i2871[16]
  i2870.TabWidth = i2871[17]
  i2870.Padding = i2871[18]
  i2870.AtlasWidth = i2871[19]
  i2870.AtlasHeight = i2871[20]
  return i2870
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2874 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2875 = data
  i2874.id = i2875[0]
  i2874.x = i2875[1]
  i2874.y = i2875[2]
  i2874.width = i2875[3]
  i2874.height = i2875[4]
  i2874.xOffset = i2875[5]
  i2874.yOffset = i2875[6]
  i2874.xAdvance = i2875[7]
  i2874.scale = i2875[8]
  return i2874
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2876 = root || request.c( 'TMPro.KerningTable' )
  var i2877 = data
  var i2879 = i2877[0]
  var i2878 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2879.length; i += 1) {
    i2878.add(request.d('TMPro.KerningPair', i2879[i + 0]));
  }
  i2876.kerningPairs = i2878
  return i2876
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2882 = root || request.c( 'TMPro.KerningPair' )
  var i2883 = data
  i2882.xOffset = i2883[0]
  i2882.m_FirstGlyph = i2883[1]
  i2882.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2883[2], i2882.m_FirstGlyphAdjustments)
  i2882.m_SecondGlyph = i2883[3]
  i2882.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2883[4], i2882.m_SecondGlyphAdjustments)
  i2882.m_IgnoreSpacingAdjustments = !!i2883[5]
  return i2882
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2884 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2885 = data
  var i2887 = i2885[0]
  var i2886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2887.length; i += 1) {
    i2886.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2887[i + 0]));
  }
  i2884.m_GlyphPairAdjustmentRecords = i2886
  return i2884
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2890 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2891 = data
  i2890.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2891[0], i2890.m_FirstAdjustmentRecord)
  i2890.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2891[1], i2890.m_SecondAdjustmentRecord)
  i2890.m_FeatureLookupFlags = i2891[2]
  return i2890
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2892 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2893 = data
  i2892.m_GlyphIndex = i2893[0]
  i2892.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2893[1], i2892.m_GlyphValueRecord)
  return i2892
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2894 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2895 = data
  i2894.m_XPlacement = i2895[0]
  i2894.m_YPlacement = i2895[1]
  i2894.m_XAdvance = i2895[2]
  i2894.m_YAdvance = i2895[3]
  return i2894
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2896 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2897 = data
  i2896.sourceFontFileName = i2897[0]
  i2896.sourceFontFileGUID = i2897[1]
  i2896.pointSizeSamplingMode = i2897[2]
  i2896.pointSize = i2897[3]
  i2896.padding = i2897[4]
  i2896.packingMode = i2897[5]
  i2896.atlasWidth = i2897[6]
  i2896.atlasHeight = i2897[7]
  i2896.characterSetSelectionMode = i2897[8]
  i2896.characterSequence = i2897[9]
  i2896.referencedFontAssetGUID = i2897[10]
  i2896.referencedTextAssetGUID = i2897[11]
  i2896.fontStyle = i2897[12]
  i2896.fontStyleModifier = i2897[13]
  i2896.renderMode = i2897[14]
  i2896.includeFontFeatures = !!i2897[15]
  return i2896
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2900 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2901 = data
  request.r(i2901[0], i2901[1], 0, i2900, 'regularTypeface')
  request.r(i2901[2], i2901[3], 0, i2900, 'italicTypeface')
  return i2900
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2902 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2903 = data
  i2902.hashCode = i2903[0]
  request.r(i2903[1], i2903[2], 0, i2902, 'material')
  i2902.materialHashCode = i2903[3]
  request.r(i2903[4], i2903[5], 0, i2902, 'spriteSheet')
  var i2905 = i2903[6]
  var i2904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2905.length; i += 1) {
    i2904.add(request.d('TMPro.TMP_Sprite', i2905[i + 0]));
  }
  i2902.spriteInfoList = i2904
  var i2907 = i2903[7]
  var i2906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2907.length; i += 2) {
  request.r(i2907[i + 0], i2907[i + 1], 1, i2906, '')
  }
  i2902.fallbackSpriteAssets = i2906
  i2902.m_Version = i2903[8]
  i2902.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2903[9], i2902.m_FaceInfo)
  var i2909 = i2903[10]
  var i2908 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2909.length; i += 1) {
    i2908.add(request.d('TMPro.TMP_SpriteCharacter', i2909[i + 0]));
  }
  i2902.m_SpriteCharacterTable = i2908
  var i2911 = i2903[11]
  var i2910 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2911.length; i += 1) {
    i2910.add(request.d('TMPro.TMP_SpriteGlyph', i2911[i + 0]));
  }
  i2902.m_SpriteGlyphTable = i2910
  return i2902
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2914 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2915 = data
  i2914.name = i2915[0]
  i2914.hashCode = i2915[1]
  i2914.unicode = i2915[2]
  i2914.pivot = new pc.Vec2( i2915[3], i2915[4] )
  request.r(i2915[5], i2915[6], 0, i2914, 'sprite')
  i2914.id = i2915[7]
  i2914.x = i2915[8]
  i2914.y = i2915[9]
  i2914.width = i2915[10]
  i2914.height = i2915[11]
  i2914.xOffset = i2915[12]
  i2914.yOffset = i2915[13]
  i2914.xAdvance = i2915[14]
  i2914.scale = i2915[15]
  return i2914
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2920 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2921 = data
  i2920.m_Name = i2921[0]
  i2920.m_HashCode = i2921[1]
  i2920.m_ElementType = i2921[2]
  i2920.m_Unicode = i2921[3]
  i2920.m_GlyphIndex = i2921[4]
  i2920.m_Scale = i2921[5]
  return i2920
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2924 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2925 = data
  request.r(i2925[0], i2925[1], 0, i2924, 'sprite')
  i2924.m_Index = i2925[2]
  i2924.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2925[3], i2924.m_Metrics)
  i2924.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2925[4], i2924.m_GlyphRect)
  i2924.m_Scale = i2925[5]
  i2924.m_AtlasIndex = i2925[6]
  i2924.m_ClassDefinitionType = i2925[7]
  return i2924
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2926 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2927 = data
  var i2929 = i2927[0]
  var i2928 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2929.length; i += 1) {
    i2928.add(request.d('TMPro.TMP_Style', i2929[i + 0]));
  }
  i2926.m_StyleList = i2928
  return i2926
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2932 = root || request.c( 'TMPro.TMP_Style' )
  var i2933 = data
  i2932.m_Name = i2933[0]
  i2932.m_HashCode = i2933[1]
  i2932.m_OpeningDefinition = i2933[2]
  i2932.m_ClosingDefinition = i2933[3]
  i2932.m_OpeningTagArray = i2933[4]
  i2932.m_ClosingTagArray = i2933[5]
  i2932.m_OpeningTagUnicodeArray = i2933[6]
  i2932.m_ClosingTagUnicodeArray = i2933[7]
  return i2932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2935 = data
  var i2937 = i2935[0]
  var i2936 = []
  for(var i = 0; i < i2937.length; i += 1) {
    i2936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2937[i + 0]) );
  }
  i2934.files = i2936
  i2934.componentToPrefabIds = i2935[1]
  return i2934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2941 = data
  i2940.path = i2941[0]
  request.r(i2941[1], i2941[2], 0, i2940, 'unityObject')
  return i2940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2943 = data
  var i2945 = i2943[0]
  var i2944 = []
  for(var i = 0; i < i2945.length; i += 1) {
    i2944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2945[i + 0]) );
  }
  i2942.scriptsExecutionOrder = i2944
  var i2947 = i2943[1]
  var i2946 = []
  for(var i = 0; i < i2947.length; i += 1) {
    i2946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2947[i + 0]) );
  }
  i2942.sortingLayers = i2946
  var i2949 = i2943[2]
  var i2948 = []
  for(var i = 0; i < i2949.length; i += 1) {
    i2948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2949[i + 0]) );
  }
  i2942.cullingLayers = i2948
  i2942.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2943[3], i2942.timeSettings)
  i2942.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2943[4], i2942.physicsSettings)
  i2942.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2943[5], i2942.physics2DSettings)
  i2942.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2943[6], i2942.qualitySettings)
  i2942.enableRealtimeShadows = !!i2943[7]
  i2942.enableAutoInstancing = !!i2943[8]
  i2942.enableDynamicBatching = !!i2943[9]
  i2942.lightmapEncodingQuality = i2943[10]
  i2942.desiredColorSpace = i2943[11]
  var i2951 = i2943[12]
  var i2950 = []
  for(var i = 0; i < i2951.length; i += 1) {
    i2950.push( i2951[i + 0] );
  }
  i2942.allTags = i2950
  return i2942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2955 = data
  i2954.name = i2955[0]
  i2954.value = i2955[1]
  return i2954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2959 = data
  i2958.id = i2959[0]
  i2958.name = i2959[1]
  i2958.value = i2959[2]
  return i2958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2963 = data
  i2962.id = i2963[0]
  i2962.name = i2963[1]
  return i2962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2965 = data
  i2964.fixedDeltaTime = i2965[0]
  i2964.maximumDeltaTime = i2965[1]
  i2964.timeScale = i2965[2]
  i2964.maximumParticleTimestep = i2965[3]
  return i2964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2967 = data
  i2966.gravity = new pc.Vec3( i2967[0], i2967[1], i2967[2] )
  i2966.defaultSolverIterations = i2967[3]
  i2966.bounceThreshold = i2967[4]
  i2966.autoSyncTransforms = !!i2967[5]
  i2966.autoSimulation = !!i2967[6]
  var i2969 = i2967[7]
  var i2968 = []
  for(var i = 0; i < i2969.length; i += 1) {
    i2968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2969[i + 0]) );
  }
  i2966.collisionMatrix = i2968
  return i2966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2973 = data
  i2972.enabled = !!i2973[0]
  i2972.layerId = i2973[1]
  i2972.otherLayerId = i2973[2]
  return i2972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2975 = data
  request.r(i2975[0], i2975[1], 0, i2974, 'material')
  i2974.gravity = new pc.Vec2( i2975[2], i2975[3] )
  i2974.positionIterations = i2975[4]
  i2974.velocityIterations = i2975[5]
  i2974.velocityThreshold = i2975[6]
  i2974.maxLinearCorrection = i2975[7]
  i2974.maxAngularCorrection = i2975[8]
  i2974.maxTranslationSpeed = i2975[9]
  i2974.maxRotationSpeed = i2975[10]
  i2974.baumgarteScale = i2975[11]
  i2974.baumgarteTOIScale = i2975[12]
  i2974.timeToSleep = i2975[13]
  i2974.linearSleepTolerance = i2975[14]
  i2974.angularSleepTolerance = i2975[15]
  i2974.defaultContactOffset = i2975[16]
  i2974.autoSimulation = !!i2975[17]
  i2974.queriesHitTriggers = !!i2975[18]
  i2974.queriesStartInColliders = !!i2975[19]
  i2974.callbacksOnDisable = !!i2975[20]
  i2974.reuseCollisionCallbacks = !!i2975[21]
  i2974.autoSyncTransforms = !!i2975[22]
  var i2977 = i2975[23]
  var i2976 = []
  for(var i = 0; i < i2977.length; i += 1) {
    i2976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2977[i + 0]) );
  }
  i2974.collisionMatrix = i2976
  return i2974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2981 = data
  i2980.enabled = !!i2981[0]
  i2980.layerId = i2981[1]
  i2980.otherLayerId = i2981[2]
  return i2980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2983 = data
  var i2985 = i2983[0]
  var i2984 = []
  for(var i = 0; i < i2985.length; i += 1) {
    i2984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2985[i + 0]) );
  }
  i2982.qualityLevels = i2984
  var i2987 = i2983[1]
  var i2986 = []
  for(var i = 0; i < i2987.length; i += 1) {
    i2986.push( i2987[i + 0] );
  }
  i2982.names = i2986
  i2982.shadows = i2983[2]
  i2982.anisotropicFiltering = i2983[3]
  i2982.antiAliasing = i2983[4]
  i2982.lodBias = i2983[5]
  i2982.shadowCascades = i2983[6]
  i2982.shadowDistance = i2983[7]
  i2982.shadowmaskMode = i2983[8]
  i2982.shadowProjection = i2983[9]
  i2982.shadowResolution = i2983[10]
  i2982.softParticles = !!i2983[11]
  i2982.softVegetation = !!i2983[12]
  i2982.activeColorSpace = i2983[13]
  i2982.desiredColorSpace = i2983[14]
  i2982.masterTextureLimit = i2983[15]
  i2982.maxQueuedFrames = i2983[16]
  i2982.particleRaycastBudget = i2983[17]
  i2982.pixelLightCount = i2983[18]
  i2982.realtimeReflectionProbes = !!i2983[19]
  i2982.shadowCascade2Split = i2983[20]
  i2982.shadowCascade4Split = new pc.Vec3( i2983[21], i2983[22], i2983[23] )
  i2982.streamingMipmapsActive = !!i2983[24]
  i2982.vSyncCount = i2983[25]
  i2982.asyncUploadBufferSize = i2983[26]
  i2982.asyncUploadTimeSlice = i2983[27]
  i2982.billboardsFaceCameraPosition = !!i2983[28]
  i2982.shadowNearPlaneOffset = i2983[29]
  i2982.streamingMipmapsMemoryBudget = i2983[30]
  i2982.maximumLODLevel = i2983[31]
  i2982.streamingMipmapsAddAllCameras = !!i2983[32]
  i2982.streamingMipmapsMaxLevelReduction = i2983[33]
  i2982.streamingMipmapsRenderersPerFrame = i2983[34]
  i2982.resolutionScalingFixedDPIFactor = i2983[35]
  i2982.streamingMipmapsMaxFileIORequests = i2983[36]
  i2982.currentQualityLevel = i2983[37]
  return i2982
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2990 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2991 = data
  i2990.xPlacement = i2991[0]
  i2990.yPlacement = i2991[1]
  i2990.xAdvance = i2991[2]
  i2990.yAdvance = i2991[3]
  return i2990
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[2],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[2],"77":[78],"79":[80],"81":[80],"13":[12],"5":[2],"29":[12],"82":[55],"83":[12],"84":[6],"85":[12],"86":[12],"16":[13],"18":[17,12],"87":[12],"15":[13],"88":[12],"89":[12],"25":[12],"90":[12],"91":[12],"92":[12],"93":[12],"26":[12],"94":[12],"95":[17,12],"96":[12],"28":[12],"27":[12],"97":[12],"98":[17,12],"99":[12],"100":[30],"101":[30],"31":[30],"102":[30],"103":[2],"104":[2],"105":[106],"107":[2],"108":[12],"109":[78,12],"110":[12,17],"111":[12],"112":[17,12],"113":[78],"114":[17,12],"115":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAspectFitter","UnityEngine.SpriteRenderer","AudioManager","AudioLibrary","TaskManager","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.CanvasGroup","CanvasGroupAnimator","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Button","GameManager","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","DragToResizeLeft","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ButtonPulse","StartClickHandler","UnityEngine.GameObject","UnityEngine.Texture2D","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bullet","UIHorizontalDraggable","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "core2d";

Deserializers.lunaInitializationTime = "08/14/2025 11:33:59";

Deserializers.lunaDaysRunning = "12.7";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "30032";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

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

Deserializers.buildID = "8db1287e-9bfa-4a59-bad2-18fb3254e7fa";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


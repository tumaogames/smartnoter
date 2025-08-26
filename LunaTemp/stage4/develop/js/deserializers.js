var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.JointSpring' )
  var i425 = data
  i424.spring = i425[0]
  i424.damper = i425[1]
  i424.targetPosition = i425[2]
  return i424
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.JointMotor' )
  var i427 = data
  i426.m_TargetVelocity = i427[0]
  i426.m_Force = i427[1]
  i426.m_FreeSpin = i427[2]
  return i426
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointLimits' )
  var i429 = data
  i428.m_Min = i429[0]
  i428.m_Max = i429[1]
  i428.m_Bounciness = i429[2]
  i428.m_BounceMinVelocity = i429[3]
  i428.m_ContactDistance = i429[4]
  i428.minBounce = i429[5]
  i428.maxBounce = i429[6]
  return i428
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointDrive' )
  var i431 = data
  i430.m_PositionSpring = i431[0]
  i430.m_PositionDamper = i431[1]
  i430.m_MaximumForce = i431[2]
  i430.m_UseAcceleration = i431[3]
  return i430
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i433 = data
  i432.m_Spring = i433[0]
  i432.m_Damper = i433[1]
  return i432
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i435 = data
  i434.m_Limit = i435[0]
  i434.m_Bounciness = i435[1]
  i434.m_ContactDistance = i435[2]
  return i434
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i437 = data
  i436.m_ExtremumSlip = i437[0]
  i436.m_ExtremumValue = i437[1]
  i436.m_AsymptoteSlip = i437[2]
  i436.m_AsymptoteValue = i437[3]
  i436.m_Stiffness = i437[4]
  return i436
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i439 = data
  i438.m_LowerAngle = i439[0]
  i438.m_UpperAngle = i439[1]
  return i438
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i441 = data
  i440.m_MotorSpeed = i441[0]
  i440.m_MaximumMotorTorque = i441[1]
  return i440
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i443 = data
  i442.m_DampingRatio = i443[0]
  i442.m_Frequency = i443[1]
  i442.m_Angle = i443[2]
  return i442
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i445 = data
  i444.m_LowerTranslation = i445[0]
  i444.m_UpperTranslation = i445[1]
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i446 = root || new pc.UnityMaterial()
  var i447 = data
  i446.name = i447[0]
  request.r(i447[1], i447[2], 0, i446, 'shader')
  i446.renderQueue = i447[3]
  i446.enableInstancing = !!i447[4]
  var i449 = i447[5]
  var i448 = []
  for(var i = 0; i < i449.length; i += 1) {
    i448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i449[i + 0]) );
  }
  i446.floatParameters = i448
  var i451 = i447[6]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i451[i + 0]) );
  }
  i446.colorParameters = i450
  var i453 = i447[7]
  var i452 = []
  for(var i = 0; i < i453.length; i += 1) {
    i452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i453[i + 0]) );
  }
  i446.vectorParameters = i452
  var i455 = i447[8]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i455[i + 0]) );
  }
  i446.textureParameters = i454
  var i457 = i447[9]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i457[i + 0]) );
  }
  i446.materialFlags = i456
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i461 = data
  i460.name = i461[0]
  i460.value = i461[1]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i465 = data
  i464.name = i465[0]
  i464.value = new pc.Color(i465[1], i465[2], i465[3], i465[4])
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i469 = data
  i468.name = i469[0]
  i468.value = new pc.Vec4( i469[1], i469[2], i469[3], i469[4] )
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i473 = data
  i472.name = i473[0]
  request.r(i473[1], i473[2], 0, i472, 'value')
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i477 = data
  i476.name = i477[0]
  i476.enabled = !!i477[1]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i479 = data
  i478.name = i479[0]
  i478.width = i479[1]
  i478.height = i479[2]
  i478.mipmapCount = i479[3]
  i478.anisoLevel = i479[4]
  i478.filterMode = i479[5]
  i478.hdr = !!i479[6]
  i478.format = i479[7]
  i478.wrapMode = i479[8]
  i478.alphaIsTransparency = !!i479[9]
  i478.alphaSource = i479[10]
  i478.graphicsFormat = i479[11]
  i478.sRGBTexture = !!i479[12]
  i478.desiredColorSpace = i479[13]
  i478.wrapU = i479[14]
  i478.wrapV = i479[15]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i481 = data
  i480.name = i481[0]
  i480.index = i481[1]
  i480.startup = !!i481[2]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i483 = data
  i482.position = new pc.Vec3( i483[0], i483[1], i483[2] )
  i482.scale = new pc.Vec3( i483[3], i483[4], i483[5] )
  i482.rotation = new pc.Quat(i483[6], i483[7], i483[8], i483[9])
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i485 = data
  i484.enabled = !!i485[0]
  i484.aspect = i485[1]
  i484.orthographic = !!i485[2]
  i484.orthographicSize = i485[3]
  i484.backgroundColor = new pc.Color(i485[4], i485[5], i485[6], i485[7])
  i484.nearClipPlane = i485[8]
  i484.farClipPlane = i485[9]
  i484.fieldOfView = i485[10]
  i484.depth = i485[11]
  i484.clearFlags = i485[12]
  i484.cullingMask = i485[13]
  i484.rect = i485[14]
  request.r(i485[15], i485[16], 0, i484, 'targetTexture')
  i484.usePhysicalProperties = !!i485[17]
  i484.focalLength = i485[18]
  i484.sensorSize = new pc.Vec2( i485[19], i485[20] )
  i484.lensShift = new pc.Vec2( i485[21], i485[22] )
  i484.gateFit = i485[23]
  i484.commandBufferCount = i485[24]
  i484.cameraType = i485[25]
  return i484
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i486 = root || request.c( 'CameraAspectFitter' )
  var i487 = data
  request.r(i487[0], i487[1], 0, i486, 'targetSprite')
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i489 = data
  i488.name = i489[0]
  i488.tagId = i489[1]
  i488.enabled = !!i489[2]
  i488.isStatic = !!i489[3]
  i488.layer = i489[4]
  return i488
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i490 = root || request.c( 'AudioManager' )
  var i491 = data
  request.r(i491[0], i491[1], 0, i490, 'library')
  i490.sfxPoolSize = i491[2]
  return i490
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i492 = root || request.c( 'TaskManager' )
  var i493 = data
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i495 = data
  i494.enabled = !!i495[0]
  request.r(i495[1], i495[2], 0, i494, 'sharedMaterial')
  var i497 = i495[3]
  var i496 = []
  for(var i = 0; i < i497.length; i += 2) {
  request.r(i497[i + 0], i497[i + 1], 2, i496, '')
  }
  i494.sharedMaterials = i496
  i494.receiveShadows = !!i495[4]
  i494.shadowCastingMode = i495[5]
  i494.sortingLayerID = i495[6]
  i494.sortingOrder = i495[7]
  i494.lightmapIndex = i495[8]
  i494.lightmapSceneIndex = i495[9]
  i494.lightmapScaleOffset = new pc.Vec4( i495[10], i495[11], i495[12], i495[13] )
  i494.lightProbeUsage = i495[14]
  i494.reflectionProbeUsage = i495[15]
  i494.color = new pc.Color(i495[16], i495[17], i495[18], i495[19])
  request.r(i495[20], i495[21], 0, i494, 'sprite')
  i494.flipX = !!i495[22]
  i494.flipY = !!i495[23]
  i494.drawMode = i495[24]
  i494.size = new pc.Vec2( i495[25], i495[26] )
  i494.tileMode = i495[27]
  i494.adaptiveModeThreshold = i495[28]
  i494.maskInteraction = i495[29]
  i494.spriteSortPoint = i495[30]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i501 = data
  i500.pivot = new pc.Vec2( i501[0], i501[1] )
  i500.anchorMin = new pc.Vec2( i501[2], i501[3] )
  i500.anchorMax = new pc.Vec2( i501[4], i501[5] )
  i500.sizeDelta = new pc.Vec2( i501[6], i501[7] )
  i500.anchoredPosition3D = new pc.Vec3( i501[8], i501[9], i501[10] )
  i500.rotation = new pc.Quat(i501[11], i501[12], i501[13], i501[14])
  i500.scale = new pc.Vec3( i501[15], i501[16], i501[17] )
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i503 = data
  i502.enabled = !!i503[0]
  i502.planeDistance = i503[1]
  i502.referencePixelsPerUnit = i503[2]
  i502.isFallbackOverlay = !!i503[3]
  i502.renderMode = i503[4]
  i502.renderOrder = i503[5]
  i502.sortingLayerName = i503[6]
  i502.sortingOrder = i503[7]
  i502.scaleFactor = i503[8]
  request.r(i503[9], i503[10], 0, i502, 'worldCamera')
  i502.overrideSorting = !!i503[11]
  i502.pixelPerfect = !!i503[12]
  i502.targetDisplay = i503[13]
  i502.overridePixelPerfect = !!i503[14]
  return i502
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i505 = data
  i504.m_UiScaleMode = i505[0]
  i504.m_ReferencePixelsPerUnit = i505[1]
  i504.m_ScaleFactor = i505[2]
  i504.m_ReferenceResolution = new pc.Vec2( i505[3], i505[4] )
  i504.m_ScreenMatchMode = i505[5]
  i504.m_MatchWidthOrHeight = i505[6]
  i504.m_PhysicalUnit = i505[7]
  i504.m_FallbackScreenDPI = i505[8]
  i504.m_DefaultSpriteDPI = i505[9]
  i504.m_DynamicPixelsPerUnit = i505[10]
  i504.m_PresetInfoIsWorld = !!i505[11]
  return i504
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i507 = data
  i506.m_IgnoreReversedGraphics = !!i507[0]
  i506.m_BlockingObjects = i507[1]
  i506.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i507[2] )
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i509 = data
  i508.cullTransparentMesh = !!i509[0]
  return i508
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.UI.Image' )
  var i511 = data
  request.r(i511[0], i511[1], 0, i510, 'm_Sprite')
  i510.m_Type = i511[2]
  i510.m_PreserveAspect = !!i511[3]
  i510.m_FillCenter = !!i511[4]
  i510.m_FillMethod = i511[5]
  i510.m_FillAmount = i511[6]
  i510.m_FillClockwise = !!i511[7]
  i510.m_FillOrigin = i511[8]
  i510.m_UseSpriteMesh = !!i511[9]
  i510.m_PixelsPerUnitMultiplier = i511[10]
  request.r(i511[11], i511[12], 0, i510, 'm_Material')
  i510.m_Maskable = !!i511[13]
  i510.m_Color = new pc.Color(i511[14], i511[15], i511[16], i511[17])
  i510.m_RaycastTarget = !!i511[18]
  i510.m_RaycastPadding = new pc.Vec4( i511[19], i511[20], i511[21], i511[22] )
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i513 = data
  i512.m_Alpha = i513[0]
  i512.m_Interactable = !!i513[1]
  i512.m_BlocksRaycasts = !!i513[2]
  i512.m_IgnoreParentGroups = !!i513[3]
  i512.enabled = !!i513[4]
  return i512
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i514 = root || request.c( 'CanvasGroupAnimator' )
  var i515 = data
  request.r(i515[0], i515[1], 0, i514, 'canvasGroup')
  i514.animateFade = !!i515[2]
  i514.triggerOnStart = !!i515[3]
  i514.isLooping = !!i515[4]
  i514.fadeTo = i515[5]
  i514.fadeDuration = i515[6]
  i514.fadeEaseType = i515[7]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i517 = data
  request.r(i517[0], i517[1], 0, i516, 'animatorController')
  request.r(i517[2], i517[3], 0, i516, 'avatar')
  i516.updateMode = i517[4]
  i516.hasTransformHierarchy = !!i517[5]
  i516.applyRootMotion = !!i517[6]
  var i519 = i517[7]
  var i518 = []
  for(var i = 0; i < i519.length; i += 2) {
  request.r(i519[i + 0], i519[i + 1], 2, i518, '')
  }
  i516.humanBones = i518
  i516.enabled = !!i517[8]
  return i516
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.UI.Button' )
  var i523 = data
  i522.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i523[0], i522.m_OnClick)
  i522.m_Navigation = request.d('UnityEngine.UI.Navigation', i523[1], i522.m_Navigation)
  i522.m_Transition = i523[2]
  i522.m_Colors = request.d('UnityEngine.UI.ColorBlock', i523[3], i522.m_Colors)
  i522.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i523[4], i522.m_SpriteState)
  i522.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i523[5], i522.m_AnimationTriggers)
  i522.m_Interactable = !!i523[6]
  request.r(i523[7], i523[8], 0, i522, 'm_TargetGraphic')
  return i522
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i525 = data
  i524.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i525[0], i524.m_PersistentCalls)
  return i524
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i527 = data
  var i529 = i527[0]
  var i528 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i529.length; i += 1) {
    i528.add(request.d('UnityEngine.Events.PersistentCall', i529[i + 0]));
  }
  i526.m_Calls = i528
  return i526
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'm_Target')
  i532.m_TargetAssemblyTypeName = i533[2]
  i532.m_MethodName = i533[3]
  i532.m_Mode = i533[4]
  i532.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i533[5], i532.m_Arguments)
  i532.m_CallState = i533[6]
  return i532
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i535 = data
  request.r(i535[0], i535[1], 0, i534, 'm_ObjectArgument')
  i534.m_ObjectArgumentAssemblyTypeName = i535[2]
  i534.m_IntArgument = i535[3]
  i534.m_FloatArgument = i535[4]
  i534.m_StringArgument = i535[5]
  i534.m_BoolArgument = !!i535[6]
  return i534
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i537 = data
  i536.m_Mode = i537[0]
  i536.m_WrapAround = !!i537[1]
  request.r(i537[2], i537[3], 0, i536, 'm_SelectOnUp')
  request.r(i537[4], i537[5], 0, i536, 'm_SelectOnDown')
  request.r(i537[6], i537[7], 0, i536, 'm_SelectOnLeft')
  request.r(i537[8], i537[9], 0, i536, 'm_SelectOnRight')
  return i536
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i539 = data
  i538.m_NormalColor = new pc.Color(i539[0], i539[1], i539[2], i539[3])
  i538.m_HighlightedColor = new pc.Color(i539[4], i539[5], i539[6], i539[7])
  i538.m_PressedColor = new pc.Color(i539[8], i539[9], i539[10], i539[11])
  i538.m_SelectedColor = new pc.Color(i539[12], i539[13], i539[14], i539[15])
  i538.m_DisabledColor = new pc.Color(i539[16], i539[17], i539[18], i539[19])
  i538.m_ColorMultiplier = i539[20]
  i538.m_FadeDuration = i539[21]
  return i538
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i541 = data
  request.r(i541[0], i541[1], 0, i540, 'm_HighlightedSprite')
  request.r(i541[2], i541[3], 0, i540, 'm_PressedSprite')
  request.r(i541[4], i541[5], 0, i540, 'm_SelectedSprite')
  request.r(i541[6], i541[7], 0, i540, 'm_DisabledSprite')
  return i540
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i543 = data
  i542.m_NormalTrigger = i543[0]
  i542.m_HighlightedTrigger = i543[1]
  i542.m_PressedTrigger = i543[2]
  i542.m_SelectedTrigger = i543[3]
  i542.m_DisabledTrigger = i543[4]
  return i542
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i545 = data
  i544.m_Spacing = i545[0]
  i544.m_ChildForceExpandWidth = !!i545[1]
  i544.m_ChildForceExpandHeight = !!i545[2]
  i544.m_ChildControlWidth = !!i545[3]
  i544.m_ChildControlHeight = !!i545[4]
  i544.m_ChildScaleWidth = !!i545[5]
  i544.m_ChildScaleHeight = !!i545[6]
  i544.m_ReverseArrangement = !!i545[7]
  i544.m_Padding = UnityEngine.RectOffset.FromPaddings(i545[8], i545[9], i545[10], i545[11])
  i544.m_ChildAlignment = i545[12]
  return i544
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.UI.Mask' )
  var i547 = data
  i546.m_ShowMaskGraphic = !!i547[0]
  return i546
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i549 = data
  request.r(i549[0], i549[1], 0, i548, 'm_Content')
  i548.m_Horizontal = !!i549[2]
  i548.m_Vertical = !!i549[3]
  i548.m_MovementType = i549[4]
  i548.m_Elasticity = i549[5]
  i548.m_Inertia = !!i549[6]
  i548.m_DecelerationRate = i549[7]
  i548.m_ScrollSensitivity = i549[8]
  request.r(i549[9], i549[10], 0, i548, 'm_Viewport')
  request.r(i549[11], i549[12], 0, i548, 'm_HorizontalScrollbar')
  request.r(i549[13], i549[14], 0, i548, 'm_VerticalScrollbar')
  i548.m_HorizontalScrollbarVisibility = i549[15]
  i548.m_VerticalScrollbarVisibility = i549[16]
  i548.m_HorizontalScrollbarSpacing = i549[17]
  i548.m_VerticalScrollbarSpacing = i549[18]
  i548.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i549[19], i548.m_OnValueChanged)
  return i548
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i551 = data
  i550.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i551[0], i550.m_PersistentCalls)
  return i550
}

Deserializers["DragToResizeLeft"] = function (request, data, root) {
  var i552 = root || request.c( 'DragToResizeLeft' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'target')
  i552.minWidth = i553[2]
  return i552
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i555 = data
  request.r(i555[0], i555[1], 0, i554, 'm_FirstSelected')
  i554.m_sendNavigationEvents = !!i555[2]
  i554.m_DragThreshold = i555[3]
  return i554
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i557 = data
  i556.m_HorizontalAxis = i557[0]
  i556.m_VerticalAxis = i557[1]
  i556.m_SubmitButton = i557[2]
  i556.m_CancelButton = i557[3]
  i556.m_InputActionsPerSecond = i557[4]
  i556.m_RepeatDelay = i557[5]
  i556.m_ForceModuleActive = !!i557[6]
  i556.m_SendPointerHoverToParent = !!i557[7]
  return i556
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i558 = root || request.c( 'ButtonPulse' )
  var i559 = data
  i558.scaleAmount = i559[0]
  i558.pulseDuration = i559[1]
  return i558
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i560 = root || request.c( 'StartClickHandler' )
  var i561 = data
  return i560
}

Deserializers["GameManager"] = function (request, data, root) {
  var i562 = root || request.c( 'GameManager' )
  var i563 = data
  request.r(i563[0], i563[1], 0, i562, 'endPanel')
  i562.end = !!i563[2]
  request.r(i563[3], i563[4], 0, i562, 'hand')
  request.r(i563[5], i563[6], 0, i562, 'hand2')
  i562.enableSound = !!i563[7]
  request.r(i563[8], i563[9], 0, i562, 'startClickHandler')
  i562.currentScore = i563[10]
  request.r(i563[11], i563[12], 0, i562, 'BodyToSummarize')
  request.r(i563[13], i563[14], 0, i562, 'SummarizedText')
  request.r(i563[15], i563[16], 0, i562, 'transcriptBtnBlue')
  request.r(i563[17], i563[18], 0, i562, 'transcriptBtn')
  request.r(i563[19], i563[20], 0, i562, 'summaryBtn')
  request.r(i563[21], i563[22], 0, i562, 'summaryBtnBlue')
  request.r(i563[23], i563[24], 0, i562, 'mainPanel')
  request.r(i563[25], i563[26], 0, i562, 'handle1')
  request.r(i563[27], i563[28], 0, i562, 'animator')
  request.r(i563[29], i563[30], 0, i562, 'maskA')
  request.r(i563[31], i563[32], 0, i562, 'filter')
  request.r(i563[33], i563[34], 0, i562, 'arrow')
  request.r(i563[35], i563[36], 0, i562, 'toTap')
  request.r(i563[37], i563[38], 0, i562, 'openingPanel')
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i565 = data
  i564.ambientIntensity = i565[0]
  i564.reflectionIntensity = i565[1]
  i564.ambientMode = i565[2]
  i564.ambientLight = new pc.Color(i565[3], i565[4], i565[5], i565[6])
  i564.ambientSkyColor = new pc.Color(i565[7], i565[8], i565[9], i565[10])
  i564.ambientGroundColor = new pc.Color(i565[11], i565[12], i565[13], i565[14])
  i564.ambientEquatorColor = new pc.Color(i565[15], i565[16], i565[17], i565[18])
  i564.fogColor = new pc.Color(i565[19], i565[20], i565[21], i565[22])
  i564.fogEndDistance = i565[23]
  i564.fogStartDistance = i565[24]
  i564.fogDensity = i565[25]
  i564.fog = !!i565[26]
  request.r(i565[27], i565[28], 0, i564, 'skybox')
  i564.fogMode = i565[29]
  var i567 = i565[30]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i567[i + 0]) );
  }
  i564.lightmaps = i566
  i564.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i565[31], i564.lightProbes)
  i564.lightmapsMode = i565[32]
  i564.mixedBakeMode = i565[33]
  i564.environmentLightingMode = i565[34]
  i564.ambientProbe = new pc.SphericalHarmonicsL2(i565[35])
  i564.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i565[36])
  i564.useReferenceAmbientProbe = !!i565[37]
  request.r(i565[38], i565[39], 0, i564, 'customReflection')
  request.r(i565[40], i565[41], 0, i564, 'defaultReflection')
  i564.defaultReflectionMode = i565[42]
  i564.defaultReflectionResolution = i565[43]
  i564.sunLightObjectId = i565[44]
  i564.pixelLightCount = i565[45]
  i564.defaultReflectionHDR = !!i565[46]
  i564.hasLightDataAsset = !!i565[47]
  i564.hasManualGenerate = !!i565[48]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i571 = data
  request.r(i571[0], i571[1], 0, i570, 'lightmapColor')
  request.r(i571[2], i571[3], 0, i570, 'lightmapDirection')
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i572 = root || new UnityEngine.LightProbes()
  var i573 = data
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i581 = data
  var i583 = i581[0]
  var i582 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i583.length; i += 1) {
    i582.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i583[i + 0]));
  }
  i580.ShaderCompilationErrors = i582
  i580.name = i581[1]
  i580.guid = i581[2]
  var i585 = i581[3]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( i585[i + 0] );
  }
  i580.shaderDefinedKeywords = i584
  var i587 = i581[4]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i587[i + 0]) );
  }
  i580.passes = i586
  var i589 = i581[5]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i589[i + 0]) );
  }
  i580.usePasses = i588
  var i591 = i581[6]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i591[i + 0]) );
  }
  i580.defaultParameterValues = i590
  request.r(i581[7], i581[8], 0, i580, 'unityFallbackShader')
  i580.readDepth = !!i581[9]
  i580.isCreatedByShaderGraph = !!i581[10]
  i580.compiled = !!i581[11]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i595 = data
  i594.shaderName = i595[0]
  i594.errorMessage = i595[1]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i600 = root || new pc.UnityShaderPass()
  var i601 = data
  i600.id = i601[0]
  i600.subShaderIndex = i601[1]
  i600.name = i601[2]
  i600.passType = i601[3]
  i600.grabPassTextureName = i601[4]
  i600.usePass = !!i601[5]
  i600.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i601[6], i600.zTest)
  i600.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i601[7], i600.zWrite)
  i600.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i601[8], i600.culling)
  i600.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i601[9], i600.blending)
  i600.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i601[10], i600.alphaBlending)
  i600.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i601[11], i600.colorWriteMask)
  i600.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i601[12], i600.offsetUnits)
  i600.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i601[13], i600.offsetFactor)
  i600.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i601[14], i600.stencilRef)
  i600.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i601[15], i600.stencilReadMask)
  i600.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i601[16], i600.stencilWriteMask)
  i600.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i601[17], i600.stencilOp)
  i600.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i601[18], i600.stencilOpFront)
  i600.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i601[19], i600.stencilOpBack)
  var i603 = i601[20]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i603[i + 0]) );
  }
  i600.tags = i602
  var i605 = i601[21]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( i605[i + 0] );
  }
  i600.passDefinedKeywords = i604
  var i607 = i601[22]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i607[i + 0]) );
  }
  i600.passDefinedKeywordGroups = i606
  var i609 = i601[23]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i609[i + 0]) );
  }
  i600.variants = i608
  var i611 = i601[24]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i611[i + 0]) );
  }
  i600.excludedVariants = i610
  i600.hasDepthReader = !!i601[25]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i613 = data
  i612.val = i613[0]
  i612.name = i613[1]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i615 = data
  i614.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i615[0], i614.src)
  i614.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i615[1], i614.dst)
  i614.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i615[2], i614.op)
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i617 = data
  i616.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i617[0], i616.pass)
  i616.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i617[1], i616.fail)
  i616.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i617[2], i616.zFail)
  i616.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i617[3], i616.comp)
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i621 = data
  i620.name = i621[0]
  i620.value = i621[1]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i625 = data
  var i627 = i625[0]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( i627[i + 0] );
  }
  i624.keywords = i626
  i624.hasDiscard = !!i625[1]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i631 = data
  i630.passId = i631[0]
  i630.subShaderIndex = i631[1]
  var i633 = i631[2]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( i633[i + 0] );
  }
  i630.keywords = i632
  i630.vertexProgram = i631[3]
  i630.fragmentProgram = i631[4]
  i630.exportedForWebGl2 = !!i631[5]
  i630.readDepth = !!i631[6]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'shader')
  i636.pass = i637[2]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i641 = data
  i640.name = i641[0]
  i640.type = i641[1]
  i640.value = new pc.Vec4( i641[2], i641[3], i641[4], i641[5] )
  i640.textureValue = i641[6]
  i640.shaderPropertyFlag = i641[7]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i643 = data
  i642.name = i643[0]
  request.r(i643[1], i643[2], 0, i642, 'texture')
  i642.aabb = i643[3]
  i642.vertices = i643[4]
  i642.triangles = i643[5]
  i642.textureRect = UnityEngine.Rect.MinMaxRect(i643[6], i643[7], i643[8], i643[9])
  i642.packedRect = UnityEngine.Rect.MinMaxRect(i643[10], i643[11], i643[12], i643[13])
  i642.border = new pc.Vec4( i643[14], i643[15], i643[16], i643[17] )
  i642.transparency = i643[18]
  i642.bounds = i643[19]
  i642.pixelsPerUnit = i643[20]
  i642.textureWidth = i643[21]
  i642.textureHeight = i643[22]
  i642.nativeSize = new pc.Vec2( i643[23], i643[24] )
  i642.pivot = new pc.Vec2( i643[25], i643[26] )
  i642.textureRectOffset = new pc.Vec2( i643[27], i643[28] )
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i645 = data
  i644.name = i645[0]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i647 = data
  i646.name = i647[0]
  i646.wrapMode = i647[1]
  i646.isLooping = !!i647[2]
  i646.length = i647[3]
  var i649 = i647[4]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i649[i + 0]) );
  }
  i646.curves = i648
  var i651 = i647[5]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i651[i + 0]) );
  }
  i646.events = i650
  i646.halfPrecision = !!i647[6]
  i646._frameRate = i647[7]
  i646.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i647[8], i646.localBounds)
  i646.hasMuscleCurves = !!i647[9]
  var i653 = i647[10]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( i653[i + 0] );
  }
  i646.clipMuscleConstant = i652
  i646.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i647[11], i646.clipBindingConstant)
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i657 = data
  i656.path = i657[0]
  i656.hash = i657[1]
  i656.componentType = i657[2]
  i656.property = i657[3]
  i656.keys = i657[4]
  var i659 = i657[5]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i659[i + 0]) );
  }
  i656.objectReferenceKeys = i658
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i663 = data
  i662.time = i663[0]
  request.r(i663[1], i663[2], 0, i662, 'value')
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i667 = data
  i666.functionName = i667[0]
  i666.floatParameter = i667[1]
  i666.intParameter = i667[2]
  i666.stringParameter = i667[3]
  request.r(i667[4], i667[5], 0, i666, 'objectReferenceParameter')
  i666.time = i667[6]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i669 = data
  i668.center = new pc.Vec3( i669[0], i669[1], i669[2] )
  i668.extends = new pc.Vec3( i669[3], i669[4], i669[5] )
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i673 = data
  var i675 = i673[0]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( i675[i + 0] );
  }
  i672.genericBindings = i674
  var i677 = i673[1]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( i677[i + 0] );
  }
  i672.pptrCurveMapping = i676
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i679 = data
  i678.name = i679[0]
  var i681 = i679[1]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i681[i + 0]) );
  }
  i678.layers = i680
  var i683 = i679[2]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i683[i + 0]) );
  }
  i678.parameters = i682
  i678.animationClips = i679[3]
  i678.avatarUnsupported = i679[4]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i687 = data
  i686.name = i687[0]
  i686.defaultWeight = i687[1]
  i686.blendingMode = i687[2]
  i686.avatarMask = i687[3]
  i686.syncedLayerIndex = i687[4]
  i686.syncedLayerAffectsTiming = !!i687[5]
  i686.syncedLayers = i687[6]
  i686.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i687[7], i686.stateMachine)
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i689 = data
  i688.id = i689[0]
  i688.name = i689[1]
  i688.path = i689[2]
  var i691 = i689[3]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i691[i + 0]) );
  }
  i688.states = i690
  var i693 = i689[4]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i693[i + 0]) );
  }
  i688.machines = i692
  var i695 = i689[5]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i695[i + 0]) );
  }
  i688.entryStateTransitions = i694
  var i697 = i689[6]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i697[i + 0]) );
  }
  i688.exitStateTransitions = i696
  var i699 = i689[7]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i699[i + 0]) );
  }
  i688.anyStateTransitions = i698
  i688.defaultStateId = i689[8]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i703 = data
  i702.id = i703[0]
  i702.name = i703[1]
  i702.cycleOffset = i703[2]
  i702.cycleOffsetParameter = i703[3]
  i702.cycleOffsetParameterActive = !!i703[4]
  i702.mirror = !!i703[5]
  i702.mirrorParameter = i703[6]
  i702.mirrorParameterActive = !!i703[7]
  i702.motionId = i703[8]
  i702.nameHash = i703[9]
  i702.fullPathHash = i703[10]
  i702.speed = i703[11]
  i702.speedParameter = i703[12]
  i702.speedParameterActive = !!i703[13]
  i702.tag = i703[14]
  i702.tagHash = i703[15]
  i702.writeDefaultValues = !!i703[16]
  var i705 = i703[17]
  var i704 = []
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 2, i704, '')
  }
  i702.behaviours = i704
  var i707 = i703[18]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i707[i + 0]) );
  }
  i702.transitions = i706
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i713 = data
  i712.fullPath = i713[0]
  i712.canTransitionToSelf = !!i713[1]
  i712.duration = i713[2]
  i712.exitTime = i713[3]
  i712.hasExitTime = !!i713[4]
  i712.hasFixedDuration = !!i713[5]
  i712.interruptionSource = i713[6]
  i712.offset = i713[7]
  i712.orderedInterruption = !!i713[8]
  i712.destinationStateId = i713[9]
  i712.isExit = !!i713[10]
  i712.mute = !!i713[11]
  i712.solo = !!i713[12]
  var i715 = i713[13]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i715[i + 0]) );
  }
  i712.conditions = i714
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i721 = data
  i720.destinationStateId = i721[0]
  i720.isExit = !!i721[1]
  i720.mute = !!i721[2]
  i720.solo = !!i721[3]
  var i723 = i721[4]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i723[i + 0]) );
  }
  i720.conditions = i722
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i727 = data
  i726.defaultBool = !!i727[0]
  i726.defaultFloat = i727[1]
  i726.defaultInt = i727[2]
  i726.name = i727[3]
  i726.nameHash = i727[4]
  i726.type = i727[5]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i731 = data
  i730.mode = i731[0]
  i730.parameter = i731[1]
  i730.threshold = i731[2]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i733 = data
  i732.name = i733[0]
  i732.bytes64 = i733[1]
  i732.data = i733[2]
  return i732
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i734 = root || request.c( 'AudioLibrary' )
  var i735 = data
  var i737 = i735[0]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i737.length; i += 1) {
    i736.add(request.d('AudioLibrary+ClipEntry', i737[i + 0]));
  }
  i734.clips = i736
  return i734
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i740 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i741 = data
  i740.key = i741[0]
  i740.channel = i741[1]
  request.r(i741[2], i741[3], 0, i740, 'clip')
  i740.volume = i741[4]
  i740.loop = !!i741[5]
  return i740
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i742 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i743 = data
  i742.useSafeMode = !!i743[0]
  i742.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i743[1], i742.safeModeOptions)
  i742.timeScale = i743[2]
  i742.unscaledTimeScale = i743[3]
  i742.useSmoothDeltaTime = !!i743[4]
  i742.maxSmoothUnscaledTime = i743[5]
  i742.rewindCallbackMode = i743[6]
  i742.showUnityEditorReport = !!i743[7]
  i742.logBehaviour = i743[8]
  i742.drawGizmos = !!i743[9]
  i742.defaultRecyclable = !!i743[10]
  i742.defaultAutoPlay = i743[11]
  i742.defaultUpdateType = i743[12]
  i742.defaultTimeScaleIndependent = !!i743[13]
  i742.defaultEaseType = i743[14]
  i742.defaultEaseOvershootOrAmplitude = i743[15]
  i742.defaultEasePeriod = i743[16]
  i742.defaultAutoKill = !!i743[17]
  i742.defaultLoopType = i743[18]
  i742.debugMode = !!i743[19]
  i742.debugStoreTargetId = !!i743[20]
  i742.showPreviewPanel = !!i743[21]
  i742.storeSettingsLocation = i743[22]
  i742.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i743[23], i742.modules)
  i742.createASMDEF = !!i743[24]
  i742.showPlayingTweens = !!i743[25]
  i742.showPausedTweens = !!i743[26]
  return i742
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i744 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i745 = data
  i744.logBehaviour = i745[0]
  i744.nestedTweenFailureBehaviour = i745[1]
  return i744
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i746 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i747 = data
  i746.showPanel = !!i747[0]
  i746.audioEnabled = !!i747[1]
  i746.physicsEnabled = !!i747[2]
  i746.physics2DEnabled = !!i747[3]
  i746.spriteEnabled = !!i747[4]
  i746.uiEnabled = !!i747[5]
  i746.textMeshProEnabled = !!i747[6]
  i746.tk2DEnabled = !!i747[7]
  i746.deAudioEnabled = !!i747[8]
  i746.deUnityExtendedEnabled = !!i747[9]
  i746.epoOutlineEnabled = !!i747[10]
  return i746
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i748 = root || request.c( 'TMPro.TMP_Settings' )
  var i749 = data
  i748.m_enableWordWrapping = !!i749[0]
  i748.m_enableKerning = !!i749[1]
  i748.m_enableExtraPadding = !!i749[2]
  i748.m_enableTintAllSprites = !!i749[3]
  i748.m_enableParseEscapeCharacters = !!i749[4]
  i748.m_EnableRaycastTarget = !!i749[5]
  i748.m_GetFontFeaturesAtRuntime = !!i749[6]
  i748.m_missingGlyphCharacter = i749[7]
  i748.m_warningsDisabled = !!i749[8]
  request.r(i749[9], i749[10], 0, i748, 'm_defaultFontAsset')
  i748.m_defaultFontAssetPath = i749[11]
  i748.m_defaultFontSize = i749[12]
  i748.m_defaultAutoSizeMinRatio = i749[13]
  i748.m_defaultAutoSizeMaxRatio = i749[14]
  i748.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i749[15], i749[16] )
  i748.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i749[17], i749[18] )
  i748.m_autoSizeTextContainer = !!i749[19]
  i748.m_IsTextObjectScaleStatic = !!i749[20]
  var i751 = i749[21]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 1, i750, '')
  }
  i748.m_fallbackFontAssets = i750
  i748.m_matchMaterialPreset = !!i749[22]
  request.r(i749[23], i749[24], 0, i748, 'm_defaultSpriteAsset')
  i748.m_defaultSpriteAssetPath = i749[25]
  i748.m_enableEmojiSupport = !!i749[26]
  i748.m_MissingCharacterSpriteUnicode = i749[27]
  i748.m_defaultColorGradientPresetsPath = i749[28]
  request.r(i749[29], i749[30], 0, i748, 'm_defaultStyleSheet')
  i748.m_StyleSheetsResourcePath = i749[31]
  request.r(i749[32], i749[33], 0, i748, 'm_leadingCharacters')
  request.r(i749[34], i749[35], 0, i748, 'm_followingCharacters')
  i748.m_UseModernHangulLineBreakingRules = !!i749[36]
  return i748
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i754 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i755 = data
  i754.hashCode = i755[0]
  request.r(i755[1], i755[2], 0, i754, 'material')
  i754.materialHashCode = i755[3]
  request.r(i755[4], i755[5], 0, i754, 'spriteSheet')
  var i757 = i755[6]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i757.length; i += 1) {
    i756.add(request.d('TMPro.TMP_Sprite', i757[i + 0]));
  }
  i754.spriteInfoList = i756
  var i759 = i755[7]
  var i758 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i759.length; i += 2) {
  request.r(i759[i + 0], i759[i + 1], 1, i758, '')
  }
  i754.fallbackSpriteAssets = i758
  i754.m_Version = i755[8]
  i754.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i755[9], i754.m_FaceInfo)
  var i761 = i755[10]
  var i760 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i761.length; i += 1) {
    i760.add(request.d('TMPro.TMP_SpriteCharacter', i761[i + 0]));
  }
  i754.m_SpriteCharacterTable = i760
  var i763 = i755[11]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i763.length; i += 1) {
    i762.add(request.d('TMPro.TMP_SpriteGlyph', i763[i + 0]));
  }
  i754.m_SpriteGlyphTable = i762
  return i754
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i766 = root || request.c( 'TMPro.TMP_Sprite' )
  var i767 = data
  i766.name = i767[0]
  i766.hashCode = i767[1]
  i766.unicode = i767[2]
  i766.pivot = new pc.Vec2( i767[3], i767[4] )
  request.r(i767[5], i767[6], 0, i766, 'sprite')
  i766.id = i767[7]
  i766.x = i767[8]
  i766.y = i767[9]
  i766.width = i767[10]
  i766.height = i767[11]
  i766.xOffset = i767[12]
  i766.yOffset = i767[13]
  i766.xAdvance = i767[14]
  i766.scale = i767[15]
  return i766
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i771 = data
  i770.m_FaceIndex = i771[0]
  i770.m_FamilyName = i771[1]
  i770.m_StyleName = i771[2]
  i770.m_PointSize = i771[3]
  i770.m_Scale = i771[4]
  i770.m_UnitsPerEM = i771[5]
  i770.m_LineHeight = i771[6]
  i770.m_AscentLine = i771[7]
  i770.m_CapLine = i771[8]
  i770.m_MeanLine = i771[9]
  i770.m_Baseline = i771[10]
  i770.m_DescentLine = i771[11]
  i770.m_SuperscriptOffset = i771[12]
  i770.m_SuperscriptSize = i771[13]
  i770.m_SubscriptOffset = i771[14]
  i770.m_SubscriptSize = i771[15]
  i770.m_UnderlineOffset = i771[16]
  i770.m_UnderlineThickness = i771[17]
  i770.m_StrikethroughOffset = i771[18]
  i770.m_StrikethroughThickness = i771[19]
  i770.m_TabWidth = i771[20]
  return i770
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i774 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i775 = data
  i774.m_Name = i775[0]
  i774.m_HashCode = i775[1]
  i774.m_ElementType = i775[2]
  i774.m_Unicode = i775[3]
  i774.m_GlyphIndex = i775[4]
  i774.m_Scale = i775[5]
  return i774
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i778 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'sprite')
  i778.m_Index = i779[2]
  i778.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i779[3], i778.m_Metrics)
  i778.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i779[4], i778.m_GlyphRect)
  i778.m_Scale = i779[5]
  i778.m_AtlasIndex = i779[6]
  i778.m_ClassDefinitionType = i779[7]
  return i778
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i781 = data
  i780.m_Width = i781[0]
  i780.m_Height = i781[1]
  i780.m_HorizontalBearingX = i781[2]
  i780.m_HorizontalBearingY = i781[3]
  i780.m_HorizontalAdvance = i781[4]
  return i780
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i783 = data
  i782.m_X = i783[0]
  i782.m_Y = i783[1]
  i782.m_Width = i783[2]
  i782.m_Height = i783[3]
  return i782
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i784 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i785 = data
  var i787 = i785[0]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i787.length; i += 1) {
    i786.add(request.d('TMPro.TMP_Style', i787[i + 0]));
  }
  i784.m_StyleList = i786
  return i784
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i790 = root || request.c( 'TMPro.TMP_Style' )
  var i791 = data
  i790.m_Name = i791[0]
  i790.m_HashCode = i791[1]
  i790.m_OpeningDefinition = i791[2]
  i790.m_ClosingDefinition = i791[3]
  i790.m_OpeningTagArray = i791[4]
  i790.m_ClosingTagArray = i791[5]
  i790.m_OpeningTagUnicodeArray = i791[6]
  i790.m_ClosingTagUnicodeArray = i791[7]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i793 = data
  var i795 = i793[0]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i795[i + 0]) );
  }
  i792.files = i794
  i792.componentToPrefabIds = i793[1]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i799 = data
  i798.path = i799[0]
  request.r(i799[1], i799[2], 0, i798, 'unityObject')
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i801 = data
  var i803 = i801[0]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i803[i + 0]) );
  }
  i800.scriptsExecutionOrder = i802
  var i805 = i801[1]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i805[i + 0]) );
  }
  i800.sortingLayers = i804
  var i807 = i801[2]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i807[i + 0]) );
  }
  i800.cullingLayers = i806
  i800.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i801[3], i800.timeSettings)
  i800.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i801[4], i800.physicsSettings)
  i800.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i801[5], i800.physics2DSettings)
  i800.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i801[6], i800.qualitySettings)
  i800.enableRealtimeShadows = !!i801[7]
  i800.enableAutoInstancing = !!i801[8]
  i800.enableDynamicBatching = !!i801[9]
  i800.lightmapEncodingQuality = i801[10]
  i800.desiredColorSpace = i801[11]
  var i809 = i801[12]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( i809[i + 0] );
  }
  i800.allTags = i808
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i813 = data
  i812.name = i813[0]
  i812.value = i813[1]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i817 = data
  i816.id = i817[0]
  i816.name = i817[1]
  i816.value = i817[2]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i821 = data
  i820.id = i821[0]
  i820.name = i821[1]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i823 = data
  i822.fixedDeltaTime = i823[0]
  i822.maximumDeltaTime = i823[1]
  i822.timeScale = i823[2]
  i822.maximumParticleTimestep = i823[3]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i825 = data
  i824.gravity = new pc.Vec3( i825[0], i825[1], i825[2] )
  i824.defaultSolverIterations = i825[3]
  i824.bounceThreshold = i825[4]
  i824.autoSyncTransforms = !!i825[5]
  i824.autoSimulation = !!i825[6]
  var i827 = i825[7]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i827[i + 0]) );
  }
  i824.collisionMatrix = i826
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i831 = data
  i830.enabled = !!i831[0]
  i830.layerId = i831[1]
  i830.otherLayerId = i831[2]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'material')
  i832.gravity = new pc.Vec2( i833[2], i833[3] )
  i832.positionIterations = i833[4]
  i832.velocityIterations = i833[5]
  i832.velocityThreshold = i833[6]
  i832.maxLinearCorrection = i833[7]
  i832.maxAngularCorrection = i833[8]
  i832.maxTranslationSpeed = i833[9]
  i832.maxRotationSpeed = i833[10]
  i832.baumgarteScale = i833[11]
  i832.baumgarteTOIScale = i833[12]
  i832.timeToSleep = i833[13]
  i832.linearSleepTolerance = i833[14]
  i832.angularSleepTolerance = i833[15]
  i832.defaultContactOffset = i833[16]
  i832.autoSimulation = !!i833[17]
  i832.queriesHitTriggers = !!i833[18]
  i832.queriesStartInColliders = !!i833[19]
  i832.callbacksOnDisable = !!i833[20]
  i832.reuseCollisionCallbacks = !!i833[21]
  i832.autoSyncTransforms = !!i833[22]
  var i835 = i833[23]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i835[i + 0]) );
  }
  i832.collisionMatrix = i834
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i839 = data
  i838.enabled = !!i839[0]
  i838.layerId = i839[1]
  i838.otherLayerId = i839[2]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i841 = data
  var i843 = i841[0]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i843[i + 0]) );
  }
  i840.qualityLevels = i842
  var i845 = i841[1]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( i845[i + 0] );
  }
  i840.names = i844
  i840.shadows = i841[2]
  i840.anisotropicFiltering = i841[3]
  i840.antiAliasing = i841[4]
  i840.lodBias = i841[5]
  i840.shadowCascades = i841[6]
  i840.shadowDistance = i841[7]
  i840.shadowmaskMode = i841[8]
  i840.shadowProjection = i841[9]
  i840.shadowResolution = i841[10]
  i840.softParticles = !!i841[11]
  i840.softVegetation = !!i841[12]
  i840.activeColorSpace = i841[13]
  i840.desiredColorSpace = i841[14]
  i840.masterTextureLimit = i841[15]
  i840.maxQueuedFrames = i841[16]
  i840.particleRaycastBudget = i841[17]
  i840.pixelLightCount = i841[18]
  i840.realtimeReflectionProbes = !!i841[19]
  i840.shadowCascade2Split = i841[20]
  i840.shadowCascade4Split = new pc.Vec3( i841[21], i841[22], i841[23] )
  i840.streamingMipmapsActive = !!i841[24]
  i840.vSyncCount = i841[25]
  i840.asyncUploadBufferSize = i841[26]
  i840.asyncUploadTimeSlice = i841[27]
  i840.billboardsFaceCameraPosition = !!i841[28]
  i840.shadowNearPlaneOffset = i841[29]
  i840.streamingMipmapsMemoryBudget = i841[30]
  i840.maximumLODLevel = i841[31]
  i840.streamingMipmapsAddAllCameras = !!i841[32]
  i840.streamingMipmapsMaxLevelReduction = i841[33]
  i840.streamingMipmapsRenderersPerFrame = i841[34]
  i840.resolutionScalingFixedDPIFactor = i841[35]
  i840.streamingMipmapsMaxFileIORequests = i841[36]
  i840.currentQualityLevel = i841[37]
  return i840
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

Deserializers.buildID = "9246bed4-fe1b-43a9-a801-1998a349dcef";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


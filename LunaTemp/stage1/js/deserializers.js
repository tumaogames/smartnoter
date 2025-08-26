var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.JointSpring' )
  var i423 = data
  i422.spring = i423[0]
  i422.damper = i423[1]
  i422.targetPosition = i423[2]
  return i422
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.JointMotor' )
  var i425 = data
  i424.m_TargetVelocity = i425[0]
  i424.m_Force = i425[1]
  i424.m_FreeSpin = i425[2]
  return i424
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.JointLimits' )
  var i427 = data
  i426.m_Min = i427[0]
  i426.m_Max = i427[1]
  i426.m_Bounciness = i427[2]
  i426.m_BounceMinVelocity = i427[3]
  i426.m_ContactDistance = i427[4]
  i426.minBounce = i427[5]
  i426.maxBounce = i427[6]
  return i426
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointDrive' )
  var i429 = data
  i428.m_PositionSpring = i429[0]
  i428.m_PositionDamper = i429[1]
  i428.m_MaximumForce = i429[2]
  i428.m_UseAcceleration = i429[3]
  return i428
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i431 = data
  i430.m_Spring = i431[0]
  i430.m_Damper = i431[1]
  return i430
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i433 = data
  i432.m_Limit = i433[0]
  i432.m_Bounciness = i433[1]
  i432.m_ContactDistance = i433[2]
  return i432
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i435 = data
  i434.m_ExtremumSlip = i435[0]
  i434.m_ExtremumValue = i435[1]
  i434.m_AsymptoteSlip = i435[2]
  i434.m_AsymptoteValue = i435[3]
  i434.m_Stiffness = i435[4]
  return i434
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i437 = data
  i436.m_LowerAngle = i437[0]
  i436.m_UpperAngle = i437[1]
  return i436
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i439 = data
  i438.m_MotorSpeed = i439[0]
  i438.m_MaximumMotorTorque = i439[1]
  return i438
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i441 = data
  i440.m_DampingRatio = i441[0]
  i440.m_Frequency = i441[1]
  i440.m_Angle = i441[2]
  return i440
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i443 = data
  i442.m_LowerTranslation = i443[0]
  i442.m_UpperTranslation = i443[1]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i444 = root || new pc.UnityMaterial()
  var i445 = data
  i444.name = i445[0]
  request.r(i445[1], i445[2], 0, i444, 'shader')
  i444.renderQueue = i445[3]
  i444.enableInstancing = !!i445[4]
  var i447 = i445[5]
  var i446 = []
  for(var i = 0; i < i447.length; i += 1) {
    i446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i447[i + 0]) );
  }
  i444.floatParameters = i446
  var i449 = i445[6]
  var i448 = []
  for(var i = 0; i < i449.length; i += 1) {
    i448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i449[i + 0]) );
  }
  i444.colorParameters = i448
  var i451 = i445[7]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i451[i + 0]) );
  }
  i444.vectorParameters = i450
  var i453 = i445[8]
  var i452 = []
  for(var i = 0; i < i453.length; i += 1) {
    i452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i453[i + 0]) );
  }
  i444.textureParameters = i452
  var i455 = i445[9]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i455[i + 0]) );
  }
  i444.materialFlags = i454
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i459 = data
  i458.name = i459[0]
  i458.value = i459[1]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i463 = data
  i462.name = i463[0]
  i462.value = new pc.Color(i463[1], i463[2], i463[3], i463[4])
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i467 = data
  i466.name = i467[0]
  i466.value = new pc.Vec4( i467[1], i467[2], i467[3], i467[4] )
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i471 = data
  i470.name = i471[0]
  request.r(i471[1], i471[2], 0, i470, 'value')
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i475 = data
  i474.name = i475[0]
  i474.enabled = !!i475[1]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i477 = data
  i476.name = i477[0]
  i476.width = i477[1]
  i476.height = i477[2]
  i476.mipmapCount = i477[3]
  i476.anisoLevel = i477[4]
  i476.filterMode = i477[5]
  i476.hdr = !!i477[6]
  i476.format = i477[7]
  i476.wrapMode = i477[8]
  i476.alphaIsTransparency = !!i477[9]
  i476.alphaSource = i477[10]
  i476.graphicsFormat = i477[11]
  i476.sRGBTexture = !!i477[12]
  i476.desiredColorSpace = i477[13]
  i476.wrapU = i477[14]
  i476.wrapV = i477[15]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i479 = data
  i478.name = i479[0]
  i478.index = i479[1]
  i478.startup = !!i479[2]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i481 = data
  i480.position = new pc.Vec3( i481[0], i481[1], i481[2] )
  i480.scale = new pc.Vec3( i481[3], i481[4], i481[5] )
  i480.rotation = new pc.Quat(i481[6], i481[7], i481[8], i481[9])
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i483 = data
  i482.enabled = !!i483[0]
  i482.aspect = i483[1]
  i482.orthographic = !!i483[2]
  i482.orthographicSize = i483[3]
  i482.backgroundColor = new pc.Color(i483[4], i483[5], i483[6], i483[7])
  i482.nearClipPlane = i483[8]
  i482.farClipPlane = i483[9]
  i482.fieldOfView = i483[10]
  i482.depth = i483[11]
  i482.clearFlags = i483[12]
  i482.cullingMask = i483[13]
  i482.rect = i483[14]
  request.r(i483[15], i483[16], 0, i482, 'targetTexture')
  i482.usePhysicalProperties = !!i483[17]
  i482.focalLength = i483[18]
  i482.sensorSize = new pc.Vec2( i483[19], i483[20] )
  i482.lensShift = new pc.Vec2( i483[21], i483[22] )
  i482.gateFit = i483[23]
  i482.commandBufferCount = i483[24]
  i482.cameraType = i483[25]
  return i482
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i484 = root || request.c( 'CameraAspectFitter' )
  var i485 = data
  request.r(i485[0], i485[1], 0, i484, 'targetSprite')
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i487 = data
  i486.name = i487[0]
  i486.tagId = i487[1]
  i486.enabled = !!i487[2]
  i486.isStatic = !!i487[3]
  i486.layer = i487[4]
  return i486
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i488 = root || request.c( 'AudioManager' )
  var i489 = data
  request.r(i489[0], i489[1], 0, i488, 'library')
  i488.sfxPoolSize = i489[2]
  return i488
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i490 = root || request.c( 'TaskManager' )
  var i491 = data
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i493 = data
  i492.enabled = !!i493[0]
  request.r(i493[1], i493[2], 0, i492, 'sharedMaterial')
  var i495 = i493[3]
  var i494 = []
  for(var i = 0; i < i495.length; i += 2) {
  request.r(i495[i + 0], i495[i + 1], 2, i494, '')
  }
  i492.sharedMaterials = i494
  i492.receiveShadows = !!i493[4]
  i492.shadowCastingMode = i493[5]
  i492.sortingLayerID = i493[6]
  i492.sortingOrder = i493[7]
  i492.lightmapIndex = i493[8]
  i492.lightmapSceneIndex = i493[9]
  i492.lightmapScaleOffset = new pc.Vec4( i493[10], i493[11], i493[12], i493[13] )
  i492.lightProbeUsage = i493[14]
  i492.reflectionProbeUsage = i493[15]
  i492.color = new pc.Color(i493[16], i493[17], i493[18], i493[19])
  request.r(i493[20], i493[21], 0, i492, 'sprite')
  i492.flipX = !!i493[22]
  i492.flipY = !!i493[23]
  i492.drawMode = i493[24]
  i492.size = new pc.Vec2( i493[25], i493[26] )
  i492.tileMode = i493[27]
  i492.adaptiveModeThreshold = i493[28]
  i492.maskInteraction = i493[29]
  i492.spriteSortPoint = i493[30]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i499 = data
  i498.pivot = new pc.Vec2( i499[0], i499[1] )
  i498.anchorMin = new pc.Vec2( i499[2], i499[3] )
  i498.anchorMax = new pc.Vec2( i499[4], i499[5] )
  i498.sizeDelta = new pc.Vec2( i499[6], i499[7] )
  i498.anchoredPosition3D = new pc.Vec3( i499[8], i499[9], i499[10] )
  i498.rotation = new pc.Quat(i499[11], i499[12], i499[13], i499[14])
  i498.scale = new pc.Vec3( i499[15], i499[16], i499[17] )
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i501 = data
  i500.enabled = !!i501[0]
  i500.planeDistance = i501[1]
  i500.referencePixelsPerUnit = i501[2]
  i500.isFallbackOverlay = !!i501[3]
  i500.renderMode = i501[4]
  i500.renderOrder = i501[5]
  i500.sortingLayerName = i501[6]
  i500.sortingOrder = i501[7]
  i500.scaleFactor = i501[8]
  request.r(i501[9], i501[10], 0, i500, 'worldCamera')
  i500.overrideSorting = !!i501[11]
  i500.pixelPerfect = !!i501[12]
  i500.targetDisplay = i501[13]
  i500.overridePixelPerfect = !!i501[14]
  return i500
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i503 = data
  i502.m_UiScaleMode = i503[0]
  i502.m_ReferencePixelsPerUnit = i503[1]
  i502.m_ScaleFactor = i503[2]
  i502.m_ReferenceResolution = new pc.Vec2( i503[3], i503[4] )
  i502.m_ScreenMatchMode = i503[5]
  i502.m_MatchWidthOrHeight = i503[6]
  i502.m_PhysicalUnit = i503[7]
  i502.m_FallbackScreenDPI = i503[8]
  i502.m_DefaultSpriteDPI = i503[9]
  i502.m_DynamicPixelsPerUnit = i503[10]
  i502.m_PresetInfoIsWorld = !!i503[11]
  return i502
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i505 = data
  i504.m_IgnoreReversedGraphics = !!i505[0]
  i504.m_BlockingObjects = i505[1]
  i504.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i505[2] )
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i507 = data
  i506.cullTransparentMesh = !!i507[0]
  return i506
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.UI.Image' )
  var i509 = data
  request.r(i509[0], i509[1], 0, i508, 'm_Sprite')
  i508.m_Type = i509[2]
  i508.m_PreserveAspect = !!i509[3]
  i508.m_FillCenter = !!i509[4]
  i508.m_FillMethod = i509[5]
  i508.m_FillAmount = i509[6]
  i508.m_FillClockwise = !!i509[7]
  i508.m_FillOrigin = i509[8]
  i508.m_UseSpriteMesh = !!i509[9]
  i508.m_PixelsPerUnitMultiplier = i509[10]
  request.r(i509[11], i509[12], 0, i508, 'm_Material')
  i508.m_Maskable = !!i509[13]
  i508.m_Color = new pc.Color(i509[14], i509[15], i509[16], i509[17])
  i508.m_RaycastTarget = !!i509[18]
  i508.m_RaycastPadding = new pc.Vec4( i509[19], i509[20], i509[21], i509[22] )
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i511 = data
  i510.m_Alpha = i511[0]
  i510.m_Interactable = !!i511[1]
  i510.m_BlocksRaycasts = !!i511[2]
  i510.m_IgnoreParentGroups = !!i511[3]
  i510.enabled = !!i511[4]
  return i510
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i512 = root || request.c( 'CanvasGroupAnimator' )
  var i513 = data
  request.r(i513[0], i513[1], 0, i512, 'canvasGroup')
  i512.animateFade = !!i513[2]
  i512.triggerOnStart = !!i513[3]
  i512.isLooping = !!i513[4]
  i512.fadeTo = i513[5]
  i512.fadeDuration = i513[6]
  i512.fadeEaseType = i513[7]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i515 = data
  request.r(i515[0], i515[1], 0, i514, 'animatorController')
  request.r(i515[2], i515[3], 0, i514, 'avatar')
  i514.updateMode = i515[4]
  i514.hasTransformHierarchy = !!i515[5]
  i514.applyRootMotion = !!i515[6]
  var i517 = i515[7]
  var i516 = []
  for(var i = 0; i < i517.length; i += 2) {
  request.r(i517[i + 0], i517[i + 1], 2, i516, '')
  }
  i514.humanBones = i516
  i514.enabled = !!i515[8]
  return i514
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.UI.Button' )
  var i521 = data
  i520.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i521[0], i520.m_OnClick)
  i520.m_Navigation = request.d('UnityEngine.UI.Navigation', i521[1], i520.m_Navigation)
  i520.m_Transition = i521[2]
  i520.m_Colors = request.d('UnityEngine.UI.ColorBlock', i521[3], i520.m_Colors)
  i520.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i521[4], i520.m_SpriteState)
  i520.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i521[5], i520.m_AnimationTriggers)
  i520.m_Interactable = !!i521[6]
  request.r(i521[7], i521[8], 0, i520, 'm_TargetGraphic')
  return i520
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i523 = data
  i522.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i523[0], i522.m_PersistentCalls)
  return i522
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i525 = data
  var i527 = i525[0]
  var i526 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i527.length; i += 1) {
    i526.add(request.d('UnityEngine.Events.PersistentCall', i527[i + 0]));
  }
  i524.m_Calls = i526
  return i524
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i531 = data
  request.r(i531[0], i531[1], 0, i530, 'm_Target')
  i530.m_TargetAssemblyTypeName = i531[2]
  i530.m_MethodName = i531[3]
  i530.m_Mode = i531[4]
  i530.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i531[5], i530.m_Arguments)
  i530.m_CallState = i531[6]
  return i530
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'm_ObjectArgument')
  i532.m_ObjectArgumentAssemblyTypeName = i533[2]
  i532.m_IntArgument = i533[3]
  i532.m_FloatArgument = i533[4]
  i532.m_StringArgument = i533[5]
  i532.m_BoolArgument = !!i533[6]
  return i532
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i535 = data
  i534.m_Mode = i535[0]
  i534.m_WrapAround = !!i535[1]
  request.r(i535[2], i535[3], 0, i534, 'm_SelectOnUp')
  request.r(i535[4], i535[5], 0, i534, 'm_SelectOnDown')
  request.r(i535[6], i535[7], 0, i534, 'm_SelectOnLeft')
  request.r(i535[8], i535[9], 0, i534, 'm_SelectOnRight')
  return i534
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i537 = data
  i536.m_NormalColor = new pc.Color(i537[0], i537[1], i537[2], i537[3])
  i536.m_HighlightedColor = new pc.Color(i537[4], i537[5], i537[6], i537[7])
  i536.m_PressedColor = new pc.Color(i537[8], i537[9], i537[10], i537[11])
  i536.m_SelectedColor = new pc.Color(i537[12], i537[13], i537[14], i537[15])
  i536.m_DisabledColor = new pc.Color(i537[16], i537[17], i537[18], i537[19])
  i536.m_ColorMultiplier = i537[20]
  i536.m_FadeDuration = i537[21]
  return i536
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i539 = data
  request.r(i539[0], i539[1], 0, i538, 'm_HighlightedSprite')
  request.r(i539[2], i539[3], 0, i538, 'm_PressedSprite')
  request.r(i539[4], i539[5], 0, i538, 'm_SelectedSprite')
  request.r(i539[6], i539[7], 0, i538, 'm_DisabledSprite')
  return i538
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i541 = data
  i540.m_NormalTrigger = i541[0]
  i540.m_HighlightedTrigger = i541[1]
  i540.m_PressedTrigger = i541[2]
  i540.m_SelectedTrigger = i541[3]
  i540.m_DisabledTrigger = i541[4]
  return i540
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i543 = data
  i542.m_Spacing = i543[0]
  i542.m_ChildForceExpandWidth = !!i543[1]
  i542.m_ChildForceExpandHeight = !!i543[2]
  i542.m_ChildControlWidth = !!i543[3]
  i542.m_ChildControlHeight = !!i543[4]
  i542.m_ChildScaleWidth = !!i543[5]
  i542.m_ChildScaleHeight = !!i543[6]
  i542.m_ReverseArrangement = !!i543[7]
  i542.m_Padding = UnityEngine.RectOffset.FromPaddings(i543[8], i543[9], i543[10], i543[11])
  i542.m_ChildAlignment = i543[12]
  return i542
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.UI.Mask' )
  var i545 = data
  i544.m_ShowMaskGraphic = !!i545[0]
  return i544
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'm_Content')
  i546.m_Horizontal = !!i547[2]
  i546.m_Vertical = !!i547[3]
  i546.m_MovementType = i547[4]
  i546.m_Elasticity = i547[5]
  i546.m_Inertia = !!i547[6]
  i546.m_DecelerationRate = i547[7]
  i546.m_ScrollSensitivity = i547[8]
  request.r(i547[9], i547[10], 0, i546, 'm_Viewport')
  request.r(i547[11], i547[12], 0, i546, 'm_HorizontalScrollbar')
  request.r(i547[13], i547[14], 0, i546, 'm_VerticalScrollbar')
  i546.m_HorizontalScrollbarVisibility = i547[15]
  i546.m_VerticalScrollbarVisibility = i547[16]
  i546.m_HorizontalScrollbarSpacing = i547[17]
  i546.m_VerticalScrollbarSpacing = i547[18]
  i546.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i547[19], i546.m_OnValueChanged)
  return i546
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i549 = data
  i548.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i549[0], i548.m_PersistentCalls)
  return i548
}

Deserializers["DragToResizeLeft"] = function (request, data, root) {
  var i550 = root || request.c( 'DragToResizeLeft' )
  var i551 = data
  request.r(i551[0], i551[1], 0, i550, 'target')
  i550.minWidth = i551[2]
  return i550
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'm_FirstSelected')
  i552.m_sendNavigationEvents = !!i553[2]
  i552.m_DragThreshold = i553[3]
  return i552
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i555 = data
  i554.m_HorizontalAxis = i555[0]
  i554.m_VerticalAxis = i555[1]
  i554.m_SubmitButton = i555[2]
  i554.m_CancelButton = i555[3]
  i554.m_InputActionsPerSecond = i555[4]
  i554.m_RepeatDelay = i555[5]
  i554.m_ForceModuleActive = !!i555[6]
  i554.m_SendPointerHoverToParent = !!i555[7]
  return i554
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i556 = root || request.c( 'ButtonPulse' )
  var i557 = data
  i556.scaleAmount = i557[0]
  i556.pulseDuration = i557[1]
  return i556
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i558 = root || request.c( 'StartClickHandler' )
  var i559 = data
  return i558
}

Deserializers["GameManager"] = function (request, data, root) {
  var i560 = root || request.c( 'GameManager' )
  var i561 = data
  request.r(i561[0], i561[1], 0, i560, 'endPanel')
  i560.end = !!i561[2]
  request.r(i561[3], i561[4], 0, i560, 'hand')
  request.r(i561[5], i561[6], 0, i560, 'hand2')
  i560.enableSound = !!i561[7]
  request.r(i561[8], i561[9], 0, i560, 'startClickHandler')
  i560.currentScore = i561[10]
  request.r(i561[11], i561[12], 0, i560, 'BodyToSummarize')
  request.r(i561[13], i561[14], 0, i560, 'SummarizedText')
  request.r(i561[15], i561[16], 0, i560, 'transcriptBtnBlue')
  request.r(i561[17], i561[18], 0, i560, 'transcriptBtn')
  request.r(i561[19], i561[20], 0, i560, 'summaryBtn')
  request.r(i561[21], i561[22], 0, i560, 'summaryBtnBlue')
  request.r(i561[23], i561[24], 0, i560, 'mainPanel')
  request.r(i561[25], i561[26], 0, i560, 'handle1')
  request.r(i561[27], i561[28], 0, i560, 'animator')
  request.r(i561[29], i561[30], 0, i560, 'maskA')
  request.r(i561[31], i561[32], 0, i560, 'filter')
  request.r(i561[33], i561[34], 0, i560, 'arrow')
  request.r(i561[35], i561[36], 0, i560, 'toTap')
  request.r(i561[37], i561[38], 0, i560, 'openingPanel')
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i563 = data
  i562.ambientIntensity = i563[0]
  i562.reflectionIntensity = i563[1]
  i562.ambientMode = i563[2]
  i562.ambientLight = new pc.Color(i563[3], i563[4], i563[5], i563[6])
  i562.ambientSkyColor = new pc.Color(i563[7], i563[8], i563[9], i563[10])
  i562.ambientGroundColor = new pc.Color(i563[11], i563[12], i563[13], i563[14])
  i562.ambientEquatorColor = new pc.Color(i563[15], i563[16], i563[17], i563[18])
  i562.fogColor = new pc.Color(i563[19], i563[20], i563[21], i563[22])
  i562.fogEndDistance = i563[23]
  i562.fogStartDistance = i563[24]
  i562.fogDensity = i563[25]
  i562.fog = !!i563[26]
  request.r(i563[27], i563[28], 0, i562, 'skybox')
  i562.fogMode = i563[29]
  var i565 = i563[30]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i565[i + 0]) );
  }
  i562.lightmaps = i564
  i562.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i563[31], i562.lightProbes)
  i562.lightmapsMode = i563[32]
  i562.mixedBakeMode = i563[33]
  i562.environmentLightingMode = i563[34]
  i562.ambientProbe = new pc.SphericalHarmonicsL2(i563[35])
  i562.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i563[36])
  i562.useReferenceAmbientProbe = !!i563[37]
  request.r(i563[38], i563[39], 0, i562, 'customReflection')
  request.r(i563[40], i563[41], 0, i562, 'defaultReflection')
  i562.defaultReflectionMode = i563[42]
  i562.defaultReflectionResolution = i563[43]
  i562.sunLightObjectId = i563[44]
  i562.pixelLightCount = i563[45]
  i562.defaultReflectionHDR = !!i563[46]
  i562.hasLightDataAsset = !!i563[47]
  i562.hasManualGenerate = !!i563[48]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'lightmapColor')
  request.r(i569[2], i569[3], 0, i568, 'lightmapDirection')
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i570 = root || new UnityEngine.LightProbes()
  var i571 = data
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i579 = data
  var i581 = i579[0]
  var i580 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i581.length; i += 1) {
    i580.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i581[i + 0]));
  }
  i578.ShaderCompilationErrors = i580
  i578.name = i579[1]
  i578.guid = i579[2]
  var i583 = i579[3]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( i583[i + 0] );
  }
  i578.shaderDefinedKeywords = i582
  var i585 = i579[4]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i585[i + 0]) );
  }
  i578.passes = i584
  var i587 = i579[5]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i587[i + 0]) );
  }
  i578.usePasses = i586
  var i589 = i579[6]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i589[i + 0]) );
  }
  i578.defaultParameterValues = i588
  request.r(i579[7], i579[8], 0, i578, 'unityFallbackShader')
  i578.readDepth = !!i579[9]
  i578.isCreatedByShaderGraph = !!i579[10]
  i578.compiled = !!i579[11]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i593 = data
  i592.shaderName = i593[0]
  i592.errorMessage = i593[1]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i598 = root || new pc.UnityShaderPass()
  var i599 = data
  i598.id = i599[0]
  i598.subShaderIndex = i599[1]
  i598.name = i599[2]
  i598.passType = i599[3]
  i598.grabPassTextureName = i599[4]
  i598.usePass = !!i599[5]
  i598.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i599[6], i598.zTest)
  i598.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i599[7], i598.zWrite)
  i598.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i599[8], i598.culling)
  i598.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i599[9], i598.blending)
  i598.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i599[10], i598.alphaBlending)
  i598.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i599[11], i598.colorWriteMask)
  i598.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i599[12], i598.offsetUnits)
  i598.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i599[13], i598.offsetFactor)
  i598.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i599[14], i598.stencilRef)
  i598.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i599[15], i598.stencilReadMask)
  i598.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i599[16], i598.stencilWriteMask)
  i598.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i599[17], i598.stencilOp)
  i598.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i599[18], i598.stencilOpFront)
  i598.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i599[19], i598.stencilOpBack)
  var i601 = i599[20]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i601[i + 0]) );
  }
  i598.tags = i600
  var i603 = i599[21]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( i603[i + 0] );
  }
  i598.passDefinedKeywords = i602
  var i605 = i599[22]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i605[i + 0]) );
  }
  i598.passDefinedKeywordGroups = i604
  var i607 = i599[23]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i607[i + 0]) );
  }
  i598.variants = i606
  var i609 = i599[24]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i609[i + 0]) );
  }
  i598.excludedVariants = i608
  i598.hasDepthReader = !!i599[25]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i611 = data
  i610.val = i611[0]
  i610.name = i611[1]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i613 = data
  i612.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i613[0], i612.src)
  i612.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i613[1], i612.dst)
  i612.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i613[2], i612.op)
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i615 = data
  i614.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i615[0], i614.pass)
  i614.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i615[1], i614.fail)
  i614.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i615[2], i614.zFail)
  i614.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i615[3], i614.comp)
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i619 = data
  i618.name = i619[0]
  i618.value = i619[1]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i623 = data
  var i625 = i623[0]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( i625[i + 0] );
  }
  i622.keywords = i624
  i622.hasDiscard = !!i623[1]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i629 = data
  i628.passId = i629[0]
  i628.subShaderIndex = i629[1]
  var i631 = i629[2]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( i631[i + 0] );
  }
  i628.keywords = i630
  i628.vertexProgram = i629[3]
  i628.fragmentProgram = i629[4]
  i628.exportedForWebGl2 = !!i629[5]
  i628.readDepth = !!i629[6]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'shader')
  i634.pass = i635[2]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i639 = data
  i638.name = i639[0]
  i638.type = i639[1]
  i638.value = new pc.Vec4( i639[2], i639[3], i639[4], i639[5] )
  i638.textureValue = i639[6]
  i638.shaderPropertyFlag = i639[7]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i641 = data
  i640.name = i641[0]
  request.r(i641[1], i641[2], 0, i640, 'texture')
  i640.aabb = i641[3]
  i640.vertices = i641[4]
  i640.triangles = i641[5]
  i640.textureRect = UnityEngine.Rect.MinMaxRect(i641[6], i641[7], i641[8], i641[9])
  i640.packedRect = UnityEngine.Rect.MinMaxRect(i641[10], i641[11], i641[12], i641[13])
  i640.border = new pc.Vec4( i641[14], i641[15], i641[16], i641[17] )
  i640.transparency = i641[18]
  i640.bounds = i641[19]
  i640.pixelsPerUnit = i641[20]
  i640.textureWidth = i641[21]
  i640.textureHeight = i641[22]
  i640.nativeSize = new pc.Vec2( i641[23], i641[24] )
  i640.pivot = new pc.Vec2( i641[25], i641[26] )
  i640.textureRectOffset = new pc.Vec2( i641[27], i641[28] )
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i643 = data
  i642.name = i643[0]
  i642.wrapMode = i643[1]
  i642.isLooping = !!i643[2]
  i642.length = i643[3]
  var i645 = i643[4]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i645[i + 0]) );
  }
  i642.curves = i644
  var i647 = i643[5]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i647[i + 0]) );
  }
  i642.events = i646
  i642.halfPrecision = !!i643[6]
  i642._frameRate = i643[7]
  i642.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i643[8], i642.localBounds)
  i642.hasMuscleCurves = !!i643[9]
  var i649 = i643[10]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( i649[i + 0] );
  }
  i642.clipMuscleConstant = i648
  i642.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i643[11], i642.clipBindingConstant)
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i653 = data
  i652.path = i653[0]
  i652.hash = i653[1]
  i652.componentType = i653[2]
  i652.property = i653[3]
  i652.keys = i653[4]
  var i655 = i653[5]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i655[i + 0]) );
  }
  i652.objectReferenceKeys = i654
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i659 = data
  i658.time = i659[0]
  request.r(i659[1], i659[2], 0, i658, 'value')
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i663 = data
  i662.functionName = i663[0]
  i662.floatParameter = i663[1]
  i662.intParameter = i663[2]
  i662.stringParameter = i663[3]
  request.r(i663[4], i663[5], 0, i662, 'objectReferenceParameter')
  i662.time = i663[6]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i665 = data
  i664.center = new pc.Vec3( i665[0], i665[1], i665[2] )
  i664.extends = new pc.Vec3( i665[3], i665[4], i665[5] )
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i669 = data
  var i671 = i669[0]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( i671[i + 0] );
  }
  i668.genericBindings = i670
  var i673 = i669[1]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( i673[i + 0] );
  }
  i668.pptrCurveMapping = i672
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i675 = data
  i674.name = i675[0]
  var i677 = i675[1]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i677[i + 0]) );
  }
  i674.layers = i676
  var i679 = i675[2]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i679[i + 0]) );
  }
  i674.parameters = i678
  i674.animationClips = i675[3]
  i674.avatarUnsupported = i675[4]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i683 = data
  i682.name = i683[0]
  i682.defaultWeight = i683[1]
  i682.blendingMode = i683[2]
  i682.avatarMask = i683[3]
  i682.syncedLayerIndex = i683[4]
  i682.syncedLayerAffectsTiming = !!i683[5]
  i682.syncedLayers = i683[6]
  i682.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i683[7], i682.stateMachine)
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i685 = data
  i684.id = i685[0]
  i684.name = i685[1]
  i684.path = i685[2]
  var i687 = i685[3]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i687[i + 0]) );
  }
  i684.states = i686
  var i689 = i685[4]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i689[i + 0]) );
  }
  i684.machines = i688
  var i691 = i685[5]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i691[i + 0]) );
  }
  i684.entryStateTransitions = i690
  var i693 = i685[6]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i693[i + 0]) );
  }
  i684.exitStateTransitions = i692
  var i695 = i685[7]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i695[i + 0]) );
  }
  i684.anyStateTransitions = i694
  i684.defaultStateId = i685[8]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i699 = data
  i698.id = i699[0]
  i698.name = i699[1]
  i698.cycleOffset = i699[2]
  i698.cycleOffsetParameter = i699[3]
  i698.cycleOffsetParameterActive = !!i699[4]
  i698.mirror = !!i699[5]
  i698.mirrorParameter = i699[6]
  i698.mirrorParameterActive = !!i699[7]
  i698.motionId = i699[8]
  i698.nameHash = i699[9]
  i698.fullPathHash = i699[10]
  i698.speed = i699[11]
  i698.speedParameter = i699[12]
  i698.speedParameterActive = !!i699[13]
  i698.tag = i699[14]
  i698.tagHash = i699[15]
  i698.writeDefaultValues = !!i699[16]
  var i701 = i699[17]
  var i700 = []
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 2, i700, '')
  }
  i698.behaviours = i700
  var i703 = i699[18]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i703[i + 0]) );
  }
  i698.transitions = i702
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i709 = data
  i708.fullPath = i709[0]
  i708.canTransitionToSelf = !!i709[1]
  i708.duration = i709[2]
  i708.exitTime = i709[3]
  i708.hasExitTime = !!i709[4]
  i708.hasFixedDuration = !!i709[5]
  i708.interruptionSource = i709[6]
  i708.offset = i709[7]
  i708.orderedInterruption = !!i709[8]
  i708.destinationStateId = i709[9]
  i708.isExit = !!i709[10]
  i708.mute = !!i709[11]
  i708.solo = !!i709[12]
  var i711 = i709[13]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i711[i + 0]) );
  }
  i708.conditions = i710
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i717 = data
  i716.destinationStateId = i717[0]
  i716.isExit = !!i717[1]
  i716.mute = !!i717[2]
  i716.solo = !!i717[3]
  var i719 = i717[4]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i719[i + 0]) );
  }
  i716.conditions = i718
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i723 = data
  i722.defaultBool = !!i723[0]
  i722.defaultFloat = i723[1]
  i722.defaultInt = i723[2]
  i722.name = i723[3]
  i722.nameHash = i723[4]
  i722.type = i723[5]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i727 = data
  i726.mode = i727[0]
  i726.parameter = i727[1]
  i726.threshold = i727[2]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i729 = data
  i728.name = i729[0]
  i728.bytes64 = i729[1]
  i728.data = i729[2]
  return i728
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i730 = root || request.c( 'AudioLibrary' )
  var i731 = data
  var i733 = i731[0]
  var i732 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i733.length; i += 1) {
    i732.add(request.d('AudioLibrary+ClipEntry', i733[i + 0]));
  }
  i730.clips = i732
  return i730
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i736 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i737 = data
  i736.key = i737[0]
  i736.channel = i737[1]
  request.r(i737[2], i737[3], 0, i736, 'clip')
  i736.volume = i737[4]
  i736.loop = !!i737[5]
  return i736
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i738 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i739 = data
  i738.useSafeMode = !!i739[0]
  i738.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i739[1], i738.safeModeOptions)
  i738.timeScale = i739[2]
  i738.unscaledTimeScale = i739[3]
  i738.useSmoothDeltaTime = !!i739[4]
  i738.maxSmoothUnscaledTime = i739[5]
  i738.rewindCallbackMode = i739[6]
  i738.showUnityEditorReport = !!i739[7]
  i738.logBehaviour = i739[8]
  i738.drawGizmos = !!i739[9]
  i738.defaultRecyclable = !!i739[10]
  i738.defaultAutoPlay = i739[11]
  i738.defaultUpdateType = i739[12]
  i738.defaultTimeScaleIndependent = !!i739[13]
  i738.defaultEaseType = i739[14]
  i738.defaultEaseOvershootOrAmplitude = i739[15]
  i738.defaultEasePeriod = i739[16]
  i738.defaultAutoKill = !!i739[17]
  i738.defaultLoopType = i739[18]
  i738.debugMode = !!i739[19]
  i738.debugStoreTargetId = !!i739[20]
  i738.showPreviewPanel = !!i739[21]
  i738.storeSettingsLocation = i739[22]
  i738.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i739[23], i738.modules)
  i738.createASMDEF = !!i739[24]
  i738.showPlayingTweens = !!i739[25]
  i738.showPausedTweens = !!i739[26]
  return i738
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i740 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i741 = data
  i740.logBehaviour = i741[0]
  i740.nestedTweenFailureBehaviour = i741[1]
  return i740
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i742 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i743 = data
  i742.showPanel = !!i743[0]
  i742.audioEnabled = !!i743[1]
  i742.physicsEnabled = !!i743[2]
  i742.physics2DEnabled = !!i743[3]
  i742.spriteEnabled = !!i743[4]
  i742.uiEnabled = !!i743[5]
  i742.textMeshProEnabled = !!i743[6]
  i742.tk2DEnabled = !!i743[7]
  i742.deAudioEnabled = !!i743[8]
  i742.deUnityExtendedEnabled = !!i743[9]
  i742.epoOutlineEnabled = !!i743[10]
  return i742
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i744 = root || request.c( 'TMPro.TMP_Settings' )
  var i745 = data
  i744.m_enableWordWrapping = !!i745[0]
  i744.m_enableKerning = !!i745[1]
  i744.m_enableExtraPadding = !!i745[2]
  i744.m_enableTintAllSprites = !!i745[3]
  i744.m_enableParseEscapeCharacters = !!i745[4]
  i744.m_EnableRaycastTarget = !!i745[5]
  i744.m_GetFontFeaturesAtRuntime = !!i745[6]
  i744.m_missingGlyphCharacter = i745[7]
  i744.m_warningsDisabled = !!i745[8]
  request.r(i745[9], i745[10], 0, i744, 'm_defaultFontAsset')
  i744.m_defaultFontAssetPath = i745[11]
  i744.m_defaultFontSize = i745[12]
  i744.m_defaultAutoSizeMinRatio = i745[13]
  i744.m_defaultAutoSizeMaxRatio = i745[14]
  i744.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i745[15], i745[16] )
  i744.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i745[17], i745[18] )
  i744.m_autoSizeTextContainer = !!i745[19]
  i744.m_IsTextObjectScaleStatic = !!i745[20]
  var i747 = i745[21]
  var i746 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i747.length; i += 2) {
  request.r(i747[i + 0], i747[i + 1], 1, i746, '')
  }
  i744.m_fallbackFontAssets = i746
  i744.m_matchMaterialPreset = !!i745[22]
  request.r(i745[23], i745[24], 0, i744, 'm_defaultSpriteAsset')
  i744.m_defaultSpriteAssetPath = i745[25]
  i744.m_enableEmojiSupport = !!i745[26]
  i744.m_MissingCharacterSpriteUnicode = i745[27]
  i744.m_defaultColorGradientPresetsPath = i745[28]
  request.r(i745[29], i745[30], 0, i744, 'm_defaultStyleSheet')
  i744.m_StyleSheetsResourcePath = i745[31]
  request.r(i745[32], i745[33], 0, i744, 'm_leadingCharacters')
  request.r(i745[34], i745[35], 0, i744, 'm_followingCharacters')
  i744.m_UseModernHangulLineBreakingRules = !!i745[36]
  return i744
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i750 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i751 = data
  i750.hashCode = i751[0]
  request.r(i751[1], i751[2], 0, i750, 'material')
  i750.materialHashCode = i751[3]
  request.r(i751[4], i751[5], 0, i750, 'spriteSheet')
  var i753 = i751[6]
  var i752 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i753.length; i += 1) {
    i752.add(request.d('TMPro.TMP_Sprite', i753[i + 0]));
  }
  i750.spriteInfoList = i752
  var i755 = i751[7]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i755.length; i += 2) {
  request.r(i755[i + 0], i755[i + 1], 1, i754, '')
  }
  i750.fallbackSpriteAssets = i754
  i750.m_Version = i751[8]
  i750.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i751[9], i750.m_FaceInfo)
  var i757 = i751[10]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i757.length; i += 1) {
    i756.add(request.d('TMPro.TMP_SpriteCharacter', i757[i + 0]));
  }
  i750.m_SpriteCharacterTable = i756
  var i759 = i751[11]
  var i758 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i759.length; i += 1) {
    i758.add(request.d('TMPro.TMP_SpriteGlyph', i759[i + 0]));
  }
  i750.m_SpriteGlyphTable = i758
  return i750
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i762 = root || request.c( 'TMPro.TMP_Sprite' )
  var i763 = data
  i762.name = i763[0]
  i762.hashCode = i763[1]
  i762.unicode = i763[2]
  i762.pivot = new pc.Vec2( i763[3], i763[4] )
  request.r(i763[5], i763[6], 0, i762, 'sprite')
  i762.id = i763[7]
  i762.x = i763[8]
  i762.y = i763[9]
  i762.width = i763[10]
  i762.height = i763[11]
  i762.xOffset = i763[12]
  i762.yOffset = i763[13]
  i762.xAdvance = i763[14]
  i762.scale = i763[15]
  return i762
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i767 = data
  i766.m_FaceIndex = i767[0]
  i766.m_FamilyName = i767[1]
  i766.m_StyleName = i767[2]
  i766.m_PointSize = i767[3]
  i766.m_Scale = i767[4]
  i766.m_UnitsPerEM = i767[5]
  i766.m_LineHeight = i767[6]
  i766.m_AscentLine = i767[7]
  i766.m_CapLine = i767[8]
  i766.m_MeanLine = i767[9]
  i766.m_Baseline = i767[10]
  i766.m_DescentLine = i767[11]
  i766.m_SuperscriptOffset = i767[12]
  i766.m_SuperscriptSize = i767[13]
  i766.m_SubscriptOffset = i767[14]
  i766.m_SubscriptSize = i767[15]
  i766.m_UnderlineOffset = i767[16]
  i766.m_UnderlineThickness = i767[17]
  i766.m_StrikethroughOffset = i767[18]
  i766.m_StrikethroughThickness = i767[19]
  i766.m_TabWidth = i767[20]
  return i766
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i770 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i771 = data
  i770.m_Name = i771[0]
  i770.m_HashCode = i771[1]
  i770.m_ElementType = i771[2]
  i770.m_Unicode = i771[3]
  i770.m_GlyphIndex = i771[4]
  i770.m_Scale = i771[5]
  return i770
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i774 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'sprite')
  i774.m_Index = i775[2]
  i774.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i775[3], i774.m_Metrics)
  i774.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i775[4], i774.m_GlyphRect)
  i774.m_Scale = i775[5]
  i774.m_AtlasIndex = i775[6]
  i774.m_ClassDefinitionType = i775[7]
  return i774
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i777 = data
  i776.m_Width = i777[0]
  i776.m_Height = i777[1]
  i776.m_HorizontalBearingX = i777[2]
  i776.m_HorizontalBearingY = i777[3]
  i776.m_HorizontalAdvance = i777[4]
  return i776
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i779 = data
  i778.m_X = i779[0]
  i778.m_Y = i779[1]
  i778.m_Width = i779[2]
  i778.m_Height = i779[3]
  return i778
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i780 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i781 = data
  var i783 = i781[0]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i783.length; i += 1) {
    i782.add(request.d('TMPro.TMP_Style', i783[i + 0]));
  }
  i780.m_StyleList = i782
  return i780
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i786 = root || request.c( 'TMPro.TMP_Style' )
  var i787 = data
  i786.m_Name = i787[0]
  i786.m_HashCode = i787[1]
  i786.m_OpeningDefinition = i787[2]
  i786.m_ClosingDefinition = i787[3]
  i786.m_OpeningTagArray = i787[4]
  i786.m_ClosingTagArray = i787[5]
  i786.m_OpeningTagUnicodeArray = i787[6]
  i786.m_ClosingTagUnicodeArray = i787[7]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i789 = data
  var i791 = i789[0]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i791[i + 0]) );
  }
  i788.files = i790
  i788.componentToPrefabIds = i789[1]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i795 = data
  i794.path = i795[0]
  request.r(i795[1], i795[2], 0, i794, 'unityObject')
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i797 = data
  var i799 = i797[0]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i799[i + 0]) );
  }
  i796.scriptsExecutionOrder = i798
  var i801 = i797[1]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i801[i + 0]) );
  }
  i796.sortingLayers = i800
  var i803 = i797[2]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i803[i + 0]) );
  }
  i796.cullingLayers = i802
  i796.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i797[3], i796.timeSettings)
  i796.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i797[4], i796.physicsSettings)
  i796.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i797[5], i796.physics2DSettings)
  i796.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i797[6], i796.qualitySettings)
  i796.enableRealtimeShadows = !!i797[7]
  i796.enableAutoInstancing = !!i797[8]
  i796.enableDynamicBatching = !!i797[9]
  i796.lightmapEncodingQuality = i797[10]
  i796.desiredColorSpace = i797[11]
  var i805 = i797[12]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( i805[i + 0] );
  }
  i796.allTags = i804
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i809 = data
  i808.name = i809[0]
  i808.value = i809[1]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i813 = data
  i812.id = i813[0]
  i812.name = i813[1]
  i812.value = i813[2]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i817 = data
  i816.id = i817[0]
  i816.name = i817[1]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i819 = data
  i818.fixedDeltaTime = i819[0]
  i818.maximumDeltaTime = i819[1]
  i818.timeScale = i819[2]
  i818.maximumParticleTimestep = i819[3]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i821 = data
  i820.gravity = new pc.Vec3( i821[0], i821[1], i821[2] )
  i820.defaultSolverIterations = i821[3]
  i820.bounceThreshold = i821[4]
  i820.autoSyncTransforms = !!i821[5]
  i820.autoSimulation = !!i821[6]
  var i823 = i821[7]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i823[i + 0]) );
  }
  i820.collisionMatrix = i822
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i827 = data
  i826.enabled = !!i827[0]
  i826.layerId = i827[1]
  i826.otherLayerId = i827[2]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'material')
  i828.gravity = new pc.Vec2( i829[2], i829[3] )
  i828.positionIterations = i829[4]
  i828.velocityIterations = i829[5]
  i828.velocityThreshold = i829[6]
  i828.maxLinearCorrection = i829[7]
  i828.maxAngularCorrection = i829[8]
  i828.maxTranslationSpeed = i829[9]
  i828.maxRotationSpeed = i829[10]
  i828.baumgarteScale = i829[11]
  i828.baumgarteTOIScale = i829[12]
  i828.timeToSleep = i829[13]
  i828.linearSleepTolerance = i829[14]
  i828.angularSleepTolerance = i829[15]
  i828.defaultContactOffset = i829[16]
  i828.autoSimulation = !!i829[17]
  i828.queriesHitTriggers = !!i829[18]
  i828.queriesStartInColliders = !!i829[19]
  i828.callbacksOnDisable = !!i829[20]
  i828.reuseCollisionCallbacks = !!i829[21]
  i828.autoSyncTransforms = !!i829[22]
  var i831 = i829[23]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i831[i + 0]) );
  }
  i828.collisionMatrix = i830
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i835 = data
  i834.enabled = !!i835[0]
  i834.layerId = i835[1]
  i834.otherLayerId = i835[2]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i837 = data
  var i839 = i837[0]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i839[i + 0]) );
  }
  i836.qualityLevels = i838
  var i841 = i837[1]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( i841[i + 0] );
  }
  i836.names = i840
  i836.shadows = i837[2]
  i836.anisotropicFiltering = i837[3]
  i836.antiAliasing = i837[4]
  i836.lodBias = i837[5]
  i836.shadowCascades = i837[6]
  i836.shadowDistance = i837[7]
  i836.shadowmaskMode = i837[8]
  i836.shadowProjection = i837[9]
  i836.shadowResolution = i837[10]
  i836.softParticles = !!i837[11]
  i836.softVegetation = !!i837[12]
  i836.activeColorSpace = i837[13]
  i836.desiredColorSpace = i837[14]
  i836.masterTextureLimit = i837[15]
  i836.maxQueuedFrames = i837[16]
  i836.particleRaycastBudget = i837[17]
  i836.pixelLightCount = i837[18]
  i836.realtimeReflectionProbes = !!i837[19]
  i836.shadowCascade2Split = i837[20]
  i836.shadowCascade4Split = new pc.Vec3( i837[21], i837[22], i837[23] )
  i836.streamingMipmapsActive = !!i837[24]
  i836.vSyncCount = i837[25]
  i836.asyncUploadBufferSize = i837[26]
  i836.asyncUploadTimeSlice = i837[27]
  i836.billboardsFaceCameraPosition = !!i837[28]
  i836.shadowNearPlaneOffset = i837[29]
  i836.streamingMipmapsMemoryBudget = i837[30]
  i836.maximumLODLevel = i837[31]
  i836.streamingMipmapsAddAllCameras = !!i837[32]
  i836.streamingMipmapsMaxLevelReduction = i837[33]
  i836.streamingMipmapsRenderersPerFrame = i837[34]
  i836.resolutionScalingFixedDPIFactor = i837[35]
  i836.streamingMipmapsMaxFileIORequests = i837[36]
  i836.currentQualityLevel = i837[37]
  return i836
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[2],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[2],"75":[76],"77":[78],"79":[78],"13":[12],"5":[2],"28":[12],"80":[53],"81":[12],"82":[6],"83":[12],"84":[12],"16":[13],"18":[17,12],"85":[12],"15":[13],"86":[12],"87":[12],"25":[12],"88":[12],"89":[12],"90":[12],"91":[12],"26":[12],"92":[12],"93":[17,12],"94":[12],"95":[12],"27":[12],"96":[12],"97":[17,12],"98":[12],"99":[29],"100":[29],"30":[29],"101":[29],"102":[2],"103":[2],"104":[105],"106":[2],"107":[12],"108":[76,12],"109":[12,17],"110":[12],"111":[17,12],"112":[76],"113":[17,12],"114":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAspectFitter","UnityEngine.SpriteRenderer","AudioManager","AudioLibrary","TaskManager","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.CanvasGroup","CanvasGroupAnimator","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Button","GameManager","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.ScrollRect","DragToResizeLeft","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ButtonPulse","StartClickHandler","UnityEngine.GameObject","UnityEngine.Texture2D","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bullet","UIHorizontalDraggable","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "core2d";

Deserializers.lunaInitializationTime = "08/14/2025 11:33:59";

Deserializers.lunaDaysRunning = "11.9";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "KeyPoints_Sip2";

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

Deserializers.buildID = "f037bdf4-3f6a-459e-80ba-4e3a358f1994";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


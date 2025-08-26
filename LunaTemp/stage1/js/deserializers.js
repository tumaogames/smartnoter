var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointSpring' )
  var i429 = data
  i428.spring = i429[0]
  i428.damper = i429[1]
  i428.targetPosition = i429[2]
  return i428
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointMotor' )
  var i431 = data
  i430.m_TargetVelocity = i431[0]
  i430.m_Force = i431[1]
  i430.m_FreeSpin = i431[2]
  return i430
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.JointLimits' )
  var i433 = data
  i432.m_Min = i433[0]
  i432.m_Max = i433[1]
  i432.m_Bounciness = i433[2]
  i432.m_BounceMinVelocity = i433[3]
  i432.m_ContactDistance = i433[4]
  i432.minBounce = i433[5]
  i432.maxBounce = i433[6]
  return i432
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.JointDrive' )
  var i435 = data
  i434.m_PositionSpring = i435[0]
  i434.m_PositionDamper = i435[1]
  i434.m_MaximumForce = i435[2]
  i434.m_UseAcceleration = i435[3]
  return i434
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i437 = data
  i436.m_Spring = i437[0]
  i436.m_Damper = i437[1]
  return i436
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i439 = data
  i438.m_Limit = i439[0]
  i438.m_Bounciness = i439[1]
  i438.m_ContactDistance = i439[2]
  return i438
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i441 = data
  i440.m_ExtremumSlip = i441[0]
  i440.m_ExtremumValue = i441[1]
  i440.m_AsymptoteSlip = i441[2]
  i440.m_AsymptoteValue = i441[3]
  i440.m_Stiffness = i441[4]
  return i440
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i443 = data
  i442.m_LowerAngle = i443[0]
  i442.m_UpperAngle = i443[1]
  return i442
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i445 = data
  i444.m_MotorSpeed = i445[0]
  i444.m_MaximumMotorTorque = i445[1]
  return i444
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i447 = data
  i446.m_DampingRatio = i447[0]
  i446.m_Frequency = i447[1]
  i446.m_Angle = i447[2]
  return i446
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i449 = data
  i448.m_LowerTranslation = i449[0]
  i448.m_UpperTranslation = i449[1]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i450 = root || new pc.UnityMaterial()
  var i451 = data
  i450.name = i451[0]
  request.r(i451[1], i451[2], 0, i450, 'shader')
  i450.renderQueue = i451[3]
  i450.enableInstancing = !!i451[4]
  var i453 = i451[5]
  var i452 = []
  for(var i = 0; i < i453.length; i += 1) {
    i452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i453[i + 0]) );
  }
  i450.floatParameters = i452
  var i455 = i451[6]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i455[i + 0]) );
  }
  i450.colorParameters = i454
  var i457 = i451[7]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i457[i + 0]) );
  }
  i450.vectorParameters = i456
  var i459 = i451[8]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i459[i + 0]) );
  }
  i450.textureParameters = i458
  var i461 = i451[9]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i461[i + 0]) );
  }
  i450.materialFlags = i460
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i465 = data
  i464.name = i465[0]
  i464.value = i465[1]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i469 = data
  i468.name = i469[0]
  i468.value = new pc.Color(i469[1], i469[2], i469[3], i469[4])
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i473 = data
  i472.name = i473[0]
  i472.value = new pc.Vec4( i473[1], i473[2], i473[3], i473[4] )
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i477 = data
  i476.name = i477[0]
  request.r(i477[1], i477[2], 0, i476, 'value')
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i481 = data
  i480.name = i481[0]
  i480.enabled = !!i481[1]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i483 = data
  i482.name = i483[0]
  i482.width = i483[1]
  i482.height = i483[2]
  i482.mipmapCount = i483[3]
  i482.anisoLevel = i483[4]
  i482.filterMode = i483[5]
  i482.hdr = !!i483[6]
  i482.format = i483[7]
  i482.wrapMode = i483[8]
  i482.alphaIsTransparency = !!i483[9]
  i482.alphaSource = i483[10]
  i482.graphicsFormat = i483[11]
  i482.sRGBTexture = !!i483[12]
  i482.desiredColorSpace = i483[13]
  i482.wrapU = i483[14]
  i482.wrapV = i483[15]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i485 = data
  i484.name = i485[0]
  i484.index = i485[1]
  i484.startup = !!i485[2]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i487 = data
  i486.position = new pc.Vec3( i487[0], i487[1], i487[2] )
  i486.scale = new pc.Vec3( i487[3], i487[4], i487[5] )
  i486.rotation = new pc.Quat(i487[6], i487[7], i487[8], i487[9])
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i489 = data
  i488.enabled = !!i489[0]
  i488.aspect = i489[1]
  i488.orthographic = !!i489[2]
  i488.orthographicSize = i489[3]
  i488.backgroundColor = new pc.Color(i489[4], i489[5], i489[6], i489[7])
  i488.nearClipPlane = i489[8]
  i488.farClipPlane = i489[9]
  i488.fieldOfView = i489[10]
  i488.depth = i489[11]
  i488.clearFlags = i489[12]
  i488.cullingMask = i489[13]
  i488.rect = i489[14]
  request.r(i489[15], i489[16], 0, i488, 'targetTexture')
  i488.usePhysicalProperties = !!i489[17]
  i488.focalLength = i489[18]
  i488.sensorSize = new pc.Vec2( i489[19], i489[20] )
  i488.lensShift = new pc.Vec2( i489[21], i489[22] )
  i488.gateFit = i489[23]
  i488.commandBufferCount = i489[24]
  i488.cameraType = i489[25]
  return i488
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i490 = root || request.c( 'CameraAspectFitter' )
  var i491 = data
  request.r(i491[0], i491[1], 0, i490, 'targetSprite')
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i493 = data
  i492.name = i493[0]
  i492.tagId = i493[1]
  i492.enabled = !!i493[2]
  i492.isStatic = !!i493[3]
  i492.layer = i493[4]
  return i492
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i494 = root || request.c( 'AudioManager' )
  var i495 = data
  request.r(i495[0], i495[1], 0, i494, 'library')
  i494.sfxPoolSize = i495[2]
  return i494
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i496 = root || request.c( 'TaskManager' )
  var i497 = data
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i499 = data
  i498.enabled = !!i499[0]
  request.r(i499[1], i499[2], 0, i498, 'sharedMaterial')
  var i501 = i499[3]
  var i500 = []
  for(var i = 0; i < i501.length; i += 2) {
  request.r(i501[i + 0], i501[i + 1], 2, i500, '')
  }
  i498.sharedMaterials = i500
  i498.receiveShadows = !!i499[4]
  i498.shadowCastingMode = i499[5]
  i498.sortingLayerID = i499[6]
  i498.sortingOrder = i499[7]
  i498.lightmapIndex = i499[8]
  i498.lightmapSceneIndex = i499[9]
  i498.lightmapScaleOffset = new pc.Vec4( i499[10], i499[11], i499[12], i499[13] )
  i498.lightProbeUsage = i499[14]
  i498.reflectionProbeUsage = i499[15]
  i498.color = new pc.Color(i499[16], i499[17], i499[18], i499[19])
  request.r(i499[20], i499[21], 0, i498, 'sprite')
  i498.flipX = !!i499[22]
  i498.flipY = !!i499[23]
  i498.drawMode = i499[24]
  i498.size = new pc.Vec2( i499[25], i499[26] )
  i498.tileMode = i499[27]
  i498.adaptiveModeThreshold = i499[28]
  i498.maskInteraction = i499[29]
  i498.spriteSortPoint = i499[30]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i505 = data
  i504.pivot = new pc.Vec2( i505[0], i505[1] )
  i504.anchorMin = new pc.Vec2( i505[2], i505[3] )
  i504.anchorMax = new pc.Vec2( i505[4], i505[5] )
  i504.sizeDelta = new pc.Vec2( i505[6], i505[7] )
  i504.anchoredPosition3D = new pc.Vec3( i505[8], i505[9], i505[10] )
  i504.rotation = new pc.Quat(i505[11], i505[12], i505[13], i505[14])
  i504.scale = new pc.Vec3( i505[15], i505[16], i505[17] )
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i507 = data
  i506.enabled = !!i507[0]
  i506.planeDistance = i507[1]
  i506.referencePixelsPerUnit = i507[2]
  i506.isFallbackOverlay = !!i507[3]
  i506.renderMode = i507[4]
  i506.renderOrder = i507[5]
  i506.sortingLayerName = i507[6]
  i506.sortingOrder = i507[7]
  i506.scaleFactor = i507[8]
  request.r(i507[9], i507[10], 0, i506, 'worldCamera')
  i506.overrideSorting = !!i507[11]
  i506.pixelPerfect = !!i507[12]
  i506.targetDisplay = i507[13]
  i506.overridePixelPerfect = !!i507[14]
  return i506
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i509 = data
  i508.m_UiScaleMode = i509[0]
  i508.m_ReferencePixelsPerUnit = i509[1]
  i508.m_ScaleFactor = i509[2]
  i508.m_ReferenceResolution = new pc.Vec2( i509[3], i509[4] )
  i508.m_ScreenMatchMode = i509[5]
  i508.m_MatchWidthOrHeight = i509[6]
  i508.m_PhysicalUnit = i509[7]
  i508.m_FallbackScreenDPI = i509[8]
  i508.m_DefaultSpriteDPI = i509[9]
  i508.m_DynamicPixelsPerUnit = i509[10]
  i508.m_PresetInfoIsWorld = !!i509[11]
  return i508
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i511 = data
  i510.m_IgnoreReversedGraphics = !!i511[0]
  i510.m_BlockingObjects = i511[1]
  i510.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i511[2] )
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i513 = data
  i512.cullTransparentMesh = !!i513[0]
  return i512
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.UI.Image' )
  var i515 = data
  request.r(i515[0], i515[1], 0, i514, 'm_Sprite')
  i514.m_Type = i515[2]
  i514.m_PreserveAspect = !!i515[3]
  i514.m_FillCenter = !!i515[4]
  i514.m_FillMethod = i515[5]
  i514.m_FillAmount = i515[6]
  i514.m_FillClockwise = !!i515[7]
  i514.m_FillOrigin = i515[8]
  i514.m_UseSpriteMesh = !!i515[9]
  i514.m_PixelsPerUnitMultiplier = i515[10]
  request.r(i515[11], i515[12], 0, i514, 'm_Material')
  i514.m_Maskable = !!i515[13]
  i514.m_Color = new pc.Color(i515[14], i515[15], i515[16], i515[17])
  i514.m_RaycastTarget = !!i515[18]
  i514.m_RaycastPadding = new pc.Vec4( i515[19], i515[20], i515[21], i515[22] )
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i517 = data
  i516.m_Alpha = i517[0]
  i516.m_Interactable = !!i517[1]
  i516.m_BlocksRaycasts = !!i517[2]
  i516.m_IgnoreParentGroups = !!i517[3]
  i516.enabled = !!i517[4]
  return i516
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i518 = root || request.c( 'CanvasGroupAnimator' )
  var i519 = data
  request.r(i519[0], i519[1], 0, i518, 'canvasGroup')
  i518.animateFade = !!i519[2]
  i518.triggerOnStart = !!i519[3]
  i518.isLooping = !!i519[4]
  i518.fadeTo = i519[5]
  i518.fadeDuration = i519[6]
  i518.fadeEaseType = i519[7]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i521 = data
  request.r(i521[0], i521[1], 0, i520, 'animatorController')
  request.r(i521[2], i521[3], 0, i520, 'avatar')
  i520.updateMode = i521[4]
  i520.hasTransformHierarchy = !!i521[5]
  i520.applyRootMotion = !!i521[6]
  var i523 = i521[7]
  var i522 = []
  for(var i = 0; i < i523.length; i += 2) {
  request.r(i523[i + 0], i523[i + 1], 2, i522, '')
  }
  i520.humanBones = i522
  i520.enabled = !!i521[8]
  return i520
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.UI.Button' )
  var i527 = data
  i526.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i527[0], i526.m_OnClick)
  i526.m_Navigation = request.d('UnityEngine.UI.Navigation', i527[1], i526.m_Navigation)
  i526.m_Transition = i527[2]
  i526.m_Colors = request.d('UnityEngine.UI.ColorBlock', i527[3], i526.m_Colors)
  i526.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i527[4], i526.m_SpriteState)
  i526.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i527[5], i526.m_AnimationTriggers)
  i526.m_Interactable = !!i527[6]
  request.r(i527[7], i527[8], 0, i526, 'm_TargetGraphic')
  return i526
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i529 = data
  i528.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i529[0], i528.m_PersistentCalls)
  return i528
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i531 = data
  var i533 = i531[0]
  var i532 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i533.length; i += 1) {
    i532.add(request.d('UnityEngine.Events.PersistentCall', i533[i + 0]));
  }
  i530.m_Calls = i532
  return i530
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i537 = data
  request.r(i537[0], i537[1], 0, i536, 'm_Target')
  i536.m_TargetAssemblyTypeName = i537[2]
  i536.m_MethodName = i537[3]
  i536.m_Mode = i537[4]
  i536.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i537[5], i536.m_Arguments)
  i536.m_CallState = i537[6]
  return i536
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i539 = data
  request.r(i539[0], i539[1], 0, i538, 'm_ObjectArgument')
  i538.m_ObjectArgumentAssemblyTypeName = i539[2]
  i538.m_IntArgument = i539[3]
  i538.m_FloatArgument = i539[4]
  i538.m_StringArgument = i539[5]
  i538.m_BoolArgument = !!i539[6]
  return i538
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i541 = data
  i540.m_Mode = i541[0]
  i540.m_WrapAround = !!i541[1]
  request.r(i541[2], i541[3], 0, i540, 'm_SelectOnUp')
  request.r(i541[4], i541[5], 0, i540, 'm_SelectOnDown')
  request.r(i541[6], i541[7], 0, i540, 'm_SelectOnLeft')
  request.r(i541[8], i541[9], 0, i540, 'm_SelectOnRight')
  return i540
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i543 = data
  i542.m_NormalColor = new pc.Color(i543[0], i543[1], i543[2], i543[3])
  i542.m_HighlightedColor = new pc.Color(i543[4], i543[5], i543[6], i543[7])
  i542.m_PressedColor = new pc.Color(i543[8], i543[9], i543[10], i543[11])
  i542.m_SelectedColor = new pc.Color(i543[12], i543[13], i543[14], i543[15])
  i542.m_DisabledColor = new pc.Color(i543[16], i543[17], i543[18], i543[19])
  i542.m_ColorMultiplier = i543[20]
  i542.m_FadeDuration = i543[21]
  return i542
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i545 = data
  request.r(i545[0], i545[1], 0, i544, 'm_HighlightedSprite')
  request.r(i545[2], i545[3], 0, i544, 'm_PressedSprite')
  request.r(i545[4], i545[5], 0, i544, 'm_SelectedSprite')
  request.r(i545[6], i545[7], 0, i544, 'm_DisabledSprite')
  return i544
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i547 = data
  i546.m_NormalTrigger = i547[0]
  i546.m_HighlightedTrigger = i547[1]
  i546.m_PressedTrigger = i547[2]
  i546.m_SelectedTrigger = i547[3]
  i546.m_DisabledTrigger = i547[4]
  return i546
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i549 = data
  i548.m_Spacing = i549[0]
  i548.m_ChildForceExpandWidth = !!i549[1]
  i548.m_ChildForceExpandHeight = !!i549[2]
  i548.m_ChildControlWidth = !!i549[3]
  i548.m_ChildControlHeight = !!i549[4]
  i548.m_ChildScaleWidth = !!i549[5]
  i548.m_ChildScaleHeight = !!i549[6]
  i548.m_ReverseArrangement = !!i549[7]
  i548.m_Padding = UnityEngine.RectOffset.FromPaddings(i549[8], i549[9], i549[10], i549[11])
  i548.m_ChildAlignment = i549[12]
  return i548
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.UI.Mask' )
  var i551 = data
  i550.m_ShowMaskGraphic = !!i551[0]
  return i550
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'm_Content')
  i552.m_Horizontal = !!i553[2]
  i552.m_Vertical = !!i553[3]
  i552.m_MovementType = i553[4]
  i552.m_Elasticity = i553[5]
  i552.m_Inertia = !!i553[6]
  i552.m_DecelerationRate = i553[7]
  i552.m_ScrollSensitivity = i553[8]
  request.r(i553[9], i553[10], 0, i552, 'm_Viewport')
  request.r(i553[11], i553[12], 0, i552, 'm_HorizontalScrollbar')
  request.r(i553[13], i553[14], 0, i552, 'm_VerticalScrollbar')
  i552.m_HorizontalScrollbarVisibility = i553[15]
  i552.m_VerticalScrollbarVisibility = i553[16]
  i552.m_HorizontalScrollbarSpacing = i553[17]
  i552.m_VerticalScrollbarSpacing = i553[18]
  i552.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i553[19], i552.m_OnValueChanged)
  return i552
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i555 = data
  i554.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i555[0], i554.m_PersistentCalls)
  return i554
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i557 = data
  request.r(i557[0], i557[1], 0, i556, 'm_HandleRect')
  i556.m_Direction = i557[2]
  i556.m_Value = i557[3]
  i556.m_Size = i557[4]
  i556.m_NumberOfSteps = i557[5]
  i556.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i557[6], i556.m_OnValueChanged)
  i556.m_Navigation = request.d('UnityEngine.UI.Navigation', i557[7], i556.m_Navigation)
  i556.m_Transition = i557[8]
  i556.m_Colors = request.d('UnityEngine.UI.ColorBlock', i557[9], i556.m_Colors)
  i556.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i557[10], i556.m_SpriteState)
  i556.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i557[11], i556.m_AnimationTriggers)
  i556.m_Interactable = !!i557[12]
  request.r(i557[13], i557[14], 0, i556, 'm_TargetGraphic')
  return i556
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i559 = data
  i558.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i559[0], i558.m_PersistentCalls)
  return i558
}

Deserializers["DragToResizeLeft"] = function (request, data, root) {
  var i560 = root || request.c( 'DragToResizeLeft' )
  var i561 = data
  request.r(i561[0], i561[1], 0, i560, 'target')
  i560.minWidth = i561[2]
  return i560
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i563 = data
  request.r(i563[0], i563[1], 0, i562, 'm_FirstSelected')
  i562.m_sendNavigationEvents = !!i563[2]
  i562.m_DragThreshold = i563[3]
  return i562
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i565 = data
  i564.m_HorizontalAxis = i565[0]
  i564.m_VerticalAxis = i565[1]
  i564.m_SubmitButton = i565[2]
  i564.m_CancelButton = i565[3]
  i564.m_InputActionsPerSecond = i565[4]
  i564.m_RepeatDelay = i565[5]
  i564.m_ForceModuleActive = !!i565[6]
  i564.m_SendPointerHoverToParent = !!i565[7]
  return i564
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i566 = root || request.c( 'ButtonPulse' )
  var i567 = data
  i566.scaleAmount = i567[0]
  i566.pulseDuration = i567[1]
  return i566
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i568 = root || request.c( 'StartClickHandler' )
  var i569 = data
  return i568
}

Deserializers["GameManager"] = function (request, data, root) {
  var i570 = root || request.c( 'GameManager' )
  var i571 = data
  request.r(i571[0], i571[1], 0, i570, 'endPanel')
  i570.end = !!i571[2]
  request.r(i571[3], i571[4], 0, i570, 'hand')
  request.r(i571[5], i571[6], 0, i570, 'hand2')
  i570.enableSound = !!i571[7]
  request.r(i571[8], i571[9], 0, i570, 'startClickHandler')
  i570.currentScore = i571[10]
  request.r(i571[11], i571[12], 0, i570, 'BodyToSummarize')
  request.r(i571[13], i571[14], 0, i570, 'SummarizedText')
  request.r(i571[15], i571[16], 0, i570, 'transcriptBtnBlue')
  request.r(i571[17], i571[18], 0, i570, 'transcriptBtn')
  request.r(i571[19], i571[20], 0, i570, 'summaryBtn')
  request.r(i571[21], i571[22], 0, i570, 'summaryBtnBlue')
  request.r(i571[23], i571[24], 0, i570, 'mainPanel')
  request.r(i571[25], i571[26], 0, i570, 'handle1')
  request.r(i571[27], i571[28], 0, i570, 'animator')
  request.r(i571[29], i571[30], 0, i570, 'maskA')
  request.r(i571[31], i571[32], 0, i570, 'filter')
  request.r(i571[33], i571[34], 0, i570, 'arrow')
  request.r(i571[35], i571[36], 0, i570, 'toTap')
  request.r(i571[37], i571[38], 0, i570, 'openingPanel')
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i573 = data
  i572.ambientIntensity = i573[0]
  i572.reflectionIntensity = i573[1]
  i572.ambientMode = i573[2]
  i572.ambientLight = new pc.Color(i573[3], i573[4], i573[5], i573[6])
  i572.ambientSkyColor = new pc.Color(i573[7], i573[8], i573[9], i573[10])
  i572.ambientGroundColor = new pc.Color(i573[11], i573[12], i573[13], i573[14])
  i572.ambientEquatorColor = new pc.Color(i573[15], i573[16], i573[17], i573[18])
  i572.fogColor = new pc.Color(i573[19], i573[20], i573[21], i573[22])
  i572.fogEndDistance = i573[23]
  i572.fogStartDistance = i573[24]
  i572.fogDensity = i573[25]
  i572.fog = !!i573[26]
  request.r(i573[27], i573[28], 0, i572, 'skybox')
  i572.fogMode = i573[29]
  var i575 = i573[30]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i575[i + 0]) );
  }
  i572.lightmaps = i574
  i572.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i573[31], i572.lightProbes)
  i572.lightmapsMode = i573[32]
  i572.mixedBakeMode = i573[33]
  i572.environmentLightingMode = i573[34]
  i572.ambientProbe = new pc.SphericalHarmonicsL2(i573[35])
  i572.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i573[36])
  i572.useReferenceAmbientProbe = !!i573[37]
  request.r(i573[38], i573[39], 0, i572, 'customReflection')
  request.r(i573[40], i573[41], 0, i572, 'defaultReflection')
  i572.defaultReflectionMode = i573[42]
  i572.defaultReflectionResolution = i573[43]
  i572.sunLightObjectId = i573[44]
  i572.pixelLightCount = i573[45]
  i572.defaultReflectionHDR = !!i573[46]
  i572.hasLightDataAsset = !!i573[47]
  i572.hasManualGenerate = !!i573[48]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i579 = data
  request.r(i579[0], i579[1], 0, i578, 'lightmapColor')
  request.r(i579[2], i579[3], 0, i578, 'lightmapDirection')
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i580 = root || new UnityEngine.LightProbes()
  var i581 = data
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i589 = data
  var i591 = i589[0]
  var i590 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i591.length; i += 1) {
    i590.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i591[i + 0]));
  }
  i588.ShaderCompilationErrors = i590
  i588.name = i589[1]
  i588.guid = i589[2]
  var i593 = i589[3]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( i593[i + 0] );
  }
  i588.shaderDefinedKeywords = i592
  var i595 = i589[4]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i595[i + 0]) );
  }
  i588.passes = i594
  var i597 = i589[5]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i597[i + 0]) );
  }
  i588.usePasses = i596
  var i599 = i589[6]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i599[i + 0]) );
  }
  i588.defaultParameterValues = i598
  request.r(i589[7], i589[8], 0, i588, 'unityFallbackShader')
  i588.readDepth = !!i589[9]
  i588.isCreatedByShaderGraph = !!i589[10]
  i588.compiled = !!i589[11]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i603 = data
  i602.shaderName = i603[0]
  i602.errorMessage = i603[1]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i608 = root || new pc.UnityShaderPass()
  var i609 = data
  i608.id = i609[0]
  i608.subShaderIndex = i609[1]
  i608.name = i609[2]
  i608.passType = i609[3]
  i608.grabPassTextureName = i609[4]
  i608.usePass = !!i609[5]
  i608.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i609[6], i608.zTest)
  i608.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i609[7], i608.zWrite)
  i608.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i609[8], i608.culling)
  i608.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i609[9], i608.blending)
  i608.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i609[10], i608.alphaBlending)
  i608.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i609[11], i608.colorWriteMask)
  i608.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i609[12], i608.offsetUnits)
  i608.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i609[13], i608.offsetFactor)
  i608.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i609[14], i608.stencilRef)
  i608.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i609[15], i608.stencilReadMask)
  i608.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i609[16], i608.stencilWriteMask)
  i608.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i609[17], i608.stencilOp)
  i608.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i609[18], i608.stencilOpFront)
  i608.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i609[19], i608.stencilOpBack)
  var i611 = i609[20]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i611[i + 0]) );
  }
  i608.tags = i610
  var i613 = i609[21]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( i613[i + 0] );
  }
  i608.passDefinedKeywords = i612
  var i615 = i609[22]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i615[i + 0]) );
  }
  i608.passDefinedKeywordGroups = i614
  var i617 = i609[23]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i617[i + 0]) );
  }
  i608.variants = i616
  var i619 = i609[24]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i619[i + 0]) );
  }
  i608.excludedVariants = i618
  i608.hasDepthReader = !!i609[25]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i621 = data
  i620.val = i621[0]
  i620.name = i621[1]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i623 = data
  i622.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[0], i622.src)
  i622.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[1], i622.dst)
  i622.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[2], i622.op)
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i625 = data
  i624.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i625[0], i624.pass)
  i624.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i625[1], i624.fail)
  i624.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i625[2], i624.zFail)
  i624.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i625[3], i624.comp)
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i629 = data
  i628.name = i629[0]
  i628.value = i629[1]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i633 = data
  var i635 = i633[0]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( i635[i + 0] );
  }
  i632.keywords = i634
  i632.hasDiscard = !!i633[1]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i639 = data
  i638.passId = i639[0]
  i638.subShaderIndex = i639[1]
  var i641 = i639[2]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( i641[i + 0] );
  }
  i638.keywords = i640
  i638.vertexProgram = i639[3]
  i638.fragmentProgram = i639[4]
  i638.exportedForWebGl2 = !!i639[5]
  i638.readDepth = !!i639[6]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'shader')
  i644.pass = i645[2]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i649 = data
  i648.name = i649[0]
  i648.type = i649[1]
  i648.value = new pc.Vec4( i649[2], i649[3], i649[4], i649[5] )
  i648.textureValue = i649[6]
  i648.shaderPropertyFlag = i649[7]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i651 = data
  i650.name = i651[0]
  request.r(i651[1], i651[2], 0, i650, 'texture')
  i650.aabb = i651[3]
  i650.vertices = i651[4]
  i650.triangles = i651[5]
  i650.textureRect = UnityEngine.Rect.MinMaxRect(i651[6], i651[7], i651[8], i651[9])
  i650.packedRect = UnityEngine.Rect.MinMaxRect(i651[10], i651[11], i651[12], i651[13])
  i650.border = new pc.Vec4( i651[14], i651[15], i651[16], i651[17] )
  i650.transparency = i651[18]
  i650.bounds = i651[19]
  i650.pixelsPerUnit = i651[20]
  i650.textureWidth = i651[21]
  i650.textureHeight = i651[22]
  i650.nativeSize = new pc.Vec2( i651[23], i651[24] )
  i650.pivot = new pc.Vec2( i651[25], i651[26] )
  i650.textureRectOffset = new pc.Vec2( i651[27], i651[28] )
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i653 = data
  i652.name = i653[0]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i655 = data
  i654.name = i655[0]
  i654.wrapMode = i655[1]
  i654.isLooping = !!i655[2]
  i654.length = i655[3]
  var i657 = i655[4]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i657[i + 0]) );
  }
  i654.curves = i656
  var i659 = i655[5]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i659[i + 0]) );
  }
  i654.events = i658
  i654.halfPrecision = !!i655[6]
  i654._frameRate = i655[7]
  i654.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i655[8], i654.localBounds)
  i654.hasMuscleCurves = !!i655[9]
  var i661 = i655[10]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( i661[i + 0] );
  }
  i654.clipMuscleConstant = i660
  i654.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i655[11], i654.clipBindingConstant)
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i665 = data
  i664.path = i665[0]
  i664.hash = i665[1]
  i664.componentType = i665[2]
  i664.property = i665[3]
  i664.keys = i665[4]
  var i667 = i665[5]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i667[i + 0]) );
  }
  i664.objectReferenceKeys = i666
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i671 = data
  i670.time = i671[0]
  request.r(i671[1], i671[2], 0, i670, 'value')
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i675 = data
  i674.functionName = i675[0]
  i674.floatParameter = i675[1]
  i674.intParameter = i675[2]
  i674.stringParameter = i675[3]
  request.r(i675[4], i675[5], 0, i674, 'objectReferenceParameter')
  i674.time = i675[6]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i677 = data
  i676.center = new pc.Vec3( i677[0], i677[1], i677[2] )
  i676.extends = new pc.Vec3( i677[3], i677[4], i677[5] )
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i681 = data
  var i683 = i681[0]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( i683[i + 0] );
  }
  i680.genericBindings = i682
  var i685 = i681[1]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( i685[i + 0] );
  }
  i680.pptrCurveMapping = i684
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i687 = data
  i686.name = i687[0]
  var i689 = i687[1]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i689[i + 0]) );
  }
  i686.layers = i688
  var i691 = i687[2]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i691[i + 0]) );
  }
  i686.parameters = i690
  i686.animationClips = i687[3]
  i686.avatarUnsupported = i687[4]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i695 = data
  i694.name = i695[0]
  i694.defaultWeight = i695[1]
  i694.blendingMode = i695[2]
  i694.avatarMask = i695[3]
  i694.syncedLayerIndex = i695[4]
  i694.syncedLayerAffectsTiming = !!i695[5]
  i694.syncedLayers = i695[6]
  i694.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i695[7], i694.stateMachine)
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i697 = data
  i696.id = i697[0]
  i696.name = i697[1]
  i696.path = i697[2]
  var i699 = i697[3]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i699[i + 0]) );
  }
  i696.states = i698
  var i701 = i697[4]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i701[i + 0]) );
  }
  i696.machines = i700
  var i703 = i697[5]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i703[i + 0]) );
  }
  i696.entryStateTransitions = i702
  var i705 = i697[6]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i705[i + 0]) );
  }
  i696.exitStateTransitions = i704
  var i707 = i697[7]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i707[i + 0]) );
  }
  i696.anyStateTransitions = i706
  i696.defaultStateId = i697[8]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i711 = data
  i710.id = i711[0]
  i710.name = i711[1]
  i710.cycleOffset = i711[2]
  i710.cycleOffsetParameter = i711[3]
  i710.cycleOffsetParameterActive = !!i711[4]
  i710.mirror = !!i711[5]
  i710.mirrorParameter = i711[6]
  i710.mirrorParameterActive = !!i711[7]
  i710.motionId = i711[8]
  i710.nameHash = i711[9]
  i710.fullPathHash = i711[10]
  i710.speed = i711[11]
  i710.speedParameter = i711[12]
  i710.speedParameterActive = !!i711[13]
  i710.tag = i711[14]
  i710.tagHash = i711[15]
  i710.writeDefaultValues = !!i711[16]
  var i713 = i711[17]
  var i712 = []
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 2, i712, '')
  }
  i710.behaviours = i712
  var i715 = i711[18]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i715[i + 0]) );
  }
  i710.transitions = i714
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i721 = data
  i720.fullPath = i721[0]
  i720.canTransitionToSelf = !!i721[1]
  i720.duration = i721[2]
  i720.exitTime = i721[3]
  i720.hasExitTime = !!i721[4]
  i720.hasFixedDuration = !!i721[5]
  i720.interruptionSource = i721[6]
  i720.offset = i721[7]
  i720.orderedInterruption = !!i721[8]
  i720.destinationStateId = i721[9]
  i720.isExit = !!i721[10]
  i720.mute = !!i721[11]
  i720.solo = !!i721[12]
  var i723 = i721[13]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i723[i + 0]) );
  }
  i720.conditions = i722
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i729 = data
  i728.destinationStateId = i729[0]
  i728.isExit = !!i729[1]
  i728.mute = !!i729[2]
  i728.solo = !!i729[3]
  var i731 = i729[4]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i731[i + 0]) );
  }
  i728.conditions = i730
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i735 = data
  i734.defaultBool = !!i735[0]
  i734.defaultFloat = i735[1]
  i734.defaultInt = i735[2]
  i734.name = i735[3]
  i734.nameHash = i735[4]
  i734.type = i735[5]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i739 = data
  i738.mode = i739[0]
  i738.parameter = i739[1]
  i738.threshold = i739[2]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i741 = data
  i740.name = i741[0]
  i740.bytes64 = i741[1]
  i740.data = i741[2]
  return i740
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i742 = root || request.c( 'AudioLibrary' )
  var i743 = data
  var i745 = i743[0]
  var i744 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i745.length; i += 1) {
    i744.add(request.d('AudioLibrary+ClipEntry', i745[i + 0]));
  }
  i742.clips = i744
  return i742
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i748 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i749 = data
  i748.key = i749[0]
  i748.channel = i749[1]
  request.r(i749[2], i749[3], 0, i748, 'clip')
  i748.volume = i749[4]
  i748.loop = !!i749[5]
  return i748
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i750 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i751 = data
  i750.useSafeMode = !!i751[0]
  i750.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i751[1], i750.safeModeOptions)
  i750.timeScale = i751[2]
  i750.unscaledTimeScale = i751[3]
  i750.useSmoothDeltaTime = !!i751[4]
  i750.maxSmoothUnscaledTime = i751[5]
  i750.rewindCallbackMode = i751[6]
  i750.showUnityEditorReport = !!i751[7]
  i750.logBehaviour = i751[8]
  i750.drawGizmos = !!i751[9]
  i750.defaultRecyclable = !!i751[10]
  i750.defaultAutoPlay = i751[11]
  i750.defaultUpdateType = i751[12]
  i750.defaultTimeScaleIndependent = !!i751[13]
  i750.defaultEaseType = i751[14]
  i750.defaultEaseOvershootOrAmplitude = i751[15]
  i750.defaultEasePeriod = i751[16]
  i750.defaultAutoKill = !!i751[17]
  i750.defaultLoopType = i751[18]
  i750.debugMode = !!i751[19]
  i750.debugStoreTargetId = !!i751[20]
  i750.showPreviewPanel = !!i751[21]
  i750.storeSettingsLocation = i751[22]
  i750.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i751[23], i750.modules)
  i750.createASMDEF = !!i751[24]
  i750.showPlayingTweens = !!i751[25]
  i750.showPausedTweens = !!i751[26]
  return i750
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i752 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i753 = data
  i752.logBehaviour = i753[0]
  i752.nestedTweenFailureBehaviour = i753[1]
  return i752
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i754 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i755 = data
  i754.showPanel = !!i755[0]
  i754.audioEnabled = !!i755[1]
  i754.physicsEnabled = !!i755[2]
  i754.physics2DEnabled = !!i755[3]
  i754.spriteEnabled = !!i755[4]
  i754.uiEnabled = !!i755[5]
  i754.textMeshProEnabled = !!i755[6]
  i754.tk2DEnabled = !!i755[7]
  i754.deAudioEnabled = !!i755[8]
  i754.deUnityExtendedEnabled = !!i755[9]
  i754.epoOutlineEnabled = !!i755[10]
  return i754
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i756 = root || request.c( 'TMPro.TMP_Settings' )
  var i757 = data
  i756.m_enableWordWrapping = !!i757[0]
  i756.m_enableKerning = !!i757[1]
  i756.m_enableExtraPadding = !!i757[2]
  i756.m_enableTintAllSprites = !!i757[3]
  i756.m_enableParseEscapeCharacters = !!i757[4]
  i756.m_EnableRaycastTarget = !!i757[5]
  i756.m_GetFontFeaturesAtRuntime = !!i757[6]
  i756.m_missingGlyphCharacter = i757[7]
  i756.m_warningsDisabled = !!i757[8]
  request.r(i757[9], i757[10], 0, i756, 'm_defaultFontAsset')
  i756.m_defaultFontAssetPath = i757[11]
  i756.m_defaultFontSize = i757[12]
  i756.m_defaultAutoSizeMinRatio = i757[13]
  i756.m_defaultAutoSizeMaxRatio = i757[14]
  i756.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i757[15], i757[16] )
  i756.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i757[17], i757[18] )
  i756.m_autoSizeTextContainer = !!i757[19]
  i756.m_IsTextObjectScaleStatic = !!i757[20]
  var i759 = i757[21]
  var i758 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i759.length; i += 2) {
  request.r(i759[i + 0], i759[i + 1], 1, i758, '')
  }
  i756.m_fallbackFontAssets = i758
  i756.m_matchMaterialPreset = !!i757[22]
  request.r(i757[23], i757[24], 0, i756, 'm_defaultSpriteAsset')
  i756.m_defaultSpriteAssetPath = i757[25]
  i756.m_enableEmojiSupport = !!i757[26]
  i756.m_MissingCharacterSpriteUnicode = i757[27]
  i756.m_defaultColorGradientPresetsPath = i757[28]
  request.r(i757[29], i757[30], 0, i756, 'm_defaultStyleSheet')
  i756.m_StyleSheetsResourcePath = i757[31]
  request.r(i757[32], i757[33], 0, i756, 'm_leadingCharacters')
  request.r(i757[34], i757[35], 0, i756, 'm_followingCharacters')
  i756.m_UseModernHangulLineBreakingRules = !!i757[36]
  return i756
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i762 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i763 = data
  i762.hashCode = i763[0]
  request.r(i763[1], i763[2], 0, i762, 'material')
  i762.materialHashCode = i763[3]
  request.r(i763[4], i763[5], 0, i762, 'spriteSheet')
  var i765 = i763[6]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i765.length; i += 1) {
    i764.add(request.d('TMPro.TMP_Sprite', i765[i + 0]));
  }
  i762.spriteInfoList = i764
  var i767 = i763[7]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i767.length; i += 2) {
  request.r(i767[i + 0], i767[i + 1], 1, i766, '')
  }
  i762.fallbackSpriteAssets = i766
  i762.m_Version = i763[8]
  i762.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i763[9], i762.m_FaceInfo)
  var i769 = i763[10]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i769.length; i += 1) {
    i768.add(request.d('TMPro.TMP_SpriteCharacter', i769[i + 0]));
  }
  i762.m_SpriteCharacterTable = i768
  var i771 = i763[11]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i771.length; i += 1) {
    i770.add(request.d('TMPro.TMP_SpriteGlyph', i771[i + 0]));
  }
  i762.m_SpriteGlyphTable = i770
  return i762
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i774 = root || request.c( 'TMPro.TMP_Sprite' )
  var i775 = data
  i774.name = i775[0]
  i774.hashCode = i775[1]
  i774.unicode = i775[2]
  i774.pivot = new pc.Vec2( i775[3], i775[4] )
  request.r(i775[5], i775[6], 0, i774, 'sprite')
  i774.id = i775[7]
  i774.x = i775[8]
  i774.y = i775[9]
  i774.width = i775[10]
  i774.height = i775[11]
  i774.xOffset = i775[12]
  i774.yOffset = i775[13]
  i774.xAdvance = i775[14]
  i774.scale = i775[15]
  return i774
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i779 = data
  i778.m_FaceIndex = i779[0]
  i778.m_FamilyName = i779[1]
  i778.m_StyleName = i779[2]
  i778.m_PointSize = i779[3]
  i778.m_Scale = i779[4]
  i778.m_UnitsPerEM = i779[5]
  i778.m_LineHeight = i779[6]
  i778.m_AscentLine = i779[7]
  i778.m_CapLine = i779[8]
  i778.m_MeanLine = i779[9]
  i778.m_Baseline = i779[10]
  i778.m_DescentLine = i779[11]
  i778.m_SuperscriptOffset = i779[12]
  i778.m_SuperscriptSize = i779[13]
  i778.m_SubscriptOffset = i779[14]
  i778.m_SubscriptSize = i779[15]
  i778.m_UnderlineOffset = i779[16]
  i778.m_UnderlineThickness = i779[17]
  i778.m_StrikethroughOffset = i779[18]
  i778.m_StrikethroughThickness = i779[19]
  i778.m_TabWidth = i779[20]
  return i778
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i782 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i783 = data
  i782.m_Name = i783[0]
  i782.m_HashCode = i783[1]
  i782.m_ElementType = i783[2]
  i782.m_Unicode = i783[3]
  i782.m_GlyphIndex = i783[4]
  i782.m_Scale = i783[5]
  return i782
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i786 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'sprite')
  i786.m_Index = i787[2]
  i786.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i787[3], i786.m_Metrics)
  i786.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i787[4], i786.m_GlyphRect)
  i786.m_Scale = i787[5]
  i786.m_AtlasIndex = i787[6]
  i786.m_ClassDefinitionType = i787[7]
  return i786
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i789 = data
  i788.m_Width = i789[0]
  i788.m_Height = i789[1]
  i788.m_HorizontalBearingX = i789[2]
  i788.m_HorizontalBearingY = i789[3]
  i788.m_HorizontalAdvance = i789[4]
  return i788
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i791 = data
  i790.m_X = i791[0]
  i790.m_Y = i791[1]
  i790.m_Width = i791[2]
  i790.m_Height = i791[3]
  return i790
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i792 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i793 = data
  var i795 = i793[0]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i795.length; i += 1) {
    i794.add(request.d('TMPro.TMP_Style', i795[i + 0]));
  }
  i792.m_StyleList = i794
  return i792
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i798 = root || request.c( 'TMPro.TMP_Style' )
  var i799 = data
  i798.m_Name = i799[0]
  i798.m_HashCode = i799[1]
  i798.m_OpeningDefinition = i799[2]
  i798.m_ClosingDefinition = i799[3]
  i798.m_OpeningTagArray = i799[4]
  i798.m_ClosingTagArray = i799[5]
  i798.m_OpeningTagUnicodeArray = i799[6]
  i798.m_ClosingTagUnicodeArray = i799[7]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i801 = data
  var i803 = i801[0]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i803[i + 0]) );
  }
  i800.files = i802
  i800.componentToPrefabIds = i801[1]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i807 = data
  i806.path = i807[0]
  request.r(i807[1], i807[2], 0, i806, 'unityObject')
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i809 = data
  var i811 = i809[0]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i811[i + 0]) );
  }
  i808.scriptsExecutionOrder = i810
  var i813 = i809[1]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i813[i + 0]) );
  }
  i808.sortingLayers = i812
  var i815 = i809[2]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i815[i + 0]) );
  }
  i808.cullingLayers = i814
  i808.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i809[3], i808.timeSettings)
  i808.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i809[4], i808.physicsSettings)
  i808.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i809[5], i808.physics2DSettings)
  i808.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i809[6], i808.qualitySettings)
  i808.enableRealtimeShadows = !!i809[7]
  i808.enableAutoInstancing = !!i809[8]
  i808.enableDynamicBatching = !!i809[9]
  i808.lightmapEncodingQuality = i809[10]
  i808.desiredColorSpace = i809[11]
  var i817 = i809[12]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( i817[i + 0] );
  }
  i808.allTags = i816
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i821 = data
  i820.name = i821[0]
  i820.value = i821[1]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i825 = data
  i824.id = i825[0]
  i824.name = i825[1]
  i824.value = i825[2]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i829 = data
  i828.id = i829[0]
  i828.name = i829[1]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i831 = data
  i830.fixedDeltaTime = i831[0]
  i830.maximumDeltaTime = i831[1]
  i830.timeScale = i831[2]
  i830.maximumParticleTimestep = i831[3]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i833 = data
  i832.gravity = new pc.Vec3( i833[0], i833[1], i833[2] )
  i832.defaultSolverIterations = i833[3]
  i832.bounceThreshold = i833[4]
  i832.autoSyncTransforms = !!i833[5]
  i832.autoSimulation = !!i833[6]
  var i835 = i833[7]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i835[i + 0]) );
  }
  i832.collisionMatrix = i834
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i839 = data
  i838.enabled = !!i839[0]
  i838.layerId = i839[1]
  i838.otherLayerId = i839[2]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'material')
  i840.gravity = new pc.Vec2( i841[2], i841[3] )
  i840.positionIterations = i841[4]
  i840.velocityIterations = i841[5]
  i840.velocityThreshold = i841[6]
  i840.maxLinearCorrection = i841[7]
  i840.maxAngularCorrection = i841[8]
  i840.maxTranslationSpeed = i841[9]
  i840.maxRotationSpeed = i841[10]
  i840.baumgarteScale = i841[11]
  i840.baumgarteTOIScale = i841[12]
  i840.timeToSleep = i841[13]
  i840.linearSleepTolerance = i841[14]
  i840.angularSleepTolerance = i841[15]
  i840.defaultContactOffset = i841[16]
  i840.autoSimulation = !!i841[17]
  i840.queriesHitTriggers = !!i841[18]
  i840.queriesStartInColliders = !!i841[19]
  i840.callbacksOnDisable = !!i841[20]
  i840.reuseCollisionCallbacks = !!i841[21]
  i840.autoSyncTransforms = !!i841[22]
  var i843 = i841[23]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i843[i + 0]) );
  }
  i840.collisionMatrix = i842
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i847 = data
  i846.enabled = !!i847[0]
  i846.layerId = i847[1]
  i846.otherLayerId = i847[2]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i849 = data
  var i851 = i849[0]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i851[i + 0]) );
  }
  i848.qualityLevels = i850
  var i853 = i849[1]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( i853[i + 0] );
  }
  i848.names = i852
  i848.shadows = i849[2]
  i848.anisotropicFiltering = i849[3]
  i848.antiAliasing = i849[4]
  i848.lodBias = i849[5]
  i848.shadowCascades = i849[6]
  i848.shadowDistance = i849[7]
  i848.shadowmaskMode = i849[8]
  i848.shadowProjection = i849[9]
  i848.shadowResolution = i849[10]
  i848.softParticles = !!i849[11]
  i848.softVegetation = !!i849[12]
  i848.activeColorSpace = i849[13]
  i848.desiredColorSpace = i849[14]
  i848.masterTextureLimit = i849[15]
  i848.maxQueuedFrames = i849[16]
  i848.particleRaycastBudget = i849[17]
  i848.pixelLightCount = i849[18]
  i848.realtimeReflectionProbes = !!i849[19]
  i848.shadowCascade2Split = i849[20]
  i848.shadowCascade4Split = new pc.Vec3( i849[21], i849[22], i849[23] )
  i848.streamingMipmapsActive = !!i849[24]
  i848.vSyncCount = i849[25]
  i848.asyncUploadBufferSize = i849[26]
  i848.asyncUploadTimeSlice = i849[27]
  i848.billboardsFaceCameraPosition = !!i849[28]
  i848.shadowNearPlaneOffset = i849[29]
  i848.streamingMipmapsMemoryBudget = i849[30]
  i848.maximumLODLevel = i849[31]
  i848.streamingMipmapsAddAllCameras = !!i849[32]
  i848.streamingMipmapsMaxLevelReduction = i849[33]
  i848.streamingMipmapsRenderersPerFrame = i849[34]
  i848.resolutionScalingFixedDPIFactor = i849[35]
  i848.streamingMipmapsMaxFileIORequests = i849[36]
  i848.currentQualityLevel = i849[37]
  return i848
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

Deserializers.buildID = "0baab1b5-9dc5-4f23-bafb-316b73d401bf";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


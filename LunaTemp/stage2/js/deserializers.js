var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.JointSpring' )
  var i523 = data
  i522.spring = i523[0]
  i522.damper = i523[1]
  i522.targetPosition = i523[2]
  return i522
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.JointMotor' )
  var i525 = data
  i524.m_TargetVelocity = i525[0]
  i524.m_Force = i525[1]
  i524.m_FreeSpin = i525[2]
  return i524
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.JointLimits' )
  var i527 = data
  i526.m_Min = i527[0]
  i526.m_Max = i527[1]
  i526.m_Bounciness = i527[2]
  i526.m_BounceMinVelocity = i527[3]
  i526.m_ContactDistance = i527[4]
  i526.minBounce = i527[5]
  i526.maxBounce = i527[6]
  return i526
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointDrive' )
  var i529 = data
  i528.m_PositionSpring = i529[0]
  i528.m_PositionDamper = i529[1]
  i528.m_MaximumForce = i529[2]
  i528.m_UseAcceleration = i529[3]
  return i528
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i531 = data
  i530.m_Spring = i531[0]
  i530.m_Damper = i531[1]
  return i530
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i533 = data
  i532.m_Limit = i533[0]
  i532.m_Bounciness = i533[1]
  i532.m_ContactDistance = i533[2]
  return i532
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i535 = data
  i534.m_ExtremumSlip = i535[0]
  i534.m_ExtremumValue = i535[1]
  i534.m_AsymptoteSlip = i535[2]
  i534.m_AsymptoteValue = i535[3]
  i534.m_Stiffness = i535[4]
  return i534
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i537 = data
  i536.m_LowerAngle = i537[0]
  i536.m_UpperAngle = i537[1]
  return i536
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i539 = data
  i538.m_MotorSpeed = i539[0]
  i538.m_MaximumMotorTorque = i539[1]
  return i538
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i541 = data
  i540.m_DampingRatio = i541[0]
  i540.m_Frequency = i541[1]
  i540.m_Angle = i541[2]
  return i540
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i543 = data
  i542.m_LowerTranslation = i543[0]
  i542.m_UpperTranslation = i543[1]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i544 = root || new pc.UnityMaterial()
  var i545 = data
  i544.name = i545[0]
  request.r(i545[1], i545[2], 0, i544, 'shader')
  i544.renderQueue = i545[3]
  i544.enableInstancing = !!i545[4]
  var i547 = i545[5]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i547[i + 0]) );
  }
  i544.floatParameters = i546
  var i549 = i545[6]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i549[i + 0]) );
  }
  i544.colorParameters = i548
  var i551 = i545[7]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i551[i + 0]) );
  }
  i544.vectorParameters = i550
  var i553 = i545[8]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i553[i + 0]) );
  }
  i544.textureParameters = i552
  var i555 = i545[9]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i555[i + 0]) );
  }
  i544.materialFlags = i554
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i559 = data
  i558.name = i559[0]
  i558.value = i559[1]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i563 = data
  i562.name = i563[0]
  i562.value = new pc.Color(i563[1], i563[2], i563[3], i563[4])
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i567 = data
  i566.name = i567[0]
  i566.value = new pc.Vec4( i567[1], i567[2], i567[3], i567[4] )
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i571 = data
  i570.name = i571[0]
  request.r(i571[1], i571[2], 0, i570, 'value')
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i575 = data
  i574.name = i575[0]
  i574.enabled = !!i575[1]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i577 = data
  i576.name = i577[0]
  i576.width = i577[1]
  i576.height = i577[2]
  i576.mipmapCount = i577[3]
  i576.anisoLevel = i577[4]
  i576.filterMode = i577[5]
  i576.hdr = !!i577[6]
  i576.format = i577[7]
  i576.wrapMode = i577[8]
  i576.alphaIsTransparency = !!i577[9]
  i576.alphaSource = i577[10]
  i576.graphicsFormat = i577[11]
  i576.sRGBTexture = !!i577[12]
  i576.desiredColorSpace = i577[13]
  i576.wrapU = i577[14]
  i576.wrapV = i577[15]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i579 = data
  i578.name = i579[0]
  i578.index = i579[1]
  i578.startup = !!i579[2]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i581 = data
  i580.position = new pc.Vec3( i581[0], i581[1], i581[2] )
  i580.scale = new pc.Vec3( i581[3], i581[4], i581[5] )
  i580.rotation = new pc.Quat(i581[6], i581[7], i581[8], i581[9])
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i583 = data
  i582.enabled = !!i583[0]
  i582.aspect = i583[1]
  i582.orthographic = !!i583[2]
  i582.orthographicSize = i583[3]
  i582.backgroundColor = new pc.Color(i583[4], i583[5], i583[6], i583[7])
  i582.nearClipPlane = i583[8]
  i582.farClipPlane = i583[9]
  i582.fieldOfView = i583[10]
  i582.depth = i583[11]
  i582.clearFlags = i583[12]
  i582.cullingMask = i583[13]
  i582.rect = i583[14]
  request.r(i583[15], i583[16], 0, i582, 'targetTexture')
  i582.usePhysicalProperties = !!i583[17]
  i582.focalLength = i583[18]
  i582.sensorSize = new pc.Vec2( i583[19], i583[20] )
  i582.lensShift = new pc.Vec2( i583[21], i583[22] )
  i582.gateFit = i583[23]
  i582.commandBufferCount = i583[24]
  i582.cameraType = i583[25]
  return i582
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i584 = root || request.c( 'CameraAspectFitter' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'targetSprite')
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i587 = data
  i586.name = i587[0]
  i586.tagId = i587[1]
  i586.enabled = !!i587[2]
  i586.isStatic = !!i587[3]
  i586.layer = i587[4]
  return i586
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i588 = root || request.c( 'AudioManager' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'library')
  i588.sfxPoolSize = i589[2]
  return i588
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i590 = root || request.c( 'TaskManager' )
  var i591 = data
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i593 = data
  i592.enabled = !!i593[0]
  request.r(i593[1], i593[2], 0, i592, 'sharedMaterial')
  var i595 = i593[3]
  var i594 = []
  for(var i = 0; i < i595.length; i += 2) {
  request.r(i595[i + 0], i595[i + 1], 2, i594, '')
  }
  i592.sharedMaterials = i594
  i592.receiveShadows = !!i593[4]
  i592.shadowCastingMode = i593[5]
  i592.sortingLayerID = i593[6]
  i592.sortingOrder = i593[7]
  i592.lightmapIndex = i593[8]
  i592.lightmapSceneIndex = i593[9]
  i592.lightmapScaleOffset = new pc.Vec4( i593[10], i593[11], i593[12], i593[13] )
  i592.lightProbeUsage = i593[14]
  i592.reflectionProbeUsage = i593[15]
  i592.color = new pc.Color(i593[16], i593[17], i593[18], i593[19])
  request.r(i593[20], i593[21], 0, i592, 'sprite')
  i592.flipX = !!i593[22]
  i592.flipY = !!i593[23]
  i592.drawMode = i593[24]
  i592.size = new pc.Vec2( i593[25], i593[26] )
  i592.tileMode = i593[27]
  i592.adaptiveModeThreshold = i593[28]
  i592.maskInteraction = i593[29]
  i592.spriteSortPoint = i593[30]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i599 = data
  i598.pivot = new pc.Vec2( i599[0], i599[1] )
  i598.anchorMin = new pc.Vec2( i599[2], i599[3] )
  i598.anchorMax = new pc.Vec2( i599[4], i599[5] )
  i598.sizeDelta = new pc.Vec2( i599[6], i599[7] )
  i598.anchoredPosition3D = new pc.Vec3( i599[8], i599[9], i599[10] )
  i598.rotation = new pc.Quat(i599[11], i599[12], i599[13], i599[14])
  i598.scale = new pc.Vec3( i599[15], i599[16], i599[17] )
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i601 = data
  i600.enabled = !!i601[0]
  i600.planeDistance = i601[1]
  i600.referencePixelsPerUnit = i601[2]
  i600.isFallbackOverlay = !!i601[3]
  i600.renderMode = i601[4]
  i600.renderOrder = i601[5]
  i600.sortingLayerName = i601[6]
  i600.sortingOrder = i601[7]
  i600.scaleFactor = i601[8]
  request.r(i601[9], i601[10], 0, i600, 'worldCamera')
  i600.overrideSorting = !!i601[11]
  i600.pixelPerfect = !!i601[12]
  i600.targetDisplay = i601[13]
  i600.overridePixelPerfect = !!i601[14]
  return i600
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i603 = data
  i602.m_UiScaleMode = i603[0]
  i602.m_ReferencePixelsPerUnit = i603[1]
  i602.m_ScaleFactor = i603[2]
  i602.m_ReferenceResolution = new pc.Vec2( i603[3], i603[4] )
  i602.m_ScreenMatchMode = i603[5]
  i602.m_MatchWidthOrHeight = i603[6]
  i602.m_PhysicalUnit = i603[7]
  i602.m_FallbackScreenDPI = i603[8]
  i602.m_DefaultSpriteDPI = i603[9]
  i602.m_DynamicPixelsPerUnit = i603[10]
  i602.m_PresetInfoIsWorld = !!i603[11]
  return i602
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i605 = data
  i604.m_IgnoreReversedGraphics = !!i605[0]
  i604.m_BlockingObjects = i605[1]
  i604.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i605[2] )
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i607 = data
  i606.cullTransparentMesh = !!i607[0]
  return i606
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.UI.Image' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'm_Sprite')
  i608.m_Type = i609[2]
  i608.m_PreserveAspect = !!i609[3]
  i608.m_FillCenter = !!i609[4]
  i608.m_FillMethod = i609[5]
  i608.m_FillAmount = i609[6]
  i608.m_FillClockwise = !!i609[7]
  i608.m_FillOrigin = i609[8]
  i608.m_UseSpriteMesh = !!i609[9]
  i608.m_PixelsPerUnitMultiplier = i609[10]
  request.r(i609[11], i609[12], 0, i608, 'm_Material')
  i608.m_Maskable = !!i609[13]
  i608.m_Color = new pc.Color(i609[14], i609[15], i609[16], i609[17])
  i608.m_RaycastTarget = !!i609[18]
  i608.m_RaycastPadding = new pc.Vec4( i609[19], i609[20], i609[21], i609[22] )
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i611 = data
  i610.m_Alpha = i611[0]
  i610.m_Interactable = !!i611[1]
  i610.m_BlocksRaycasts = !!i611[2]
  i610.m_IgnoreParentGroups = !!i611[3]
  i610.enabled = !!i611[4]
  return i610
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i612 = root || request.c( 'CanvasGroupAnimator' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'canvasGroup')
  i612.animateFade = !!i613[2]
  i612.triggerOnStart = !!i613[3]
  i612.isLooping = !!i613[4]
  i612.fadeTo = i613[5]
  i612.fadeDuration = i613[6]
  i612.fadeEaseType = i613[7]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'animatorController')
  request.r(i615[2], i615[3], 0, i614, 'avatar')
  i614.updateMode = i615[4]
  i614.hasTransformHierarchy = !!i615[5]
  i614.applyRootMotion = !!i615[6]
  var i617 = i615[7]
  var i616 = []
  for(var i = 0; i < i617.length; i += 2) {
  request.r(i617[i + 0], i617[i + 1], 2, i616, '')
  }
  i614.humanBones = i616
  i614.enabled = !!i615[8]
  return i614
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.Button' )
  var i621 = data
  i620.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i621[0], i620.m_OnClick)
  i620.m_Navigation = request.d('UnityEngine.UI.Navigation', i621[1], i620.m_Navigation)
  i620.m_Transition = i621[2]
  i620.m_Colors = request.d('UnityEngine.UI.ColorBlock', i621[3], i620.m_Colors)
  i620.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i621[4], i620.m_SpriteState)
  i620.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i621[5], i620.m_AnimationTriggers)
  i620.m_Interactable = !!i621[6]
  request.r(i621[7], i621[8], 0, i620, 'm_TargetGraphic')
  return i620
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i623 = data
  i622.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i623[0], i622.m_PersistentCalls)
  return i622
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i625 = data
  var i627 = i625[0]
  var i626 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i627.length; i += 1) {
    i626.add(request.d('UnityEngine.Events.PersistentCall', i627[i + 0]));
  }
  i624.m_Calls = i626
  return i624
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'm_Target')
  i630.m_TargetAssemblyTypeName = i631[2]
  i630.m_MethodName = i631[3]
  i630.m_Mode = i631[4]
  i630.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i631[5], i630.m_Arguments)
  i630.m_CallState = i631[6]
  return i630
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'm_ObjectArgument')
  i632.m_ObjectArgumentAssemblyTypeName = i633[2]
  i632.m_IntArgument = i633[3]
  i632.m_FloatArgument = i633[4]
  i632.m_StringArgument = i633[5]
  i632.m_BoolArgument = !!i633[6]
  return i632
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i635 = data
  i634.m_Mode = i635[0]
  i634.m_WrapAround = !!i635[1]
  request.r(i635[2], i635[3], 0, i634, 'm_SelectOnUp')
  request.r(i635[4], i635[5], 0, i634, 'm_SelectOnDown')
  request.r(i635[6], i635[7], 0, i634, 'm_SelectOnLeft')
  request.r(i635[8], i635[9], 0, i634, 'm_SelectOnRight')
  return i634
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i637 = data
  i636.m_NormalColor = new pc.Color(i637[0], i637[1], i637[2], i637[3])
  i636.m_HighlightedColor = new pc.Color(i637[4], i637[5], i637[6], i637[7])
  i636.m_PressedColor = new pc.Color(i637[8], i637[9], i637[10], i637[11])
  i636.m_SelectedColor = new pc.Color(i637[12], i637[13], i637[14], i637[15])
  i636.m_DisabledColor = new pc.Color(i637[16], i637[17], i637[18], i637[19])
  i636.m_ColorMultiplier = i637[20]
  i636.m_FadeDuration = i637[21]
  return i636
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'm_HighlightedSprite')
  request.r(i639[2], i639[3], 0, i638, 'm_PressedSprite')
  request.r(i639[4], i639[5], 0, i638, 'm_SelectedSprite')
  request.r(i639[6], i639[7], 0, i638, 'm_DisabledSprite')
  return i638
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i641 = data
  i640.m_NormalTrigger = i641[0]
  i640.m_HighlightedTrigger = i641[1]
  i640.m_PressedTrigger = i641[2]
  i640.m_SelectedTrigger = i641[3]
  i640.m_DisabledTrigger = i641[4]
  return i640
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i643 = data
  i642.m_Spacing = i643[0]
  i642.m_ChildForceExpandWidth = !!i643[1]
  i642.m_ChildForceExpandHeight = !!i643[2]
  i642.m_ChildControlWidth = !!i643[3]
  i642.m_ChildControlHeight = !!i643[4]
  i642.m_ChildScaleWidth = !!i643[5]
  i642.m_ChildScaleHeight = !!i643[6]
  i642.m_ReverseArrangement = !!i643[7]
  i642.m_Padding = UnityEngine.RectOffset.FromPaddings(i643[8], i643[9], i643[10], i643[11])
  i642.m_ChildAlignment = i643[12]
  return i642
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.Mask' )
  var i645 = data
  i644.m_ShowMaskGraphic = !!i645[0]
  return i644
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'm_Content')
  i646.m_Horizontal = !!i647[2]
  i646.m_Vertical = !!i647[3]
  i646.m_MovementType = i647[4]
  i646.m_Elasticity = i647[5]
  i646.m_Inertia = !!i647[6]
  i646.m_DecelerationRate = i647[7]
  i646.m_ScrollSensitivity = i647[8]
  request.r(i647[9], i647[10], 0, i646, 'm_Viewport')
  request.r(i647[11], i647[12], 0, i646, 'm_HorizontalScrollbar')
  request.r(i647[13], i647[14], 0, i646, 'm_VerticalScrollbar')
  i646.m_HorizontalScrollbarVisibility = i647[15]
  i646.m_VerticalScrollbarVisibility = i647[16]
  i646.m_HorizontalScrollbarSpacing = i647[17]
  i646.m_VerticalScrollbarSpacing = i647[18]
  i646.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i647[19], i646.m_OnValueChanged)
  return i646
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i649 = data
  i648.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i649[0], i648.m_PersistentCalls)
  return i648
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i651 = data
  i650.m_Padding = new pc.Vec4( i651[0], i651[1], i651[2], i651[3] )
  i650.m_Softness = new pc.Vec2( i651[4], i651[5] )
  return i650
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i652 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i653 = data
  i652.m_hasFontAssetChanged = !!i653[0]
  request.r(i653[1], i653[2], 0, i652, 'm_baseMaterial')
  i652.m_maskOffset = new pc.Vec4( i653[3], i653[4], i653[5], i653[6] )
  i652.m_text = i653[7]
  i652.m_isRightToLeft = !!i653[8]
  request.r(i653[9], i653[10], 0, i652, 'm_fontAsset')
  request.r(i653[11], i653[12], 0, i652, 'm_sharedMaterial')
  var i655 = i653[13]
  var i654 = []
  for(var i = 0; i < i655.length; i += 2) {
  request.r(i655[i + 0], i655[i + 1], 2, i654, '')
  }
  i652.m_fontSharedMaterials = i654
  request.r(i653[14], i653[15], 0, i652, 'm_fontMaterial')
  var i657 = i653[16]
  var i656 = []
  for(var i = 0; i < i657.length; i += 2) {
  request.r(i657[i + 0], i657[i + 1], 2, i656, '')
  }
  i652.m_fontMaterials = i656
  i652.m_fontColor32 = UnityEngine.Color32.ConstructColor(i653[17], i653[18], i653[19], i653[20])
  i652.m_fontColor = new pc.Color(i653[21], i653[22], i653[23], i653[24])
  i652.m_enableVertexGradient = !!i653[25]
  i652.m_colorMode = i653[26]
  i652.m_fontColorGradient = request.d('TMPro.VertexGradient', i653[27], i652.m_fontColorGradient)
  request.r(i653[28], i653[29], 0, i652, 'm_fontColorGradientPreset')
  request.r(i653[30], i653[31], 0, i652, 'm_spriteAsset')
  i652.m_tintAllSprites = !!i653[32]
  request.r(i653[33], i653[34], 0, i652, 'm_StyleSheet')
  i652.m_TextStyleHashCode = i653[35]
  i652.m_overrideHtmlColors = !!i653[36]
  i652.m_faceColor = UnityEngine.Color32.ConstructColor(i653[37], i653[38], i653[39], i653[40])
  i652.m_fontSize = i653[41]
  i652.m_fontSizeBase = i653[42]
  i652.m_fontWeight = i653[43]
  i652.m_enableAutoSizing = !!i653[44]
  i652.m_fontSizeMin = i653[45]
  i652.m_fontSizeMax = i653[46]
  i652.m_fontStyle = i653[47]
  i652.m_HorizontalAlignment = i653[48]
  i652.m_VerticalAlignment = i653[49]
  i652.m_textAlignment = i653[50]
  i652.m_characterSpacing = i653[51]
  i652.m_wordSpacing = i653[52]
  i652.m_lineSpacing = i653[53]
  i652.m_lineSpacingMax = i653[54]
  i652.m_paragraphSpacing = i653[55]
  i652.m_charWidthMaxAdj = i653[56]
  i652.m_enableWordWrapping = !!i653[57]
  i652.m_wordWrappingRatios = i653[58]
  i652.m_overflowMode = i653[59]
  request.r(i653[60], i653[61], 0, i652, 'm_linkedTextComponent')
  request.r(i653[62], i653[63], 0, i652, 'parentLinkedComponent')
  i652.m_enableKerning = !!i653[64]
  i652.m_enableExtraPadding = !!i653[65]
  i652.checkPaddingRequired = !!i653[66]
  i652.m_isRichText = !!i653[67]
  i652.m_parseCtrlCharacters = !!i653[68]
  i652.m_isOrthographic = !!i653[69]
  i652.m_isCullingEnabled = !!i653[70]
  i652.m_horizontalMapping = i653[71]
  i652.m_verticalMapping = i653[72]
  i652.m_uvLineOffset = i653[73]
  i652.m_geometrySortingOrder = i653[74]
  i652.m_IsTextObjectScaleStatic = !!i653[75]
  i652.m_VertexBufferAutoSizeReduction = !!i653[76]
  i652.m_useMaxVisibleDescender = !!i653[77]
  i652.m_pageToDisplay = i653[78]
  i652.m_margin = new pc.Vec4( i653[79], i653[80], i653[81], i653[82] )
  i652.m_isUsingLegacyAnimationComponent = !!i653[83]
  i652.m_isVolumetricText = !!i653[84]
  request.r(i653[85], i653[86], 0, i652, 'm_Material')
  i652.m_Maskable = !!i653[87]
  i652.m_Color = new pc.Color(i653[88], i653[89], i653[90], i653[91])
  i652.m_RaycastTarget = !!i653[92]
  i652.m_RaycastPadding = new pc.Vec4( i653[93], i653[94], i653[95], i653[96] )
  return i652
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i658 = root || request.c( 'TMPro.VertexGradient' )
  var i659 = data
  i658.topLeft = new pc.Color(i659[0], i659[1], i659[2], i659[3])
  i658.topRight = new pc.Color(i659[4], i659[5], i659[6], i659[7])
  i658.bottomLeft = new pc.Color(i659[8], i659[9], i659[10], i659[11])
  i658.bottomRight = new pc.Color(i659[12], i659[13], i659[14], i659[15])
  return i658
}

Deserializers["SubtitleAuto"] = function (request, data, root) {
  var i660 = root || request.c( 'SubtitleAuto' )
  var i661 = data
  i660.charsPerSecond = i661[0]
  i660.loop = !!i661[1]
  var i663 = i661[2]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('SubtitleAuto+Line', i663[i + 0]) );
  }
  i660.lines = i662
  request.r(i661[3], i661[4], 0, i660, 'scroll')
  request.r(i661[5], i661[6], 0, i660, 'externalScrollbar')
  i660.scrollMotion = i661[7]
  i660.scrollSnapTime = i661[8]
  i660.scrollSpeed = i661[9]
  i660.linesPerStep = i661[10]
  i660.topSafeMargin = i661[11]
  i660.startAutoScrollAtLine = i661[12]
  i660.manualScroll = !!i661[13]
  i660.manualScrollValue = i661[14]
  return i660
}

Deserializers["SubtitleAuto+Line"] = function (request, data, root) {
  var i666 = root || request.c( 'SubtitleAuto+Line' )
  var i667 = data
  i666.text = i667[0]
  i666.holdSeconds = i667[1]
  return i666
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'm_HandleRect')
  i668.m_Direction = i669[2]
  i668.m_Value = i669[3]
  i668.m_Size = i669[4]
  i668.m_NumberOfSteps = i669[5]
  i668.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i669[6], i668.m_OnValueChanged)
  i668.m_Navigation = request.d('UnityEngine.UI.Navigation', i669[7], i668.m_Navigation)
  i668.m_Transition = i669[8]
  i668.m_Colors = request.d('UnityEngine.UI.ColorBlock', i669[9], i668.m_Colors)
  i668.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i669[10], i668.m_SpriteState)
  i668.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i669[11], i668.m_AnimationTriggers)
  i668.m_Interactable = !!i669[12]
  request.r(i669[13], i669[14], 0, i668, 'm_TargetGraphic')
  return i668
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i671 = data
  i670.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i671[0], i670.m_PersistentCalls)
  return i670
}

Deserializers["DragToResizeLeft"] = function (request, data, root) {
  var i672 = root || request.c( 'DragToResizeLeft' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'target')
  i672.minWidth = i673[2]
  return i672
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'm_FirstSelected')
  i674.m_sendNavigationEvents = !!i675[2]
  i674.m_DragThreshold = i675[3]
  return i674
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i677 = data
  i676.m_HorizontalAxis = i677[0]
  i676.m_VerticalAxis = i677[1]
  i676.m_SubmitButton = i677[2]
  i676.m_CancelButton = i677[3]
  i676.m_InputActionsPerSecond = i677[4]
  i676.m_RepeatDelay = i677[5]
  i676.m_ForceModuleActive = !!i677[6]
  i676.m_SendPointerHoverToParent = !!i677[7]
  return i676
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i678 = root || request.c( 'ButtonPulse' )
  var i679 = data
  i678.scaleAmount = i679[0]
  i678.pulseDuration = i679[1]
  return i678
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i680 = root || request.c( 'StartClickHandler' )
  var i681 = data
  return i680
}

Deserializers["GameManager"] = function (request, data, root) {
  var i682 = root || request.c( 'GameManager' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'endPanel')
  i682.end = !!i683[2]
  request.r(i683[3], i683[4], 0, i682, 'hand')
  request.r(i683[5], i683[6], 0, i682, 'hand2')
  i682.enableSound = !!i683[7]
  request.r(i683[8], i683[9], 0, i682, 'startClickHandler')
  i682.currentScore = i683[10]
  request.r(i683[11], i683[12], 0, i682, 'BodyToSummarize')
  request.r(i683[13], i683[14], 0, i682, 'SummarizedText')
  request.r(i683[15], i683[16], 0, i682, 'transcriptBtnBlue')
  request.r(i683[17], i683[18], 0, i682, 'transcriptBtn')
  request.r(i683[19], i683[20], 0, i682, 'summaryBtn')
  request.r(i683[21], i683[22], 0, i682, 'summaryBtnBlue')
  request.r(i683[23], i683[24], 0, i682, 'mainPanel')
  request.r(i683[25], i683[26], 0, i682, 'handle1')
  request.r(i683[27], i683[28], 0, i682, 'animator')
  request.r(i683[29], i683[30], 0, i682, 'maskA')
  request.r(i683[31], i683[32], 0, i682, 'filter')
  request.r(i683[33], i683[34], 0, i682, 'arrow')
  request.r(i683[35], i683[36], 0, i682, 'toTap')
  request.r(i683[37], i683[38], 0, i682, 'openingPanel')
  request.r(i683[39], i683[40], 0, i682, 'subTitle')
  request.r(i683[41], i683[42], 0, i682, 'scrollBarVertical')
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i685 = data
  i684.ambientIntensity = i685[0]
  i684.reflectionIntensity = i685[1]
  i684.ambientMode = i685[2]
  i684.ambientLight = new pc.Color(i685[3], i685[4], i685[5], i685[6])
  i684.ambientSkyColor = new pc.Color(i685[7], i685[8], i685[9], i685[10])
  i684.ambientGroundColor = new pc.Color(i685[11], i685[12], i685[13], i685[14])
  i684.ambientEquatorColor = new pc.Color(i685[15], i685[16], i685[17], i685[18])
  i684.fogColor = new pc.Color(i685[19], i685[20], i685[21], i685[22])
  i684.fogEndDistance = i685[23]
  i684.fogStartDistance = i685[24]
  i684.fogDensity = i685[25]
  i684.fog = !!i685[26]
  request.r(i685[27], i685[28], 0, i684, 'skybox')
  i684.fogMode = i685[29]
  var i687 = i685[30]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i687[i + 0]) );
  }
  i684.lightmaps = i686
  i684.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i685[31], i684.lightProbes)
  i684.lightmapsMode = i685[32]
  i684.mixedBakeMode = i685[33]
  i684.environmentLightingMode = i685[34]
  i684.ambientProbe = new pc.SphericalHarmonicsL2(i685[35])
  i684.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i685[36])
  i684.useReferenceAmbientProbe = !!i685[37]
  request.r(i685[38], i685[39], 0, i684, 'customReflection')
  request.r(i685[40], i685[41], 0, i684, 'defaultReflection')
  i684.defaultReflectionMode = i685[42]
  i684.defaultReflectionResolution = i685[43]
  i684.sunLightObjectId = i685[44]
  i684.pixelLightCount = i685[45]
  i684.defaultReflectionHDR = !!i685[46]
  i684.hasLightDataAsset = !!i685[47]
  i684.hasManualGenerate = !!i685[48]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'lightmapColor')
  request.r(i691[2], i691[3], 0, i690, 'lightmapDirection')
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i692 = root || new UnityEngine.LightProbes()
  var i693 = data
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i701 = data
  var i703 = i701[0]
  var i702 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i703.length; i += 1) {
    i702.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i703[i + 0]));
  }
  i700.ShaderCompilationErrors = i702
  i700.name = i701[1]
  i700.guid = i701[2]
  var i705 = i701[3]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( i705[i + 0] );
  }
  i700.shaderDefinedKeywords = i704
  var i707 = i701[4]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i707[i + 0]) );
  }
  i700.passes = i706
  var i709 = i701[5]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i709[i + 0]) );
  }
  i700.usePasses = i708
  var i711 = i701[6]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i711[i + 0]) );
  }
  i700.defaultParameterValues = i710
  request.r(i701[7], i701[8], 0, i700, 'unityFallbackShader')
  i700.readDepth = !!i701[9]
  i700.isCreatedByShaderGraph = !!i701[10]
  i700.compiled = !!i701[11]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i715 = data
  i714.shaderName = i715[0]
  i714.errorMessage = i715[1]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i720 = root || new pc.UnityShaderPass()
  var i721 = data
  i720.id = i721[0]
  i720.subShaderIndex = i721[1]
  i720.name = i721[2]
  i720.passType = i721[3]
  i720.grabPassTextureName = i721[4]
  i720.usePass = !!i721[5]
  i720.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[6], i720.zTest)
  i720.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[7], i720.zWrite)
  i720.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[8], i720.culling)
  i720.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i721[9], i720.blending)
  i720.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i721[10], i720.alphaBlending)
  i720.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[11], i720.colorWriteMask)
  i720.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[12], i720.offsetUnits)
  i720.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[13], i720.offsetFactor)
  i720.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[14], i720.stencilRef)
  i720.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[15], i720.stencilReadMask)
  i720.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[16], i720.stencilWriteMask)
  i720.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i721[17], i720.stencilOp)
  i720.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i721[18], i720.stencilOpFront)
  i720.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i721[19], i720.stencilOpBack)
  var i723 = i721[20]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i723[i + 0]) );
  }
  i720.tags = i722
  var i725 = i721[21]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( i725[i + 0] );
  }
  i720.passDefinedKeywords = i724
  var i727 = i721[22]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i727[i + 0]) );
  }
  i720.passDefinedKeywordGroups = i726
  var i729 = i721[23]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i729[i + 0]) );
  }
  i720.variants = i728
  var i731 = i721[24]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i731[i + 0]) );
  }
  i720.excludedVariants = i730
  i720.hasDepthReader = !!i721[25]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i733 = data
  i732.val = i733[0]
  i732.name = i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i735 = data
  i734.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[0], i734.src)
  i734.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[1], i734.dst)
  i734.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[2], i734.op)
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i737 = data
  i736.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[0], i736.pass)
  i736.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[1], i736.fail)
  i736.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[2], i736.zFail)
  i736.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[3], i736.comp)
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i741 = data
  i740.name = i741[0]
  i740.value = i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i745 = data
  var i747 = i745[0]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( i747[i + 0] );
  }
  i744.keywords = i746
  i744.hasDiscard = !!i745[1]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i751 = data
  i750.passId = i751[0]
  i750.subShaderIndex = i751[1]
  var i753 = i751[2]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( i753[i + 0] );
  }
  i750.keywords = i752
  i750.vertexProgram = i751[3]
  i750.fragmentProgram = i751[4]
  i750.exportedForWebGl2 = !!i751[5]
  i750.readDepth = !!i751[6]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'shader')
  i756.pass = i757[2]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i761 = data
  i760.name = i761[0]
  i760.type = i761[1]
  i760.value = new pc.Vec4( i761[2], i761[3], i761[4], i761[5] )
  i760.textureValue = i761[6]
  i760.shaderPropertyFlag = i761[7]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i763 = data
  i762.name = i763[0]
  request.r(i763[1], i763[2], 0, i762, 'texture')
  i762.aabb = i763[3]
  i762.vertices = i763[4]
  i762.triangles = i763[5]
  i762.textureRect = UnityEngine.Rect.MinMaxRect(i763[6], i763[7], i763[8], i763[9])
  i762.packedRect = UnityEngine.Rect.MinMaxRect(i763[10], i763[11], i763[12], i763[13])
  i762.border = new pc.Vec4( i763[14], i763[15], i763[16], i763[17] )
  i762.transparency = i763[18]
  i762.bounds = i763[19]
  i762.pixelsPerUnit = i763[20]
  i762.textureWidth = i763[21]
  i762.textureHeight = i763[22]
  i762.nativeSize = new pc.Vec2( i763[23], i763[24] )
  i762.pivot = new pc.Vec2( i763[25], i763[26] )
  i762.textureRectOffset = new pc.Vec2( i763[27], i763[28] )
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i765 = data
  i764.name = i765[0]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i767 = data
  i766.name = i767[0]
  i766.wrapMode = i767[1]
  i766.isLooping = !!i767[2]
  i766.length = i767[3]
  var i769 = i767[4]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i769[i + 0]) );
  }
  i766.curves = i768
  var i771 = i767[5]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i771[i + 0]) );
  }
  i766.events = i770
  i766.halfPrecision = !!i767[6]
  i766._frameRate = i767[7]
  i766.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i767[8], i766.localBounds)
  i766.hasMuscleCurves = !!i767[9]
  var i773 = i767[10]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( i773[i + 0] );
  }
  i766.clipMuscleConstant = i772
  i766.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i767[11], i766.clipBindingConstant)
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i777 = data
  i776.path = i777[0]
  i776.hash = i777[1]
  i776.componentType = i777[2]
  i776.property = i777[3]
  i776.keys = i777[4]
  var i779 = i777[5]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i779[i + 0]) );
  }
  i776.objectReferenceKeys = i778
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i783 = data
  i782.time = i783[0]
  request.r(i783[1], i783[2], 0, i782, 'value')
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i787 = data
  i786.functionName = i787[0]
  i786.floatParameter = i787[1]
  i786.intParameter = i787[2]
  i786.stringParameter = i787[3]
  request.r(i787[4], i787[5], 0, i786, 'objectReferenceParameter')
  i786.time = i787[6]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i789 = data
  i788.center = new pc.Vec3( i789[0], i789[1], i789[2] )
  i788.extends = new pc.Vec3( i789[3], i789[4], i789[5] )
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i793 = data
  var i795 = i793[0]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( i795[i + 0] );
  }
  i792.genericBindings = i794
  var i797 = i793[1]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( i797[i + 0] );
  }
  i792.pptrCurveMapping = i796
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i799 = data
  i798.name = i799[0]
  i798.ascent = i799[1]
  i798.originalLineHeight = i799[2]
  i798.fontSize = i799[3]
  var i801 = i799[4]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i801[i + 0]) );
  }
  i798.characterInfo = i800
  request.r(i799[5], i799[6], 0, i798, 'texture')
  i798.originalFontSize = i799[7]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i805 = data
  i804.index = i805[0]
  i804.advance = i805[1]
  i804.bearing = i805[2]
  i804.glyphWidth = i805[3]
  i804.glyphHeight = i805[4]
  i804.minX = i805[5]
  i804.maxX = i805[6]
  i804.minY = i805[7]
  i804.maxY = i805[8]
  i804.uvBottomLeftX = i805[9]
  i804.uvBottomLeftY = i805[10]
  i804.uvBottomRightX = i805[11]
  i804.uvBottomRightY = i805[12]
  i804.uvTopLeftX = i805[13]
  i804.uvTopLeftY = i805[14]
  i804.uvTopRightX = i805[15]
  i804.uvTopRightY = i805[16]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i807 = data
  i806.name = i807[0]
  var i809 = i807[1]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i809[i + 0]) );
  }
  i806.layers = i808
  var i811 = i807[2]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i811[i + 0]) );
  }
  i806.parameters = i810
  i806.animationClips = i807[3]
  i806.avatarUnsupported = i807[4]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i815 = data
  i814.name = i815[0]
  i814.defaultWeight = i815[1]
  i814.blendingMode = i815[2]
  i814.avatarMask = i815[3]
  i814.syncedLayerIndex = i815[4]
  i814.syncedLayerAffectsTiming = !!i815[5]
  i814.syncedLayers = i815[6]
  i814.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i815[7], i814.stateMachine)
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i817 = data
  i816.id = i817[0]
  i816.name = i817[1]
  i816.path = i817[2]
  var i819 = i817[3]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i819[i + 0]) );
  }
  i816.states = i818
  var i821 = i817[4]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i821[i + 0]) );
  }
  i816.machines = i820
  var i823 = i817[5]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i823[i + 0]) );
  }
  i816.entryStateTransitions = i822
  var i825 = i817[6]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i825[i + 0]) );
  }
  i816.exitStateTransitions = i824
  var i827 = i817[7]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i827[i + 0]) );
  }
  i816.anyStateTransitions = i826
  i816.defaultStateId = i817[8]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i831 = data
  i830.id = i831[0]
  i830.name = i831[1]
  i830.cycleOffset = i831[2]
  i830.cycleOffsetParameter = i831[3]
  i830.cycleOffsetParameterActive = !!i831[4]
  i830.mirror = !!i831[5]
  i830.mirrorParameter = i831[6]
  i830.mirrorParameterActive = !!i831[7]
  i830.motionId = i831[8]
  i830.nameHash = i831[9]
  i830.fullPathHash = i831[10]
  i830.speed = i831[11]
  i830.speedParameter = i831[12]
  i830.speedParameterActive = !!i831[13]
  i830.tag = i831[14]
  i830.tagHash = i831[15]
  i830.writeDefaultValues = !!i831[16]
  var i833 = i831[17]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i830.behaviours = i832
  var i835 = i831[18]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i835[i + 0]) );
  }
  i830.transitions = i834
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i841 = data
  i840.fullPath = i841[0]
  i840.canTransitionToSelf = !!i841[1]
  i840.duration = i841[2]
  i840.exitTime = i841[3]
  i840.hasExitTime = !!i841[4]
  i840.hasFixedDuration = !!i841[5]
  i840.interruptionSource = i841[6]
  i840.offset = i841[7]
  i840.orderedInterruption = !!i841[8]
  i840.destinationStateId = i841[9]
  i840.isExit = !!i841[10]
  i840.mute = !!i841[11]
  i840.solo = !!i841[12]
  var i843 = i841[13]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i843[i + 0]) );
  }
  i840.conditions = i842
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i849 = data
  i848.destinationStateId = i849[0]
  i848.isExit = !!i849[1]
  i848.mute = !!i849[2]
  i848.solo = !!i849[3]
  var i851 = i849[4]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i851[i + 0]) );
  }
  i848.conditions = i850
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i855 = data
  i854.defaultBool = !!i855[0]
  i854.defaultFloat = i855[1]
  i854.defaultInt = i855[2]
  i854.name = i855[3]
  i854.nameHash = i855[4]
  i854.type = i855[5]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i859 = data
  i858.mode = i859[0]
  i858.parameter = i859[1]
  i858.threshold = i859[2]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i861 = data
  i860.name = i861[0]
  i860.bytes64 = i861[1]
  i860.data = i861[2]
  return i860
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i862 = root || request.c( 'AudioLibrary' )
  var i863 = data
  var i865 = i863[0]
  var i864 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i865.length; i += 1) {
    i864.add(request.d('AudioLibrary+ClipEntry', i865[i + 0]));
  }
  i862.clips = i864
  return i862
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i868 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i869 = data
  i868.key = i869[0]
  i868.channel = i869[1]
  request.r(i869[2], i869[3], 0, i868, 'clip')
  i868.volume = i869[4]
  i868.loop = !!i869[5]
  return i868
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i870 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i871 = data
  i870.hashCode = i871[0]
  request.r(i871[1], i871[2], 0, i870, 'material')
  i870.materialHashCode = i871[3]
  request.r(i871[4], i871[5], 0, i870, 'atlas')
  i870.normalStyle = i871[6]
  i870.normalSpacingOffset = i871[7]
  i870.boldStyle = i871[8]
  i870.boldSpacing = i871[9]
  i870.italicStyle = i871[10]
  i870.tabSize = i871[11]
  i870.m_Version = i871[12]
  i870.m_SourceFontFileGUID = i871[13]
  request.r(i871[14], i871[15], 0, i870, 'm_SourceFontFile_EditorRef')
  request.r(i871[16], i871[17], 0, i870, 'm_SourceFontFile')
  i870.m_AtlasPopulationMode = i871[18]
  i870.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i871[19], i870.m_FaceInfo)
  var i873 = i871[20]
  var i872 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i873.length; i += 1) {
    i872.add(request.d('UnityEngine.TextCore.Glyph', i873[i + 0]));
  }
  i870.m_GlyphTable = i872
  var i875 = i871[21]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i875.length; i += 1) {
    i874.add(request.d('TMPro.TMP_Character', i875[i + 0]));
  }
  i870.m_CharacterTable = i874
  var i877 = i871[22]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i870.m_AtlasTextures = i876
  i870.m_AtlasTextureIndex = i871[23]
  i870.m_IsMultiAtlasTexturesEnabled = !!i871[24]
  i870.m_ClearDynamicDataOnBuild = !!i871[25]
  var i879 = i871[26]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i879.length; i += 1) {
    i878.add(request.d('UnityEngine.TextCore.GlyphRect', i879[i + 0]));
  }
  i870.m_UsedGlyphRects = i878
  var i881 = i871[27]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(request.d('UnityEngine.TextCore.GlyphRect', i881[i + 0]));
  }
  i870.m_FreeGlyphRects = i880
  i870.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i871[28], i870.m_fontInfo)
  i870.m_AtlasWidth = i871[29]
  i870.m_AtlasHeight = i871[30]
  i870.m_AtlasPadding = i871[31]
  i870.m_AtlasRenderMode = i871[32]
  var i883 = i871[33]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i883.length; i += 1) {
    i882.add(request.d('TMPro.TMP_Glyph', i883[i + 0]));
  }
  i870.m_glyphInfoList = i882
  i870.m_KerningTable = request.d('TMPro.KerningTable', i871[34], i870.m_KerningTable)
  i870.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i871[35], i870.m_FontFeatureTable)
  var i885 = i871[36]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 1, i884, '')
  }
  i870.fallbackFontAssets = i884
  var i887 = i871[37]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 1, i886, '')
  }
  i870.m_FallbackFontAssetTable = i886
  i870.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i871[38], i870.m_CreationSettings)
  var i889 = i871[39]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('TMPro.TMP_FontWeightPair', i889[i + 0]) );
  }
  i870.m_FontWeightTable = i888
  var i891 = i871[40]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('TMPro.TMP_FontWeightPair', i891[i + 0]) );
  }
  i870.fontWeights = i890
  return i870
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i893 = data
  i892.m_FaceIndex = i893[0]
  i892.m_FamilyName = i893[1]
  i892.m_StyleName = i893[2]
  i892.m_PointSize = i893[3]
  i892.m_Scale = i893[4]
  i892.m_UnitsPerEM = i893[5]
  i892.m_LineHeight = i893[6]
  i892.m_AscentLine = i893[7]
  i892.m_CapLine = i893[8]
  i892.m_MeanLine = i893[9]
  i892.m_Baseline = i893[10]
  i892.m_DescentLine = i893[11]
  i892.m_SuperscriptOffset = i893[12]
  i892.m_SuperscriptSize = i893[13]
  i892.m_SubscriptOffset = i893[14]
  i892.m_SubscriptSize = i893[15]
  i892.m_UnderlineOffset = i893[16]
  i892.m_UnderlineThickness = i893[17]
  i892.m_StrikethroughOffset = i893[18]
  i892.m_StrikethroughThickness = i893[19]
  i892.m_TabWidth = i893[20]
  return i892
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i897 = data
  i896.m_Index = i897[0]
  i896.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i897[1], i896.m_Metrics)
  i896.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i897[2], i896.m_GlyphRect)
  i896.m_Scale = i897[3]
  i896.m_AtlasIndex = i897[4]
  i896.m_ClassDefinitionType = i897[5]
  return i896
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i899 = data
  i898.m_Width = i899[0]
  i898.m_Height = i899[1]
  i898.m_HorizontalBearingX = i899[2]
  i898.m_HorizontalBearingY = i899[3]
  i898.m_HorizontalAdvance = i899[4]
  return i898
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i901 = data
  i900.m_X = i901[0]
  i900.m_Y = i901[1]
  i900.m_Width = i901[2]
  i900.m_Height = i901[3]
  return i900
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i904 = root || request.c( 'TMPro.TMP_Character' )
  var i905 = data
  i904.m_ElementType = i905[0]
  i904.m_Unicode = i905[1]
  i904.m_GlyphIndex = i905[2]
  i904.m_Scale = i905[3]
  return i904
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i910 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i911 = data
  i910.Name = i911[0]
  i910.PointSize = i911[1]
  i910.Scale = i911[2]
  i910.CharacterCount = i911[3]
  i910.LineHeight = i911[4]
  i910.Baseline = i911[5]
  i910.Ascender = i911[6]
  i910.CapHeight = i911[7]
  i910.Descender = i911[8]
  i910.CenterLine = i911[9]
  i910.SuperscriptOffset = i911[10]
  i910.SubscriptOffset = i911[11]
  i910.SubSize = i911[12]
  i910.Underline = i911[13]
  i910.UnderlineThickness = i911[14]
  i910.strikethrough = i911[15]
  i910.strikethroughThickness = i911[16]
  i910.TabWidth = i911[17]
  i910.Padding = i911[18]
  i910.AtlasWidth = i911[19]
  i910.AtlasHeight = i911[20]
  return i910
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i914 = root || request.c( 'TMPro.TMP_Glyph' )
  var i915 = data
  i914.id = i915[0]
  i914.x = i915[1]
  i914.y = i915[2]
  i914.width = i915[3]
  i914.height = i915[4]
  i914.xOffset = i915[5]
  i914.yOffset = i915[6]
  i914.xAdvance = i915[7]
  i914.scale = i915[8]
  return i914
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i916 = root || request.c( 'TMPro.KerningTable' )
  var i917 = data
  var i919 = i917[0]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i919.length; i += 1) {
    i918.add(request.d('TMPro.KerningPair', i919[i + 0]));
  }
  i916.kerningPairs = i918
  return i916
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i922 = root || request.c( 'TMPro.KerningPair' )
  var i923 = data
  i922.xOffset = i923[0]
  i922.m_FirstGlyph = i923[1]
  i922.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i923[2], i922.m_FirstGlyphAdjustments)
  i922.m_SecondGlyph = i923[3]
  i922.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i923[4], i922.m_SecondGlyphAdjustments)
  i922.m_IgnoreSpacingAdjustments = !!i923[5]
  return i922
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i924 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i925 = data
  var i927 = i925[0]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i927.length; i += 1) {
    i926.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i927[i + 0]));
  }
  i924.m_GlyphPairAdjustmentRecords = i926
  return i924
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i930 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i931 = data
  i930.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i931[0], i930.m_FirstAdjustmentRecord)
  i930.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i931[1], i930.m_SecondAdjustmentRecord)
  i930.m_FeatureLookupFlags = i931[2]
  return i930
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i935 = data
  i934.sourceFontFileName = i935[0]
  i934.sourceFontFileGUID = i935[1]
  i934.pointSizeSamplingMode = i935[2]
  i934.pointSize = i935[3]
  i934.padding = i935[4]
  i934.packingMode = i935[5]
  i934.atlasWidth = i935[6]
  i934.atlasHeight = i935[7]
  i934.characterSetSelectionMode = i935[8]
  i934.characterSequence = i935[9]
  i934.referencedFontAssetGUID = i935[10]
  i934.referencedTextAssetGUID = i935[11]
  i934.fontStyle = i935[12]
  i934.fontStyleModifier = i935[13]
  i934.renderMode = i935[14]
  i934.includeFontFeatures = !!i935[15]
  return i934
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'regularTypeface')
  request.r(i939[2], i939[3], 0, i938, 'italicTypeface')
  return i938
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i940 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i941 = data
  i940.useSafeMode = !!i941[0]
  i940.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i941[1], i940.safeModeOptions)
  i940.timeScale = i941[2]
  i940.unscaledTimeScale = i941[3]
  i940.useSmoothDeltaTime = !!i941[4]
  i940.maxSmoothUnscaledTime = i941[5]
  i940.rewindCallbackMode = i941[6]
  i940.showUnityEditorReport = !!i941[7]
  i940.logBehaviour = i941[8]
  i940.drawGizmos = !!i941[9]
  i940.defaultRecyclable = !!i941[10]
  i940.defaultAutoPlay = i941[11]
  i940.defaultUpdateType = i941[12]
  i940.defaultTimeScaleIndependent = !!i941[13]
  i940.defaultEaseType = i941[14]
  i940.defaultEaseOvershootOrAmplitude = i941[15]
  i940.defaultEasePeriod = i941[16]
  i940.defaultAutoKill = !!i941[17]
  i940.defaultLoopType = i941[18]
  i940.debugMode = !!i941[19]
  i940.debugStoreTargetId = !!i941[20]
  i940.showPreviewPanel = !!i941[21]
  i940.storeSettingsLocation = i941[22]
  i940.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i941[23], i940.modules)
  i940.createASMDEF = !!i941[24]
  i940.showPlayingTweens = !!i941[25]
  i940.showPausedTweens = !!i941[26]
  return i940
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i942 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i943 = data
  i942.logBehaviour = i943[0]
  i942.nestedTweenFailureBehaviour = i943[1]
  return i942
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i944 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i945 = data
  i944.showPanel = !!i945[0]
  i944.audioEnabled = !!i945[1]
  i944.physicsEnabled = !!i945[2]
  i944.physics2DEnabled = !!i945[3]
  i944.spriteEnabled = !!i945[4]
  i944.uiEnabled = !!i945[5]
  i944.textMeshProEnabled = !!i945[6]
  i944.tk2DEnabled = !!i945[7]
  i944.deAudioEnabled = !!i945[8]
  i944.deUnityExtendedEnabled = !!i945[9]
  i944.epoOutlineEnabled = !!i945[10]
  return i944
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.TMP_Settings' )
  var i947 = data
  i946.m_enableWordWrapping = !!i947[0]
  i946.m_enableKerning = !!i947[1]
  i946.m_enableExtraPadding = !!i947[2]
  i946.m_enableTintAllSprites = !!i947[3]
  i946.m_enableParseEscapeCharacters = !!i947[4]
  i946.m_EnableRaycastTarget = !!i947[5]
  i946.m_GetFontFeaturesAtRuntime = !!i947[6]
  i946.m_missingGlyphCharacter = i947[7]
  i946.m_warningsDisabled = !!i947[8]
  request.r(i947[9], i947[10], 0, i946, 'm_defaultFontAsset')
  i946.m_defaultFontAssetPath = i947[11]
  i946.m_defaultFontSize = i947[12]
  i946.m_defaultAutoSizeMinRatio = i947[13]
  i946.m_defaultAutoSizeMaxRatio = i947[14]
  i946.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i947[15], i947[16] )
  i946.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i947[17], i947[18] )
  i946.m_autoSizeTextContainer = !!i947[19]
  i946.m_IsTextObjectScaleStatic = !!i947[20]
  var i949 = i947[21]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 1, i948, '')
  }
  i946.m_fallbackFontAssets = i948
  i946.m_matchMaterialPreset = !!i947[22]
  request.r(i947[23], i947[24], 0, i946, 'm_defaultSpriteAsset')
  i946.m_defaultSpriteAssetPath = i947[25]
  i946.m_enableEmojiSupport = !!i947[26]
  i946.m_MissingCharacterSpriteUnicode = i947[27]
  i946.m_defaultColorGradientPresetsPath = i947[28]
  request.r(i947[29], i947[30], 0, i946, 'm_defaultStyleSheet')
  i946.m_StyleSheetsResourcePath = i947[31]
  request.r(i947[32], i947[33], 0, i946, 'm_leadingCharacters')
  request.r(i947[34], i947[35], 0, i946, 'm_followingCharacters')
  i946.m_UseModernHangulLineBreakingRules = !!i947[36]
  return i946
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i950 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i951 = data
  i950.hashCode = i951[0]
  request.r(i951[1], i951[2], 0, i950, 'material')
  i950.materialHashCode = i951[3]
  request.r(i951[4], i951[5], 0, i950, 'spriteSheet')
  var i953 = i951[6]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i953.length; i += 1) {
    i952.add(request.d('TMPro.TMP_Sprite', i953[i + 0]));
  }
  i950.spriteInfoList = i952
  var i955 = i951[7]
  var i954 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 1, i954, '')
  }
  i950.fallbackSpriteAssets = i954
  i950.m_Version = i951[8]
  i950.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i951[9], i950.m_FaceInfo)
  var i957 = i951[10]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i957.length; i += 1) {
    i956.add(request.d('TMPro.TMP_SpriteCharacter', i957[i + 0]));
  }
  i950.m_SpriteCharacterTable = i956
  var i959 = i951[11]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i959.length; i += 1) {
    i958.add(request.d('TMPro.TMP_SpriteGlyph', i959[i + 0]));
  }
  i950.m_SpriteGlyphTable = i958
  return i950
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i962 = root || request.c( 'TMPro.TMP_Sprite' )
  var i963 = data
  i962.name = i963[0]
  i962.hashCode = i963[1]
  i962.unicode = i963[2]
  i962.pivot = new pc.Vec2( i963[3], i963[4] )
  request.r(i963[5], i963[6], 0, i962, 'sprite')
  i962.id = i963[7]
  i962.x = i963[8]
  i962.y = i963[9]
  i962.width = i963[10]
  i962.height = i963[11]
  i962.xOffset = i963[12]
  i962.yOffset = i963[13]
  i962.xAdvance = i963[14]
  i962.scale = i963[15]
  return i962
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i969 = data
  i968.m_Name = i969[0]
  i968.m_HashCode = i969[1]
  i968.m_ElementType = i969[2]
  i968.m_Unicode = i969[3]
  i968.m_GlyphIndex = i969[4]
  i968.m_Scale = i969[5]
  return i968
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i972 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'sprite')
  i972.m_Index = i973[2]
  i972.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i973[3], i972.m_Metrics)
  i972.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i973[4], i972.m_GlyphRect)
  i972.m_Scale = i973[5]
  i972.m_AtlasIndex = i973[6]
  i972.m_ClassDefinitionType = i973[7]
  return i972
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i974 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i975 = data
  var i977 = i975[0]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i977.length; i += 1) {
    i976.add(request.d('TMPro.TMP_Style', i977[i + 0]));
  }
  i974.m_StyleList = i976
  return i974
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i980 = root || request.c( 'TMPro.TMP_Style' )
  var i981 = data
  i980.m_Name = i981[0]
  i980.m_HashCode = i981[1]
  i980.m_OpeningDefinition = i981[2]
  i980.m_ClosingDefinition = i981[3]
  i980.m_OpeningTagArray = i981[4]
  i980.m_ClosingTagArray = i981[5]
  i980.m_OpeningTagUnicodeArray = i981[6]
  i980.m_ClosingTagUnicodeArray = i981[7]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i983 = data
  var i985 = i983[0]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i985[i + 0]) );
  }
  i982.files = i984
  i982.componentToPrefabIds = i983[1]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i989 = data
  i988.path = i989[0]
  request.r(i989[1], i989[2], 0, i988, 'unityObject')
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i991 = data
  var i993 = i991[0]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i993[i + 0]) );
  }
  i990.scriptsExecutionOrder = i992
  var i995 = i991[1]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i995[i + 0]) );
  }
  i990.sortingLayers = i994
  var i997 = i991[2]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i997[i + 0]) );
  }
  i990.cullingLayers = i996
  i990.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i991[3], i990.timeSettings)
  i990.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i991[4], i990.physicsSettings)
  i990.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i991[5], i990.physics2DSettings)
  i990.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i991[6], i990.qualitySettings)
  i990.enableRealtimeShadows = !!i991[7]
  i990.enableAutoInstancing = !!i991[8]
  i990.enableDynamicBatching = !!i991[9]
  i990.lightmapEncodingQuality = i991[10]
  i990.desiredColorSpace = i991[11]
  var i999 = i991[12]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( i999[i + 0] );
  }
  i990.allTags = i998
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1003 = data
  i1002.name = i1003[0]
  i1002.value = i1003[1]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1007 = data
  i1006.id = i1007[0]
  i1006.name = i1007[1]
  i1006.value = i1007[2]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1011 = data
  i1010.id = i1011[0]
  i1010.name = i1011[1]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1013 = data
  i1012.fixedDeltaTime = i1013[0]
  i1012.maximumDeltaTime = i1013[1]
  i1012.timeScale = i1013[2]
  i1012.maximumParticleTimestep = i1013[3]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1015 = data
  i1014.gravity = new pc.Vec3( i1015[0], i1015[1], i1015[2] )
  i1014.defaultSolverIterations = i1015[3]
  i1014.bounceThreshold = i1015[4]
  i1014.autoSyncTransforms = !!i1015[5]
  i1014.autoSimulation = !!i1015[6]
  var i1017 = i1015[7]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1017[i + 0]) );
  }
  i1014.collisionMatrix = i1016
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1021 = data
  i1020.enabled = !!i1021[0]
  i1020.layerId = i1021[1]
  i1020.otherLayerId = i1021[2]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'material')
  i1022.gravity = new pc.Vec2( i1023[2], i1023[3] )
  i1022.positionIterations = i1023[4]
  i1022.velocityIterations = i1023[5]
  i1022.velocityThreshold = i1023[6]
  i1022.maxLinearCorrection = i1023[7]
  i1022.maxAngularCorrection = i1023[8]
  i1022.maxTranslationSpeed = i1023[9]
  i1022.maxRotationSpeed = i1023[10]
  i1022.baumgarteScale = i1023[11]
  i1022.baumgarteTOIScale = i1023[12]
  i1022.timeToSleep = i1023[13]
  i1022.linearSleepTolerance = i1023[14]
  i1022.angularSleepTolerance = i1023[15]
  i1022.defaultContactOffset = i1023[16]
  i1022.autoSimulation = !!i1023[17]
  i1022.queriesHitTriggers = !!i1023[18]
  i1022.queriesStartInColliders = !!i1023[19]
  i1022.callbacksOnDisable = !!i1023[20]
  i1022.reuseCollisionCallbacks = !!i1023[21]
  i1022.autoSyncTransforms = !!i1023[22]
  var i1025 = i1023[23]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1025[i + 0]) );
  }
  i1022.collisionMatrix = i1024
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1029 = data
  i1028.enabled = !!i1029[0]
  i1028.layerId = i1029[1]
  i1028.otherLayerId = i1029[2]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1031 = data
  var i1033 = i1031[0]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1033[i + 0]) );
  }
  i1030.qualityLevels = i1032
  var i1035 = i1031[1]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( i1035[i + 0] );
  }
  i1030.names = i1034
  i1030.shadows = i1031[2]
  i1030.anisotropicFiltering = i1031[3]
  i1030.antiAliasing = i1031[4]
  i1030.lodBias = i1031[5]
  i1030.shadowCascades = i1031[6]
  i1030.shadowDistance = i1031[7]
  i1030.shadowmaskMode = i1031[8]
  i1030.shadowProjection = i1031[9]
  i1030.shadowResolution = i1031[10]
  i1030.softParticles = !!i1031[11]
  i1030.softVegetation = !!i1031[12]
  i1030.activeColorSpace = i1031[13]
  i1030.desiredColorSpace = i1031[14]
  i1030.masterTextureLimit = i1031[15]
  i1030.maxQueuedFrames = i1031[16]
  i1030.particleRaycastBudget = i1031[17]
  i1030.pixelLightCount = i1031[18]
  i1030.realtimeReflectionProbes = !!i1031[19]
  i1030.shadowCascade2Split = i1031[20]
  i1030.shadowCascade4Split = new pc.Vec3( i1031[21], i1031[22], i1031[23] )
  i1030.streamingMipmapsActive = !!i1031[24]
  i1030.vSyncCount = i1031[25]
  i1030.asyncUploadBufferSize = i1031[26]
  i1030.asyncUploadTimeSlice = i1031[27]
  i1030.billboardsFaceCameraPosition = !!i1031[28]
  i1030.shadowNearPlaneOffset = i1031[29]
  i1030.streamingMipmapsMemoryBudget = i1031[30]
  i1030.maximumLODLevel = i1031[31]
  i1030.streamingMipmapsAddAllCameras = !!i1031[32]
  i1030.streamingMipmapsMaxLevelReduction = i1031[33]
  i1030.streamingMipmapsRenderersPerFrame = i1031[34]
  i1030.resolutionScalingFixedDPIFactor = i1031[35]
  i1030.streamingMipmapsMaxFileIORequests = i1031[36]
  i1030.currentQualityLevel = i1031[37]
  return i1030
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1039 = data
  i1038.xPlacement = i1039[0]
  i1038.yPlacement = i1039[1]
  i1038.xAdvance = i1039[2]
  i1038.yAdvance = i1039[3]
  return i1038
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1040 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1041 = data
  i1040.m_GlyphIndex = i1041[0]
  i1040.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1041[1], i1040.m_GlyphValueRecord)
  return i1040
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1042 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1043 = data
  i1042.m_XPlacement = i1043[0]
  i1042.m_YPlacement = i1043[1]
  i1042.m_XAdvance = i1043[2]
  i1042.m_YAdvance = i1043[3]
  return i1042
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[3],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[3],"80":[81],"82":[83],"84":[83],"14":[13],"6":[3],"34":[13],"85":[58],"33":[86],"87":[13],"88":[7],"89":[13],"90":[13],"17":[14],"19":[18,13],"91":[13],"16":[14],"92":[13],"93":[13],"26":[13],"94":[13],"95":[13],"96":[13],"97":[13],"27":[13],"98":[13],"99":[18,13],"30":[13],"29":[13],"28":[13],"100":[13],"101":[18,13],"102":[13],"103":[35],"104":[35],"36":[35],"105":[35],"106":[3],"107":[3],"108":[109],"110":[3],"111":[13],"112":[81,13],"31":[13,18],"113":[13],"114":[18,13],"115":[81],"116":[18,13],"86":[13]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAspectFitter","UnityEngine.SpriteRenderer","AudioManager","AudioLibrary","TaskManager","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.CanvasGroup","CanvasGroupAnimator","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Button","GameManager","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.RectMask2D","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","SubtitleAuto","DragToResizeLeft","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ButtonPulse","StartClickHandler","UnityEngine.GameObject","UnityEngine.AudioClip","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bullet","TMPro.TMP_Text","UIHorizontalDraggable","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "core2d";

Deserializers.lunaInitializationTime = "08/14/2025 11:33:59";

Deserializers.lunaDaysRunning = "14.0";

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

Deserializers.buildID = "64c564a9-54ce-47e8-a171-5ade9a04b704";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


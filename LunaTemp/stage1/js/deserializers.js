var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointSpring' )
  var i497 = data
  i496.spring = i497[0]
  i496.damper = i497[1]
  i496.targetPosition = i497[2]
  return i496
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointMotor' )
  var i499 = data
  i498.m_TargetVelocity = i499[0]
  i498.m_Force = i499[1]
  i498.m_FreeSpin = i499[2]
  return i498
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointLimits' )
  var i501 = data
  i500.m_Min = i501[0]
  i500.m_Max = i501[1]
  i500.m_Bounciness = i501[2]
  i500.m_BounceMinVelocity = i501[3]
  i500.m_ContactDistance = i501[4]
  i500.minBounce = i501[5]
  i500.maxBounce = i501[6]
  return i500
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointDrive' )
  var i503 = data
  i502.m_PositionSpring = i503[0]
  i502.m_PositionDamper = i503[1]
  i502.m_MaximumForce = i503[2]
  i502.m_UseAcceleration = i503[3]
  return i502
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i505 = data
  i504.m_Spring = i505[0]
  i504.m_Damper = i505[1]
  return i504
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i507 = data
  i506.m_Limit = i507[0]
  i506.m_Bounciness = i507[1]
  i506.m_ContactDistance = i507[2]
  return i506
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i509 = data
  i508.m_ExtremumSlip = i509[0]
  i508.m_ExtremumValue = i509[1]
  i508.m_AsymptoteSlip = i509[2]
  i508.m_AsymptoteValue = i509[3]
  i508.m_Stiffness = i509[4]
  return i508
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i511 = data
  i510.m_LowerAngle = i511[0]
  i510.m_UpperAngle = i511[1]
  return i510
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i513 = data
  i512.m_MotorSpeed = i513[0]
  i512.m_MaximumMotorTorque = i513[1]
  return i512
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i515 = data
  i514.m_DampingRatio = i515[0]
  i514.m_Frequency = i515[1]
  i514.m_Angle = i515[2]
  return i514
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i517 = data
  i516.m_LowerTranslation = i517[0]
  i516.m_UpperTranslation = i517[1]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i518 = root || new pc.UnityMaterial()
  var i519 = data
  i518.name = i519[0]
  request.r(i519[1], i519[2], 0, i518, 'shader')
  i518.renderQueue = i519[3]
  i518.enableInstancing = !!i519[4]
  var i521 = i519[5]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i521[i + 0]) );
  }
  i518.floatParameters = i520
  var i523 = i519[6]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i523[i + 0]) );
  }
  i518.colorParameters = i522
  var i525 = i519[7]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i525[i + 0]) );
  }
  i518.vectorParameters = i524
  var i527 = i519[8]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i527[i + 0]) );
  }
  i518.textureParameters = i526
  var i529 = i519[9]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i529[i + 0]) );
  }
  i518.materialFlags = i528
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i533 = data
  i532.name = i533[0]
  i532.value = i533[1]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i537 = data
  i536.name = i537[0]
  i536.value = new pc.Color(i537[1], i537[2], i537[3], i537[4])
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i541 = data
  i540.name = i541[0]
  i540.value = new pc.Vec4( i541[1], i541[2], i541[3], i541[4] )
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i545 = data
  i544.name = i545[0]
  request.r(i545[1], i545[2], 0, i544, 'value')
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i549 = data
  i548.name = i549[0]
  i548.enabled = !!i549[1]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i551 = data
  i550.name = i551[0]
  i550.width = i551[1]
  i550.height = i551[2]
  i550.mipmapCount = i551[3]
  i550.anisoLevel = i551[4]
  i550.filterMode = i551[5]
  i550.hdr = !!i551[6]
  i550.format = i551[7]
  i550.wrapMode = i551[8]
  i550.alphaIsTransparency = !!i551[9]
  i550.alphaSource = i551[10]
  i550.graphicsFormat = i551[11]
  i550.sRGBTexture = !!i551[12]
  i550.desiredColorSpace = i551[13]
  i550.wrapU = i551[14]
  i550.wrapV = i551[15]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i553 = data
  i552.name = i553[0]
  i552.index = i553[1]
  i552.startup = !!i553[2]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i555 = data
  i554.position = new pc.Vec3( i555[0], i555[1], i555[2] )
  i554.scale = new pc.Vec3( i555[3], i555[4], i555[5] )
  i554.rotation = new pc.Quat(i555[6], i555[7], i555[8], i555[9])
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i557 = data
  i556.enabled = !!i557[0]
  i556.aspect = i557[1]
  i556.orthographic = !!i557[2]
  i556.orthographicSize = i557[3]
  i556.backgroundColor = new pc.Color(i557[4], i557[5], i557[6], i557[7])
  i556.nearClipPlane = i557[8]
  i556.farClipPlane = i557[9]
  i556.fieldOfView = i557[10]
  i556.depth = i557[11]
  i556.clearFlags = i557[12]
  i556.cullingMask = i557[13]
  i556.rect = i557[14]
  request.r(i557[15], i557[16], 0, i556, 'targetTexture')
  i556.usePhysicalProperties = !!i557[17]
  i556.focalLength = i557[18]
  i556.sensorSize = new pc.Vec2( i557[19], i557[20] )
  i556.lensShift = new pc.Vec2( i557[21], i557[22] )
  i556.gateFit = i557[23]
  i556.commandBufferCount = i557[24]
  i556.cameraType = i557[25]
  return i556
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i558 = root || request.c( 'CameraAspectFitter' )
  var i559 = data
  request.r(i559[0], i559[1], 0, i558, 'targetSprite')
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i561 = data
  i560.name = i561[0]
  i560.tagId = i561[1]
  i560.enabled = !!i561[2]
  i560.isStatic = !!i561[3]
  i560.layer = i561[4]
  return i560
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i562 = root || request.c( 'AudioManager' )
  var i563 = data
  request.r(i563[0], i563[1], 0, i562, 'library')
  i562.sfxPoolSize = i563[2]
  return i562
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i564 = root || request.c( 'TaskManager' )
  var i565 = data
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i567 = data
  i566.enabled = !!i567[0]
  request.r(i567[1], i567[2], 0, i566, 'sharedMaterial')
  var i569 = i567[3]
  var i568 = []
  for(var i = 0; i < i569.length; i += 2) {
  request.r(i569[i + 0], i569[i + 1], 2, i568, '')
  }
  i566.sharedMaterials = i568
  i566.receiveShadows = !!i567[4]
  i566.shadowCastingMode = i567[5]
  i566.sortingLayerID = i567[6]
  i566.sortingOrder = i567[7]
  i566.lightmapIndex = i567[8]
  i566.lightmapSceneIndex = i567[9]
  i566.lightmapScaleOffset = new pc.Vec4( i567[10], i567[11], i567[12], i567[13] )
  i566.lightProbeUsage = i567[14]
  i566.reflectionProbeUsage = i567[15]
  i566.color = new pc.Color(i567[16], i567[17], i567[18], i567[19])
  request.r(i567[20], i567[21], 0, i566, 'sprite')
  i566.flipX = !!i567[22]
  i566.flipY = !!i567[23]
  i566.drawMode = i567[24]
  i566.size = new pc.Vec2( i567[25], i567[26] )
  i566.tileMode = i567[27]
  i566.adaptiveModeThreshold = i567[28]
  i566.maskInteraction = i567[29]
  i566.spriteSortPoint = i567[30]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i573 = data
  i572.pivot = new pc.Vec2( i573[0], i573[1] )
  i572.anchorMin = new pc.Vec2( i573[2], i573[3] )
  i572.anchorMax = new pc.Vec2( i573[4], i573[5] )
  i572.sizeDelta = new pc.Vec2( i573[6], i573[7] )
  i572.anchoredPosition3D = new pc.Vec3( i573[8], i573[9], i573[10] )
  i572.rotation = new pc.Quat(i573[11], i573[12], i573[13], i573[14])
  i572.scale = new pc.Vec3( i573[15], i573[16], i573[17] )
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i575 = data
  i574.enabled = !!i575[0]
  i574.planeDistance = i575[1]
  i574.referencePixelsPerUnit = i575[2]
  i574.isFallbackOverlay = !!i575[3]
  i574.renderMode = i575[4]
  i574.renderOrder = i575[5]
  i574.sortingLayerName = i575[6]
  i574.sortingOrder = i575[7]
  i574.scaleFactor = i575[8]
  request.r(i575[9], i575[10], 0, i574, 'worldCamera')
  i574.overrideSorting = !!i575[11]
  i574.pixelPerfect = !!i575[12]
  i574.targetDisplay = i575[13]
  i574.overridePixelPerfect = !!i575[14]
  return i574
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i577 = data
  i576.m_UiScaleMode = i577[0]
  i576.m_ReferencePixelsPerUnit = i577[1]
  i576.m_ScaleFactor = i577[2]
  i576.m_ReferenceResolution = new pc.Vec2( i577[3], i577[4] )
  i576.m_ScreenMatchMode = i577[5]
  i576.m_MatchWidthOrHeight = i577[6]
  i576.m_PhysicalUnit = i577[7]
  i576.m_FallbackScreenDPI = i577[8]
  i576.m_DefaultSpriteDPI = i577[9]
  i576.m_DynamicPixelsPerUnit = i577[10]
  i576.m_PresetInfoIsWorld = !!i577[11]
  return i576
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i579 = data
  i578.m_IgnoreReversedGraphics = !!i579[0]
  i578.m_BlockingObjects = i579[1]
  i578.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i579[2] )
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i581 = data
  i580.cullTransparentMesh = !!i581[0]
  return i580
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.UI.Image' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'm_Sprite')
  i582.m_Type = i583[2]
  i582.m_PreserveAspect = !!i583[3]
  i582.m_FillCenter = !!i583[4]
  i582.m_FillMethod = i583[5]
  i582.m_FillAmount = i583[6]
  i582.m_FillClockwise = !!i583[7]
  i582.m_FillOrigin = i583[8]
  i582.m_UseSpriteMesh = !!i583[9]
  i582.m_PixelsPerUnitMultiplier = i583[10]
  request.r(i583[11], i583[12], 0, i582, 'm_Material')
  i582.m_Maskable = !!i583[13]
  i582.m_Color = new pc.Color(i583[14], i583[15], i583[16], i583[17])
  i582.m_RaycastTarget = !!i583[18]
  i582.m_RaycastPadding = new pc.Vec4( i583[19], i583[20], i583[21], i583[22] )
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i585 = data
  i584.m_Alpha = i585[0]
  i584.m_Interactable = !!i585[1]
  i584.m_BlocksRaycasts = !!i585[2]
  i584.m_IgnoreParentGroups = !!i585[3]
  i584.enabled = !!i585[4]
  return i584
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i586 = root || request.c( 'CanvasGroupAnimator' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'canvasGroup')
  i586.animateFade = !!i587[2]
  i586.triggerOnStart = !!i587[3]
  i586.isLooping = !!i587[4]
  i586.fadeTo = i587[5]
  i586.fadeDuration = i587[6]
  i586.fadeEaseType = i587[7]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'animatorController')
  request.r(i589[2], i589[3], 0, i588, 'avatar')
  i588.updateMode = i589[4]
  i588.hasTransformHierarchy = !!i589[5]
  i588.applyRootMotion = !!i589[6]
  var i591 = i589[7]
  var i590 = []
  for(var i = 0; i < i591.length; i += 2) {
  request.r(i591[i + 0], i591[i + 1], 2, i590, '')
  }
  i588.humanBones = i590
  i588.enabled = !!i589[8]
  return i588
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.UI.Button' )
  var i595 = data
  i594.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i595[0], i594.m_OnClick)
  i594.m_Navigation = request.d('UnityEngine.UI.Navigation', i595[1], i594.m_Navigation)
  i594.m_Transition = i595[2]
  i594.m_Colors = request.d('UnityEngine.UI.ColorBlock', i595[3], i594.m_Colors)
  i594.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i595[4], i594.m_SpriteState)
  i594.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i595[5], i594.m_AnimationTriggers)
  i594.m_Interactable = !!i595[6]
  request.r(i595[7], i595[8], 0, i594, 'm_TargetGraphic')
  return i594
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i597 = data
  i596.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i597[0], i596.m_PersistentCalls)
  return i596
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i599 = data
  var i601 = i599[0]
  var i600 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i601.length; i += 1) {
    i600.add(request.d('UnityEngine.Events.PersistentCall', i601[i + 0]));
  }
  i598.m_Calls = i600
  return i598
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'm_Target')
  i604.m_TargetAssemblyTypeName = i605[2]
  i604.m_MethodName = i605[3]
  i604.m_Mode = i605[4]
  i604.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i605[5], i604.m_Arguments)
  i604.m_CallState = i605[6]
  return i604
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'm_ObjectArgument')
  i606.m_ObjectArgumentAssemblyTypeName = i607[2]
  i606.m_IntArgument = i607[3]
  i606.m_FloatArgument = i607[4]
  i606.m_StringArgument = i607[5]
  i606.m_BoolArgument = !!i607[6]
  return i606
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i609 = data
  i608.m_Mode = i609[0]
  i608.m_WrapAround = !!i609[1]
  request.r(i609[2], i609[3], 0, i608, 'm_SelectOnUp')
  request.r(i609[4], i609[5], 0, i608, 'm_SelectOnDown')
  request.r(i609[6], i609[7], 0, i608, 'm_SelectOnLeft')
  request.r(i609[8], i609[9], 0, i608, 'm_SelectOnRight')
  return i608
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i611 = data
  i610.m_NormalColor = new pc.Color(i611[0], i611[1], i611[2], i611[3])
  i610.m_HighlightedColor = new pc.Color(i611[4], i611[5], i611[6], i611[7])
  i610.m_PressedColor = new pc.Color(i611[8], i611[9], i611[10], i611[11])
  i610.m_SelectedColor = new pc.Color(i611[12], i611[13], i611[14], i611[15])
  i610.m_DisabledColor = new pc.Color(i611[16], i611[17], i611[18], i611[19])
  i610.m_ColorMultiplier = i611[20]
  i610.m_FadeDuration = i611[21]
  return i610
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'm_HighlightedSprite')
  request.r(i613[2], i613[3], 0, i612, 'm_PressedSprite')
  request.r(i613[4], i613[5], 0, i612, 'm_SelectedSprite')
  request.r(i613[6], i613[7], 0, i612, 'm_DisabledSprite')
  return i612
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i615 = data
  i614.m_NormalTrigger = i615[0]
  i614.m_HighlightedTrigger = i615[1]
  i614.m_PressedTrigger = i615[2]
  i614.m_SelectedTrigger = i615[3]
  i614.m_DisabledTrigger = i615[4]
  return i614
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i617 = data
  i616.m_Spacing = i617[0]
  i616.m_ChildForceExpandWidth = !!i617[1]
  i616.m_ChildForceExpandHeight = !!i617[2]
  i616.m_ChildControlWidth = !!i617[3]
  i616.m_ChildControlHeight = !!i617[4]
  i616.m_ChildScaleWidth = !!i617[5]
  i616.m_ChildScaleHeight = !!i617[6]
  i616.m_ReverseArrangement = !!i617[7]
  i616.m_Padding = UnityEngine.RectOffset.FromPaddings(i617[8], i617[9], i617[10], i617[11])
  i616.m_ChildAlignment = i617[12]
  return i616
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.Mask' )
  var i619 = data
  i618.m_ShowMaskGraphic = !!i619[0]
  return i618
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'm_Content')
  i620.m_Horizontal = !!i621[2]
  i620.m_Vertical = !!i621[3]
  i620.m_MovementType = i621[4]
  i620.m_Elasticity = i621[5]
  i620.m_Inertia = !!i621[6]
  i620.m_DecelerationRate = i621[7]
  i620.m_ScrollSensitivity = i621[8]
  request.r(i621[9], i621[10], 0, i620, 'm_Viewport')
  request.r(i621[11], i621[12], 0, i620, 'm_HorizontalScrollbar')
  request.r(i621[13], i621[14], 0, i620, 'm_VerticalScrollbar')
  i620.m_HorizontalScrollbarVisibility = i621[15]
  i620.m_VerticalScrollbarVisibility = i621[16]
  i620.m_HorizontalScrollbarSpacing = i621[17]
  i620.m_VerticalScrollbarSpacing = i621[18]
  i620.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i621[19], i620.m_OnValueChanged)
  return i620
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i623 = data
  i622.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i623[0], i622.m_PersistentCalls)
  return i622
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'm_HandleRect')
  i624.m_Direction = i625[2]
  i624.m_Value = i625[3]
  i624.m_Size = i625[4]
  i624.m_NumberOfSteps = i625[5]
  i624.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i625[6], i624.m_OnValueChanged)
  i624.m_Navigation = request.d('UnityEngine.UI.Navigation', i625[7], i624.m_Navigation)
  i624.m_Transition = i625[8]
  i624.m_Colors = request.d('UnityEngine.UI.ColorBlock', i625[9], i624.m_Colors)
  i624.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i625[10], i624.m_SpriteState)
  i624.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i625[11], i624.m_AnimationTriggers)
  i624.m_Interactable = !!i625[12]
  request.r(i625[13], i625[14], 0, i624, 'm_TargetGraphic')
  return i624
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i627 = data
  i626.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i627[0], i626.m_PersistentCalls)
  return i626
}

Deserializers["DragToResizeLeft"] = function (request, data, root) {
  var i628 = root || request.c( 'DragToResizeLeft' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'target')
  i628.minWidth = i629[2]
  return i628
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'm_FirstSelected')
  i630.m_sendNavigationEvents = !!i631[2]
  i630.m_DragThreshold = i631[3]
  return i630
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i633 = data
  i632.m_HorizontalAxis = i633[0]
  i632.m_VerticalAxis = i633[1]
  i632.m_SubmitButton = i633[2]
  i632.m_CancelButton = i633[3]
  i632.m_InputActionsPerSecond = i633[4]
  i632.m_RepeatDelay = i633[5]
  i632.m_ForceModuleActive = !!i633[6]
  i632.m_SendPointerHoverToParent = !!i633[7]
  return i632
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i634 = root || request.c( 'ButtonPulse' )
  var i635 = data
  i634.scaleAmount = i635[0]
  i634.pulseDuration = i635[1]
  return i634
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i636 = root || request.c( 'StartClickHandler' )
  var i637 = data
  return i636
}

Deserializers["GameManager"] = function (request, data, root) {
  var i638 = root || request.c( 'GameManager' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'endPanel')
  i638.end = !!i639[2]
  request.r(i639[3], i639[4], 0, i638, 'hand')
  request.r(i639[5], i639[6], 0, i638, 'hand2')
  i638.enableSound = !!i639[7]
  request.r(i639[8], i639[9], 0, i638, 'startClickHandler')
  i638.currentScore = i639[10]
  request.r(i639[11], i639[12], 0, i638, 'BodyToSummarize')
  request.r(i639[13], i639[14], 0, i638, 'SummarizedText')
  request.r(i639[15], i639[16], 0, i638, 'transcriptBtnBlue')
  request.r(i639[17], i639[18], 0, i638, 'transcriptBtn')
  request.r(i639[19], i639[20], 0, i638, 'summaryBtn')
  request.r(i639[21], i639[22], 0, i638, 'summaryBtnBlue')
  request.r(i639[23], i639[24], 0, i638, 'mainPanel')
  request.r(i639[25], i639[26], 0, i638, 'handle1')
  request.r(i639[27], i639[28], 0, i638, 'animator')
  request.r(i639[29], i639[30], 0, i638, 'maskA')
  request.r(i639[31], i639[32], 0, i638, 'filter')
  request.r(i639[33], i639[34], 0, i638, 'arrow')
  request.r(i639[35], i639[36], 0, i638, 'toTap')
  request.r(i639[37], i639[38], 0, i638, 'openingPanel')
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i641 = data
  i640.ambientIntensity = i641[0]
  i640.reflectionIntensity = i641[1]
  i640.ambientMode = i641[2]
  i640.ambientLight = new pc.Color(i641[3], i641[4], i641[5], i641[6])
  i640.ambientSkyColor = new pc.Color(i641[7], i641[8], i641[9], i641[10])
  i640.ambientGroundColor = new pc.Color(i641[11], i641[12], i641[13], i641[14])
  i640.ambientEquatorColor = new pc.Color(i641[15], i641[16], i641[17], i641[18])
  i640.fogColor = new pc.Color(i641[19], i641[20], i641[21], i641[22])
  i640.fogEndDistance = i641[23]
  i640.fogStartDistance = i641[24]
  i640.fogDensity = i641[25]
  i640.fog = !!i641[26]
  request.r(i641[27], i641[28], 0, i640, 'skybox')
  i640.fogMode = i641[29]
  var i643 = i641[30]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i643[i + 0]) );
  }
  i640.lightmaps = i642
  i640.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i641[31], i640.lightProbes)
  i640.lightmapsMode = i641[32]
  i640.mixedBakeMode = i641[33]
  i640.environmentLightingMode = i641[34]
  i640.ambientProbe = new pc.SphericalHarmonicsL2(i641[35])
  i640.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i641[36])
  i640.useReferenceAmbientProbe = !!i641[37]
  request.r(i641[38], i641[39], 0, i640, 'customReflection')
  request.r(i641[40], i641[41], 0, i640, 'defaultReflection')
  i640.defaultReflectionMode = i641[42]
  i640.defaultReflectionResolution = i641[43]
  i640.sunLightObjectId = i641[44]
  i640.pixelLightCount = i641[45]
  i640.defaultReflectionHDR = !!i641[46]
  i640.hasLightDataAsset = !!i641[47]
  i640.hasManualGenerate = !!i641[48]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'lightmapColor')
  request.r(i647[2], i647[3], 0, i646, 'lightmapDirection')
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i648 = root || new UnityEngine.LightProbes()
  var i649 = data
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i657 = data
  var i659 = i657[0]
  var i658 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i659.length; i += 1) {
    i658.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i659[i + 0]));
  }
  i656.ShaderCompilationErrors = i658
  i656.name = i657[1]
  i656.guid = i657[2]
  var i661 = i657[3]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( i661[i + 0] );
  }
  i656.shaderDefinedKeywords = i660
  var i663 = i657[4]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i663[i + 0]) );
  }
  i656.passes = i662
  var i665 = i657[5]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i665[i + 0]) );
  }
  i656.usePasses = i664
  var i667 = i657[6]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i667[i + 0]) );
  }
  i656.defaultParameterValues = i666
  request.r(i657[7], i657[8], 0, i656, 'unityFallbackShader')
  i656.readDepth = !!i657[9]
  i656.isCreatedByShaderGraph = !!i657[10]
  i656.compiled = !!i657[11]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i671 = data
  i670.shaderName = i671[0]
  i670.errorMessage = i671[1]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i676 = root || new pc.UnityShaderPass()
  var i677 = data
  i676.id = i677[0]
  i676.subShaderIndex = i677[1]
  i676.name = i677[2]
  i676.passType = i677[3]
  i676.grabPassTextureName = i677[4]
  i676.usePass = !!i677[5]
  i676.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[6], i676.zTest)
  i676.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[7], i676.zWrite)
  i676.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[8], i676.culling)
  i676.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i677[9], i676.blending)
  i676.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i677[10], i676.alphaBlending)
  i676.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[11], i676.colorWriteMask)
  i676.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[12], i676.offsetUnits)
  i676.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[13], i676.offsetFactor)
  i676.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[14], i676.stencilRef)
  i676.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[15], i676.stencilReadMask)
  i676.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[16], i676.stencilWriteMask)
  i676.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i677[17], i676.stencilOp)
  i676.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i677[18], i676.stencilOpFront)
  i676.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i677[19], i676.stencilOpBack)
  var i679 = i677[20]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i679[i + 0]) );
  }
  i676.tags = i678
  var i681 = i677[21]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( i681[i + 0] );
  }
  i676.passDefinedKeywords = i680
  var i683 = i677[22]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i683[i + 0]) );
  }
  i676.passDefinedKeywordGroups = i682
  var i685 = i677[23]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i685[i + 0]) );
  }
  i676.variants = i684
  var i687 = i677[24]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i687[i + 0]) );
  }
  i676.excludedVariants = i686
  i676.hasDepthReader = !!i677[25]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i689 = data
  i688.val = i689[0]
  i688.name = i689[1]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i691 = data
  i690.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[0], i690.src)
  i690.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[1], i690.dst)
  i690.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[2], i690.op)
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i693 = data
  i692.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i693[0], i692.pass)
  i692.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i693[1], i692.fail)
  i692.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i693[2], i692.zFail)
  i692.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i693[3], i692.comp)
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i697 = data
  i696.name = i697[0]
  i696.value = i697[1]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i701 = data
  var i703 = i701[0]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( i703[i + 0] );
  }
  i700.keywords = i702
  i700.hasDiscard = !!i701[1]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i707 = data
  i706.passId = i707[0]
  i706.subShaderIndex = i707[1]
  var i709 = i707[2]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( i709[i + 0] );
  }
  i706.keywords = i708
  i706.vertexProgram = i707[3]
  i706.fragmentProgram = i707[4]
  i706.exportedForWebGl2 = !!i707[5]
  i706.readDepth = !!i707[6]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'shader')
  i712.pass = i713[2]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i717 = data
  i716.name = i717[0]
  i716.type = i717[1]
  i716.value = new pc.Vec4( i717[2], i717[3], i717[4], i717[5] )
  i716.textureValue = i717[6]
  i716.shaderPropertyFlag = i717[7]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i719 = data
  i718.name = i719[0]
  request.r(i719[1], i719[2], 0, i718, 'texture')
  i718.aabb = i719[3]
  i718.vertices = i719[4]
  i718.triangles = i719[5]
  i718.textureRect = UnityEngine.Rect.MinMaxRect(i719[6], i719[7], i719[8], i719[9])
  i718.packedRect = UnityEngine.Rect.MinMaxRect(i719[10], i719[11], i719[12], i719[13])
  i718.border = new pc.Vec4( i719[14], i719[15], i719[16], i719[17] )
  i718.transparency = i719[18]
  i718.bounds = i719[19]
  i718.pixelsPerUnit = i719[20]
  i718.textureWidth = i719[21]
  i718.textureHeight = i719[22]
  i718.nativeSize = new pc.Vec2( i719[23], i719[24] )
  i718.pivot = new pc.Vec2( i719[25], i719[26] )
  i718.textureRectOffset = new pc.Vec2( i719[27], i719[28] )
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i721 = data
  i720.name = i721[0]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i723 = data
  i722.name = i723[0]
  i722.wrapMode = i723[1]
  i722.isLooping = !!i723[2]
  i722.length = i723[3]
  var i725 = i723[4]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i725[i + 0]) );
  }
  i722.curves = i724
  var i727 = i723[5]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i727[i + 0]) );
  }
  i722.events = i726
  i722.halfPrecision = !!i723[6]
  i722._frameRate = i723[7]
  i722.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i723[8], i722.localBounds)
  i722.hasMuscleCurves = !!i723[9]
  var i729 = i723[10]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( i729[i + 0] );
  }
  i722.clipMuscleConstant = i728
  i722.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i723[11], i722.clipBindingConstant)
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i733 = data
  i732.path = i733[0]
  i732.hash = i733[1]
  i732.componentType = i733[2]
  i732.property = i733[3]
  i732.keys = i733[4]
  var i735 = i733[5]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i735[i + 0]) );
  }
  i732.objectReferenceKeys = i734
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i739 = data
  i738.time = i739[0]
  request.r(i739[1], i739[2], 0, i738, 'value')
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i743 = data
  i742.functionName = i743[0]
  i742.floatParameter = i743[1]
  i742.intParameter = i743[2]
  i742.stringParameter = i743[3]
  request.r(i743[4], i743[5], 0, i742, 'objectReferenceParameter')
  i742.time = i743[6]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i745 = data
  i744.center = new pc.Vec3( i745[0], i745[1], i745[2] )
  i744.extends = new pc.Vec3( i745[3], i745[4], i745[5] )
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i749 = data
  var i751 = i749[0]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( i751[i + 0] );
  }
  i748.genericBindings = i750
  var i753 = i749[1]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( i753[i + 0] );
  }
  i748.pptrCurveMapping = i752
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i755 = data
  i754.name = i755[0]
  var i757 = i755[1]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i757[i + 0]) );
  }
  i754.layers = i756
  var i759 = i755[2]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i759[i + 0]) );
  }
  i754.parameters = i758
  i754.animationClips = i755[3]
  i754.avatarUnsupported = i755[4]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i763 = data
  i762.name = i763[0]
  i762.defaultWeight = i763[1]
  i762.blendingMode = i763[2]
  i762.avatarMask = i763[3]
  i762.syncedLayerIndex = i763[4]
  i762.syncedLayerAffectsTiming = !!i763[5]
  i762.syncedLayers = i763[6]
  i762.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i763[7], i762.stateMachine)
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i765 = data
  i764.id = i765[0]
  i764.name = i765[1]
  i764.path = i765[2]
  var i767 = i765[3]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i767[i + 0]) );
  }
  i764.states = i766
  var i769 = i765[4]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i769[i + 0]) );
  }
  i764.machines = i768
  var i771 = i765[5]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i771[i + 0]) );
  }
  i764.entryStateTransitions = i770
  var i773 = i765[6]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i773[i + 0]) );
  }
  i764.exitStateTransitions = i772
  var i775 = i765[7]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i775[i + 0]) );
  }
  i764.anyStateTransitions = i774
  i764.defaultStateId = i765[8]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i779 = data
  i778.id = i779[0]
  i778.name = i779[1]
  i778.cycleOffset = i779[2]
  i778.cycleOffsetParameter = i779[3]
  i778.cycleOffsetParameterActive = !!i779[4]
  i778.mirror = !!i779[5]
  i778.mirrorParameter = i779[6]
  i778.mirrorParameterActive = !!i779[7]
  i778.motionId = i779[8]
  i778.nameHash = i779[9]
  i778.fullPathHash = i779[10]
  i778.speed = i779[11]
  i778.speedParameter = i779[12]
  i778.speedParameterActive = !!i779[13]
  i778.tag = i779[14]
  i778.tagHash = i779[15]
  i778.writeDefaultValues = !!i779[16]
  var i781 = i779[17]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 2, i780, '')
  }
  i778.behaviours = i780
  var i783 = i779[18]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i783[i + 0]) );
  }
  i778.transitions = i782
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i789 = data
  i788.fullPath = i789[0]
  i788.canTransitionToSelf = !!i789[1]
  i788.duration = i789[2]
  i788.exitTime = i789[3]
  i788.hasExitTime = !!i789[4]
  i788.hasFixedDuration = !!i789[5]
  i788.interruptionSource = i789[6]
  i788.offset = i789[7]
  i788.orderedInterruption = !!i789[8]
  i788.destinationStateId = i789[9]
  i788.isExit = !!i789[10]
  i788.mute = !!i789[11]
  i788.solo = !!i789[12]
  var i791 = i789[13]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i791[i + 0]) );
  }
  i788.conditions = i790
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i797 = data
  i796.destinationStateId = i797[0]
  i796.isExit = !!i797[1]
  i796.mute = !!i797[2]
  i796.solo = !!i797[3]
  var i799 = i797[4]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i799[i + 0]) );
  }
  i796.conditions = i798
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i803 = data
  i802.defaultBool = !!i803[0]
  i802.defaultFloat = i803[1]
  i802.defaultInt = i803[2]
  i802.name = i803[3]
  i802.nameHash = i803[4]
  i802.type = i803[5]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i807 = data
  i806.mode = i807[0]
  i806.parameter = i807[1]
  i806.threshold = i807[2]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i809 = data
  i808.name = i809[0]
  i808.bytes64 = i809[1]
  i808.data = i809[2]
  return i808
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i810 = root || request.c( 'AudioLibrary' )
  var i811 = data
  var i813 = i811[0]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i813.length; i += 1) {
    i812.add(request.d('AudioLibrary+ClipEntry', i813[i + 0]));
  }
  i810.clips = i812
  return i810
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i816 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i817 = data
  i816.key = i817[0]
  i816.channel = i817[1]
  request.r(i817[2], i817[3], 0, i816, 'clip')
  i816.volume = i817[4]
  i816.loop = !!i817[5]
  return i816
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i818 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i819 = data
  i818.useSafeMode = !!i819[0]
  i818.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i819[1], i818.safeModeOptions)
  i818.timeScale = i819[2]
  i818.unscaledTimeScale = i819[3]
  i818.useSmoothDeltaTime = !!i819[4]
  i818.maxSmoothUnscaledTime = i819[5]
  i818.rewindCallbackMode = i819[6]
  i818.showUnityEditorReport = !!i819[7]
  i818.logBehaviour = i819[8]
  i818.drawGizmos = !!i819[9]
  i818.defaultRecyclable = !!i819[10]
  i818.defaultAutoPlay = i819[11]
  i818.defaultUpdateType = i819[12]
  i818.defaultTimeScaleIndependent = !!i819[13]
  i818.defaultEaseType = i819[14]
  i818.defaultEaseOvershootOrAmplitude = i819[15]
  i818.defaultEasePeriod = i819[16]
  i818.defaultAutoKill = !!i819[17]
  i818.defaultLoopType = i819[18]
  i818.debugMode = !!i819[19]
  i818.debugStoreTargetId = !!i819[20]
  i818.showPreviewPanel = !!i819[21]
  i818.storeSettingsLocation = i819[22]
  i818.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i819[23], i818.modules)
  i818.createASMDEF = !!i819[24]
  i818.showPlayingTweens = !!i819[25]
  i818.showPausedTweens = !!i819[26]
  return i818
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i820 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i821 = data
  i820.logBehaviour = i821[0]
  i820.nestedTweenFailureBehaviour = i821[1]
  return i820
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i822 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i823 = data
  i822.showPanel = !!i823[0]
  i822.audioEnabled = !!i823[1]
  i822.physicsEnabled = !!i823[2]
  i822.physics2DEnabled = !!i823[3]
  i822.spriteEnabled = !!i823[4]
  i822.uiEnabled = !!i823[5]
  i822.textMeshProEnabled = !!i823[6]
  i822.tk2DEnabled = !!i823[7]
  i822.deAudioEnabled = !!i823[8]
  i822.deUnityExtendedEnabled = !!i823[9]
  i822.epoOutlineEnabled = !!i823[10]
  return i822
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i824 = root || request.c( 'TMPro.TMP_Settings' )
  var i825 = data
  i824.m_enableWordWrapping = !!i825[0]
  i824.m_enableKerning = !!i825[1]
  i824.m_enableExtraPadding = !!i825[2]
  i824.m_enableTintAllSprites = !!i825[3]
  i824.m_enableParseEscapeCharacters = !!i825[4]
  i824.m_EnableRaycastTarget = !!i825[5]
  i824.m_GetFontFeaturesAtRuntime = !!i825[6]
  i824.m_missingGlyphCharacter = i825[7]
  i824.m_warningsDisabled = !!i825[8]
  request.r(i825[9], i825[10], 0, i824, 'm_defaultFontAsset')
  i824.m_defaultFontAssetPath = i825[11]
  i824.m_defaultFontSize = i825[12]
  i824.m_defaultAutoSizeMinRatio = i825[13]
  i824.m_defaultAutoSizeMaxRatio = i825[14]
  i824.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i825[15], i825[16] )
  i824.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i825[17], i825[18] )
  i824.m_autoSizeTextContainer = !!i825[19]
  i824.m_IsTextObjectScaleStatic = !!i825[20]
  var i827 = i825[21]
  var i826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 1, i826, '')
  }
  i824.m_fallbackFontAssets = i826
  i824.m_matchMaterialPreset = !!i825[22]
  request.r(i825[23], i825[24], 0, i824, 'm_defaultSpriteAsset')
  i824.m_defaultSpriteAssetPath = i825[25]
  i824.m_enableEmojiSupport = !!i825[26]
  i824.m_MissingCharacterSpriteUnicode = i825[27]
  i824.m_defaultColorGradientPresetsPath = i825[28]
  request.r(i825[29], i825[30], 0, i824, 'm_defaultStyleSheet')
  i824.m_StyleSheetsResourcePath = i825[31]
  request.r(i825[32], i825[33], 0, i824, 'm_leadingCharacters')
  request.r(i825[34], i825[35], 0, i824, 'm_followingCharacters')
  i824.m_UseModernHangulLineBreakingRules = !!i825[36]
  return i824
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i830 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i831 = data
  i830.hashCode = i831[0]
  request.r(i831[1], i831[2], 0, i830, 'material')
  i830.materialHashCode = i831[3]
  request.r(i831[4], i831[5], 0, i830, 'atlas')
  i830.normalStyle = i831[6]
  i830.normalSpacingOffset = i831[7]
  i830.boldStyle = i831[8]
  i830.boldSpacing = i831[9]
  i830.italicStyle = i831[10]
  i830.tabSize = i831[11]
  i830.m_Version = i831[12]
  i830.m_SourceFontFileGUID = i831[13]
  request.r(i831[14], i831[15], 0, i830, 'm_SourceFontFile_EditorRef')
  request.r(i831[16], i831[17], 0, i830, 'm_SourceFontFile')
  i830.m_AtlasPopulationMode = i831[18]
  i830.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i831[19], i830.m_FaceInfo)
  var i833 = i831[20]
  var i832 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i833.length; i += 1) {
    i832.add(request.d('UnityEngine.TextCore.Glyph', i833[i + 0]));
  }
  i830.m_GlyphTable = i832
  var i835 = i831[21]
  var i834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i835.length; i += 1) {
    i834.add(request.d('TMPro.TMP_Character', i835[i + 0]));
  }
  i830.m_CharacterTable = i834
  var i837 = i831[22]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i830.m_AtlasTextures = i836
  i830.m_AtlasTextureIndex = i831[23]
  i830.m_IsMultiAtlasTexturesEnabled = !!i831[24]
  i830.m_ClearDynamicDataOnBuild = !!i831[25]
  var i839 = i831[26]
  var i838 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i839.length; i += 1) {
    i838.add(request.d('UnityEngine.TextCore.GlyphRect', i839[i + 0]));
  }
  i830.m_UsedGlyphRects = i838
  var i841 = i831[27]
  var i840 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i841.length; i += 1) {
    i840.add(request.d('UnityEngine.TextCore.GlyphRect', i841[i + 0]));
  }
  i830.m_FreeGlyphRects = i840
  i830.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i831[28], i830.m_fontInfo)
  i830.m_AtlasWidth = i831[29]
  i830.m_AtlasHeight = i831[30]
  i830.m_AtlasPadding = i831[31]
  i830.m_AtlasRenderMode = i831[32]
  var i843 = i831[33]
  var i842 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i843.length; i += 1) {
    i842.add(request.d('TMPro.TMP_Glyph', i843[i + 0]));
  }
  i830.m_glyphInfoList = i842
  i830.m_KerningTable = request.d('TMPro.KerningTable', i831[34], i830.m_KerningTable)
  i830.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i831[35], i830.m_FontFeatureTable)
  var i845 = i831[36]
  var i844 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 1, i844, '')
  }
  i830.fallbackFontAssets = i844
  var i847 = i831[37]
  var i846 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 1, i846, '')
  }
  i830.m_FallbackFontAssetTable = i846
  i830.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i831[38], i830.m_CreationSettings)
  var i849 = i831[39]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('TMPro.TMP_FontWeightPair', i849[i + 0]) );
  }
  i830.m_FontWeightTable = i848
  var i851 = i831[40]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('TMPro.TMP_FontWeightPair', i851[i + 0]) );
  }
  i830.fontWeights = i850
  return i830
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i853 = data
  i852.m_FaceIndex = i853[0]
  i852.m_FamilyName = i853[1]
  i852.m_StyleName = i853[2]
  i852.m_PointSize = i853[3]
  i852.m_Scale = i853[4]
  i852.m_UnitsPerEM = i853[5]
  i852.m_LineHeight = i853[6]
  i852.m_AscentLine = i853[7]
  i852.m_CapLine = i853[8]
  i852.m_MeanLine = i853[9]
  i852.m_Baseline = i853[10]
  i852.m_DescentLine = i853[11]
  i852.m_SuperscriptOffset = i853[12]
  i852.m_SuperscriptSize = i853[13]
  i852.m_SubscriptOffset = i853[14]
  i852.m_SubscriptSize = i853[15]
  i852.m_UnderlineOffset = i853[16]
  i852.m_UnderlineThickness = i853[17]
  i852.m_StrikethroughOffset = i853[18]
  i852.m_StrikethroughThickness = i853[19]
  i852.m_TabWidth = i853[20]
  return i852
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i857 = data
  i856.m_Index = i857[0]
  i856.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i857[1], i856.m_Metrics)
  i856.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i857[2], i856.m_GlyphRect)
  i856.m_Scale = i857[3]
  i856.m_AtlasIndex = i857[4]
  i856.m_ClassDefinitionType = i857[5]
  return i856
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i859 = data
  i858.m_Width = i859[0]
  i858.m_Height = i859[1]
  i858.m_HorizontalBearingX = i859[2]
  i858.m_HorizontalBearingY = i859[3]
  i858.m_HorizontalAdvance = i859[4]
  return i858
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i861 = data
  i860.m_X = i861[0]
  i860.m_Y = i861[1]
  i860.m_Width = i861[2]
  i860.m_Height = i861[3]
  return i860
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i864 = root || request.c( 'TMPro.TMP_Character' )
  var i865 = data
  i864.m_ElementType = i865[0]
  i864.m_Unicode = i865[1]
  i864.m_GlyphIndex = i865[2]
  i864.m_Scale = i865[3]
  return i864
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i870 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i871 = data
  i870.Name = i871[0]
  i870.PointSize = i871[1]
  i870.Scale = i871[2]
  i870.CharacterCount = i871[3]
  i870.LineHeight = i871[4]
  i870.Baseline = i871[5]
  i870.Ascender = i871[6]
  i870.CapHeight = i871[7]
  i870.Descender = i871[8]
  i870.CenterLine = i871[9]
  i870.SuperscriptOffset = i871[10]
  i870.SubscriptOffset = i871[11]
  i870.SubSize = i871[12]
  i870.Underline = i871[13]
  i870.UnderlineThickness = i871[14]
  i870.strikethrough = i871[15]
  i870.strikethroughThickness = i871[16]
  i870.TabWidth = i871[17]
  i870.Padding = i871[18]
  i870.AtlasWidth = i871[19]
  i870.AtlasHeight = i871[20]
  return i870
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.TMP_Glyph' )
  var i875 = data
  i874.id = i875[0]
  i874.x = i875[1]
  i874.y = i875[2]
  i874.width = i875[3]
  i874.height = i875[4]
  i874.xOffset = i875[5]
  i874.yOffset = i875[6]
  i874.xAdvance = i875[7]
  i874.scale = i875[8]
  return i874
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i876 = root || request.c( 'TMPro.KerningTable' )
  var i877 = data
  var i879 = i877[0]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i879.length; i += 1) {
    i878.add(request.d('TMPro.KerningPair', i879[i + 0]));
  }
  i876.kerningPairs = i878
  return i876
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i882 = root || request.c( 'TMPro.KerningPair' )
  var i883 = data
  i882.xOffset = i883[0]
  i882.m_FirstGlyph = i883[1]
  i882.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i883[2], i882.m_FirstGlyphAdjustments)
  i882.m_SecondGlyph = i883[3]
  i882.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i883[4], i882.m_SecondGlyphAdjustments)
  i882.m_IgnoreSpacingAdjustments = !!i883[5]
  return i882
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i884 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i885 = data
  var i887 = i885[0]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i887.length; i += 1) {
    i886.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i887[i + 0]));
  }
  i884.m_GlyphPairAdjustmentRecords = i886
  return i884
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i890 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i891 = data
  i890.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i891[0], i890.m_FirstAdjustmentRecord)
  i890.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i891[1], i890.m_SecondAdjustmentRecord)
  i890.m_FeatureLookupFlags = i891[2]
  return i890
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i892 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i893 = data
  i892.m_GlyphIndex = i893[0]
  i892.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i893[1], i892.m_GlyphValueRecord)
  return i892
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i894 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i895 = data
  i894.m_XPlacement = i895[0]
  i894.m_YPlacement = i895[1]
  i894.m_XAdvance = i895[2]
  i894.m_YAdvance = i895[3]
  return i894
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i896 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i897 = data
  i896.sourceFontFileName = i897[0]
  i896.sourceFontFileGUID = i897[1]
  i896.pointSizeSamplingMode = i897[2]
  i896.pointSize = i897[3]
  i896.padding = i897[4]
  i896.packingMode = i897[5]
  i896.atlasWidth = i897[6]
  i896.atlasHeight = i897[7]
  i896.characterSetSelectionMode = i897[8]
  i896.characterSequence = i897[9]
  i896.referencedFontAssetGUID = i897[10]
  i896.referencedTextAssetGUID = i897[11]
  i896.fontStyle = i897[12]
  i896.fontStyleModifier = i897[13]
  i896.renderMode = i897[14]
  i896.includeFontFeatures = !!i897[15]
  return i896
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i900 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'regularTypeface')
  request.r(i901[2], i901[3], 0, i900, 'italicTypeface')
  return i900
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i902 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i903 = data
  i902.hashCode = i903[0]
  request.r(i903[1], i903[2], 0, i902, 'material')
  i902.materialHashCode = i903[3]
  request.r(i903[4], i903[5], 0, i902, 'spriteSheet')
  var i905 = i903[6]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(request.d('TMPro.TMP_Sprite', i905[i + 0]));
  }
  i902.spriteInfoList = i904
  var i907 = i903[7]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 1, i906, '')
  }
  i902.fallbackSpriteAssets = i906
  i902.m_Version = i903[8]
  i902.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i903[9], i902.m_FaceInfo)
  var i909 = i903[10]
  var i908 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i909.length; i += 1) {
    i908.add(request.d('TMPro.TMP_SpriteCharacter', i909[i + 0]));
  }
  i902.m_SpriteCharacterTable = i908
  var i911 = i903[11]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i911.length; i += 1) {
    i910.add(request.d('TMPro.TMP_SpriteGlyph', i911[i + 0]));
  }
  i902.m_SpriteGlyphTable = i910
  return i902
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i914 = root || request.c( 'TMPro.TMP_Sprite' )
  var i915 = data
  i914.name = i915[0]
  i914.hashCode = i915[1]
  i914.unicode = i915[2]
  i914.pivot = new pc.Vec2( i915[3], i915[4] )
  request.r(i915[5], i915[6], 0, i914, 'sprite')
  i914.id = i915[7]
  i914.x = i915[8]
  i914.y = i915[9]
  i914.width = i915[10]
  i914.height = i915[11]
  i914.xOffset = i915[12]
  i914.yOffset = i915[13]
  i914.xAdvance = i915[14]
  i914.scale = i915[15]
  return i914
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i920 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i921 = data
  i920.m_Name = i921[0]
  i920.m_HashCode = i921[1]
  i920.m_ElementType = i921[2]
  i920.m_Unicode = i921[3]
  i920.m_GlyphIndex = i921[4]
  i920.m_Scale = i921[5]
  return i920
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i924 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'sprite')
  i924.m_Index = i925[2]
  i924.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i925[3], i924.m_Metrics)
  i924.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i925[4], i924.m_GlyphRect)
  i924.m_Scale = i925[5]
  i924.m_AtlasIndex = i925[6]
  i924.m_ClassDefinitionType = i925[7]
  return i924
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i926 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i927 = data
  var i929 = i927[0]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i929.length; i += 1) {
    i928.add(request.d('TMPro.TMP_Style', i929[i + 0]));
  }
  i926.m_StyleList = i928
  return i926
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i932 = root || request.c( 'TMPro.TMP_Style' )
  var i933 = data
  i932.m_Name = i933[0]
  i932.m_HashCode = i933[1]
  i932.m_OpeningDefinition = i933[2]
  i932.m_ClosingDefinition = i933[3]
  i932.m_OpeningTagArray = i933[4]
  i932.m_ClosingTagArray = i933[5]
  i932.m_OpeningTagUnicodeArray = i933[6]
  i932.m_ClosingTagUnicodeArray = i933[7]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i935 = data
  var i937 = i935[0]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i937[i + 0]) );
  }
  i934.files = i936
  i934.componentToPrefabIds = i935[1]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i941 = data
  i940.path = i941[0]
  request.r(i941[1], i941[2], 0, i940, 'unityObject')
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i943 = data
  var i945 = i943[0]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i945[i + 0]) );
  }
  i942.scriptsExecutionOrder = i944
  var i947 = i943[1]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i947[i + 0]) );
  }
  i942.sortingLayers = i946
  var i949 = i943[2]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i949[i + 0]) );
  }
  i942.cullingLayers = i948
  i942.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i943[3], i942.timeSettings)
  i942.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i943[4], i942.physicsSettings)
  i942.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i943[5], i942.physics2DSettings)
  i942.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i943[6], i942.qualitySettings)
  i942.enableRealtimeShadows = !!i943[7]
  i942.enableAutoInstancing = !!i943[8]
  i942.enableDynamicBatching = !!i943[9]
  i942.lightmapEncodingQuality = i943[10]
  i942.desiredColorSpace = i943[11]
  var i951 = i943[12]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( i951[i + 0] );
  }
  i942.allTags = i950
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i955 = data
  i954.name = i955[0]
  i954.value = i955[1]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i959 = data
  i958.id = i959[0]
  i958.name = i959[1]
  i958.value = i959[2]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i963 = data
  i962.id = i963[0]
  i962.name = i963[1]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i965 = data
  i964.fixedDeltaTime = i965[0]
  i964.maximumDeltaTime = i965[1]
  i964.timeScale = i965[2]
  i964.maximumParticleTimestep = i965[3]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i967 = data
  i966.gravity = new pc.Vec3( i967[0], i967[1], i967[2] )
  i966.defaultSolverIterations = i967[3]
  i966.bounceThreshold = i967[4]
  i966.autoSyncTransforms = !!i967[5]
  i966.autoSimulation = !!i967[6]
  var i969 = i967[7]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i969[i + 0]) );
  }
  i966.collisionMatrix = i968
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i973 = data
  i972.enabled = !!i973[0]
  i972.layerId = i973[1]
  i972.otherLayerId = i973[2]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'material')
  i974.gravity = new pc.Vec2( i975[2], i975[3] )
  i974.positionIterations = i975[4]
  i974.velocityIterations = i975[5]
  i974.velocityThreshold = i975[6]
  i974.maxLinearCorrection = i975[7]
  i974.maxAngularCorrection = i975[8]
  i974.maxTranslationSpeed = i975[9]
  i974.maxRotationSpeed = i975[10]
  i974.baumgarteScale = i975[11]
  i974.baumgarteTOIScale = i975[12]
  i974.timeToSleep = i975[13]
  i974.linearSleepTolerance = i975[14]
  i974.angularSleepTolerance = i975[15]
  i974.defaultContactOffset = i975[16]
  i974.autoSimulation = !!i975[17]
  i974.queriesHitTriggers = !!i975[18]
  i974.queriesStartInColliders = !!i975[19]
  i974.callbacksOnDisable = !!i975[20]
  i974.reuseCollisionCallbacks = !!i975[21]
  i974.autoSyncTransforms = !!i975[22]
  var i977 = i975[23]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i977[i + 0]) );
  }
  i974.collisionMatrix = i976
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i981 = data
  i980.enabled = !!i981[0]
  i980.layerId = i981[1]
  i980.otherLayerId = i981[2]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i983 = data
  var i985 = i983[0]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i985[i + 0]) );
  }
  i982.qualityLevels = i984
  var i987 = i983[1]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( i987[i + 0] );
  }
  i982.names = i986
  i982.shadows = i983[2]
  i982.anisotropicFiltering = i983[3]
  i982.antiAliasing = i983[4]
  i982.lodBias = i983[5]
  i982.shadowCascades = i983[6]
  i982.shadowDistance = i983[7]
  i982.shadowmaskMode = i983[8]
  i982.shadowProjection = i983[9]
  i982.shadowResolution = i983[10]
  i982.softParticles = !!i983[11]
  i982.softVegetation = !!i983[12]
  i982.activeColorSpace = i983[13]
  i982.desiredColorSpace = i983[14]
  i982.masterTextureLimit = i983[15]
  i982.maxQueuedFrames = i983[16]
  i982.particleRaycastBudget = i983[17]
  i982.pixelLightCount = i983[18]
  i982.realtimeReflectionProbes = !!i983[19]
  i982.shadowCascade2Split = i983[20]
  i982.shadowCascade4Split = new pc.Vec3( i983[21], i983[22], i983[23] )
  i982.streamingMipmapsActive = !!i983[24]
  i982.vSyncCount = i983[25]
  i982.asyncUploadBufferSize = i983[26]
  i982.asyncUploadTimeSlice = i983[27]
  i982.billboardsFaceCameraPosition = !!i983[28]
  i982.shadowNearPlaneOffset = i983[29]
  i982.streamingMipmapsMemoryBudget = i983[30]
  i982.maximumLODLevel = i983[31]
  i982.streamingMipmapsAddAllCameras = !!i983[32]
  i982.streamingMipmapsMaxLevelReduction = i983[33]
  i982.streamingMipmapsRenderersPerFrame = i983[34]
  i982.resolutionScalingFixedDPIFactor = i983[35]
  i982.streamingMipmapsMaxFileIORequests = i983[36]
  i982.currentQualityLevel = i983[37]
  return i982
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i990 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i991 = data
  i990.xPlacement = i991[0]
  i990.yPlacement = i991[1]
  i990.xAdvance = i991[2]
  i990.yAdvance = i991[3]
  return i990
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[2],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[2],"77":[78],"79":[80],"81":[80],"13":[12],"5":[2],"29":[12],"82":[55],"83":[12],"84":[6],"85":[12],"86":[12],"16":[13],"18":[17,12],"87":[12],"15":[13],"88":[12],"89":[12],"25":[12],"90":[12],"91":[12],"92":[12],"93":[12],"26":[12],"94":[12],"95":[17,12],"96":[12],"28":[12],"27":[12],"97":[12],"98":[17,12],"99":[12],"100":[30],"101":[30],"31":[30],"102":[30],"103":[2],"104":[2],"105":[106],"107":[2],"108":[12],"109":[78,12],"110":[12,17],"111":[12],"112":[17,12],"113":[78],"114":[17,12],"115":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAspectFitter","UnityEngine.SpriteRenderer","AudioManager","AudioLibrary","TaskManager","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.CanvasGroup","CanvasGroupAnimator","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Button","GameManager","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","DragToResizeLeft","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ButtonPulse","StartClickHandler","UnityEngine.GameObject","UnityEngine.Texture2D","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bullet","UIHorizontalDraggable","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "core2d";

Deserializers.lunaInitializationTime = "08/14/2025 11:33:59";

Deserializers.lunaDaysRunning = "12.2";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "KeyPoints_Sip1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1775";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3898";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, prefabs";

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

Deserializers.buildID = "6f9de428-aac5-4ee3-b637-169fb0cfc995";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


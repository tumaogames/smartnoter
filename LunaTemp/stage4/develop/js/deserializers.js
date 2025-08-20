var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointSpring' )
  var i503 = data
  i502.spring = i503[0]
  i502.damper = i503[1]
  i502.targetPosition = i503[2]
  return i502
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.JointMotor' )
  var i505 = data
  i504.m_TargetVelocity = i505[0]
  i504.m_Force = i505[1]
  i504.m_FreeSpin = i505[2]
  return i504
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.JointLimits' )
  var i507 = data
  i506.m_Min = i507[0]
  i506.m_Max = i507[1]
  i506.m_Bounciness = i507[2]
  i506.m_BounceMinVelocity = i507[3]
  i506.m_ContactDistance = i507[4]
  i506.minBounce = i507[5]
  i506.maxBounce = i507[6]
  return i506
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.JointDrive' )
  var i509 = data
  i508.m_PositionSpring = i509[0]
  i508.m_PositionDamper = i509[1]
  i508.m_MaximumForce = i509[2]
  i508.m_UseAcceleration = i509[3]
  return i508
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i511 = data
  i510.m_Spring = i511[0]
  i510.m_Damper = i511[1]
  return i510
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i513 = data
  i512.m_Limit = i513[0]
  i512.m_Bounciness = i513[1]
  i512.m_ContactDistance = i513[2]
  return i512
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i515 = data
  i514.m_ExtremumSlip = i515[0]
  i514.m_ExtremumValue = i515[1]
  i514.m_AsymptoteSlip = i515[2]
  i514.m_AsymptoteValue = i515[3]
  i514.m_Stiffness = i515[4]
  return i514
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i517 = data
  i516.m_LowerAngle = i517[0]
  i516.m_UpperAngle = i517[1]
  return i516
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i519 = data
  i518.m_MotorSpeed = i519[0]
  i518.m_MaximumMotorTorque = i519[1]
  return i518
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i521 = data
  i520.m_DampingRatio = i521[0]
  i520.m_Frequency = i521[1]
  i520.m_Angle = i521[2]
  return i520
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i523 = data
  i522.m_LowerTranslation = i523[0]
  i522.m_UpperTranslation = i523[1]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i524 = root || new pc.UnityMaterial()
  var i525 = data
  i524.name = i525[0]
  request.r(i525[1], i525[2], 0, i524, 'shader')
  i524.renderQueue = i525[3]
  i524.enableInstancing = !!i525[4]
  var i527 = i525[5]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i527[i + 0]) );
  }
  i524.floatParameters = i526
  var i529 = i525[6]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i529[i + 0]) );
  }
  i524.colorParameters = i528
  var i531 = i525[7]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i531[i + 0]) );
  }
  i524.vectorParameters = i530
  var i533 = i525[8]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i533[i + 0]) );
  }
  i524.textureParameters = i532
  var i535 = i525[9]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i535[i + 0]) );
  }
  i524.materialFlags = i534
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i539 = data
  i538.name = i539[0]
  i538.value = i539[1]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i543 = data
  i542.name = i543[0]
  i542.value = new pc.Color(i543[1], i543[2], i543[3], i543[4])
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i547 = data
  i546.name = i547[0]
  i546.value = new pc.Vec4( i547[1], i547[2], i547[3], i547[4] )
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i551 = data
  i550.name = i551[0]
  request.r(i551[1], i551[2], 0, i550, 'value')
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i555 = data
  i554.name = i555[0]
  i554.enabled = !!i555[1]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i557 = data
  i556.name = i557[0]
  i556.width = i557[1]
  i556.height = i557[2]
  i556.mipmapCount = i557[3]
  i556.anisoLevel = i557[4]
  i556.filterMode = i557[5]
  i556.hdr = !!i557[6]
  i556.format = i557[7]
  i556.wrapMode = i557[8]
  i556.alphaIsTransparency = !!i557[9]
  i556.alphaSource = i557[10]
  i556.graphicsFormat = i557[11]
  i556.sRGBTexture = !!i557[12]
  i556.desiredColorSpace = i557[13]
  i556.wrapU = i557[14]
  i556.wrapV = i557[15]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i559 = data
  i558.name = i559[0]
  i558.index = i559[1]
  i558.startup = !!i559[2]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i561 = data
  i560.position = new pc.Vec3( i561[0], i561[1], i561[2] )
  i560.scale = new pc.Vec3( i561[3], i561[4], i561[5] )
  i560.rotation = new pc.Quat(i561[6], i561[7], i561[8], i561[9])
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i563 = data
  i562.enabled = !!i563[0]
  i562.aspect = i563[1]
  i562.orthographic = !!i563[2]
  i562.orthographicSize = i563[3]
  i562.backgroundColor = new pc.Color(i563[4], i563[5], i563[6], i563[7])
  i562.nearClipPlane = i563[8]
  i562.farClipPlane = i563[9]
  i562.fieldOfView = i563[10]
  i562.depth = i563[11]
  i562.clearFlags = i563[12]
  i562.cullingMask = i563[13]
  i562.rect = i563[14]
  request.r(i563[15], i563[16], 0, i562, 'targetTexture')
  i562.usePhysicalProperties = !!i563[17]
  i562.focalLength = i563[18]
  i562.sensorSize = new pc.Vec2( i563[19], i563[20] )
  i562.lensShift = new pc.Vec2( i563[21], i563[22] )
  i562.gateFit = i563[23]
  i562.commandBufferCount = i563[24]
  i562.cameraType = i563[25]
  return i562
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i564 = root || request.c( 'CameraAspectFitter' )
  var i565 = data
  request.r(i565[0], i565[1], 0, i564, 'targetSprite')
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i567 = data
  i566.name = i567[0]
  i566.tagId = i567[1]
  i566.enabled = !!i567[2]
  i566.isStatic = !!i567[3]
  i566.layer = i567[4]
  return i566
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i568 = root || request.c( 'AudioManager' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'library')
  i568.sfxPoolSize = i569[2]
  return i568
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i570 = root || request.c( 'TaskManager' )
  var i571 = data
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i573 = data
  i572.enabled = !!i573[0]
  request.r(i573[1], i573[2], 0, i572, 'sharedMaterial')
  var i575 = i573[3]
  var i574 = []
  for(var i = 0; i < i575.length; i += 2) {
  request.r(i575[i + 0], i575[i + 1], 2, i574, '')
  }
  i572.sharedMaterials = i574
  i572.receiveShadows = !!i573[4]
  i572.shadowCastingMode = i573[5]
  i572.sortingLayerID = i573[6]
  i572.sortingOrder = i573[7]
  i572.lightmapIndex = i573[8]
  i572.lightmapSceneIndex = i573[9]
  i572.lightmapScaleOffset = new pc.Vec4( i573[10], i573[11], i573[12], i573[13] )
  i572.lightProbeUsage = i573[14]
  i572.reflectionProbeUsage = i573[15]
  i572.color = new pc.Color(i573[16], i573[17], i573[18], i573[19])
  request.r(i573[20], i573[21], 0, i572, 'sprite')
  i572.flipX = !!i573[22]
  i572.flipY = !!i573[23]
  i572.drawMode = i573[24]
  i572.size = new pc.Vec2( i573[25], i573[26] )
  i572.tileMode = i573[27]
  i572.adaptiveModeThreshold = i573[28]
  i572.maskInteraction = i573[29]
  i572.spriteSortPoint = i573[30]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i579 = data
  i578.pivot = new pc.Vec2( i579[0], i579[1] )
  i578.anchorMin = new pc.Vec2( i579[2], i579[3] )
  i578.anchorMax = new pc.Vec2( i579[4], i579[5] )
  i578.sizeDelta = new pc.Vec2( i579[6], i579[7] )
  i578.anchoredPosition3D = new pc.Vec3( i579[8], i579[9], i579[10] )
  i578.rotation = new pc.Quat(i579[11], i579[12], i579[13], i579[14])
  i578.scale = new pc.Vec3( i579[15], i579[16], i579[17] )
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i581 = data
  i580.enabled = !!i581[0]
  i580.planeDistance = i581[1]
  i580.referencePixelsPerUnit = i581[2]
  i580.isFallbackOverlay = !!i581[3]
  i580.renderMode = i581[4]
  i580.renderOrder = i581[5]
  i580.sortingLayerName = i581[6]
  i580.sortingOrder = i581[7]
  i580.scaleFactor = i581[8]
  request.r(i581[9], i581[10], 0, i580, 'worldCamera')
  i580.overrideSorting = !!i581[11]
  i580.pixelPerfect = !!i581[12]
  i580.targetDisplay = i581[13]
  i580.overridePixelPerfect = !!i581[14]
  return i580
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i583 = data
  i582.m_UiScaleMode = i583[0]
  i582.m_ReferencePixelsPerUnit = i583[1]
  i582.m_ScaleFactor = i583[2]
  i582.m_ReferenceResolution = new pc.Vec2( i583[3], i583[4] )
  i582.m_ScreenMatchMode = i583[5]
  i582.m_MatchWidthOrHeight = i583[6]
  i582.m_PhysicalUnit = i583[7]
  i582.m_FallbackScreenDPI = i583[8]
  i582.m_DefaultSpriteDPI = i583[9]
  i582.m_DynamicPixelsPerUnit = i583[10]
  i582.m_PresetInfoIsWorld = !!i583[11]
  return i582
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i585 = data
  i584.m_IgnoreReversedGraphics = !!i585[0]
  i584.m_BlockingObjects = i585[1]
  i584.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i585[2] )
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i587 = data
  i586.cullTransparentMesh = !!i587[0]
  return i586
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.UI.Image' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'm_Sprite')
  i588.m_Type = i589[2]
  i588.m_PreserveAspect = !!i589[3]
  i588.m_FillCenter = !!i589[4]
  i588.m_FillMethod = i589[5]
  i588.m_FillAmount = i589[6]
  i588.m_FillClockwise = !!i589[7]
  i588.m_FillOrigin = i589[8]
  i588.m_UseSpriteMesh = !!i589[9]
  i588.m_PixelsPerUnitMultiplier = i589[10]
  request.r(i589[11], i589[12], 0, i588, 'm_Material')
  i588.m_Maskable = !!i589[13]
  i588.m_Color = new pc.Color(i589[14], i589[15], i589[16], i589[17])
  i588.m_RaycastTarget = !!i589[18]
  i588.m_RaycastPadding = new pc.Vec4( i589[19], i589[20], i589[21], i589[22] )
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i591 = data
  i590.m_Alpha = i591[0]
  i590.m_Interactable = !!i591[1]
  i590.m_BlocksRaycasts = !!i591[2]
  i590.m_IgnoreParentGroups = !!i591[3]
  i590.enabled = !!i591[4]
  return i590
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i592 = root || request.c( 'CanvasGroupAnimator' )
  var i593 = data
  request.r(i593[0], i593[1], 0, i592, 'canvasGroup')
  i592.animateFade = !!i593[2]
  i592.triggerOnStart = !!i593[3]
  i592.isLooping = !!i593[4]
  i592.fadeTo = i593[5]
  i592.fadeDuration = i593[6]
  i592.fadeEaseType = i593[7]
  return i592
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'animatorController')
  request.r(i619[2], i619[3], 0, i618, 'avatar')
  i618.updateMode = i619[4]
  i618.hasTransformHierarchy = !!i619[5]
  i618.applyRootMotion = !!i619[6]
  var i621 = i619[7]
  var i620 = []
  for(var i = 0; i < i621.length; i += 2) {
  request.r(i621[i + 0], i621[i + 1], 2, i620, '')
  }
  i618.humanBones = i620
  i618.enabled = !!i619[8]
  return i618
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.UI.Mask' )
  var i625 = data
  i624.m_ShowMaskGraphic = !!i625[0]
  return i624
}

Deserializers["DragToResizeLeft"] = function (request, data, root) {
  var i626 = root || request.c( 'DragToResizeLeft' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'target')
  i626.minWidth = i627[2]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i629 = data
  i628.playAutomatically = !!i629[0]
  request.r(i629[1], i629[2], 0, i628, 'clip')
  var i631 = i629[3]
  var i630 = []
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 2, i630, '')
  }
  i628.clips = i630
  i628.wrapMode = i629[4]
  i628.enabled = !!i629[5]
  return i628
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'm_FirstSelected')
  i634.m_sendNavigationEvents = !!i635[2]
  i634.m_DragThreshold = i635[3]
  return i634
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i637 = data
  i636.m_HorizontalAxis = i637[0]
  i636.m_VerticalAxis = i637[1]
  i636.m_SubmitButton = i637[2]
  i636.m_CancelButton = i637[3]
  i636.m_InputActionsPerSecond = i637[4]
  i636.m_RepeatDelay = i637[5]
  i636.m_ForceModuleActive = !!i637[6]
  i636.m_SendPointerHoverToParent = !!i637[7]
  return i636
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i638 = root || request.c( 'ButtonPulse' )
  var i639 = data
  i638.scaleAmount = i639[0]
  i638.pulseDuration = i639[1]
  return i638
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i640 = root || request.c( 'StartClickHandler' )
  var i641 = data
  return i640
}

Deserializers["GameManager"] = function (request, data, root) {
  var i642 = root || request.c( 'GameManager' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'endPanel')
  i642.end = !!i643[2]
  request.r(i643[3], i643[4], 0, i642, 'hand')
  i642.enableSound = !!i643[5]
  request.r(i643[6], i643[7], 0, i642, 'startClickHandler')
  i642.currentScore = i643[8]
  request.r(i643[9], i643[10], 0, i642, 'BodyToSummarize')
  request.r(i643[11], i643[12], 0, i642, 'SummarizedText')
  request.r(i643[13], i643[14], 0, i642, 'transcriptBtnBlue')
  request.r(i643[15], i643[16], 0, i642, 'transcriptBtn')
  request.r(i643[17], i643[18], 0, i642, 'summaryBtn')
  request.r(i643[19], i643[20], 0, i642, 'summaryBtnBlue')
  request.r(i643[21], i643[22], 0, i642, 'mainPanel')
  request.r(i643[23], i643[24], 0, i642, 'handle1')
  request.r(i643[25], i643[26], 0, i642, 'animator')
  request.r(i643[27], i643[28], 0, i642, 'maskA')
  request.r(i643[29], i643[30], 0, i642, 'filter')
  request.r(i643[31], i643[32], 0, i642, 'arrow')
  request.r(i643[33], i643[34], 0, i642, 'toTap')
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i645 = data
  i644.ambientIntensity = i645[0]
  i644.reflectionIntensity = i645[1]
  i644.ambientMode = i645[2]
  i644.ambientLight = new pc.Color(i645[3], i645[4], i645[5], i645[6])
  i644.ambientSkyColor = new pc.Color(i645[7], i645[8], i645[9], i645[10])
  i644.ambientGroundColor = new pc.Color(i645[11], i645[12], i645[13], i645[14])
  i644.ambientEquatorColor = new pc.Color(i645[15], i645[16], i645[17], i645[18])
  i644.fogColor = new pc.Color(i645[19], i645[20], i645[21], i645[22])
  i644.fogEndDistance = i645[23]
  i644.fogStartDistance = i645[24]
  i644.fogDensity = i645[25]
  i644.fog = !!i645[26]
  request.r(i645[27], i645[28], 0, i644, 'skybox')
  i644.fogMode = i645[29]
  var i647 = i645[30]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i647[i + 0]) );
  }
  i644.lightmaps = i646
  i644.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i645[31], i644.lightProbes)
  i644.lightmapsMode = i645[32]
  i644.mixedBakeMode = i645[33]
  i644.environmentLightingMode = i645[34]
  i644.ambientProbe = new pc.SphericalHarmonicsL2(i645[35])
  i644.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i645[36])
  i644.useReferenceAmbientProbe = !!i645[37]
  request.r(i645[38], i645[39], 0, i644, 'customReflection')
  request.r(i645[40], i645[41], 0, i644, 'defaultReflection')
  i644.defaultReflectionMode = i645[42]
  i644.defaultReflectionResolution = i645[43]
  i644.sunLightObjectId = i645[44]
  i644.pixelLightCount = i645[45]
  i644.defaultReflectionHDR = !!i645[46]
  i644.hasLightDataAsset = !!i645[47]
  i644.hasManualGenerate = !!i645[48]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'lightmapColor')
  request.r(i651[2], i651[3], 0, i650, 'lightmapDirection')
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i652 = root || new UnityEngine.LightProbes()
  var i653 = data
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i661 = data
  var i663 = i661[0]
  var i662 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i663.length; i += 1) {
    i662.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i663[i + 0]));
  }
  i660.ShaderCompilationErrors = i662
  i660.name = i661[1]
  i660.guid = i661[2]
  var i665 = i661[3]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( i665[i + 0] );
  }
  i660.shaderDefinedKeywords = i664
  var i667 = i661[4]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i667[i + 0]) );
  }
  i660.passes = i666
  var i669 = i661[5]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i669[i + 0]) );
  }
  i660.usePasses = i668
  var i671 = i661[6]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i671[i + 0]) );
  }
  i660.defaultParameterValues = i670
  request.r(i661[7], i661[8], 0, i660, 'unityFallbackShader')
  i660.readDepth = !!i661[9]
  i660.isCreatedByShaderGraph = !!i661[10]
  i660.compiled = !!i661[11]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i675 = data
  i674.shaderName = i675[0]
  i674.errorMessage = i675[1]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i680 = root || new pc.UnityShaderPass()
  var i681 = data
  i680.id = i681[0]
  i680.subShaderIndex = i681[1]
  i680.name = i681[2]
  i680.passType = i681[3]
  i680.grabPassTextureName = i681[4]
  i680.usePass = !!i681[5]
  i680.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[6], i680.zTest)
  i680.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[7], i680.zWrite)
  i680.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[8], i680.culling)
  i680.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i681[9], i680.blending)
  i680.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i681[10], i680.alphaBlending)
  i680.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[11], i680.colorWriteMask)
  i680.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[12], i680.offsetUnits)
  i680.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[13], i680.offsetFactor)
  i680.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[14], i680.stencilRef)
  i680.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[15], i680.stencilReadMask)
  i680.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[16], i680.stencilWriteMask)
  i680.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i681[17], i680.stencilOp)
  i680.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i681[18], i680.stencilOpFront)
  i680.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i681[19], i680.stencilOpBack)
  var i683 = i681[20]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i683[i + 0]) );
  }
  i680.tags = i682
  var i685 = i681[21]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( i685[i + 0] );
  }
  i680.passDefinedKeywords = i684
  var i687 = i681[22]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i687[i + 0]) );
  }
  i680.passDefinedKeywordGroups = i686
  var i689 = i681[23]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i689[i + 0]) );
  }
  i680.variants = i688
  var i691 = i681[24]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i691[i + 0]) );
  }
  i680.excludedVariants = i690
  i680.hasDepthReader = !!i681[25]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i693 = data
  i692.val = i693[0]
  i692.name = i693[1]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i695 = data
  i694.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[0], i694.src)
  i694.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[1], i694.dst)
  i694.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i695[2], i694.op)
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i697 = data
  i696.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[0], i696.pass)
  i696.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[1], i696.fail)
  i696.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[2], i696.zFail)
  i696.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[3], i696.comp)
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i701 = data
  i700.name = i701[0]
  i700.value = i701[1]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i705 = data
  var i707 = i705[0]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( i707[i + 0] );
  }
  i704.keywords = i706
  i704.hasDiscard = !!i705[1]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i711 = data
  i710.passId = i711[0]
  i710.subShaderIndex = i711[1]
  var i713 = i711[2]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( i713[i + 0] );
  }
  i710.keywords = i712
  i710.vertexProgram = i711[3]
  i710.fragmentProgram = i711[4]
  i710.exportedForWebGl2 = !!i711[5]
  i710.readDepth = !!i711[6]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'shader')
  i716.pass = i717[2]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i721 = data
  i720.name = i721[0]
  i720.type = i721[1]
  i720.value = new pc.Vec4( i721[2], i721[3], i721[4], i721[5] )
  i720.textureValue = i721[6]
  i720.shaderPropertyFlag = i721[7]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i723 = data
  i722.name = i723[0]
  request.r(i723[1], i723[2], 0, i722, 'texture')
  i722.aabb = i723[3]
  i722.vertices = i723[4]
  i722.triangles = i723[5]
  i722.textureRect = UnityEngine.Rect.MinMaxRect(i723[6], i723[7], i723[8], i723[9])
  i722.packedRect = UnityEngine.Rect.MinMaxRect(i723[10], i723[11], i723[12], i723[13])
  i722.border = new pc.Vec4( i723[14], i723[15], i723[16], i723[17] )
  i722.transparency = i723[18]
  i722.bounds = i723[19]
  i722.pixelsPerUnit = i723[20]
  i722.textureWidth = i723[21]
  i722.textureHeight = i723[22]
  i722.nativeSize = new pc.Vec2( i723[23], i723[24] )
  i722.pivot = new pc.Vec2( i723[25], i723[26] )
  i722.textureRectOffset = new pc.Vec2( i723[27], i723[28] )
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i725 = data
  i724.name = i725[0]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i727 = data
  i726.name = i727[0]
  i726.wrapMode = i727[1]
  i726.isLooping = !!i727[2]
  i726.length = i727[3]
  var i729 = i727[4]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i729[i + 0]) );
  }
  i726.curves = i728
  var i731 = i727[5]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i731[i + 0]) );
  }
  i726.events = i730
  i726.halfPrecision = !!i727[6]
  i726._frameRate = i727[7]
  i726.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i727[8], i726.localBounds)
  i726.hasMuscleCurves = !!i727[9]
  var i733 = i727[10]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( i733[i + 0] );
  }
  i726.clipMuscleConstant = i732
  i726.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i727[11], i726.clipBindingConstant)
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i737 = data
  i736.path = i737[0]
  i736.hash = i737[1]
  i736.componentType = i737[2]
  i736.property = i737[3]
  i736.keys = i737[4]
  var i739 = i737[5]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i739[i + 0]) );
  }
  i736.objectReferenceKeys = i738
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i743 = data
  i742.time = i743[0]
  request.r(i743[1], i743[2], 0, i742, 'value')
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i747 = data
  i746.functionName = i747[0]
  i746.floatParameter = i747[1]
  i746.intParameter = i747[2]
  i746.stringParameter = i747[3]
  request.r(i747[4], i747[5], 0, i746, 'objectReferenceParameter')
  i746.time = i747[6]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i749 = data
  i748.center = new pc.Vec3( i749[0], i749[1], i749[2] )
  i748.extends = new pc.Vec3( i749[3], i749[4], i749[5] )
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i753 = data
  var i755 = i753[0]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( i755[i + 0] );
  }
  i752.genericBindings = i754
  var i757 = i753[1]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( i757[i + 0] );
  }
  i752.pptrCurveMapping = i756
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i759 = data
  i758.name = i759[0]
  i758.ascent = i759[1]
  i758.originalLineHeight = i759[2]
  i758.fontSize = i759[3]
  var i761 = i759[4]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i761[i + 0]) );
  }
  i758.characterInfo = i760
  request.r(i759[5], i759[6], 0, i758, 'texture')
  i758.originalFontSize = i759[7]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i765 = data
  i764.index = i765[0]
  i764.advance = i765[1]
  i764.bearing = i765[2]
  i764.glyphWidth = i765[3]
  i764.glyphHeight = i765[4]
  i764.minX = i765[5]
  i764.maxX = i765[6]
  i764.minY = i765[7]
  i764.maxY = i765[8]
  i764.uvBottomLeftX = i765[9]
  i764.uvBottomLeftY = i765[10]
  i764.uvBottomRightX = i765[11]
  i764.uvBottomRightY = i765[12]
  i764.uvTopLeftX = i765[13]
  i764.uvTopLeftY = i765[14]
  i764.uvTopRightX = i765[15]
  i764.uvTopRightY = i765[16]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i767 = data
  i766.name = i767[0]
  var i769 = i767[1]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i769[i + 0]) );
  }
  i766.layers = i768
  var i771 = i767[2]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i771[i + 0]) );
  }
  i766.parameters = i770
  i766.animationClips = i767[3]
  i766.avatarUnsupported = i767[4]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i775 = data
  i774.name = i775[0]
  i774.defaultWeight = i775[1]
  i774.blendingMode = i775[2]
  i774.avatarMask = i775[3]
  i774.syncedLayerIndex = i775[4]
  i774.syncedLayerAffectsTiming = !!i775[5]
  i774.syncedLayers = i775[6]
  i774.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i775[7], i774.stateMachine)
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i777 = data
  i776.id = i777[0]
  i776.name = i777[1]
  i776.path = i777[2]
  var i779 = i777[3]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i779[i + 0]) );
  }
  i776.states = i778
  var i781 = i777[4]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i781[i + 0]) );
  }
  i776.machines = i780
  var i783 = i777[5]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i783[i + 0]) );
  }
  i776.entryStateTransitions = i782
  var i785 = i777[6]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i785[i + 0]) );
  }
  i776.exitStateTransitions = i784
  var i787 = i777[7]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i787[i + 0]) );
  }
  i776.anyStateTransitions = i786
  i776.defaultStateId = i777[8]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i791 = data
  i790.id = i791[0]
  i790.name = i791[1]
  i790.cycleOffset = i791[2]
  i790.cycleOffsetParameter = i791[3]
  i790.cycleOffsetParameterActive = !!i791[4]
  i790.mirror = !!i791[5]
  i790.mirrorParameter = i791[6]
  i790.mirrorParameterActive = !!i791[7]
  i790.motionId = i791[8]
  i790.nameHash = i791[9]
  i790.fullPathHash = i791[10]
  i790.speed = i791[11]
  i790.speedParameter = i791[12]
  i790.speedParameterActive = !!i791[13]
  i790.tag = i791[14]
  i790.tagHash = i791[15]
  i790.writeDefaultValues = !!i791[16]
  var i793 = i791[17]
  var i792 = []
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 2, i792, '')
  }
  i790.behaviours = i792
  var i795 = i791[18]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i795[i + 0]) );
  }
  i790.transitions = i794
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i801 = data
  i800.fullPath = i801[0]
  i800.canTransitionToSelf = !!i801[1]
  i800.duration = i801[2]
  i800.exitTime = i801[3]
  i800.hasExitTime = !!i801[4]
  i800.hasFixedDuration = !!i801[5]
  i800.interruptionSource = i801[6]
  i800.offset = i801[7]
  i800.orderedInterruption = !!i801[8]
  i800.destinationStateId = i801[9]
  i800.isExit = !!i801[10]
  i800.mute = !!i801[11]
  i800.solo = !!i801[12]
  var i803 = i801[13]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i803[i + 0]) );
  }
  i800.conditions = i802
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i809 = data
  i808.destinationStateId = i809[0]
  i808.isExit = !!i809[1]
  i808.mute = !!i809[2]
  i808.solo = !!i809[3]
  var i811 = i809[4]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i811[i + 0]) );
  }
  i808.conditions = i810
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i815 = data
  i814.defaultBool = !!i815[0]
  i814.defaultFloat = i815[1]
  i814.defaultInt = i815[2]
  i814.name = i815[3]
  i814.nameHash = i815[4]
  i814.type = i815[5]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i819 = data
  i818.mode = i819[0]
  i818.parameter = i819[1]
  i818.threshold = i819[2]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i821 = data
  i820.name = i821[0]
  i820.bytes64 = i821[1]
  i820.data = i821[2]
  return i820
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i822 = root || request.c( 'AudioLibrary' )
  var i823 = data
  var i825 = i823[0]
  var i824 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i825.length; i += 1) {
    i824.add(request.d('AudioLibrary+ClipEntry', i825[i + 0]));
  }
  i822.clips = i824
  return i822
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i828 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i829 = data
  i828.key = i829[0]
  i828.channel = i829[1]
  request.r(i829[2], i829[3], 0, i828, 'clip')
  i828.volume = i829[4]
  i828.loop = !!i829[5]
  return i828
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i830 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i831 = data
  i830.useSafeMode = !!i831[0]
  i830.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i831[1], i830.safeModeOptions)
  i830.timeScale = i831[2]
  i830.unscaledTimeScale = i831[3]
  i830.useSmoothDeltaTime = !!i831[4]
  i830.maxSmoothUnscaledTime = i831[5]
  i830.rewindCallbackMode = i831[6]
  i830.showUnityEditorReport = !!i831[7]
  i830.logBehaviour = i831[8]
  i830.drawGizmos = !!i831[9]
  i830.defaultRecyclable = !!i831[10]
  i830.defaultAutoPlay = i831[11]
  i830.defaultUpdateType = i831[12]
  i830.defaultTimeScaleIndependent = !!i831[13]
  i830.defaultEaseType = i831[14]
  i830.defaultEaseOvershootOrAmplitude = i831[15]
  i830.defaultEasePeriod = i831[16]
  i830.defaultAutoKill = !!i831[17]
  i830.defaultLoopType = i831[18]
  i830.debugMode = !!i831[19]
  i830.debugStoreTargetId = !!i831[20]
  i830.showPreviewPanel = !!i831[21]
  i830.storeSettingsLocation = i831[22]
  i830.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i831[23], i830.modules)
  i830.createASMDEF = !!i831[24]
  i830.showPlayingTweens = !!i831[25]
  i830.showPausedTweens = !!i831[26]
  return i830
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i832 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i833 = data
  i832.logBehaviour = i833[0]
  i832.nestedTweenFailureBehaviour = i833[1]
  return i832
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i834 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i835 = data
  i834.showPanel = !!i835[0]
  i834.audioEnabled = !!i835[1]
  i834.physicsEnabled = !!i835[2]
  i834.physics2DEnabled = !!i835[3]
  i834.spriteEnabled = !!i835[4]
  i834.uiEnabled = !!i835[5]
  i834.textMeshProEnabled = !!i835[6]
  i834.tk2DEnabled = !!i835[7]
  i834.deAudioEnabled = !!i835[8]
  i834.deUnityExtendedEnabled = !!i835[9]
  i834.epoOutlineEnabled = !!i835[10]
  return i834
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i836 = root || request.c( 'TMPro.TMP_Settings' )
  var i837 = data
  i836.m_enableWordWrapping = !!i837[0]
  i836.m_enableKerning = !!i837[1]
  i836.m_enableExtraPadding = !!i837[2]
  i836.m_enableTintAllSprites = !!i837[3]
  i836.m_enableParseEscapeCharacters = !!i837[4]
  i836.m_EnableRaycastTarget = !!i837[5]
  i836.m_GetFontFeaturesAtRuntime = !!i837[6]
  i836.m_missingGlyphCharacter = i837[7]
  i836.m_warningsDisabled = !!i837[8]
  request.r(i837[9], i837[10], 0, i836, 'm_defaultFontAsset')
  i836.m_defaultFontAssetPath = i837[11]
  i836.m_defaultFontSize = i837[12]
  i836.m_defaultAutoSizeMinRatio = i837[13]
  i836.m_defaultAutoSizeMaxRatio = i837[14]
  i836.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i837[15], i837[16] )
  i836.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i837[17], i837[18] )
  i836.m_autoSizeTextContainer = !!i837[19]
  i836.m_IsTextObjectScaleStatic = !!i837[20]
  var i839 = i837[21]
  var i838 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 1, i838, '')
  }
  i836.m_fallbackFontAssets = i838
  i836.m_matchMaterialPreset = !!i837[22]
  request.r(i837[23], i837[24], 0, i836, 'm_defaultSpriteAsset')
  i836.m_defaultSpriteAssetPath = i837[25]
  i836.m_enableEmojiSupport = !!i837[26]
  i836.m_MissingCharacterSpriteUnicode = i837[27]
  i836.m_defaultColorGradientPresetsPath = i837[28]
  request.r(i837[29], i837[30], 0, i836, 'm_defaultStyleSheet')
  i836.m_StyleSheetsResourcePath = i837[31]
  request.r(i837[32], i837[33], 0, i836, 'm_leadingCharacters')
  request.r(i837[34], i837[35], 0, i836, 'm_followingCharacters')
  i836.m_UseModernHangulLineBreakingRules = !!i837[36]
  return i836
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i842 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i843 = data
  i842.hashCode = i843[0]
  request.r(i843[1], i843[2], 0, i842, 'material')
  i842.materialHashCode = i843[3]
  request.r(i843[4], i843[5], 0, i842, 'atlas')
  i842.normalStyle = i843[6]
  i842.normalSpacingOffset = i843[7]
  i842.boldStyle = i843[8]
  i842.boldSpacing = i843[9]
  i842.italicStyle = i843[10]
  i842.tabSize = i843[11]
  i842.m_Version = i843[12]
  i842.m_SourceFontFileGUID = i843[13]
  request.r(i843[14], i843[15], 0, i842, 'm_SourceFontFile_EditorRef')
  request.r(i843[16], i843[17], 0, i842, 'm_SourceFontFile')
  i842.m_AtlasPopulationMode = i843[18]
  i842.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i843[19], i842.m_FaceInfo)
  var i845 = i843[20]
  var i844 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i845.length; i += 1) {
    i844.add(request.d('UnityEngine.TextCore.Glyph', i845[i + 0]));
  }
  i842.m_GlyphTable = i844
  var i847 = i843[21]
  var i846 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i847.length; i += 1) {
    i846.add(request.d('TMPro.TMP_Character', i847[i + 0]));
  }
  i842.m_CharacterTable = i846
  var i849 = i843[22]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i842.m_AtlasTextures = i848
  i842.m_AtlasTextureIndex = i843[23]
  i842.m_IsMultiAtlasTexturesEnabled = !!i843[24]
  i842.m_ClearDynamicDataOnBuild = !!i843[25]
  var i851 = i843[26]
  var i850 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i851.length; i += 1) {
    i850.add(request.d('UnityEngine.TextCore.GlyphRect', i851[i + 0]));
  }
  i842.m_UsedGlyphRects = i850
  var i853 = i843[27]
  var i852 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i853.length; i += 1) {
    i852.add(request.d('UnityEngine.TextCore.GlyphRect', i853[i + 0]));
  }
  i842.m_FreeGlyphRects = i852
  i842.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i843[28], i842.m_fontInfo)
  i842.m_AtlasWidth = i843[29]
  i842.m_AtlasHeight = i843[30]
  i842.m_AtlasPadding = i843[31]
  i842.m_AtlasRenderMode = i843[32]
  var i855 = i843[33]
  var i854 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i855.length; i += 1) {
    i854.add(request.d('TMPro.TMP_Glyph', i855[i + 0]));
  }
  i842.m_glyphInfoList = i854
  i842.m_KerningTable = request.d('TMPro.KerningTable', i843[34], i842.m_KerningTable)
  i842.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i843[35], i842.m_FontFeatureTable)
  var i857 = i843[36]
  var i856 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 1, i856, '')
  }
  i842.fallbackFontAssets = i856
  var i859 = i843[37]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 1, i858, '')
  }
  i842.m_FallbackFontAssetTable = i858
  i842.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i843[38], i842.m_CreationSettings)
  var i861 = i843[39]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('TMPro.TMP_FontWeightPair', i861[i + 0]) );
  }
  i842.m_FontWeightTable = i860
  var i863 = i843[40]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('TMPro.TMP_FontWeightPair', i863[i + 0]) );
  }
  i842.fontWeights = i862
  return i842
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i865 = data
  i864.m_FaceIndex = i865[0]
  i864.m_FamilyName = i865[1]
  i864.m_StyleName = i865[2]
  i864.m_PointSize = i865[3]
  i864.m_Scale = i865[4]
  i864.m_UnitsPerEM = i865[5]
  i864.m_LineHeight = i865[6]
  i864.m_AscentLine = i865[7]
  i864.m_CapLine = i865[8]
  i864.m_MeanLine = i865[9]
  i864.m_Baseline = i865[10]
  i864.m_DescentLine = i865[11]
  i864.m_SuperscriptOffset = i865[12]
  i864.m_SuperscriptSize = i865[13]
  i864.m_SubscriptOffset = i865[14]
  i864.m_SubscriptSize = i865[15]
  i864.m_UnderlineOffset = i865[16]
  i864.m_UnderlineThickness = i865[17]
  i864.m_StrikethroughOffset = i865[18]
  i864.m_StrikethroughThickness = i865[19]
  i864.m_TabWidth = i865[20]
  return i864
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i869 = data
  i868.m_Index = i869[0]
  i868.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i869[1], i868.m_Metrics)
  i868.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i869[2], i868.m_GlyphRect)
  i868.m_Scale = i869[3]
  i868.m_AtlasIndex = i869[4]
  i868.m_ClassDefinitionType = i869[5]
  return i868
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i871 = data
  i870.m_Width = i871[0]
  i870.m_Height = i871[1]
  i870.m_HorizontalBearingX = i871[2]
  i870.m_HorizontalBearingY = i871[3]
  i870.m_HorizontalAdvance = i871[4]
  return i870
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i873 = data
  i872.m_X = i873[0]
  i872.m_Y = i873[1]
  i872.m_Width = i873[2]
  i872.m_Height = i873[3]
  return i872
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i876 = root || request.c( 'TMPro.TMP_Character' )
  var i877 = data
  i876.m_ElementType = i877[0]
  i876.m_Unicode = i877[1]
  i876.m_GlyphIndex = i877[2]
  i876.m_Scale = i877[3]
  return i876
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i882 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i883 = data
  i882.Name = i883[0]
  i882.PointSize = i883[1]
  i882.Scale = i883[2]
  i882.CharacterCount = i883[3]
  i882.LineHeight = i883[4]
  i882.Baseline = i883[5]
  i882.Ascender = i883[6]
  i882.CapHeight = i883[7]
  i882.Descender = i883[8]
  i882.CenterLine = i883[9]
  i882.SuperscriptOffset = i883[10]
  i882.SubscriptOffset = i883[11]
  i882.SubSize = i883[12]
  i882.Underline = i883[13]
  i882.UnderlineThickness = i883[14]
  i882.strikethrough = i883[15]
  i882.strikethroughThickness = i883[16]
  i882.TabWidth = i883[17]
  i882.Padding = i883[18]
  i882.AtlasWidth = i883[19]
  i882.AtlasHeight = i883[20]
  return i882
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i886 = root || request.c( 'TMPro.TMP_Glyph' )
  var i887 = data
  i886.id = i887[0]
  i886.x = i887[1]
  i886.y = i887[2]
  i886.width = i887[3]
  i886.height = i887[4]
  i886.xOffset = i887[5]
  i886.yOffset = i887[6]
  i886.xAdvance = i887[7]
  i886.scale = i887[8]
  return i886
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i888 = root || request.c( 'TMPro.KerningTable' )
  var i889 = data
  var i891 = i889[0]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i891.length; i += 1) {
    i890.add(request.d('TMPro.KerningPair', i891[i + 0]));
  }
  i888.kerningPairs = i890
  return i888
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i894 = root || request.c( 'TMPro.KerningPair' )
  var i895 = data
  i894.xOffset = i895[0]
  i894.m_FirstGlyph = i895[1]
  i894.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i895[2], i894.m_FirstGlyphAdjustments)
  i894.m_SecondGlyph = i895[3]
  i894.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i895[4], i894.m_SecondGlyphAdjustments)
  i894.m_IgnoreSpacingAdjustments = !!i895[5]
  return i894
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i896 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i897 = data
  var i899 = i897[0]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i899.length; i += 1) {
    i898.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i899[i + 0]));
  }
  i896.m_GlyphPairAdjustmentRecords = i898
  return i896
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i902 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i903 = data
  i902.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i903[0], i902.m_FirstAdjustmentRecord)
  i902.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i903[1], i902.m_SecondAdjustmentRecord)
  i902.m_FeatureLookupFlags = i903[2]
  return i902
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i904 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i905 = data
  i904.m_GlyphIndex = i905[0]
  i904.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i905[1], i904.m_GlyphValueRecord)
  return i904
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i906 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i907 = data
  i906.m_XPlacement = i907[0]
  i906.m_YPlacement = i907[1]
  i906.m_XAdvance = i907[2]
  i906.m_YAdvance = i907[3]
  return i906
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i908 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i909 = data
  i908.sourceFontFileName = i909[0]
  i908.sourceFontFileGUID = i909[1]
  i908.pointSizeSamplingMode = i909[2]
  i908.pointSize = i909[3]
  i908.padding = i909[4]
  i908.packingMode = i909[5]
  i908.atlasWidth = i909[6]
  i908.atlasHeight = i909[7]
  i908.characterSetSelectionMode = i909[8]
  i908.characterSequence = i909[9]
  i908.referencedFontAssetGUID = i909[10]
  i908.referencedTextAssetGUID = i909[11]
  i908.fontStyle = i909[12]
  i908.fontStyleModifier = i909[13]
  i908.renderMode = i909[14]
  i908.includeFontFeatures = !!i909[15]
  return i908
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'regularTypeface')
  request.r(i913[2], i913[3], 0, i912, 'italicTypeface')
  return i912
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i914 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i915 = data
  i914.hashCode = i915[0]
  request.r(i915[1], i915[2], 0, i914, 'material')
  i914.materialHashCode = i915[3]
  request.r(i915[4], i915[5], 0, i914, 'spriteSheet')
  var i917 = i915[6]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i917.length; i += 1) {
    i916.add(request.d('TMPro.TMP_Sprite', i917[i + 0]));
  }
  i914.spriteInfoList = i916
  var i919 = i915[7]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 1, i918, '')
  }
  i914.fallbackSpriteAssets = i918
  i914.m_Version = i915[8]
  i914.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i915[9], i914.m_FaceInfo)
  var i921 = i915[10]
  var i920 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i921.length; i += 1) {
    i920.add(request.d('TMPro.TMP_SpriteCharacter', i921[i + 0]));
  }
  i914.m_SpriteCharacterTable = i920
  var i923 = i915[11]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i923.length; i += 1) {
    i922.add(request.d('TMPro.TMP_SpriteGlyph', i923[i + 0]));
  }
  i914.m_SpriteGlyphTable = i922
  return i914
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i926 = root || request.c( 'TMPro.TMP_Sprite' )
  var i927 = data
  i926.name = i927[0]
  i926.hashCode = i927[1]
  i926.unicode = i927[2]
  i926.pivot = new pc.Vec2( i927[3], i927[4] )
  request.r(i927[5], i927[6], 0, i926, 'sprite')
  i926.id = i927[7]
  i926.x = i927[8]
  i926.y = i927[9]
  i926.width = i927[10]
  i926.height = i927[11]
  i926.xOffset = i927[12]
  i926.yOffset = i927[13]
  i926.xAdvance = i927[14]
  i926.scale = i927[15]
  return i926
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i932 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i933 = data
  i932.m_Name = i933[0]
  i932.m_HashCode = i933[1]
  i932.m_ElementType = i933[2]
  i932.m_Unicode = i933[3]
  i932.m_GlyphIndex = i933[4]
  i932.m_Scale = i933[5]
  return i932
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i936 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'sprite')
  i936.m_Index = i937[2]
  i936.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i937[3], i936.m_Metrics)
  i936.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i937[4], i936.m_GlyphRect)
  i936.m_Scale = i937[5]
  i936.m_AtlasIndex = i937[6]
  i936.m_ClassDefinitionType = i937[7]
  return i936
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i939 = data
  var i941 = i939[0]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i941.length; i += 1) {
    i940.add(request.d('TMPro.TMP_Style', i941[i + 0]));
  }
  i938.m_StyleList = i940
  return i938
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i944 = root || request.c( 'TMPro.TMP_Style' )
  var i945 = data
  i944.m_Name = i945[0]
  i944.m_HashCode = i945[1]
  i944.m_OpeningDefinition = i945[2]
  i944.m_ClosingDefinition = i945[3]
  i944.m_OpeningTagArray = i945[4]
  i944.m_ClosingTagArray = i945[5]
  i944.m_OpeningTagUnicodeArray = i945[6]
  i944.m_ClosingTagUnicodeArray = i945[7]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i947 = data
  var i949 = i947[0]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i949[i + 0]) );
  }
  i946.files = i948
  i946.componentToPrefabIds = i947[1]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i953 = data
  i952.path = i953[0]
  request.r(i953[1], i953[2], 0, i952, 'unityObject')
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i955 = data
  var i957 = i955[0]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i957[i + 0]) );
  }
  i954.scriptsExecutionOrder = i956
  var i959 = i955[1]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i959[i + 0]) );
  }
  i954.sortingLayers = i958
  var i961 = i955[2]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i961[i + 0]) );
  }
  i954.cullingLayers = i960
  i954.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i955[3], i954.timeSettings)
  i954.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i955[4], i954.physicsSettings)
  i954.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i955[5], i954.physics2DSettings)
  i954.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i955[6], i954.qualitySettings)
  i954.enableRealtimeShadows = !!i955[7]
  i954.enableAutoInstancing = !!i955[8]
  i954.enableDynamicBatching = !!i955[9]
  i954.lightmapEncodingQuality = i955[10]
  i954.desiredColorSpace = i955[11]
  var i963 = i955[12]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( i963[i + 0] );
  }
  i954.allTags = i962
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i967 = data
  i966.name = i967[0]
  i966.value = i967[1]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i971 = data
  i970.id = i971[0]
  i970.name = i971[1]
  i970.value = i971[2]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i975 = data
  i974.id = i975[0]
  i974.name = i975[1]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i977 = data
  i976.fixedDeltaTime = i977[0]
  i976.maximumDeltaTime = i977[1]
  i976.timeScale = i977[2]
  i976.maximumParticleTimestep = i977[3]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i979 = data
  i978.gravity = new pc.Vec3( i979[0], i979[1], i979[2] )
  i978.defaultSolverIterations = i979[3]
  i978.bounceThreshold = i979[4]
  i978.autoSyncTransforms = !!i979[5]
  i978.autoSimulation = !!i979[6]
  var i981 = i979[7]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i981[i + 0]) );
  }
  i978.collisionMatrix = i980
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i985 = data
  i984.enabled = !!i985[0]
  i984.layerId = i985[1]
  i984.otherLayerId = i985[2]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'material')
  i986.gravity = new pc.Vec2( i987[2], i987[3] )
  i986.positionIterations = i987[4]
  i986.velocityIterations = i987[5]
  i986.velocityThreshold = i987[6]
  i986.maxLinearCorrection = i987[7]
  i986.maxAngularCorrection = i987[8]
  i986.maxTranslationSpeed = i987[9]
  i986.maxRotationSpeed = i987[10]
  i986.baumgarteScale = i987[11]
  i986.baumgarteTOIScale = i987[12]
  i986.timeToSleep = i987[13]
  i986.linearSleepTolerance = i987[14]
  i986.angularSleepTolerance = i987[15]
  i986.defaultContactOffset = i987[16]
  i986.autoSimulation = !!i987[17]
  i986.queriesHitTriggers = !!i987[18]
  i986.queriesStartInColliders = !!i987[19]
  i986.callbacksOnDisable = !!i987[20]
  i986.reuseCollisionCallbacks = !!i987[21]
  i986.autoSyncTransforms = !!i987[22]
  var i989 = i987[23]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i989[i + 0]) );
  }
  i986.collisionMatrix = i988
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i993 = data
  i992.enabled = !!i993[0]
  i992.layerId = i993[1]
  i992.otherLayerId = i993[2]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i995 = data
  var i997 = i995[0]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i997[i + 0]) );
  }
  i994.qualityLevels = i996
  var i999 = i995[1]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( i999[i + 0] );
  }
  i994.names = i998
  i994.shadows = i995[2]
  i994.anisotropicFiltering = i995[3]
  i994.antiAliasing = i995[4]
  i994.lodBias = i995[5]
  i994.shadowCascades = i995[6]
  i994.shadowDistance = i995[7]
  i994.shadowmaskMode = i995[8]
  i994.shadowProjection = i995[9]
  i994.shadowResolution = i995[10]
  i994.softParticles = !!i995[11]
  i994.softVegetation = !!i995[12]
  i994.activeColorSpace = i995[13]
  i994.desiredColorSpace = i995[14]
  i994.masterTextureLimit = i995[15]
  i994.maxQueuedFrames = i995[16]
  i994.particleRaycastBudget = i995[17]
  i994.pixelLightCount = i995[18]
  i994.realtimeReflectionProbes = !!i995[19]
  i994.shadowCascade2Split = i995[20]
  i994.shadowCascade4Split = new pc.Vec3( i995[21], i995[22], i995[23] )
  i994.streamingMipmapsActive = !!i995[24]
  i994.vSyncCount = i995[25]
  i994.asyncUploadBufferSize = i995[26]
  i994.asyncUploadTimeSlice = i995[27]
  i994.billboardsFaceCameraPosition = !!i995[28]
  i994.shadowNearPlaneOffset = i995[29]
  i994.streamingMipmapsMemoryBudget = i995[30]
  i994.maximumLODLevel = i995[31]
  i994.streamingMipmapsAddAllCameras = !!i995[32]
  i994.streamingMipmapsMaxLevelReduction = i995[33]
  i994.streamingMipmapsRenderersPerFrame = i995[34]
  i994.resolutionScalingFixedDPIFactor = i995[35]
  i994.streamingMipmapsMaxFileIORequests = i995[36]
  i994.currentQualityLevel = i995[37]
  return i994
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1002 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1003 = data
  i1002.xPlacement = i1003[0]
  i1002.yPlacement = i1003[1]
  i1002.xAdvance = i1003[2]
  i1002.yAdvance = i1003[3]
  return i1002
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[2],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[2],"77":[78],"79":[80],"81":[80],"13":[12],"5":[2],"27":[12],"82":[55],"83":[12],"84":[6],"85":[12],"86":[12],"16":[13],"18":[17,12],"87":[12],"15":[13],"88":[12],"89":[12],"23":[12],"90":[12],"91":[12],"92":[12],"93":[12],"26":[12],"94":[12],"95":[17,12],"96":[12],"97":[12],"98":[12],"99":[12],"100":[17,12],"101":[12],"102":[30],"103":[30],"31":[30],"104":[30],"105":[2],"106":[2],"107":[108],"109":[2],"110":[12],"111":[78,12],"112":[12,17],"113":[12],"114":[17,12],"115":[78],"116":[17,12],"117":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAspectFitter","UnityEngine.SpriteRenderer","AudioManager","AudioLibrary","TaskManager","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.CanvasGroup","CanvasGroupAnimator","UnityEngine.UI.Button","GameManager","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Mask","DragToResizeLeft","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ButtonPulse","StartClickHandler","UnityEngine.GameObject","UnityEngine.Texture2D","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bullet","UIHorizontalDraggable","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "core2d";

Deserializers.lunaInitializationTime = "08/14/2025 11:33:59";

Deserializers.lunaDaysRunning = "5.8";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "KeyPoints_Mip";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4292";

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

Deserializers.buildID = "3c5ed710-994f-4ac7-82ab-24bc1ac0bb3c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


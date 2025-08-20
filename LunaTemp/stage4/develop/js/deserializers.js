var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.JointSpring' )
  var i511 = data
  i510.spring = i511[0]
  i510.damper = i511[1]
  i510.targetPosition = i511[2]
  return i510
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.JointMotor' )
  var i513 = data
  i512.m_TargetVelocity = i513[0]
  i512.m_Force = i513[1]
  i512.m_FreeSpin = i513[2]
  return i512
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.JointLimits' )
  var i515 = data
  i514.m_Min = i515[0]
  i514.m_Max = i515[1]
  i514.m_Bounciness = i515[2]
  i514.m_BounceMinVelocity = i515[3]
  i514.m_ContactDistance = i515[4]
  i514.minBounce = i515[5]
  i514.maxBounce = i515[6]
  return i514
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.JointDrive' )
  var i517 = data
  i516.m_PositionSpring = i517[0]
  i516.m_PositionDamper = i517[1]
  i516.m_MaximumForce = i517[2]
  i516.m_UseAcceleration = i517[3]
  return i516
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i519 = data
  i518.m_Spring = i519[0]
  i518.m_Damper = i519[1]
  return i518
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i521 = data
  i520.m_Limit = i521[0]
  i520.m_Bounciness = i521[1]
  i520.m_ContactDistance = i521[2]
  return i520
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i523 = data
  i522.m_ExtremumSlip = i523[0]
  i522.m_ExtremumValue = i523[1]
  i522.m_AsymptoteSlip = i523[2]
  i522.m_AsymptoteValue = i523[3]
  i522.m_Stiffness = i523[4]
  return i522
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i525 = data
  i524.m_LowerAngle = i525[0]
  i524.m_UpperAngle = i525[1]
  return i524
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i527 = data
  i526.m_MotorSpeed = i527[0]
  i526.m_MaximumMotorTorque = i527[1]
  return i526
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i529 = data
  i528.m_DampingRatio = i529[0]
  i528.m_Frequency = i529[1]
  i528.m_Angle = i529[2]
  return i528
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i531 = data
  i530.m_LowerTranslation = i531[0]
  i530.m_UpperTranslation = i531[1]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i532 = root || new pc.UnityMaterial()
  var i533 = data
  i532.name = i533[0]
  request.r(i533[1], i533[2], 0, i532, 'shader')
  i532.renderQueue = i533[3]
  i532.enableInstancing = !!i533[4]
  var i535 = i533[5]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i535[i + 0]) );
  }
  i532.floatParameters = i534
  var i537 = i533[6]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i537[i + 0]) );
  }
  i532.colorParameters = i536
  var i539 = i533[7]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i539[i + 0]) );
  }
  i532.vectorParameters = i538
  var i541 = i533[8]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i541[i + 0]) );
  }
  i532.textureParameters = i540
  var i543 = i533[9]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i543[i + 0]) );
  }
  i532.materialFlags = i542
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i547 = data
  i546.name = i547[0]
  i546.value = i547[1]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i551 = data
  i550.name = i551[0]
  i550.value = new pc.Color(i551[1], i551[2], i551[3], i551[4])
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i555 = data
  i554.name = i555[0]
  i554.value = new pc.Vec4( i555[1], i555[2], i555[3], i555[4] )
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i559 = data
  i558.name = i559[0]
  request.r(i559[1], i559[2], 0, i558, 'value')
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i563 = data
  i562.name = i563[0]
  i562.enabled = !!i563[1]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i565 = data
  i564.name = i565[0]
  i564.width = i565[1]
  i564.height = i565[2]
  i564.mipmapCount = i565[3]
  i564.anisoLevel = i565[4]
  i564.filterMode = i565[5]
  i564.hdr = !!i565[6]
  i564.format = i565[7]
  i564.wrapMode = i565[8]
  i564.alphaIsTransparency = !!i565[9]
  i564.alphaSource = i565[10]
  i564.graphicsFormat = i565[11]
  i564.sRGBTexture = !!i565[12]
  i564.desiredColorSpace = i565[13]
  i564.wrapU = i565[14]
  i564.wrapV = i565[15]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i567 = data
  i566.name = i567[0]
  i566.index = i567[1]
  i566.startup = !!i567[2]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i569 = data
  i568.position = new pc.Vec3( i569[0], i569[1], i569[2] )
  i568.scale = new pc.Vec3( i569[3], i569[4], i569[5] )
  i568.rotation = new pc.Quat(i569[6], i569[7], i569[8], i569[9])
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i571 = data
  i570.enabled = !!i571[0]
  i570.aspect = i571[1]
  i570.orthographic = !!i571[2]
  i570.orthographicSize = i571[3]
  i570.backgroundColor = new pc.Color(i571[4], i571[5], i571[6], i571[7])
  i570.nearClipPlane = i571[8]
  i570.farClipPlane = i571[9]
  i570.fieldOfView = i571[10]
  i570.depth = i571[11]
  i570.clearFlags = i571[12]
  i570.cullingMask = i571[13]
  i570.rect = i571[14]
  request.r(i571[15], i571[16], 0, i570, 'targetTexture')
  i570.usePhysicalProperties = !!i571[17]
  i570.focalLength = i571[18]
  i570.sensorSize = new pc.Vec2( i571[19], i571[20] )
  i570.lensShift = new pc.Vec2( i571[21], i571[22] )
  i570.gateFit = i571[23]
  i570.commandBufferCount = i571[24]
  i570.cameraType = i571[25]
  return i570
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i572 = root || request.c( 'CameraAspectFitter' )
  var i573 = data
  request.r(i573[0], i573[1], 0, i572, 'targetSprite')
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i575 = data
  i574.name = i575[0]
  i574.tagId = i575[1]
  i574.enabled = !!i575[2]
  i574.isStatic = !!i575[3]
  i574.layer = i575[4]
  return i574
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i576 = root || request.c( 'AudioManager' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'library')
  i576.sfxPoolSize = i577[2]
  return i576
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i578 = root || request.c( 'TaskManager' )
  var i579 = data
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i581 = data
  i580.enabled = !!i581[0]
  request.r(i581[1], i581[2], 0, i580, 'sharedMaterial')
  var i583 = i581[3]
  var i582 = []
  for(var i = 0; i < i583.length; i += 2) {
  request.r(i583[i + 0], i583[i + 1], 2, i582, '')
  }
  i580.sharedMaterials = i582
  i580.receiveShadows = !!i581[4]
  i580.shadowCastingMode = i581[5]
  i580.sortingLayerID = i581[6]
  i580.sortingOrder = i581[7]
  i580.lightmapIndex = i581[8]
  i580.lightmapSceneIndex = i581[9]
  i580.lightmapScaleOffset = new pc.Vec4( i581[10], i581[11], i581[12], i581[13] )
  i580.lightProbeUsage = i581[14]
  i580.reflectionProbeUsage = i581[15]
  i580.color = new pc.Color(i581[16], i581[17], i581[18], i581[19])
  request.r(i581[20], i581[21], 0, i580, 'sprite')
  i580.flipX = !!i581[22]
  i580.flipY = !!i581[23]
  i580.drawMode = i581[24]
  i580.size = new pc.Vec2( i581[25], i581[26] )
  i580.tileMode = i581[27]
  i580.adaptiveModeThreshold = i581[28]
  i580.maskInteraction = i581[29]
  i580.spriteSortPoint = i581[30]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i587 = data
  i586.pivot = new pc.Vec2( i587[0], i587[1] )
  i586.anchorMin = new pc.Vec2( i587[2], i587[3] )
  i586.anchorMax = new pc.Vec2( i587[4], i587[5] )
  i586.sizeDelta = new pc.Vec2( i587[6], i587[7] )
  i586.anchoredPosition3D = new pc.Vec3( i587[8], i587[9], i587[10] )
  i586.rotation = new pc.Quat(i587[11], i587[12], i587[13], i587[14])
  i586.scale = new pc.Vec3( i587[15], i587[16], i587[17] )
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i589 = data
  i588.enabled = !!i589[0]
  i588.planeDistance = i589[1]
  i588.referencePixelsPerUnit = i589[2]
  i588.isFallbackOverlay = !!i589[3]
  i588.renderMode = i589[4]
  i588.renderOrder = i589[5]
  i588.sortingLayerName = i589[6]
  i588.sortingOrder = i589[7]
  i588.scaleFactor = i589[8]
  request.r(i589[9], i589[10], 0, i588, 'worldCamera')
  i588.overrideSorting = !!i589[11]
  i588.pixelPerfect = !!i589[12]
  i588.targetDisplay = i589[13]
  i588.overridePixelPerfect = !!i589[14]
  return i588
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i591 = data
  i590.m_UiScaleMode = i591[0]
  i590.m_ReferencePixelsPerUnit = i591[1]
  i590.m_ScaleFactor = i591[2]
  i590.m_ReferenceResolution = new pc.Vec2( i591[3], i591[4] )
  i590.m_ScreenMatchMode = i591[5]
  i590.m_MatchWidthOrHeight = i591[6]
  i590.m_PhysicalUnit = i591[7]
  i590.m_FallbackScreenDPI = i591[8]
  i590.m_DefaultSpriteDPI = i591[9]
  i590.m_DynamicPixelsPerUnit = i591[10]
  i590.m_PresetInfoIsWorld = !!i591[11]
  return i590
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i593 = data
  i592.m_IgnoreReversedGraphics = !!i593[0]
  i592.m_BlockingObjects = i593[1]
  i592.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i593[2] )
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i595 = data
  i594.cullTransparentMesh = !!i595[0]
  return i594
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.UI.Image' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'm_Sprite')
  i596.m_Type = i597[2]
  i596.m_PreserveAspect = !!i597[3]
  i596.m_FillCenter = !!i597[4]
  i596.m_FillMethod = i597[5]
  i596.m_FillAmount = i597[6]
  i596.m_FillClockwise = !!i597[7]
  i596.m_FillOrigin = i597[8]
  i596.m_UseSpriteMesh = !!i597[9]
  i596.m_PixelsPerUnitMultiplier = i597[10]
  request.r(i597[11], i597[12], 0, i596, 'm_Material')
  i596.m_Maskable = !!i597[13]
  i596.m_Color = new pc.Color(i597[14], i597[15], i597[16], i597[17])
  i596.m_RaycastTarget = !!i597[18]
  i596.m_RaycastPadding = new pc.Vec4( i597[19], i597[20], i597[21], i597[22] )
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i599 = data
  i598.m_Alpha = i599[0]
  i598.m_Interactable = !!i599[1]
  i598.m_BlocksRaycasts = !!i599[2]
  i598.m_IgnoreParentGroups = !!i599[3]
  i598.enabled = !!i599[4]
  return i598
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i600 = root || request.c( 'CanvasGroupAnimator' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, 'canvasGroup')
  i600.animateFade = !!i601[2]
  i600.triggerOnStart = !!i601[3]
  i600.isLooping = !!i601[4]
  i600.fadeTo = i601[5]
  i600.fadeDuration = i601[6]
  i600.fadeEaseType = i601[7]
  return i600
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.UI.Button' )
  var i603 = data
  i602.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i603[0], i602.m_OnClick)
  i602.m_Navigation = request.d('UnityEngine.UI.Navigation', i603[1], i602.m_Navigation)
  i602.m_Transition = i603[2]
  i602.m_Colors = request.d('UnityEngine.UI.ColorBlock', i603[3], i602.m_Colors)
  i602.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i603[4], i602.m_SpriteState)
  i602.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i603[5], i602.m_AnimationTriggers)
  i602.m_Interactable = !!i603[6]
  request.r(i603[7], i603[8], 0, i602, 'm_TargetGraphic')
  return i602
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i605 = data
  i604.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i605[0], i604.m_PersistentCalls)
  return i604
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i607 = data
  var i609 = i607[0]
  var i608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i609.length; i += 1) {
    i608.add(request.d('UnityEngine.Events.PersistentCall', i609[i + 0]));
  }
  i606.m_Calls = i608
  return i606
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'm_Target')
  i612.m_TargetAssemblyTypeName = i613[2]
  i612.m_MethodName = i613[3]
  i612.m_Mode = i613[4]
  i612.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i613[5], i612.m_Arguments)
  i612.m_CallState = i613[6]
  return i612
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'm_ObjectArgument')
  i614.m_ObjectArgumentAssemblyTypeName = i615[2]
  i614.m_IntArgument = i615[3]
  i614.m_FloatArgument = i615[4]
  i614.m_StringArgument = i615[5]
  i614.m_BoolArgument = !!i615[6]
  return i614
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i617 = data
  i616.m_Mode = i617[0]
  i616.m_WrapAround = !!i617[1]
  request.r(i617[2], i617[3], 0, i616, 'm_SelectOnUp')
  request.r(i617[4], i617[5], 0, i616, 'm_SelectOnDown')
  request.r(i617[6], i617[7], 0, i616, 'm_SelectOnLeft')
  request.r(i617[8], i617[9], 0, i616, 'm_SelectOnRight')
  return i616
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i619 = data
  i618.m_NormalColor = new pc.Color(i619[0], i619[1], i619[2], i619[3])
  i618.m_HighlightedColor = new pc.Color(i619[4], i619[5], i619[6], i619[7])
  i618.m_PressedColor = new pc.Color(i619[8], i619[9], i619[10], i619[11])
  i618.m_SelectedColor = new pc.Color(i619[12], i619[13], i619[14], i619[15])
  i618.m_DisabledColor = new pc.Color(i619[16], i619[17], i619[18], i619[19])
  i618.m_ColorMultiplier = i619[20]
  i618.m_FadeDuration = i619[21]
  return i618
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'm_HighlightedSprite')
  request.r(i621[2], i621[3], 0, i620, 'm_PressedSprite')
  request.r(i621[4], i621[5], 0, i620, 'm_SelectedSprite')
  request.r(i621[6], i621[7], 0, i620, 'm_DisabledSprite')
  return i620
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i623 = data
  i622.m_NormalTrigger = i623[0]
  i622.m_HighlightedTrigger = i623[1]
  i622.m_PressedTrigger = i623[2]
  i622.m_SelectedTrigger = i623[3]
  i622.m_DisabledTrigger = i623[4]
  return i622
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i625 = data
  i624.m_Spacing = i625[0]
  i624.m_ChildForceExpandWidth = !!i625[1]
  i624.m_ChildForceExpandHeight = !!i625[2]
  i624.m_ChildControlWidth = !!i625[3]
  i624.m_ChildControlHeight = !!i625[4]
  i624.m_ChildScaleWidth = !!i625[5]
  i624.m_ChildScaleHeight = !!i625[6]
  i624.m_ReverseArrangement = !!i625[7]
  i624.m_Padding = UnityEngine.RectOffset.FromPaddings(i625[8], i625[9], i625[10], i625[11])
  i624.m_ChildAlignment = i625[12]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'animatorController')
  request.r(i627[2], i627[3], 0, i626, 'avatar')
  i626.updateMode = i627[4]
  i626.hasTransformHierarchy = !!i627[5]
  i626.applyRootMotion = !!i627[6]
  var i629 = i627[7]
  var i628 = []
  for(var i = 0; i < i629.length; i += 2) {
  request.r(i629[i + 0], i629[i + 1], 2, i628, '')
  }
  i626.humanBones = i628
  i626.enabled = !!i627[8]
  return i626
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i632 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i633 = data
  i632.m_hasFontAssetChanged = !!i633[0]
  request.r(i633[1], i633[2], 0, i632, 'm_baseMaterial')
  i632.m_maskOffset = new pc.Vec4( i633[3], i633[4], i633[5], i633[6] )
  i632.m_text = i633[7]
  i632.m_isRightToLeft = !!i633[8]
  request.r(i633[9], i633[10], 0, i632, 'm_fontAsset')
  request.r(i633[11], i633[12], 0, i632, 'm_sharedMaterial')
  var i635 = i633[13]
  var i634 = []
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 2, i634, '')
  }
  i632.m_fontSharedMaterials = i634
  request.r(i633[14], i633[15], 0, i632, 'm_fontMaterial')
  var i637 = i633[16]
  var i636 = []
  for(var i = 0; i < i637.length; i += 2) {
  request.r(i637[i + 0], i637[i + 1], 2, i636, '')
  }
  i632.m_fontMaterials = i636
  i632.m_fontColor32 = UnityEngine.Color32.ConstructColor(i633[17], i633[18], i633[19], i633[20])
  i632.m_fontColor = new pc.Color(i633[21], i633[22], i633[23], i633[24])
  i632.m_enableVertexGradient = !!i633[25]
  i632.m_colorMode = i633[26]
  i632.m_fontColorGradient = request.d('TMPro.VertexGradient', i633[27], i632.m_fontColorGradient)
  request.r(i633[28], i633[29], 0, i632, 'm_fontColorGradientPreset')
  request.r(i633[30], i633[31], 0, i632, 'm_spriteAsset')
  i632.m_tintAllSprites = !!i633[32]
  request.r(i633[33], i633[34], 0, i632, 'm_StyleSheet')
  i632.m_TextStyleHashCode = i633[35]
  i632.m_overrideHtmlColors = !!i633[36]
  i632.m_faceColor = UnityEngine.Color32.ConstructColor(i633[37], i633[38], i633[39], i633[40])
  i632.m_fontSize = i633[41]
  i632.m_fontSizeBase = i633[42]
  i632.m_fontWeight = i633[43]
  i632.m_enableAutoSizing = !!i633[44]
  i632.m_fontSizeMin = i633[45]
  i632.m_fontSizeMax = i633[46]
  i632.m_fontStyle = i633[47]
  i632.m_HorizontalAlignment = i633[48]
  i632.m_VerticalAlignment = i633[49]
  i632.m_textAlignment = i633[50]
  i632.m_characterSpacing = i633[51]
  i632.m_wordSpacing = i633[52]
  i632.m_lineSpacing = i633[53]
  i632.m_lineSpacingMax = i633[54]
  i632.m_paragraphSpacing = i633[55]
  i632.m_charWidthMaxAdj = i633[56]
  i632.m_enableWordWrapping = !!i633[57]
  i632.m_wordWrappingRatios = i633[58]
  i632.m_overflowMode = i633[59]
  request.r(i633[60], i633[61], 0, i632, 'm_linkedTextComponent')
  request.r(i633[62], i633[63], 0, i632, 'parentLinkedComponent')
  i632.m_enableKerning = !!i633[64]
  i632.m_enableExtraPadding = !!i633[65]
  i632.checkPaddingRequired = !!i633[66]
  i632.m_isRichText = !!i633[67]
  i632.m_parseCtrlCharacters = !!i633[68]
  i632.m_isOrthographic = !!i633[69]
  i632.m_isCullingEnabled = !!i633[70]
  i632.m_horizontalMapping = i633[71]
  i632.m_verticalMapping = i633[72]
  i632.m_uvLineOffset = i633[73]
  i632.m_geometrySortingOrder = i633[74]
  i632.m_IsTextObjectScaleStatic = !!i633[75]
  i632.m_VertexBufferAutoSizeReduction = !!i633[76]
  i632.m_useMaxVisibleDescender = !!i633[77]
  i632.m_pageToDisplay = i633[78]
  i632.m_margin = new pc.Vec4( i633[79], i633[80], i633[81], i633[82] )
  i632.m_isUsingLegacyAnimationComponent = !!i633[83]
  i632.m_isVolumetricText = !!i633[84]
  request.r(i633[85], i633[86], 0, i632, 'm_Material')
  i632.m_Maskable = !!i633[87]
  i632.m_Color = new pc.Color(i633[88], i633[89], i633[90], i633[91])
  i632.m_RaycastTarget = !!i633[92]
  i632.m_RaycastPadding = new pc.Vec4( i633[93], i633[94], i633[95], i633[96] )
  return i632
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i638 = root || request.c( 'TMPro.VertexGradient' )
  var i639 = data
  i638.topLeft = new pc.Color(i639[0], i639[1], i639[2], i639[3])
  i638.topRight = new pc.Color(i639[4], i639[5], i639[6], i639[7])
  i638.bottomLeft = new pc.Color(i639[8], i639[9], i639[10], i639[11])
  i638.bottomRight = new pc.Color(i639[12], i639[13], i639[14], i639[15])
  return i638
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.UI.Mask' )
  var i641 = data
  i640.m_ShowMaskGraphic = !!i641[0]
  return i640
}

Deserializers["DragToResizeLeft"] = function (request, data, root) {
  var i642 = root || request.c( 'DragToResizeLeft' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'target')
  i642.minWidth = i643[2]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i645 = data
  i644.playAutomatically = !!i645[0]
  request.r(i645[1], i645[2], 0, i644, 'clip')
  var i647 = i645[3]
  var i646 = []
  for(var i = 0; i < i647.length; i += 2) {
  request.r(i647[i + 0], i647[i + 1], 2, i646, '')
  }
  i644.clips = i646
  i644.wrapMode = i645[4]
  i644.enabled = !!i645[5]
  return i644
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'm_FirstSelected')
  i650.m_sendNavigationEvents = !!i651[2]
  i650.m_DragThreshold = i651[3]
  return i650
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i653 = data
  i652.m_HorizontalAxis = i653[0]
  i652.m_VerticalAxis = i653[1]
  i652.m_SubmitButton = i653[2]
  i652.m_CancelButton = i653[3]
  i652.m_InputActionsPerSecond = i653[4]
  i652.m_RepeatDelay = i653[5]
  i652.m_ForceModuleActive = !!i653[6]
  i652.m_SendPointerHoverToParent = !!i653[7]
  return i652
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i654 = root || request.c( 'ButtonPulse' )
  var i655 = data
  i654.scaleAmount = i655[0]
  i654.pulseDuration = i655[1]
  return i654
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i656 = root || request.c( 'StartClickHandler' )
  var i657 = data
  return i656
}

Deserializers["GameManager"] = function (request, data, root) {
  var i658 = root || request.c( 'GameManager' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'endPanel')
  i658.end = !!i659[2]
  request.r(i659[3], i659[4], 0, i658, 'hand')
  i658.enableSound = !!i659[5]
  request.r(i659[6], i659[7], 0, i658, 'startClickHandler')
  i658.currentScore = i659[8]
  request.r(i659[9], i659[10], 0, i658, 'TextToSummarize')
  request.r(i659[11], i659[12], 0, i658, 'SummarizedText')
  request.r(i659[13], i659[14], 0, i658, 'transcriptBtnBlue')
  request.r(i659[15], i659[16], 0, i658, 'transcriptBtn')
  request.r(i659[17], i659[18], 0, i658, 'summaryBtn')
  request.r(i659[19], i659[20], 0, i658, 'summaryBtnBlue')
  request.r(i659[21], i659[22], 0, i658, 'mainPanel')
  request.r(i659[23], i659[24], 0, i658, 'handle1')
  request.r(i659[25], i659[26], 0, i658, 'animator')
  request.r(i659[27], i659[28], 0, i658, 'maskA')
  request.r(i659[29], i659[30], 0, i658, 'filter')
  request.r(i659[31], i659[32], 0, i658, 'arrow')
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i661 = data
  i660.ambientIntensity = i661[0]
  i660.reflectionIntensity = i661[1]
  i660.ambientMode = i661[2]
  i660.ambientLight = new pc.Color(i661[3], i661[4], i661[5], i661[6])
  i660.ambientSkyColor = new pc.Color(i661[7], i661[8], i661[9], i661[10])
  i660.ambientGroundColor = new pc.Color(i661[11], i661[12], i661[13], i661[14])
  i660.ambientEquatorColor = new pc.Color(i661[15], i661[16], i661[17], i661[18])
  i660.fogColor = new pc.Color(i661[19], i661[20], i661[21], i661[22])
  i660.fogEndDistance = i661[23]
  i660.fogStartDistance = i661[24]
  i660.fogDensity = i661[25]
  i660.fog = !!i661[26]
  request.r(i661[27], i661[28], 0, i660, 'skybox')
  i660.fogMode = i661[29]
  var i663 = i661[30]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i663[i + 0]) );
  }
  i660.lightmaps = i662
  i660.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i661[31], i660.lightProbes)
  i660.lightmapsMode = i661[32]
  i660.mixedBakeMode = i661[33]
  i660.environmentLightingMode = i661[34]
  i660.ambientProbe = new pc.SphericalHarmonicsL2(i661[35])
  i660.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i661[36])
  i660.useReferenceAmbientProbe = !!i661[37]
  request.r(i661[38], i661[39], 0, i660, 'customReflection')
  request.r(i661[40], i661[41], 0, i660, 'defaultReflection')
  i660.defaultReflectionMode = i661[42]
  i660.defaultReflectionResolution = i661[43]
  i660.sunLightObjectId = i661[44]
  i660.pixelLightCount = i661[45]
  i660.defaultReflectionHDR = !!i661[46]
  i660.hasLightDataAsset = !!i661[47]
  i660.hasManualGenerate = !!i661[48]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'lightmapColor')
  request.r(i667[2], i667[3], 0, i666, 'lightmapDirection')
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i668 = root || new UnityEngine.LightProbes()
  var i669 = data
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i677 = data
  var i679 = i677[0]
  var i678 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i679.length; i += 1) {
    i678.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i679[i + 0]));
  }
  i676.ShaderCompilationErrors = i678
  i676.name = i677[1]
  i676.guid = i677[2]
  var i681 = i677[3]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( i681[i + 0] );
  }
  i676.shaderDefinedKeywords = i680
  var i683 = i677[4]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i683[i + 0]) );
  }
  i676.passes = i682
  var i685 = i677[5]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i685[i + 0]) );
  }
  i676.usePasses = i684
  var i687 = i677[6]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i687[i + 0]) );
  }
  i676.defaultParameterValues = i686
  request.r(i677[7], i677[8], 0, i676, 'unityFallbackShader')
  i676.readDepth = !!i677[9]
  i676.isCreatedByShaderGraph = !!i677[10]
  i676.compiled = !!i677[11]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i691 = data
  i690.shaderName = i691[0]
  i690.errorMessage = i691[1]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i696 = root || new pc.UnityShaderPass()
  var i697 = data
  i696.id = i697[0]
  i696.subShaderIndex = i697[1]
  i696.name = i697[2]
  i696.passType = i697[3]
  i696.grabPassTextureName = i697[4]
  i696.usePass = !!i697[5]
  i696.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[6], i696.zTest)
  i696.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[7], i696.zWrite)
  i696.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[8], i696.culling)
  i696.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i697[9], i696.blending)
  i696.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i697[10], i696.alphaBlending)
  i696.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[11], i696.colorWriteMask)
  i696.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[12], i696.offsetUnits)
  i696.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[13], i696.offsetFactor)
  i696.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[14], i696.stencilRef)
  i696.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[15], i696.stencilReadMask)
  i696.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i697[16], i696.stencilWriteMask)
  i696.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i697[17], i696.stencilOp)
  i696.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i697[18], i696.stencilOpFront)
  i696.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i697[19], i696.stencilOpBack)
  var i699 = i697[20]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i699[i + 0]) );
  }
  i696.tags = i698
  var i701 = i697[21]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( i701[i + 0] );
  }
  i696.passDefinedKeywords = i700
  var i703 = i697[22]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i703[i + 0]) );
  }
  i696.passDefinedKeywordGroups = i702
  var i705 = i697[23]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i705[i + 0]) );
  }
  i696.variants = i704
  var i707 = i697[24]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i707[i + 0]) );
  }
  i696.excludedVariants = i706
  i696.hasDepthReader = !!i697[25]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i709 = data
  i708.val = i709[0]
  i708.name = i709[1]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i711 = data
  i710.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[0], i710.src)
  i710.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[1], i710.dst)
  i710.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i711[2], i710.op)
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i713 = data
  i712.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[0], i712.pass)
  i712.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[1], i712.fail)
  i712.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[2], i712.zFail)
  i712.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[3], i712.comp)
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i717 = data
  i716.name = i717[0]
  i716.value = i717[1]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i721 = data
  var i723 = i721[0]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( i723[i + 0] );
  }
  i720.keywords = i722
  i720.hasDiscard = !!i721[1]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i727 = data
  i726.passId = i727[0]
  i726.subShaderIndex = i727[1]
  var i729 = i727[2]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( i729[i + 0] );
  }
  i726.keywords = i728
  i726.vertexProgram = i727[3]
  i726.fragmentProgram = i727[4]
  i726.exportedForWebGl2 = !!i727[5]
  i726.readDepth = !!i727[6]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'shader')
  i732.pass = i733[2]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i737 = data
  i736.name = i737[0]
  i736.type = i737[1]
  i736.value = new pc.Vec4( i737[2], i737[3], i737[4], i737[5] )
  i736.textureValue = i737[6]
  i736.shaderPropertyFlag = i737[7]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i739 = data
  i738.name = i739[0]
  request.r(i739[1], i739[2], 0, i738, 'texture')
  i738.aabb = i739[3]
  i738.vertices = i739[4]
  i738.triangles = i739[5]
  i738.textureRect = UnityEngine.Rect.MinMaxRect(i739[6], i739[7], i739[8], i739[9])
  i738.packedRect = UnityEngine.Rect.MinMaxRect(i739[10], i739[11], i739[12], i739[13])
  i738.border = new pc.Vec4( i739[14], i739[15], i739[16], i739[17] )
  i738.transparency = i739[18]
  i738.bounds = i739[19]
  i738.pixelsPerUnit = i739[20]
  i738.textureWidth = i739[21]
  i738.textureHeight = i739[22]
  i738.nativeSize = new pc.Vec2( i739[23], i739[24] )
  i738.pivot = new pc.Vec2( i739[25], i739[26] )
  i738.textureRectOffset = new pc.Vec2( i739[27], i739[28] )
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i741 = data
  i740.name = i741[0]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i743 = data
  i742.name = i743[0]
  i742.wrapMode = i743[1]
  i742.isLooping = !!i743[2]
  i742.length = i743[3]
  var i745 = i743[4]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i745[i + 0]) );
  }
  i742.curves = i744
  var i747 = i743[5]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i747[i + 0]) );
  }
  i742.events = i746
  i742.halfPrecision = !!i743[6]
  i742._frameRate = i743[7]
  i742.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i743[8], i742.localBounds)
  i742.hasMuscleCurves = !!i743[9]
  var i749 = i743[10]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( i749[i + 0] );
  }
  i742.clipMuscleConstant = i748
  i742.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i743[11], i742.clipBindingConstant)
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i753 = data
  i752.path = i753[0]
  i752.hash = i753[1]
  i752.componentType = i753[2]
  i752.property = i753[3]
  i752.keys = i753[4]
  var i755 = i753[5]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i755[i + 0]) );
  }
  i752.objectReferenceKeys = i754
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i759 = data
  i758.time = i759[0]
  request.r(i759[1], i759[2], 0, i758, 'value')
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i763 = data
  i762.functionName = i763[0]
  i762.floatParameter = i763[1]
  i762.intParameter = i763[2]
  i762.stringParameter = i763[3]
  request.r(i763[4], i763[5], 0, i762, 'objectReferenceParameter')
  i762.time = i763[6]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i765 = data
  i764.center = new pc.Vec3( i765[0], i765[1], i765[2] )
  i764.extends = new pc.Vec3( i765[3], i765[4], i765[5] )
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i769 = data
  var i771 = i769[0]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( i771[i + 0] );
  }
  i768.genericBindings = i770
  var i773 = i769[1]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( i773[i + 0] );
  }
  i768.pptrCurveMapping = i772
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i775 = data
  i774.name = i775[0]
  i774.ascent = i775[1]
  i774.originalLineHeight = i775[2]
  i774.fontSize = i775[3]
  var i777 = i775[4]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i777[i + 0]) );
  }
  i774.characterInfo = i776
  request.r(i775[5], i775[6], 0, i774, 'texture')
  i774.originalFontSize = i775[7]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i781 = data
  i780.index = i781[0]
  i780.advance = i781[1]
  i780.bearing = i781[2]
  i780.glyphWidth = i781[3]
  i780.glyphHeight = i781[4]
  i780.minX = i781[5]
  i780.maxX = i781[6]
  i780.minY = i781[7]
  i780.maxY = i781[8]
  i780.uvBottomLeftX = i781[9]
  i780.uvBottomLeftY = i781[10]
  i780.uvBottomRightX = i781[11]
  i780.uvBottomRightY = i781[12]
  i780.uvTopLeftX = i781[13]
  i780.uvTopLeftY = i781[14]
  i780.uvTopRightX = i781[15]
  i780.uvTopRightY = i781[16]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i783 = data
  i782.name = i783[0]
  var i785 = i783[1]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i785[i + 0]) );
  }
  i782.layers = i784
  var i787 = i783[2]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i787[i + 0]) );
  }
  i782.parameters = i786
  i782.animationClips = i783[3]
  i782.avatarUnsupported = i783[4]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i791 = data
  i790.name = i791[0]
  i790.defaultWeight = i791[1]
  i790.blendingMode = i791[2]
  i790.avatarMask = i791[3]
  i790.syncedLayerIndex = i791[4]
  i790.syncedLayerAffectsTiming = !!i791[5]
  i790.syncedLayers = i791[6]
  i790.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i791[7], i790.stateMachine)
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i793 = data
  i792.id = i793[0]
  i792.name = i793[1]
  i792.path = i793[2]
  var i795 = i793[3]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i795[i + 0]) );
  }
  i792.states = i794
  var i797 = i793[4]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i797[i + 0]) );
  }
  i792.machines = i796
  var i799 = i793[5]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i799[i + 0]) );
  }
  i792.entryStateTransitions = i798
  var i801 = i793[6]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i801[i + 0]) );
  }
  i792.exitStateTransitions = i800
  var i803 = i793[7]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i803[i + 0]) );
  }
  i792.anyStateTransitions = i802
  i792.defaultStateId = i793[8]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i807 = data
  i806.id = i807[0]
  i806.name = i807[1]
  i806.cycleOffset = i807[2]
  i806.cycleOffsetParameter = i807[3]
  i806.cycleOffsetParameterActive = !!i807[4]
  i806.mirror = !!i807[5]
  i806.mirrorParameter = i807[6]
  i806.mirrorParameterActive = !!i807[7]
  i806.motionId = i807[8]
  i806.nameHash = i807[9]
  i806.fullPathHash = i807[10]
  i806.speed = i807[11]
  i806.speedParameter = i807[12]
  i806.speedParameterActive = !!i807[13]
  i806.tag = i807[14]
  i806.tagHash = i807[15]
  i806.writeDefaultValues = !!i807[16]
  var i809 = i807[17]
  var i808 = []
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 2, i808, '')
  }
  i806.behaviours = i808
  var i811 = i807[18]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i811[i + 0]) );
  }
  i806.transitions = i810
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i817 = data
  i816.fullPath = i817[0]
  i816.canTransitionToSelf = !!i817[1]
  i816.duration = i817[2]
  i816.exitTime = i817[3]
  i816.hasExitTime = !!i817[4]
  i816.hasFixedDuration = !!i817[5]
  i816.interruptionSource = i817[6]
  i816.offset = i817[7]
  i816.orderedInterruption = !!i817[8]
  i816.destinationStateId = i817[9]
  i816.isExit = !!i817[10]
  i816.mute = !!i817[11]
  i816.solo = !!i817[12]
  var i819 = i817[13]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i819[i + 0]) );
  }
  i816.conditions = i818
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i825 = data
  i824.destinationStateId = i825[0]
  i824.isExit = !!i825[1]
  i824.mute = !!i825[2]
  i824.solo = !!i825[3]
  var i827 = i825[4]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i827[i + 0]) );
  }
  i824.conditions = i826
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i831 = data
  i830.defaultBool = !!i831[0]
  i830.defaultFloat = i831[1]
  i830.defaultInt = i831[2]
  i830.name = i831[3]
  i830.nameHash = i831[4]
  i830.type = i831[5]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i835 = data
  i834.mode = i835[0]
  i834.parameter = i835[1]
  i834.threshold = i835[2]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i837 = data
  i836.name = i837[0]
  i836.bytes64 = i837[1]
  i836.data = i837[2]
  return i836
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i838 = root || request.c( 'AudioLibrary' )
  var i839 = data
  var i841 = i839[0]
  var i840 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i841.length; i += 1) {
    i840.add(request.d('AudioLibrary+ClipEntry', i841[i + 0]));
  }
  i838.clips = i840
  return i838
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i844 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i845 = data
  i844.key = i845[0]
  i844.channel = i845[1]
  request.r(i845[2], i845[3], 0, i844, 'clip')
  i844.volume = i845[4]
  i844.loop = !!i845[5]
  return i844
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i846 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i847 = data
  i846.hashCode = i847[0]
  request.r(i847[1], i847[2], 0, i846, 'material')
  i846.materialHashCode = i847[3]
  request.r(i847[4], i847[5], 0, i846, 'atlas')
  i846.normalStyle = i847[6]
  i846.normalSpacingOffset = i847[7]
  i846.boldStyle = i847[8]
  i846.boldSpacing = i847[9]
  i846.italicStyle = i847[10]
  i846.tabSize = i847[11]
  i846.m_Version = i847[12]
  i846.m_SourceFontFileGUID = i847[13]
  request.r(i847[14], i847[15], 0, i846, 'm_SourceFontFile_EditorRef')
  request.r(i847[16], i847[17], 0, i846, 'm_SourceFontFile')
  i846.m_AtlasPopulationMode = i847[18]
  i846.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i847[19], i846.m_FaceInfo)
  var i849 = i847[20]
  var i848 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i849.length; i += 1) {
    i848.add(request.d('UnityEngine.TextCore.Glyph', i849[i + 0]));
  }
  i846.m_GlyphTable = i848
  var i851 = i847[21]
  var i850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i851.length; i += 1) {
    i850.add(request.d('TMPro.TMP_Character', i851[i + 0]));
  }
  i846.m_CharacterTable = i850
  var i853 = i847[22]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i846.m_AtlasTextures = i852
  i846.m_AtlasTextureIndex = i847[23]
  i846.m_IsMultiAtlasTexturesEnabled = !!i847[24]
  i846.m_ClearDynamicDataOnBuild = !!i847[25]
  var i855 = i847[26]
  var i854 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i855.length; i += 1) {
    i854.add(request.d('UnityEngine.TextCore.GlyphRect', i855[i + 0]));
  }
  i846.m_UsedGlyphRects = i854
  var i857 = i847[27]
  var i856 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i857.length; i += 1) {
    i856.add(request.d('UnityEngine.TextCore.GlyphRect', i857[i + 0]));
  }
  i846.m_FreeGlyphRects = i856
  i846.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i847[28], i846.m_fontInfo)
  i846.m_AtlasWidth = i847[29]
  i846.m_AtlasHeight = i847[30]
  i846.m_AtlasPadding = i847[31]
  i846.m_AtlasRenderMode = i847[32]
  var i859 = i847[33]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i859.length; i += 1) {
    i858.add(request.d('TMPro.TMP_Glyph', i859[i + 0]));
  }
  i846.m_glyphInfoList = i858
  i846.m_KerningTable = request.d('TMPro.KerningTable', i847[34], i846.m_KerningTable)
  i846.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i847[35], i846.m_FontFeatureTable)
  var i861 = i847[36]
  var i860 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 1, i860, '')
  }
  i846.fallbackFontAssets = i860
  var i863 = i847[37]
  var i862 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 1, i862, '')
  }
  i846.m_FallbackFontAssetTable = i862
  i846.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i847[38], i846.m_CreationSettings)
  var i865 = i847[39]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('TMPro.TMP_FontWeightPair', i865[i + 0]) );
  }
  i846.m_FontWeightTable = i864
  var i867 = i847[40]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('TMPro.TMP_FontWeightPair', i867[i + 0]) );
  }
  i846.fontWeights = i866
  return i846
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i869 = data
  i868.m_FaceIndex = i869[0]
  i868.m_FamilyName = i869[1]
  i868.m_StyleName = i869[2]
  i868.m_PointSize = i869[3]
  i868.m_Scale = i869[4]
  i868.m_UnitsPerEM = i869[5]
  i868.m_LineHeight = i869[6]
  i868.m_AscentLine = i869[7]
  i868.m_CapLine = i869[8]
  i868.m_MeanLine = i869[9]
  i868.m_Baseline = i869[10]
  i868.m_DescentLine = i869[11]
  i868.m_SuperscriptOffset = i869[12]
  i868.m_SuperscriptSize = i869[13]
  i868.m_SubscriptOffset = i869[14]
  i868.m_SubscriptSize = i869[15]
  i868.m_UnderlineOffset = i869[16]
  i868.m_UnderlineThickness = i869[17]
  i868.m_StrikethroughOffset = i869[18]
  i868.m_StrikethroughThickness = i869[19]
  i868.m_TabWidth = i869[20]
  return i868
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i873 = data
  i872.m_Index = i873[0]
  i872.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i873[1], i872.m_Metrics)
  i872.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i873[2], i872.m_GlyphRect)
  i872.m_Scale = i873[3]
  i872.m_AtlasIndex = i873[4]
  i872.m_ClassDefinitionType = i873[5]
  return i872
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i875 = data
  i874.m_Width = i875[0]
  i874.m_Height = i875[1]
  i874.m_HorizontalBearingX = i875[2]
  i874.m_HorizontalBearingY = i875[3]
  i874.m_HorizontalAdvance = i875[4]
  return i874
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i877 = data
  i876.m_X = i877[0]
  i876.m_Y = i877[1]
  i876.m_Width = i877[2]
  i876.m_Height = i877[3]
  return i876
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i880 = root || request.c( 'TMPro.TMP_Character' )
  var i881 = data
  i880.m_ElementType = i881[0]
  i880.m_Unicode = i881[1]
  i880.m_GlyphIndex = i881[2]
  i880.m_Scale = i881[3]
  return i880
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i886 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i887 = data
  i886.Name = i887[0]
  i886.PointSize = i887[1]
  i886.Scale = i887[2]
  i886.CharacterCount = i887[3]
  i886.LineHeight = i887[4]
  i886.Baseline = i887[5]
  i886.Ascender = i887[6]
  i886.CapHeight = i887[7]
  i886.Descender = i887[8]
  i886.CenterLine = i887[9]
  i886.SuperscriptOffset = i887[10]
  i886.SubscriptOffset = i887[11]
  i886.SubSize = i887[12]
  i886.Underline = i887[13]
  i886.UnderlineThickness = i887[14]
  i886.strikethrough = i887[15]
  i886.strikethroughThickness = i887[16]
  i886.TabWidth = i887[17]
  i886.Padding = i887[18]
  i886.AtlasWidth = i887[19]
  i886.AtlasHeight = i887[20]
  return i886
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i890 = root || request.c( 'TMPro.TMP_Glyph' )
  var i891 = data
  i890.id = i891[0]
  i890.x = i891[1]
  i890.y = i891[2]
  i890.width = i891[3]
  i890.height = i891[4]
  i890.xOffset = i891[5]
  i890.yOffset = i891[6]
  i890.xAdvance = i891[7]
  i890.scale = i891[8]
  return i890
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i892 = root || request.c( 'TMPro.KerningTable' )
  var i893 = data
  var i895 = i893[0]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(request.d('TMPro.KerningPair', i895[i + 0]));
  }
  i892.kerningPairs = i894
  return i892
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i898 = root || request.c( 'TMPro.KerningPair' )
  var i899 = data
  i898.xOffset = i899[0]
  i898.m_FirstGlyph = i899[1]
  i898.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i899[2], i898.m_FirstGlyphAdjustments)
  i898.m_SecondGlyph = i899[3]
  i898.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i899[4], i898.m_SecondGlyphAdjustments)
  i898.m_IgnoreSpacingAdjustments = !!i899[5]
  return i898
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i900 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i901 = data
  var i903 = i901[0]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i903.length; i += 1) {
    i902.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i903[i + 0]));
  }
  i900.m_GlyphPairAdjustmentRecords = i902
  return i900
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i906 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i907 = data
  i906.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i907[0], i906.m_FirstAdjustmentRecord)
  i906.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i907[1], i906.m_SecondAdjustmentRecord)
  i906.m_FeatureLookupFlags = i907[2]
  return i906
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i908 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i909 = data
  i908.m_GlyphIndex = i909[0]
  i908.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i909[1], i908.m_GlyphValueRecord)
  return i908
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i910 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i911 = data
  i910.m_XPlacement = i911[0]
  i910.m_YPlacement = i911[1]
  i910.m_XAdvance = i911[2]
  i910.m_YAdvance = i911[3]
  return i910
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i914 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i915 = data
  i914.sourceFontFileName = i915[0]
  i914.sourceFontFileGUID = i915[1]
  i914.pointSizeSamplingMode = i915[2]
  i914.pointSize = i915[3]
  i914.padding = i915[4]
  i914.packingMode = i915[5]
  i914.atlasWidth = i915[6]
  i914.atlasHeight = i915[7]
  i914.characterSetSelectionMode = i915[8]
  i914.characterSequence = i915[9]
  i914.referencedFontAssetGUID = i915[10]
  i914.referencedTextAssetGUID = i915[11]
  i914.fontStyle = i915[12]
  i914.fontStyleModifier = i915[13]
  i914.renderMode = i915[14]
  i914.includeFontFeatures = !!i915[15]
  return i914
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i918 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'regularTypeface')
  request.r(i919[2], i919[3], 0, i918, 'italicTypeface')
  return i918
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i920 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i921 = data
  i920.useSafeMode = !!i921[0]
  i920.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i921[1], i920.safeModeOptions)
  i920.timeScale = i921[2]
  i920.unscaledTimeScale = i921[3]
  i920.useSmoothDeltaTime = !!i921[4]
  i920.maxSmoothUnscaledTime = i921[5]
  i920.rewindCallbackMode = i921[6]
  i920.showUnityEditorReport = !!i921[7]
  i920.logBehaviour = i921[8]
  i920.drawGizmos = !!i921[9]
  i920.defaultRecyclable = !!i921[10]
  i920.defaultAutoPlay = i921[11]
  i920.defaultUpdateType = i921[12]
  i920.defaultTimeScaleIndependent = !!i921[13]
  i920.defaultEaseType = i921[14]
  i920.defaultEaseOvershootOrAmplitude = i921[15]
  i920.defaultEasePeriod = i921[16]
  i920.defaultAutoKill = !!i921[17]
  i920.defaultLoopType = i921[18]
  i920.debugMode = !!i921[19]
  i920.debugStoreTargetId = !!i921[20]
  i920.showPreviewPanel = !!i921[21]
  i920.storeSettingsLocation = i921[22]
  i920.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i921[23], i920.modules)
  i920.createASMDEF = !!i921[24]
  i920.showPlayingTweens = !!i921[25]
  i920.showPausedTweens = !!i921[26]
  return i920
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i922 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i923 = data
  i922.logBehaviour = i923[0]
  i922.nestedTweenFailureBehaviour = i923[1]
  return i922
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i924 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i925 = data
  i924.showPanel = !!i925[0]
  i924.audioEnabled = !!i925[1]
  i924.physicsEnabled = !!i925[2]
  i924.physics2DEnabled = !!i925[3]
  i924.spriteEnabled = !!i925[4]
  i924.uiEnabled = !!i925[5]
  i924.textMeshProEnabled = !!i925[6]
  i924.tk2DEnabled = !!i925[7]
  i924.deAudioEnabled = !!i925[8]
  i924.deUnityExtendedEnabled = !!i925[9]
  i924.epoOutlineEnabled = !!i925[10]
  return i924
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i926 = root || request.c( 'TMPro.TMP_Settings' )
  var i927 = data
  i926.m_enableWordWrapping = !!i927[0]
  i926.m_enableKerning = !!i927[1]
  i926.m_enableExtraPadding = !!i927[2]
  i926.m_enableTintAllSprites = !!i927[3]
  i926.m_enableParseEscapeCharacters = !!i927[4]
  i926.m_EnableRaycastTarget = !!i927[5]
  i926.m_GetFontFeaturesAtRuntime = !!i927[6]
  i926.m_missingGlyphCharacter = i927[7]
  i926.m_warningsDisabled = !!i927[8]
  request.r(i927[9], i927[10], 0, i926, 'm_defaultFontAsset')
  i926.m_defaultFontAssetPath = i927[11]
  i926.m_defaultFontSize = i927[12]
  i926.m_defaultAutoSizeMinRatio = i927[13]
  i926.m_defaultAutoSizeMaxRatio = i927[14]
  i926.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i927[15], i927[16] )
  i926.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i927[17], i927[18] )
  i926.m_autoSizeTextContainer = !!i927[19]
  i926.m_IsTextObjectScaleStatic = !!i927[20]
  var i929 = i927[21]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 1, i928, '')
  }
  i926.m_fallbackFontAssets = i928
  i926.m_matchMaterialPreset = !!i927[22]
  request.r(i927[23], i927[24], 0, i926, 'm_defaultSpriteAsset')
  i926.m_defaultSpriteAssetPath = i927[25]
  i926.m_enableEmojiSupport = !!i927[26]
  i926.m_MissingCharacterSpriteUnicode = i927[27]
  i926.m_defaultColorGradientPresetsPath = i927[28]
  request.r(i927[29], i927[30], 0, i926, 'm_defaultStyleSheet')
  i926.m_StyleSheetsResourcePath = i927[31]
  request.r(i927[32], i927[33], 0, i926, 'm_leadingCharacters')
  request.r(i927[34], i927[35], 0, i926, 'm_followingCharacters')
  i926.m_UseModernHangulLineBreakingRules = !!i927[36]
  return i926
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i930 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i931 = data
  i930.hashCode = i931[0]
  request.r(i931[1], i931[2], 0, i930, 'material')
  i930.materialHashCode = i931[3]
  request.r(i931[4], i931[5], 0, i930, 'spriteSheet')
  var i933 = i931[6]
  var i932 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i933.length; i += 1) {
    i932.add(request.d('TMPro.TMP_Sprite', i933[i + 0]));
  }
  i930.spriteInfoList = i932
  var i935 = i931[7]
  var i934 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 1, i934, '')
  }
  i930.fallbackSpriteAssets = i934
  i930.m_Version = i931[8]
  i930.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i931[9], i930.m_FaceInfo)
  var i937 = i931[10]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i937.length; i += 1) {
    i936.add(request.d('TMPro.TMP_SpriteCharacter', i937[i + 0]));
  }
  i930.m_SpriteCharacterTable = i936
  var i939 = i931[11]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i939.length; i += 1) {
    i938.add(request.d('TMPro.TMP_SpriteGlyph', i939[i + 0]));
  }
  i930.m_SpriteGlyphTable = i938
  return i930
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.TMP_Sprite' )
  var i943 = data
  i942.name = i943[0]
  i942.hashCode = i943[1]
  i942.unicode = i943[2]
  i942.pivot = new pc.Vec2( i943[3], i943[4] )
  request.r(i943[5], i943[6], 0, i942, 'sprite')
  i942.id = i943[7]
  i942.x = i943[8]
  i942.y = i943[9]
  i942.width = i943[10]
  i942.height = i943[11]
  i942.xOffset = i943[12]
  i942.yOffset = i943[13]
  i942.xAdvance = i943[14]
  i942.scale = i943[15]
  return i942
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i948 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i949 = data
  i948.m_Name = i949[0]
  i948.m_HashCode = i949[1]
  i948.m_ElementType = i949[2]
  i948.m_Unicode = i949[3]
  i948.m_GlyphIndex = i949[4]
  i948.m_Scale = i949[5]
  return i948
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i952 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'sprite')
  i952.m_Index = i953[2]
  i952.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i953[3], i952.m_Metrics)
  i952.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i953[4], i952.m_GlyphRect)
  i952.m_Scale = i953[5]
  i952.m_AtlasIndex = i953[6]
  i952.m_ClassDefinitionType = i953[7]
  return i952
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i955 = data
  var i957 = i955[0]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i957.length; i += 1) {
    i956.add(request.d('TMPro.TMP_Style', i957[i + 0]));
  }
  i954.m_StyleList = i956
  return i954
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i960 = root || request.c( 'TMPro.TMP_Style' )
  var i961 = data
  i960.m_Name = i961[0]
  i960.m_HashCode = i961[1]
  i960.m_OpeningDefinition = i961[2]
  i960.m_ClosingDefinition = i961[3]
  i960.m_OpeningTagArray = i961[4]
  i960.m_ClosingTagArray = i961[5]
  i960.m_OpeningTagUnicodeArray = i961[6]
  i960.m_ClosingTagUnicodeArray = i961[7]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i963 = data
  var i965 = i963[0]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i965[i + 0]) );
  }
  i962.files = i964
  i962.componentToPrefabIds = i963[1]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i969 = data
  i968.path = i969[0]
  request.r(i969[1], i969[2], 0, i968, 'unityObject')
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i971 = data
  var i973 = i971[0]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i973[i + 0]) );
  }
  i970.scriptsExecutionOrder = i972
  var i975 = i971[1]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i975[i + 0]) );
  }
  i970.sortingLayers = i974
  var i977 = i971[2]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i977[i + 0]) );
  }
  i970.cullingLayers = i976
  i970.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i971[3], i970.timeSettings)
  i970.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i971[4], i970.physicsSettings)
  i970.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i971[5], i970.physics2DSettings)
  i970.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i971[6], i970.qualitySettings)
  i970.enableRealtimeShadows = !!i971[7]
  i970.enableAutoInstancing = !!i971[8]
  i970.enableDynamicBatching = !!i971[9]
  i970.lightmapEncodingQuality = i971[10]
  i970.desiredColorSpace = i971[11]
  var i979 = i971[12]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( i979[i + 0] );
  }
  i970.allTags = i978
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i983 = data
  i982.name = i983[0]
  i982.value = i983[1]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i987 = data
  i986.id = i987[0]
  i986.name = i987[1]
  i986.value = i987[2]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i991 = data
  i990.id = i991[0]
  i990.name = i991[1]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i993 = data
  i992.fixedDeltaTime = i993[0]
  i992.maximumDeltaTime = i993[1]
  i992.timeScale = i993[2]
  i992.maximumParticleTimestep = i993[3]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i995 = data
  i994.gravity = new pc.Vec3( i995[0], i995[1], i995[2] )
  i994.defaultSolverIterations = i995[3]
  i994.bounceThreshold = i995[4]
  i994.autoSyncTransforms = !!i995[5]
  i994.autoSimulation = !!i995[6]
  var i997 = i995[7]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i997[i + 0]) );
  }
  i994.collisionMatrix = i996
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1001 = data
  i1000.enabled = !!i1001[0]
  i1000.layerId = i1001[1]
  i1000.otherLayerId = i1001[2]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'material')
  i1002.gravity = new pc.Vec2( i1003[2], i1003[3] )
  i1002.positionIterations = i1003[4]
  i1002.velocityIterations = i1003[5]
  i1002.velocityThreshold = i1003[6]
  i1002.maxLinearCorrection = i1003[7]
  i1002.maxAngularCorrection = i1003[8]
  i1002.maxTranslationSpeed = i1003[9]
  i1002.maxRotationSpeed = i1003[10]
  i1002.baumgarteScale = i1003[11]
  i1002.baumgarteTOIScale = i1003[12]
  i1002.timeToSleep = i1003[13]
  i1002.linearSleepTolerance = i1003[14]
  i1002.angularSleepTolerance = i1003[15]
  i1002.defaultContactOffset = i1003[16]
  i1002.autoSimulation = !!i1003[17]
  i1002.queriesHitTriggers = !!i1003[18]
  i1002.queriesStartInColliders = !!i1003[19]
  i1002.callbacksOnDisable = !!i1003[20]
  i1002.reuseCollisionCallbacks = !!i1003[21]
  i1002.autoSyncTransforms = !!i1003[22]
  var i1005 = i1003[23]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1005[i + 0]) );
  }
  i1002.collisionMatrix = i1004
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1009 = data
  i1008.enabled = !!i1009[0]
  i1008.layerId = i1009[1]
  i1008.otherLayerId = i1009[2]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1011 = data
  var i1013 = i1011[0]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1013[i + 0]) );
  }
  i1010.qualityLevels = i1012
  var i1015 = i1011[1]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( i1015[i + 0] );
  }
  i1010.names = i1014
  i1010.shadows = i1011[2]
  i1010.anisotropicFiltering = i1011[3]
  i1010.antiAliasing = i1011[4]
  i1010.lodBias = i1011[5]
  i1010.shadowCascades = i1011[6]
  i1010.shadowDistance = i1011[7]
  i1010.shadowmaskMode = i1011[8]
  i1010.shadowProjection = i1011[9]
  i1010.shadowResolution = i1011[10]
  i1010.softParticles = !!i1011[11]
  i1010.softVegetation = !!i1011[12]
  i1010.activeColorSpace = i1011[13]
  i1010.desiredColorSpace = i1011[14]
  i1010.masterTextureLimit = i1011[15]
  i1010.maxQueuedFrames = i1011[16]
  i1010.particleRaycastBudget = i1011[17]
  i1010.pixelLightCount = i1011[18]
  i1010.realtimeReflectionProbes = !!i1011[19]
  i1010.shadowCascade2Split = i1011[20]
  i1010.shadowCascade4Split = new pc.Vec3( i1011[21], i1011[22], i1011[23] )
  i1010.streamingMipmapsActive = !!i1011[24]
  i1010.vSyncCount = i1011[25]
  i1010.asyncUploadBufferSize = i1011[26]
  i1010.asyncUploadTimeSlice = i1011[27]
  i1010.billboardsFaceCameraPosition = !!i1011[28]
  i1010.shadowNearPlaneOffset = i1011[29]
  i1010.streamingMipmapsMemoryBudget = i1011[30]
  i1010.maximumLODLevel = i1011[31]
  i1010.streamingMipmapsAddAllCameras = !!i1011[32]
  i1010.streamingMipmapsMaxLevelReduction = i1011[33]
  i1010.streamingMipmapsRenderersPerFrame = i1011[34]
  i1010.resolutionScalingFixedDPIFactor = i1011[35]
  i1010.streamingMipmapsMaxFileIORequests = i1011[36]
  i1010.currentQualityLevel = i1011[37]
  return i1010
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1018 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1019 = data
  i1018.xPlacement = i1019[0]
  i1018.yPlacement = i1019[1]
  i1018.xAdvance = i1019[2]
  i1018.yAdvance = i1019[3]
  return i1018
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[3],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[3],"78":[79],"80":[81],"82":[81],"14":[13],"6":[3],"30":[13],"83":[56],"84":[13],"85":[7],"86":[13],"87":[13],"17":[14],"19":[18,13],"88":[13],"16":[14],"89":[13],"90":[13],"24":[13],"91":[13],"92":[13],"93":[13],"94":[13],"29":[13],"95":[13],"96":[18,13],"97":[13],"98":[13],"99":[13],"100":[13],"101":[18,13],"102":[13],"103":[33],"104":[33],"34":[33],"105":[33],"106":[3],"107":[3],"108":[109],"110":[3],"111":[13],"112":[79,13],"27":[13,18],"113":[13],"114":[18,13],"115":[79],"116":[18,13],"117":[13]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAspectFitter","UnityEngine.SpriteRenderer","AudioManager","AudioLibrary","TaskManager","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.CanvasGroup","CanvasGroupAnimator","UnityEngine.UI.Button","GameManager","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","DragToResizeLeft","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ButtonPulse","StartClickHandler","UnityEngine.GameObject","UnityEngine.AudioClip","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bullet","UIHorizontalDraggable","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "core2d";

Deserializers.lunaInitializationTime = "08/14/2025 11:33:59";

Deserializers.lunaDaysRunning = "3.9";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1723";

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

Deserializers.buildID = "d2ec7bc1-5d9e-4938-9f7a-d2f98d0c0c88";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


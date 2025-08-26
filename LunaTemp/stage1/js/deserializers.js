var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3504 = root || request.c( 'UnityEngine.JointSpring' )
  var i3505 = data
  i3504.spring = i3505[0]
  i3504.damper = i3505[1]
  i3504.targetPosition = i3505[2]
  return i3504
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3506 = root || request.c( 'UnityEngine.JointMotor' )
  var i3507 = data
  i3506.m_TargetVelocity = i3507[0]
  i3506.m_Force = i3507[1]
  i3506.m_FreeSpin = i3507[2]
  return i3506
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3508 = root || request.c( 'UnityEngine.JointLimits' )
  var i3509 = data
  i3508.m_Min = i3509[0]
  i3508.m_Max = i3509[1]
  i3508.m_Bounciness = i3509[2]
  i3508.m_BounceMinVelocity = i3509[3]
  i3508.m_ContactDistance = i3509[4]
  i3508.minBounce = i3509[5]
  i3508.maxBounce = i3509[6]
  return i3508
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3510 = root || request.c( 'UnityEngine.JointDrive' )
  var i3511 = data
  i3510.m_PositionSpring = i3511[0]
  i3510.m_PositionDamper = i3511[1]
  i3510.m_MaximumForce = i3511[2]
  i3510.m_UseAcceleration = i3511[3]
  return i3510
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3512 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3513 = data
  i3512.m_Spring = i3513[0]
  i3512.m_Damper = i3513[1]
  return i3512
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3514 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3515 = data
  i3514.m_Limit = i3515[0]
  i3514.m_Bounciness = i3515[1]
  i3514.m_ContactDistance = i3515[2]
  return i3514
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3516 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3517 = data
  i3516.m_ExtremumSlip = i3517[0]
  i3516.m_ExtremumValue = i3517[1]
  i3516.m_AsymptoteSlip = i3517[2]
  i3516.m_AsymptoteValue = i3517[3]
  i3516.m_Stiffness = i3517[4]
  return i3516
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3518 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3519 = data
  i3518.m_LowerAngle = i3519[0]
  i3518.m_UpperAngle = i3519[1]
  return i3518
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3520 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3521 = data
  i3520.m_MotorSpeed = i3521[0]
  i3520.m_MaximumMotorTorque = i3521[1]
  return i3520
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3522 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3523 = data
  i3522.m_DampingRatio = i3523[0]
  i3522.m_Frequency = i3523[1]
  i3522.m_Angle = i3523[2]
  return i3522
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3524 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3525 = data
  i3524.m_LowerTranslation = i3525[0]
  i3524.m_UpperTranslation = i3525[1]
  return i3524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3526 = root || new pc.UnityMaterial()
  var i3527 = data
  i3526.name = i3527[0]
  request.r(i3527[1], i3527[2], 0, i3526, 'shader')
  i3526.renderQueue = i3527[3]
  i3526.enableInstancing = !!i3527[4]
  var i3529 = i3527[5]
  var i3528 = []
  for(var i = 0; i < i3529.length; i += 1) {
    i3528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3529[i + 0]) );
  }
  i3526.floatParameters = i3528
  var i3531 = i3527[6]
  var i3530 = []
  for(var i = 0; i < i3531.length; i += 1) {
    i3530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3531[i + 0]) );
  }
  i3526.colorParameters = i3530
  var i3533 = i3527[7]
  var i3532 = []
  for(var i = 0; i < i3533.length; i += 1) {
    i3532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3533[i + 0]) );
  }
  i3526.vectorParameters = i3532
  var i3535 = i3527[8]
  var i3534 = []
  for(var i = 0; i < i3535.length; i += 1) {
    i3534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3535[i + 0]) );
  }
  i3526.textureParameters = i3534
  var i3537 = i3527[9]
  var i3536 = []
  for(var i = 0; i < i3537.length; i += 1) {
    i3536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3537[i + 0]) );
  }
  i3526.materialFlags = i3536
  return i3526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3541 = data
  i3540.name = i3541[0]
  i3540.value = i3541[1]
  return i3540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3545 = data
  i3544.name = i3545[0]
  i3544.value = new pc.Color(i3545[1], i3545[2], i3545[3], i3545[4])
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3549 = data
  i3548.name = i3549[0]
  i3548.value = new pc.Vec4( i3549[1], i3549[2], i3549[3], i3549[4] )
  return i3548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3553 = data
  i3552.name = i3553[0]
  request.r(i3553[1], i3553[2], 0, i3552, 'value')
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3557 = data
  i3556.name = i3557[0]
  i3556.enabled = !!i3557[1]
  return i3556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3559 = data
  i3558.name = i3559[0]
  i3558.width = i3559[1]
  i3558.height = i3559[2]
  i3558.mipmapCount = i3559[3]
  i3558.anisoLevel = i3559[4]
  i3558.filterMode = i3559[5]
  i3558.hdr = !!i3559[6]
  i3558.format = i3559[7]
  i3558.wrapMode = i3559[8]
  i3558.alphaIsTransparency = !!i3559[9]
  i3558.alphaSource = i3559[10]
  i3558.graphicsFormat = i3559[11]
  i3558.sRGBTexture = !!i3559[12]
  i3558.desiredColorSpace = i3559[13]
  i3558.wrapU = i3559[14]
  i3558.wrapV = i3559[15]
  return i3558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3561 = data
  i3560.name = i3561[0]
  i3560.index = i3561[1]
  i3560.startup = !!i3561[2]
  return i3560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3563 = data
  i3562.position = new pc.Vec3( i3563[0], i3563[1], i3563[2] )
  i3562.scale = new pc.Vec3( i3563[3], i3563[4], i3563[5] )
  i3562.rotation = new pc.Quat(i3563[6], i3563[7], i3563[8], i3563[9])
  return i3562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3565 = data
  i3564.enabled = !!i3565[0]
  i3564.aspect = i3565[1]
  i3564.orthographic = !!i3565[2]
  i3564.orthographicSize = i3565[3]
  i3564.backgroundColor = new pc.Color(i3565[4], i3565[5], i3565[6], i3565[7])
  i3564.nearClipPlane = i3565[8]
  i3564.farClipPlane = i3565[9]
  i3564.fieldOfView = i3565[10]
  i3564.depth = i3565[11]
  i3564.clearFlags = i3565[12]
  i3564.cullingMask = i3565[13]
  i3564.rect = i3565[14]
  request.r(i3565[15], i3565[16], 0, i3564, 'targetTexture')
  i3564.usePhysicalProperties = !!i3565[17]
  i3564.focalLength = i3565[18]
  i3564.sensorSize = new pc.Vec2( i3565[19], i3565[20] )
  i3564.lensShift = new pc.Vec2( i3565[21], i3565[22] )
  i3564.gateFit = i3565[23]
  i3564.commandBufferCount = i3565[24]
  i3564.cameraType = i3565[25]
  return i3564
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i3566 = root || request.c( 'CameraAspectFitter' )
  var i3567 = data
  request.r(i3567[0], i3567[1], 0, i3566, 'targetSprite')
  return i3566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3569 = data
  i3568.name = i3569[0]
  i3568.tagId = i3569[1]
  i3568.enabled = !!i3569[2]
  i3568.isStatic = !!i3569[3]
  i3568.layer = i3569[4]
  return i3568
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i3570 = root || request.c( 'AudioManager' )
  var i3571 = data
  request.r(i3571[0], i3571[1], 0, i3570, 'library')
  i3570.sfxPoolSize = i3571[2]
  return i3570
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i3572 = root || request.c( 'TaskManager' )
  var i3573 = data
  return i3572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3575 = data
  i3574.enabled = !!i3575[0]
  request.r(i3575[1], i3575[2], 0, i3574, 'sharedMaterial')
  var i3577 = i3575[3]
  var i3576 = []
  for(var i = 0; i < i3577.length; i += 2) {
  request.r(i3577[i + 0], i3577[i + 1], 2, i3576, '')
  }
  i3574.sharedMaterials = i3576
  i3574.receiveShadows = !!i3575[4]
  i3574.shadowCastingMode = i3575[5]
  i3574.sortingLayerID = i3575[6]
  i3574.sortingOrder = i3575[7]
  i3574.lightmapIndex = i3575[8]
  i3574.lightmapSceneIndex = i3575[9]
  i3574.lightmapScaleOffset = new pc.Vec4( i3575[10], i3575[11], i3575[12], i3575[13] )
  i3574.lightProbeUsage = i3575[14]
  i3574.reflectionProbeUsage = i3575[15]
  i3574.color = new pc.Color(i3575[16], i3575[17], i3575[18], i3575[19])
  request.r(i3575[20], i3575[21], 0, i3574, 'sprite')
  i3574.flipX = !!i3575[22]
  i3574.flipY = !!i3575[23]
  i3574.drawMode = i3575[24]
  i3574.size = new pc.Vec2( i3575[25], i3575[26] )
  i3574.tileMode = i3575[27]
  i3574.adaptiveModeThreshold = i3575[28]
  i3574.maskInteraction = i3575[29]
  i3574.spriteSortPoint = i3575[30]
  return i3574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3581 = data
  i3580.pivot = new pc.Vec2( i3581[0], i3581[1] )
  i3580.anchorMin = new pc.Vec2( i3581[2], i3581[3] )
  i3580.anchorMax = new pc.Vec2( i3581[4], i3581[5] )
  i3580.sizeDelta = new pc.Vec2( i3581[6], i3581[7] )
  i3580.anchoredPosition3D = new pc.Vec3( i3581[8], i3581[9], i3581[10] )
  i3580.rotation = new pc.Quat(i3581[11], i3581[12], i3581[13], i3581[14])
  i3580.scale = new pc.Vec3( i3581[15], i3581[16], i3581[17] )
  return i3580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3583 = data
  i3582.enabled = !!i3583[0]
  i3582.planeDistance = i3583[1]
  i3582.referencePixelsPerUnit = i3583[2]
  i3582.isFallbackOverlay = !!i3583[3]
  i3582.renderMode = i3583[4]
  i3582.renderOrder = i3583[5]
  i3582.sortingLayerName = i3583[6]
  i3582.sortingOrder = i3583[7]
  i3582.scaleFactor = i3583[8]
  request.r(i3583[9], i3583[10], 0, i3582, 'worldCamera')
  i3582.overrideSorting = !!i3583[11]
  i3582.pixelPerfect = !!i3583[12]
  i3582.targetDisplay = i3583[13]
  i3582.overridePixelPerfect = !!i3583[14]
  return i3582
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3584 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3585 = data
  i3584.m_UiScaleMode = i3585[0]
  i3584.m_ReferencePixelsPerUnit = i3585[1]
  i3584.m_ScaleFactor = i3585[2]
  i3584.m_ReferenceResolution = new pc.Vec2( i3585[3], i3585[4] )
  i3584.m_ScreenMatchMode = i3585[5]
  i3584.m_MatchWidthOrHeight = i3585[6]
  i3584.m_PhysicalUnit = i3585[7]
  i3584.m_FallbackScreenDPI = i3585[8]
  i3584.m_DefaultSpriteDPI = i3585[9]
  i3584.m_DynamicPixelsPerUnit = i3585[10]
  i3584.m_PresetInfoIsWorld = !!i3585[11]
  return i3584
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3586 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3587 = data
  i3586.m_IgnoreReversedGraphics = !!i3587[0]
  i3586.m_BlockingObjects = i3587[1]
  i3586.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3587[2] )
  return i3586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3589 = data
  i3588.cullTransparentMesh = !!i3589[0]
  return i3588
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3590 = root || request.c( 'UnityEngine.UI.Image' )
  var i3591 = data
  request.r(i3591[0], i3591[1], 0, i3590, 'm_Sprite')
  i3590.m_Type = i3591[2]
  i3590.m_PreserveAspect = !!i3591[3]
  i3590.m_FillCenter = !!i3591[4]
  i3590.m_FillMethod = i3591[5]
  i3590.m_FillAmount = i3591[6]
  i3590.m_FillClockwise = !!i3591[7]
  i3590.m_FillOrigin = i3591[8]
  i3590.m_UseSpriteMesh = !!i3591[9]
  i3590.m_PixelsPerUnitMultiplier = i3591[10]
  request.r(i3591[11], i3591[12], 0, i3590, 'm_Material')
  i3590.m_Maskable = !!i3591[13]
  i3590.m_Color = new pc.Color(i3591[14], i3591[15], i3591[16], i3591[17])
  i3590.m_RaycastTarget = !!i3591[18]
  i3590.m_RaycastPadding = new pc.Vec4( i3591[19], i3591[20], i3591[21], i3591[22] )
  return i3590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3593 = data
  i3592.m_Alpha = i3593[0]
  i3592.m_Interactable = !!i3593[1]
  i3592.m_BlocksRaycasts = !!i3593[2]
  i3592.m_IgnoreParentGroups = !!i3593[3]
  i3592.enabled = !!i3593[4]
  return i3592
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i3594 = root || request.c( 'CanvasGroupAnimator' )
  var i3595 = data
  request.r(i3595[0], i3595[1], 0, i3594, 'canvasGroup')
  i3594.animateFade = !!i3595[2]
  i3594.triggerOnStart = !!i3595[3]
  i3594.isLooping = !!i3595[4]
  i3594.fadeTo = i3595[5]
  i3594.fadeDuration = i3595[6]
  i3594.fadeEaseType = i3595[7]
  return i3594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3597 = data
  request.r(i3597[0], i3597[1], 0, i3596, 'animatorController')
  request.r(i3597[2], i3597[3], 0, i3596, 'avatar')
  i3596.updateMode = i3597[4]
  i3596.hasTransformHierarchy = !!i3597[5]
  i3596.applyRootMotion = !!i3597[6]
  var i3599 = i3597[7]
  var i3598 = []
  for(var i = 0; i < i3599.length; i += 2) {
  request.r(i3599[i + 0], i3599[i + 1], 2, i3598, '')
  }
  i3596.humanBones = i3598
  i3596.enabled = !!i3597[8]
  return i3596
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3602 = root || request.c( 'UnityEngine.UI.Button' )
  var i3603 = data
  i3602.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3603[0], i3602.m_OnClick)
  i3602.m_Navigation = request.d('UnityEngine.UI.Navigation', i3603[1], i3602.m_Navigation)
  i3602.m_Transition = i3603[2]
  i3602.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3603[3], i3602.m_Colors)
  i3602.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3603[4], i3602.m_SpriteState)
  i3602.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3603[5], i3602.m_AnimationTriggers)
  i3602.m_Interactable = !!i3603[6]
  request.r(i3603[7], i3603[8], 0, i3602, 'm_TargetGraphic')
  return i3602
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3604 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3605 = data
  i3604.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3605[0], i3604.m_PersistentCalls)
  return i3604
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3606 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3607 = data
  var i3609 = i3607[0]
  var i3608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3609.length; i += 1) {
    i3608.add(request.d('UnityEngine.Events.PersistentCall', i3609[i + 0]));
  }
  i3606.m_Calls = i3608
  return i3606
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3612 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3613 = data
  request.r(i3613[0], i3613[1], 0, i3612, 'm_Target')
  i3612.m_TargetAssemblyTypeName = i3613[2]
  i3612.m_MethodName = i3613[3]
  i3612.m_Mode = i3613[4]
  i3612.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3613[5], i3612.m_Arguments)
  i3612.m_CallState = i3613[6]
  return i3612
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3614 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3615 = data
  request.r(i3615[0], i3615[1], 0, i3614, 'm_ObjectArgument')
  i3614.m_ObjectArgumentAssemblyTypeName = i3615[2]
  i3614.m_IntArgument = i3615[3]
  i3614.m_FloatArgument = i3615[4]
  i3614.m_StringArgument = i3615[5]
  i3614.m_BoolArgument = !!i3615[6]
  return i3614
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3616 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3617 = data
  i3616.m_Mode = i3617[0]
  i3616.m_WrapAround = !!i3617[1]
  request.r(i3617[2], i3617[3], 0, i3616, 'm_SelectOnUp')
  request.r(i3617[4], i3617[5], 0, i3616, 'm_SelectOnDown')
  request.r(i3617[6], i3617[7], 0, i3616, 'm_SelectOnLeft')
  request.r(i3617[8], i3617[9], 0, i3616, 'm_SelectOnRight')
  return i3616
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3618 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3619 = data
  i3618.m_NormalColor = new pc.Color(i3619[0], i3619[1], i3619[2], i3619[3])
  i3618.m_HighlightedColor = new pc.Color(i3619[4], i3619[5], i3619[6], i3619[7])
  i3618.m_PressedColor = new pc.Color(i3619[8], i3619[9], i3619[10], i3619[11])
  i3618.m_SelectedColor = new pc.Color(i3619[12], i3619[13], i3619[14], i3619[15])
  i3618.m_DisabledColor = new pc.Color(i3619[16], i3619[17], i3619[18], i3619[19])
  i3618.m_ColorMultiplier = i3619[20]
  i3618.m_FadeDuration = i3619[21]
  return i3618
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3620 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3621 = data
  request.r(i3621[0], i3621[1], 0, i3620, 'm_HighlightedSprite')
  request.r(i3621[2], i3621[3], 0, i3620, 'm_PressedSprite')
  request.r(i3621[4], i3621[5], 0, i3620, 'm_SelectedSprite')
  request.r(i3621[6], i3621[7], 0, i3620, 'm_DisabledSprite')
  return i3620
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3622 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3623 = data
  i3622.m_NormalTrigger = i3623[0]
  i3622.m_HighlightedTrigger = i3623[1]
  i3622.m_PressedTrigger = i3623[2]
  i3622.m_SelectedTrigger = i3623[3]
  i3622.m_DisabledTrigger = i3623[4]
  return i3622
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i3624 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i3625 = data
  i3624.m_Spacing = i3625[0]
  i3624.m_ChildForceExpandWidth = !!i3625[1]
  i3624.m_ChildForceExpandHeight = !!i3625[2]
  i3624.m_ChildControlWidth = !!i3625[3]
  i3624.m_ChildControlHeight = !!i3625[4]
  i3624.m_ChildScaleWidth = !!i3625[5]
  i3624.m_ChildScaleHeight = !!i3625[6]
  i3624.m_ReverseArrangement = !!i3625[7]
  i3624.m_Padding = UnityEngine.RectOffset.FromPaddings(i3625[8], i3625[9], i3625[10], i3625[11])
  i3624.m_ChildAlignment = i3625[12]
  return i3624
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3626 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3627 = data
  i3626.m_ShowMaskGraphic = !!i3627[0]
  return i3626
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i3628 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i3629 = data
  request.r(i3629[0], i3629[1], 0, i3628, 'm_Content')
  i3628.m_Horizontal = !!i3629[2]
  i3628.m_Vertical = !!i3629[3]
  i3628.m_MovementType = i3629[4]
  i3628.m_Elasticity = i3629[5]
  i3628.m_Inertia = !!i3629[6]
  i3628.m_DecelerationRate = i3629[7]
  i3628.m_ScrollSensitivity = i3629[8]
  request.r(i3629[9], i3629[10], 0, i3628, 'm_Viewport')
  request.r(i3629[11], i3629[12], 0, i3628, 'm_HorizontalScrollbar')
  request.r(i3629[13], i3629[14], 0, i3628, 'm_VerticalScrollbar')
  i3628.m_HorizontalScrollbarVisibility = i3629[15]
  i3628.m_VerticalScrollbarVisibility = i3629[16]
  i3628.m_HorizontalScrollbarSpacing = i3629[17]
  i3628.m_VerticalScrollbarSpacing = i3629[18]
  i3628.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i3629[19], i3628.m_OnValueChanged)
  return i3628
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i3630 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i3631 = data
  i3630.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3631[0], i3630.m_PersistentCalls)
  return i3630
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i3632 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i3633 = data
  request.r(i3633[0], i3633[1], 0, i3632, 'm_HandleRect')
  i3632.m_Direction = i3633[2]
  i3632.m_Value = i3633[3]
  i3632.m_Size = i3633[4]
  i3632.m_NumberOfSteps = i3633[5]
  i3632.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i3633[6], i3632.m_OnValueChanged)
  i3632.m_Navigation = request.d('UnityEngine.UI.Navigation', i3633[7], i3632.m_Navigation)
  i3632.m_Transition = i3633[8]
  i3632.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3633[9], i3632.m_Colors)
  i3632.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3633[10], i3632.m_SpriteState)
  i3632.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3633[11], i3632.m_AnimationTriggers)
  i3632.m_Interactable = !!i3633[12]
  request.r(i3633[13], i3633[14], 0, i3632, 'm_TargetGraphic')
  return i3632
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i3634 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i3635 = data
  i3634.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3635[0], i3634.m_PersistentCalls)
  return i3634
}

Deserializers["DragToResizeLeft"] = function (request, data, root) {
  var i3636 = root || request.c( 'DragToResizeLeft' )
  var i3637 = data
  request.r(i3637[0], i3637[1], 0, i3636, 'target')
  i3636.minWidth = i3637[2]
  return i3636
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3638 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3639 = data
  request.r(i3639[0], i3639[1], 0, i3638, 'm_FirstSelected')
  i3638.m_sendNavigationEvents = !!i3639[2]
  i3638.m_DragThreshold = i3639[3]
  return i3638
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3640 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3641 = data
  i3640.m_HorizontalAxis = i3641[0]
  i3640.m_VerticalAxis = i3641[1]
  i3640.m_SubmitButton = i3641[2]
  i3640.m_CancelButton = i3641[3]
  i3640.m_InputActionsPerSecond = i3641[4]
  i3640.m_RepeatDelay = i3641[5]
  i3640.m_ForceModuleActive = !!i3641[6]
  i3640.m_SendPointerHoverToParent = !!i3641[7]
  return i3640
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i3642 = root || request.c( 'ButtonPulse' )
  var i3643 = data
  i3642.scaleAmount = i3643[0]
  i3642.pulseDuration = i3643[1]
  return i3642
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i3644 = root || request.c( 'StartClickHandler' )
  var i3645 = data
  return i3644
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3646 = root || request.c( 'GameManager' )
  var i3647 = data
  request.r(i3647[0], i3647[1], 0, i3646, 'endPanel')
  i3646.end = !!i3647[2]
  request.r(i3647[3], i3647[4], 0, i3646, 'hand')
  request.r(i3647[5], i3647[6], 0, i3646, 'hand2')
  i3646.enableSound = !!i3647[7]
  request.r(i3647[8], i3647[9], 0, i3646, 'startClickHandler')
  i3646.currentScore = i3647[10]
  request.r(i3647[11], i3647[12], 0, i3646, 'BodyToSummarize')
  request.r(i3647[13], i3647[14], 0, i3646, 'SummarizedText')
  request.r(i3647[15], i3647[16], 0, i3646, 'transcriptBtnBlue')
  request.r(i3647[17], i3647[18], 0, i3646, 'transcriptBtn')
  request.r(i3647[19], i3647[20], 0, i3646, 'summaryBtn')
  request.r(i3647[21], i3647[22], 0, i3646, 'summaryBtnBlue')
  request.r(i3647[23], i3647[24], 0, i3646, 'mainPanel')
  request.r(i3647[25], i3647[26], 0, i3646, 'handle1')
  request.r(i3647[27], i3647[28], 0, i3646, 'animator')
  request.r(i3647[29], i3647[30], 0, i3646, 'maskA')
  request.r(i3647[31], i3647[32], 0, i3646, 'filter')
  request.r(i3647[33], i3647[34], 0, i3646, 'arrow')
  request.r(i3647[35], i3647[36], 0, i3646, 'toTap')
  request.r(i3647[37], i3647[38], 0, i3646, 'openingPanel')
  return i3646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3649 = data
  i3648.ambientIntensity = i3649[0]
  i3648.reflectionIntensity = i3649[1]
  i3648.ambientMode = i3649[2]
  i3648.ambientLight = new pc.Color(i3649[3], i3649[4], i3649[5], i3649[6])
  i3648.ambientSkyColor = new pc.Color(i3649[7], i3649[8], i3649[9], i3649[10])
  i3648.ambientGroundColor = new pc.Color(i3649[11], i3649[12], i3649[13], i3649[14])
  i3648.ambientEquatorColor = new pc.Color(i3649[15], i3649[16], i3649[17], i3649[18])
  i3648.fogColor = new pc.Color(i3649[19], i3649[20], i3649[21], i3649[22])
  i3648.fogEndDistance = i3649[23]
  i3648.fogStartDistance = i3649[24]
  i3648.fogDensity = i3649[25]
  i3648.fog = !!i3649[26]
  request.r(i3649[27], i3649[28], 0, i3648, 'skybox')
  i3648.fogMode = i3649[29]
  var i3651 = i3649[30]
  var i3650 = []
  for(var i = 0; i < i3651.length; i += 1) {
    i3650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3651[i + 0]) );
  }
  i3648.lightmaps = i3650
  i3648.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3649[31], i3648.lightProbes)
  i3648.lightmapsMode = i3649[32]
  i3648.mixedBakeMode = i3649[33]
  i3648.environmentLightingMode = i3649[34]
  i3648.ambientProbe = new pc.SphericalHarmonicsL2(i3649[35])
  i3648.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3649[36])
  i3648.useReferenceAmbientProbe = !!i3649[37]
  request.r(i3649[38], i3649[39], 0, i3648, 'customReflection')
  request.r(i3649[40], i3649[41], 0, i3648, 'defaultReflection')
  i3648.defaultReflectionMode = i3649[42]
  i3648.defaultReflectionResolution = i3649[43]
  i3648.sunLightObjectId = i3649[44]
  i3648.pixelLightCount = i3649[45]
  i3648.defaultReflectionHDR = !!i3649[46]
  i3648.hasLightDataAsset = !!i3649[47]
  i3648.hasManualGenerate = !!i3649[48]
  return i3648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3655 = data
  request.r(i3655[0], i3655[1], 0, i3654, 'lightmapColor')
  request.r(i3655[2], i3655[3], 0, i3654, 'lightmapDirection')
  return i3654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3656 = root || new UnityEngine.LightProbes()
  var i3657 = data
  return i3656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3665 = data
  var i3667 = i3665[0]
  var i3666 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3667.length; i += 1) {
    i3666.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3667[i + 0]));
  }
  i3664.ShaderCompilationErrors = i3666
  i3664.name = i3665[1]
  i3664.guid = i3665[2]
  var i3669 = i3665[3]
  var i3668 = []
  for(var i = 0; i < i3669.length; i += 1) {
    i3668.push( i3669[i + 0] );
  }
  i3664.shaderDefinedKeywords = i3668
  var i3671 = i3665[4]
  var i3670 = []
  for(var i = 0; i < i3671.length; i += 1) {
    i3670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3671[i + 0]) );
  }
  i3664.passes = i3670
  var i3673 = i3665[5]
  var i3672 = []
  for(var i = 0; i < i3673.length; i += 1) {
    i3672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3673[i + 0]) );
  }
  i3664.usePasses = i3672
  var i3675 = i3665[6]
  var i3674 = []
  for(var i = 0; i < i3675.length; i += 1) {
    i3674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3675[i + 0]) );
  }
  i3664.defaultParameterValues = i3674
  request.r(i3665[7], i3665[8], 0, i3664, 'unityFallbackShader')
  i3664.readDepth = !!i3665[9]
  i3664.isCreatedByShaderGraph = !!i3665[10]
  i3664.compiled = !!i3665[11]
  return i3664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3679 = data
  i3678.shaderName = i3679[0]
  i3678.errorMessage = i3679[1]
  return i3678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3684 = root || new pc.UnityShaderPass()
  var i3685 = data
  i3684.id = i3685[0]
  i3684.subShaderIndex = i3685[1]
  i3684.name = i3685[2]
  i3684.passType = i3685[3]
  i3684.grabPassTextureName = i3685[4]
  i3684.usePass = !!i3685[5]
  i3684.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3685[6], i3684.zTest)
  i3684.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3685[7], i3684.zWrite)
  i3684.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3685[8], i3684.culling)
  i3684.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3685[9], i3684.blending)
  i3684.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3685[10], i3684.alphaBlending)
  i3684.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3685[11], i3684.colorWriteMask)
  i3684.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3685[12], i3684.offsetUnits)
  i3684.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3685[13], i3684.offsetFactor)
  i3684.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3685[14], i3684.stencilRef)
  i3684.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3685[15], i3684.stencilReadMask)
  i3684.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3685[16], i3684.stencilWriteMask)
  i3684.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3685[17], i3684.stencilOp)
  i3684.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3685[18], i3684.stencilOpFront)
  i3684.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3685[19], i3684.stencilOpBack)
  var i3687 = i3685[20]
  var i3686 = []
  for(var i = 0; i < i3687.length; i += 1) {
    i3686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3687[i + 0]) );
  }
  i3684.tags = i3686
  var i3689 = i3685[21]
  var i3688 = []
  for(var i = 0; i < i3689.length; i += 1) {
    i3688.push( i3689[i + 0] );
  }
  i3684.passDefinedKeywords = i3688
  var i3691 = i3685[22]
  var i3690 = []
  for(var i = 0; i < i3691.length; i += 1) {
    i3690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3691[i + 0]) );
  }
  i3684.passDefinedKeywordGroups = i3690
  var i3693 = i3685[23]
  var i3692 = []
  for(var i = 0; i < i3693.length; i += 1) {
    i3692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3693[i + 0]) );
  }
  i3684.variants = i3692
  var i3695 = i3685[24]
  var i3694 = []
  for(var i = 0; i < i3695.length; i += 1) {
    i3694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3695[i + 0]) );
  }
  i3684.excludedVariants = i3694
  i3684.hasDepthReader = !!i3685[25]
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3697 = data
  i3696.val = i3697[0]
  i3696.name = i3697[1]
  return i3696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3699 = data
  i3698.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3699[0], i3698.src)
  i3698.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3699[1], i3698.dst)
  i3698.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3699[2], i3698.op)
  return i3698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3701 = data
  i3700.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3701[0], i3700.pass)
  i3700.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3701[1], i3700.fail)
  i3700.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3701[2], i3700.zFail)
  i3700.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3701[3], i3700.comp)
  return i3700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3705 = data
  i3704.name = i3705[0]
  i3704.value = i3705[1]
  return i3704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3709 = data
  var i3711 = i3709[0]
  var i3710 = []
  for(var i = 0; i < i3711.length; i += 1) {
    i3710.push( i3711[i + 0] );
  }
  i3708.keywords = i3710
  i3708.hasDiscard = !!i3709[1]
  return i3708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3715 = data
  i3714.passId = i3715[0]
  i3714.subShaderIndex = i3715[1]
  var i3717 = i3715[2]
  var i3716 = []
  for(var i = 0; i < i3717.length; i += 1) {
    i3716.push( i3717[i + 0] );
  }
  i3714.keywords = i3716
  i3714.vertexProgram = i3715[3]
  i3714.fragmentProgram = i3715[4]
  i3714.exportedForWebGl2 = !!i3715[5]
  i3714.readDepth = !!i3715[6]
  return i3714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3721 = data
  request.r(i3721[0], i3721[1], 0, i3720, 'shader')
  i3720.pass = i3721[2]
  return i3720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3725 = data
  i3724.name = i3725[0]
  i3724.type = i3725[1]
  i3724.value = new pc.Vec4( i3725[2], i3725[3], i3725[4], i3725[5] )
  i3724.textureValue = i3725[6]
  i3724.shaderPropertyFlag = i3725[7]
  return i3724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3727 = data
  i3726.name = i3727[0]
  request.r(i3727[1], i3727[2], 0, i3726, 'texture')
  i3726.aabb = i3727[3]
  i3726.vertices = i3727[4]
  i3726.triangles = i3727[5]
  i3726.textureRect = UnityEngine.Rect.MinMaxRect(i3727[6], i3727[7], i3727[8], i3727[9])
  i3726.packedRect = UnityEngine.Rect.MinMaxRect(i3727[10], i3727[11], i3727[12], i3727[13])
  i3726.border = new pc.Vec4( i3727[14], i3727[15], i3727[16], i3727[17] )
  i3726.transparency = i3727[18]
  i3726.bounds = i3727[19]
  i3726.pixelsPerUnit = i3727[20]
  i3726.textureWidth = i3727[21]
  i3726.textureHeight = i3727[22]
  i3726.nativeSize = new pc.Vec2( i3727[23], i3727[24] )
  i3726.pivot = new pc.Vec2( i3727[25], i3727[26] )
  i3726.textureRectOffset = new pc.Vec2( i3727[27], i3727[28] )
  return i3726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3729 = data
  i3728.name = i3729[0]
  return i3728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3731 = data
  i3730.name = i3731[0]
  i3730.wrapMode = i3731[1]
  i3730.isLooping = !!i3731[2]
  i3730.length = i3731[3]
  var i3733 = i3731[4]
  var i3732 = []
  for(var i = 0; i < i3733.length; i += 1) {
    i3732.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3733[i + 0]) );
  }
  i3730.curves = i3732
  var i3735 = i3731[5]
  var i3734 = []
  for(var i = 0; i < i3735.length; i += 1) {
    i3734.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3735[i + 0]) );
  }
  i3730.events = i3734
  i3730.halfPrecision = !!i3731[6]
  i3730._frameRate = i3731[7]
  i3730.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3731[8], i3730.localBounds)
  i3730.hasMuscleCurves = !!i3731[9]
  var i3737 = i3731[10]
  var i3736 = []
  for(var i = 0; i < i3737.length; i += 1) {
    i3736.push( i3737[i + 0] );
  }
  i3730.clipMuscleConstant = i3736
  i3730.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3731[11], i3730.clipBindingConstant)
  return i3730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3741 = data
  i3740.path = i3741[0]
  i3740.hash = i3741[1]
  i3740.componentType = i3741[2]
  i3740.property = i3741[3]
  i3740.keys = i3741[4]
  var i3743 = i3741[5]
  var i3742 = []
  for(var i = 0; i < i3743.length; i += 1) {
    i3742.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3743[i + 0]) );
  }
  i3740.objectReferenceKeys = i3742
  return i3740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3747 = data
  i3746.time = i3747[0]
  request.r(i3747[1], i3747[2], 0, i3746, 'value')
  return i3746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3751 = data
  i3750.functionName = i3751[0]
  i3750.floatParameter = i3751[1]
  i3750.intParameter = i3751[2]
  i3750.stringParameter = i3751[3]
  request.r(i3751[4], i3751[5], 0, i3750, 'objectReferenceParameter')
  i3750.time = i3751[6]
  return i3750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3753 = data
  i3752.center = new pc.Vec3( i3753[0], i3753[1], i3753[2] )
  i3752.extends = new pc.Vec3( i3753[3], i3753[4], i3753[5] )
  return i3752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3757 = data
  var i3759 = i3757[0]
  var i3758 = []
  for(var i = 0; i < i3759.length; i += 1) {
    i3758.push( i3759[i + 0] );
  }
  i3756.genericBindings = i3758
  var i3761 = i3757[1]
  var i3760 = []
  for(var i = 0; i < i3761.length; i += 1) {
    i3760.push( i3761[i + 0] );
  }
  i3756.pptrCurveMapping = i3760
  return i3756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3763 = data
  i3762.name = i3763[0]
  var i3765 = i3763[1]
  var i3764 = []
  for(var i = 0; i < i3765.length; i += 1) {
    i3764.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3765[i + 0]) );
  }
  i3762.layers = i3764
  var i3767 = i3763[2]
  var i3766 = []
  for(var i = 0; i < i3767.length; i += 1) {
    i3766.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3767[i + 0]) );
  }
  i3762.parameters = i3766
  i3762.animationClips = i3763[3]
  i3762.avatarUnsupported = i3763[4]
  return i3762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3771 = data
  i3770.name = i3771[0]
  i3770.defaultWeight = i3771[1]
  i3770.blendingMode = i3771[2]
  i3770.avatarMask = i3771[3]
  i3770.syncedLayerIndex = i3771[4]
  i3770.syncedLayerAffectsTiming = !!i3771[5]
  i3770.syncedLayers = i3771[6]
  i3770.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3771[7], i3770.stateMachine)
  return i3770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3773 = data
  i3772.id = i3773[0]
  i3772.name = i3773[1]
  i3772.path = i3773[2]
  var i3775 = i3773[3]
  var i3774 = []
  for(var i = 0; i < i3775.length; i += 1) {
    i3774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3775[i + 0]) );
  }
  i3772.states = i3774
  var i3777 = i3773[4]
  var i3776 = []
  for(var i = 0; i < i3777.length; i += 1) {
    i3776.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3777[i + 0]) );
  }
  i3772.machines = i3776
  var i3779 = i3773[5]
  var i3778 = []
  for(var i = 0; i < i3779.length; i += 1) {
    i3778.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3779[i + 0]) );
  }
  i3772.entryStateTransitions = i3778
  var i3781 = i3773[6]
  var i3780 = []
  for(var i = 0; i < i3781.length; i += 1) {
    i3780.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3781[i + 0]) );
  }
  i3772.exitStateTransitions = i3780
  var i3783 = i3773[7]
  var i3782 = []
  for(var i = 0; i < i3783.length; i += 1) {
    i3782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3783[i + 0]) );
  }
  i3772.anyStateTransitions = i3782
  i3772.defaultStateId = i3773[8]
  return i3772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3787 = data
  i3786.id = i3787[0]
  i3786.name = i3787[1]
  i3786.cycleOffset = i3787[2]
  i3786.cycleOffsetParameter = i3787[3]
  i3786.cycleOffsetParameterActive = !!i3787[4]
  i3786.mirror = !!i3787[5]
  i3786.mirrorParameter = i3787[6]
  i3786.mirrorParameterActive = !!i3787[7]
  i3786.motionId = i3787[8]
  i3786.nameHash = i3787[9]
  i3786.fullPathHash = i3787[10]
  i3786.speed = i3787[11]
  i3786.speedParameter = i3787[12]
  i3786.speedParameterActive = !!i3787[13]
  i3786.tag = i3787[14]
  i3786.tagHash = i3787[15]
  i3786.writeDefaultValues = !!i3787[16]
  var i3789 = i3787[17]
  var i3788 = []
  for(var i = 0; i < i3789.length; i += 2) {
  request.r(i3789[i + 0], i3789[i + 1], 2, i3788, '')
  }
  i3786.behaviours = i3788
  var i3791 = i3787[18]
  var i3790 = []
  for(var i = 0; i < i3791.length; i += 1) {
    i3790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3791[i + 0]) );
  }
  i3786.transitions = i3790
  return i3786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3797 = data
  i3796.fullPath = i3797[0]
  i3796.canTransitionToSelf = !!i3797[1]
  i3796.duration = i3797[2]
  i3796.exitTime = i3797[3]
  i3796.hasExitTime = !!i3797[4]
  i3796.hasFixedDuration = !!i3797[5]
  i3796.interruptionSource = i3797[6]
  i3796.offset = i3797[7]
  i3796.orderedInterruption = !!i3797[8]
  i3796.destinationStateId = i3797[9]
  i3796.isExit = !!i3797[10]
  i3796.mute = !!i3797[11]
  i3796.solo = !!i3797[12]
  var i3799 = i3797[13]
  var i3798 = []
  for(var i = 0; i < i3799.length; i += 1) {
    i3798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3799[i + 0]) );
  }
  i3796.conditions = i3798
  return i3796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3805 = data
  i3804.destinationStateId = i3805[0]
  i3804.isExit = !!i3805[1]
  i3804.mute = !!i3805[2]
  i3804.solo = !!i3805[3]
  var i3807 = i3805[4]
  var i3806 = []
  for(var i = 0; i < i3807.length; i += 1) {
    i3806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3807[i + 0]) );
  }
  i3804.conditions = i3806
  return i3804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3811 = data
  i3810.defaultBool = !!i3811[0]
  i3810.defaultFloat = i3811[1]
  i3810.defaultInt = i3811[2]
  i3810.name = i3811[3]
  i3810.nameHash = i3811[4]
  i3810.type = i3811[5]
  return i3810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3815 = data
  i3814.mode = i3815[0]
  i3814.parameter = i3815[1]
  i3814.threshold = i3815[2]
  return i3814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3817 = data
  i3816.name = i3817[0]
  i3816.bytes64 = i3817[1]
  i3816.data = i3817[2]
  return i3816
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i3818 = root || request.c( 'AudioLibrary' )
  var i3819 = data
  var i3821 = i3819[0]
  var i3820 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i3821.length; i += 1) {
    i3820.add(request.d('AudioLibrary+ClipEntry', i3821[i + 0]));
  }
  i3818.clips = i3820
  return i3818
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i3824 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i3825 = data
  i3824.key = i3825[0]
  i3824.channel = i3825[1]
  request.r(i3825[2], i3825[3], 0, i3824, 'clip')
  i3824.volume = i3825[4]
  i3824.loop = !!i3825[5]
  return i3824
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3826 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3827 = data
  i3826.useSafeMode = !!i3827[0]
  i3826.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3827[1], i3826.safeModeOptions)
  i3826.timeScale = i3827[2]
  i3826.unscaledTimeScale = i3827[3]
  i3826.useSmoothDeltaTime = !!i3827[4]
  i3826.maxSmoothUnscaledTime = i3827[5]
  i3826.rewindCallbackMode = i3827[6]
  i3826.showUnityEditorReport = !!i3827[7]
  i3826.logBehaviour = i3827[8]
  i3826.drawGizmos = !!i3827[9]
  i3826.defaultRecyclable = !!i3827[10]
  i3826.defaultAutoPlay = i3827[11]
  i3826.defaultUpdateType = i3827[12]
  i3826.defaultTimeScaleIndependent = !!i3827[13]
  i3826.defaultEaseType = i3827[14]
  i3826.defaultEaseOvershootOrAmplitude = i3827[15]
  i3826.defaultEasePeriod = i3827[16]
  i3826.defaultAutoKill = !!i3827[17]
  i3826.defaultLoopType = i3827[18]
  i3826.debugMode = !!i3827[19]
  i3826.debugStoreTargetId = !!i3827[20]
  i3826.showPreviewPanel = !!i3827[21]
  i3826.storeSettingsLocation = i3827[22]
  i3826.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3827[23], i3826.modules)
  i3826.createASMDEF = !!i3827[24]
  i3826.showPlayingTweens = !!i3827[25]
  i3826.showPausedTweens = !!i3827[26]
  return i3826
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3828 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3829 = data
  i3828.logBehaviour = i3829[0]
  i3828.nestedTweenFailureBehaviour = i3829[1]
  return i3828
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3830 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3831 = data
  i3830.showPanel = !!i3831[0]
  i3830.audioEnabled = !!i3831[1]
  i3830.physicsEnabled = !!i3831[2]
  i3830.physics2DEnabled = !!i3831[3]
  i3830.spriteEnabled = !!i3831[4]
  i3830.uiEnabled = !!i3831[5]
  i3830.textMeshProEnabled = !!i3831[6]
  i3830.tk2DEnabled = !!i3831[7]
  i3830.deAudioEnabled = !!i3831[8]
  i3830.deUnityExtendedEnabled = !!i3831[9]
  i3830.epoOutlineEnabled = !!i3831[10]
  return i3830
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3832 = root || request.c( 'TMPro.TMP_Settings' )
  var i3833 = data
  i3832.m_enableWordWrapping = !!i3833[0]
  i3832.m_enableKerning = !!i3833[1]
  i3832.m_enableExtraPadding = !!i3833[2]
  i3832.m_enableTintAllSprites = !!i3833[3]
  i3832.m_enableParseEscapeCharacters = !!i3833[4]
  i3832.m_EnableRaycastTarget = !!i3833[5]
  i3832.m_GetFontFeaturesAtRuntime = !!i3833[6]
  i3832.m_missingGlyphCharacter = i3833[7]
  i3832.m_warningsDisabled = !!i3833[8]
  request.r(i3833[9], i3833[10], 0, i3832, 'm_defaultFontAsset')
  i3832.m_defaultFontAssetPath = i3833[11]
  i3832.m_defaultFontSize = i3833[12]
  i3832.m_defaultAutoSizeMinRatio = i3833[13]
  i3832.m_defaultAutoSizeMaxRatio = i3833[14]
  i3832.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3833[15], i3833[16] )
  i3832.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3833[17], i3833[18] )
  i3832.m_autoSizeTextContainer = !!i3833[19]
  i3832.m_IsTextObjectScaleStatic = !!i3833[20]
  var i3835 = i3833[21]
  var i3834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3835.length; i += 2) {
  request.r(i3835[i + 0], i3835[i + 1], 1, i3834, '')
  }
  i3832.m_fallbackFontAssets = i3834
  i3832.m_matchMaterialPreset = !!i3833[22]
  request.r(i3833[23], i3833[24], 0, i3832, 'm_defaultSpriteAsset')
  i3832.m_defaultSpriteAssetPath = i3833[25]
  i3832.m_enableEmojiSupport = !!i3833[26]
  i3832.m_MissingCharacterSpriteUnicode = i3833[27]
  i3832.m_defaultColorGradientPresetsPath = i3833[28]
  request.r(i3833[29], i3833[30], 0, i3832, 'm_defaultStyleSheet')
  i3832.m_StyleSheetsResourcePath = i3833[31]
  request.r(i3833[32], i3833[33], 0, i3832, 'm_leadingCharacters')
  request.r(i3833[34], i3833[35], 0, i3832, 'm_followingCharacters')
  i3832.m_UseModernHangulLineBreakingRules = !!i3833[36]
  return i3832
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3838 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3839 = data
  i3838.hashCode = i3839[0]
  request.r(i3839[1], i3839[2], 0, i3838, 'material')
  i3838.materialHashCode = i3839[3]
  request.r(i3839[4], i3839[5], 0, i3838, 'atlas')
  i3838.normalStyle = i3839[6]
  i3838.normalSpacingOffset = i3839[7]
  i3838.boldStyle = i3839[8]
  i3838.boldSpacing = i3839[9]
  i3838.italicStyle = i3839[10]
  i3838.tabSize = i3839[11]
  i3838.m_Version = i3839[12]
  i3838.m_SourceFontFileGUID = i3839[13]
  request.r(i3839[14], i3839[15], 0, i3838, 'm_SourceFontFile_EditorRef')
  request.r(i3839[16], i3839[17], 0, i3838, 'm_SourceFontFile')
  i3838.m_AtlasPopulationMode = i3839[18]
  i3838.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3839[19], i3838.m_FaceInfo)
  var i3841 = i3839[20]
  var i3840 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3841.length; i += 1) {
    i3840.add(request.d('UnityEngine.TextCore.Glyph', i3841[i + 0]));
  }
  i3838.m_GlyphTable = i3840
  var i3843 = i3839[21]
  var i3842 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3843.length; i += 1) {
    i3842.add(request.d('TMPro.TMP_Character', i3843[i + 0]));
  }
  i3838.m_CharacterTable = i3842
  var i3845 = i3839[22]
  var i3844 = []
  for(var i = 0; i < i3845.length; i += 2) {
  request.r(i3845[i + 0], i3845[i + 1], 2, i3844, '')
  }
  i3838.m_AtlasTextures = i3844
  i3838.m_AtlasTextureIndex = i3839[23]
  i3838.m_IsMultiAtlasTexturesEnabled = !!i3839[24]
  i3838.m_ClearDynamicDataOnBuild = !!i3839[25]
  var i3847 = i3839[26]
  var i3846 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3847.length; i += 1) {
    i3846.add(request.d('UnityEngine.TextCore.GlyphRect', i3847[i + 0]));
  }
  i3838.m_UsedGlyphRects = i3846
  var i3849 = i3839[27]
  var i3848 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3849.length; i += 1) {
    i3848.add(request.d('UnityEngine.TextCore.GlyphRect', i3849[i + 0]));
  }
  i3838.m_FreeGlyphRects = i3848
  i3838.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3839[28], i3838.m_fontInfo)
  i3838.m_AtlasWidth = i3839[29]
  i3838.m_AtlasHeight = i3839[30]
  i3838.m_AtlasPadding = i3839[31]
  i3838.m_AtlasRenderMode = i3839[32]
  var i3851 = i3839[33]
  var i3850 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3851.length; i += 1) {
    i3850.add(request.d('TMPro.TMP_Glyph', i3851[i + 0]));
  }
  i3838.m_glyphInfoList = i3850
  i3838.m_KerningTable = request.d('TMPro.KerningTable', i3839[34], i3838.m_KerningTable)
  i3838.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3839[35], i3838.m_FontFeatureTable)
  var i3853 = i3839[36]
  var i3852 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3853.length; i += 2) {
  request.r(i3853[i + 0], i3853[i + 1], 1, i3852, '')
  }
  i3838.fallbackFontAssets = i3852
  var i3855 = i3839[37]
  var i3854 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3855.length; i += 2) {
  request.r(i3855[i + 0], i3855[i + 1], 1, i3854, '')
  }
  i3838.m_FallbackFontAssetTable = i3854
  i3838.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3839[38], i3838.m_CreationSettings)
  var i3857 = i3839[39]
  var i3856 = []
  for(var i = 0; i < i3857.length; i += 1) {
    i3856.push( request.d('TMPro.TMP_FontWeightPair', i3857[i + 0]) );
  }
  i3838.m_FontWeightTable = i3856
  var i3859 = i3839[40]
  var i3858 = []
  for(var i = 0; i < i3859.length; i += 1) {
    i3858.push( request.d('TMPro.TMP_FontWeightPair', i3859[i + 0]) );
  }
  i3838.fontWeights = i3858
  return i3838
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3860 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3861 = data
  i3860.m_FaceIndex = i3861[0]
  i3860.m_FamilyName = i3861[1]
  i3860.m_StyleName = i3861[2]
  i3860.m_PointSize = i3861[3]
  i3860.m_Scale = i3861[4]
  i3860.m_UnitsPerEM = i3861[5]
  i3860.m_LineHeight = i3861[6]
  i3860.m_AscentLine = i3861[7]
  i3860.m_CapLine = i3861[8]
  i3860.m_MeanLine = i3861[9]
  i3860.m_Baseline = i3861[10]
  i3860.m_DescentLine = i3861[11]
  i3860.m_SuperscriptOffset = i3861[12]
  i3860.m_SuperscriptSize = i3861[13]
  i3860.m_SubscriptOffset = i3861[14]
  i3860.m_SubscriptSize = i3861[15]
  i3860.m_UnderlineOffset = i3861[16]
  i3860.m_UnderlineThickness = i3861[17]
  i3860.m_StrikethroughOffset = i3861[18]
  i3860.m_StrikethroughThickness = i3861[19]
  i3860.m_TabWidth = i3861[20]
  return i3860
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3864 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3865 = data
  i3864.m_Index = i3865[0]
  i3864.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3865[1], i3864.m_Metrics)
  i3864.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3865[2], i3864.m_GlyphRect)
  i3864.m_Scale = i3865[3]
  i3864.m_AtlasIndex = i3865[4]
  i3864.m_ClassDefinitionType = i3865[5]
  return i3864
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3866 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3867 = data
  i3866.m_Width = i3867[0]
  i3866.m_Height = i3867[1]
  i3866.m_HorizontalBearingX = i3867[2]
  i3866.m_HorizontalBearingY = i3867[3]
  i3866.m_HorizontalAdvance = i3867[4]
  return i3866
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3868 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3869 = data
  i3868.m_X = i3869[0]
  i3868.m_Y = i3869[1]
  i3868.m_Width = i3869[2]
  i3868.m_Height = i3869[3]
  return i3868
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3872 = root || request.c( 'TMPro.TMP_Character' )
  var i3873 = data
  i3872.m_ElementType = i3873[0]
  i3872.m_Unicode = i3873[1]
  i3872.m_GlyphIndex = i3873[2]
  i3872.m_Scale = i3873[3]
  return i3872
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3878 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3879 = data
  i3878.Name = i3879[0]
  i3878.PointSize = i3879[1]
  i3878.Scale = i3879[2]
  i3878.CharacterCount = i3879[3]
  i3878.LineHeight = i3879[4]
  i3878.Baseline = i3879[5]
  i3878.Ascender = i3879[6]
  i3878.CapHeight = i3879[7]
  i3878.Descender = i3879[8]
  i3878.CenterLine = i3879[9]
  i3878.SuperscriptOffset = i3879[10]
  i3878.SubscriptOffset = i3879[11]
  i3878.SubSize = i3879[12]
  i3878.Underline = i3879[13]
  i3878.UnderlineThickness = i3879[14]
  i3878.strikethrough = i3879[15]
  i3878.strikethroughThickness = i3879[16]
  i3878.TabWidth = i3879[17]
  i3878.Padding = i3879[18]
  i3878.AtlasWidth = i3879[19]
  i3878.AtlasHeight = i3879[20]
  return i3878
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3882 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3883 = data
  i3882.id = i3883[0]
  i3882.x = i3883[1]
  i3882.y = i3883[2]
  i3882.width = i3883[3]
  i3882.height = i3883[4]
  i3882.xOffset = i3883[5]
  i3882.yOffset = i3883[6]
  i3882.xAdvance = i3883[7]
  i3882.scale = i3883[8]
  return i3882
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3884 = root || request.c( 'TMPro.KerningTable' )
  var i3885 = data
  var i3887 = i3885[0]
  var i3886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3887.length; i += 1) {
    i3886.add(request.d('TMPro.KerningPair', i3887[i + 0]));
  }
  i3884.kerningPairs = i3886
  return i3884
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3890 = root || request.c( 'TMPro.KerningPair' )
  var i3891 = data
  i3890.xOffset = i3891[0]
  i3890.m_FirstGlyph = i3891[1]
  i3890.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3891[2], i3890.m_FirstGlyphAdjustments)
  i3890.m_SecondGlyph = i3891[3]
  i3890.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3891[4], i3890.m_SecondGlyphAdjustments)
  i3890.m_IgnoreSpacingAdjustments = !!i3891[5]
  return i3890
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3892 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3893 = data
  var i3895 = i3893[0]
  var i3894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3895.length; i += 1) {
    i3894.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3895[i + 0]));
  }
  i3892.m_GlyphPairAdjustmentRecords = i3894
  return i3892
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3898 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3899 = data
  i3898.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3899[0], i3898.m_FirstAdjustmentRecord)
  i3898.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3899[1], i3898.m_SecondAdjustmentRecord)
  i3898.m_FeatureLookupFlags = i3899[2]
  return i3898
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3900 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3901 = data
  i3900.m_GlyphIndex = i3901[0]
  i3900.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3901[1], i3900.m_GlyphValueRecord)
  return i3900
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3902 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3903 = data
  i3902.m_XPlacement = i3903[0]
  i3902.m_YPlacement = i3903[1]
  i3902.m_XAdvance = i3903[2]
  i3902.m_YAdvance = i3903[3]
  return i3902
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3904 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3905 = data
  i3904.sourceFontFileName = i3905[0]
  i3904.sourceFontFileGUID = i3905[1]
  i3904.pointSizeSamplingMode = i3905[2]
  i3904.pointSize = i3905[3]
  i3904.padding = i3905[4]
  i3904.packingMode = i3905[5]
  i3904.atlasWidth = i3905[6]
  i3904.atlasHeight = i3905[7]
  i3904.characterSetSelectionMode = i3905[8]
  i3904.characterSequence = i3905[9]
  i3904.referencedFontAssetGUID = i3905[10]
  i3904.referencedTextAssetGUID = i3905[11]
  i3904.fontStyle = i3905[12]
  i3904.fontStyleModifier = i3905[13]
  i3904.renderMode = i3905[14]
  i3904.includeFontFeatures = !!i3905[15]
  return i3904
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3908 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3909 = data
  request.r(i3909[0], i3909[1], 0, i3908, 'regularTypeface')
  request.r(i3909[2], i3909[3], 0, i3908, 'italicTypeface')
  return i3908
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3910 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3911 = data
  i3910.hashCode = i3911[0]
  request.r(i3911[1], i3911[2], 0, i3910, 'material')
  i3910.materialHashCode = i3911[3]
  request.r(i3911[4], i3911[5], 0, i3910, 'spriteSheet')
  var i3913 = i3911[6]
  var i3912 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3913.length; i += 1) {
    i3912.add(request.d('TMPro.TMP_Sprite', i3913[i + 0]));
  }
  i3910.spriteInfoList = i3912
  var i3915 = i3911[7]
  var i3914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3915.length; i += 2) {
  request.r(i3915[i + 0], i3915[i + 1], 1, i3914, '')
  }
  i3910.fallbackSpriteAssets = i3914
  i3910.m_Version = i3911[8]
  i3910.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3911[9], i3910.m_FaceInfo)
  var i3917 = i3911[10]
  var i3916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3917.length; i += 1) {
    i3916.add(request.d('TMPro.TMP_SpriteCharacter', i3917[i + 0]));
  }
  i3910.m_SpriteCharacterTable = i3916
  var i3919 = i3911[11]
  var i3918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3919.length; i += 1) {
    i3918.add(request.d('TMPro.TMP_SpriteGlyph', i3919[i + 0]));
  }
  i3910.m_SpriteGlyphTable = i3918
  return i3910
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3922 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3923 = data
  i3922.name = i3923[0]
  i3922.hashCode = i3923[1]
  i3922.unicode = i3923[2]
  i3922.pivot = new pc.Vec2( i3923[3], i3923[4] )
  request.r(i3923[5], i3923[6], 0, i3922, 'sprite')
  i3922.id = i3923[7]
  i3922.x = i3923[8]
  i3922.y = i3923[9]
  i3922.width = i3923[10]
  i3922.height = i3923[11]
  i3922.xOffset = i3923[12]
  i3922.yOffset = i3923[13]
  i3922.xAdvance = i3923[14]
  i3922.scale = i3923[15]
  return i3922
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3928 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3929 = data
  i3928.m_Name = i3929[0]
  i3928.m_HashCode = i3929[1]
  i3928.m_ElementType = i3929[2]
  i3928.m_Unicode = i3929[3]
  i3928.m_GlyphIndex = i3929[4]
  i3928.m_Scale = i3929[5]
  return i3928
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3932 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3933 = data
  request.r(i3933[0], i3933[1], 0, i3932, 'sprite')
  i3932.m_Index = i3933[2]
  i3932.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3933[3], i3932.m_Metrics)
  i3932.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3933[4], i3932.m_GlyphRect)
  i3932.m_Scale = i3933[5]
  i3932.m_AtlasIndex = i3933[6]
  i3932.m_ClassDefinitionType = i3933[7]
  return i3932
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3934 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3935 = data
  var i3937 = i3935[0]
  var i3936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3937.length; i += 1) {
    i3936.add(request.d('TMPro.TMP_Style', i3937[i + 0]));
  }
  i3934.m_StyleList = i3936
  return i3934
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3940 = root || request.c( 'TMPro.TMP_Style' )
  var i3941 = data
  i3940.m_Name = i3941[0]
  i3940.m_HashCode = i3941[1]
  i3940.m_OpeningDefinition = i3941[2]
  i3940.m_ClosingDefinition = i3941[3]
  i3940.m_OpeningTagArray = i3941[4]
  i3940.m_ClosingTagArray = i3941[5]
  i3940.m_OpeningTagUnicodeArray = i3941[6]
  i3940.m_ClosingTagUnicodeArray = i3941[7]
  return i3940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3943 = data
  var i3945 = i3943[0]
  var i3944 = []
  for(var i = 0; i < i3945.length; i += 1) {
    i3944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3945[i + 0]) );
  }
  i3942.files = i3944
  i3942.componentToPrefabIds = i3943[1]
  return i3942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3949 = data
  i3948.path = i3949[0]
  request.r(i3949[1], i3949[2], 0, i3948, 'unityObject')
  return i3948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3951 = data
  var i3953 = i3951[0]
  var i3952 = []
  for(var i = 0; i < i3953.length; i += 1) {
    i3952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3953[i + 0]) );
  }
  i3950.scriptsExecutionOrder = i3952
  var i3955 = i3951[1]
  var i3954 = []
  for(var i = 0; i < i3955.length; i += 1) {
    i3954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3955[i + 0]) );
  }
  i3950.sortingLayers = i3954
  var i3957 = i3951[2]
  var i3956 = []
  for(var i = 0; i < i3957.length; i += 1) {
    i3956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3957[i + 0]) );
  }
  i3950.cullingLayers = i3956
  i3950.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3951[3], i3950.timeSettings)
  i3950.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3951[4], i3950.physicsSettings)
  i3950.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3951[5], i3950.physics2DSettings)
  i3950.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3951[6], i3950.qualitySettings)
  i3950.enableRealtimeShadows = !!i3951[7]
  i3950.enableAutoInstancing = !!i3951[8]
  i3950.enableDynamicBatching = !!i3951[9]
  i3950.lightmapEncodingQuality = i3951[10]
  i3950.desiredColorSpace = i3951[11]
  var i3959 = i3951[12]
  var i3958 = []
  for(var i = 0; i < i3959.length; i += 1) {
    i3958.push( i3959[i + 0] );
  }
  i3950.allTags = i3958
  return i3950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3963 = data
  i3962.name = i3963[0]
  i3962.value = i3963[1]
  return i3962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3967 = data
  i3966.id = i3967[0]
  i3966.name = i3967[1]
  i3966.value = i3967[2]
  return i3966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3971 = data
  i3970.id = i3971[0]
  i3970.name = i3971[1]
  return i3970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3973 = data
  i3972.fixedDeltaTime = i3973[0]
  i3972.maximumDeltaTime = i3973[1]
  i3972.timeScale = i3973[2]
  i3972.maximumParticleTimestep = i3973[3]
  return i3972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3975 = data
  i3974.gravity = new pc.Vec3( i3975[0], i3975[1], i3975[2] )
  i3974.defaultSolverIterations = i3975[3]
  i3974.bounceThreshold = i3975[4]
  i3974.autoSyncTransforms = !!i3975[5]
  i3974.autoSimulation = !!i3975[6]
  var i3977 = i3975[7]
  var i3976 = []
  for(var i = 0; i < i3977.length; i += 1) {
    i3976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3977[i + 0]) );
  }
  i3974.collisionMatrix = i3976
  return i3974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3981 = data
  i3980.enabled = !!i3981[0]
  i3980.layerId = i3981[1]
  i3980.otherLayerId = i3981[2]
  return i3980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3983 = data
  request.r(i3983[0], i3983[1], 0, i3982, 'material')
  i3982.gravity = new pc.Vec2( i3983[2], i3983[3] )
  i3982.positionIterations = i3983[4]
  i3982.velocityIterations = i3983[5]
  i3982.velocityThreshold = i3983[6]
  i3982.maxLinearCorrection = i3983[7]
  i3982.maxAngularCorrection = i3983[8]
  i3982.maxTranslationSpeed = i3983[9]
  i3982.maxRotationSpeed = i3983[10]
  i3982.baumgarteScale = i3983[11]
  i3982.baumgarteTOIScale = i3983[12]
  i3982.timeToSleep = i3983[13]
  i3982.linearSleepTolerance = i3983[14]
  i3982.angularSleepTolerance = i3983[15]
  i3982.defaultContactOffset = i3983[16]
  i3982.autoSimulation = !!i3983[17]
  i3982.queriesHitTriggers = !!i3983[18]
  i3982.queriesStartInColliders = !!i3983[19]
  i3982.callbacksOnDisable = !!i3983[20]
  i3982.reuseCollisionCallbacks = !!i3983[21]
  i3982.autoSyncTransforms = !!i3983[22]
  var i3985 = i3983[23]
  var i3984 = []
  for(var i = 0; i < i3985.length; i += 1) {
    i3984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3985[i + 0]) );
  }
  i3982.collisionMatrix = i3984
  return i3982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3989 = data
  i3988.enabled = !!i3989[0]
  i3988.layerId = i3989[1]
  i3988.otherLayerId = i3989[2]
  return i3988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3991 = data
  var i3993 = i3991[0]
  var i3992 = []
  for(var i = 0; i < i3993.length; i += 1) {
    i3992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3993[i + 0]) );
  }
  i3990.qualityLevels = i3992
  var i3995 = i3991[1]
  var i3994 = []
  for(var i = 0; i < i3995.length; i += 1) {
    i3994.push( i3995[i + 0] );
  }
  i3990.names = i3994
  i3990.shadows = i3991[2]
  i3990.anisotropicFiltering = i3991[3]
  i3990.antiAliasing = i3991[4]
  i3990.lodBias = i3991[5]
  i3990.shadowCascades = i3991[6]
  i3990.shadowDistance = i3991[7]
  i3990.shadowmaskMode = i3991[8]
  i3990.shadowProjection = i3991[9]
  i3990.shadowResolution = i3991[10]
  i3990.softParticles = !!i3991[11]
  i3990.softVegetation = !!i3991[12]
  i3990.activeColorSpace = i3991[13]
  i3990.desiredColorSpace = i3991[14]
  i3990.masterTextureLimit = i3991[15]
  i3990.maxQueuedFrames = i3991[16]
  i3990.particleRaycastBudget = i3991[17]
  i3990.pixelLightCount = i3991[18]
  i3990.realtimeReflectionProbes = !!i3991[19]
  i3990.shadowCascade2Split = i3991[20]
  i3990.shadowCascade4Split = new pc.Vec3( i3991[21], i3991[22], i3991[23] )
  i3990.streamingMipmapsActive = !!i3991[24]
  i3990.vSyncCount = i3991[25]
  i3990.asyncUploadBufferSize = i3991[26]
  i3990.asyncUploadTimeSlice = i3991[27]
  i3990.billboardsFaceCameraPosition = !!i3991[28]
  i3990.shadowNearPlaneOffset = i3991[29]
  i3990.streamingMipmapsMemoryBudget = i3991[30]
  i3990.maximumLODLevel = i3991[31]
  i3990.streamingMipmapsAddAllCameras = !!i3991[32]
  i3990.streamingMipmapsMaxLevelReduction = i3991[33]
  i3990.streamingMipmapsRenderersPerFrame = i3991[34]
  i3990.resolutionScalingFixedDPIFactor = i3991[35]
  i3990.streamingMipmapsMaxFileIORequests = i3991[36]
  i3990.currentQualityLevel = i3991[37]
  return i3990
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3998 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3999 = data
  i3998.xPlacement = i3999[0]
  i3998.yPlacement = i3999[1]
  i3998.xAdvance = i3999[2]
  i3998.yAdvance = i3999[3]
  return i3998
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[2],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[2],"77":[78],"79":[80],"81":[80],"13":[12],"5":[2],"29":[12],"82":[55],"83":[12],"84":[6],"85":[12],"86":[12],"16":[13],"18":[17,12],"87":[12],"15":[13],"88":[12],"89":[12],"25":[12],"90":[12],"91":[12],"92":[12],"93":[12],"26":[12],"94":[12],"95":[17,12],"96":[12],"28":[12],"27":[12],"97":[12],"98":[17,12],"99":[12],"100":[30],"101":[30],"31":[30],"102":[30],"103":[2],"104":[2],"105":[106],"107":[2],"108":[12],"109":[78,12],"110":[12,17],"111":[12],"112":[17,12],"113":[78],"114":[17,12],"115":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraAspectFitter","UnityEngine.SpriteRenderer","AudioManager","AudioLibrary","TaskManager","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.CanvasGroup","CanvasGroupAnimator","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Button","GameManager","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","DragToResizeLeft","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ButtonPulse","StartClickHandler","UnityEngine.GameObject","UnityEngine.Texture2D","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bullet","UIHorizontalDraggable","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "core2d";

Deserializers.lunaInitializationTime = "08/14/2025 11:33:59";

Deserializers.lunaDaysRunning = "12.2";

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

Deserializers.buildID = "d5b7836e-df62-43d9-9d5e-1646e11b6360";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


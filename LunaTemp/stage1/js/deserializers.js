var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3488 = root || request.c( 'UnityEngine.JointSpring' )
  var i3489 = data
  i3488.spring = i3489[0]
  i3488.damper = i3489[1]
  i3488.targetPosition = i3489[2]
  return i3488
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3490 = root || request.c( 'UnityEngine.JointMotor' )
  var i3491 = data
  i3490.m_TargetVelocity = i3491[0]
  i3490.m_Force = i3491[1]
  i3490.m_FreeSpin = i3491[2]
  return i3490
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3492 = root || request.c( 'UnityEngine.JointLimits' )
  var i3493 = data
  i3492.m_Min = i3493[0]
  i3492.m_Max = i3493[1]
  i3492.m_Bounciness = i3493[2]
  i3492.m_BounceMinVelocity = i3493[3]
  i3492.m_ContactDistance = i3493[4]
  i3492.minBounce = i3493[5]
  i3492.maxBounce = i3493[6]
  return i3492
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3494 = root || request.c( 'UnityEngine.JointDrive' )
  var i3495 = data
  i3494.m_PositionSpring = i3495[0]
  i3494.m_PositionDamper = i3495[1]
  i3494.m_MaximumForce = i3495[2]
  i3494.m_UseAcceleration = i3495[3]
  return i3494
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3496 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3497 = data
  i3496.m_Spring = i3497[0]
  i3496.m_Damper = i3497[1]
  return i3496
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3498 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3499 = data
  i3498.m_Limit = i3499[0]
  i3498.m_Bounciness = i3499[1]
  i3498.m_ContactDistance = i3499[2]
  return i3498
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3500 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3501 = data
  i3500.m_ExtremumSlip = i3501[0]
  i3500.m_ExtremumValue = i3501[1]
  i3500.m_AsymptoteSlip = i3501[2]
  i3500.m_AsymptoteValue = i3501[3]
  i3500.m_Stiffness = i3501[4]
  return i3500
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3502 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3503 = data
  i3502.m_LowerAngle = i3503[0]
  i3502.m_UpperAngle = i3503[1]
  return i3502
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3504 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3505 = data
  i3504.m_MotorSpeed = i3505[0]
  i3504.m_MaximumMotorTorque = i3505[1]
  return i3504
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3506 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3507 = data
  i3506.m_DampingRatio = i3507[0]
  i3506.m_Frequency = i3507[1]
  i3506.m_Angle = i3507[2]
  return i3506
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3508 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3509 = data
  i3508.m_LowerTranslation = i3509[0]
  i3508.m_UpperTranslation = i3509[1]
  return i3508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3510 = root || new pc.UnityMaterial()
  var i3511 = data
  i3510.name = i3511[0]
  request.r(i3511[1], i3511[2], 0, i3510, 'shader')
  i3510.renderQueue = i3511[3]
  i3510.enableInstancing = !!i3511[4]
  var i3513 = i3511[5]
  var i3512 = []
  for(var i = 0; i < i3513.length; i += 1) {
    i3512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3513[i + 0]) );
  }
  i3510.floatParameters = i3512
  var i3515 = i3511[6]
  var i3514 = []
  for(var i = 0; i < i3515.length; i += 1) {
    i3514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3515[i + 0]) );
  }
  i3510.colorParameters = i3514
  var i3517 = i3511[7]
  var i3516 = []
  for(var i = 0; i < i3517.length; i += 1) {
    i3516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3517[i + 0]) );
  }
  i3510.vectorParameters = i3516
  var i3519 = i3511[8]
  var i3518 = []
  for(var i = 0; i < i3519.length; i += 1) {
    i3518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3519[i + 0]) );
  }
  i3510.textureParameters = i3518
  var i3521 = i3511[9]
  var i3520 = []
  for(var i = 0; i < i3521.length; i += 1) {
    i3520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3521[i + 0]) );
  }
  i3510.materialFlags = i3520
  return i3510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3525 = data
  i3524.name = i3525[0]
  i3524.value = i3525[1]
  return i3524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3529 = data
  i3528.name = i3529[0]
  i3528.value = new pc.Color(i3529[1], i3529[2], i3529[3], i3529[4])
  return i3528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3533 = data
  i3532.name = i3533[0]
  i3532.value = new pc.Vec4( i3533[1], i3533[2], i3533[3], i3533[4] )
  return i3532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3537 = data
  i3536.name = i3537[0]
  request.r(i3537[1], i3537[2], 0, i3536, 'value')
  return i3536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3541 = data
  i3540.name = i3541[0]
  i3540.enabled = !!i3541[1]
  return i3540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3543 = data
  i3542.name = i3543[0]
  i3542.width = i3543[1]
  i3542.height = i3543[2]
  i3542.mipmapCount = i3543[3]
  i3542.anisoLevel = i3543[4]
  i3542.filterMode = i3543[5]
  i3542.hdr = !!i3543[6]
  i3542.format = i3543[7]
  i3542.wrapMode = i3543[8]
  i3542.alphaIsTransparency = !!i3543[9]
  i3542.alphaSource = i3543[10]
  i3542.graphicsFormat = i3543[11]
  i3542.sRGBTexture = !!i3543[12]
  i3542.desiredColorSpace = i3543[13]
  i3542.wrapU = i3543[14]
  i3542.wrapV = i3543[15]
  return i3542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3545 = data
  i3544.name = i3545[0]
  i3544.index = i3545[1]
  i3544.startup = !!i3545[2]
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3547 = data
  i3546.position = new pc.Vec3( i3547[0], i3547[1], i3547[2] )
  i3546.scale = new pc.Vec3( i3547[3], i3547[4], i3547[5] )
  i3546.rotation = new pc.Quat(i3547[6], i3547[7], i3547[8], i3547[9])
  return i3546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3549 = data
  i3548.enabled = !!i3549[0]
  i3548.aspect = i3549[1]
  i3548.orthographic = !!i3549[2]
  i3548.orthographicSize = i3549[3]
  i3548.backgroundColor = new pc.Color(i3549[4], i3549[5], i3549[6], i3549[7])
  i3548.nearClipPlane = i3549[8]
  i3548.farClipPlane = i3549[9]
  i3548.fieldOfView = i3549[10]
  i3548.depth = i3549[11]
  i3548.clearFlags = i3549[12]
  i3548.cullingMask = i3549[13]
  i3548.rect = i3549[14]
  request.r(i3549[15], i3549[16], 0, i3548, 'targetTexture')
  i3548.usePhysicalProperties = !!i3549[17]
  i3548.focalLength = i3549[18]
  i3548.sensorSize = new pc.Vec2( i3549[19], i3549[20] )
  i3548.lensShift = new pc.Vec2( i3549[21], i3549[22] )
  i3548.gateFit = i3549[23]
  i3548.commandBufferCount = i3549[24]
  i3548.cameraType = i3549[25]
  return i3548
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i3550 = root || request.c( 'CameraAspectFitter' )
  var i3551 = data
  request.r(i3551[0], i3551[1], 0, i3550, 'targetSprite')
  return i3550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3553 = data
  i3552.name = i3553[0]
  i3552.tagId = i3553[1]
  i3552.enabled = !!i3553[2]
  i3552.isStatic = !!i3553[3]
  i3552.layer = i3553[4]
  return i3552
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i3554 = root || request.c( 'AudioManager' )
  var i3555 = data
  request.r(i3555[0], i3555[1], 0, i3554, 'library')
  i3554.sfxPoolSize = i3555[2]
  return i3554
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i3556 = root || request.c( 'TaskManager' )
  var i3557 = data
  return i3556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3559 = data
  i3558.enabled = !!i3559[0]
  request.r(i3559[1], i3559[2], 0, i3558, 'sharedMaterial')
  var i3561 = i3559[3]
  var i3560 = []
  for(var i = 0; i < i3561.length; i += 2) {
  request.r(i3561[i + 0], i3561[i + 1], 2, i3560, '')
  }
  i3558.sharedMaterials = i3560
  i3558.receiveShadows = !!i3559[4]
  i3558.shadowCastingMode = i3559[5]
  i3558.sortingLayerID = i3559[6]
  i3558.sortingOrder = i3559[7]
  i3558.lightmapIndex = i3559[8]
  i3558.lightmapSceneIndex = i3559[9]
  i3558.lightmapScaleOffset = new pc.Vec4( i3559[10], i3559[11], i3559[12], i3559[13] )
  i3558.lightProbeUsage = i3559[14]
  i3558.reflectionProbeUsage = i3559[15]
  i3558.color = new pc.Color(i3559[16], i3559[17], i3559[18], i3559[19])
  request.r(i3559[20], i3559[21], 0, i3558, 'sprite')
  i3558.flipX = !!i3559[22]
  i3558.flipY = !!i3559[23]
  i3558.drawMode = i3559[24]
  i3558.size = new pc.Vec2( i3559[25], i3559[26] )
  i3558.tileMode = i3559[27]
  i3558.adaptiveModeThreshold = i3559[28]
  i3558.maskInteraction = i3559[29]
  i3558.spriteSortPoint = i3559[30]
  return i3558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3565 = data
  i3564.pivot = new pc.Vec2( i3565[0], i3565[1] )
  i3564.anchorMin = new pc.Vec2( i3565[2], i3565[3] )
  i3564.anchorMax = new pc.Vec2( i3565[4], i3565[5] )
  i3564.sizeDelta = new pc.Vec2( i3565[6], i3565[7] )
  i3564.anchoredPosition3D = new pc.Vec3( i3565[8], i3565[9], i3565[10] )
  i3564.rotation = new pc.Quat(i3565[11], i3565[12], i3565[13], i3565[14])
  i3564.scale = new pc.Vec3( i3565[15], i3565[16], i3565[17] )
  return i3564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3567 = data
  i3566.enabled = !!i3567[0]
  i3566.planeDistance = i3567[1]
  i3566.referencePixelsPerUnit = i3567[2]
  i3566.isFallbackOverlay = !!i3567[3]
  i3566.renderMode = i3567[4]
  i3566.renderOrder = i3567[5]
  i3566.sortingLayerName = i3567[6]
  i3566.sortingOrder = i3567[7]
  i3566.scaleFactor = i3567[8]
  request.r(i3567[9], i3567[10], 0, i3566, 'worldCamera')
  i3566.overrideSorting = !!i3567[11]
  i3566.pixelPerfect = !!i3567[12]
  i3566.targetDisplay = i3567[13]
  i3566.overridePixelPerfect = !!i3567[14]
  return i3566
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3568 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3569 = data
  i3568.m_UiScaleMode = i3569[0]
  i3568.m_ReferencePixelsPerUnit = i3569[1]
  i3568.m_ScaleFactor = i3569[2]
  i3568.m_ReferenceResolution = new pc.Vec2( i3569[3], i3569[4] )
  i3568.m_ScreenMatchMode = i3569[5]
  i3568.m_MatchWidthOrHeight = i3569[6]
  i3568.m_PhysicalUnit = i3569[7]
  i3568.m_FallbackScreenDPI = i3569[8]
  i3568.m_DefaultSpriteDPI = i3569[9]
  i3568.m_DynamicPixelsPerUnit = i3569[10]
  i3568.m_PresetInfoIsWorld = !!i3569[11]
  return i3568
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3570 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3571 = data
  i3570.m_IgnoreReversedGraphics = !!i3571[0]
  i3570.m_BlockingObjects = i3571[1]
  i3570.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3571[2] )
  return i3570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3573 = data
  i3572.cullTransparentMesh = !!i3573[0]
  return i3572
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3574 = root || request.c( 'UnityEngine.UI.Image' )
  var i3575 = data
  request.r(i3575[0], i3575[1], 0, i3574, 'm_Sprite')
  i3574.m_Type = i3575[2]
  i3574.m_PreserveAspect = !!i3575[3]
  i3574.m_FillCenter = !!i3575[4]
  i3574.m_FillMethod = i3575[5]
  i3574.m_FillAmount = i3575[6]
  i3574.m_FillClockwise = !!i3575[7]
  i3574.m_FillOrigin = i3575[8]
  i3574.m_UseSpriteMesh = !!i3575[9]
  i3574.m_PixelsPerUnitMultiplier = i3575[10]
  request.r(i3575[11], i3575[12], 0, i3574, 'm_Material')
  i3574.m_Maskable = !!i3575[13]
  i3574.m_Color = new pc.Color(i3575[14], i3575[15], i3575[16], i3575[17])
  i3574.m_RaycastTarget = !!i3575[18]
  i3574.m_RaycastPadding = new pc.Vec4( i3575[19], i3575[20], i3575[21], i3575[22] )
  return i3574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3577 = data
  i3576.m_Alpha = i3577[0]
  i3576.m_Interactable = !!i3577[1]
  i3576.m_BlocksRaycasts = !!i3577[2]
  i3576.m_IgnoreParentGroups = !!i3577[3]
  i3576.enabled = !!i3577[4]
  return i3576
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i3578 = root || request.c( 'CanvasGroupAnimator' )
  var i3579 = data
  request.r(i3579[0], i3579[1], 0, i3578, 'canvasGroup')
  i3578.animateFade = !!i3579[2]
  i3578.triggerOnStart = !!i3579[3]
  i3578.isLooping = !!i3579[4]
  i3578.fadeTo = i3579[5]
  i3578.fadeDuration = i3579[6]
  i3578.fadeEaseType = i3579[7]
  return i3578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3581 = data
  request.r(i3581[0], i3581[1], 0, i3580, 'animatorController')
  request.r(i3581[2], i3581[3], 0, i3580, 'avatar')
  i3580.updateMode = i3581[4]
  i3580.hasTransformHierarchy = !!i3581[5]
  i3580.applyRootMotion = !!i3581[6]
  var i3583 = i3581[7]
  var i3582 = []
  for(var i = 0; i < i3583.length; i += 2) {
  request.r(i3583[i + 0], i3583[i + 1], 2, i3582, '')
  }
  i3580.humanBones = i3582
  i3580.enabled = !!i3581[8]
  return i3580
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3586 = root || request.c( 'UnityEngine.UI.Button' )
  var i3587 = data
  i3586.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3587[0], i3586.m_OnClick)
  i3586.m_Navigation = request.d('UnityEngine.UI.Navigation', i3587[1], i3586.m_Navigation)
  i3586.m_Transition = i3587[2]
  i3586.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3587[3], i3586.m_Colors)
  i3586.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3587[4], i3586.m_SpriteState)
  i3586.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3587[5], i3586.m_AnimationTriggers)
  i3586.m_Interactable = !!i3587[6]
  request.r(i3587[7], i3587[8], 0, i3586, 'm_TargetGraphic')
  return i3586
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3588 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3589 = data
  i3588.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3589[0], i3588.m_PersistentCalls)
  return i3588
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3590 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3591 = data
  var i3593 = i3591[0]
  var i3592 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3593.length; i += 1) {
    i3592.add(request.d('UnityEngine.Events.PersistentCall', i3593[i + 0]));
  }
  i3590.m_Calls = i3592
  return i3590
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3596 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3597 = data
  request.r(i3597[0], i3597[1], 0, i3596, 'm_Target')
  i3596.m_TargetAssemblyTypeName = i3597[2]
  i3596.m_MethodName = i3597[3]
  i3596.m_Mode = i3597[4]
  i3596.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3597[5], i3596.m_Arguments)
  i3596.m_CallState = i3597[6]
  return i3596
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3598 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3599 = data
  request.r(i3599[0], i3599[1], 0, i3598, 'm_ObjectArgument')
  i3598.m_ObjectArgumentAssemblyTypeName = i3599[2]
  i3598.m_IntArgument = i3599[3]
  i3598.m_FloatArgument = i3599[4]
  i3598.m_StringArgument = i3599[5]
  i3598.m_BoolArgument = !!i3599[6]
  return i3598
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3600 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3601 = data
  i3600.m_Mode = i3601[0]
  i3600.m_WrapAround = !!i3601[1]
  request.r(i3601[2], i3601[3], 0, i3600, 'm_SelectOnUp')
  request.r(i3601[4], i3601[5], 0, i3600, 'm_SelectOnDown')
  request.r(i3601[6], i3601[7], 0, i3600, 'm_SelectOnLeft')
  request.r(i3601[8], i3601[9], 0, i3600, 'm_SelectOnRight')
  return i3600
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3602 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3603 = data
  i3602.m_NormalColor = new pc.Color(i3603[0], i3603[1], i3603[2], i3603[3])
  i3602.m_HighlightedColor = new pc.Color(i3603[4], i3603[5], i3603[6], i3603[7])
  i3602.m_PressedColor = new pc.Color(i3603[8], i3603[9], i3603[10], i3603[11])
  i3602.m_SelectedColor = new pc.Color(i3603[12], i3603[13], i3603[14], i3603[15])
  i3602.m_DisabledColor = new pc.Color(i3603[16], i3603[17], i3603[18], i3603[19])
  i3602.m_ColorMultiplier = i3603[20]
  i3602.m_FadeDuration = i3603[21]
  return i3602
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3604 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3605 = data
  request.r(i3605[0], i3605[1], 0, i3604, 'm_HighlightedSprite')
  request.r(i3605[2], i3605[3], 0, i3604, 'm_PressedSprite')
  request.r(i3605[4], i3605[5], 0, i3604, 'm_SelectedSprite')
  request.r(i3605[6], i3605[7], 0, i3604, 'm_DisabledSprite')
  return i3604
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3606 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3607 = data
  i3606.m_NormalTrigger = i3607[0]
  i3606.m_HighlightedTrigger = i3607[1]
  i3606.m_PressedTrigger = i3607[2]
  i3606.m_SelectedTrigger = i3607[3]
  i3606.m_DisabledTrigger = i3607[4]
  return i3606
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i3608 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i3609 = data
  i3608.m_Spacing = i3609[0]
  i3608.m_ChildForceExpandWidth = !!i3609[1]
  i3608.m_ChildForceExpandHeight = !!i3609[2]
  i3608.m_ChildControlWidth = !!i3609[3]
  i3608.m_ChildControlHeight = !!i3609[4]
  i3608.m_ChildScaleWidth = !!i3609[5]
  i3608.m_ChildScaleHeight = !!i3609[6]
  i3608.m_ReverseArrangement = !!i3609[7]
  i3608.m_Padding = UnityEngine.RectOffset.FromPaddings(i3609[8], i3609[9], i3609[10], i3609[11])
  i3608.m_ChildAlignment = i3609[12]
  return i3608
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3610 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3611 = data
  i3610.m_ShowMaskGraphic = !!i3611[0]
  return i3610
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i3612 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i3613 = data
  request.r(i3613[0], i3613[1], 0, i3612, 'm_Content')
  i3612.m_Horizontal = !!i3613[2]
  i3612.m_Vertical = !!i3613[3]
  i3612.m_MovementType = i3613[4]
  i3612.m_Elasticity = i3613[5]
  i3612.m_Inertia = !!i3613[6]
  i3612.m_DecelerationRate = i3613[7]
  i3612.m_ScrollSensitivity = i3613[8]
  request.r(i3613[9], i3613[10], 0, i3612, 'm_Viewport')
  request.r(i3613[11], i3613[12], 0, i3612, 'm_HorizontalScrollbar')
  request.r(i3613[13], i3613[14], 0, i3612, 'm_VerticalScrollbar')
  i3612.m_HorizontalScrollbarVisibility = i3613[15]
  i3612.m_VerticalScrollbarVisibility = i3613[16]
  i3612.m_HorizontalScrollbarSpacing = i3613[17]
  i3612.m_VerticalScrollbarSpacing = i3613[18]
  i3612.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i3613[19], i3612.m_OnValueChanged)
  return i3612
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i3614 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i3615 = data
  i3614.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3615[0], i3614.m_PersistentCalls)
  return i3614
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i3616 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i3617 = data
  request.r(i3617[0], i3617[1], 0, i3616, 'm_HandleRect')
  i3616.m_Direction = i3617[2]
  i3616.m_Value = i3617[3]
  i3616.m_Size = i3617[4]
  i3616.m_NumberOfSteps = i3617[5]
  i3616.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i3617[6], i3616.m_OnValueChanged)
  i3616.m_Navigation = request.d('UnityEngine.UI.Navigation', i3617[7], i3616.m_Navigation)
  i3616.m_Transition = i3617[8]
  i3616.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3617[9], i3616.m_Colors)
  i3616.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3617[10], i3616.m_SpriteState)
  i3616.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3617[11], i3616.m_AnimationTriggers)
  i3616.m_Interactable = !!i3617[12]
  request.r(i3617[13], i3617[14], 0, i3616, 'm_TargetGraphic')
  return i3616
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i3618 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i3619 = data
  i3618.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3619[0], i3618.m_PersistentCalls)
  return i3618
}

Deserializers["DragToResizeLeft"] = function (request, data, root) {
  var i3620 = root || request.c( 'DragToResizeLeft' )
  var i3621 = data
  request.r(i3621[0], i3621[1], 0, i3620, 'target')
  i3620.minWidth = i3621[2]
  return i3620
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3622 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3623 = data
  request.r(i3623[0], i3623[1], 0, i3622, 'm_FirstSelected')
  i3622.m_sendNavigationEvents = !!i3623[2]
  i3622.m_DragThreshold = i3623[3]
  return i3622
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3624 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3625 = data
  i3624.m_HorizontalAxis = i3625[0]
  i3624.m_VerticalAxis = i3625[1]
  i3624.m_SubmitButton = i3625[2]
  i3624.m_CancelButton = i3625[3]
  i3624.m_InputActionsPerSecond = i3625[4]
  i3624.m_RepeatDelay = i3625[5]
  i3624.m_ForceModuleActive = !!i3625[6]
  i3624.m_SendPointerHoverToParent = !!i3625[7]
  return i3624
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i3626 = root || request.c( 'ButtonPulse' )
  var i3627 = data
  i3626.scaleAmount = i3627[0]
  i3626.pulseDuration = i3627[1]
  return i3626
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i3628 = root || request.c( 'StartClickHandler' )
  var i3629 = data
  return i3628
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3630 = root || request.c( 'GameManager' )
  var i3631 = data
  request.r(i3631[0], i3631[1], 0, i3630, 'endPanel')
  i3630.end = !!i3631[2]
  request.r(i3631[3], i3631[4], 0, i3630, 'hand')
  request.r(i3631[5], i3631[6], 0, i3630, 'hand2')
  i3630.enableSound = !!i3631[7]
  request.r(i3631[8], i3631[9], 0, i3630, 'startClickHandler')
  i3630.currentScore = i3631[10]
  request.r(i3631[11], i3631[12], 0, i3630, 'BodyToSummarize')
  request.r(i3631[13], i3631[14], 0, i3630, 'SummarizedText')
  request.r(i3631[15], i3631[16], 0, i3630, 'transcriptBtnBlue')
  request.r(i3631[17], i3631[18], 0, i3630, 'transcriptBtn')
  request.r(i3631[19], i3631[20], 0, i3630, 'summaryBtn')
  request.r(i3631[21], i3631[22], 0, i3630, 'summaryBtnBlue')
  request.r(i3631[23], i3631[24], 0, i3630, 'mainPanel')
  request.r(i3631[25], i3631[26], 0, i3630, 'handle1')
  request.r(i3631[27], i3631[28], 0, i3630, 'animator')
  request.r(i3631[29], i3631[30], 0, i3630, 'maskA')
  request.r(i3631[31], i3631[32], 0, i3630, 'filter')
  request.r(i3631[33], i3631[34], 0, i3630, 'arrow')
  request.r(i3631[35], i3631[36], 0, i3630, 'toTap')
  request.r(i3631[37], i3631[38], 0, i3630, 'openingPanel')
  return i3630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3633 = data
  i3632.ambientIntensity = i3633[0]
  i3632.reflectionIntensity = i3633[1]
  i3632.ambientMode = i3633[2]
  i3632.ambientLight = new pc.Color(i3633[3], i3633[4], i3633[5], i3633[6])
  i3632.ambientSkyColor = new pc.Color(i3633[7], i3633[8], i3633[9], i3633[10])
  i3632.ambientGroundColor = new pc.Color(i3633[11], i3633[12], i3633[13], i3633[14])
  i3632.ambientEquatorColor = new pc.Color(i3633[15], i3633[16], i3633[17], i3633[18])
  i3632.fogColor = new pc.Color(i3633[19], i3633[20], i3633[21], i3633[22])
  i3632.fogEndDistance = i3633[23]
  i3632.fogStartDistance = i3633[24]
  i3632.fogDensity = i3633[25]
  i3632.fog = !!i3633[26]
  request.r(i3633[27], i3633[28], 0, i3632, 'skybox')
  i3632.fogMode = i3633[29]
  var i3635 = i3633[30]
  var i3634 = []
  for(var i = 0; i < i3635.length; i += 1) {
    i3634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3635[i + 0]) );
  }
  i3632.lightmaps = i3634
  i3632.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3633[31], i3632.lightProbes)
  i3632.lightmapsMode = i3633[32]
  i3632.mixedBakeMode = i3633[33]
  i3632.environmentLightingMode = i3633[34]
  i3632.ambientProbe = new pc.SphericalHarmonicsL2(i3633[35])
  i3632.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3633[36])
  i3632.useReferenceAmbientProbe = !!i3633[37]
  request.r(i3633[38], i3633[39], 0, i3632, 'customReflection')
  request.r(i3633[40], i3633[41], 0, i3632, 'defaultReflection')
  i3632.defaultReflectionMode = i3633[42]
  i3632.defaultReflectionResolution = i3633[43]
  i3632.sunLightObjectId = i3633[44]
  i3632.pixelLightCount = i3633[45]
  i3632.defaultReflectionHDR = !!i3633[46]
  i3632.hasLightDataAsset = !!i3633[47]
  i3632.hasManualGenerate = !!i3633[48]
  return i3632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3639 = data
  request.r(i3639[0], i3639[1], 0, i3638, 'lightmapColor')
  request.r(i3639[2], i3639[3], 0, i3638, 'lightmapDirection')
  return i3638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3640 = root || new UnityEngine.LightProbes()
  var i3641 = data
  return i3640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3649 = data
  var i3651 = i3649[0]
  var i3650 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3651.length; i += 1) {
    i3650.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3651[i + 0]));
  }
  i3648.ShaderCompilationErrors = i3650
  i3648.name = i3649[1]
  i3648.guid = i3649[2]
  var i3653 = i3649[3]
  var i3652 = []
  for(var i = 0; i < i3653.length; i += 1) {
    i3652.push( i3653[i + 0] );
  }
  i3648.shaderDefinedKeywords = i3652
  var i3655 = i3649[4]
  var i3654 = []
  for(var i = 0; i < i3655.length; i += 1) {
    i3654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3655[i + 0]) );
  }
  i3648.passes = i3654
  var i3657 = i3649[5]
  var i3656 = []
  for(var i = 0; i < i3657.length; i += 1) {
    i3656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3657[i + 0]) );
  }
  i3648.usePasses = i3656
  var i3659 = i3649[6]
  var i3658 = []
  for(var i = 0; i < i3659.length; i += 1) {
    i3658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3659[i + 0]) );
  }
  i3648.defaultParameterValues = i3658
  request.r(i3649[7], i3649[8], 0, i3648, 'unityFallbackShader')
  i3648.readDepth = !!i3649[9]
  i3648.isCreatedByShaderGraph = !!i3649[10]
  i3648.compiled = !!i3649[11]
  return i3648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3663 = data
  i3662.shaderName = i3663[0]
  i3662.errorMessage = i3663[1]
  return i3662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3668 = root || new pc.UnityShaderPass()
  var i3669 = data
  i3668.id = i3669[0]
  i3668.subShaderIndex = i3669[1]
  i3668.name = i3669[2]
  i3668.passType = i3669[3]
  i3668.grabPassTextureName = i3669[4]
  i3668.usePass = !!i3669[5]
  i3668.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3669[6], i3668.zTest)
  i3668.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3669[7], i3668.zWrite)
  i3668.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3669[8], i3668.culling)
  i3668.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3669[9], i3668.blending)
  i3668.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3669[10], i3668.alphaBlending)
  i3668.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3669[11], i3668.colorWriteMask)
  i3668.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3669[12], i3668.offsetUnits)
  i3668.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3669[13], i3668.offsetFactor)
  i3668.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3669[14], i3668.stencilRef)
  i3668.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3669[15], i3668.stencilReadMask)
  i3668.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3669[16], i3668.stencilWriteMask)
  i3668.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3669[17], i3668.stencilOp)
  i3668.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3669[18], i3668.stencilOpFront)
  i3668.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3669[19], i3668.stencilOpBack)
  var i3671 = i3669[20]
  var i3670 = []
  for(var i = 0; i < i3671.length; i += 1) {
    i3670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3671[i + 0]) );
  }
  i3668.tags = i3670
  var i3673 = i3669[21]
  var i3672 = []
  for(var i = 0; i < i3673.length; i += 1) {
    i3672.push( i3673[i + 0] );
  }
  i3668.passDefinedKeywords = i3672
  var i3675 = i3669[22]
  var i3674 = []
  for(var i = 0; i < i3675.length; i += 1) {
    i3674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3675[i + 0]) );
  }
  i3668.passDefinedKeywordGroups = i3674
  var i3677 = i3669[23]
  var i3676 = []
  for(var i = 0; i < i3677.length; i += 1) {
    i3676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3677[i + 0]) );
  }
  i3668.variants = i3676
  var i3679 = i3669[24]
  var i3678 = []
  for(var i = 0; i < i3679.length; i += 1) {
    i3678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3679[i + 0]) );
  }
  i3668.excludedVariants = i3678
  i3668.hasDepthReader = !!i3669[25]
  return i3668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3681 = data
  i3680.val = i3681[0]
  i3680.name = i3681[1]
  return i3680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3683 = data
  i3682.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3683[0], i3682.src)
  i3682.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3683[1], i3682.dst)
  i3682.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3683[2], i3682.op)
  return i3682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3685 = data
  i3684.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3685[0], i3684.pass)
  i3684.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3685[1], i3684.fail)
  i3684.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3685[2], i3684.zFail)
  i3684.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3685[3], i3684.comp)
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3689 = data
  i3688.name = i3689[0]
  i3688.value = i3689[1]
  return i3688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3693 = data
  var i3695 = i3693[0]
  var i3694 = []
  for(var i = 0; i < i3695.length; i += 1) {
    i3694.push( i3695[i + 0] );
  }
  i3692.keywords = i3694
  i3692.hasDiscard = !!i3693[1]
  return i3692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3699 = data
  i3698.passId = i3699[0]
  i3698.subShaderIndex = i3699[1]
  var i3701 = i3699[2]
  var i3700 = []
  for(var i = 0; i < i3701.length; i += 1) {
    i3700.push( i3701[i + 0] );
  }
  i3698.keywords = i3700
  i3698.vertexProgram = i3699[3]
  i3698.fragmentProgram = i3699[4]
  i3698.exportedForWebGl2 = !!i3699[5]
  i3698.readDepth = !!i3699[6]
  return i3698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3705 = data
  request.r(i3705[0], i3705[1], 0, i3704, 'shader')
  i3704.pass = i3705[2]
  return i3704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3709 = data
  i3708.name = i3709[0]
  i3708.type = i3709[1]
  i3708.value = new pc.Vec4( i3709[2], i3709[3], i3709[4], i3709[5] )
  i3708.textureValue = i3709[6]
  i3708.shaderPropertyFlag = i3709[7]
  return i3708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3711 = data
  i3710.name = i3711[0]
  request.r(i3711[1], i3711[2], 0, i3710, 'texture')
  i3710.aabb = i3711[3]
  i3710.vertices = i3711[4]
  i3710.triangles = i3711[5]
  i3710.textureRect = UnityEngine.Rect.MinMaxRect(i3711[6], i3711[7], i3711[8], i3711[9])
  i3710.packedRect = UnityEngine.Rect.MinMaxRect(i3711[10], i3711[11], i3711[12], i3711[13])
  i3710.border = new pc.Vec4( i3711[14], i3711[15], i3711[16], i3711[17] )
  i3710.transparency = i3711[18]
  i3710.bounds = i3711[19]
  i3710.pixelsPerUnit = i3711[20]
  i3710.textureWidth = i3711[21]
  i3710.textureHeight = i3711[22]
  i3710.nativeSize = new pc.Vec2( i3711[23], i3711[24] )
  i3710.pivot = new pc.Vec2( i3711[25], i3711[26] )
  i3710.textureRectOffset = new pc.Vec2( i3711[27], i3711[28] )
  return i3710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3713 = data
  i3712.name = i3713[0]
  return i3712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3715 = data
  i3714.name = i3715[0]
  i3714.wrapMode = i3715[1]
  i3714.isLooping = !!i3715[2]
  i3714.length = i3715[3]
  var i3717 = i3715[4]
  var i3716 = []
  for(var i = 0; i < i3717.length; i += 1) {
    i3716.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3717[i + 0]) );
  }
  i3714.curves = i3716
  var i3719 = i3715[5]
  var i3718 = []
  for(var i = 0; i < i3719.length; i += 1) {
    i3718.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3719[i + 0]) );
  }
  i3714.events = i3718
  i3714.halfPrecision = !!i3715[6]
  i3714._frameRate = i3715[7]
  i3714.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3715[8], i3714.localBounds)
  i3714.hasMuscleCurves = !!i3715[9]
  var i3721 = i3715[10]
  var i3720 = []
  for(var i = 0; i < i3721.length; i += 1) {
    i3720.push( i3721[i + 0] );
  }
  i3714.clipMuscleConstant = i3720
  i3714.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3715[11], i3714.clipBindingConstant)
  return i3714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3725 = data
  i3724.path = i3725[0]
  i3724.hash = i3725[1]
  i3724.componentType = i3725[2]
  i3724.property = i3725[3]
  i3724.keys = i3725[4]
  var i3727 = i3725[5]
  var i3726 = []
  for(var i = 0; i < i3727.length; i += 1) {
    i3726.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3727[i + 0]) );
  }
  i3724.objectReferenceKeys = i3726
  return i3724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3731 = data
  i3730.time = i3731[0]
  request.r(i3731[1], i3731[2], 0, i3730, 'value')
  return i3730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3735 = data
  i3734.functionName = i3735[0]
  i3734.floatParameter = i3735[1]
  i3734.intParameter = i3735[2]
  i3734.stringParameter = i3735[3]
  request.r(i3735[4], i3735[5], 0, i3734, 'objectReferenceParameter')
  i3734.time = i3735[6]
  return i3734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3737 = data
  i3736.center = new pc.Vec3( i3737[0], i3737[1], i3737[2] )
  i3736.extends = new pc.Vec3( i3737[3], i3737[4], i3737[5] )
  return i3736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3741 = data
  var i3743 = i3741[0]
  var i3742 = []
  for(var i = 0; i < i3743.length; i += 1) {
    i3742.push( i3743[i + 0] );
  }
  i3740.genericBindings = i3742
  var i3745 = i3741[1]
  var i3744 = []
  for(var i = 0; i < i3745.length; i += 1) {
    i3744.push( i3745[i + 0] );
  }
  i3740.pptrCurveMapping = i3744
  return i3740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3747 = data
  i3746.name = i3747[0]
  var i3749 = i3747[1]
  var i3748 = []
  for(var i = 0; i < i3749.length; i += 1) {
    i3748.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3749[i + 0]) );
  }
  i3746.layers = i3748
  var i3751 = i3747[2]
  var i3750 = []
  for(var i = 0; i < i3751.length; i += 1) {
    i3750.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3751[i + 0]) );
  }
  i3746.parameters = i3750
  i3746.animationClips = i3747[3]
  i3746.avatarUnsupported = i3747[4]
  return i3746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3755 = data
  i3754.name = i3755[0]
  i3754.defaultWeight = i3755[1]
  i3754.blendingMode = i3755[2]
  i3754.avatarMask = i3755[3]
  i3754.syncedLayerIndex = i3755[4]
  i3754.syncedLayerAffectsTiming = !!i3755[5]
  i3754.syncedLayers = i3755[6]
  i3754.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3755[7], i3754.stateMachine)
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3757 = data
  i3756.id = i3757[0]
  i3756.name = i3757[1]
  i3756.path = i3757[2]
  var i3759 = i3757[3]
  var i3758 = []
  for(var i = 0; i < i3759.length; i += 1) {
    i3758.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3759[i + 0]) );
  }
  i3756.states = i3758
  var i3761 = i3757[4]
  var i3760 = []
  for(var i = 0; i < i3761.length; i += 1) {
    i3760.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3761[i + 0]) );
  }
  i3756.machines = i3760
  var i3763 = i3757[5]
  var i3762 = []
  for(var i = 0; i < i3763.length; i += 1) {
    i3762.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3763[i + 0]) );
  }
  i3756.entryStateTransitions = i3762
  var i3765 = i3757[6]
  var i3764 = []
  for(var i = 0; i < i3765.length; i += 1) {
    i3764.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3765[i + 0]) );
  }
  i3756.exitStateTransitions = i3764
  var i3767 = i3757[7]
  var i3766 = []
  for(var i = 0; i < i3767.length; i += 1) {
    i3766.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3767[i + 0]) );
  }
  i3756.anyStateTransitions = i3766
  i3756.defaultStateId = i3757[8]
  return i3756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3771 = data
  i3770.id = i3771[0]
  i3770.name = i3771[1]
  i3770.cycleOffset = i3771[2]
  i3770.cycleOffsetParameter = i3771[3]
  i3770.cycleOffsetParameterActive = !!i3771[4]
  i3770.mirror = !!i3771[5]
  i3770.mirrorParameter = i3771[6]
  i3770.mirrorParameterActive = !!i3771[7]
  i3770.motionId = i3771[8]
  i3770.nameHash = i3771[9]
  i3770.fullPathHash = i3771[10]
  i3770.speed = i3771[11]
  i3770.speedParameter = i3771[12]
  i3770.speedParameterActive = !!i3771[13]
  i3770.tag = i3771[14]
  i3770.tagHash = i3771[15]
  i3770.writeDefaultValues = !!i3771[16]
  var i3773 = i3771[17]
  var i3772 = []
  for(var i = 0; i < i3773.length; i += 2) {
  request.r(i3773[i + 0], i3773[i + 1], 2, i3772, '')
  }
  i3770.behaviours = i3772
  var i3775 = i3771[18]
  var i3774 = []
  for(var i = 0; i < i3775.length; i += 1) {
    i3774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3775[i + 0]) );
  }
  i3770.transitions = i3774
  return i3770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3781 = data
  i3780.fullPath = i3781[0]
  i3780.canTransitionToSelf = !!i3781[1]
  i3780.duration = i3781[2]
  i3780.exitTime = i3781[3]
  i3780.hasExitTime = !!i3781[4]
  i3780.hasFixedDuration = !!i3781[5]
  i3780.interruptionSource = i3781[6]
  i3780.offset = i3781[7]
  i3780.orderedInterruption = !!i3781[8]
  i3780.destinationStateId = i3781[9]
  i3780.isExit = !!i3781[10]
  i3780.mute = !!i3781[11]
  i3780.solo = !!i3781[12]
  var i3783 = i3781[13]
  var i3782 = []
  for(var i = 0; i < i3783.length; i += 1) {
    i3782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3783[i + 0]) );
  }
  i3780.conditions = i3782
  return i3780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3789 = data
  i3788.destinationStateId = i3789[0]
  i3788.isExit = !!i3789[1]
  i3788.mute = !!i3789[2]
  i3788.solo = !!i3789[3]
  var i3791 = i3789[4]
  var i3790 = []
  for(var i = 0; i < i3791.length; i += 1) {
    i3790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3791[i + 0]) );
  }
  i3788.conditions = i3790
  return i3788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3795 = data
  i3794.defaultBool = !!i3795[0]
  i3794.defaultFloat = i3795[1]
  i3794.defaultInt = i3795[2]
  i3794.name = i3795[3]
  i3794.nameHash = i3795[4]
  i3794.type = i3795[5]
  return i3794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3799 = data
  i3798.mode = i3799[0]
  i3798.parameter = i3799[1]
  i3798.threshold = i3799[2]
  return i3798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3801 = data
  i3800.name = i3801[0]
  i3800.bytes64 = i3801[1]
  i3800.data = i3801[2]
  return i3800
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i3802 = root || request.c( 'AudioLibrary' )
  var i3803 = data
  var i3805 = i3803[0]
  var i3804 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i3805.length; i += 1) {
    i3804.add(request.d('AudioLibrary+ClipEntry', i3805[i + 0]));
  }
  i3802.clips = i3804
  return i3802
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i3808 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i3809 = data
  i3808.key = i3809[0]
  i3808.channel = i3809[1]
  request.r(i3809[2], i3809[3], 0, i3808, 'clip')
  i3808.volume = i3809[4]
  i3808.loop = !!i3809[5]
  return i3808
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3810 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3811 = data
  i3810.useSafeMode = !!i3811[0]
  i3810.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3811[1], i3810.safeModeOptions)
  i3810.timeScale = i3811[2]
  i3810.unscaledTimeScale = i3811[3]
  i3810.useSmoothDeltaTime = !!i3811[4]
  i3810.maxSmoothUnscaledTime = i3811[5]
  i3810.rewindCallbackMode = i3811[6]
  i3810.showUnityEditorReport = !!i3811[7]
  i3810.logBehaviour = i3811[8]
  i3810.drawGizmos = !!i3811[9]
  i3810.defaultRecyclable = !!i3811[10]
  i3810.defaultAutoPlay = i3811[11]
  i3810.defaultUpdateType = i3811[12]
  i3810.defaultTimeScaleIndependent = !!i3811[13]
  i3810.defaultEaseType = i3811[14]
  i3810.defaultEaseOvershootOrAmplitude = i3811[15]
  i3810.defaultEasePeriod = i3811[16]
  i3810.defaultAutoKill = !!i3811[17]
  i3810.defaultLoopType = i3811[18]
  i3810.debugMode = !!i3811[19]
  i3810.debugStoreTargetId = !!i3811[20]
  i3810.showPreviewPanel = !!i3811[21]
  i3810.storeSettingsLocation = i3811[22]
  i3810.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3811[23], i3810.modules)
  i3810.createASMDEF = !!i3811[24]
  i3810.showPlayingTweens = !!i3811[25]
  i3810.showPausedTweens = !!i3811[26]
  return i3810
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3812 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3813 = data
  i3812.logBehaviour = i3813[0]
  i3812.nestedTweenFailureBehaviour = i3813[1]
  return i3812
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3814 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3815 = data
  i3814.showPanel = !!i3815[0]
  i3814.audioEnabled = !!i3815[1]
  i3814.physicsEnabled = !!i3815[2]
  i3814.physics2DEnabled = !!i3815[3]
  i3814.spriteEnabled = !!i3815[4]
  i3814.uiEnabled = !!i3815[5]
  i3814.textMeshProEnabled = !!i3815[6]
  i3814.tk2DEnabled = !!i3815[7]
  i3814.deAudioEnabled = !!i3815[8]
  i3814.deUnityExtendedEnabled = !!i3815[9]
  i3814.epoOutlineEnabled = !!i3815[10]
  return i3814
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3816 = root || request.c( 'TMPro.TMP_Settings' )
  var i3817 = data
  i3816.m_enableWordWrapping = !!i3817[0]
  i3816.m_enableKerning = !!i3817[1]
  i3816.m_enableExtraPadding = !!i3817[2]
  i3816.m_enableTintAllSprites = !!i3817[3]
  i3816.m_enableParseEscapeCharacters = !!i3817[4]
  i3816.m_EnableRaycastTarget = !!i3817[5]
  i3816.m_GetFontFeaturesAtRuntime = !!i3817[6]
  i3816.m_missingGlyphCharacter = i3817[7]
  i3816.m_warningsDisabled = !!i3817[8]
  request.r(i3817[9], i3817[10], 0, i3816, 'm_defaultFontAsset')
  i3816.m_defaultFontAssetPath = i3817[11]
  i3816.m_defaultFontSize = i3817[12]
  i3816.m_defaultAutoSizeMinRatio = i3817[13]
  i3816.m_defaultAutoSizeMaxRatio = i3817[14]
  i3816.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3817[15], i3817[16] )
  i3816.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3817[17], i3817[18] )
  i3816.m_autoSizeTextContainer = !!i3817[19]
  i3816.m_IsTextObjectScaleStatic = !!i3817[20]
  var i3819 = i3817[21]
  var i3818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3819.length; i += 2) {
  request.r(i3819[i + 0], i3819[i + 1], 1, i3818, '')
  }
  i3816.m_fallbackFontAssets = i3818
  i3816.m_matchMaterialPreset = !!i3817[22]
  request.r(i3817[23], i3817[24], 0, i3816, 'm_defaultSpriteAsset')
  i3816.m_defaultSpriteAssetPath = i3817[25]
  i3816.m_enableEmojiSupport = !!i3817[26]
  i3816.m_MissingCharacterSpriteUnicode = i3817[27]
  i3816.m_defaultColorGradientPresetsPath = i3817[28]
  request.r(i3817[29], i3817[30], 0, i3816, 'm_defaultStyleSheet')
  i3816.m_StyleSheetsResourcePath = i3817[31]
  request.r(i3817[32], i3817[33], 0, i3816, 'm_leadingCharacters')
  request.r(i3817[34], i3817[35], 0, i3816, 'm_followingCharacters')
  i3816.m_UseModernHangulLineBreakingRules = !!i3817[36]
  return i3816
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3822 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3823 = data
  i3822.hashCode = i3823[0]
  request.r(i3823[1], i3823[2], 0, i3822, 'material')
  i3822.materialHashCode = i3823[3]
  request.r(i3823[4], i3823[5], 0, i3822, 'atlas')
  i3822.normalStyle = i3823[6]
  i3822.normalSpacingOffset = i3823[7]
  i3822.boldStyle = i3823[8]
  i3822.boldSpacing = i3823[9]
  i3822.italicStyle = i3823[10]
  i3822.tabSize = i3823[11]
  i3822.m_Version = i3823[12]
  i3822.m_SourceFontFileGUID = i3823[13]
  request.r(i3823[14], i3823[15], 0, i3822, 'm_SourceFontFile_EditorRef')
  request.r(i3823[16], i3823[17], 0, i3822, 'm_SourceFontFile')
  i3822.m_AtlasPopulationMode = i3823[18]
  i3822.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3823[19], i3822.m_FaceInfo)
  var i3825 = i3823[20]
  var i3824 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3825.length; i += 1) {
    i3824.add(request.d('UnityEngine.TextCore.Glyph', i3825[i + 0]));
  }
  i3822.m_GlyphTable = i3824
  var i3827 = i3823[21]
  var i3826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3827.length; i += 1) {
    i3826.add(request.d('TMPro.TMP_Character', i3827[i + 0]));
  }
  i3822.m_CharacterTable = i3826
  var i3829 = i3823[22]
  var i3828 = []
  for(var i = 0; i < i3829.length; i += 2) {
  request.r(i3829[i + 0], i3829[i + 1], 2, i3828, '')
  }
  i3822.m_AtlasTextures = i3828
  i3822.m_AtlasTextureIndex = i3823[23]
  i3822.m_IsMultiAtlasTexturesEnabled = !!i3823[24]
  i3822.m_ClearDynamicDataOnBuild = !!i3823[25]
  var i3831 = i3823[26]
  var i3830 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3831.length; i += 1) {
    i3830.add(request.d('UnityEngine.TextCore.GlyphRect', i3831[i + 0]));
  }
  i3822.m_UsedGlyphRects = i3830
  var i3833 = i3823[27]
  var i3832 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3833.length; i += 1) {
    i3832.add(request.d('UnityEngine.TextCore.GlyphRect', i3833[i + 0]));
  }
  i3822.m_FreeGlyphRects = i3832
  i3822.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3823[28], i3822.m_fontInfo)
  i3822.m_AtlasWidth = i3823[29]
  i3822.m_AtlasHeight = i3823[30]
  i3822.m_AtlasPadding = i3823[31]
  i3822.m_AtlasRenderMode = i3823[32]
  var i3835 = i3823[33]
  var i3834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3835.length; i += 1) {
    i3834.add(request.d('TMPro.TMP_Glyph', i3835[i + 0]));
  }
  i3822.m_glyphInfoList = i3834
  i3822.m_KerningTable = request.d('TMPro.KerningTable', i3823[34], i3822.m_KerningTable)
  i3822.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3823[35], i3822.m_FontFeatureTable)
  var i3837 = i3823[36]
  var i3836 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3837.length; i += 2) {
  request.r(i3837[i + 0], i3837[i + 1], 1, i3836, '')
  }
  i3822.fallbackFontAssets = i3836
  var i3839 = i3823[37]
  var i3838 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3839.length; i += 2) {
  request.r(i3839[i + 0], i3839[i + 1], 1, i3838, '')
  }
  i3822.m_FallbackFontAssetTable = i3838
  i3822.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3823[38], i3822.m_CreationSettings)
  var i3841 = i3823[39]
  var i3840 = []
  for(var i = 0; i < i3841.length; i += 1) {
    i3840.push( request.d('TMPro.TMP_FontWeightPair', i3841[i + 0]) );
  }
  i3822.m_FontWeightTable = i3840
  var i3843 = i3823[40]
  var i3842 = []
  for(var i = 0; i < i3843.length; i += 1) {
    i3842.push( request.d('TMPro.TMP_FontWeightPair', i3843[i + 0]) );
  }
  i3822.fontWeights = i3842
  return i3822
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3844 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3845 = data
  i3844.m_FaceIndex = i3845[0]
  i3844.m_FamilyName = i3845[1]
  i3844.m_StyleName = i3845[2]
  i3844.m_PointSize = i3845[3]
  i3844.m_Scale = i3845[4]
  i3844.m_UnitsPerEM = i3845[5]
  i3844.m_LineHeight = i3845[6]
  i3844.m_AscentLine = i3845[7]
  i3844.m_CapLine = i3845[8]
  i3844.m_MeanLine = i3845[9]
  i3844.m_Baseline = i3845[10]
  i3844.m_DescentLine = i3845[11]
  i3844.m_SuperscriptOffset = i3845[12]
  i3844.m_SuperscriptSize = i3845[13]
  i3844.m_SubscriptOffset = i3845[14]
  i3844.m_SubscriptSize = i3845[15]
  i3844.m_UnderlineOffset = i3845[16]
  i3844.m_UnderlineThickness = i3845[17]
  i3844.m_StrikethroughOffset = i3845[18]
  i3844.m_StrikethroughThickness = i3845[19]
  i3844.m_TabWidth = i3845[20]
  return i3844
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3848 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3849 = data
  i3848.m_Index = i3849[0]
  i3848.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3849[1], i3848.m_Metrics)
  i3848.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3849[2], i3848.m_GlyphRect)
  i3848.m_Scale = i3849[3]
  i3848.m_AtlasIndex = i3849[4]
  i3848.m_ClassDefinitionType = i3849[5]
  return i3848
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3850 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3851 = data
  i3850.m_Width = i3851[0]
  i3850.m_Height = i3851[1]
  i3850.m_HorizontalBearingX = i3851[2]
  i3850.m_HorizontalBearingY = i3851[3]
  i3850.m_HorizontalAdvance = i3851[4]
  return i3850
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3852 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3853 = data
  i3852.m_X = i3853[0]
  i3852.m_Y = i3853[1]
  i3852.m_Width = i3853[2]
  i3852.m_Height = i3853[3]
  return i3852
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3856 = root || request.c( 'TMPro.TMP_Character' )
  var i3857 = data
  i3856.m_ElementType = i3857[0]
  i3856.m_Unicode = i3857[1]
  i3856.m_GlyphIndex = i3857[2]
  i3856.m_Scale = i3857[3]
  return i3856
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3862 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3863 = data
  i3862.Name = i3863[0]
  i3862.PointSize = i3863[1]
  i3862.Scale = i3863[2]
  i3862.CharacterCount = i3863[3]
  i3862.LineHeight = i3863[4]
  i3862.Baseline = i3863[5]
  i3862.Ascender = i3863[6]
  i3862.CapHeight = i3863[7]
  i3862.Descender = i3863[8]
  i3862.CenterLine = i3863[9]
  i3862.SuperscriptOffset = i3863[10]
  i3862.SubscriptOffset = i3863[11]
  i3862.SubSize = i3863[12]
  i3862.Underline = i3863[13]
  i3862.UnderlineThickness = i3863[14]
  i3862.strikethrough = i3863[15]
  i3862.strikethroughThickness = i3863[16]
  i3862.TabWidth = i3863[17]
  i3862.Padding = i3863[18]
  i3862.AtlasWidth = i3863[19]
  i3862.AtlasHeight = i3863[20]
  return i3862
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3866 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3867 = data
  i3866.id = i3867[0]
  i3866.x = i3867[1]
  i3866.y = i3867[2]
  i3866.width = i3867[3]
  i3866.height = i3867[4]
  i3866.xOffset = i3867[5]
  i3866.yOffset = i3867[6]
  i3866.xAdvance = i3867[7]
  i3866.scale = i3867[8]
  return i3866
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3868 = root || request.c( 'TMPro.KerningTable' )
  var i3869 = data
  var i3871 = i3869[0]
  var i3870 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3871.length; i += 1) {
    i3870.add(request.d('TMPro.KerningPair', i3871[i + 0]));
  }
  i3868.kerningPairs = i3870
  return i3868
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3874 = root || request.c( 'TMPro.KerningPair' )
  var i3875 = data
  i3874.xOffset = i3875[0]
  i3874.m_FirstGlyph = i3875[1]
  i3874.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3875[2], i3874.m_FirstGlyphAdjustments)
  i3874.m_SecondGlyph = i3875[3]
  i3874.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3875[4], i3874.m_SecondGlyphAdjustments)
  i3874.m_IgnoreSpacingAdjustments = !!i3875[5]
  return i3874
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3876 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3877 = data
  var i3879 = i3877[0]
  var i3878 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3879.length; i += 1) {
    i3878.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3879[i + 0]));
  }
  i3876.m_GlyphPairAdjustmentRecords = i3878
  return i3876
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3882 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3883 = data
  i3882.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3883[0], i3882.m_FirstAdjustmentRecord)
  i3882.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3883[1], i3882.m_SecondAdjustmentRecord)
  i3882.m_FeatureLookupFlags = i3883[2]
  return i3882
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3884 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3885 = data
  i3884.m_GlyphIndex = i3885[0]
  i3884.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3885[1], i3884.m_GlyphValueRecord)
  return i3884
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3886 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3887 = data
  i3886.m_XPlacement = i3887[0]
  i3886.m_YPlacement = i3887[1]
  i3886.m_XAdvance = i3887[2]
  i3886.m_YAdvance = i3887[3]
  return i3886
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3888 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3889 = data
  i3888.sourceFontFileName = i3889[0]
  i3888.sourceFontFileGUID = i3889[1]
  i3888.pointSizeSamplingMode = i3889[2]
  i3888.pointSize = i3889[3]
  i3888.padding = i3889[4]
  i3888.packingMode = i3889[5]
  i3888.atlasWidth = i3889[6]
  i3888.atlasHeight = i3889[7]
  i3888.characterSetSelectionMode = i3889[8]
  i3888.characterSequence = i3889[9]
  i3888.referencedFontAssetGUID = i3889[10]
  i3888.referencedTextAssetGUID = i3889[11]
  i3888.fontStyle = i3889[12]
  i3888.fontStyleModifier = i3889[13]
  i3888.renderMode = i3889[14]
  i3888.includeFontFeatures = !!i3889[15]
  return i3888
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3892 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3893 = data
  request.r(i3893[0], i3893[1], 0, i3892, 'regularTypeface')
  request.r(i3893[2], i3893[3], 0, i3892, 'italicTypeface')
  return i3892
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3894 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3895 = data
  i3894.hashCode = i3895[0]
  request.r(i3895[1], i3895[2], 0, i3894, 'material')
  i3894.materialHashCode = i3895[3]
  request.r(i3895[4], i3895[5], 0, i3894, 'spriteSheet')
  var i3897 = i3895[6]
  var i3896 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3897.length; i += 1) {
    i3896.add(request.d('TMPro.TMP_Sprite', i3897[i + 0]));
  }
  i3894.spriteInfoList = i3896
  var i3899 = i3895[7]
  var i3898 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3899.length; i += 2) {
  request.r(i3899[i + 0], i3899[i + 1], 1, i3898, '')
  }
  i3894.fallbackSpriteAssets = i3898
  i3894.m_Version = i3895[8]
  i3894.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3895[9], i3894.m_FaceInfo)
  var i3901 = i3895[10]
  var i3900 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3901.length; i += 1) {
    i3900.add(request.d('TMPro.TMP_SpriteCharacter', i3901[i + 0]));
  }
  i3894.m_SpriteCharacterTable = i3900
  var i3903 = i3895[11]
  var i3902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3903.length; i += 1) {
    i3902.add(request.d('TMPro.TMP_SpriteGlyph', i3903[i + 0]));
  }
  i3894.m_SpriteGlyphTable = i3902
  return i3894
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3906 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3907 = data
  i3906.name = i3907[0]
  i3906.hashCode = i3907[1]
  i3906.unicode = i3907[2]
  i3906.pivot = new pc.Vec2( i3907[3], i3907[4] )
  request.r(i3907[5], i3907[6], 0, i3906, 'sprite')
  i3906.id = i3907[7]
  i3906.x = i3907[8]
  i3906.y = i3907[9]
  i3906.width = i3907[10]
  i3906.height = i3907[11]
  i3906.xOffset = i3907[12]
  i3906.yOffset = i3907[13]
  i3906.xAdvance = i3907[14]
  i3906.scale = i3907[15]
  return i3906
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3912 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3913 = data
  i3912.m_Name = i3913[0]
  i3912.m_HashCode = i3913[1]
  i3912.m_ElementType = i3913[2]
  i3912.m_Unicode = i3913[3]
  i3912.m_GlyphIndex = i3913[4]
  i3912.m_Scale = i3913[5]
  return i3912
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3916 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3917 = data
  request.r(i3917[0], i3917[1], 0, i3916, 'sprite')
  i3916.m_Index = i3917[2]
  i3916.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3917[3], i3916.m_Metrics)
  i3916.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3917[4], i3916.m_GlyphRect)
  i3916.m_Scale = i3917[5]
  i3916.m_AtlasIndex = i3917[6]
  i3916.m_ClassDefinitionType = i3917[7]
  return i3916
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3918 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3919 = data
  var i3921 = i3919[0]
  var i3920 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3921.length; i += 1) {
    i3920.add(request.d('TMPro.TMP_Style', i3921[i + 0]));
  }
  i3918.m_StyleList = i3920
  return i3918
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3924 = root || request.c( 'TMPro.TMP_Style' )
  var i3925 = data
  i3924.m_Name = i3925[0]
  i3924.m_HashCode = i3925[1]
  i3924.m_OpeningDefinition = i3925[2]
  i3924.m_ClosingDefinition = i3925[3]
  i3924.m_OpeningTagArray = i3925[4]
  i3924.m_ClosingTagArray = i3925[5]
  i3924.m_OpeningTagUnicodeArray = i3925[6]
  i3924.m_ClosingTagUnicodeArray = i3925[7]
  return i3924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3927 = data
  var i3929 = i3927[0]
  var i3928 = []
  for(var i = 0; i < i3929.length; i += 1) {
    i3928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3929[i + 0]) );
  }
  i3926.files = i3928
  i3926.componentToPrefabIds = i3927[1]
  return i3926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3933 = data
  i3932.path = i3933[0]
  request.r(i3933[1], i3933[2], 0, i3932, 'unityObject')
  return i3932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3935 = data
  var i3937 = i3935[0]
  var i3936 = []
  for(var i = 0; i < i3937.length; i += 1) {
    i3936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3937[i + 0]) );
  }
  i3934.scriptsExecutionOrder = i3936
  var i3939 = i3935[1]
  var i3938 = []
  for(var i = 0; i < i3939.length; i += 1) {
    i3938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3939[i + 0]) );
  }
  i3934.sortingLayers = i3938
  var i3941 = i3935[2]
  var i3940 = []
  for(var i = 0; i < i3941.length; i += 1) {
    i3940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3941[i + 0]) );
  }
  i3934.cullingLayers = i3940
  i3934.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3935[3], i3934.timeSettings)
  i3934.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3935[4], i3934.physicsSettings)
  i3934.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3935[5], i3934.physics2DSettings)
  i3934.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3935[6], i3934.qualitySettings)
  i3934.enableRealtimeShadows = !!i3935[7]
  i3934.enableAutoInstancing = !!i3935[8]
  i3934.enableDynamicBatching = !!i3935[9]
  i3934.lightmapEncodingQuality = i3935[10]
  i3934.desiredColorSpace = i3935[11]
  var i3943 = i3935[12]
  var i3942 = []
  for(var i = 0; i < i3943.length; i += 1) {
    i3942.push( i3943[i + 0] );
  }
  i3934.allTags = i3942
  return i3934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3947 = data
  i3946.name = i3947[0]
  i3946.value = i3947[1]
  return i3946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3951 = data
  i3950.id = i3951[0]
  i3950.name = i3951[1]
  i3950.value = i3951[2]
  return i3950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3955 = data
  i3954.id = i3955[0]
  i3954.name = i3955[1]
  return i3954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3957 = data
  i3956.fixedDeltaTime = i3957[0]
  i3956.maximumDeltaTime = i3957[1]
  i3956.timeScale = i3957[2]
  i3956.maximumParticleTimestep = i3957[3]
  return i3956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3959 = data
  i3958.gravity = new pc.Vec3( i3959[0], i3959[1], i3959[2] )
  i3958.defaultSolverIterations = i3959[3]
  i3958.bounceThreshold = i3959[4]
  i3958.autoSyncTransforms = !!i3959[5]
  i3958.autoSimulation = !!i3959[6]
  var i3961 = i3959[7]
  var i3960 = []
  for(var i = 0; i < i3961.length; i += 1) {
    i3960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3961[i + 0]) );
  }
  i3958.collisionMatrix = i3960
  return i3958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3965 = data
  i3964.enabled = !!i3965[0]
  i3964.layerId = i3965[1]
  i3964.otherLayerId = i3965[2]
  return i3964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3967 = data
  request.r(i3967[0], i3967[1], 0, i3966, 'material')
  i3966.gravity = new pc.Vec2( i3967[2], i3967[3] )
  i3966.positionIterations = i3967[4]
  i3966.velocityIterations = i3967[5]
  i3966.velocityThreshold = i3967[6]
  i3966.maxLinearCorrection = i3967[7]
  i3966.maxAngularCorrection = i3967[8]
  i3966.maxTranslationSpeed = i3967[9]
  i3966.maxRotationSpeed = i3967[10]
  i3966.baumgarteScale = i3967[11]
  i3966.baumgarteTOIScale = i3967[12]
  i3966.timeToSleep = i3967[13]
  i3966.linearSleepTolerance = i3967[14]
  i3966.angularSleepTolerance = i3967[15]
  i3966.defaultContactOffset = i3967[16]
  i3966.autoSimulation = !!i3967[17]
  i3966.queriesHitTriggers = !!i3967[18]
  i3966.queriesStartInColliders = !!i3967[19]
  i3966.callbacksOnDisable = !!i3967[20]
  i3966.reuseCollisionCallbacks = !!i3967[21]
  i3966.autoSyncTransforms = !!i3967[22]
  var i3969 = i3967[23]
  var i3968 = []
  for(var i = 0; i < i3969.length; i += 1) {
    i3968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3969[i + 0]) );
  }
  i3966.collisionMatrix = i3968
  return i3966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3973 = data
  i3972.enabled = !!i3973[0]
  i3972.layerId = i3973[1]
  i3972.otherLayerId = i3973[2]
  return i3972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3975 = data
  var i3977 = i3975[0]
  var i3976 = []
  for(var i = 0; i < i3977.length; i += 1) {
    i3976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3977[i + 0]) );
  }
  i3974.qualityLevels = i3976
  var i3979 = i3975[1]
  var i3978 = []
  for(var i = 0; i < i3979.length; i += 1) {
    i3978.push( i3979[i + 0] );
  }
  i3974.names = i3978
  i3974.shadows = i3975[2]
  i3974.anisotropicFiltering = i3975[3]
  i3974.antiAliasing = i3975[4]
  i3974.lodBias = i3975[5]
  i3974.shadowCascades = i3975[6]
  i3974.shadowDistance = i3975[7]
  i3974.shadowmaskMode = i3975[8]
  i3974.shadowProjection = i3975[9]
  i3974.shadowResolution = i3975[10]
  i3974.softParticles = !!i3975[11]
  i3974.softVegetation = !!i3975[12]
  i3974.activeColorSpace = i3975[13]
  i3974.desiredColorSpace = i3975[14]
  i3974.masterTextureLimit = i3975[15]
  i3974.maxQueuedFrames = i3975[16]
  i3974.particleRaycastBudget = i3975[17]
  i3974.pixelLightCount = i3975[18]
  i3974.realtimeReflectionProbes = !!i3975[19]
  i3974.shadowCascade2Split = i3975[20]
  i3974.shadowCascade4Split = new pc.Vec3( i3975[21], i3975[22], i3975[23] )
  i3974.streamingMipmapsActive = !!i3975[24]
  i3974.vSyncCount = i3975[25]
  i3974.asyncUploadBufferSize = i3975[26]
  i3974.asyncUploadTimeSlice = i3975[27]
  i3974.billboardsFaceCameraPosition = !!i3975[28]
  i3974.shadowNearPlaneOffset = i3975[29]
  i3974.streamingMipmapsMemoryBudget = i3975[30]
  i3974.maximumLODLevel = i3975[31]
  i3974.streamingMipmapsAddAllCameras = !!i3975[32]
  i3974.streamingMipmapsMaxLevelReduction = i3975[33]
  i3974.streamingMipmapsRenderersPerFrame = i3975[34]
  i3974.resolutionScalingFixedDPIFactor = i3975[35]
  i3974.streamingMipmapsMaxFileIORequests = i3975[36]
  i3974.currentQualityLevel = i3975[37]
  return i3974
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3982 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3983 = data
  i3982.xPlacement = i3983[0]
  i3982.yPlacement = i3983[1]
  i3982.xAdvance = i3983[2]
  i3982.yAdvance = i3983[3]
  return i3982
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

Deserializers.runtimeAnalysisExcludedClassesCount = "1776";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3919";

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

Deserializers.buildID = "6e7e5186-6c9b-4126-a8e0-fd4689bb305b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


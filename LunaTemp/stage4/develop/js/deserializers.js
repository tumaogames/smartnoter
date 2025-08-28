var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i9918 = root || request.c( 'UnityEngine.JointSpring' )
  var i9919 = data
  i9918.spring = i9919[0]
  i9918.damper = i9919[1]
  i9918.targetPosition = i9919[2]
  return i9918
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i9920 = root || request.c( 'UnityEngine.JointMotor' )
  var i9921 = data
  i9920.m_TargetVelocity = i9921[0]
  i9920.m_Force = i9921[1]
  i9920.m_FreeSpin = i9921[2]
  return i9920
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i9922 = root || request.c( 'UnityEngine.JointLimits' )
  var i9923 = data
  i9922.m_Min = i9923[0]
  i9922.m_Max = i9923[1]
  i9922.m_Bounciness = i9923[2]
  i9922.m_BounceMinVelocity = i9923[3]
  i9922.m_ContactDistance = i9923[4]
  i9922.minBounce = i9923[5]
  i9922.maxBounce = i9923[6]
  return i9922
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i9924 = root || request.c( 'UnityEngine.JointDrive' )
  var i9925 = data
  i9924.m_PositionSpring = i9925[0]
  i9924.m_PositionDamper = i9925[1]
  i9924.m_MaximumForce = i9925[2]
  i9924.m_UseAcceleration = i9925[3]
  return i9924
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i9926 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i9927 = data
  i9926.m_Spring = i9927[0]
  i9926.m_Damper = i9927[1]
  return i9926
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i9928 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i9929 = data
  i9928.m_Limit = i9929[0]
  i9928.m_Bounciness = i9929[1]
  i9928.m_ContactDistance = i9929[2]
  return i9928
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i9930 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i9931 = data
  i9930.m_ExtremumSlip = i9931[0]
  i9930.m_ExtremumValue = i9931[1]
  i9930.m_AsymptoteSlip = i9931[2]
  i9930.m_AsymptoteValue = i9931[3]
  i9930.m_Stiffness = i9931[4]
  return i9930
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i9932 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i9933 = data
  i9932.m_LowerAngle = i9933[0]
  i9932.m_UpperAngle = i9933[1]
  return i9932
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i9934 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i9935 = data
  i9934.m_MotorSpeed = i9935[0]
  i9934.m_MaximumMotorTorque = i9935[1]
  return i9934
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i9936 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i9937 = data
  i9936.m_DampingRatio = i9937[0]
  i9936.m_Frequency = i9937[1]
  i9936.m_Angle = i9937[2]
  return i9936
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i9938 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i9939 = data
  i9938.m_LowerTranslation = i9939[0]
  i9938.m_UpperTranslation = i9939[1]
  return i9938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i9940 = root || new pc.UnityMaterial()
  var i9941 = data
  i9940.name = i9941[0]
  request.r(i9941[1], i9941[2], 0, i9940, 'shader')
  i9940.renderQueue = i9941[3]
  i9940.enableInstancing = !!i9941[4]
  var i9943 = i9941[5]
  var i9942 = []
  for(var i = 0; i < i9943.length; i += 1) {
    i9942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i9943[i + 0]) );
  }
  i9940.floatParameters = i9942
  var i9945 = i9941[6]
  var i9944 = []
  for(var i = 0; i < i9945.length; i += 1) {
    i9944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i9945[i + 0]) );
  }
  i9940.colorParameters = i9944
  var i9947 = i9941[7]
  var i9946 = []
  for(var i = 0; i < i9947.length; i += 1) {
    i9946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i9947[i + 0]) );
  }
  i9940.vectorParameters = i9946
  var i9949 = i9941[8]
  var i9948 = []
  for(var i = 0; i < i9949.length; i += 1) {
    i9948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i9949[i + 0]) );
  }
  i9940.textureParameters = i9948
  var i9951 = i9941[9]
  var i9950 = []
  for(var i = 0; i < i9951.length; i += 1) {
    i9950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i9951[i + 0]) );
  }
  i9940.materialFlags = i9950
  return i9940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i9954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i9955 = data
  i9954.name = i9955[0]
  i9954.value = i9955[1]
  return i9954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i9958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i9959 = data
  i9958.name = i9959[0]
  i9958.value = new pc.Color(i9959[1], i9959[2], i9959[3], i9959[4])
  return i9958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i9962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i9963 = data
  i9962.name = i9963[0]
  i9962.value = new pc.Vec4( i9963[1], i9963[2], i9963[3], i9963[4] )
  return i9962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i9966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i9967 = data
  i9966.name = i9967[0]
  request.r(i9967[1], i9967[2], 0, i9966, 'value')
  return i9966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i9970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i9971 = data
  i9970.name = i9971[0]
  i9970.enabled = !!i9971[1]
  return i9970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i9972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i9973 = data
  i9972.name = i9973[0]
  i9972.width = i9973[1]
  i9972.height = i9973[2]
  i9972.mipmapCount = i9973[3]
  i9972.anisoLevel = i9973[4]
  i9972.filterMode = i9973[5]
  i9972.hdr = !!i9973[6]
  i9972.format = i9973[7]
  i9972.wrapMode = i9973[8]
  i9972.alphaIsTransparency = !!i9973[9]
  i9972.alphaSource = i9973[10]
  i9972.graphicsFormat = i9973[11]
  i9972.sRGBTexture = !!i9973[12]
  i9972.desiredColorSpace = i9973[13]
  i9972.wrapU = i9973[14]
  i9972.wrapV = i9973[15]
  return i9972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i9974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i9975 = data
  i9974.name = i9975[0]
  i9974.index = i9975[1]
  i9974.startup = !!i9975[2]
  return i9974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i9976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i9977 = data
  i9976.position = new pc.Vec3( i9977[0], i9977[1], i9977[2] )
  i9976.scale = new pc.Vec3( i9977[3], i9977[4], i9977[5] )
  i9976.rotation = new pc.Quat(i9977[6], i9977[7], i9977[8], i9977[9])
  return i9976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i9978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i9979 = data
  i9978.enabled = !!i9979[0]
  i9978.aspect = i9979[1]
  i9978.orthographic = !!i9979[2]
  i9978.orthographicSize = i9979[3]
  i9978.backgroundColor = new pc.Color(i9979[4], i9979[5], i9979[6], i9979[7])
  i9978.nearClipPlane = i9979[8]
  i9978.farClipPlane = i9979[9]
  i9978.fieldOfView = i9979[10]
  i9978.depth = i9979[11]
  i9978.clearFlags = i9979[12]
  i9978.cullingMask = i9979[13]
  i9978.rect = i9979[14]
  request.r(i9979[15], i9979[16], 0, i9978, 'targetTexture')
  i9978.usePhysicalProperties = !!i9979[17]
  i9978.focalLength = i9979[18]
  i9978.sensorSize = new pc.Vec2( i9979[19], i9979[20] )
  i9978.lensShift = new pc.Vec2( i9979[21], i9979[22] )
  i9978.gateFit = i9979[23]
  i9978.commandBufferCount = i9979[24]
  i9978.cameraType = i9979[25]
  return i9978
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i9980 = root || request.c( 'CameraAspectFitter' )
  var i9981 = data
  request.r(i9981[0], i9981[1], 0, i9980, 'targetSprite')
  return i9980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i9982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i9983 = data
  i9982.name = i9983[0]
  i9982.tagId = i9983[1]
  i9982.enabled = !!i9983[2]
  i9982.isStatic = !!i9983[3]
  i9982.layer = i9983[4]
  return i9982
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i9984 = root || request.c( 'AudioManager' )
  var i9985 = data
  request.r(i9985[0], i9985[1], 0, i9984, 'library')
  i9984.sfxPoolSize = i9985[2]
  return i9984
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i9986 = root || request.c( 'TaskManager' )
  var i9987 = data
  return i9986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i9988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i9989 = data
  i9988.enabled = !!i9989[0]
  request.r(i9989[1], i9989[2], 0, i9988, 'sharedMaterial')
  var i9991 = i9989[3]
  var i9990 = []
  for(var i = 0; i < i9991.length; i += 2) {
  request.r(i9991[i + 0], i9991[i + 1], 2, i9990, '')
  }
  i9988.sharedMaterials = i9990
  i9988.receiveShadows = !!i9989[4]
  i9988.shadowCastingMode = i9989[5]
  i9988.sortingLayerID = i9989[6]
  i9988.sortingOrder = i9989[7]
  i9988.lightmapIndex = i9989[8]
  i9988.lightmapSceneIndex = i9989[9]
  i9988.lightmapScaleOffset = new pc.Vec4( i9989[10], i9989[11], i9989[12], i9989[13] )
  i9988.lightProbeUsage = i9989[14]
  i9988.reflectionProbeUsage = i9989[15]
  i9988.color = new pc.Color(i9989[16], i9989[17], i9989[18], i9989[19])
  request.r(i9989[20], i9989[21], 0, i9988, 'sprite')
  i9988.flipX = !!i9989[22]
  i9988.flipY = !!i9989[23]
  i9988.drawMode = i9989[24]
  i9988.size = new pc.Vec2( i9989[25], i9989[26] )
  i9988.tileMode = i9989[27]
  i9988.adaptiveModeThreshold = i9989[28]
  i9988.maskInteraction = i9989[29]
  i9988.spriteSortPoint = i9989[30]
  return i9988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i9994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i9995 = data
  i9994.pivot = new pc.Vec2( i9995[0], i9995[1] )
  i9994.anchorMin = new pc.Vec2( i9995[2], i9995[3] )
  i9994.anchorMax = new pc.Vec2( i9995[4], i9995[5] )
  i9994.sizeDelta = new pc.Vec2( i9995[6], i9995[7] )
  i9994.anchoredPosition3D = new pc.Vec3( i9995[8], i9995[9], i9995[10] )
  i9994.rotation = new pc.Quat(i9995[11], i9995[12], i9995[13], i9995[14])
  i9994.scale = new pc.Vec3( i9995[15], i9995[16], i9995[17] )
  return i9994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i9996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i9997 = data
  i9996.enabled = !!i9997[0]
  i9996.planeDistance = i9997[1]
  i9996.referencePixelsPerUnit = i9997[2]
  i9996.isFallbackOverlay = !!i9997[3]
  i9996.renderMode = i9997[4]
  i9996.renderOrder = i9997[5]
  i9996.sortingLayerName = i9997[6]
  i9996.sortingOrder = i9997[7]
  i9996.scaleFactor = i9997[8]
  request.r(i9997[9], i9997[10], 0, i9996, 'worldCamera')
  i9996.overrideSorting = !!i9997[11]
  i9996.pixelPerfect = !!i9997[12]
  i9996.targetDisplay = i9997[13]
  i9996.overridePixelPerfect = !!i9997[14]
  return i9996
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i9998 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i9999 = data
  i9998.m_UiScaleMode = i9999[0]
  i9998.m_ReferencePixelsPerUnit = i9999[1]
  i9998.m_ScaleFactor = i9999[2]
  i9998.m_ReferenceResolution = new pc.Vec2( i9999[3], i9999[4] )
  i9998.m_ScreenMatchMode = i9999[5]
  i9998.m_MatchWidthOrHeight = i9999[6]
  i9998.m_PhysicalUnit = i9999[7]
  i9998.m_FallbackScreenDPI = i9999[8]
  i9998.m_DefaultSpriteDPI = i9999[9]
  i9998.m_DynamicPixelsPerUnit = i9999[10]
  i9998.m_PresetInfoIsWorld = !!i9999[11]
  return i9998
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i10000 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i10001 = data
  i10000.m_IgnoreReversedGraphics = !!i10001[0]
  i10000.m_BlockingObjects = i10001[1]
  i10000.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i10001[2] )
  return i10000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i10002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i10003 = data
  i10002.cullTransparentMesh = !!i10003[0]
  return i10002
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i10004 = root || request.c( 'UnityEngine.UI.Image' )
  var i10005 = data
  request.r(i10005[0], i10005[1], 0, i10004, 'm_Sprite')
  i10004.m_Type = i10005[2]
  i10004.m_PreserveAspect = !!i10005[3]
  i10004.m_FillCenter = !!i10005[4]
  i10004.m_FillMethod = i10005[5]
  i10004.m_FillAmount = i10005[6]
  i10004.m_FillClockwise = !!i10005[7]
  i10004.m_FillOrigin = i10005[8]
  i10004.m_UseSpriteMesh = !!i10005[9]
  i10004.m_PixelsPerUnitMultiplier = i10005[10]
  request.r(i10005[11], i10005[12], 0, i10004, 'm_Material')
  i10004.m_Maskable = !!i10005[13]
  i10004.m_Color = new pc.Color(i10005[14], i10005[15], i10005[16], i10005[17])
  i10004.m_RaycastTarget = !!i10005[18]
  i10004.m_RaycastPadding = new pc.Vec4( i10005[19], i10005[20], i10005[21], i10005[22] )
  return i10004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i10006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i10007 = data
  i10006.m_Alpha = i10007[0]
  i10006.m_Interactable = !!i10007[1]
  i10006.m_BlocksRaycasts = !!i10007[2]
  i10006.m_IgnoreParentGroups = !!i10007[3]
  i10006.enabled = !!i10007[4]
  return i10006
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i10008 = root || request.c( 'CanvasGroupAnimator' )
  var i10009 = data
  request.r(i10009[0], i10009[1], 0, i10008, 'canvasGroup')
  i10008.animateFade = !!i10009[2]
  i10008.triggerOnStart = !!i10009[3]
  i10008.isLooping = !!i10009[4]
  i10008.fadeTo = i10009[5]
  i10008.fadeDuration = i10009[6]
  i10008.fadeEaseType = i10009[7]
  return i10008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i10010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i10011 = data
  request.r(i10011[0], i10011[1], 0, i10010, 'animatorController')
  request.r(i10011[2], i10011[3], 0, i10010, 'avatar')
  i10010.updateMode = i10011[4]
  i10010.hasTransformHierarchy = !!i10011[5]
  i10010.applyRootMotion = !!i10011[6]
  var i10013 = i10011[7]
  var i10012 = []
  for(var i = 0; i < i10013.length; i += 2) {
  request.r(i10013[i + 0], i10013[i + 1], 2, i10012, '')
  }
  i10010.humanBones = i10012
  i10010.enabled = !!i10011[8]
  return i10010
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i10016 = root || request.c( 'UnityEngine.UI.Button' )
  var i10017 = data
  i10016.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i10017[0], i10016.m_OnClick)
  i10016.m_Navigation = request.d('UnityEngine.UI.Navigation', i10017[1], i10016.m_Navigation)
  i10016.m_Transition = i10017[2]
  i10016.m_Colors = request.d('UnityEngine.UI.ColorBlock', i10017[3], i10016.m_Colors)
  i10016.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i10017[4], i10016.m_SpriteState)
  i10016.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i10017[5], i10016.m_AnimationTriggers)
  i10016.m_Interactable = !!i10017[6]
  request.r(i10017[7], i10017[8], 0, i10016, 'm_TargetGraphic')
  return i10016
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i10018 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i10019 = data
  i10018.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i10019[0], i10018.m_PersistentCalls)
  return i10018
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i10020 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i10021 = data
  var i10023 = i10021[0]
  var i10022 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i10023.length; i += 1) {
    i10022.add(request.d('UnityEngine.Events.PersistentCall', i10023[i + 0]));
  }
  i10020.m_Calls = i10022
  return i10020
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i10026 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i10027 = data
  request.r(i10027[0], i10027[1], 0, i10026, 'm_Target')
  i10026.m_TargetAssemblyTypeName = i10027[2]
  i10026.m_MethodName = i10027[3]
  i10026.m_Mode = i10027[4]
  i10026.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i10027[5], i10026.m_Arguments)
  i10026.m_CallState = i10027[6]
  return i10026
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i10028 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i10029 = data
  request.r(i10029[0], i10029[1], 0, i10028, 'm_ObjectArgument')
  i10028.m_ObjectArgumentAssemblyTypeName = i10029[2]
  i10028.m_IntArgument = i10029[3]
  i10028.m_FloatArgument = i10029[4]
  i10028.m_StringArgument = i10029[5]
  i10028.m_BoolArgument = !!i10029[6]
  return i10028
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i10030 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i10031 = data
  i10030.m_Mode = i10031[0]
  i10030.m_WrapAround = !!i10031[1]
  request.r(i10031[2], i10031[3], 0, i10030, 'm_SelectOnUp')
  request.r(i10031[4], i10031[5], 0, i10030, 'm_SelectOnDown')
  request.r(i10031[6], i10031[7], 0, i10030, 'm_SelectOnLeft')
  request.r(i10031[8], i10031[9], 0, i10030, 'm_SelectOnRight')
  return i10030
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i10032 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i10033 = data
  i10032.m_NormalColor = new pc.Color(i10033[0], i10033[1], i10033[2], i10033[3])
  i10032.m_HighlightedColor = new pc.Color(i10033[4], i10033[5], i10033[6], i10033[7])
  i10032.m_PressedColor = new pc.Color(i10033[8], i10033[9], i10033[10], i10033[11])
  i10032.m_SelectedColor = new pc.Color(i10033[12], i10033[13], i10033[14], i10033[15])
  i10032.m_DisabledColor = new pc.Color(i10033[16], i10033[17], i10033[18], i10033[19])
  i10032.m_ColorMultiplier = i10033[20]
  i10032.m_FadeDuration = i10033[21]
  return i10032
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i10034 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i10035 = data
  request.r(i10035[0], i10035[1], 0, i10034, 'm_HighlightedSprite')
  request.r(i10035[2], i10035[3], 0, i10034, 'm_PressedSprite')
  request.r(i10035[4], i10035[5], 0, i10034, 'm_SelectedSprite')
  request.r(i10035[6], i10035[7], 0, i10034, 'm_DisabledSprite')
  return i10034
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i10036 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i10037 = data
  i10036.m_NormalTrigger = i10037[0]
  i10036.m_HighlightedTrigger = i10037[1]
  i10036.m_PressedTrigger = i10037[2]
  i10036.m_SelectedTrigger = i10037[3]
  i10036.m_DisabledTrigger = i10037[4]
  return i10036
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i10038 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i10039 = data
  i10038.m_Spacing = i10039[0]
  i10038.m_ChildForceExpandWidth = !!i10039[1]
  i10038.m_ChildForceExpandHeight = !!i10039[2]
  i10038.m_ChildControlWidth = !!i10039[3]
  i10038.m_ChildControlHeight = !!i10039[4]
  i10038.m_ChildScaleWidth = !!i10039[5]
  i10038.m_ChildScaleHeight = !!i10039[6]
  i10038.m_ReverseArrangement = !!i10039[7]
  i10038.m_Padding = UnityEngine.RectOffset.FromPaddings(i10039[8], i10039[9], i10039[10], i10039[11])
  i10038.m_ChildAlignment = i10039[12]
  return i10038
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i10040 = root || request.c( 'UnityEngine.UI.Mask' )
  var i10041 = data
  i10040.m_ShowMaskGraphic = !!i10041[0]
  return i10040
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i10042 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i10043 = data
  request.r(i10043[0], i10043[1], 0, i10042, 'm_Content')
  i10042.m_Horizontal = !!i10043[2]
  i10042.m_Vertical = !!i10043[3]
  i10042.m_MovementType = i10043[4]
  i10042.m_Elasticity = i10043[5]
  i10042.m_Inertia = !!i10043[6]
  i10042.m_DecelerationRate = i10043[7]
  i10042.m_ScrollSensitivity = i10043[8]
  request.r(i10043[9], i10043[10], 0, i10042, 'm_Viewport')
  request.r(i10043[11], i10043[12], 0, i10042, 'm_HorizontalScrollbar')
  request.r(i10043[13], i10043[14], 0, i10042, 'm_VerticalScrollbar')
  i10042.m_HorizontalScrollbarVisibility = i10043[15]
  i10042.m_VerticalScrollbarVisibility = i10043[16]
  i10042.m_HorizontalScrollbarSpacing = i10043[17]
  i10042.m_VerticalScrollbarSpacing = i10043[18]
  i10042.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i10043[19], i10042.m_OnValueChanged)
  return i10042
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i10044 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i10045 = data
  i10044.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i10045[0], i10044.m_PersistentCalls)
  return i10044
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i10046 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i10047 = data
  i10046.m_Padding = new pc.Vec4( i10047[0], i10047[1], i10047[2], i10047[3] )
  i10046.m_Softness = new pc.Vec2( i10047[4], i10047[5] )
  return i10046
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i10048 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i10049 = data
  i10048.m_hasFontAssetChanged = !!i10049[0]
  request.r(i10049[1], i10049[2], 0, i10048, 'm_baseMaterial')
  i10048.m_maskOffset = new pc.Vec4( i10049[3], i10049[4], i10049[5], i10049[6] )
  i10048.m_text = i10049[7]
  i10048.m_isRightToLeft = !!i10049[8]
  request.r(i10049[9], i10049[10], 0, i10048, 'm_fontAsset')
  request.r(i10049[11], i10049[12], 0, i10048, 'm_sharedMaterial')
  var i10051 = i10049[13]
  var i10050 = []
  for(var i = 0; i < i10051.length; i += 2) {
  request.r(i10051[i + 0], i10051[i + 1], 2, i10050, '')
  }
  i10048.m_fontSharedMaterials = i10050
  request.r(i10049[14], i10049[15], 0, i10048, 'm_fontMaterial')
  var i10053 = i10049[16]
  var i10052 = []
  for(var i = 0; i < i10053.length; i += 2) {
  request.r(i10053[i + 0], i10053[i + 1], 2, i10052, '')
  }
  i10048.m_fontMaterials = i10052
  i10048.m_fontColor32 = UnityEngine.Color32.ConstructColor(i10049[17], i10049[18], i10049[19], i10049[20])
  i10048.m_fontColor = new pc.Color(i10049[21], i10049[22], i10049[23], i10049[24])
  i10048.m_enableVertexGradient = !!i10049[25]
  i10048.m_colorMode = i10049[26]
  i10048.m_fontColorGradient = request.d('TMPro.VertexGradient', i10049[27], i10048.m_fontColorGradient)
  request.r(i10049[28], i10049[29], 0, i10048, 'm_fontColorGradientPreset')
  request.r(i10049[30], i10049[31], 0, i10048, 'm_spriteAsset')
  i10048.m_tintAllSprites = !!i10049[32]
  request.r(i10049[33], i10049[34], 0, i10048, 'm_StyleSheet')
  i10048.m_TextStyleHashCode = i10049[35]
  i10048.m_overrideHtmlColors = !!i10049[36]
  i10048.m_faceColor = UnityEngine.Color32.ConstructColor(i10049[37], i10049[38], i10049[39], i10049[40])
  i10048.m_fontSize = i10049[41]
  i10048.m_fontSizeBase = i10049[42]
  i10048.m_fontWeight = i10049[43]
  i10048.m_enableAutoSizing = !!i10049[44]
  i10048.m_fontSizeMin = i10049[45]
  i10048.m_fontSizeMax = i10049[46]
  i10048.m_fontStyle = i10049[47]
  i10048.m_HorizontalAlignment = i10049[48]
  i10048.m_VerticalAlignment = i10049[49]
  i10048.m_textAlignment = i10049[50]
  i10048.m_characterSpacing = i10049[51]
  i10048.m_wordSpacing = i10049[52]
  i10048.m_lineSpacing = i10049[53]
  i10048.m_lineSpacingMax = i10049[54]
  i10048.m_paragraphSpacing = i10049[55]
  i10048.m_charWidthMaxAdj = i10049[56]
  i10048.m_enableWordWrapping = !!i10049[57]
  i10048.m_wordWrappingRatios = i10049[58]
  i10048.m_overflowMode = i10049[59]
  request.r(i10049[60], i10049[61], 0, i10048, 'm_linkedTextComponent')
  request.r(i10049[62], i10049[63], 0, i10048, 'parentLinkedComponent')
  i10048.m_enableKerning = !!i10049[64]
  i10048.m_enableExtraPadding = !!i10049[65]
  i10048.checkPaddingRequired = !!i10049[66]
  i10048.m_isRichText = !!i10049[67]
  i10048.m_parseCtrlCharacters = !!i10049[68]
  i10048.m_isOrthographic = !!i10049[69]
  i10048.m_isCullingEnabled = !!i10049[70]
  i10048.m_horizontalMapping = i10049[71]
  i10048.m_verticalMapping = i10049[72]
  i10048.m_uvLineOffset = i10049[73]
  i10048.m_geometrySortingOrder = i10049[74]
  i10048.m_IsTextObjectScaleStatic = !!i10049[75]
  i10048.m_VertexBufferAutoSizeReduction = !!i10049[76]
  i10048.m_useMaxVisibleDescender = !!i10049[77]
  i10048.m_pageToDisplay = i10049[78]
  i10048.m_margin = new pc.Vec4( i10049[79], i10049[80], i10049[81], i10049[82] )
  i10048.m_isUsingLegacyAnimationComponent = !!i10049[83]
  i10048.m_isVolumetricText = !!i10049[84]
  request.r(i10049[85], i10049[86], 0, i10048, 'm_Material')
  i10048.m_Maskable = !!i10049[87]
  i10048.m_Color = new pc.Color(i10049[88], i10049[89], i10049[90], i10049[91])
  i10048.m_RaycastTarget = !!i10049[92]
  i10048.m_RaycastPadding = new pc.Vec4( i10049[93], i10049[94], i10049[95], i10049[96] )
  return i10048
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i10054 = root || request.c( 'TMPro.VertexGradient' )
  var i10055 = data
  i10054.topLeft = new pc.Color(i10055[0], i10055[1], i10055[2], i10055[3])
  i10054.topRight = new pc.Color(i10055[4], i10055[5], i10055[6], i10055[7])
  i10054.bottomLeft = new pc.Color(i10055[8], i10055[9], i10055[10], i10055[11])
  i10054.bottomRight = new pc.Color(i10055[12], i10055[13], i10055[14], i10055[15])
  return i10054
}

Deserializers["SubtitleAuto"] = function (request, data, root) {
  var i10056 = root || request.c( 'SubtitleAuto' )
  var i10057 = data
  i10056.charsPerSecond = i10057[0]
  i10056.loop = !!i10057[1]
  var i10059 = i10057[2]
  var i10058 = []
  for(var i = 0; i < i10059.length; i += 1) {
    i10058.push( request.d('SubtitleAuto+Line', i10059[i + 0]) );
  }
  i10056.lines = i10058
  request.r(i10057[3], i10057[4], 0, i10056, 'scroll')
  request.r(i10057[5], i10057[6], 0, i10056, 'externalScrollbar')
  i10056.scrollMotion = i10057[7]
  i10056.scrollSnapTime = i10057[8]
  i10056.scrollSpeed = i10057[9]
  i10056.linesPerStep = i10057[10]
  i10056.topSafeMargin = i10057[11]
  i10056.startAutoScrollAtLine = i10057[12]
  i10056.manualScroll = !!i10057[13]
  i10056.manualScrollValue = i10057[14]
  return i10056
}

Deserializers["SubtitleAuto+Line"] = function (request, data, root) {
  var i10062 = root || request.c( 'SubtitleAuto+Line' )
  var i10063 = data
  i10062.text = i10063[0]
  i10062.holdSeconds = i10063[1]
  return i10062
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i10064 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i10065 = data
  request.r(i10065[0], i10065[1], 0, i10064, 'm_HandleRect')
  i10064.m_Direction = i10065[2]
  i10064.m_Value = i10065[3]
  i10064.m_Size = i10065[4]
  i10064.m_NumberOfSteps = i10065[5]
  i10064.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i10065[6], i10064.m_OnValueChanged)
  i10064.m_Navigation = request.d('UnityEngine.UI.Navigation', i10065[7], i10064.m_Navigation)
  i10064.m_Transition = i10065[8]
  i10064.m_Colors = request.d('UnityEngine.UI.ColorBlock', i10065[9], i10064.m_Colors)
  i10064.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i10065[10], i10064.m_SpriteState)
  i10064.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i10065[11], i10064.m_AnimationTriggers)
  i10064.m_Interactable = !!i10065[12]
  request.r(i10065[13], i10065[14], 0, i10064, 'm_TargetGraphic')
  return i10064
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i10066 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i10067 = data
  i10066.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i10067[0], i10066.m_PersistentCalls)
  return i10066
}

Deserializers["DragToResizeLeft"] = function (request, data, root) {
  var i10068 = root || request.c( 'DragToResizeLeft' )
  var i10069 = data
  request.r(i10069[0], i10069[1], 0, i10068, 'target')
  i10068.minWidth = i10069[2]
  return i10068
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i10070 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i10071 = data
  request.r(i10071[0], i10071[1], 0, i10070, 'm_FirstSelected')
  i10070.m_sendNavigationEvents = !!i10071[2]
  i10070.m_DragThreshold = i10071[3]
  return i10070
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i10072 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i10073 = data
  i10072.m_HorizontalAxis = i10073[0]
  i10072.m_VerticalAxis = i10073[1]
  i10072.m_SubmitButton = i10073[2]
  i10072.m_CancelButton = i10073[3]
  i10072.m_InputActionsPerSecond = i10073[4]
  i10072.m_RepeatDelay = i10073[5]
  i10072.m_ForceModuleActive = !!i10073[6]
  i10072.m_SendPointerHoverToParent = !!i10073[7]
  return i10072
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i10074 = root || request.c( 'ButtonPulse' )
  var i10075 = data
  i10074.scaleAmount = i10075[0]
  i10074.pulseDuration = i10075[1]
  return i10074
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i10076 = root || request.c( 'StartClickHandler' )
  var i10077 = data
  return i10076
}

Deserializers["GameManager"] = function (request, data, root) {
  var i10078 = root || request.c( 'GameManager' )
  var i10079 = data
  request.r(i10079[0], i10079[1], 0, i10078, 'endPanel')
  i10078.end = !!i10079[2]
  request.r(i10079[3], i10079[4], 0, i10078, 'hand')
  request.r(i10079[5], i10079[6], 0, i10078, 'hand2')
  i10078.enableSound = !!i10079[7]
  request.r(i10079[8], i10079[9], 0, i10078, 'startClickHandler')
  i10078.currentScore = i10079[10]
  request.r(i10079[11], i10079[12], 0, i10078, 'BodyToSummarize')
  request.r(i10079[13], i10079[14], 0, i10078, 'SummarizedText')
  request.r(i10079[15], i10079[16], 0, i10078, 'transcriptBtnBlue')
  request.r(i10079[17], i10079[18], 0, i10078, 'transcriptBtn')
  request.r(i10079[19], i10079[20], 0, i10078, 'summaryBtn')
  request.r(i10079[21], i10079[22], 0, i10078, 'summaryBtnBlue')
  request.r(i10079[23], i10079[24], 0, i10078, 'mainPanel')
  request.r(i10079[25], i10079[26], 0, i10078, 'handle1')
  request.r(i10079[27], i10079[28], 0, i10078, 'animator')
  request.r(i10079[29], i10079[30], 0, i10078, 'maskA')
  request.r(i10079[31], i10079[32], 0, i10078, 'filter')
  request.r(i10079[33], i10079[34], 0, i10078, 'arrow')
  request.r(i10079[35], i10079[36], 0, i10078, 'toTap')
  request.r(i10079[37], i10079[38], 0, i10078, 'openingPanel')
  request.r(i10079[39], i10079[40], 0, i10078, 'subTitle')
  request.r(i10079[41], i10079[42], 0, i10078, 'scrollBarVertical')
  return i10078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i10080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i10081 = data
  i10080.ambientIntensity = i10081[0]
  i10080.reflectionIntensity = i10081[1]
  i10080.ambientMode = i10081[2]
  i10080.ambientLight = new pc.Color(i10081[3], i10081[4], i10081[5], i10081[6])
  i10080.ambientSkyColor = new pc.Color(i10081[7], i10081[8], i10081[9], i10081[10])
  i10080.ambientGroundColor = new pc.Color(i10081[11], i10081[12], i10081[13], i10081[14])
  i10080.ambientEquatorColor = new pc.Color(i10081[15], i10081[16], i10081[17], i10081[18])
  i10080.fogColor = new pc.Color(i10081[19], i10081[20], i10081[21], i10081[22])
  i10080.fogEndDistance = i10081[23]
  i10080.fogStartDistance = i10081[24]
  i10080.fogDensity = i10081[25]
  i10080.fog = !!i10081[26]
  request.r(i10081[27], i10081[28], 0, i10080, 'skybox')
  i10080.fogMode = i10081[29]
  var i10083 = i10081[30]
  var i10082 = []
  for(var i = 0; i < i10083.length; i += 1) {
    i10082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i10083[i + 0]) );
  }
  i10080.lightmaps = i10082
  i10080.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i10081[31], i10080.lightProbes)
  i10080.lightmapsMode = i10081[32]
  i10080.mixedBakeMode = i10081[33]
  i10080.environmentLightingMode = i10081[34]
  i10080.ambientProbe = new pc.SphericalHarmonicsL2(i10081[35])
  i10080.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i10081[36])
  i10080.useReferenceAmbientProbe = !!i10081[37]
  request.r(i10081[38], i10081[39], 0, i10080, 'customReflection')
  request.r(i10081[40], i10081[41], 0, i10080, 'defaultReflection')
  i10080.defaultReflectionMode = i10081[42]
  i10080.defaultReflectionResolution = i10081[43]
  i10080.sunLightObjectId = i10081[44]
  i10080.pixelLightCount = i10081[45]
  i10080.defaultReflectionHDR = !!i10081[46]
  i10080.hasLightDataAsset = !!i10081[47]
  i10080.hasManualGenerate = !!i10081[48]
  return i10080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i10086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i10087 = data
  request.r(i10087[0], i10087[1], 0, i10086, 'lightmapColor')
  request.r(i10087[2], i10087[3], 0, i10086, 'lightmapDirection')
  return i10086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i10088 = root || new UnityEngine.LightProbes()
  var i10089 = data
  return i10088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i10096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i10097 = data
  var i10099 = i10097[0]
  var i10098 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i10099.length; i += 1) {
    i10098.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i10099[i + 0]));
  }
  i10096.ShaderCompilationErrors = i10098
  i10096.name = i10097[1]
  i10096.guid = i10097[2]
  var i10101 = i10097[3]
  var i10100 = []
  for(var i = 0; i < i10101.length; i += 1) {
    i10100.push( i10101[i + 0] );
  }
  i10096.shaderDefinedKeywords = i10100
  var i10103 = i10097[4]
  var i10102 = []
  for(var i = 0; i < i10103.length; i += 1) {
    i10102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i10103[i + 0]) );
  }
  i10096.passes = i10102
  var i10105 = i10097[5]
  var i10104 = []
  for(var i = 0; i < i10105.length; i += 1) {
    i10104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i10105[i + 0]) );
  }
  i10096.usePasses = i10104
  var i10107 = i10097[6]
  var i10106 = []
  for(var i = 0; i < i10107.length; i += 1) {
    i10106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i10107[i + 0]) );
  }
  i10096.defaultParameterValues = i10106
  request.r(i10097[7], i10097[8], 0, i10096, 'unityFallbackShader')
  i10096.readDepth = !!i10097[9]
  i10096.isCreatedByShaderGraph = !!i10097[10]
  i10096.compiled = !!i10097[11]
  return i10096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i10110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i10111 = data
  i10110.shaderName = i10111[0]
  i10110.errorMessage = i10111[1]
  return i10110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i10116 = root || new pc.UnityShaderPass()
  var i10117 = data
  i10116.id = i10117[0]
  i10116.subShaderIndex = i10117[1]
  i10116.name = i10117[2]
  i10116.passType = i10117[3]
  i10116.grabPassTextureName = i10117[4]
  i10116.usePass = !!i10117[5]
  i10116.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10117[6], i10116.zTest)
  i10116.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10117[7], i10116.zWrite)
  i10116.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10117[8], i10116.culling)
  i10116.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i10117[9], i10116.blending)
  i10116.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i10117[10], i10116.alphaBlending)
  i10116.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10117[11], i10116.colorWriteMask)
  i10116.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10117[12], i10116.offsetUnits)
  i10116.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10117[13], i10116.offsetFactor)
  i10116.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10117[14], i10116.stencilRef)
  i10116.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10117[15], i10116.stencilReadMask)
  i10116.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10117[16], i10116.stencilWriteMask)
  i10116.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i10117[17], i10116.stencilOp)
  i10116.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i10117[18], i10116.stencilOpFront)
  i10116.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i10117[19], i10116.stencilOpBack)
  var i10119 = i10117[20]
  var i10118 = []
  for(var i = 0; i < i10119.length; i += 1) {
    i10118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i10119[i + 0]) );
  }
  i10116.tags = i10118
  var i10121 = i10117[21]
  var i10120 = []
  for(var i = 0; i < i10121.length; i += 1) {
    i10120.push( i10121[i + 0] );
  }
  i10116.passDefinedKeywords = i10120
  var i10123 = i10117[22]
  var i10122 = []
  for(var i = 0; i < i10123.length; i += 1) {
    i10122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i10123[i + 0]) );
  }
  i10116.passDefinedKeywordGroups = i10122
  var i10125 = i10117[23]
  var i10124 = []
  for(var i = 0; i < i10125.length; i += 1) {
    i10124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i10125[i + 0]) );
  }
  i10116.variants = i10124
  var i10127 = i10117[24]
  var i10126 = []
  for(var i = 0; i < i10127.length; i += 1) {
    i10126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i10127[i + 0]) );
  }
  i10116.excludedVariants = i10126
  i10116.hasDepthReader = !!i10117[25]
  return i10116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i10128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i10129 = data
  i10128.val = i10129[0]
  i10128.name = i10129[1]
  return i10128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i10130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i10131 = data
  i10130.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10131[0], i10130.src)
  i10130.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10131[1], i10130.dst)
  i10130.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10131[2], i10130.op)
  return i10130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i10132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i10133 = data
  i10132.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10133[0], i10132.pass)
  i10132.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10133[1], i10132.fail)
  i10132.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10133[2], i10132.zFail)
  i10132.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i10133[3], i10132.comp)
  return i10132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i10136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i10137 = data
  i10136.name = i10137[0]
  i10136.value = i10137[1]
  return i10136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i10140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i10141 = data
  var i10143 = i10141[0]
  var i10142 = []
  for(var i = 0; i < i10143.length; i += 1) {
    i10142.push( i10143[i + 0] );
  }
  i10140.keywords = i10142
  i10140.hasDiscard = !!i10141[1]
  return i10140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i10146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i10147 = data
  i10146.passId = i10147[0]
  i10146.subShaderIndex = i10147[1]
  var i10149 = i10147[2]
  var i10148 = []
  for(var i = 0; i < i10149.length; i += 1) {
    i10148.push( i10149[i + 0] );
  }
  i10146.keywords = i10148
  i10146.vertexProgram = i10147[3]
  i10146.fragmentProgram = i10147[4]
  i10146.exportedForWebGl2 = !!i10147[5]
  i10146.readDepth = !!i10147[6]
  return i10146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i10152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i10153 = data
  request.r(i10153[0], i10153[1], 0, i10152, 'shader')
  i10152.pass = i10153[2]
  return i10152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i10156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i10157 = data
  i10156.name = i10157[0]
  i10156.type = i10157[1]
  i10156.value = new pc.Vec4( i10157[2], i10157[3], i10157[4], i10157[5] )
  i10156.textureValue = i10157[6]
  i10156.shaderPropertyFlag = i10157[7]
  return i10156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i10158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i10159 = data
  i10158.name = i10159[0]
  request.r(i10159[1], i10159[2], 0, i10158, 'texture')
  i10158.aabb = i10159[3]
  i10158.vertices = i10159[4]
  i10158.triangles = i10159[5]
  i10158.textureRect = UnityEngine.Rect.MinMaxRect(i10159[6], i10159[7], i10159[8], i10159[9])
  i10158.packedRect = UnityEngine.Rect.MinMaxRect(i10159[10], i10159[11], i10159[12], i10159[13])
  i10158.border = new pc.Vec4( i10159[14], i10159[15], i10159[16], i10159[17] )
  i10158.transparency = i10159[18]
  i10158.bounds = i10159[19]
  i10158.pixelsPerUnit = i10159[20]
  i10158.textureWidth = i10159[21]
  i10158.textureHeight = i10159[22]
  i10158.nativeSize = new pc.Vec2( i10159[23], i10159[24] )
  i10158.pivot = new pc.Vec2( i10159[25], i10159[26] )
  i10158.textureRectOffset = new pc.Vec2( i10159[27], i10159[28] )
  return i10158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i10160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i10161 = data
  i10160.name = i10161[0]
  return i10160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i10162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i10163 = data
  i10162.name = i10163[0]
  i10162.wrapMode = i10163[1]
  i10162.isLooping = !!i10163[2]
  i10162.length = i10163[3]
  var i10165 = i10163[4]
  var i10164 = []
  for(var i = 0; i < i10165.length; i += 1) {
    i10164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i10165[i + 0]) );
  }
  i10162.curves = i10164
  var i10167 = i10163[5]
  var i10166 = []
  for(var i = 0; i < i10167.length; i += 1) {
    i10166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i10167[i + 0]) );
  }
  i10162.events = i10166
  i10162.halfPrecision = !!i10163[6]
  i10162._frameRate = i10163[7]
  i10162.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i10163[8], i10162.localBounds)
  i10162.hasMuscleCurves = !!i10163[9]
  var i10169 = i10163[10]
  var i10168 = []
  for(var i = 0; i < i10169.length; i += 1) {
    i10168.push( i10169[i + 0] );
  }
  i10162.clipMuscleConstant = i10168
  i10162.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i10163[11], i10162.clipBindingConstant)
  return i10162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i10172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i10173 = data
  i10172.path = i10173[0]
  i10172.hash = i10173[1]
  i10172.componentType = i10173[2]
  i10172.property = i10173[3]
  i10172.keys = i10173[4]
  var i10175 = i10173[5]
  var i10174 = []
  for(var i = 0; i < i10175.length; i += 1) {
    i10174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i10175[i + 0]) );
  }
  i10172.objectReferenceKeys = i10174
  return i10172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i10178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i10179 = data
  i10178.time = i10179[0]
  request.r(i10179[1], i10179[2], 0, i10178, 'value')
  return i10178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i10182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i10183 = data
  i10182.functionName = i10183[0]
  i10182.floatParameter = i10183[1]
  i10182.intParameter = i10183[2]
  i10182.stringParameter = i10183[3]
  request.r(i10183[4], i10183[5], 0, i10182, 'objectReferenceParameter')
  i10182.time = i10183[6]
  return i10182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i10184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i10185 = data
  i10184.center = new pc.Vec3( i10185[0], i10185[1], i10185[2] )
  i10184.extends = new pc.Vec3( i10185[3], i10185[4], i10185[5] )
  return i10184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i10188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i10189 = data
  var i10191 = i10189[0]
  var i10190 = []
  for(var i = 0; i < i10191.length; i += 1) {
    i10190.push( i10191[i + 0] );
  }
  i10188.genericBindings = i10190
  var i10193 = i10189[1]
  var i10192 = []
  for(var i = 0; i < i10193.length; i += 1) {
    i10192.push( i10193[i + 0] );
  }
  i10188.pptrCurveMapping = i10192
  return i10188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i10194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i10195 = data
  i10194.name = i10195[0]
  i10194.ascent = i10195[1]
  i10194.originalLineHeight = i10195[2]
  i10194.fontSize = i10195[3]
  var i10197 = i10195[4]
  var i10196 = []
  for(var i = 0; i < i10197.length; i += 1) {
    i10196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i10197[i + 0]) );
  }
  i10194.characterInfo = i10196
  request.r(i10195[5], i10195[6], 0, i10194, 'texture')
  i10194.originalFontSize = i10195[7]
  return i10194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i10200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i10201 = data
  i10200.index = i10201[0]
  i10200.advance = i10201[1]
  i10200.bearing = i10201[2]
  i10200.glyphWidth = i10201[3]
  i10200.glyphHeight = i10201[4]
  i10200.minX = i10201[5]
  i10200.maxX = i10201[6]
  i10200.minY = i10201[7]
  i10200.maxY = i10201[8]
  i10200.uvBottomLeftX = i10201[9]
  i10200.uvBottomLeftY = i10201[10]
  i10200.uvBottomRightX = i10201[11]
  i10200.uvBottomRightY = i10201[12]
  i10200.uvTopLeftX = i10201[13]
  i10200.uvTopLeftY = i10201[14]
  i10200.uvTopRightX = i10201[15]
  i10200.uvTopRightY = i10201[16]
  return i10200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i10202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i10203 = data
  i10202.name = i10203[0]
  var i10205 = i10203[1]
  var i10204 = []
  for(var i = 0; i < i10205.length; i += 1) {
    i10204.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i10205[i + 0]) );
  }
  i10202.layers = i10204
  var i10207 = i10203[2]
  var i10206 = []
  for(var i = 0; i < i10207.length; i += 1) {
    i10206.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i10207[i + 0]) );
  }
  i10202.parameters = i10206
  i10202.animationClips = i10203[3]
  i10202.avatarUnsupported = i10203[4]
  return i10202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i10210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i10211 = data
  i10210.name = i10211[0]
  i10210.defaultWeight = i10211[1]
  i10210.blendingMode = i10211[2]
  i10210.avatarMask = i10211[3]
  i10210.syncedLayerIndex = i10211[4]
  i10210.syncedLayerAffectsTiming = !!i10211[5]
  i10210.syncedLayers = i10211[6]
  i10210.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i10211[7], i10210.stateMachine)
  return i10210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i10212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i10213 = data
  i10212.id = i10213[0]
  i10212.name = i10213[1]
  i10212.path = i10213[2]
  var i10215 = i10213[3]
  var i10214 = []
  for(var i = 0; i < i10215.length; i += 1) {
    i10214.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i10215[i + 0]) );
  }
  i10212.states = i10214
  var i10217 = i10213[4]
  var i10216 = []
  for(var i = 0; i < i10217.length; i += 1) {
    i10216.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i10217[i + 0]) );
  }
  i10212.machines = i10216
  var i10219 = i10213[5]
  var i10218 = []
  for(var i = 0; i < i10219.length; i += 1) {
    i10218.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i10219[i + 0]) );
  }
  i10212.entryStateTransitions = i10218
  var i10221 = i10213[6]
  var i10220 = []
  for(var i = 0; i < i10221.length; i += 1) {
    i10220.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i10221[i + 0]) );
  }
  i10212.exitStateTransitions = i10220
  var i10223 = i10213[7]
  var i10222 = []
  for(var i = 0; i < i10223.length; i += 1) {
    i10222.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i10223[i + 0]) );
  }
  i10212.anyStateTransitions = i10222
  i10212.defaultStateId = i10213[8]
  return i10212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i10226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i10227 = data
  i10226.id = i10227[0]
  i10226.name = i10227[1]
  i10226.cycleOffset = i10227[2]
  i10226.cycleOffsetParameter = i10227[3]
  i10226.cycleOffsetParameterActive = !!i10227[4]
  i10226.mirror = !!i10227[5]
  i10226.mirrorParameter = i10227[6]
  i10226.mirrorParameterActive = !!i10227[7]
  i10226.motionId = i10227[8]
  i10226.nameHash = i10227[9]
  i10226.fullPathHash = i10227[10]
  i10226.speed = i10227[11]
  i10226.speedParameter = i10227[12]
  i10226.speedParameterActive = !!i10227[13]
  i10226.tag = i10227[14]
  i10226.tagHash = i10227[15]
  i10226.writeDefaultValues = !!i10227[16]
  var i10229 = i10227[17]
  var i10228 = []
  for(var i = 0; i < i10229.length; i += 2) {
  request.r(i10229[i + 0], i10229[i + 1], 2, i10228, '')
  }
  i10226.behaviours = i10228
  var i10231 = i10227[18]
  var i10230 = []
  for(var i = 0; i < i10231.length; i += 1) {
    i10230.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i10231[i + 0]) );
  }
  i10226.transitions = i10230
  return i10226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i10236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i10237 = data
  i10236.fullPath = i10237[0]
  i10236.canTransitionToSelf = !!i10237[1]
  i10236.duration = i10237[2]
  i10236.exitTime = i10237[3]
  i10236.hasExitTime = !!i10237[4]
  i10236.hasFixedDuration = !!i10237[5]
  i10236.interruptionSource = i10237[6]
  i10236.offset = i10237[7]
  i10236.orderedInterruption = !!i10237[8]
  i10236.destinationStateId = i10237[9]
  i10236.isExit = !!i10237[10]
  i10236.mute = !!i10237[11]
  i10236.solo = !!i10237[12]
  var i10239 = i10237[13]
  var i10238 = []
  for(var i = 0; i < i10239.length; i += 1) {
    i10238.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i10239[i + 0]) );
  }
  i10236.conditions = i10238
  return i10236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i10244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i10245 = data
  i10244.destinationStateId = i10245[0]
  i10244.isExit = !!i10245[1]
  i10244.mute = !!i10245[2]
  i10244.solo = !!i10245[3]
  var i10247 = i10245[4]
  var i10246 = []
  for(var i = 0; i < i10247.length; i += 1) {
    i10246.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i10247[i + 0]) );
  }
  i10244.conditions = i10246
  return i10244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i10250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i10251 = data
  i10250.defaultBool = !!i10251[0]
  i10250.defaultFloat = i10251[1]
  i10250.defaultInt = i10251[2]
  i10250.name = i10251[3]
  i10250.nameHash = i10251[4]
  i10250.type = i10251[5]
  return i10250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i10254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i10255 = data
  i10254.mode = i10255[0]
  i10254.parameter = i10255[1]
  i10254.threshold = i10255[2]
  return i10254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i10256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i10257 = data
  i10256.name = i10257[0]
  i10256.bytes64 = i10257[1]
  i10256.data = i10257[2]
  return i10256
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i10258 = root || request.c( 'AudioLibrary' )
  var i10259 = data
  var i10261 = i10259[0]
  var i10260 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i10261.length; i += 1) {
    i10260.add(request.d('AudioLibrary+ClipEntry', i10261[i + 0]));
  }
  i10258.clips = i10260
  return i10258
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i10264 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i10265 = data
  i10264.key = i10265[0]
  i10264.channel = i10265[1]
  request.r(i10265[2], i10265[3], 0, i10264, 'clip')
  i10264.volume = i10265[4]
  i10264.loop = !!i10265[5]
  return i10264
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i10266 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i10267 = data
  i10266.hashCode = i10267[0]
  request.r(i10267[1], i10267[2], 0, i10266, 'material')
  i10266.materialHashCode = i10267[3]
  request.r(i10267[4], i10267[5], 0, i10266, 'atlas')
  i10266.normalStyle = i10267[6]
  i10266.normalSpacingOffset = i10267[7]
  i10266.boldStyle = i10267[8]
  i10266.boldSpacing = i10267[9]
  i10266.italicStyle = i10267[10]
  i10266.tabSize = i10267[11]
  i10266.m_Version = i10267[12]
  i10266.m_SourceFontFileGUID = i10267[13]
  request.r(i10267[14], i10267[15], 0, i10266, 'm_SourceFontFile_EditorRef')
  request.r(i10267[16], i10267[17], 0, i10266, 'm_SourceFontFile')
  i10266.m_AtlasPopulationMode = i10267[18]
  i10266.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i10267[19], i10266.m_FaceInfo)
  var i10269 = i10267[20]
  var i10268 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i10269.length; i += 1) {
    i10268.add(request.d('UnityEngine.TextCore.Glyph', i10269[i + 0]));
  }
  i10266.m_GlyphTable = i10268
  var i10271 = i10267[21]
  var i10270 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i10271.length; i += 1) {
    i10270.add(request.d('TMPro.TMP_Character', i10271[i + 0]));
  }
  i10266.m_CharacterTable = i10270
  var i10273 = i10267[22]
  var i10272 = []
  for(var i = 0; i < i10273.length; i += 2) {
  request.r(i10273[i + 0], i10273[i + 1], 2, i10272, '')
  }
  i10266.m_AtlasTextures = i10272
  i10266.m_AtlasTextureIndex = i10267[23]
  i10266.m_IsMultiAtlasTexturesEnabled = !!i10267[24]
  i10266.m_ClearDynamicDataOnBuild = !!i10267[25]
  var i10275 = i10267[26]
  var i10274 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i10275.length; i += 1) {
    i10274.add(request.d('UnityEngine.TextCore.GlyphRect', i10275[i + 0]));
  }
  i10266.m_UsedGlyphRects = i10274
  var i10277 = i10267[27]
  var i10276 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i10277.length; i += 1) {
    i10276.add(request.d('UnityEngine.TextCore.GlyphRect', i10277[i + 0]));
  }
  i10266.m_FreeGlyphRects = i10276
  i10266.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i10267[28], i10266.m_fontInfo)
  i10266.m_AtlasWidth = i10267[29]
  i10266.m_AtlasHeight = i10267[30]
  i10266.m_AtlasPadding = i10267[31]
  i10266.m_AtlasRenderMode = i10267[32]
  var i10279 = i10267[33]
  var i10278 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i10279.length; i += 1) {
    i10278.add(request.d('TMPro.TMP_Glyph', i10279[i + 0]));
  }
  i10266.m_glyphInfoList = i10278
  i10266.m_KerningTable = request.d('TMPro.KerningTable', i10267[34], i10266.m_KerningTable)
  i10266.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i10267[35], i10266.m_FontFeatureTable)
  var i10281 = i10267[36]
  var i10280 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i10281.length; i += 2) {
  request.r(i10281[i + 0], i10281[i + 1], 1, i10280, '')
  }
  i10266.fallbackFontAssets = i10280
  var i10283 = i10267[37]
  var i10282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i10283.length; i += 2) {
  request.r(i10283[i + 0], i10283[i + 1], 1, i10282, '')
  }
  i10266.m_FallbackFontAssetTable = i10282
  i10266.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i10267[38], i10266.m_CreationSettings)
  var i10285 = i10267[39]
  var i10284 = []
  for(var i = 0; i < i10285.length; i += 1) {
    i10284.push( request.d('TMPro.TMP_FontWeightPair', i10285[i + 0]) );
  }
  i10266.m_FontWeightTable = i10284
  var i10287 = i10267[40]
  var i10286 = []
  for(var i = 0; i < i10287.length; i += 1) {
    i10286.push( request.d('TMPro.TMP_FontWeightPair', i10287[i + 0]) );
  }
  i10266.fontWeights = i10286
  return i10266
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i10288 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i10289 = data
  i10288.m_FaceIndex = i10289[0]
  i10288.m_FamilyName = i10289[1]
  i10288.m_StyleName = i10289[2]
  i10288.m_PointSize = i10289[3]
  i10288.m_Scale = i10289[4]
  i10288.m_UnitsPerEM = i10289[5]
  i10288.m_LineHeight = i10289[6]
  i10288.m_AscentLine = i10289[7]
  i10288.m_CapLine = i10289[8]
  i10288.m_MeanLine = i10289[9]
  i10288.m_Baseline = i10289[10]
  i10288.m_DescentLine = i10289[11]
  i10288.m_SuperscriptOffset = i10289[12]
  i10288.m_SuperscriptSize = i10289[13]
  i10288.m_SubscriptOffset = i10289[14]
  i10288.m_SubscriptSize = i10289[15]
  i10288.m_UnderlineOffset = i10289[16]
  i10288.m_UnderlineThickness = i10289[17]
  i10288.m_StrikethroughOffset = i10289[18]
  i10288.m_StrikethroughThickness = i10289[19]
  i10288.m_TabWidth = i10289[20]
  return i10288
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i10292 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i10293 = data
  i10292.m_Index = i10293[0]
  i10292.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i10293[1], i10292.m_Metrics)
  i10292.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i10293[2], i10292.m_GlyphRect)
  i10292.m_Scale = i10293[3]
  i10292.m_AtlasIndex = i10293[4]
  i10292.m_ClassDefinitionType = i10293[5]
  return i10292
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i10294 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i10295 = data
  i10294.m_Width = i10295[0]
  i10294.m_Height = i10295[1]
  i10294.m_HorizontalBearingX = i10295[2]
  i10294.m_HorizontalBearingY = i10295[3]
  i10294.m_HorizontalAdvance = i10295[4]
  return i10294
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i10296 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i10297 = data
  i10296.m_X = i10297[0]
  i10296.m_Y = i10297[1]
  i10296.m_Width = i10297[2]
  i10296.m_Height = i10297[3]
  return i10296
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i10300 = root || request.c( 'TMPro.TMP_Character' )
  var i10301 = data
  i10300.m_ElementType = i10301[0]
  i10300.m_Unicode = i10301[1]
  i10300.m_GlyphIndex = i10301[2]
  i10300.m_Scale = i10301[3]
  return i10300
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i10306 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i10307 = data
  i10306.Name = i10307[0]
  i10306.PointSize = i10307[1]
  i10306.Scale = i10307[2]
  i10306.CharacterCount = i10307[3]
  i10306.LineHeight = i10307[4]
  i10306.Baseline = i10307[5]
  i10306.Ascender = i10307[6]
  i10306.CapHeight = i10307[7]
  i10306.Descender = i10307[8]
  i10306.CenterLine = i10307[9]
  i10306.SuperscriptOffset = i10307[10]
  i10306.SubscriptOffset = i10307[11]
  i10306.SubSize = i10307[12]
  i10306.Underline = i10307[13]
  i10306.UnderlineThickness = i10307[14]
  i10306.strikethrough = i10307[15]
  i10306.strikethroughThickness = i10307[16]
  i10306.TabWidth = i10307[17]
  i10306.Padding = i10307[18]
  i10306.AtlasWidth = i10307[19]
  i10306.AtlasHeight = i10307[20]
  return i10306
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i10310 = root || request.c( 'TMPro.TMP_Glyph' )
  var i10311 = data
  i10310.id = i10311[0]
  i10310.x = i10311[1]
  i10310.y = i10311[2]
  i10310.width = i10311[3]
  i10310.height = i10311[4]
  i10310.xOffset = i10311[5]
  i10310.yOffset = i10311[6]
  i10310.xAdvance = i10311[7]
  i10310.scale = i10311[8]
  return i10310
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i10312 = root || request.c( 'TMPro.KerningTable' )
  var i10313 = data
  var i10315 = i10313[0]
  var i10314 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i10315.length; i += 1) {
    i10314.add(request.d('TMPro.KerningPair', i10315[i + 0]));
  }
  i10312.kerningPairs = i10314
  return i10312
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i10318 = root || request.c( 'TMPro.KerningPair' )
  var i10319 = data
  i10318.xOffset = i10319[0]
  i10318.m_FirstGlyph = i10319[1]
  i10318.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i10319[2], i10318.m_FirstGlyphAdjustments)
  i10318.m_SecondGlyph = i10319[3]
  i10318.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i10319[4], i10318.m_SecondGlyphAdjustments)
  i10318.m_IgnoreSpacingAdjustments = !!i10319[5]
  return i10318
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i10320 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i10321 = data
  var i10323 = i10321[0]
  var i10322 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i10323.length; i += 1) {
    i10322.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i10323[i + 0]));
  }
  i10320.m_GlyphPairAdjustmentRecords = i10322
  return i10320
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i10326 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i10327 = data
  i10326.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i10327[0], i10326.m_FirstAdjustmentRecord)
  i10326.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i10327[1], i10326.m_SecondAdjustmentRecord)
  i10326.m_FeatureLookupFlags = i10327[2]
  return i10326
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i10330 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i10331 = data
  i10330.sourceFontFileName = i10331[0]
  i10330.sourceFontFileGUID = i10331[1]
  i10330.pointSizeSamplingMode = i10331[2]
  i10330.pointSize = i10331[3]
  i10330.padding = i10331[4]
  i10330.packingMode = i10331[5]
  i10330.atlasWidth = i10331[6]
  i10330.atlasHeight = i10331[7]
  i10330.characterSetSelectionMode = i10331[8]
  i10330.characterSequence = i10331[9]
  i10330.referencedFontAssetGUID = i10331[10]
  i10330.referencedTextAssetGUID = i10331[11]
  i10330.fontStyle = i10331[12]
  i10330.fontStyleModifier = i10331[13]
  i10330.renderMode = i10331[14]
  i10330.includeFontFeatures = !!i10331[15]
  return i10330
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i10334 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i10335 = data
  request.r(i10335[0], i10335[1], 0, i10334, 'regularTypeface')
  request.r(i10335[2], i10335[3], 0, i10334, 'italicTypeface')
  return i10334
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i10336 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i10337 = data
  i10336.useSafeMode = !!i10337[0]
  i10336.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i10337[1], i10336.safeModeOptions)
  i10336.timeScale = i10337[2]
  i10336.unscaledTimeScale = i10337[3]
  i10336.useSmoothDeltaTime = !!i10337[4]
  i10336.maxSmoothUnscaledTime = i10337[5]
  i10336.rewindCallbackMode = i10337[6]
  i10336.showUnityEditorReport = !!i10337[7]
  i10336.logBehaviour = i10337[8]
  i10336.drawGizmos = !!i10337[9]
  i10336.defaultRecyclable = !!i10337[10]
  i10336.defaultAutoPlay = i10337[11]
  i10336.defaultUpdateType = i10337[12]
  i10336.defaultTimeScaleIndependent = !!i10337[13]
  i10336.defaultEaseType = i10337[14]
  i10336.defaultEaseOvershootOrAmplitude = i10337[15]
  i10336.defaultEasePeriod = i10337[16]
  i10336.defaultAutoKill = !!i10337[17]
  i10336.defaultLoopType = i10337[18]
  i10336.debugMode = !!i10337[19]
  i10336.debugStoreTargetId = !!i10337[20]
  i10336.showPreviewPanel = !!i10337[21]
  i10336.storeSettingsLocation = i10337[22]
  i10336.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i10337[23], i10336.modules)
  i10336.createASMDEF = !!i10337[24]
  i10336.showPlayingTweens = !!i10337[25]
  i10336.showPausedTweens = !!i10337[26]
  return i10336
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i10338 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i10339 = data
  i10338.logBehaviour = i10339[0]
  i10338.nestedTweenFailureBehaviour = i10339[1]
  return i10338
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i10340 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i10341 = data
  i10340.showPanel = !!i10341[0]
  i10340.audioEnabled = !!i10341[1]
  i10340.physicsEnabled = !!i10341[2]
  i10340.physics2DEnabled = !!i10341[3]
  i10340.spriteEnabled = !!i10341[4]
  i10340.uiEnabled = !!i10341[5]
  i10340.textMeshProEnabled = !!i10341[6]
  i10340.tk2DEnabled = !!i10341[7]
  i10340.deAudioEnabled = !!i10341[8]
  i10340.deUnityExtendedEnabled = !!i10341[9]
  i10340.epoOutlineEnabled = !!i10341[10]
  return i10340
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i10342 = root || request.c( 'TMPro.TMP_Settings' )
  var i10343 = data
  i10342.m_enableWordWrapping = !!i10343[0]
  i10342.m_enableKerning = !!i10343[1]
  i10342.m_enableExtraPadding = !!i10343[2]
  i10342.m_enableTintAllSprites = !!i10343[3]
  i10342.m_enableParseEscapeCharacters = !!i10343[4]
  i10342.m_EnableRaycastTarget = !!i10343[5]
  i10342.m_GetFontFeaturesAtRuntime = !!i10343[6]
  i10342.m_missingGlyphCharacter = i10343[7]
  i10342.m_warningsDisabled = !!i10343[8]
  request.r(i10343[9], i10343[10], 0, i10342, 'm_defaultFontAsset')
  i10342.m_defaultFontAssetPath = i10343[11]
  i10342.m_defaultFontSize = i10343[12]
  i10342.m_defaultAutoSizeMinRatio = i10343[13]
  i10342.m_defaultAutoSizeMaxRatio = i10343[14]
  i10342.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i10343[15], i10343[16] )
  i10342.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i10343[17], i10343[18] )
  i10342.m_autoSizeTextContainer = !!i10343[19]
  i10342.m_IsTextObjectScaleStatic = !!i10343[20]
  var i10345 = i10343[21]
  var i10344 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i10345.length; i += 2) {
  request.r(i10345[i + 0], i10345[i + 1], 1, i10344, '')
  }
  i10342.m_fallbackFontAssets = i10344
  i10342.m_matchMaterialPreset = !!i10343[22]
  request.r(i10343[23], i10343[24], 0, i10342, 'm_defaultSpriteAsset')
  i10342.m_defaultSpriteAssetPath = i10343[25]
  i10342.m_enableEmojiSupport = !!i10343[26]
  i10342.m_MissingCharacterSpriteUnicode = i10343[27]
  i10342.m_defaultColorGradientPresetsPath = i10343[28]
  request.r(i10343[29], i10343[30], 0, i10342, 'm_defaultStyleSheet')
  i10342.m_StyleSheetsResourcePath = i10343[31]
  request.r(i10343[32], i10343[33], 0, i10342, 'm_leadingCharacters')
  request.r(i10343[34], i10343[35], 0, i10342, 'm_followingCharacters')
  i10342.m_UseModernHangulLineBreakingRules = !!i10343[36]
  return i10342
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i10346 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i10347 = data
  i10346.hashCode = i10347[0]
  request.r(i10347[1], i10347[2], 0, i10346, 'material')
  i10346.materialHashCode = i10347[3]
  request.r(i10347[4], i10347[5], 0, i10346, 'spriteSheet')
  var i10349 = i10347[6]
  var i10348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i10349.length; i += 1) {
    i10348.add(request.d('TMPro.TMP_Sprite', i10349[i + 0]));
  }
  i10346.spriteInfoList = i10348
  var i10351 = i10347[7]
  var i10350 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i10351.length; i += 2) {
  request.r(i10351[i + 0], i10351[i + 1], 1, i10350, '')
  }
  i10346.fallbackSpriteAssets = i10350
  i10346.m_Version = i10347[8]
  i10346.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i10347[9], i10346.m_FaceInfo)
  var i10353 = i10347[10]
  var i10352 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i10353.length; i += 1) {
    i10352.add(request.d('TMPro.TMP_SpriteCharacter', i10353[i + 0]));
  }
  i10346.m_SpriteCharacterTable = i10352
  var i10355 = i10347[11]
  var i10354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i10355.length; i += 1) {
    i10354.add(request.d('TMPro.TMP_SpriteGlyph', i10355[i + 0]));
  }
  i10346.m_SpriteGlyphTable = i10354
  return i10346
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i10358 = root || request.c( 'TMPro.TMP_Sprite' )
  var i10359 = data
  i10358.name = i10359[0]
  i10358.hashCode = i10359[1]
  i10358.unicode = i10359[2]
  i10358.pivot = new pc.Vec2( i10359[3], i10359[4] )
  request.r(i10359[5], i10359[6], 0, i10358, 'sprite')
  i10358.id = i10359[7]
  i10358.x = i10359[8]
  i10358.y = i10359[9]
  i10358.width = i10359[10]
  i10358.height = i10359[11]
  i10358.xOffset = i10359[12]
  i10358.yOffset = i10359[13]
  i10358.xAdvance = i10359[14]
  i10358.scale = i10359[15]
  return i10358
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i10364 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i10365 = data
  i10364.m_Name = i10365[0]
  i10364.m_HashCode = i10365[1]
  i10364.m_ElementType = i10365[2]
  i10364.m_Unicode = i10365[3]
  i10364.m_GlyphIndex = i10365[4]
  i10364.m_Scale = i10365[5]
  return i10364
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i10368 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i10369 = data
  request.r(i10369[0], i10369[1], 0, i10368, 'sprite')
  i10368.m_Index = i10369[2]
  i10368.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i10369[3], i10368.m_Metrics)
  i10368.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i10369[4], i10368.m_GlyphRect)
  i10368.m_Scale = i10369[5]
  i10368.m_AtlasIndex = i10369[6]
  i10368.m_ClassDefinitionType = i10369[7]
  return i10368
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i10370 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i10371 = data
  var i10373 = i10371[0]
  var i10372 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i10373.length; i += 1) {
    i10372.add(request.d('TMPro.TMP_Style', i10373[i + 0]));
  }
  i10370.m_StyleList = i10372
  return i10370
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i10376 = root || request.c( 'TMPro.TMP_Style' )
  var i10377 = data
  i10376.m_Name = i10377[0]
  i10376.m_HashCode = i10377[1]
  i10376.m_OpeningDefinition = i10377[2]
  i10376.m_ClosingDefinition = i10377[3]
  i10376.m_OpeningTagArray = i10377[4]
  i10376.m_ClosingTagArray = i10377[5]
  i10376.m_OpeningTagUnicodeArray = i10377[6]
  i10376.m_ClosingTagUnicodeArray = i10377[7]
  return i10376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i10378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i10379 = data
  var i10381 = i10379[0]
  var i10380 = []
  for(var i = 0; i < i10381.length; i += 1) {
    i10380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i10381[i + 0]) );
  }
  i10378.files = i10380
  i10378.componentToPrefabIds = i10379[1]
  return i10378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i10384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i10385 = data
  i10384.path = i10385[0]
  request.r(i10385[1], i10385[2], 0, i10384, 'unityObject')
  return i10384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i10386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i10387 = data
  var i10389 = i10387[0]
  var i10388 = []
  for(var i = 0; i < i10389.length; i += 1) {
    i10388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i10389[i + 0]) );
  }
  i10386.scriptsExecutionOrder = i10388
  var i10391 = i10387[1]
  var i10390 = []
  for(var i = 0; i < i10391.length; i += 1) {
    i10390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i10391[i + 0]) );
  }
  i10386.sortingLayers = i10390
  var i10393 = i10387[2]
  var i10392 = []
  for(var i = 0; i < i10393.length; i += 1) {
    i10392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i10393[i + 0]) );
  }
  i10386.cullingLayers = i10392
  i10386.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i10387[3], i10386.timeSettings)
  i10386.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i10387[4], i10386.physicsSettings)
  i10386.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i10387[5], i10386.physics2DSettings)
  i10386.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i10387[6], i10386.qualitySettings)
  i10386.enableRealtimeShadows = !!i10387[7]
  i10386.enableAutoInstancing = !!i10387[8]
  i10386.enableDynamicBatching = !!i10387[9]
  i10386.lightmapEncodingQuality = i10387[10]
  i10386.desiredColorSpace = i10387[11]
  var i10395 = i10387[12]
  var i10394 = []
  for(var i = 0; i < i10395.length; i += 1) {
    i10394.push( i10395[i + 0] );
  }
  i10386.allTags = i10394
  return i10386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i10398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i10399 = data
  i10398.name = i10399[0]
  i10398.value = i10399[1]
  return i10398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i10402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i10403 = data
  i10402.id = i10403[0]
  i10402.name = i10403[1]
  i10402.value = i10403[2]
  return i10402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i10406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i10407 = data
  i10406.id = i10407[0]
  i10406.name = i10407[1]
  return i10406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i10408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i10409 = data
  i10408.fixedDeltaTime = i10409[0]
  i10408.maximumDeltaTime = i10409[1]
  i10408.timeScale = i10409[2]
  i10408.maximumParticleTimestep = i10409[3]
  return i10408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i10410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i10411 = data
  i10410.gravity = new pc.Vec3( i10411[0], i10411[1], i10411[2] )
  i10410.defaultSolverIterations = i10411[3]
  i10410.bounceThreshold = i10411[4]
  i10410.autoSyncTransforms = !!i10411[5]
  i10410.autoSimulation = !!i10411[6]
  var i10413 = i10411[7]
  var i10412 = []
  for(var i = 0; i < i10413.length; i += 1) {
    i10412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i10413[i + 0]) );
  }
  i10410.collisionMatrix = i10412
  return i10410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i10416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i10417 = data
  i10416.enabled = !!i10417[0]
  i10416.layerId = i10417[1]
  i10416.otherLayerId = i10417[2]
  return i10416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i10418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i10419 = data
  request.r(i10419[0], i10419[1], 0, i10418, 'material')
  i10418.gravity = new pc.Vec2( i10419[2], i10419[3] )
  i10418.positionIterations = i10419[4]
  i10418.velocityIterations = i10419[5]
  i10418.velocityThreshold = i10419[6]
  i10418.maxLinearCorrection = i10419[7]
  i10418.maxAngularCorrection = i10419[8]
  i10418.maxTranslationSpeed = i10419[9]
  i10418.maxRotationSpeed = i10419[10]
  i10418.baumgarteScale = i10419[11]
  i10418.baumgarteTOIScale = i10419[12]
  i10418.timeToSleep = i10419[13]
  i10418.linearSleepTolerance = i10419[14]
  i10418.angularSleepTolerance = i10419[15]
  i10418.defaultContactOffset = i10419[16]
  i10418.autoSimulation = !!i10419[17]
  i10418.queriesHitTriggers = !!i10419[18]
  i10418.queriesStartInColliders = !!i10419[19]
  i10418.callbacksOnDisable = !!i10419[20]
  i10418.reuseCollisionCallbacks = !!i10419[21]
  i10418.autoSyncTransforms = !!i10419[22]
  var i10421 = i10419[23]
  var i10420 = []
  for(var i = 0; i < i10421.length; i += 1) {
    i10420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i10421[i + 0]) );
  }
  i10418.collisionMatrix = i10420
  return i10418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i10424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i10425 = data
  i10424.enabled = !!i10425[0]
  i10424.layerId = i10425[1]
  i10424.otherLayerId = i10425[2]
  return i10424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i10426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i10427 = data
  var i10429 = i10427[0]
  var i10428 = []
  for(var i = 0; i < i10429.length; i += 1) {
    i10428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i10429[i + 0]) );
  }
  i10426.qualityLevels = i10428
  var i10431 = i10427[1]
  var i10430 = []
  for(var i = 0; i < i10431.length; i += 1) {
    i10430.push( i10431[i + 0] );
  }
  i10426.names = i10430
  i10426.shadows = i10427[2]
  i10426.anisotropicFiltering = i10427[3]
  i10426.antiAliasing = i10427[4]
  i10426.lodBias = i10427[5]
  i10426.shadowCascades = i10427[6]
  i10426.shadowDistance = i10427[7]
  i10426.shadowmaskMode = i10427[8]
  i10426.shadowProjection = i10427[9]
  i10426.shadowResolution = i10427[10]
  i10426.softParticles = !!i10427[11]
  i10426.softVegetation = !!i10427[12]
  i10426.activeColorSpace = i10427[13]
  i10426.desiredColorSpace = i10427[14]
  i10426.masterTextureLimit = i10427[15]
  i10426.maxQueuedFrames = i10427[16]
  i10426.particleRaycastBudget = i10427[17]
  i10426.pixelLightCount = i10427[18]
  i10426.realtimeReflectionProbes = !!i10427[19]
  i10426.shadowCascade2Split = i10427[20]
  i10426.shadowCascade4Split = new pc.Vec3( i10427[21], i10427[22], i10427[23] )
  i10426.streamingMipmapsActive = !!i10427[24]
  i10426.vSyncCount = i10427[25]
  i10426.asyncUploadBufferSize = i10427[26]
  i10426.asyncUploadTimeSlice = i10427[27]
  i10426.billboardsFaceCameraPosition = !!i10427[28]
  i10426.shadowNearPlaneOffset = i10427[29]
  i10426.streamingMipmapsMemoryBudget = i10427[30]
  i10426.maximumLODLevel = i10427[31]
  i10426.streamingMipmapsAddAllCameras = !!i10427[32]
  i10426.streamingMipmapsMaxLevelReduction = i10427[33]
  i10426.streamingMipmapsRenderersPerFrame = i10427[34]
  i10426.resolutionScalingFixedDPIFactor = i10427[35]
  i10426.streamingMipmapsMaxFileIORequests = i10427[36]
  i10426.currentQualityLevel = i10427[37]
  return i10426
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i10434 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i10435 = data
  i10434.xPlacement = i10435[0]
  i10434.yPlacement = i10435[1]
  i10434.xAdvance = i10435[2]
  i10434.yAdvance = i10435[3]
  return i10434
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i10436 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i10437 = data
  i10436.m_GlyphIndex = i10437[0]
  i10436.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i10437[1], i10436.m_GlyphValueRecord)
  return i10436
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i10438 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i10439 = data
  i10438.m_XPlacement = i10439[0]
  i10438.m_YPlacement = i10439[1]
  i10438.m_XAdvance = i10439[2]
  i10438.m_YAdvance = i10439[3]
  return i10438
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

Deserializers.runtimeAnalysisExcludedClassesCount = "1720";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4285";

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

Deserializers.buildID = "a2c89d93-8121-4809-990b-8ed3c68c77e6";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


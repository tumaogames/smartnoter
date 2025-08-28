var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i10962 = root || request.c( 'UnityEngine.JointSpring' )
  var i10963 = data
  i10962.spring = i10963[0]
  i10962.damper = i10963[1]
  i10962.targetPosition = i10963[2]
  return i10962
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i10964 = root || request.c( 'UnityEngine.JointMotor' )
  var i10965 = data
  i10964.m_TargetVelocity = i10965[0]
  i10964.m_Force = i10965[1]
  i10964.m_FreeSpin = i10965[2]
  return i10964
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i10966 = root || request.c( 'UnityEngine.JointLimits' )
  var i10967 = data
  i10966.m_Min = i10967[0]
  i10966.m_Max = i10967[1]
  i10966.m_Bounciness = i10967[2]
  i10966.m_BounceMinVelocity = i10967[3]
  i10966.m_ContactDistance = i10967[4]
  i10966.minBounce = i10967[5]
  i10966.maxBounce = i10967[6]
  return i10966
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i10968 = root || request.c( 'UnityEngine.JointDrive' )
  var i10969 = data
  i10968.m_PositionSpring = i10969[0]
  i10968.m_PositionDamper = i10969[1]
  i10968.m_MaximumForce = i10969[2]
  i10968.m_UseAcceleration = i10969[3]
  return i10968
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i10970 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i10971 = data
  i10970.m_Spring = i10971[0]
  i10970.m_Damper = i10971[1]
  return i10970
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i10972 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i10973 = data
  i10972.m_Limit = i10973[0]
  i10972.m_Bounciness = i10973[1]
  i10972.m_ContactDistance = i10973[2]
  return i10972
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i10974 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i10975 = data
  i10974.m_ExtremumSlip = i10975[0]
  i10974.m_ExtremumValue = i10975[1]
  i10974.m_AsymptoteSlip = i10975[2]
  i10974.m_AsymptoteValue = i10975[3]
  i10974.m_Stiffness = i10975[4]
  return i10974
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i10976 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i10977 = data
  i10976.m_LowerAngle = i10977[0]
  i10976.m_UpperAngle = i10977[1]
  return i10976
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i10978 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i10979 = data
  i10978.m_MotorSpeed = i10979[0]
  i10978.m_MaximumMotorTorque = i10979[1]
  return i10978
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i10980 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i10981 = data
  i10980.m_DampingRatio = i10981[0]
  i10980.m_Frequency = i10981[1]
  i10980.m_Angle = i10981[2]
  return i10980
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i10982 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i10983 = data
  i10982.m_LowerTranslation = i10983[0]
  i10982.m_UpperTranslation = i10983[1]
  return i10982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i10984 = root || new pc.UnityMaterial()
  var i10985 = data
  i10984.name = i10985[0]
  request.r(i10985[1], i10985[2], 0, i10984, 'shader')
  i10984.renderQueue = i10985[3]
  i10984.enableInstancing = !!i10985[4]
  var i10987 = i10985[5]
  var i10986 = []
  for(var i = 0; i < i10987.length; i += 1) {
    i10986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i10987[i + 0]) );
  }
  i10984.floatParameters = i10986
  var i10989 = i10985[6]
  var i10988 = []
  for(var i = 0; i < i10989.length; i += 1) {
    i10988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i10989[i + 0]) );
  }
  i10984.colorParameters = i10988
  var i10991 = i10985[7]
  var i10990 = []
  for(var i = 0; i < i10991.length; i += 1) {
    i10990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i10991[i + 0]) );
  }
  i10984.vectorParameters = i10990
  var i10993 = i10985[8]
  var i10992 = []
  for(var i = 0; i < i10993.length; i += 1) {
    i10992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i10993[i + 0]) );
  }
  i10984.textureParameters = i10992
  var i10995 = i10985[9]
  var i10994 = []
  for(var i = 0; i < i10995.length; i += 1) {
    i10994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i10995[i + 0]) );
  }
  i10984.materialFlags = i10994
  return i10984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i10998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i10999 = data
  i10998.name = i10999[0]
  i10998.value = i10999[1]
  return i10998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i11002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i11003 = data
  i11002.name = i11003[0]
  i11002.value = new pc.Color(i11003[1], i11003[2], i11003[3], i11003[4])
  return i11002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i11006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i11007 = data
  i11006.name = i11007[0]
  i11006.value = new pc.Vec4( i11007[1], i11007[2], i11007[3], i11007[4] )
  return i11006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i11010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i11011 = data
  i11010.name = i11011[0]
  request.r(i11011[1], i11011[2], 0, i11010, 'value')
  return i11010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i11014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i11015 = data
  i11014.name = i11015[0]
  i11014.enabled = !!i11015[1]
  return i11014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i11016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i11017 = data
  i11016.name = i11017[0]
  i11016.width = i11017[1]
  i11016.height = i11017[2]
  i11016.mipmapCount = i11017[3]
  i11016.anisoLevel = i11017[4]
  i11016.filterMode = i11017[5]
  i11016.hdr = !!i11017[6]
  i11016.format = i11017[7]
  i11016.wrapMode = i11017[8]
  i11016.alphaIsTransparency = !!i11017[9]
  i11016.alphaSource = i11017[10]
  i11016.graphicsFormat = i11017[11]
  i11016.sRGBTexture = !!i11017[12]
  i11016.desiredColorSpace = i11017[13]
  i11016.wrapU = i11017[14]
  i11016.wrapV = i11017[15]
  return i11016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i11018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i11019 = data
  i11018.name = i11019[0]
  i11018.index = i11019[1]
  i11018.startup = !!i11019[2]
  return i11018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i11020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i11021 = data
  i11020.position = new pc.Vec3( i11021[0], i11021[1], i11021[2] )
  i11020.scale = new pc.Vec3( i11021[3], i11021[4], i11021[5] )
  i11020.rotation = new pc.Quat(i11021[6], i11021[7], i11021[8], i11021[9])
  return i11020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i11022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i11023 = data
  i11022.enabled = !!i11023[0]
  i11022.aspect = i11023[1]
  i11022.orthographic = !!i11023[2]
  i11022.orthographicSize = i11023[3]
  i11022.backgroundColor = new pc.Color(i11023[4], i11023[5], i11023[6], i11023[7])
  i11022.nearClipPlane = i11023[8]
  i11022.farClipPlane = i11023[9]
  i11022.fieldOfView = i11023[10]
  i11022.depth = i11023[11]
  i11022.clearFlags = i11023[12]
  i11022.cullingMask = i11023[13]
  i11022.rect = i11023[14]
  request.r(i11023[15], i11023[16], 0, i11022, 'targetTexture')
  i11022.usePhysicalProperties = !!i11023[17]
  i11022.focalLength = i11023[18]
  i11022.sensorSize = new pc.Vec2( i11023[19], i11023[20] )
  i11022.lensShift = new pc.Vec2( i11023[21], i11023[22] )
  i11022.gateFit = i11023[23]
  i11022.commandBufferCount = i11023[24]
  i11022.cameraType = i11023[25]
  return i11022
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i11024 = root || request.c( 'CameraAspectFitter' )
  var i11025 = data
  request.r(i11025[0], i11025[1], 0, i11024, 'targetSprite')
  return i11024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i11026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i11027 = data
  i11026.name = i11027[0]
  i11026.tagId = i11027[1]
  i11026.enabled = !!i11027[2]
  i11026.isStatic = !!i11027[3]
  i11026.layer = i11027[4]
  return i11026
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i11028 = root || request.c( 'AudioManager' )
  var i11029 = data
  request.r(i11029[0], i11029[1], 0, i11028, 'library')
  i11028.sfxPoolSize = i11029[2]
  return i11028
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i11030 = root || request.c( 'TaskManager' )
  var i11031 = data
  return i11030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i11032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i11033 = data
  i11032.enabled = !!i11033[0]
  request.r(i11033[1], i11033[2], 0, i11032, 'sharedMaterial')
  var i11035 = i11033[3]
  var i11034 = []
  for(var i = 0; i < i11035.length; i += 2) {
  request.r(i11035[i + 0], i11035[i + 1], 2, i11034, '')
  }
  i11032.sharedMaterials = i11034
  i11032.receiveShadows = !!i11033[4]
  i11032.shadowCastingMode = i11033[5]
  i11032.sortingLayerID = i11033[6]
  i11032.sortingOrder = i11033[7]
  i11032.lightmapIndex = i11033[8]
  i11032.lightmapSceneIndex = i11033[9]
  i11032.lightmapScaleOffset = new pc.Vec4( i11033[10], i11033[11], i11033[12], i11033[13] )
  i11032.lightProbeUsage = i11033[14]
  i11032.reflectionProbeUsage = i11033[15]
  i11032.color = new pc.Color(i11033[16], i11033[17], i11033[18], i11033[19])
  request.r(i11033[20], i11033[21], 0, i11032, 'sprite')
  i11032.flipX = !!i11033[22]
  i11032.flipY = !!i11033[23]
  i11032.drawMode = i11033[24]
  i11032.size = new pc.Vec2( i11033[25], i11033[26] )
  i11032.tileMode = i11033[27]
  i11032.adaptiveModeThreshold = i11033[28]
  i11032.maskInteraction = i11033[29]
  i11032.spriteSortPoint = i11033[30]
  return i11032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i11038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i11039 = data
  i11038.pivot = new pc.Vec2( i11039[0], i11039[1] )
  i11038.anchorMin = new pc.Vec2( i11039[2], i11039[3] )
  i11038.anchorMax = new pc.Vec2( i11039[4], i11039[5] )
  i11038.sizeDelta = new pc.Vec2( i11039[6], i11039[7] )
  i11038.anchoredPosition3D = new pc.Vec3( i11039[8], i11039[9], i11039[10] )
  i11038.rotation = new pc.Quat(i11039[11], i11039[12], i11039[13], i11039[14])
  i11038.scale = new pc.Vec3( i11039[15], i11039[16], i11039[17] )
  return i11038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i11040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i11041 = data
  i11040.enabled = !!i11041[0]
  i11040.planeDistance = i11041[1]
  i11040.referencePixelsPerUnit = i11041[2]
  i11040.isFallbackOverlay = !!i11041[3]
  i11040.renderMode = i11041[4]
  i11040.renderOrder = i11041[5]
  i11040.sortingLayerName = i11041[6]
  i11040.sortingOrder = i11041[7]
  i11040.scaleFactor = i11041[8]
  request.r(i11041[9], i11041[10], 0, i11040, 'worldCamera')
  i11040.overrideSorting = !!i11041[11]
  i11040.pixelPerfect = !!i11041[12]
  i11040.targetDisplay = i11041[13]
  i11040.overridePixelPerfect = !!i11041[14]
  return i11040
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i11042 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i11043 = data
  i11042.m_UiScaleMode = i11043[0]
  i11042.m_ReferencePixelsPerUnit = i11043[1]
  i11042.m_ScaleFactor = i11043[2]
  i11042.m_ReferenceResolution = new pc.Vec2( i11043[3], i11043[4] )
  i11042.m_ScreenMatchMode = i11043[5]
  i11042.m_MatchWidthOrHeight = i11043[6]
  i11042.m_PhysicalUnit = i11043[7]
  i11042.m_FallbackScreenDPI = i11043[8]
  i11042.m_DefaultSpriteDPI = i11043[9]
  i11042.m_DynamicPixelsPerUnit = i11043[10]
  i11042.m_PresetInfoIsWorld = !!i11043[11]
  return i11042
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i11044 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i11045 = data
  i11044.m_IgnoreReversedGraphics = !!i11045[0]
  i11044.m_BlockingObjects = i11045[1]
  i11044.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i11045[2] )
  return i11044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i11046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i11047 = data
  i11046.cullTransparentMesh = !!i11047[0]
  return i11046
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i11048 = root || request.c( 'UnityEngine.UI.Image' )
  var i11049 = data
  request.r(i11049[0], i11049[1], 0, i11048, 'm_Sprite')
  i11048.m_Type = i11049[2]
  i11048.m_PreserveAspect = !!i11049[3]
  i11048.m_FillCenter = !!i11049[4]
  i11048.m_FillMethod = i11049[5]
  i11048.m_FillAmount = i11049[6]
  i11048.m_FillClockwise = !!i11049[7]
  i11048.m_FillOrigin = i11049[8]
  i11048.m_UseSpriteMesh = !!i11049[9]
  i11048.m_PixelsPerUnitMultiplier = i11049[10]
  request.r(i11049[11], i11049[12], 0, i11048, 'm_Material')
  i11048.m_Maskable = !!i11049[13]
  i11048.m_Color = new pc.Color(i11049[14], i11049[15], i11049[16], i11049[17])
  i11048.m_RaycastTarget = !!i11049[18]
  i11048.m_RaycastPadding = new pc.Vec4( i11049[19], i11049[20], i11049[21], i11049[22] )
  return i11048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i11050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i11051 = data
  i11050.m_Alpha = i11051[0]
  i11050.m_Interactable = !!i11051[1]
  i11050.m_BlocksRaycasts = !!i11051[2]
  i11050.m_IgnoreParentGroups = !!i11051[3]
  i11050.enabled = !!i11051[4]
  return i11050
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i11052 = root || request.c( 'CanvasGroupAnimator' )
  var i11053 = data
  request.r(i11053[0], i11053[1], 0, i11052, 'canvasGroup')
  i11052.animateFade = !!i11053[2]
  i11052.triggerOnStart = !!i11053[3]
  i11052.isLooping = !!i11053[4]
  i11052.fadeTo = i11053[5]
  i11052.fadeDuration = i11053[6]
  i11052.fadeEaseType = i11053[7]
  return i11052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i11054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i11055 = data
  request.r(i11055[0], i11055[1], 0, i11054, 'animatorController')
  request.r(i11055[2], i11055[3], 0, i11054, 'avatar')
  i11054.updateMode = i11055[4]
  i11054.hasTransformHierarchy = !!i11055[5]
  i11054.applyRootMotion = !!i11055[6]
  var i11057 = i11055[7]
  var i11056 = []
  for(var i = 0; i < i11057.length; i += 2) {
  request.r(i11057[i + 0], i11057[i + 1], 2, i11056, '')
  }
  i11054.humanBones = i11056
  i11054.enabled = !!i11055[8]
  return i11054
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i11060 = root || request.c( 'UnityEngine.UI.Button' )
  var i11061 = data
  i11060.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i11061[0], i11060.m_OnClick)
  i11060.m_Navigation = request.d('UnityEngine.UI.Navigation', i11061[1], i11060.m_Navigation)
  i11060.m_Transition = i11061[2]
  i11060.m_Colors = request.d('UnityEngine.UI.ColorBlock', i11061[3], i11060.m_Colors)
  i11060.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i11061[4], i11060.m_SpriteState)
  i11060.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i11061[5], i11060.m_AnimationTriggers)
  i11060.m_Interactable = !!i11061[6]
  request.r(i11061[7], i11061[8], 0, i11060, 'm_TargetGraphic')
  return i11060
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i11062 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i11063 = data
  i11062.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i11063[0], i11062.m_PersistentCalls)
  return i11062
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i11064 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i11065 = data
  var i11067 = i11065[0]
  var i11066 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i11067.length; i += 1) {
    i11066.add(request.d('UnityEngine.Events.PersistentCall', i11067[i + 0]));
  }
  i11064.m_Calls = i11066
  return i11064
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i11070 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i11071 = data
  request.r(i11071[0], i11071[1], 0, i11070, 'm_Target')
  i11070.m_TargetAssemblyTypeName = i11071[2]
  i11070.m_MethodName = i11071[3]
  i11070.m_Mode = i11071[4]
  i11070.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i11071[5], i11070.m_Arguments)
  i11070.m_CallState = i11071[6]
  return i11070
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i11072 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i11073 = data
  request.r(i11073[0], i11073[1], 0, i11072, 'm_ObjectArgument')
  i11072.m_ObjectArgumentAssemblyTypeName = i11073[2]
  i11072.m_IntArgument = i11073[3]
  i11072.m_FloatArgument = i11073[4]
  i11072.m_StringArgument = i11073[5]
  i11072.m_BoolArgument = !!i11073[6]
  return i11072
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i11074 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i11075 = data
  i11074.m_Mode = i11075[0]
  i11074.m_WrapAround = !!i11075[1]
  request.r(i11075[2], i11075[3], 0, i11074, 'm_SelectOnUp')
  request.r(i11075[4], i11075[5], 0, i11074, 'm_SelectOnDown')
  request.r(i11075[6], i11075[7], 0, i11074, 'm_SelectOnLeft')
  request.r(i11075[8], i11075[9], 0, i11074, 'm_SelectOnRight')
  return i11074
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i11076 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i11077 = data
  i11076.m_NormalColor = new pc.Color(i11077[0], i11077[1], i11077[2], i11077[3])
  i11076.m_HighlightedColor = new pc.Color(i11077[4], i11077[5], i11077[6], i11077[7])
  i11076.m_PressedColor = new pc.Color(i11077[8], i11077[9], i11077[10], i11077[11])
  i11076.m_SelectedColor = new pc.Color(i11077[12], i11077[13], i11077[14], i11077[15])
  i11076.m_DisabledColor = new pc.Color(i11077[16], i11077[17], i11077[18], i11077[19])
  i11076.m_ColorMultiplier = i11077[20]
  i11076.m_FadeDuration = i11077[21]
  return i11076
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i11078 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i11079 = data
  request.r(i11079[0], i11079[1], 0, i11078, 'm_HighlightedSprite')
  request.r(i11079[2], i11079[3], 0, i11078, 'm_PressedSprite')
  request.r(i11079[4], i11079[5], 0, i11078, 'm_SelectedSprite')
  request.r(i11079[6], i11079[7], 0, i11078, 'm_DisabledSprite')
  return i11078
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i11080 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i11081 = data
  i11080.m_NormalTrigger = i11081[0]
  i11080.m_HighlightedTrigger = i11081[1]
  i11080.m_PressedTrigger = i11081[2]
  i11080.m_SelectedTrigger = i11081[3]
  i11080.m_DisabledTrigger = i11081[4]
  return i11080
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i11082 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i11083 = data
  i11082.m_Spacing = i11083[0]
  i11082.m_ChildForceExpandWidth = !!i11083[1]
  i11082.m_ChildForceExpandHeight = !!i11083[2]
  i11082.m_ChildControlWidth = !!i11083[3]
  i11082.m_ChildControlHeight = !!i11083[4]
  i11082.m_ChildScaleWidth = !!i11083[5]
  i11082.m_ChildScaleHeight = !!i11083[6]
  i11082.m_ReverseArrangement = !!i11083[7]
  i11082.m_Padding = UnityEngine.RectOffset.FromPaddings(i11083[8], i11083[9], i11083[10], i11083[11])
  i11082.m_ChildAlignment = i11083[12]
  return i11082
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i11084 = root || request.c( 'UnityEngine.UI.Mask' )
  var i11085 = data
  i11084.m_ShowMaskGraphic = !!i11085[0]
  return i11084
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i11086 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i11087 = data
  request.r(i11087[0], i11087[1], 0, i11086, 'm_Content')
  i11086.m_Horizontal = !!i11087[2]
  i11086.m_Vertical = !!i11087[3]
  i11086.m_MovementType = i11087[4]
  i11086.m_Elasticity = i11087[5]
  i11086.m_Inertia = !!i11087[6]
  i11086.m_DecelerationRate = i11087[7]
  i11086.m_ScrollSensitivity = i11087[8]
  request.r(i11087[9], i11087[10], 0, i11086, 'm_Viewport')
  request.r(i11087[11], i11087[12], 0, i11086, 'm_HorizontalScrollbar')
  request.r(i11087[13], i11087[14], 0, i11086, 'm_VerticalScrollbar')
  i11086.m_HorizontalScrollbarVisibility = i11087[15]
  i11086.m_VerticalScrollbarVisibility = i11087[16]
  i11086.m_HorizontalScrollbarSpacing = i11087[17]
  i11086.m_VerticalScrollbarSpacing = i11087[18]
  i11086.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i11087[19], i11086.m_OnValueChanged)
  return i11086
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i11088 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i11089 = data
  i11088.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i11089[0], i11088.m_PersistentCalls)
  return i11088
}

Deserializers["UnityEngine.UI.RectMask2D"] = function (request, data, root) {
  var i11090 = root || request.c( 'UnityEngine.UI.RectMask2D' )
  var i11091 = data
  i11090.m_Padding = new pc.Vec4( i11091[0], i11091[1], i11091[2], i11091[3] )
  i11090.m_Softness = new pc.Vec2( i11091[4], i11091[5] )
  return i11090
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i11092 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i11093 = data
  i11092.m_hasFontAssetChanged = !!i11093[0]
  request.r(i11093[1], i11093[2], 0, i11092, 'm_baseMaterial')
  i11092.m_maskOffset = new pc.Vec4( i11093[3], i11093[4], i11093[5], i11093[6] )
  i11092.m_text = i11093[7]
  i11092.m_isRightToLeft = !!i11093[8]
  request.r(i11093[9], i11093[10], 0, i11092, 'm_fontAsset')
  request.r(i11093[11], i11093[12], 0, i11092, 'm_sharedMaterial')
  var i11095 = i11093[13]
  var i11094 = []
  for(var i = 0; i < i11095.length; i += 2) {
  request.r(i11095[i + 0], i11095[i + 1], 2, i11094, '')
  }
  i11092.m_fontSharedMaterials = i11094
  request.r(i11093[14], i11093[15], 0, i11092, 'm_fontMaterial')
  var i11097 = i11093[16]
  var i11096 = []
  for(var i = 0; i < i11097.length; i += 2) {
  request.r(i11097[i + 0], i11097[i + 1], 2, i11096, '')
  }
  i11092.m_fontMaterials = i11096
  i11092.m_fontColor32 = UnityEngine.Color32.ConstructColor(i11093[17], i11093[18], i11093[19], i11093[20])
  i11092.m_fontColor = new pc.Color(i11093[21], i11093[22], i11093[23], i11093[24])
  i11092.m_enableVertexGradient = !!i11093[25]
  i11092.m_colorMode = i11093[26]
  i11092.m_fontColorGradient = request.d('TMPro.VertexGradient', i11093[27], i11092.m_fontColorGradient)
  request.r(i11093[28], i11093[29], 0, i11092, 'm_fontColorGradientPreset')
  request.r(i11093[30], i11093[31], 0, i11092, 'm_spriteAsset')
  i11092.m_tintAllSprites = !!i11093[32]
  request.r(i11093[33], i11093[34], 0, i11092, 'm_StyleSheet')
  i11092.m_TextStyleHashCode = i11093[35]
  i11092.m_overrideHtmlColors = !!i11093[36]
  i11092.m_faceColor = UnityEngine.Color32.ConstructColor(i11093[37], i11093[38], i11093[39], i11093[40])
  i11092.m_fontSize = i11093[41]
  i11092.m_fontSizeBase = i11093[42]
  i11092.m_fontWeight = i11093[43]
  i11092.m_enableAutoSizing = !!i11093[44]
  i11092.m_fontSizeMin = i11093[45]
  i11092.m_fontSizeMax = i11093[46]
  i11092.m_fontStyle = i11093[47]
  i11092.m_HorizontalAlignment = i11093[48]
  i11092.m_VerticalAlignment = i11093[49]
  i11092.m_textAlignment = i11093[50]
  i11092.m_characterSpacing = i11093[51]
  i11092.m_wordSpacing = i11093[52]
  i11092.m_lineSpacing = i11093[53]
  i11092.m_lineSpacingMax = i11093[54]
  i11092.m_paragraphSpacing = i11093[55]
  i11092.m_charWidthMaxAdj = i11093[56]
  i11092.m_enableWordWrapping = !!i11093[57]
  i11092.m_wordWrappingRatios = i11093[58]
  i11092.m_overflowMode = i11093[59]
  request.r(i11093[60], i11093[61], 0, i11092, 'm_linkedTextComponent')
  request.r(i11093[62], i11093[63], 0, i11092, 'parentLinkedComponent')
  i11092.m_enableKerning = !!i11093[64]
  i11092.m_enableExtraPadding = !!i11093[65]
  i11092.checkPaddingRequired = !!i11093[66]
  i11092.m_isRichText = !!i11093[67]
  i11092.m_parseCtrlCharacters = !!i11093[68]
  i11092.m_isOrthographic = !!i11093[69]
  i11092.m_isCullingEnabled = !!i11093[70]
  i11092.m_horizontalMapping = i11093[71]
  i11092.m_verticalMapping = i11093[72]
  i11092.m_uvLineOffset = i11093[73]
  i11092.m_geometrySortingOrder = i11093[74]
  i11092.m_IsTextObjectScaleStatic = !!i11093[75]
  i11092.m_VertexBufferAutoSizeReduction = !!i11093[76]
  i11092.m_useMaxVisibleDescender = !!i11093[77]
  i11092.m_pageToDisplay = i11093[78]
  i11092.m_margin = new pc.Vec4( i11093[79], i11093[80], i11093[81], i11093[82] )
  i11092.m_isUsingLegacyAnimationComponent = !!i11093[83]
  i11092.m_isVolumetricText = !!i11093[84]
  request.r(i11093[85], i11093[86], 0, i11092, 'm_Material')
  i11092.m_Maskable = !!i11093[87]
  i11092.m_Color = new pc.Color(i11093[88], i11093[89], i11093[90], i11093[91])
  i11092.m_RaycastTarget = !!i11093[92]
  i11092.m_RaycastPadding = new pc.Vec4( i11093[93], i11093[94], i11093[95], i11093[96] )
  return i11092
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i11098 = root || request.c( 'TMPro.VertexGradient' )
  var i11099 = data
  i11098.topLeft = new pc.Color(i11099[0], i11099[1], i11099[2], i11099[3])
  i11098.topRight = new pc.Color(i11099[4], i11099[5], i11099[6], i11099[7])
  i11098.bottomLeft = new pc.Color(i11099[8], i11099[9], i11099[10], i11099[11])
  i11098.bottomRight = new pc.Color(i11099[12], i11099[13], i11099[14], i11099[15])
  return i11098
}

Deserializers["SubtitleAuto"] = function (request, data, root) {
  var i11100 = root || request.c( 'SubtitleAuto' )
  var i11101 = data
  i11100.charsPerSecond = i11101[0]
  i11100.loop = !!i11101[1]
  var i11103 = i11101[2]
  var i11102 = []
  for(var i = 0; i < i11103.length; i += 1) {
    i11102.push( request.d('SubtitleAuto+Line', i11103[i + 0]) );
  }
  i11100.lines = i11102
  request.r(i11101[3], i11101[4], 0, i11100, 'scroll')
  request.r(i11101[5], i11101[6], 0, i11100, 'externalScrollbar')
  i11100.scrollMotion = i11101[7]
  i11100.scrollSnapTime = i11101[8]
  i11100.scrollSpeed = i11101[9]
  i11100.linesPerStep = i11101[10]
  i11100.topSafeMargin = i11101[11]
  i11100.startAutoScrollAtLine = i11101[12]
  i11100.manualScroll = !!i11101[13]
  i11100.manualScrollValue = i11101[14]
  return i11100
}

Deserializers["SubtitleAuto+Line"] = function (request, data, root) {
  var i11106 = root || request.c( 'SubtitleAuto+Line' )
  var i11107 = data
  i11106.text = i11107[0]
  i11106.holdSeconds = i11107[1]
  return i11106
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i11108 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i11109 = data
  request.r(i11109[0], i11109[1], 0, i11108, 'm_HandleRect')
  i11108.m_Direction = i11109[2]
  i11108.m_Value = i11109[3]
  i11108.m_Size = i11109[4]
  i11108.m_NumberOfSteps = i11109[5]
  i11108.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i11109[6], i11108.m_OnValueChanged)
  i11108.m_Navigation = request.d('UnityEngine.UI.Navigation', i11109[7], i11108.m_Navigation)
  i11108.m_Transition = i11109[8]
  i11108.m_Colors = request.d('UnityEngine.UI.ColorBlock', i11109[9], i11108.m_Colors)
  i11108.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i11109[10], i11108.m_SpriteState)
  i11108.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i11109[11], i11108.m_AnimationTriggers)
  i11108.m_Interactable = !!i11109[12]
  request.r(i11109[13], i11109[14], 0, i11108, 'm_TargetGraphic')
  return i11108
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i11110 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i11111 = data
  i11110.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i11111[0], i11110.m_PersistentCalls)
  return i11110
}

Deserializers["DragToResizeLeft"] = function (request, data, root) {
  var i11112 = root || request.c( 'DragToResizeLeft' )
  var i11113 = data
  request.r(i11113[0], i11113[1], 0, i11112, 'target')
  i11112.minWidth = i11113[2]
  return i11112
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i11114 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i11115 = data
  request.r(i11115[0], i11115[1], 0, i11114, 'm_FirstSelected')
  i11114.m_sendNavigationEvents = !!i11115[2]
  i11114.m_DragThreshold = i11115[3]
  return i11114
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i11116 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i11117 = data
  i11116.m_HorizontalAxis = i11117[0]
  i11116.m_VerticalAxis = i11117[1]
  i11116.m_SubmitButton = i11117[2]
  i11116.m_CancelButton = i11117[3]
  i11116.m_InputActionsPerSecond = i11117[4]
  i11116.m_RepeatDelay = i11117[5]
  i11116.m_ForceModuleActive = !!i11117[6]
  i11116.m_SendPointerHoverToParent = !!i11117[7]
  return i11116
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i11118 = root || request.c( 'ButtonPulse' )
  var i11119 = data
  i11118.scaleAmount = i11119[0]
  i11118.pulseDuration = i11119[1]
  return i11118
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i11120 = root || request.c( 'StartClickHandler' )
  var i11121 = data
  return i11120
}

Deserializers["GameManager"] = function (request, data, root) {
  var i11122 = root || request.c( 'GameManager' )
  var i11123 = data
  request.r(i11123[0], i11123[1], 0, i11122, 'endPanel')
  i11122.end = !!i11123[2]
  request.r(i11123[3], i11123[4], 0, i11122, 'hand')
  request.r(i11123[5], i11123[6], 0, i11122, 'hand2')
  i11122.enableSound = !!i11123[7]
  request.r(i11123[8], i11123[9], 0, i11122, 'startClickHandler')
  i11122.currentScore = i11123[10]
  request.r(i11123[11], i11123[12], 0, i11122, 'BodyToSummarize')
  request.r(i11123[13], i11123[14], 0, i11122, 'SummarizedText')
  request.r(i11123[15], i11123[16], 0, i11122, 'transcriptBtnBlue')
  request.r(i11123[17], i11123[18], 0, i11122, 'transcriptBtn')
  request.r(i11123[19], i11123[20], 0, i11122, 'summaryBtn')
  request.r(i11123[21], i11123[22], 0, i11122, 'summaryBtnBlue')
  request.r(i11123[23], i11123[24], 0, i11122, 'mainPanel')
  request.r(i11123[25], i11123[26], 0, i11122, 'handle1')
  request.r(i11123[27], i11123[28], 0, i11122, 'animator')
  request.r(i11123[29], i11123[30], 0, i11122, 'maskA')
  request.r(i11123[31], i11123[32], 0, i11122, 'filter')
  request.r(i11123[33], i11123[34], 0, i11122, 'arrow')
  request.r(i11123[35], i11123[36], 0, i11122, 'toTap')
  request.r(i11123[37], i11123[38], 0, i11122, 'openingPanel')
  request.r(i11123[39], i11123[40], 0, i11122, 'subTitle')
  request.r(i11123[41], i11123[42], 0, i11122, 'scrollBarVertical')
  return i11122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i11124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i11125 = data
  i11124.ambientIntensity = i11125[0]
  i11124.reflectionIntensity = i11125[1]
  i11124.ambientMode = i11125[2]
  i11124.ambientLight = new pc.Color(i11125[3], i11125[4], i11125[5], i11125[6])
  i11124.ambientSkyColor = new pc.Color(i11125[7], i11125[8], i11125[9], i11125[10])
  i11124.ambientGroundColor = new pc.Color(i11125[11], i11125[12], i11125[13], i11125[14])
  i11124.ambientEquatorColor = new pc.Color(i11125[15], i11125[16], i11125[17], i11125[18])
  i11124.fogColor = new pc.Color(i11125[19], i11125[20], i11125[21], i11125[22])
  i11124.fogEndDistance = i11125[23]
  i11124.fogStartDistance = i11125[24]
  i11124.fogDensity = i11125[25]
  i11124.fog = !!i11125[26]
  request.r(i11125[27], i11125[28], 0, i11124, 'skybox')
  i11124.fogMode = i11125[29]
  var i11127 = i11125[30]
  var i11126 = []
  for(var i = 0; i < i11127.length; i += 1) {
    i11126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i11127[i + 0]) );
  }
  i11124.lightmaps = i11126
  i11124.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i11125[31], i11124.lightProbes)
  i11124.lightmapsMode = i11125[32]
  i11124.mixedBakeMode = i11125[33]
  i11124.environmentLightingMode = i11125[34]
  i11124.ambientProbe = new pc.SphericalHarmonicsL2(i11125[35])
  i11124.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i11125[36])
  i11124.useReferenceAmbientProbe = !!i11125[37]
  request.r(i11125[38], i11125[39], 0, i11124, 'customReflection')
  request.r(i11125[40], i11125[41], 0, i11124, 'defaultReflection')
  i11124.defaultReflectionMode = i11125[42]
  i11124.defaultReflectionResolution = i11125[43]
  i11124.sunLightObjectId = i11125[44]
  i11124.pixelLightCount = i11125[45]
  i11124.defaultReflectionHDR = !!i11125[46]
  i11124.hasLightDataAsset = !!i11125[47]
  i11124.hasManualGenerate = !!i11125[48]
  return i11124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i11130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i11131 = data
  request.r(i11131[0], i11131[1], 0, i11130, 'lightmapColor')
  request.r(i11131[2], i11131[3], 0, i11130, 'lightmapDirection')
  return i11130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i11132 = root || new UnityEngine.LightProbes()
  var i11133 = data
  return i11132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i11140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i11141 = data
  var i11143 = i11141[0]
  var i11142 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i11143.length; i += 1) {
    i11142.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i11143[i + 0]));
  }
  i11140.ShaderCompilationErrors = i11142
  i11140.name = i11141[1]
  i11140.guid = i11141[2]
  var i11145 = i11141[3]
  var i11144 = []
  for(var i = 0; i < i11145.length; i += 1) {
    i11144.push( i11145[i + 0] );
  }
  i11140.shaderDefinedKeywords = i11144
  var i11147 = i11141[4]
  var i11146 = []
  for(var i = 0; i < i11147.length; i += 1) {
    i11146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i11147[i + 0]) );
  }
  i11140.passes = i11146
  var i11149 = i11141[5]
  var i11148 = []
  for(var i = 0; i < i11149.length; i += 1) {
    i11148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i11149[i + 0]) );
  }
  i11140.usePasses = i11148
  var i11151 = i11141[6]
  var i11150 = []
  for(var i = 0; i < i11151.length; i += 1) {
    i11150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i11151[i + 0]) );
  }
  i11140.defaultParameterValues = i11150
  request.r(i11141[7], i11141[8], 0, i11140, 'unityFallbackShader')
  i11140.readDepth = !!i11141[9]
  i11140.isCreatedByShaderGraph = !!i11141[10]
  i11140.compiled = !!i11141[11]
  return i11140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i11154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i11155 = data
  i11154.shaderName = i11155[0]
  i11154.errorMessage = i11155[1]
  return i11154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i11160 = root || new pc.UnityShaderPass()
  var i11161 = data
  i11160.id = i11161[0]
  i11160.subShaderIndex = i11161[1]
  i11160.name = i11161[2]
  i11160.passType = i11161[3]
  i11160.grabPassTextureName = i11161[4]
  i11160.usePass = !!i11161[5]
  i11160.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11161[6], i11160.zTest)
  i11160.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11161[7], i11160.zWrite)
  i11160.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11161[8], i11160.culling)
  i11160.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i11161[9], i11160.blending)
  i11160.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i11161[10], i11160.alphaBlending)
  i11160.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11161[11], i11160.colorWriteMask)
  i11160.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11161[12], i11160.offsetUnits)
  i11160.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11161[13], i11160.offsetFactor)
  i11160.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11161[14], i11160.stencilRef)
  i11160.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11161[15], i11160.stencilReadMask)
  i11160.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11161[16], i11160.stencilWriteMask)
  i11160.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i11161[17], i11160.stencilOp)
  i11160.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i11161[18], i11160.stencilOpFront)
  i11160.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i11161[19], i11160.stencilOpBack)
  var i11163 = i11161[20]
  var i11162 = []
  for(var i = 0; i < i11163.length; i += 1) {
    i11162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i11163[i + 0]) );
  }
  i11160.tags = i11162
  var i11165 = i11161[21]
  var i11164 = []
  for(var i = 0; i < i11165.length; i += 1) {
    i11164.push( i11165[i + 0] );
  }
  i11160.passDefinedKeywords = i11164
  var i11167 = i11161[22]
  var i11166 = []
  for(var i = 0; i < i11167.length; i += 1) {
    i11166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i11167[i + 0]) );
  }
  i11160.passDefinedKeywordGroups = i11166
  var i11169 = i11161[23]
  var i11168 = []
  for(var i = 0; i < i11169.length; i += 1) {
    i11168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i11169[i + 0]) );
  }
  i11160.variants = i11168
  var i11171 = i11161[24]
  var i11170 = []
  for(var i = 0; i < i11171.length; i += 1) {
    i11170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i11171[i + 0]) );
  }
  i11160.excludedVariants = i11170
  i11160.hasDepthReader = !!i11161[25]
  return i11160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i11172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i11173 = data
  i11172.val = i11173[0]
  i11172.name = i11173[1]
  return i11172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i11174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i11175 = data
  i11174.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11175[0], i11174.src)
  i11174.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11175[1], i11174.dst)
  i11174.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11175[2], i11174.op)
  return i11174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i11176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i11177 = data
  i11176.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11177[0], i11176.pass)
  i11176.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11177[1], i11176.fail)
  i11176.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11177[2], i11176.zFail)
  i11176.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11177[3], i11176.comp)
  return i11176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i11180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i11181 = data
  i11180.name = i11181[0]
  i11180.value = i11181[1]
  return i11180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i11184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i11185 = data
  var i11187 = i11185[0]
  var i11186 = []
  for(var i = 0; i < i11187.length; i += 1) {
    i11186.push( i11187[i + 0] );
  }
  i11184.keywords = i11186
  i11184.hasDiscard = !!i11185[1]
  return i11184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i11190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i11191 = data
  i11190.passId = i11191[0]
  i11190.subShaderIndex = i11191[1]
  var i11193 = i11191[2]
  var i11192 = []
  for(var i = 0; i < i11193.length; i += 1) {
    i11192.push( i11193[i + 0] );
  }
  i11190.keywords = i11192
  i11190.vertexProgram = i11191[3]
  i11190.fragmentProgram = i11191[4]
  i11190.exportedForWebGl2 = !!i11191[5]
  i11190.readDepth = !!i11191[6]
  return i11190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i11196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i11197 = data
  request.r(i11197[0], i11197[1], 0, i11196, 'shader')
  i11196.pass = i11197[2]
  return i11196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i11200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i11201 = data
  i11200.name = i11201[0]
  i11200.type = i11201[1]
  i11200.value = new pc.Vec4( i11201[2], i11201[3], i11201[4], i11201[5] )
  i11200.textureValue = i11201[6]
  i11200.shaderPropertyFlag = i11201[7]
  return i11200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i11202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i11203 = data
  i11202.name = i11203[0]
  request.r(i11203[1], i11203[2], 0, i11202, 'texture')
  i11202.aabb = i11203[3]
  i11202.vertices = i11203[4]
  i11202.triangles = i11203[5]
  i11202.textureRect = UnityEngine.Rect.MinMaxRect(i11203[6], i11203[7], i11203[8], i11203[9])
  i11202.packedRect = UnityEngine.Rect.MinMaxRect(i11203[10], i11203[11], i11203[12], i11203[13])
  i11202.border = new pc.Vec4( i11203[14], i11203[15], i11203[16], i11203[17] )
  i11202.transparency = i11203[18]
  i11202.bounds = i11203[19]
  i11202.pixelsPerUnit = i11203[20]
  i11202.textureWidth = i11203[21]
  i11202.textureHeight = i11203[22]
  i11202.nativeSize = new pc.Vec2( i11203[23], i11203[24] )
  i11202.pivot = new pc.Vec2( i11203[25], i11203[26] )
  i11202.textureRectOffset = new pc.Vec2( i11203[27], i11203[28] )
  return i11202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i11204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i11205 = data
  i11204.name = i11205[0]
  return i11204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i11206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i11207 = data
  i11206.name = i11207[0]
  i11206.wrapMode = i11207[1]
  i11206.isLooping = !!i11207[2]
  i11206.length = i11207[3]
  var i11209 = i11207[4]
  var i11208 = []
  for(var i = 0; i < i11209.length; i += 1) {
    i11208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i11209[i + 0]) );
  }
  i11206.curves = i11208
  var i11211 = i11207[5]
  var i11210 = []
  for(var i = 0; i < i11211.length; i += 1) {
    i11210.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i11211[i + 0]) );
  }
  i11206.events = i11210
  i11206.halfPrecision = !!i11207[6]
  i11206._frameRate = i11207[7]
  i11206.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i11207[8], i11206.localBounds)
  i11206.hasMuscleCurves = !!i11207[9]
  var i11213 = i11207[10]
  var i11212 = []
  for(var i = 0; i < i11213.length; i += 1) {
    i11212.push( i11213[i + 0] );
  }
  i11206.clipMuscleConstant = i11212
  i11206.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i11207[11], i11206.clipBindingConstant)
  return i11206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i11216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i11217 = data
  i11216.path = i11217[0]
  i11216.hash = i11217[1]
  i11216.componentType = i11217[2]
  i11216.property = i11217[3]
  i11216.keys = i11217[4]
  var i11219 = i11217[5]
  var i11218 = []
  for(var i = 0; i < i11219.length; i += 1) {
    i11218.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i11219[i + 0]) );
  }
  i11216.objectReferenceKeys = i11218
  return i11216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i11222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i11223 = data
  i11222.time = i11223[0]
  request.r(i11223[1], i11223[2], 0, i11222, 'value')
  return i11222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i11226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i11227 = data
  i11226.functionName = i11227[0]
  i11226.floatParameter = i11227[1]
  i11226.intParameter = i11227[2]
  i11226.stringParameter = i11227[3]
  request.r(i11227[4], i11227[5], 0, i11226, 'objectReferenceParameter')
  i11226.time = i11227[6]
  return i11226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i11228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i11229 = data
  i11228.center = new pc.Vec3( i11229[0], i11229[1], i11229[2] )
  i11228.extends = new pc.Vec3( i11229[3], i11229[4], i11229[5] )
  return i11228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i11232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i11233 = data
  var i11235 = i11233[0]
  var i11234 = []
  for(var i = 0; i < i11235.length; i += 1) {
    i11234.push( i11235[i + 0] );
  }
  i11232.genericBindings = i11234
  var i11237 = i11233[1]
  var i11236 = []
  for(var i = 0; i < i11237.length; i += 1) {
    i11236.push( i11237[i + 0] );
  }
  i11232.pptrCurveMapping = i11236
  return i11232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i11238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i11239 = data
  i11238.name = i11239[0]
  i11238.ascent = i11239[1]
  i11238.originalLineHeight = i11239[2]
  i11238.fontSize = i11239[3]
  var i11241 = i11239[4]
  var i11240 = []
  for(var i = 0; i < i11241.length; i += 1) {
    i11240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i11241[i + 0]) );
  }
  i11238.characterInfo = i11240
  request.r(i11239[5], i11239[6], 0, i11238, 'texture')
  i11238.originalFontSize = i11239[7]
  return i11238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i11244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i11245 = data
  i11244.index = i11245[0]
  i11244.advance = i11245[1]
  i11244.bearing = i11245[2]
  i11244.glyphWidth = i11245[3]
  i11244.glyphHeight = i11245[4]
  i11244.minX = i11245[5]
  i11244.maxX = i11245[6]
  i11244.minY = i11245[7]
  i11244.maxY = i11245[8]
  i11244.uvBottomLeftX = i11245[9]
  i11244.uvBottomLeftY = i11245[10]
  i11244.uvBottomRightX = i11245[11]
  i11244.uvBottomRightY = i11245[12]
  i11244.uvTopLeftX = i11245[13]
  i11244.uvTopLeftY = i11245[14]
  i11244.uvTopRightX = i11245[15]
  i11244.uvTopRightY = i11245[16]
  return i11244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i11246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i11247 = data
  i11246.name = i11247[0]
  var i11249 = i11247[1]
  var i11248 = []
  for(var i = 0; i < i11249.length; i += 1) {
    i11248.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i11249[i + 0]) );
  }
  i11246.layers = i11248
  var i11251 = i11247[2]
  var i11250 = []
  for(var i = 0; i < i11251.length; i += 1) {
    i11250.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i11251[i + 0]) );
  }
  i11246.parameters = i11250
  i11246.animationClips = i11247[3]
  i11246.avatarUnsupported = i11247[4]
  return i11246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i11254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i11255 = data
  i11254.name = i11255[0]
  i11254.defaultWeight = i11255[1]
  i11254.blendingMode = i11255[2]
  i11254.avatarMask = i11255[3]
  i11254.syncedLayerIndex = i11255[4]
  i11254.syncedLayerAffectsTiming = !!i11255[5]
  i11254.syncedLayers = i11255[6]
  i11254.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i11255[7], i11254.stateMachine)
  return i11254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i11256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i11257 = data
  i11256.id = i11257[0]
  i11256.name = i11257[1]
  i11256.path = i11257[2]
  var i11259 = i11257[3]
  var i11258 = []
  for(var i = 0; i < i11259.length; i += 1) {
    i11258.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i11259[i + 0]) );
  }
  i11256.states = i11258
  var i11261 = i11257[4]
  var i11260 = []
  for(var i = 0; i < i11261.length; i += 1) {
    i11260.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i11261[i + 0]) );
  }
  i11256.machines = i11260
  var i11263 = i11257[5]
  var i11262 = []
  for(var i = 0; i < i11263.length; i += 1) {
    i11262.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i11263[i + 0]) );
  }
  i11256.entryStateTransitions = i11262
  var i11265 = i11257[6]
  var i11264 = []
  for(var i = 0; i < i11265.length; i += 1) {
    i11264.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i11265[i + 0]) );
  }
  i11256.exitStateTransitions = i11264
  var i11267 = i11257[7]
  var i11266 = []
  for(var i = 0; i < i11267.length; i += 1) {
    i11266.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i11267[i + 0]) );
  }
  i11256.anyStateTransitions = i11266
  i11256.defaultStateId = i11257[8]
  return i11256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i11270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i11271 = data
  i11270.id = i11271[0]
  i11270.name = i11271[1]
  i11270.cycleOffset = i11271[2]
  i11270.cycleOffsetParameter = i11271[3]
  i11270.cycleOffsetParameterActive = !!i11271[4]
  i11270.mirror = !!i11271[5]
  i11270.mirrorParameter = i11271[6]
  i11270.mirrorParameterActive = !!i11271[7]
  i11270.motionId = i11271[8]
  i11270.nameHash = i11271[9]
  i11270.fullPathHash = i11271[10]
  i11270.speed = i11271[11]
  i11270.speedParameter = i11271[12]
  i11270.speedParameterActive = !!i11271[13]
  i11270.tag = i11271[14]
  i11270.tagHash = i11271[15]
  i11270.writeDefaultValues = !!i11271[16]
  var i11273 = i11271[17]
  var i11272 = []
  for(var i = 0; i < i11273.length; i += 2) {
  request.r(i11273[i + 0], i11273[i + 1], 2, i11272, '')
  }
  i11270.behaviours = i11272
  var i11275 = i11271[18]
  var i11274 = []
  for(var i = 0; i < i11275.length; i += 1) {
    i11274.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i11275[i + 0]) );
  }
  i11270.transitions = i11274
  return i11270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i11280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i11281 = data
  i11280.fullPath = i11281[0]
  i11280.canTransitionToSelf = !!i11281[1]
  i11280.duration = i11281[2]
  i11280.exitTime = i11281[3]
  i11280.hasExitTime = !!i11281[4]
  i11280.hasFixedDuration = !!i11281[5]
  i11280.interruptionSource = i11281[6]
  i11280.offset = i11281[7]
  i11280.orderedInterruption = !!i11281[8]
  i11280.destinationStateId = i11281[9]
  i11280.isExit = !!i11281[10]
  i11280.mute = !!i11281[11]
  i11280.solo = !!i11281[12]
  var i11283 = i11281[13]
  var i11282 = []
  for(var i = 0; i < i11283.length; i += 1) {
    i11282.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i11283[i + 0]) );
  }
  i11280.conditions = i11282
  return i11280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i11288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i11289 = data
  i11288.destinationStateId = i11289[0]
  i11288.isExit = !!i11289[1]
  i11288.mute = !!i11289[2]
  i11288.solo = !!i11289[3]
  var i11291 = i11289[4]
  var i11290 = []
  for(var i = 0; i < i11291.length; i += 1) {
    i11290.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i11291[i + 0]) );
  }
  i11288.conditions = i11290
  return i11288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i11294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i11295 = data
  i11294.defaultBool = !!i11295[0]
  i11294.defaultFloat = i11295[1]
  i11294.defaultInt = i11295[2]
  i11294.name = i11295[3]
  i11294.nameHash = i11295[4]
  i11294.type = i11295[5]
  return i11294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i11298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i11299 = data
  i11298.mode = i11299[0]
  i11298.parameter = i11299[1]
  i11298.threshold = i11299[2]
  return i11298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i11300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i11301 = data
  i11300.name = i11301[0]
  i11300.bytes64 = i11301[1]
  i11300.data = i11301[2]
  return i11300
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i11302 = root || request.c( 'AudioLibrary' )
  var i11303 = data
  var i11305 = i11303[0]
  var i11304 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i11305.length; i += 1) {
    i11304.add(request.d('AudioLibrary+ClipEntry', i11305[i + 0]));
  }
  i11302.clips = i11304
  return i11302
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i11308 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i11309 = data
  i11308.key = i11309[0]
  i11308.channel = i11309[1]
  request.r(i11309[2], i11309[3], 0, i11308, 'clip')
  i11308.volume = i11309[4]
  i11308.loop = !!i11309[5]
  return i11308
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i11310 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i11311 = data
  i11310.hashCode = i11311[0]
  request.r(i11311[1], i11311[2], 0, i11310, 'material')
  i11310.materialHashCode = i11311[3]
  request.r(i11311[4], i11311[5], 0, i11310, 'atlas')
  i11310.normalStyle = i11311[6]
  i11310.normalSpacingOffset = i11311[7]
  i11310.boldStyle = i11311[8]
  i11310.boldSpacing = i11311[9]
  i11310.italicStyle = i11311[10]
  i11310.tabSize = i11311[11]
  i11310.m_Version = i11311[12]
  i11310.m_SourceFontFileGUID = i11311[13]
  request.r(i11311[14], i11311[15], 0, i11310, 'm_SourceFontFile_EditorRef')
  request.r(i11311[16], i11311[17], 0, i11310, 'm_SourceFontFile')
  i11310.m_AtlasPopulationMode = i11311[18]
  i11310.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i11311[19], i11310.m_FaceInfo)
  var i11313 = i11311[20]
  var i11312 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i11313.length; i += 1) {
    i11312.add(request.d('UnityEngine.TextCore.Glyph', i11313[i + 0]));
  }
  i11310.m_GlyphTable = i11312
  var i11315 = i11311[21]
  var i11314 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i11315.length; i += 1) {
    i11314.add(request.d('TMPro.TMP_Character', i11315[i + 0]));
  }
  i11310.m_CharacterTable = i11314
  var i11317 = i11311[22]
  var i11316 = []
  for(var i = 0; i < i11317.length; i += 2) {
  request.r(i11317[i + 0], i11317[i + 1], 2, i11316, '')
  }
  i11310.m_AtlasTextures = i11316
  i11310.m_AtlasTextureIndex = i11311[23]
  i11310.m_IsMultiAtlasTexturesEnabled = !!i11311[24]
  i11310.m_ClearDynamicDataOnBuild = !!i11311[25]
  var i11319 = i11311[26]
  var i11318 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i11319.length; i += 1) {
    i11318.add(request.d('UnityEngine.TextCore.GlyphRect', i11319[i + 0]));
  }
  i11310.m_UsedGlyphRects = i11318
  var i11321 = i11311[27]
  var i11320 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i11321.length; i += 1) {
    i11320.add(request.d('UnityEngine.TextCore.GlyphRect', i11321[i + 0]));
  }
  i11310.m_FreeGlyphRects = i11320
  i11310.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i11311[28], i11310.m_fontInfo)
  i11310.m_AtlasWidth = i11311[29]
  i11310.m_AtlasHeight = i11311[30]
  i11310.m_AtlasPadding = i11311[31]
  i11310.m_AtlasRenderMode = i11311[32]
  var i11323 = i11311[33]
  var i11322 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i11323.length; i += 1) {
    i11322.add(request.d('TMPro.TMP_Glyph', i11323[i + 0]));
  }
  i11310.m_glyphInfoList = i11322
  i11310.m_KerningTable = request.d('TMPro.KerningTable', i11311[34], i11310.m_KerningTable)
  i11310.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i11311[35], i11310.m_FontFeatureTable)
  var i11325 = i11311[36]
  var i11324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i11325.length; i += 2) {
  request.r(i11325[i + 0], i11325[i + 1], 1, i11324, '')
  }
  i11310.fallbackFontAssets = i11324
  var i11327 = i11311[37]
  var i11326 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i11327.length; i += 2) {
  request.r(i11327[i + 0], i11327[i + 1], 1, i11326, '')
  }
  i11310.m_FallbackFontAssetTable = i11326
  i11310.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i11311[38], i11310.m_CreationSettings)
  var i11329 = i11311[39]
  var i11328 = []
  for(var i = 0; i < i11329.length; i += 1) {
    i11328.push( request.d('TMPro.TMP_FontWeightPair', i11329[i + 0]) );
  }
  i11310.m_FontWeightTable = i11328
  var i11331 = i11311[40]
  var i11330 = []
  for(var i = 0; i < i11331.length; i += 1) {
    i11330.push( request.d('TMPro.TMP_FontWeightPair', i11331[i + 0]) );
  }
  i11310.fontWeights = i11330
  return i11310
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i11332 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i11333 = data
  i11332.m_FaceIndex = i11333[0]
  i11332.m_FamilyName = i11333[1]
  i11332.m_StyleName = i11333[2]
  i11332.m_PointSize = i11333[3]
  i11332.m_Scale = i11333[4]
  i11332.m_UnitsPerEM = i11333[5]
  i11332.m_LineHeight = i11333[6]
  i11332.m_AscentLine = i11333[7]
  i11332.m_CapLine = i11333[8]
  i11332.m_MeanLine = i11333[9]
  i11332.m_Baseline = i11333[10]
  i11332.m_DescentLine = i11333[11]
  i11332.m_SuperscriptOffset = i11333[12]
  i11332.m_SuperscriptSize = i11333[13]
  i11332.m_SubscriptOffset = i11333[14]
  i11332.m_SubscriptSize = i11333[15]
  i11332.m_UnderlineOffset = i11333[16]
  i11332.m_UnderlineThickness = i11333[17]
  i11332.m_StrikethroughOffset = i11333[18]
  i11332.m_StrikethroughThickness = i11333[19]
  i11332.m_TabWidth = i11333[20]
  return i11332
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i11336 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i11337 = data
  i11336.m_Index = i11337[0]
  i11336.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i11337[1], i11336.m_Metrics)
  i11336.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i11337[2], i11336.m_GlyphRect)
  i11336.m_Scale = i11337[3]
  i11336.m_AtlasIndex = i11337[4]
  i11336.m_ClassDefinitionType = i11337[5]
  return i11336
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i11338 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i11339 = data
  i11338.m_Width = i11339[0]
  i11338.m_Height = i11339[1]
  i11338.m_HorizontalBearingX = i11339[2]
  i11338.m_HorizontalBearingY = i11339[3]
  i11338.m_HorizontalAdvance = i11339[4]
  return i11338
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i11340 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i11341 = data
  i11340.m_X = i11341[0]
  i11340.m_Y = i11341[1]
  i11340.m_Width = i11341[2]
  i11340.m_Height = i11341[3]
  return i11340
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i11344 = root || request.c( 'TMPro.TMP_Character' )
  var i11345 = data
  i11344.m_ElementType = i11345[0]
  i11344.m_Unicode = i11345[1]
  i11344.m_GlyphIndex = i11345[2]
  i11344.m_Scale = i11345[3]
  return i11344
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i11350 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i11351 = data
  i11350.Name = i11351[0]
  i11350.PointSize = i11351[1]
  i11350.Scale = i11351[2]
  i11350.CharacterCount = i11351[3]
  i11350.LineHeight = i11351[4]
  i11350.Baseline = i11351[5]
  i11350.Ascender = i11351[6]
  i11350.CapHeight = i11351[7]
  i11350.Descender = i11351[8]
  i11350.CenterLine = i11351[9]
  i11350.SuperscriptOffset = i11351[10]
  i11350.SubscriptOffset = i11351[11]
  i11350.SubSize = i11351[12]
  i11350.Underline = i11351[13]
  i11350.UnderlineThickness = i11351[14]
  i11350.strikethrough = i11351[15]
  i11350.strikethroughThickness = i11351[16]
  i11350.TabWidth = i11351[17]
  i11350.Padding = i11351[18]
  i11350.AtlasWidth = i11351[19]
  i11350.AtlasHeight = i11351[20]
  return i11350
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i11354 = root || request.c( 'TMPro.TMP_Glyph' )
  var i11355 = data
  i11354.id = i11355[0]
  i11354.x = i11355[1]
  i11354.y = i11355[2]
  i11354.width = i11355[3]
  i11354.height = i11355[4]
  i11354.xOffset = i11355[5]
  i11354.yOffset = i11355[6]
  i11354.xAdvance = i11355[7]
  i11354.scale = i11355[8]
  return i11354
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i11356 = root || request.c( 'TMPro.KerningTable' )
  var i11357 = data
  var i11359 = i11357[0]
  var i11358 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i11359.length; i += 1) {
    i11358.add(request.d('TMPro.KerningPair', i11359[i + 0]));
  }
  i11356.kerningPairs = i11358
  return i11356
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i11362 = root || request.c( 'TMPro.KerningPair' )
  var i11363 = data
  i11362.xOffset = i11363[0]
  i11362.m_FirstGlyph = i11363[1]
  i11362.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i11363[2], i11362.m_FirstGlyphAdjustments)
  i11362.m_SecondGlyph = i11363[3]
  i11362.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i11363[4], i11362.m_SecondGlyphAdjustments)
  i11362.m_IgnoreSpacingAdjustments = !!i11363[5]
  return i11362
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i11364 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i11365 = data
  var i11367 = i11365[0]
  var i11366 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i11367.length; i += 1) {
    i11366.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i11367[i + 0]));
  }
  i11364.m_GlyphPairAdjustmentRecords = i11366
  return i11364
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i11370 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i11371 = data
  i11370.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i11371[0], i11370.m_FirstAdjustmentRecord)
  i11370.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i11371[1], i11370.m_SecondAdjustmentRecord)
  i11370.m_FeatureLookupFlags = i11371[2]
  return i11370
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i11374 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i11375 = data
  i11374.sourceFontFileName = i11375[0]
  i11374.sourceFontFileGUID = i11375[1]
  i11374.pointSizeSamplingMode = i11375[2]
  i11374.pointSize = i11375[3]
  i11374.padding = i11375[4]
  i11374.packingMode = i11375[5]
  i11374.atlasWidth = i11375[6]
  i11374.atlasHeight = i11375[7]
  i11374.characterSetSelectionMode = i11375[8]
  i11374.characterSequence = i11375[9]
  i11374.referencedFontAssetGUID = i11375[10]
  i11374.referencedTextAssetGUID = i11375[11]
  i11374.fontStyle = i11375[12]
  i11374.fontStyleModifier = i11375[13]
  i11374.renderMode = i11375[14]
  i11374.includeFontFeatures = !!i11375[15]
  return i11374
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i11378 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i11379 = data
  request.r(i11379[0], i11379[1], 0, i11378, 'regularTypeface')
  request.r(i11379[2], i11379[3], 0, i11378, 'italicTypeface')
  return i11378
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i11380 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i11381 = data
  i11380.useSafeMode = !!i11381[0]
  i11380.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i11381[1], i11380.safeModeOptions)
  i11380.timeScale = i11381[2]
  i11380.unscaledTimeScale = i11381[3]
  i11380.useSmoothDeltaTime = !!i11381[4]
  i11380.maxSmoothUnscaledTime = i11381[5]
  i11380.rewindCallbackMode = i11381[6]
  i11380.showUnityEditorReport = !!i11381[7]
  i11380.logBehaviour = i11381[8]
  i11380.drawGizmos = !!i11381[9]
  i11380.defaultRecyclable = !!i11381[10]
  i11380.defaultAutoPlay = i11381[11]
  i11380.defaultUpdateType = i11381[12]
  i11380.defaultTimeScaleIndependent = !!i11381[13]
  i11380.defaultEaseType = i11381[14]
  i11380.defaultEaseOvershootOrAmplitude = i11381[15]
  i11380.defaultEasePeriod = i11381[16]
  i11380.defaultAutoKill = !!i11381[17]
  i11380.defaultLoopType = i11381[18]
  i11380.debugMode = !!i11381[19]
  i11380.debugStoreTargetId = !!i11381[20]
  i11380.showPreviewPanel = !!i11381[21]
  i11380.storeSettingsLocation = i11381[22]
  i11380.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i11381[23], i11380.modules)
  i11380.createASMDEF = !!i11381[24]
  i11380.showPlayingTweens = !!i11381[25]
  i11380.showPausedTweens = !!i11381[26]
  return i11380
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i11382 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i11383 = data
  i11382.logBehaviour = i11383[0]
  i11382.nestedTweenFailureBehaviour = i11383[1]
  return i11382
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i11384 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i11385 = data
  i11384.showPanel = !!i11385[0]
  i11384.audioEnabled = !!i11385[1]
  i11384.physicsEnabled = !!i11385[2]
  i11384.physics2DEnabled = !!i11385[3]
  i11384.spriteEnabled = !!i11385[4]
  i11384.uiEnabled = !!i11385[5]
  i11384.textMeshProEnabled = !!i11385[6]
  i11384.tk2DEnabled = !!i11385[7]
  i11384.deAudioEnabled = !!i11385[8]
  i11384.deUnityExtendedEnabled = !!i11385[9]
  i11384.epoOutlineEnabled = !!i11385[10]
  return i11384
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i11386 = root || request.c( 'TMPro.TMP_Settings' )
  var i11387 = data
  i11386.m_enableWordWrapping = !!i11387[0]
  i11386.m_enableKerning = !!i11387[1]
  i11386.m_enableExtraPadding = !!i11387[2]
  i11386.m_enableTintAllSprites = !!i11387[3]
  i11386.m_enableParseEscapeCharacters = !!i11387[4]
  i11386.m_EnableRaycastTarget = !!i11387[5]
  i11386.m_GetFontFeaturesAtRuntime = !!i11387[6]
  i11386.m_missingGlyphCharacter = i11387[7]
  i11386.m_warningsDisabled = !!i11387[8]
  request.r(i11387[9], i11387[10], 0, i11386, 'm_defaultFontAsset')
  i11386.m_defaultFontAssetPath = i11387[11]
  i11386.m_defaultFontSize = i11387[12]
  i11386.m_defaultAutoSizeMinRatio = i11387[13]
  i11386.m_defaultAutoSizeMaxRatio = i11387[14]
  i11386.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i11387[15], i11387[16] )
  i11386.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i11387[17], i11387[18] )
  i11386.m_autoSizeTextContainer = !!i11387[19]
  i11386.m_IsTextObjectScaleStatic = !!i11387[20]
  var i11389 = i11387[21]
  var i11388 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i11389.length; i += 2) {
  request.r(i11389[i + 0], i11389[i + 1], 1, i11388, '')
  }
  i11386.m_fallbackFontAssets = i11388
  i11386.m_matchMaterialPreset = !!i11387[22]
  request.r(i11387[23], i11387[24], 0, i11386, 'm_defaultSpriteAsset')
  i11386.m_defaultSpriteAssetPath = i11387[25]
  i11386.m_enableEmojiSupport = !!i11387[26]
  i11386.m_MissingCharacterSpriteUnicode = i11387[27]
  i11386.m_defaultColorGradientPresetsPath = i11387[28]
  request.r(i11387[29], i11387[30], 0, i11386, 'm_defaultStyleSheet')
  i11386.m_StyleSheetsResourcePath = i11387[31]
  request.r(i11387[32], i11387[33], 0, i11386, 'm_leadingCharacters')
  request.r(i11387[34], i11387[35], 0, i11386, 'm_followingCharacters')
  i11386.m_UseModernHangulLineBreakingRules = !!i11387[36]
  return i11386
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i11390 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i11391 = data
  i11390.hashCode = i11391[0]
  request.r(i11391[1], i11391[2], 0, i11390, 'material')
  i11390.materialHashCode = i11391[3]
  request.r(i11391[4], i11391[5], 0, i11390, 'spriteSheet')
  var i11393 = i11391[6]
  var i11392 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i11393.length; i += 1) {
    i11392.add(request.d('TMPro.TMP_Sprite', i11393[i + 0]));
  }
  i11390.spriteInfoList = i11392
  var i11395 = i11391[7]
  var i11394 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i11395.length; i += 2) {
  request.r(i11395[i + 0], i11395[i + 1], 1, i11394, '')
  }
  i11390.fallbackSpriteAssets = i11394
  i11390.m_Version = i11391[8]
  i11390.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i11391[9], i11390.m_FaceInfo)
  var i11397 = i11391[10]
  var i11396 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i11397.length; i += 1) {
    i11396.add(request.d('TMPro.TMP_SpriteCharacter', i11397[i + 0]));
  }
  i11390.m_SpriteCharacterTable = i11396
  var i11399 = i11391[11]
  var i11398 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i11399.length; i += 1) {
    i11398.add(request.d('TMPro.TMP_SpriteGlyph', i11399[i + 0]));
  }
  i11390.m_SpriteGlyphTable = i11398
  return i11390
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i11402 = root || request.c( 'TMPro.TMP_Sprite' )
  var i11403 = data
  i11402.name = i11403[0]
  i11402.hashCode = i11403[1]
  i11402.unicode = i11403[2]
  i11402.pivot = new pc.Vec2( i11403[3], i11403[4] )
  request.r(i11403[5], i11403[6], 0, i11402, 'sprite')
  i11402.id = i11403[7]
  i11402.x = i11403[8]
  i11402.y = i11403[9]
  i11402.width = i11403[10]
  i11402.height = i11403[11]
  i11402.xOffset = i11403[12]
  i11402.yOffset = i11403[13]
  i11402.xAdvance = i11403[14]
  i11402.scale = i11403[15]
  return i11402
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i11408 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i11409 = data
  i11408.m_Name = i11409[0]
  i11408.m_HashCode = i11409[1]
  i11408.m_ElementType = i11409[2]
  i11408.m_Unicode = i11409[3]
  i11408.m_GlyphIndex = i11409[4]
  i11408.m_Scale = i11409[5]
  return i11408
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i11412 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i11413 = data
  request.r(i11413[0], i11413[1], 0, i11412, 'sprite')
  i11412.m_Index = i11413[2]
  i11412.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i11413[3], i11412.m_Metrics)
  i11412.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i11413[4], i11412.m_GlyphRect)
  i11412.m_Scale = i11413[5]
  i11412.m_AtlasIndex = i11413[6]
  i11412.m_ClassDefinitionType = i11413[7]
  return i11412
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i11414 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i11415 = data
  var i11417 = i11415[0]
  var i11416 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i11417.length; i += 1) {
    i11416.add(request.d('TMPro.TMP_Style', i11417[i + 0]));
  }
  i11414.m_StyleList = i11416
  return i11414
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i11420 = root || request.c( 'TMPro.TMP_Style' )
  var i11421 = data
  i11420.m_Name = i11421[0]
  i11420.m_HashCode = i11421[1]
  i11420.m_OpeningDefinition = i11421[2]
  i11420.m_ClosingDefinition = i11421[3]
  i11420.m_OpeningTagArray = i11421[4]
  i11420.m_ClosingTagArray = i11421[5]
  i11420.m_OpeningTagUnicodeArray = i11421[6]
  i11420.m_ClosingTagUnicodeArray = i11421[7]
  return i11420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i11422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i11423 = data
  var i11425 = i11423[0]
  var i11424 = []
  for(var i = 0; i < i11425.length; i += 1) {
    i11424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i11425[i + 0]) );
  }
  i11422.files = i11424
  i11422.componentToPrefabIds = i11423[1]
  return i11422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i11428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i11429 = data
  i11428.path = i11429[0]
  request.r(i11429[1], i11429[2], 0, i11428, 'unityObject')
  return i11428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i11430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i11431 = data
  var i11433 = i11431[0]
  var i11432 = []
  for(var i = 0; i < i11433.length; i += 1) {
    i11432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i11433[i + 0]) );
  }
  i11430.scriptsExecutionOrder = i11432
  var i11435 = i11431[1]
  var i11434 = []
  for(var i = 0; i < i11435.length; i += 1) {
    i11434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i11435[i + 0]) );
  }
  i11430.sortingLayers = i11434
  var i11437 = i11431[2]
  var i11436 = []
  for(var i = 0; i < i11437.length; i += 1) {
    i11436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i11437[i + 0]) );
  }
  i11430.cullingLayers = i11436
  i11430.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i11431[3], i11430.timeSettings)
  i11430.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i11431[4], i11430.physicsSettings)
  i11430.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i11431[5], i11430.physics2DSettings)
  i11430.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i11431[6], i11430.qualitySettings)
  i11430.enableRealtimeShadows = !!i11431[7]
  i11430.enableAutoInstancing = !!i11431[8]
  i11430.enableDynamicBatching = !!i11431[9]
  i11430.lightmapEncodingQuality = i11431[10]
  i11430.desiredColorSpace = i11431[11]
  var i11439 = i11431[12]
  var i11438 = []
  for(var i = 0; i < i11439.length; i += 1) {
    i11438.push( i11439[i + 0] );
  }
  i11430.allTags = i11438
  return i11430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i11442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i11443 = data
  i11442.name = i11443[0]
  i11442.value = i11443[1]
  return i11442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i11446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i11447 = data
  i11446.id = i11447[0]
  i11446.name = i11447[1]
  i11446.value = i11447[2]
  return i11446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i11450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i11451 = data
  i11450.id = i11451[0]
  i11450.name = i11451[1]
  return i11450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i11452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i11453 = data
  i11452.fixedDeltaTime = i11453[0]
  i11452.maximumDeltaTime = i11453[1]
  i11452.timeScale = i11453[2]
  i11452.maximumParticleTimestep = i11453[3]
  return i11452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i11454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i11455 = data
  i11454.gravity = new pc.Vec3( i11455[0], i11455[1], i11455[2] )
  i11454.defaultSolverIterations = i11455[3]
  i11454.bounceThreshold = i11455[4]
  i11454.autoSyncTransforms = !!i11455[5]
  i11454.autoSimulation = !!i11455[6]
  var i11457 = i11455[7]
  var i11456 = []
  for(var i = 0; i < i11457.length; i += 1) {
    i11456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i11457[i + 0]) );
  }
  i11454.collisionMatrix = i11456
  return i11454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i11460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i11461 = data
  i11460.enabled = !!i11461[0]
  i11460.layerId = i11461[1]
  i11460.otherLayerId = i11461[2]
  return i11460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i11462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i11463 = data
  request.r(i11463[0], i11463[1], 0, i11462, 'material')
  i11462.gravity = new pc.Vec2( i11463[2], i11463[3] )
  i11462.positionIterations = i11463[4]
  i11462.velocityIterations = i11463[5]
  i11462.velocityThreshold = i11463[6]
  i11462.maxLinearCorrection = i11463[7]
  i11462.maxAngularCorrection = i11463[8]
  i11462.maxTranslationSpeed = i11463[9]
  i11462.maxRotationSpeed = i11463[10]
  i11462.baumgarteScale = i11463[11]
  i11462.baumgarteTOIScale = i11463[12]
  i11462.timeToSleep = i11463[13]
  i11462.linearSleepTolerance = i11463[14]
  i11462.angularSleepTolerance = i11463[15]
  i11462.defaultContactOffset = i11463[16]
  i11462.autoSimulation = !!i11463[17]
  i11462.queriesHitTriggers = !!i11463[18]
  i11462.queriesStartInColliders = !!i11463[19]
  i11462.callbacksOnDisable = !!i11463[20]
  i11462.reuseCollisionCallbacks = !!i11463[21]
  i11462.autoSyncTransforms = !!i11463[22]
  var i11465 = i11463[23]
  var i11464 = []
  for(var i = 0; i < i11465.length; i += 1) {
    i11464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i11465[i + 0]) );
  }
  i11462.collisionMatrix = i11464
  return i11462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i11468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i11469 = data
  i11468.enabled = !!i11469[0]
  i11468.layerId = i11469[1]
  i11468.otherLayerId = i11469[2]
  return i11468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i11470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i11471 = data
  var i11473 = i11471[0]
  var i11472 = []
  for(var i = 0; i < i11473.length; i += 1) {
    i11472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i11473[i + 0]) );
  }
  i11470.qualityLevels = i11472
  var i11475 = i11471[1]
  var i11474 = []
  for(var i = 0; i < i11475.length; i += 1) {
    i11474.push( i11475[i + 0] );
  }
  i11470.names = i11474
  i11470.shadows = i11471[2]
  i11470.anisotropicFiltering = i11471[3]
  i11470.antiAliasing = i11471[4]
  i11470.lodBias = i11471[5]
  i11470.shadowCascades = i11471[6]
  i11470.shadowDistance = i11471[7]
  i11470.shadowmaskMode = i11471[8]
  i11470.shadowProjection = i11471[9]
  i11470.shadowResolution = i11471[10]
  i11470.softParticles = !!i11471[11]
  i11470.softVegetation = !!i11471[12]
  i11470.activeColorSpace = i11471[13]
  i11470.desiredColorSpace = i11471[14]
  i11470.masterTextureLimit = i11471[15]
  i11470.maxQueuedFrames = i11471[16]
  i11470.particleRaycastBudget = i11471[17]
  i11470.pixelLightCount = i11471[18]
  i11470.realtimeReflectionProbes = !!i11471[19]
  i11470.shadowCascade2Split = i11471[20]
  i11470.shadowCascade4Split = new pc.Vec3( i11471[21], i11471[22], i11471[23] )
  i11470.streamingMipmapsActive = !!i11471[24]
  i11470.vSyncCount = i11471[25]
  i11470.asyncUploadBufferSize = i11471[26]
  i11470.asyncUploadTimeSlice = i11471[27]
  i11470.billboardsFaceCameraPosition = !!i11471[28]
  i11470.shadowNearPlaneOffset = i11471[29]
  i11470.streamingMipmapsMemoryBudget = i11471[30]
  i11470.maximumLODLevel = i11471[31]
  i11470.streamingMipmapsAddAllCameras = !!i11471[32]
  i11470.streamingMipmapsMaxLevelReduction = i11471[33]
  i11470.streamingMipmapsRenderersPerFrame = i11471[34]
  i11470.resolutionScalingFixedDPIFactor = i11471[35]
  i11470.streamingMipmapsMaxFileIORequests = i11471[36]
  i11470.currentQualityLevel = i11471[37]
  return i11470
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i11478 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i11479 = data
  i11478.xPlacement = i11479[0]
  i11478.yPlacement = i11479[1]
  i11478.xAdvance = i11479[2]
  i11478.yAdvance = i11479[3]
  return i11478
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i11480 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i11481 = data
  i11480.m_GlyphIndex = i11481[0]
  i11480.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i11481[1], i11480.m_GlyphValueRecord)
  return i11480
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i11482 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i11483 = data
  i11482.m_XPlacement = i11483[0]
  i11482.m_YPlacement = i11483[1]
  i11482.m_XAdvance = i11483[2]
  i11482.m_YAdvance = i11483[3]
  return i11482
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

Deserializers.buildID = "c5b00f56-441b-4901-bdc5-161369a3b2d3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


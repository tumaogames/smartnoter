var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2140 = root || request.c( 'UnityEngine.JointSpring' )
  var i2141 = data
  i2140.spring = i2141[0]
  i2140.damper = i2141[1]
  i2140.targetPosition = i2141[2]
  return i2140
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2142 = root || request.c( 'UnityEngine.JointMotor' )
  var i2143 = data
  i2142.m_TargetVelocity = i2143[0]
  i2142.m_Force = i2143[1]
  i2142.m_FreeSpin = i2143[2]
  return i2142
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2144 = root || request.c( 'UnityEngine.JointLimits' )
  var i2145 = data
  i2144.m_Min = i2145[0]
  i2144.m_Max = i2145[1]
  i2144.m_Bounciness = i2145[2]
  i2144.m_BounceMinVelocity = i2145[3]
  i2144.m_ContactDistance = i2145[4]
  i2144.minBounce = i2145[5]
  i2144.maxBounce = i2145[6]
  return i2144
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2146 = root || request.c( 'UnityEngine.JointDrive' )
  var i2147 = data
  i2146.m_PositionSpring = i2147[0]
  i2146.m_PositionDamper = i2147[1]
  i2146.m_MaximumForce = i2147[2]
  i2146.m_UseAcceleration = i2147[3]
  return i2146
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2148 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2149 = data
  i2148.m_Spring = i2149[0]
  i2148.m_Damper = i2149[1]
  return i2148
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2150 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2151 = data
  i2150.m_Limit = i2151[0]
  i2150.m_Bounciness = i2151[1]
  i2150.m_ContactDistance = i2151[2]
  return i2150
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2152 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2153 = data
  i2152.m_ExtremumSlip = i2153[0]
  i2152.m_ExtremumValue = i2153[1]
  i2152.m_AsymptoteSlip = i2153[2]
  i2152.m_AsymptoteValue = i2153[3]
  i2152.m_Stiffness = i2153[4]
  return i2152
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2154 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2155 = data
  i2154.m_LowerAngle = i2155[0]
  i2154.m_UpperAngle = i2155[1]
  return i2154
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2156 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2157 = data
  i2156.m_MotorSpeed = i2157[0]
  i2156.m_MaximumMotorTorque = i2157[1]
  return i2156
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2158 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2159 = data
  i2158.m_DampingRatio = i2159[0]
  i2158.m_Frequency = i2159[1]
  i2158.m_Angle = i2159[2]
  return i2158
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2160 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2161 = data
  i2160.m_LowerTranslation = i2161[0]
  i2160.m_UpperTranslation = i2161[1]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2162 = root || new pc.UnityMaterial()
  var i2163 = data
  i2162.name = i2163[0]
  request.r(i2163[1], i2163[2], 0, i2162, 'shader')
  i2162.renderQueue = i2163[3]
  i2162.enableInstancing = !!i2163[4]
  var i2165 = i2163[5]
  var i2164 = []
  for(var i = 0; i < i2165.length; i += 1) {
    i2164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2165[i + 0]) );
  }
  i2162.floatParameters = i2164
  var i2167 = i2163[6]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 1) {
    i2166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2167[i + 0]) );
  }
  i2162.colorParameters = i2166
  var i2169 = i2163[7]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2169[i + 0]) );
  }
  i2162.vectorParameters = i2168
  var i2171 = i2163[8]
  var i2170 = []
  for(var i = 0; i < i2171.length; i += 1) {
    i2170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2171[i + 0]) );
  }
  i2162.textureParameters = i2170
  var i2173 = i2163[9]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2173[i + 0]) );
  }
  i2162.materialFlags = i2172
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2177 = data
  i2176.name = i2177[0]
  i2176.value = i2177[1]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2181 = data
  i2180.name = i2181[0]
  i2180.value = new pc.Color(i2181[1], i2181[2], i2181[3], i2181[4])
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2185 = data
  i2184.name = i2185[0]
  i2184.value = new pc.Vec4( i2185[1], i2185[2], i2185[3], i2185[4] )
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2189 = data
  i2188.name = i2189[0]
  request.r(i2189[1], i2189[2], 0, i2188, 'value')
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2193 = data
  i2192.name = i2193[0]
  i2192.enabled = !!i2193[1]
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2195 = data
  i2194.name = i2195[0]
  i2194.width = i2195[1]
  i2194.height = i2195[2]
  i2194.mipmapCount = i2195[3]
  i2194.anisoLevel = i2195[4]
  i2194.filterMode = i2195[5]
  i2194.hdr = !!i2195[6]
  i2194.format = i2195[7]
  i2194.wrapMode = i2195[8]
  i2194.alphaIsTransparency = !!i2195[9]
  i2194.alphaSource = i2195[10]
  i2194.graphicsFormat = i2195[11]
  i2194.sRGBTexture = !!i2195[12]
  i2194.desiredColorSpace = i2195[13]
  i2194.wrapU = i2195[14]
  i2194.wrapV = i2195[15]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2197 = data
  i2196.name = i2197[0]
  i2196.index = i2197[1]
  i2196.startup = !!i2197[2]
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2199 = data
  i2198.position = new pc.Vec3( i2199[0], i2199[1], i2199[2] )
  i2198.scale = new pc.Vec3( i2199[3], i2199[4], i2199[5] )
  i2198.rotation = new pc.Quat(i2199[6], i2199[7], i2199[8], i2199[9])
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2201 = data
  i2200.enabled = !!i2201[0]
  i2200.aspect = i2201[1]
  i2200.orthographic = !!i2201[2]
  i2200.orthographicSize = i2201[3]
  i2200.backgroundColor = new pc.Color(i2201[4], i2201[5], i2201[6], i2201[7])
  i2200.nearClipPlane = i2201[8]
  i2200.farClipPlane = i2201[9]
  i2200.fieldOfView = i2201[10]
  i2200.depth = i2201[11]
  i2200.clearFlags = i2201[12]
  i2200.cullingMask = i2201[13]
  i2200.rect = i2201[14]
  request.r(i2201[15], i2201[16], 0, i2200, 'targetTexture')
  i2200.usePhysicalProperties = !!i2201[17]
  i2200.focalLength = i2201[18]
  i2200.sensorSize = new pc.Vec2( i2201[19], i2201[20] )
  i2200.lensShift = new pc.Vec2( i2201[21], i2201[22] )
  i2200.gateFit = i2201[23]
  i2200.commandBufferCount = i2201[24]
  i2200.cameraType = i2201[25]
  return i2200
}

Deserializers["CameraAspectFitter"] = function (request, data, root) {
  var i2202 = root || request.c( 'CameraAspectFitter' )
  var i2203 = data
  request.r(i2203[0], i2203[1], 0, i2202, 'targetSprite')
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2205 = data
  i2204.name = i2205[0]
  i2204.tagId = i2205[1]
  i2204.enabled = !!i2205[2]
  i2204.isStatic = !!i2205[3]
  i2204.layer = i2205[4]
  return i2204
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i2206 = root || request.c( 'AudioManager' )
  var i2207 = data
  request.r(i2207[0], i2207[1], 0, i2206, 'library')
  i2206.sfxPoolSize = i2207[2]
  return i2206
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i2208 = root || request.c( 'TaskManager' )
  var i2209 = data
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2211 = data
  i2210.enabled = !!i2211[0]
  request.r(i2211[1], i2211[2], 0, i2210, 'sharedMaterial')
  var i2213 = i2211[3]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 2) {
  request.r(i2213[i + 0], i2213[i + 1], 2, i2212, '')
  }
  i2210.sharedMaterials = i2212
  i2210.receiveShadows = !!i2211[4]
  i2210.shadowCastingMode = i2211[5]
  i2210.sortingLayerID = i2211[6]
  i2210.sortingOrder = i2211[7]
  i2210.lightmapIndex = i2211[8]
  i2210.lightmapSceneIndex = i2211[9]
  i2210.lightmapScaleOffset = new pc.Vec4( i2211[10], i2211[11], i2211[12], i2211[13] )
  i2210.lightProbeUsage = i2211[14]
  i2210.reflectionProbeUsage = i2211[15]
  i2210.color = new pc.Color(i2211[16], i2211[17], i2211[18], i2211[19])
  request.r(i2211[20], i2211[21], 0, i2210, 'sprite')
  i2210.flipX = !!i2211[22]
  i2210.flipY = !!i2211[23]
  i2210.drawMode = i2211[24]
  i2210.size = new pc.Vec2( i2211[25], i2211[26] )
  i2210.tileMode = i2211[27]
  i2210.adaptiveModeThreshold = i2211[28]
  i2210.maskInteraction = i2211[29]
  i2210.spriteSortPoint = i2211[30]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2217 = data
  i2216.pivot = new pc.Vec2( i2217[0], i2217[1] )
  i2216.anchorMin = new pc.Vec2( i2217[2], i2217[3] )
  i2216.anchorMax = new pc.Vec2( i2217[4], i2217[5] )
  i2216.sizeDelta = new pc.Vec2( i2217[6], i2217[7] )
  i2216.anchoredPosition3D = new pc.Vec3( i2217[8], i2217[9], i2217[10] )
  i2216.rotation = new pc.Quat(i2217[11], i2217[12], i2217[13], i2217[14])
  i2216.scale = new pc.Vec3( i2217[15], i2217[16], i2217[17] )
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2219 = data
  i2218.enabled = !!i2219[0]
  i2218.planeDistance = i2219[1]
  i2218.referencePixelsPerUnit = i2219[2]
  i2218.isFallbackOverlay = !!i2219[3]
  i2218.renderMode = i2219[4]
  i2218.renderOrder = i2219[5]
  i2218.sortingLayerName = i2219[6]
  i2218.sortingOrder = i2219[7]
  i2218.scaleFactor = i2219[8]
  request.r(i2219[9], i2219[10], 0, i2218, 'worldCamera')
  i2218.overrideSorting = !!i2219[11]
  i2218.pixelPerfect = !!i2219[12]
  i2218.targetDisplay = i2219[13]
  i2218.overridePixelPerfect = !!i2219[14]
  return i2218
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2220 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2221 = data
  i2220.m_UiScaleMode = i2221[0]
  i2220.m_ReferencePixelsPerUnit = i2221[1]
  i2220.m_ScaleFactor = i2221[2]
  i2220.m_ReferenceResolution = new pc.Vec2( i2221[3], i2221[4] )
  i2220.m_ScreenMatchMode = i2221[5]
  i2220.m_MatchWidthOrHeight = i2221[6]
  i2220.m_PhysicalUnit = i2221[7]
  i2220.m_FallbackScreenDPI = i2221[8]
  i2220.m_DefaultSpriteDPI = i2221[9]
  i2220.m_DynamicPixelsPerUnit = i2221[10]
  i2220.m_PresetInfoIsWorld = !!i2221[11]
  return i2220
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2222 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2223 = data
  i2222.m_IgnoreReversedGraphics = !!i2223[0]
  i2222.m_BlockingObjects = i2223[1]
  i2222.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2223[2] )
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2225 = data
  i2224.cullTransparentMesh = !!i2225[0]
  return i2224
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2226 = root || request.c( 'UnityEngine.UI.Image' )
  var i2227 = data
  request.r(i2227[0], i2227[1], 0, i2226, 'm_Sprite')
  i2226.m_Type = i2227[2]
  i2226.m_PreserveAspect = !!i2227[3]
  i2226.m_FillCenter = !!i2227[4]
  i2226.m_FillMethod = i2227[5]
  i2226.m_FillAmount = i2227[6]
  i2226.m_FillClockwise = !!i2227[7]
  i2226.m_FillOrigin = i2227[8]
  i2226.m_UseSpriteMesh = !!i2227[9]
  i2226.m_PixelsPerUnitMultiplier = i2227[10]
  request.r(i2227[11], i2227[12], 0, i2226, 'm_Material')
  i2226.m_Maskable = !!i2227[13]
  i2226.m_Color = new pc.Color(i2227[14], i2227[15], i2227[16], i2227[17])
  i2226.m_RaycastTarget = !!i2227[18]
  i2226.m_RaycastPadding = new pc.Vec4( i2227[19], i2227[20], i2227[21], i2227[22] )
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2229 = data
  i2228.m_Alpha = i2229[0]
  i2228.m_Interactable = !!i2229[1]
  i2228.m_BlocksRaycasts = !!i2229[2]
  i2228.m_IgnoreParentGroups = !!i2229[3]
  i2228.enabled = !!i2229[4]
  return i2228
}

Deserializers["CanvasGroupAnimator"] = function (request, data, root) {
  var i2230 = root || request.c( 'CanvasGroupAnimator' )
  var i2231 = data
  request.r(i2231[0], i2231[1], 0, i2230, 'canvasGroup')
  i2230.animateFade = !!i2231[2]
  i2230.triggerOnStart = !!i2231[3]
  i2230.isLooping = !!i2231[4]
  i2230.fadeTo = i2231[5]
  i2230.fadeDuration = i2231[6]
  i2230.fadeEaseType = i2231[7]
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2233 = data
  request.r(i2233[0], i2233[1], 0, i2232, 'animatorController')
  request.r(i2233[2], i2233[3], 0, i2232, 'avatar')
  i2232.updateMode = i2233[4]
  i2232.hasTransformHierarchy = !!i2233[5]
  i2232.applyRootMotion = !!i2233[6]
  var i2235 = i2233[7]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 2) {
  request.r(i2235[i + 0], i2235[i + 1], 2, i2234, '')
  }
  i2232.humanBones = i2234
  i2232.enabled = !!i2233[8]
  return i2232
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2238 = root || request.c( 'UnityEngine.UI.Button' )
  var i2239 = data
  i2238.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2239[0], i2238.m_OnClick)
  i2238.m_Navigation = request.d('UnityEngine.UI.Navigation', i2239[1], i2238.m_Navigation)
  i2238.m_Transition = i2239[2]
  i2238.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2239[3], i2238.m_Colors)
  i2238.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2239[4], i2238.m_SpriteState)
  i2238.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2239[5], i2238.m_AnimationTriggers)
  i2238.m_Interactable = !!i2239[6]
  request.r(i2239[7], i2239[8], 0, i2238, 'm_TargetGraphic')
  return i2238
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2240 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2241 = data
  i2240.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2241[0], i2240.m_PersistentCalls)
  return i2240
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2242 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2243 = data
  var i2245 = i2243[0]
  var i2244 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.add(request.d('UnityEngine.Events.PersistentCall', i2245[i + 0]));
  }
  i2242.m_Calls = i2244
  return i2242
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2248 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2249 = data
  request.r(i2249[0], i2249[1], 0, i2248, 'm_Target')
  i2248.m_TargetAssemblyTypeName = i2249[2]
  i2248.m_MethodName = i2249[3]
  i2248.m_Mode = i2249[4]
  i2248.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2249[5], i2248.m_Arguments)
  i2248.m_CallState = i2249[6]
  return i2248
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2250 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2251 = data
  request.r(i2251[0], i2251[1], 0, i2250, 'm_ObjectArgument')
  i2250.m_ObjectArgumentAssemblyTypeName = i2251[2]
  i2250.m_IntArgument = i2251[3]
  i2250.m_FloatArgument = i2251[4]
  i2250.m_StringArgument = i2251[5]
  i2250.m_BoolArgument = !!i2251[6]
  return i2250
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2252 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2253 = data
  i2252.m_Mode = i2253[0]
  i2252.m_WrapAround = !!i2253[1]
  request.r(i2253[2], i2253[3], 0, i2252, 'm_SelectOnUp')
  request.r(i2253[4], i2253[5], 0, i2252, 'm_SelectOnDown')
  request.r(i2253[6], i2253[7], 0, i2252, 'm_SelectOnLeft')
  request.r(i2253[8], i2253[9], 0, i2252, 'm_SelectOnRight')
  return i2252
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2254 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2255 = data
  i2254.m_NormalColor = new pc.Color(i2255[0], i2255[1], i2255[2], i2255[3])
  i2254.m_HighlightedColor = new pc.Color(i2255[4], i2255[5], i2255[6], i2255[7])
  i2254.m_PressedColor = new pc.Color(i2255[8], i2255[9], i2255[10], i2255[11])
  i2254.m_SelectedColor = new pc.Color(i2255[12], i2255[13], i2255[14], i2255[15])
  i2254.m_DisabledColor = new pc.Color(i2255[16], i2255[17], i2255[18], i2255[19])
  i2254.m_ColorMultiplier = i2255[20]
  i2254.m_FadeDuration = i2255[21]
  return i2254
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2256 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2257 = data
  request.r(i2257[0], i2257[1], 0, i2256, 'm_HighlightedSprite')
  request.r(i2257[2], i2257[3], 0, i2256, 'm_PressedSprite')
  request.r(i2257[4], i2257[5], 0, i2256, 'm_SelectedSprite')
  request.r(i2257[6], i2257[7], 0, i2256, 'm_DisabledSprite')
  return i2256
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2258 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2259 = data
  i2258.m_NormalTrigger = i2259[0]
  i2258.m_HighlightedTrigger = i2259[1]
  i2258.m_PressedTrigger = i2259[2]
  i2258.m_SelectedTrigger = i2259[3]
  i2258.m_DisabledTrigger = i2259[4]
  return i2258
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2260 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2261 = data
  i2260.m_Spacing = i2261[0]
  i2260.m_ChildForceExpandWidth = !!i2261[1]
  i2260.m_ChildForceExpandHeight = !!i2261[2]
  i2260.m_ChildControlWidth = !!i2261[3]
  i2260.m_ChildControlHeight = !!i2261[4]
  i2260.m_ChildScaleWidth = !!i2261[5]
  i2260.m_ChildScaleHeight = !!i2261[6]
  i2260.m_ReverseArrangement = !!i2261[7]
  i2260.m_Padding = UnityEngine.RectOffset.FromPaddings(i2261[8], i2261[9], i2261[10], i2261[11])
  i2260.m_ChildAlignment = i2261[12]
  return i2260
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2262 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2263 = data
  i2262.m_ShowMaskGraphic = !!i2263[0]
  return i2262
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i2264 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i2265 = data
  request.r(i2265[0], i2265[1], 0, i2264, 'm_Content')
  i2264.m_Horizontal = !!i2265[2]
  i2264.m_Vertical = !!i2265[3]
  i2264.m_MovementType = i2265[4]
  i2264.m_Elasticity = i2265[5]
  i2264.m_Inertia = !!i2265[6]
  i2264.m_DecelerationRate = i2265[7]
  i2264.m_ScrollSensitivity = i2265[8]
  request.r(i2265[9], i2265[10], 0, i2264, 'm_Viewport')
  request.r(i2265[11], i2265[12], 0, i2264, 'm_HorizontalScrollbar')
  request.r(i2265[13], i2265[14], 0, i2264, 'm_VerticalScrollbar')
  i2264.m_HorizontalScrollbarVisibility = i2265[15]
  i2264.m_VerticalScrollbarVisibility = i2265[16]
  i2264.m_HorizontalScrollbarSpacing = i2265[17]
  i2264.m_VerticalScrollbarSpacing = i2265[18]
  i2264.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i2265[19], i2264.m_OnValueChanged)
  return i2264
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i2266 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i2267 = data
  i2266.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2267[0], i2266.m_PersistentCalls)
  return i2266
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i2268 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i2269 = data
  request.r(i2269[0], i2269[1], 0, i2268, 'm_HandleRect')
  i2268.m_Direction = i2269[2]
  i2268.m_Value = i2269[3]
  i2268.m_Size = i2269[4]
  i2268.m_NumberOfSteps = i2269[5]
  i2268.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i2269[6], i2268.m_OnValueChanged)
  i2268.m_Navigation = request.d('UnityEngine.UI.Navigation', i2269[7], i2268.m_Navigation)
  i2268.m_Transition = i2269[8]
  i2268.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2269[9], i2268.m_Colors)
  i2268.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2269[10], i2268.m_SpriteState)
  i2268.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2269[11], i2268.m_AnimationTriggers)
  i2268.m_Interactable = !!i2269[12]
  request.r(i2269[13], i2269[14], 0, i2268, 'm_TargetGraphic')
  return i2268
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i2270 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i2271 = data
  i2270.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2271[0], i2270.m_PersistentCalls)
  return i2270
}

Deserializers["DragToResizeLeft"] = function (request, data, root) {
  var i2272 = root || request.c( 'DragToResizeLeft' )
  var i2273 = data
  request.r(i2273[0], i2273[1], 0, i2272, 'target')
  i2272.minWidth = i2273[2]
  return i2272
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2274 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2275 = data
  request.r(i2275[0], i2275[1], 0, i2274, 'm_FirstSelected')
  i2274.m_sendNavigationEvents = !!i2275[2]
  i2274.m_DragThreshold = i2275[3]
  return i2274
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2276 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2277 = data
  i2276.m_HorizontalAxis = i2277[0]
  i2276.m_VerticalAxis = i2277[1]
  i2276.m_SubmitButton = i2277[2]
  i2276.m_CancelButton = i2277[3]
  i2276.m_InputActionsPerSecond = i2277[4]
  i2276.m_RepeatDelay = i2277[5]
  i2276.m_ForceModuleActive = !!i2277[6]
  i2276.m_SendPointerHoverToParent = !!i2277[7]
  return i2276
}

Deserializers["ButtonPulse"] = function (request, data, root) {
  var i2278 = root || request.c( 'ButtonPulse' )
  var i2279 = data
  i2278.scaleAmount = i2279[0]
  i2278.pulseDuration = i2279[1]
  return i2278
}

Deserializers["StartClickHandler"] = function (request, data, root) {
  var i2280 = root || request.c( 'StartClickHandler' )
  var i2281 = data
  return i2280
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2282 = root || request.c( 'GameManager' )
  var i2283 = data
  request.r(i2283[0], i2283[1], 0, i2282, 'endPanel')
  i2282.end = !!i2283[2]
  request.r(i2283[3], i2283[4], 0, i2282, 'hand')
  request.r(i2283[5], i2283[6], 0, i2282, 'hand2')
  i2282.enableSound = !!i2283[7]
  request.r(i2283[8], i2283[9], 0, i2282, 'startClickHandler')
  i2282.currentScore = i2283[10]
  request.r(i2283[11], i2283[12], 0, i2282, 'BodyToSummarize')
  request.r(i2283[13], i2283[14], 0, i2282, 'SummarizedText')
  request.r(i2283[15], i2283[16], 0, i2282, 'transcriptBtnBlue')
  request.r(i2283[17], i2283[18], 0, i2282, 'transcriptBtn')
  request.r(i2283[19], i2283[20], 0, i2282, 'summaryBtn')
  request.r(i2283[21], i2283[22], 0, i2282, 'summaryBtnBlue')
  request.r(i2283[23], i2283[24], 0, i2282, 'mainPanel')
  request.r(i2283[25], i2283[26], 0, i2282, 'handle1')
  request.r(i2283[27], i2283[28], 0, i2282, 'animator')
  request.r(i2283[29], i2283[30], 0, i2282, 'maskA')
  request.r(i2283[31], i2283[32], 0, i2282, 'filter')
  request.r(i2283[33], i2283[34], 0, i2282, 'arrow')
  request.r(i2283[35], i2283[36], 0, i2282, 'toTap')
  request.r(i2283[37], i2283[38], 0, i2282, 'openingPanel')
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2285 = data
  i2284.ambientIntensity = i2285[0]
  i2284.reflectionIntensity = i2285[1]
  i2284.ambientMode = i2285[2]
  i2284.ambientLight = new pc.Color(i2285[3], i2285[4], i2285[5], i2285[6])
  i2284.ambientSkyColor = new pc.Color(i2285[7], i2285[8], i2285[9], i2285[10])
  i2284.ambientGroundColor = new pc.Color(i2285[11], i2285[12], i2285[13], i2285[14])
  i2284.ambientEquatorColor = new pc.Color(i2285[15], i2285[16], i2285[17], i2285[18])
  i2284.fogColor = new pc.Color(i2285[19], i2285[20], i2285[21], i2285[22])
  i2284.fogEndDistance = i2285[23]
  i2284.fogStartDistance = i2285[24]
  i2284.fogDensity = i2285[25]
  i2284.fog = !!i2285[26]
  request.r(i2285[27], i2285[28], 0, i2284, 'skybox')
  i2284.fogMode = i2285[29]
  var i2287 = i2285[30]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2287[i + 0]) );
  }
  i2284.lightmaps = i2286
  i2284.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2285[31], i2284.lightProbes)
  i2284.lightmapsMode = i2285[32]
  i2284.mixedBakeMode = i2285[33]
  i2284.environmentLightingMode = i2285[34]
  i2284.ambientProbe = new pc.SphericalHarmonicsL2(i2285[35])
  i2284.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2285[36])
  i2284.useReferenceAmbientProbe = !!i2285[37]
  request.r(i2285[38], i2285[39], 0, i2284, 'customReflection')
  request.r(i2285[40], i2285[41], 0, i2284, 'defaultReflection')
  i2284.defaultReflectionMode = i2285[42]
  i2284.defaultReflectionResolution = i2285[43]
  i2284.sunLightObjectId = i2285[44]
  i2284.pixelLightCount = i2285[45]
  i2284.defaultReflectionHDR = !!i2285[46]
  i2284.hasLightDataAsset = !!i2285[47]
  i2284.hasManualGenerate = !!i2285[48]
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2291 = data
  request.r(i2291[0], i2291[1], 0, i2290, 'lightmapColor')
  request.r(i2291[2], i2291[3], 0, i2290, 'lightmapDirection')
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2292 = root || new UnityEngine.LightProbes()
  var i2293 = data
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2301 = data
  var i2303 = i2301[0]
  var i2302 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2303[i + 0]));
  }
  i2300.ShaderCompilationErrors = i2302
  i2300.name = i2301[1]
  i2300.guid = i2301[2]
  var i2305 = i2301[3]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( i2305[i + 0] );
  }
  i2300.shaderDefinedKeywords = i2304
  var i2307 = i2301[4]
  var i2306 = []
  for(var i = 0; i < i2307.length; i += 1) {
    i2306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2307[i + 0]) );
  }
  i2300.passes = i2306
  var i2309 = i2301[5]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2309[i + 0]) );
  }
  i2300.usePasses = i2308
  var i2311 = i2301[6]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2311[i + 0]) );
  }
  i2300.defaultParameterValues = i2310
  request.r(i2301[7], i2301[8], 0, i2300, 'unityFallbackShader')
  i2300.readDepth = !!i2301[9]
  i2300.isCreatedByShaderGraph = !!i2301[10]
  i2300.compiled = !!i2301[11]
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2315 = data
  i2314.shaderName = i2315[0]
  i2314.errorMessage = i2315[1]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2320 = root || new pc.UnityShaderPass()
  var i2321 = data
  i2320.id = i2321[0]
  i2320.subShaderIndex = i2321[1]
  i2320.name = i2321[2]
  i2320.passType = i2321[3]
  i2320.grabPassTextureName = i2321[4]
  i2320.usePass = !!i2321[5]
  i2320.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2321[6], i2320.zTest)
  i2320.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2321[7], i2320.zWrite)
  i2320.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2321[8], i2320.culling)
  i2320.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2321[9], i2320.blending)
  i2320.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2321[10], i2320.alphaBlending)
  i2320.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2321[11], i2320.colorWriteMask)
  i2320.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2321[12], i2320.offsetUnits)
  i2320.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2321[13], i2320.offsetFactor)
  i2320.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2321[14], i2320.stencilRef)
  i2320.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2321[15], i2320.stencilReadMask)
  i2320.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2321[16], i2320.stencilWriteMask)
  i2320.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2321[17], i2320.stencilOp)
  i2320.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2321[18], i2320.stencilOpFront)
  i2320.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2321[19], i2320.stencilOpBack)
  var i2323 = i2321[20]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2323[i + 0]) );
  }
  i2320.tags = i2322
  var i2325 = i2321[21]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.push( i2325[i + 0] );
  }
  i2320.passDefinedKeywords = i2324
  var i2327 = i2321[22]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2327[i + 0]) );
  }
  i2320.passDefinedKeywordGroups = i2326
  var i2329 = i2321[23]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2329[i + 0]) );
  }
  i2320.variants = i2328
  var i2331 = i2321[24]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 1) {
    i2330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2331[i + 0]) );
  }
  i2320.excludedVariants = i2330
  i2320.hasDepthReader = !!i2321[25]
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2333 = data
  i2332.val = i2333[0]
  i2332.name = i2333[1]
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2335 = data
  i2334.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2335[0], i2334.src)
  i2334.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2335[1], i2334.dst)
  i2334.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2335[2], i2334.op)
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2337 = data
  i2336.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2337[0], i2336.pass)
  i2336.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2337[1], i2336.fail)
  i2336.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2337[2], i2336.zFail)
  i2336.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2337[3], i2336.comp)
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2341 = data
  i2340.name = i2341[0]
  i2340.value = i2341[1]
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2345 = data
  var i2347 = i2345[0]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.push( i2347[i + 0] );
  }
  i2344.keywords = i2346
  i2344.hasDiscard = !!i2345[1]
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2351 = data
  i2350.passId = i2351[0]
  i2350.subShaderIndex = i2351[1]
  var i2353 = i2351[2]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( i2353[i + 0] );
  }
  i2350.keywords = i2352
  i2350.vertexProgram = i2351[3]
  i2350.fragmentProgram = i2351[4]
  i2350.exportedForWebGl2 = !!i2351[5]
  i2350.readDepth = !!i2351[6]
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'shader')
  i2356.pass = i2357[2]
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2361 = data
  i2360.name = i2361[0]
  i2360.type = i2361[1]
  i2360.value = new pc.Vec4( i2361[2], i2361[3], i2361[4], i2361[5] )
  i2360.textureValue = i2361[6]
  i2360.shaderPropertyFlag = i2361[7]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2363 = data
  i2362.name = i2363[0]
  request.r(i2363[1], i2363[2], 0, i2362, 'texture')
  i2362.aabb = i2363[3]
  i2362.vertices = i2363[4]
  i2362.triangles = i2363[5]
  i2362.textureRect = UnityEngine.Rect.MinMaxRect(i2363[6], i2363[7], i2363[8], i2363[9])
  i2362.packedRect = UnityEngine.Rect.MinMaxRect(i2363[10], i2363[11], i2363[12], i2363[13])
  i2362.border = new pc.Vec4( i2363[14], i2363[15], i2363[16], i2363[17] )
  i2362.transparency = i2363[18]
  i2362.bounds = i2363[19]
  i2362.pixelsPerUnit = i2363[20]
  i2362.textureWidth = i2363[21]
  i2362.textureHeight = i2363[22]
  i2362.nativeSize = new pc.Vec2( i2363[23], i2363[24] )
  i2362.pivot = new pc.Vec2( i2363[25], i2363[26] )
  i2362.textureRectOffset = new pc.Vec2( i2363[27], i2363[28] )
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2365 = data
  i2364.name = i2365[0]
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2367 = data
  i2366.name = i2367[0]
  i2366.wrapMode = i2367[1]
  i2366.isLooping = !!i2367[2]
  i2366.length = i2367[3]
  var i2369 = i2367[4]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2369[i + 0]) );
  }
  i2366.curves = i2368
  var i2371 = i2367[5]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2371[i + 0]) );
  }
  i2366.events = i2370
  i2366.halfPrecision = !!i2367[6]
  i2366._frameRate = i2367[7]
  i2366.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2367[8], i2366.localBounds)
  i2366.hasMuscleCurves = !!i2367[9]
  var i2373 = i2367[10]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.push( i2373[i + 0] );
  }
  i2366.clipMuscleConstant = i2372
  i2366.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2367[11], i2366.clipBindingConstant)
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2377 = data
  i2376.path = i2377[0]
  i2376.hash = i2377[1]
  i2376.componentType = i2377[2]
  i2376.property = i2377[3]
  i2376.keys = i2377[4]
  var i2379 = i2377[5]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2379[i + 0]) );
  }
  i2376.objectReferenceKeys = i2378
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2383 = data
  i2382.time = i2383[0]
  request.r(i2383[1], i2383[2], 0, i2382, 'value')
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2387 = data
  i2386.functionName = i2387[0]
  i2386.floatParameter = i2387[1]
  i2386.intParameter = i2387[2]
  i2386.stringParameter = i2387[3]
  request.r(i2387[4], i2387[5], 0, i2386, 'objectReferenceParameter')
  i2386.time = i2387[6]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2389 = data
  i2388.center = new pc.Vec3( i2389[0], i2389[1], i2389[2] )
  i2388.extends = new pc.Vec3( i2389[3], i2389[4], i2389[5] )
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2393 = data
  var i2395 = i2393[0]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 1) {
    i2394.push( i2395[i + 0] );
  }
  i2392.genericBindings = i2394
  var i2397 = i2393[1]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( i2397[i + 0] );
  }
  i2392.pptrCurveMapping = i2396
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2399 = data
  i2398.name = i2399[0]
  var i2401 = i2399[1]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2401[i + 0]) );
  }
  i2398.layers = i2400
  var i2403 = i2399[2]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2403[i + 0]) );
  }
  i2398.parameters = i2402
  i2398.animationClips = i2399[3]
  i2398.avatarUnsupported = i2399[4]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2407 = data
  i2406.name = i2407[0]
  i2406.defaultWeight = i2407[1]
  i2406.blendingMode = i2407[2]
  i2406.avatarMask = i2407[3]
  i2406.syncedLayerIndex = i2407[4]
  i2406.syncedLayerAffectsTiming = !!i2407[5]
  i2406.syncedLayers = i2407[6]
  i2406.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2407[7], i2406.stateMachine)
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2409 = data
  i2408.id = i2409[0]
  i2408.name = i2409[1]
  i2408.path = i2409[2]
  var i2411 = i2409[3]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2411[i + 0]) );
  }
  i2408.states = i2410
  var i2413 = i2409[4]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2413[i + 0]) );
  }
  i2408.machines = i2412
  var i2415 = i2409[5]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2415[i + 0]) );
  }
  i2408.entryStateTransitions = i2414
  var i2417 = i2409[6]
  var i2416 = []
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2417[i + 0]) );
  }
  i2408.exitStateTransitions = i2416
  var i2419 = i2409[7]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 1) {
    i2418.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2419[i + 0]) );
  }
  i2408.anyStateTransitions = i2418
  i2408.defaultStateId = i2409[8]
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2423 = data
  i2422.id = i2423[0]
  i2422.name = i2423[1]
  i2422.cycleOffset = i2423[2]
  i2422.cycleOffsetParameter = i2423[3]
  i2422.cycleOffsetParameterActive = !!i2423[4]
  i2422.mirror = !!i2423[5]
  i2422.mirrorParameter = i2423[6]
  i2422.mirrorParameterActive = !!i2423[7]
  i2422.motionId = i2423[8]
  i2422.nameHash = i2423[9]
  i2422.fullPathHash = i2423[10]
  i2422.speed = i2423[11]
  i2422.speedParameter = i2423[12]
  i2422.speedParameterActive = !!i2423[13]
  i2422.tag = i2423[14]
  i2422.tagHash = i2423[15]
  i2422.writeDefaultValues = !!i2423[16]
  var i2425 = i2423[17]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 2) {
  request.r(i2425[i + 0], i2425[i + 1], 2, i2424, '')
  }
  i2422.behaviours = i2424
  var i2427 = i2423[18]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2427[i + 0]) );
  }
  i2422.transitions = i2426
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2433 = data
  i2432.fullPath = i2433[0]
  i2432.canTransitionToSelf = !!i2433[1]
  i2432.duration = i2433[2]
  i2432.exitTime = i2433[3]
  i2432.hasExitTime = !!i2433[4]
  i2432.hasFixedDuration = !!i2433[5]
  i2432.interruptionSource = i2433[6]
  i2432.offset = i2433[7]
  i2432.orderedInterruption = !!i2433[8]
  i2432.destinationStateId = i2433[9]
  i2432.isExit = !!i2433[10]
  i2432.mute = !!i2433[11]
  i2432.solo = !!i2433[12]
  var i2435 = i2433[13]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2435[i + 0]) );
  }
  i2432.conditions = i2434
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2441 = data
  i2440.destinationStateId = i2441[0]
  i2440.isExit = !!i2441[1]
  i2440.mute = !!i2441[2]
  i2440.solo = !!i2441[3]
  var i2443 = i2441[4]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 1) {
    i2442.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2443[i + 0]) );
  }
  i2440.conditions = i2442
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2447 = data
  i2446.defaultBool = !!i2447[0]
  i2446.defaultFloat = i2447[1]
  i2446.defaultInt = i2447[2]
  i2446.name = i2447[3]
  i2446.nameHash = i2447[4]
  i2446.type = i2447[5]
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2451 = data
  i2450.mode = i2451[0]
  i2450.parameter = i2451[1]
  i2450.threshold = i2451[2]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2453 = data
  i2452.name = i2453[0]
  i2452.bytes64 = i2453[1]
  i2452.data = i2453[2]
  return i2452
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i2454 = root || request.c( 'AudioLibrary' )
  var i2455 = data
  var i2457 = i2455[0]
  var i2456 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.add(request.d('AudioLibrary+ClipEntry', i2457[i + 0]));
  }
  i2454.clips = i2456
  return i2454
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i2460 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i2461 = data
  i2460.key = i2461[0]
  i2460.channel = i2461[1]
  request.r(i2461[2], i2461[3], 0, i2460, 'clip')
  i2460.volume = i2461[4]
  i2460.loop = !!i2461[5]
  return i2460
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2462 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2463 = data
  i2462.useSafeMode = !!i2463[0]
  i2462.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2463[1], i2462.safeModeOptions)
  i2462.timeScale = i2463[2]
  i2462.unscaledTimeScale = i2463[3]
  i2462.useSmoothDeltaTime = !!i2463[4]
  i2462.maxSmoothUnscaledTime = i2463[5]
  i2462.rewindCallbackMode = i2463[6]
  i2462.showUnityEditorReport = !!i2463[7]
  i2462.logBehaviour = i2463[8]
  i2462.drawGizmos = !!i2463[9]
  i2462.defaultRecyclable = !!i2463[10]
  i2462.defaultAutoPlay = i2463[11]
  i2462.defaultUpdateType = i2463[12]
  i2462.defaultTimeScaleIndependent = !!i2463[13]
  i2462.defaultEaseType = i2463[14]
  i2462.defaultEaseOvershootOrAmplitude = i2463[15]
  i2462.defaultEasePeriod = i2463[16]
  i2462.defaultAutoKill = !!i2463[17]
  i2462.defaultLoopType = i2463[18]
  i2462.debugMode = !!i2463[19]
  i2462.debugStoreTargetId = !!i2463[20]
  i2462.showPreviewPanel = !!i2463[21]
  i2462.storeSettingsLocation = i2463[22]
  i2462.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2463[23], i2462.modules)
  i2462.createASMDEF = !!i2463[24]
  i2462.showPlayingTweens = !!i2463[25]
  i2462.showPausedTweens = !!i2463[26]
  return i2462
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2464 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2465 = data
  i2464.logBehaviour = i2465[0]
  i2464.nestedTweenFailureBehaviour = i2465[1]
  return i2464
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2466 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2467 = data
  i2466.showPanel = !!i2467[0]
  i2466.audioEnabled = !!i2467[1]
  i2466.physicsEnabled = !!i2467[2]
  i2466.physics2DEnabled = !!i2467[3]
  i2466.spriteEnabled = !!i2467[4]
  i2466.uiEnabled = !!i2467[5]
  i2466.textMeshProEnabled = !!i2467[6]
  i2466.tk2DEnabled = !!i2467[7]
  i2466.deAudioEnabled = !!i2467[8]
  i2466.deUnityExtendedEnabled = !!i2467[9]
  i2466.epoOutlineEnabled = !!i2467[10]
  return i2466
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2468 = root || request.c( 'TMPro.TMP_Settings' )
  var i2469 = data
  i2468.m_enableWordWrapping = !!i2469[0]
  i2468.m_enableKerning = !!i2469[1]
  i2468.m_enableExtraPadding = !!i2469[2]
  i2468.m_enableTintAllSprites = !!i2469[3]
  i2468.m_enableParseEscapeCharacters = !!i2469[4]
  i2468.m_EnableRaycastTarget = !!i2469[5]
  i2468.m_GetFontFeaturesAtRuntime = !!i2469[6]
  i2468.m_missingGlyphCharacter = i2469[7]
  i2468.m_warningsDisabled = !!i2469[8]
  request.r(i2469[9], i2469[10], 0, i2468, 'm_defaultFontAsset')
  i2468.m_defaultFontAssetPath = i2469[11]
  i2468.m_defaultFontSize = i2469[12]
  i2468.m_defaultAutoSizeMinRatio = i2469[13]
  i2468.m_defaultAutoSizeMaxRatio = i2469[14]
  i2468.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2469[15], i2469[16] )
  i2468.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2469[17], i2469[18] )
  i2468.m_autoSizeTextContainer = !!i2469[19]
  i2468.m_IsTextObjectScaleStatic = !!i2469[20]
  var i2471 = i2469[21]
  var i2470 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2471.length; i += 2) {
  request.r(i2471[i + 0], i2471[i + 1], 1, i2470, '')
  }
  i2468.m_fallbackFontAssets = i2470
  i2468.m_matchMaterialPreset = !!i2469[22]
  request.r(i2469[23], i2469[24], 0, i2468, 'm_defaultSpriteAsset')
  i2468.m_defaultSpriteAssetPath = i2469[25]
  i2468.m_enableEmojiSupport = !!i2469[26]
  i2468.m_MissingCharacterSpriteUnicode = i2469[27]
  i2468.m_defaultColorGradientPresetsPath = i2469[28]
  request.r(i2469[29], i2469[30], 0, i2468, 'm_defaultStyleSheet')
  i2468.m_StyleSheetsResourcePath = i2469[31]
  request.r(i2469[32], i2469[33], 0, i2468, 'm_leadingCharacters')
  request.r(i2469[34], i2469[35], 0, i2468, 'm_followingCharacters')
  i2468.m_UseModernHangulLineBreakingRules = !!i2469[36]
  return i2468
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2474 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2475 = data
  i2474.hashCode = i2475[0]
  request.r(i2475[1], i2475[2], 0, i2474, 'material')
  i2474.materialHashCode = i2475[3]
  request.r(i2475[4], i2475[5], 0, i2474, 'spriteSheet')
  var i2477 = i2475[6]
  var i2476 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.add(request.d('TMPro.TMP_Sprite', i2477[i + 0]));
  }
  i2474.spriteInfoList = i2476
  var i2479 = i2475[7]
  var i2478 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2479.length; i += 2) {
  request.r(i2479[i + 0], i2479[i + 1], 1, i2478, '')
  }
  i2474.fallbackSpriteAssets = i2478
  i2474.m_Version = i2475[8]
  i2474.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2475[9], i2474.m_FaceInfo)
  var i2481 = i2475[10]
  var i2480 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2481.length; i += 1) {
    i2480.add(request.d('TMPro.TMP_SpriteCharacter', i2481[i + 0]));
  }
  i2474.m_SpriteCharacterTable = i2480
  var i2483 = i2475[11]
  var i2482 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.add(request.d('TMPro.TMP_SpriteGlyph', i2483[i + 0]));
  }
  i2474.m_SpriteGlyphTable = i2482
  return i2474
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2486 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2487 = data
  i2486.name = i2487[0]
  i2486.hashCode = i2487[1]
  i2486.unicode = i2487[2]
  i2486.pivot = new pc.Vec2( i2487[3], i2487[4] )
  request.r(i2487[5], i2487[6], 0, i2486, 'sprite')
  i2486.id = i2487[7]
  i2486.x = i2487[8]
  i2486.y = i2487[9]
  i2486.width = i2487[10]
  i2486.height = i2487[11]
  i2486.xOffset = i2487[12]
  i2486.yOffset = i2487[13]
  i2486.xAdvance = i2487[14]
  i2486.scale = i2487[15]
  return i2486
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2490 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2491 = data
  i2490.m_FaceIndex = i2491[0]
  i2490.m_FamilyName = i2491[1]
  i2490.m_StyleName = i2491[2]
  i2490.m_PointSize = i2491[3]
  i2490.m_Scale = i2491[4]
  i2490.m_UnitsPerEM = i2491[5]
  i2490.m_LineHeight = i2491[6]
  i2490.m_AscentLine = i2491[7]
  i2490.m_CapLine = i2491[8]
  i2490.m_MeanLine = i2491[9]
  i2490.m_Baseline = i2491[10]
  i2490.m_DescentLine = i2491[11]
  i2490.m_SuperscriptOffset = i2491[12]
  i2490.m_SuperscriptSize = i2491[13]
  i2490.m_SubscriptOffset = i2491[14]
  i2490.m_SubscriptSize = i2491[15]
  i2490.m_UnderlineOffset = i2491[16]
  i2490.m_UnderlineThickness = i2491[17]
  i2490.m_StrikethroughOffset = i2491[18]
  i2490.m_StrikethroughThickness = i2491[19]
  i2490.m_TabWidth = i2491[20]
  return i2490
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2494 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2495 = data
  i2494.m_Name = i2495[0]
  i2494.m_HashCode = i2495[1]
  i2494.m_ElementType = i2495[2]
  i2494.m_Unicode = i2495[3]
  i2494.m_GlyphIndex = i2495[4]
  i2494.m_Scale = i2495[5]
  return i2494
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2498 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2499 = data
  request.r(i2499[0], i2499[1], 0, i2498, 'sprite')
  i2498.m_Index = i2499[2]
  i2498.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2499[3], i2498.m_Metrics)
  i2498.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2499[4], i2498.m_GlyphRect)
  i2498.m_Scale = i2499[5]
  i2498.m_AtlasIndex = i2499[6]
  i2498.m_ClassDefinitionType = i2499[7]
  return i2498
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2500 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2501 = data
  i2500.m_Width = i2501[0]
  i2500.m_Height = i2501[1]
  i2500.m_HorizontalBearingX = i2501[2]
  i2500.m_HorizontalBearingY = i2501[3]
  i2500.m_HorizontalAdvance = i2501[4]
  return i2500
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2502 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2503 = data
  i2502.m_X = i2503[0]
  i2502.m_Y = i2503[1]
  i2502.m_Width = i2503[2]
  i2502.m_Height = i2503[3]
  return i2502
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2504 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2505 = data
  var i2507 = i2505[0]
  var i2506 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.add(request.d('TMPro.TMP_Style', i2507[i + 0]));
  }
  i2504.m_StyleList = i2506
  return i2504
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2510 = root || request.c( 'TMPro.TMP_Style' )
  var i2511 = data
  i2510.m_Name = i2511[0]
  i2510.m_HashCode = i2511[1]
  i2510.m_OpeningDefinition = i2511[2]
  i2510.m_ClosingDefinition = i2511[3]
  i2510.m_OpeningTagArray = i2511[4]
  i2510.m_ClosingTagArray = i2511[5]
  i2510.m_OpeningTagUnicodeArray = i2511[6]
  i2510.m_ClosingTagUnicodeArray = i2511[7]
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2513 = data
  var i2515 = i2513[0]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2515[i + 0]) );
  }
  i2512.files = i2514
  i2512.componentToPrefabIds = i2513[1]
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2519 = data
  i2518.path = i2519[0]
  request.r(i2519[1], i2519[2], 0, i2518, 'unityObject')
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2521 = data
  var i2523 = i2521[0]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2523[i + 0]) );
  }
  i2520.scriptsExecutionOrder = i2522
  var i2525 = i2521[1]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2525[i + 0]) );
  }
  i2520.sortingLayers = i2524
  var i2527 = i2521[2]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2527[i + 0]) );
  }
  i2520.cullingLayers = i2526
  i2520.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2521[3], i2520.timeSettings)
  i2520.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2521[4], i2520.physicsSettings)
  i2520.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2521[5], i2520.physics2DSettings)
  i2520.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2521[6], i2520.qualitySettings)
  i2520.enableRealtimeShadows = !!i2521[7]
  i2520.enableAutoInstancing = !!i2521[8]
  i2520.enableDynamicBatching = !!i2521[9]
  i2520.lightmapEncodingQuality = i2521[10]
  i2520.desiredColorSpace = i2521[11]
  var i2529 = i2521[12]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( i2529[i + 0] );
  }
  i2520.allTags = i2528
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2533 = data
  i2532.name = i2533[0]
  i2532.value = i2533[1]
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2537 = data
  i2536.id = i2537[0]
  i2536.name = i2537[1]
  i2536.value = i2537[2]
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2541 = data
  i2540.id = i2541[0]
  i2540.name = i2541[1]
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2543 = data
  i2542.fixedDeltaTime = i2543[0]
  i2542.maximumDeltaTime = i2543[1]
  i2542.timeScale = i2543[2]
  i2542.maximumParticleTimestep = i2543[3]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2545 = data
  i2544.gravity = new pc.Vec3( i2545[0], i2545[1], i2545[2] )
  i2544.defaultSolverIterations = i2545[3]
  i2544.bounceThreshold = i2545[4]
  i2544.autoSyncTransforms = !!i2545[5]
  i2544.autoSimulation = !!i2545[6]
  var i2547 = i2545[7]
  var i2546 = []
  for(var i = 0; i < i2547.length; i += 1) {
    i2546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2547[i + 0]) );
  }
  i2544.collisionMatrix = i2546
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2551 = data
  i2550.enabled = !!i2551[0]
  i2550.layerId = i2551[1]
  i2550.otherLayerId = i2551[2]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2553 = data
  request.r(i2553[0], i2553[1], 0, i2552, 'material')
  i2552.gravity = new pc.Vec2( i2553[2], i2553[3] )
  i2552.positionIterations = i2553[4]
  i2552.velocityIterations = i2553[5]
  i2552.velocityThreshold = i2553[6]
  i2552.maxLinearCorrection = i2553[7]
  i2552.maxAngularCorrection = i2553[8]
  i2552.maxTranslationSpeed = i2553[9]
  i2552.maxRotationSpeed = i2553[10]
  i2552.baumgarteScale = i2553[11]
  i2552.baumgarteTOIScale = i2553[12]
  i2552.timeToSleep = i2553[13]
  i2552.linearSleepTolerance = i2553[14]
  i2552.angularSleepTolerance = i2553[15]
  i2552.defaultContactOffset = i2553[16]
  i2552.autoSimulation = !!i2553[17]
  i2552.queriesHitTriggers = !!i2553[18]
  i2552.queriesStartInColliders = !!i2553[19]
  i2552.callbacksOnDisable = !!i2553[20]
  i2552.reuseCollisionCallbacks = !!i2553[21]
  i2552.autoSyncTransforms = !!i2553[22]
  var i2555 = i2553[23]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 1) {
    i2554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2555[i + 0]) );
  }
  i2552.collisionMatrix = i2554
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2559 = data
  i2558.enabled = !!i2559[0]
  i2558.layerId = i2559[1]
  i2558.otherLayerId = i2559[2]
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2561 = data
  var i2563 = i2561[0]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2563[i + 0]) );
  }
  i2560.qualityLevels = i2562
  var i2565 = i2561[1]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.push( i2565[i + 0] );
  }
  i2560.names = i2564
  i2560.shadows = i2561[2]
  i2560.anisotropicFiltering = i2561[3]
  i2560.antiAliasing = i2561[4]
  i2560.lodBias = i2561[5]
  i2560.shadowCascades = i2561[6]
  i2560.shadowDistance = i2561[7]
  i2560.shadowmaskMode = i2561[8]
  i2560.shadowProjection = i2561[9]
  i2560.shadowResolution = i2561[10]
  i2560.softParticles = !!i2561[11]
  i2560.softVegetation = !!i2561[12]
  i2560.activeColorSpace = i2561[13]
  i2560.desiredColorSpace = i2561[14]
  i2560.masterTextureLimit = i2561[15]
  i2560.maxQueuedFrames = i2561[16]
  i2560.particleRaycastBudget = i2561[17]
  i2560.pixelLightCount = i2561[18]
  i2560.realtimeReflectionProbes = !!i2561[19]
  i2560.shadowCascade2Split = i2561[20]
  i2560.shadowCascade4Split = new pc.Vec3( i2561[21], i2561[22], i2561[23] )
  i2560.streamingMipmapsActive = !!i2561[24]
  i2560.vSyncCount = i2561[25]
  i2560.asyncUploadBufferSize = i2561[26]
  i2560.asyncUploadTimeSlice = i2561[27]
  i2560.billboardsFaceCameraPosition = !!i2561[28]
  i2560.shadowNearPlaneOffset = i2561[29]
  i2560.streamingMipmapsMemoryBudget = i2561[30]
  i2560.maximumLODLevel = i2561[31]
  i2560.streamingMipmapsAddAllCameras = !!i2561[32]
  i2560.streamingMipmapsMaxLevelReduction = i2561[33]
  i2560.streamingMipmapsRenderersPerFrame = i2561[34]
  i2560.resolutionScalingFixedDPIFactor = i2561[35]
  i2560.streamingMipmapsMaxFileIORequests = i2561[36]
  i2560.currentQualityLevel = i2561[37]
  return i2560
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

Deserializers.buildID = "6bf75cd2-5646-4f18-a59c-1dc7c0e33ac3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

